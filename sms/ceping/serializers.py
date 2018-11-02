# -*- coding: utf-8 -*-
from rest_framework import serializers
from ceping.models import *
from rest_framework.authtoken.serializers import AuthTokenSerializer
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.core.exceptions import ObjectDoesNotExist
import json
import logging

from . import task


logger = logging.getLogger('django')
CLIENT_CHOICE = {
    0:  PERSON_USER_PERMISSION,
    1: COMPANY_USER_PERMISSION,
    2: APPRAISER_USER_PERMISSION,
    3: ADMIN_USER_PERMISSION,
}


class LoginAuthTokenSerializer(AuthTokenSerializer):
    # openid = serializers.CharField(label='openid',required=False)
    client = serializers.IntegerField(label="client", required=True)


    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')
        client = attrs.get('client')
        # openid = attrs.get('openid')
        if username and password:
            user = authenticate(request=self.context.get('request'),
                                username=username, password=password)

            # The authenticate call simply returns None for is_active=False
            # users. (Assuming the default ModelBackend authentication
            # backend.)
            if not user:
                msg = u'账户或密码错误,或账户未被激活。'
                raise ValueError(msg)
            if not user.is_active:
                msg = u'账户未被激活，请及时联系管理员开通。'
                raise ValueError(msg)
            # if user.is_deleted:
            #     msg = 'Unable to log in with is_delet'
            #     raise serializers.ValidationError(msg, code='authorization')
            if user.is_deleted:
                msg = u'此账户已被删除，请及时联系管理员处理'
                raise ValueError(msg)
            if client is None or client not in CLIENT_CHOICE:
                msg = u"请选择登录类型0-3"
                raise ValueError(msg)
            elif not( user.role & CLIENT_CHOICE.get(client, 0)):
                msg = u"该账号不能登录该客户端"
                raise ValueError(msg)


        else:
            msg = u'请填写账号和密码。'
            raise ValueError(msg)

        attrs['user'] = user
        # attrs['openid'] = openid/
        return attrs

    def save(self):
        user = self.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return {'token': token.key,'user_id':user.id,}#'user': us.data


# 用户
class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = "__all__"


class CompanyPermissionModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyPermissionModel
        fields = "__all__"


class CompanyPositionModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyPositionModel
        fields = "__all__"
        # extra_kwargs = {""}


class PersonUserSimpleSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(required=False, read_only=True)
    class Meta:
        model = UserModel
        fields = ("id", "name")

    def get_name(self, user):
        return getattr(user.person_user, "name")


class PersonUserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonUserModel
        fields = "__all__"
        # exclude = ["user"]


class PersonUserSerializer(serializers.ModelSerializer):
    person_user = PersonUserModelSerializer(required=False)
    class Meta:
        model = UserModel
        fields = "__all__"


class PersonUserDesensitizedSerializer(serializers.ModelSerializer):
    person_user = PersonUserModelSerializer(required=False)
    class Meta:
        model = UserModel
        exclude = ['password', "role", "groups", "user_permissions", "is_superuser"]


class CompanyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyModel
        fields = "__all__"


class CompanyShopListModelSerializer(serializers.ModelSerializer):
    price = serializers.SerializerMethodField(read_only=True, required=False)
    class Meta:
        model = CompanyShopListModel
        fields = "__all__"

    def update(self, instance, validated_data):
        if "product" in validated_data:
            validated_data['detail'] = ""
        return super(CompanyShopListModelSerializer, self).update(instance, validated_data)

    def get_price(self, obj):
        return obj.price


class CompanyFrameworkModelSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyFrameworkModel
        fields = ("id", "name")


class CompanyFrameworkModelSerializer(serializers.ModelSerializer):
    members = serializers.SerializerMethodField(required=False, read_only=True)
    next_frameworks = serializers.SerializerMethodField(required=False, read_only=True)
    class Meta:
        model = CompanyFrameworkModel
        fields = "__all__"

    def get_members(self, frame):
        people = UserModel.objects.filter(person_user__framework=frame)
        return PersonUserSerializer(people, many=True).data

    def get_next_frameworks(self, frame):
        next_frameworks = frame.father_framework.all()
        return CompanyFrameworkModelSimpleSerializer(next_frameworks, many=True).data


class CompanyLabelModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyLabelModel
        fields = "__all__"





class CompanyOrderModelSerializer(serializers.ModelSerializer):
    detail_price = serializers.SerializerMethodField(read_only=True, required=False)
    class Meta:
        model = CompanyOrderModel
        fields = "__all__"
        depth = 1

    def get_detail_price(self, order):
        res = {"assessments": [], "reports": []}
        adict = {}
        rdict = {}
        tests = order.test_company_order.all()
        for test in tests:
            assessment_array = test.assessments.split(",") if test.assessments else []
            assessments = AssessmentModel.objects.filter(id__in=assessment_array)
            for assessment in assessments:
                adict.setdefault(assessment, {}).setdefault("count", 0)
                adict[assessment]['count'] += 1
                if test.appraiser_title:
                    rdict.setdefault(test.appraiser_title, {}).setdefault(assessment, {}).setdefault("count", 0)
                    rdict[test.appraiser_title][assessment]['count'] += 1
        for key, value in adict.items():
            value['sum_price'] = round(value['count'] * key.total_price, 2)
            value["assessment_id"] = key.id
            value['name'] = key.name
            res["assessments"].append(value)
        for key, value in rdict.items():
            tmp = []
            for k, v in value.items():
                price = getattr(PriceModel.objects.filter(appraiser_title=key, assessment=k).first(), "price", 0)
                v['sum_price'] = round(v['count'] * price, 2)
                v['assessment_id'] = k.id
                v['name'] = k.name
                tmp.append(v)
            res['reports'].append({"appraiser_title_id": key.id, "assessments": tmp, "title": key.title})
        return res


# 产品表
class ProductsModelSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(label="user_id", required=False)
    assessments_list = serializers.SerializerMethodField(required=False, read_only=True)
    products_list = serializers.SerializerMethodField(required=False, read_only=True)
    class Meta:
        model = ProductsModel
        fields = "__all__"

    def get_assessments_list(self, obj):
        data = []
        if obj.assessments:
            assessments = AssessmentModel.objects.filter(id__in=obj.assessments.split(","))
            data = AssessmentModelSerializer(assessments, many=True).data
        return data

    def get_products_list(self, obj):
        data = []
        if obj.products:
            products = ProductsModel.objects.filter(id__in=obj.products.split(","))
            data = ProductsModelSerializer(products, many=True).data
        return data

    def validate(self, attrs):
        user_id = attrs.get("user_id")

        if user_id is not None:
            user = UserModel.objects.get(pk=user_id)
            attrs["user"] = user
            del attrs["user_id"]

        return attrs


# 目录表拷贝
class ContentBaseModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentModel
        fields = "__all__"


# 试题
class QuestionModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionModel
        fields = "__all__"


# 目录表
class ContentModelSerializer(serializers.ModelSerializer):
    contents_parent = ContentBaseModelSerializer(many=True, read_only=True)
    contents_questions = QuestionModelSerializer(many=True, read_only=True)

    class Meta:
        model = ContentModel
        fields = "__all__"


# 价格表
class PriceModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceModel
        fields = "__all__"


# 量表
class AssessmentModelSerializer(serializers.ModelSerializer):
    price_assessment = PriceModelSerializer(many=True, read_only=True)
    assessment_content = ContentModelSerializer(many=True, read_only=True)

    class Meta:
        model = AssessmentModel
        fields = "__all__"


# 用户答题记录
class UserAnswerModelSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(label="user_id", required=False)
    test_id = serializers.IntegerField(label="test_id", required=False)
    assessment_id = serializers.IntegerField(label="assessment_id", required=False)
    question_id = serializers.IntegerField(label="question_id", required=False)

    class Meta:
        model = UserAnswerModel
        fields = "__all__"
        depth = 1

    def validate(self, attrs):
        user_id = attrs.get("user_id")
        test_id = attrs.get("test_id")
        assessment_id = attrs.get("assessment_id")
        question_id = attrs.get("question_id")

        if user_id is not None:
            attrs['user'] = UserModel.objects.get(pk=user_id)
            del attrs["user_id"]
        if test_id is not None:
            attrs['test'] = UserTestModel.objects.get(pk=test_id)
            del attrs["test_id"]
        if assessment_id is not None:
            attrs['assessment'] = AssessmentModel.objects.get(pk=assessment_id)
            del attrs["assessment_id"]
        if question_id is not None:
            attrs['question'] = QuestionModel.objects.get(pk=question_id)
            del attrs["question_id"]

        return attrs

    def create(self, validated_data):
        user = validated_data.get("user")
        test = validated_data.get("test")
        assessment = validated_data.get("assessment")
        question = validated_data.get("question")

        answer = self.Meta.model.objects.filter(user=user,
                                                test=test,
                                                assessment=assessment,
                                                question=question
                                                ).first()
        if answer:
            return self.update(answer, validated_data)
        else:
            return super(UserAnswerModelSerializer, self).create(validated_data)


class UserTestModelSerializer(serializers.ModelSerializer):
    user_id = serializers.IntegerField(label="user_id", required=False)
    product = serializers.SerializerMethodField(read_only=True, required=False)
    class Meta:
        model = UserTestModel
        fields = "__all__"
        depth = 1
        read_only_fields = ['user']

    def get_product(self, test):
        product = {}
        product.update(ProductsModelSerializer(test.company_order.product).data)
        product['assessments'] = test.assessments
        assessments_array = product['assessments'].split(",") if product['assessments'] else []
        assessments = AssessmentModel.objects.filter(id__in=assessments_array)
        product['num'] = len(assessments)
        product['consum_time'] = sum([a.consum_time for a in assessments])
        product['qnum'] = sum([a.num for a in assessments])
        return product

    def validate(self, attrs):
        user_id = attrs.get("user_id")

        if user_id is not None:
            user = UserModel.objects.get(pk=user_id)
            attrs['user'] = user
            del attrs["user_id"]

        return attrs

    def create(self, validated_data):
        user = validated_data.get("user")
        test, created = self.Meta.model.objects.update_or_create(user=user,
                                                                defaults=validated_data
                                                                )
        if created:
            test.assessments = test.product.assessments
            test.save()
        return test

    def update(self, instance, validated_data):
        if "end_date" in validated_data:
            assessments = instance.assessments.split(",") if instance.assessments else []
            for aid in assessments:
                report, created = TestReportModel.objects.get_or_create(user_test=instance, assessment_id=aid)
                report.generate_report()
        return super(UserTestModelSerializer, self).update(instance, validated_data)


# 答题记录
class AnswerQuestionSerializer(serializers.Serializer):
    user_id = serializers.IntegerField(label="user_id", required=True)
    test_id = serializers.IntegerField(label="test_id", required=True)
    question_id = serializers.IntegerField(label="question_id", required=True)
    answer = serializers.CharField(label="answer", required=True)
    consum_time = serializers.IntegerField(label="consum_time", required=True)

    class Meta:
        model = UserAnswerModel
        fields = "__all__"
        depth = 1
        read_only_fields = ['user', "test", "question"]

    def validate(self, attrs):
        user_id = attrs.get('user_id')
        test_id = attrs.get('test_id')
        question_id = attrs.get('question_id')

        user = UserModel.objects.filter(id=user_id).first()
        if not user:
            msg = {u'用户数据': u'异常'}
            raise serializers.ValidationError(msg)

        test = UserTestModel.objects.filter(id=test_id).first()
        if not test:
            msg = {u'测评数据': u'未获取到'}
            raise serializers.ValidationError(msg)

        question = QuestionModel.objects.filter(id=question_id).first()
        if not question:
            msg = {u'试题数据': u'未获取到'}
            raise serializers.ValidationError(msg)

        attrs['user'] = user
        attrs['test'] = test
        attrs['question'] = question
        return attrs

    def create(self, validated_data):
        user = validated_data['user']
        question = validated_data['question']
        test = validated_data['test']
        user_answer, created = self.Meta.model.objects.update_or_create(user=user, test=test,
                                                                        question=question,
                                                                        defaults=validated_data
                                                                        )
        return user_answer


# 测试报告表
class TestReportModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestReportModel
        fields = "__all__"
        depth = 1




# 测评师职称
class AppraiserTitleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppraiserTitleModel
        fields = "__all__"



# 测评师
class AppraiserModelSerializer(serializers.ModelSerializer):
    title_name = AppraiserTitleModelSerializer(many=False, read_only=True)
    class Meta:
        model = AppraiserModel
        fields = "__all__"


# 价格表
class PriceModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceModel
        fields = "__all__"


# 系统配置表
class SystemConfigModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemConfigModel
        fields = "__all__"



