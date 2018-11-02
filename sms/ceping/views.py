# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import copy
from rest_framework import viewsets, routers, parsers, renderers, status, mixins
from rest_framework.filters import SearchFilter,OrderingFilter
from rest_framework_filters.backends import DjangoFilterBackend
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse, Http404
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db import transaction
from .models import *
from .filter import *
from .serializers import *
from .auths import *
from .filter_backends import *


router = routers.DefaultRouter()


class LoginApiView(ObtainAuthToken):
    """
    登陆
    """
    serializer_class = LoginAuthTokenSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        try:
            serializer.is_valid(raise_exception=True)
        except ValueError as e:
            return Response({"error_code": 1, "msg": e.message})
        result = serializer.save()
        result['error_code'] = 0
        return Response(result)


class PersonUserViewSet(viewsets.ModelViewSet):
    """
    个人用户
    """
    queryset = UserModel.objects.all().order_by("id")
    serializer_class = PersonUserDesensitizedSerializer
    permission_classes = (IsAuthenticated, UserViewSetPermission)
    filter_class = UserModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter, CompanyPersonUserFilterBackend)

    def create(self, request, *args, **kwargs):
        try:
            with transaction.atomic():
                # create person type user
                data = copy.deepcopy(request.data)

                data['role'] = PERSON_USER_ROLE
                serializer = PersonUserSerializer(data=data)
                serializer.is_valid(raise_exception=True)
                user = UserModel.objects.create_user(**serializer.validated_data)
                data['user'] = user.id
                data['company'] = request.user.person_user.company.id
                profile_serializer = PersonUserModelSerializer(data=data)
                profile_serializer.is_valid(raise_exception=True)
                profile_serializer.save()
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        return Response(self.get_serializer(user).data, status=status.HTTP_201_CREATED)

    @detail_route(methods=["POST"])
    def change_password(self, request, *args, **kwargs):
        user = self.get_object()
        if user != request.user:
            return  Response({"error_code": 1, "msg": u"账号校验失败"})
        old_password = request.data.get("password")
        new_password = request.data.get("new_password")
        if old_password and new_password:
            if user.check_password(old_password):
                user.set_password(new_password)
                return Response({"error_code": 0, "msg": "ok"})
            else:
                return Response({"error_code": 1, "msg": u"密码校验失败"})
        else:
            return Response({"error_code": 2, "msg": "params error"}, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, *args, **kwargs):
        data = copy.deepcopy(request.data)
        user = self.get_object()
        profile_serializer = PersonUserModelSerializer(instance=user.person_user, data=data)
        profile_serializer.is_valid(raise_exception=True)
        profile_serializer.save()
        return Response(self.get_serializer(user).data)


router.register('personuser', PersonUserViewSet, base_name='personuser')


class CompanyModelViewSet(viewsets.ModelViewSet):
    queryset = CompanyModel.objects.all()
    serializer_class = CompanyModelSerializer
    permission_classes = (CompanyViewSetPermission, OnlyAdminCanDeletePermission)
    filter_class = CompanyModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter, CompanyFilterBackend)

    def create(self, request, *args, **kwargs):
        try:
            with transaction.atomic():
                data = copy.deepcopy(request.data)
                # create company
                serializer = self.serializer_class(data=data)
                serializer.is_valid(raise_exception=True)
                company = serializer.save()
                # create user
                data['role'] = COMPANY_USER_ROLE
                data['is_owner'] = True
                serializer = UserModelSerializer(data=data)
                serializer.is_valid(raise_exception=True)
                user = UserModel.objects.create_user(**serializer.validated_data)
                # create user profile
                data['user'] = user.id
                data['company'] = company.id
                profile_serializer = PersonUserModelSerializer(data=data)
                profile_serializer.is_valid(raise_exception=True)
                profile_serializer.save()
        except Exception as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)
        return Response(self.get_serializer(company).data, status=status.HTTP_201_CREATED)

    @detail_route()
    def frameworks(self, request, *args, **kwargs):
        company = self.get_object()
        framework_set = CompanyFrameworkModel.objects.filter(company=company).order_by("id")
        member_set = UserModel.objects.filter(person_user__company=company, person_user__framework=None).order_by("id")

        return Response({"frameworks": CompanyFrameworkModelSimpleSerializer(framework_set, many=True).data,
                         "members": PersonUserSimpleSerializer(member_set, many=True).data,
                         "company": CompanyModelSerializer(company).data
                        })

    @detail_route()
    def labels(self, request, *args, **kwargs):
        company = self.get_object()
        label_set = CompanyLabelModel.objects.filter(company=company).order_by("id")
        return Response({
            "labels": CompanyLabelModelSerializer(label_set, many=True).data,
            "company": CompanyModelSerializer(company).data
        })

router.register('companymodel', CompanyModelViewSet, base_name='companymodel')


class CompanyPermissionModelViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CompanyPermissionModel.objects.all().order_by("id")
    serializer_class = CompanyPermissionModelSerializer
    # permission_classes = (IsAuthenticated, OnlyAdminCanChangePermission)
    permission_classes = (AllowAny,)
    filter_class = CompanyPermissionModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter)


router.register('companypermissionmodel', CompanyPermissionModelViewSet, base_name='companypermissionmodel')


class CompanyPositionModelViewSet(viewsets.ModelViewSet):
    queryset = CompanyPositionModel.objects.all().order_by("id")
    serializer_class = CompanyPositionModelSerializer
    # permission_classes = (IsAuthenticated, CompanyPermission)
    permission_classes = (AllowAny,)
    filter_class = CompanyPositionModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter)


router.register('companypositionmodel', CompanyPositionModelViewSet, base_name='companypositionmodel')


class CompanyMemberAPI(viewsets.ReadOnlyModelViewSet):
    queryset = UserModel.objects.all().order_by("id")
    serializer_class = PersonUserDesensitizedSerializer
    permission_classes = (IsAuthenticated, CompanyPermission)
    filter_class = UserModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter, CompanyMemberFilterBackend)

    # 临时重写，不分页
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response({"results": serializer.data})


router.register('company_member', CompanyMemberAPI, base_name='company_member')


class CompanyFrameworkModelViewSet(viewsets.ModelViewSet):
    queryset = CompanyFrameworkModel.objects.all().order_by("id")
    serializer_class = CompanyFrameworkModelSerializer
    permission_classes = (IsAuthenticated, CompanyFrameworkModelViewSetPermission)
    filter_class = CompanyFrameworkModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter, CompanyFrameworkFilterBackend)

    @detail_route()
    def members(self, request, *args, **kwargs):
        framework = self.get_object()
        framework_set = framework.father_framework.all()
        member_set = UserModel.objects.filter(person_user__framework=framework)

        return Response({"frameworks": CompanyFrameworkModelSimpleSerializer(framework_set, many=True).data,
                         "members": PersonUserSimpleSerializer(member_set, many=True).data,
                         })


router.register('companyframeworkmodel', CompanyFrameworkModelViewSet, base_name='companyframeworkmodel')


class CompanyLabelModelViewSet(viewsets.ModelViewSet):
    queryset = CompanyLabelModel.objects.all().order_by("id")
    serializer_class = CompanyLabelModelSerializer
    filter_class = CompanyLabelModelFilter
    permission_classes = (IsAuthenticated, CompanyLabelModelViewSetPermission)
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter, CompanyLabelFilterBackend)

    @detail_route()
    def members(self, request, *args, **kwargs):
        label = self.get_object()
        staffs_data = []
        if label.staffs:
            staff_set = UserModel.objects.filter(id__in=label.staffs.split(","))
            staffs_data = PersonUserSimpleSerializer(staff_set, many=True).data
        leaders_data = []
        if label.leaders:
            leader_set = UserModel.objects.filter(id__in=label.leaders.split(","))
            leaders_data = PersonUserSimpleSerializer(leader_set, many=True).data
        return Response({
            "staffs": staffs_data,
            "leaders": leaders_data,
        })

    @detail_route(methods=['PUT'])
    def add(self, request, *args, **kwargs):
        label = self.get_object()
        staffs = request.data.get("staffs", "")
        leaders = request.data.get("leaders", "")
        if staffs:
            staffs = staffs.split(",")
            label_staffs = label.staffs.split(",")
            _ = [staff for staff in staffs + label_staffs if staff]
            label.staffs = ",".join(sorted(set(_)))
        if leaders:
            leaders = leaders.split(",")
            label_leaders =  label.leaders.split(",")
            _ = [leader for leader in leaders + label_leaders if leader]
            label.leaders = ",".join(sorted(set(_)))
        label.save()
        return Response(CompanyLabelModelSerializer(label).data)

    @detail_route(methods=["PUT"])
    def remove(self, request, *args, **kwargs):
        label = self.get_object()
        staffs = request.data.get("staffs", "")
        leaders = request.data.get("leaders", "")
        if staffs:
            label_staffs = label.staffs.split(",")
            _ = set(label_staffs).difference(set(staffs.split(",")))
            label.staffs = ",".join(sorted(_))
        if leaders:
            label_leaders = label.leaders.split(",")
            _ = set(label_leaders).difference(set(leaders.split(",")))
            label.leaders = ",".join(sorted(_))
        label.save()
        return Response(CompanyLabelModelSerializer(label).data)


router.register('companylabelmodel', CompanyLabelModelViewSet, base_name='companylabelmodel')


class CompanyShopListModelViewSet(viewsets.ModelViewSet):
    queryset = CompanyShopListModel.objects.all()
    serializer_class = CompanyShopListModelSerializer
    filter_class = CompanyShopListModelFilter
    permission_classes = (IsAuthenticated, CompanyShopListModelViewSetPermission, OnlyAdminCanDeletePermission)
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter, CompanyShopListFilterBackend)

    def create(self, request, *args, **kwargs):
        company = request.user.person_user.company
        # CompanyShopListModel.objects.filter(company=company).delete()
        request.data['company'] = company.id
        return super(CompanyShopListModelViewSet, self).create(request, *args, **kwargs)

    @detail_route(methods=['GET'])
    def detail_info(self, request, *args, **kwargs):
        res = []
        shop_list = self.get_object()
        detail = json.loads(shop_list.detail)
        for d in detail:
            user = UserModel.objects.get(pk=d['user'])
            assessments = AssessmentModel.objects.filter(id__in=[
                assessment for assessment in d['assessments'].split(",") if assessment
            ])
            appraiser_title = AppraiserTitleModel.objects.filter(pk=d['appraiser_title']).first()
            appraiser_title_ids = []
            if appraiser_title:
                if appraiser_title.id > 0:
                    appraiser_title_ids = [0, appraiser_title.id]
                elif appraiser_title.id == 0:
                    appraiser_title_ids = [0]
            price_list = PriceModel.objects.filter(assessment__in=assessments, appraiser_title__in=appraiser_title_ids)
            report_price = sum([p.price for p in price_list])
            assessment_price = sum([a.total_price for a in assessments])

            res.append({
                "user": PersonUserSerializer(user).data,
                "assessments": AssessmentModelSerializer(assessments, many=True).data,
                'appraiser_title': AppraiserTitleModelSerializer(appraiser_title).data,
                "price": round(report_price + assessment_price, 2)
            })
        return Response(res)


router.register('companyshoplistmodel', CompanyShopListModelViewSet, base_name='companyshoplistmodel')


class CompanyOrderModelViewSet(viewsets.ModelViewSet):
    queryset = CompanyOrderModel.objects.all()
    serializer_class = CompanyOrderModelSerializer
    filter_class = CompanyOrderModelFilter
    permission_classes = (IsAuthenticated, CompanyOrderModelViewSetPermission, OnlyAdminCanDeletePermission)
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter, CompanyOrderFilterBackend)

    def create(self, request, *args, **kwargs):
        shop_list = get_object_or_404(CompanyShopListModel,
                                      pk=request.data.get("company_shop_list")
                                      )
        if shop_list.product_id != request.data.get("product"):
            return Response(u"产品数据与清单不符", status=status.HTTP_400_BAD_REQUEST)
        order_data = {
            "product": shop_list.product,
            "company": request.user.person_user.company,
            "price": shop_list.price
        }
        order = CompanyOrderModel.objects.create(**order_data)
        for detail in json.loads(shop_list.detail):
            test_data = {
                "user_id": detail.get("user"),
                "assessments": detail.get("assessments"),
                "appraiser_title_id": detail.get("appraiser_title"),
                "company_order_id": order.id
            }
            test = UserTestModel.objects.create(**test_data)
        shop_list.delete()
        return Response(CompanyOrderModelSerializer(order).data, status=status.HTTP_201_CREATED)


router.register('companyordermodel', CompanyOrderModelViewSet, base_name='companyordermodel')


class ProductsModelViewSet(viewsets.ModelViewSet):
    """
    企业产品表
    """
    queryset = ProductsModel.objects.all().order_by('id')
    serializer_class = ProductsModelSerializer
    permission_classes = (IsAuthenticated, ProductsModelViewSetPermission, OnlyAdminCanDeletePermission)
    filter_class = ProductsModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter)

router.register('productsmodel', ProductsModelViewSet, base_name='productsmodel')


class QuestionModelViewSet(viewsets.ModelViewSet):
    """
    试题表
    """
    queryset = QuestionModel.objects.all().order_by("id")
    serializer_class = QuestionModelSerializer
    permission_classes = (IsAuthenticated, QuestionModelViewSetPermission)
    filter_class = QuestionModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter)

    # 临时去掉测试题
    def get_queryset(self):
        queryset = super(QuestionModelViewSet, self).get_queryset()
        return queryset.exclude(Qid__contains="PQ")

    @list_route(methods=['GET'])
    def practice(self, request, *args, **kwargs):
        queryset = self.filter_queryset(super(QuestionModelViewSet, self).get_queryset())
        queryset = queryset.filter(Qid__contains="PQ")
        queryset = self.filter_queryset(queryset)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


router.register('questionmodel', QuestionModelViewSet, base_name='questionmodel')


class AssessmentModelViewSet(viewsets.ModelViewSet):
    """
    量表
    """
    queryset = AssessmentModel.objects.all().order_by("id")
    permission_classes = (IsAuthenticated, AssessmentModelViewSetPermission)
    serializer_class = AssessmentModelSerializer
    filter_class = AssessmentModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter)


router.register('assessmentmodel', AssessmentModelViewSet, base_name='assessmentmodel')


class ContentModelViewSet(viewsets.ModelViewSet):
    """
    目录表
    """
    queryset = ContentModel.objects.all()
    permission_classes = (IsAuthenticated, ContentModelViewSetPermission)
    serializer_class = ContentModelSerializer
    filter_class = ContentModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter)


router.register('contentmodel', ContentModelViewSet, base_name='contentmodel')


class UserAnswerModelViewSet(viewsets.ModelViewSet):
    """
    用户测评记录
    """
    queryset = UserAnswerModel.objects.all()
    serializer_class = UserAnswerModelSerializer
    permission_classes = (IsAuthenticated, UserAnswerModelViewSetPermission, OnlyAdminCanDeletePermission)
    filter_class = UserAnswerModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter, UserAnswerFilterBackend)


router.register('useranswermodel', UserAnswerModelViewSet, base_name='useranswermodel')


class UserTestModelViewSet(viewsets.ModelViewSet):
    queryset = UserTestModel.objects.all()
    serializer_class = UserTestModelSerializer
    filter_class = UserTestModelFilter
    permission_classes = (IsAuthenticated, UserTestModelViewSetPermission, OnlyAdminCanDeletePermission)
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter, UserTestFilterBackend)

    def get_queryset(self):
        if getattr(self.request.user, "role") == PERSON_USER_ROLE:
            self.queryset = self.queryset.filter(company_order__status=PAID_ORDER_STATUS)
        return self.queryset

    @detail_route()
    def test_consum_time(self, request, *args, **kwargs):
        test = self.get_object()
        consum_time = sum([a.consum_time for a in test.answer_test.all()])

        return JsonResponse({"test_id": test.id, "consum_time": consum_time})


    # 根据类型获取评价报告的某部分
    @detail_route()
    def part_report(self, request, *args, **kwargs):
        test = self.get_object()
        type_ = request.GET.get("type")
        assessment_id = request.GET.get("assessment_id")
        if test.end_date is None:
            return Response("test is continued, please update end_time", status=status.HTTP_400_BAD_REQUEST)

        report = test.report_test.filter(assessment_id=assessment_id).first()
        if not report:
            return Response("no such report", status=status.HTTP_404_NOT_FOUND)

        if not report.report:
            report.generate_report()
        data = json.loads(report.report)
        if type_ == "16":
            _ = data.get('assessments', [])[:16]
        elif type_ == "x":
            _ = [a for a in data.get("assessments", []) if "x" in a['assessment_id'].lower()]
        elif type_ == "y":
            _ = [a for a in data.get("assessments", []) if "y" in a['assessment_id'].lower()]
        else:
            _ = data
        return JsonResponse(_, safe=False)


router.register('usertestmodel', UserTestModelViewSet, base_name='usertestmodel')


class TestReportModelViewSet(viewsets.ReadOnlyModelViewSet):
    """
    测试报告表
    """
    queryset = TestReportModel.objects.all()
    serializer_class = TestReportModelSerializer
    permission_classes = (IsAuthenticated, TestReportModelViewSetPermission, OnlyAdminCanDeletePermission)
    filter_class = TestReportModelFilter
    # 筛选条件等授权之后做
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter)


router.register('testreportmodel', TestReportModelViewSet, base_name='testreportmodel')


class AppraiserTitleModelViewSet(viewsets.ModelViewSet):
    """
    测评师职称
    """
    queryset = AppraiserTitleModel.objects.all()
    serializer_class = AppraiserTitleModelSerializer
    permission_classes = (IsAuthenticated, AppraiserTitleModelViewSetPermission)
    filter_class = AppraiserTitleModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter)


router.register('appraisertitlemodel', AppraiserTitleModelViewSet, base_name='appraisertitlemodel')


# 可能需要后续修改
class AppraiserModelViewSet(viewsets.ModelViewSet):
    """
    测评师
    """
    queryset = AppraiserModel.objects.all()
    serializer_class = AppraiserModelSerializer
    permission_classes = (IsAuthenticated, OnlyAdminCanDeletePermission, OnlyAdminCanCreatePermission)
    filter_class = AppraiserModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter)


router.register('appraisermodel', AppraiserModelViewSet, base_name='appraisermodel')


class PriceModelViewSet(viewsets.ModelViewSet):
    """
    企业产品表
    """
    queryset = PriceModel.objects.all()
    serializer_class = PriceModelSerializer
    permission_classes = (IsAuthenticated, PriceModelViewSetPermission)
    filter_class = PriceModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter)


router.register('pricemodel', PriceModelViewSet, base_name='pricemodel')



class SystemConfigViewSet(viewsets.ModelViewSet):
    """
    系统设置表
    """
    queryset = SystemConfigModel.objects.all()
    permission_classes = (SystemConfigViewSetPermission, )
    serializer_class = SystemConfigModelSerializer
    filter_class = SystemConfigModelFilter
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter)

router.register('systemconfigmodel', SystemConfigViewSet, base_name='systemconfigmodel')

