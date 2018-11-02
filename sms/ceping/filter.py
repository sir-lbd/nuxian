# -*- coding: utf-8 -*-
from models import *
import rest_framework_filters as rest_filter




# 用户
class UserModelFilter(rest_filter.FilterSet):
    class Meta:
        model = UserModel
        fields = {
            u'id': '__all__',
            u'username': '__all__',
            u'is_deleted': '__all__'
        }


class CompanyPermissionModelFilter(rest_filter.FilterSet):
    class Meta:
        model = CompanyPermissionModel
        fields = {
            "id": "__all__",
            "name": "__all__",
            "codename": "__all__",
        }


class CompanyPositionModelFilter(rest_filter.FilterSet):
    class Meta:
        model = CompanyPositionModel
        fields = {
            "id": "__all__",
            "name": "__all__"
        }


class CompanyModelFilter(rest_filter.FilterSet):
    class Meta:
        model = CompanyModel
        fields = {
            "id": "__all__",
            "name": "__all__",
        }


class CompanyShopListModelFilter(rest_filter.FilterSet):
    class Meta:
        model = CompanyShopListModel
        fields = {
            "id": "__all__",
            "company": "__all__",
            "product": "__all__",
            "appraiser_title": "__all__",
            "detail": "__all__"
        }


class CompanyOrderModelFilter(rest_filter.FilterSet):
    class Meta:
        model = CompanyOrderModel
        fields = {
            "id": "__all__",
            "product": "__all__",
            "company": "__all__",
            "price": "__all__",
            "status": "__all__",
            "create_date": "__all__",
        }


class CompanyFrameworkModelFilter(rest_filter.FilterSet):
    class Meta:
        model = CompanyFrameworkModel
        fields = {
            "id": "__all__",
            "company": "__all__",
            "father": "__all__",
            "name": "__all__",
        }


class CompanyLabelModelFilter(rest_filter.FilterSet):
    class Meta:
        model = CompanyLabelModel
        fields = {
            "id": "__all__",
            "company": "__all__",
            "name": "__all__",
            "staffs": "__all__",
            "leaders": "__all__",
        }



# 产品
class ProductsModelFilter(rest_filter.FilterSet):
    class Meta:
        model = ProductsModel
        fields = {
            u'id': '__all__',
            u'user': '__all__',
            u'user_id': '__all__',
            u'name': '__all__',
            u'products_describe': '__all__',
            u'assessments': '__all__',
            u'qnum': '__all__',
            u'num': '__all__',
            u'consum_time': '__all__',
            u'create_time': '__all__',
            u'end_time': '__all__',
            u'start_time': '__all__',
            "brand": "__all__",
            "scene": "__all__",
            "is_official": "__all__"
        }


# 量表
class AssessmentModelFilter(rest_filter.FilterSet):
    class Meta:
        model = AssessmentModel
        fields = {
            u'id': '__all__',
            u'Aid': '__all__',
            u'name': '__all__',
            u'introduce': '__all__',
            u'image_url': '__all__',
            u'num': '__all__',
            u'consum_time': '__all__',
            u'sort': '__all__',
            u'status': '__all__',
            u'create_time': '__all__',
        }


# 目录表
class ContentModelFilter(rest_filter.FilterSet):
    class Meta:
        model = ContentModel
        fields = {
            u'id': '__all__',
            u'Cid': '__all__',
            u'assessment': '__all__',
            u'content': '__all__',
            u'type': '__all__',
            u'summary': '__all__',
            u'summary_url': '__all__',
            u'create_time': '__all__',
        }


# 试题表
class QuestionModelFilter(rest_filter.FilterSet):
    class Meta:
        model = QuestionModel
        fields = {
        u'id': '__all__',
        u'Qid': '__all__',
        u'content': '__all__',
        u'type': '__all__',
        u'title': '__all__',
        u'title_img': '__all__',
        u'option': '__all__',
        u'create_time': '__all__',
        }


# 用户测试表
class UserTestModelFilter(rest_filter.FilterSet):
    class Meta:
        model = UserTestModel
        fields = {
            u'id': '__all__',
            u'user': '__all__',
            u'assessments': '__all__',
            u'create_time': "__all__",
            u'start_date': '__all__',
            u'end_date': '__all__',
            u'curr_num': '__all__',
        }


# 用户测评记录
class UserAnswerModelFilter(rest_filter.FilterSet):
    class Meta:
        model = UserAnswerModel
        fields = {
            u'id': '__all__',
            u'user': '__all__',
            u'test': '__all__',
            "assessment": "__all__",
            u'question': '__all__',
            u'answer': '__all__',
            u'create_date': '__all__',
            u'consum_time': '__all__',
        }


# 测试报告表
class TestReportModelFilter(rest_filter.FilterSet):
    class Meta:
        model = TestReportModel
        fields = {
            u'id': '__all__',
            "user_test": '__all__',
            "assessment": '__all__',
            "report": '__all__',
            "create_time": '__all__'
        }


# 测评师职称
class AppraiserTitleModelFilter(rest_filter.FilterSet):
    class Meta:
        model = AppraiserTitleModel
        fields = {
            "id": "__all__",
            "title": "__all__",
            "is_person": "__all__",
            "description": "__all__"
        }


# 测评师
class AppraiserModelFilter(rest_filter.FilterSet):
    class Meta:
        model = AppraiserModel
        fields = '__all__'


# 价格表
class PriceModelFilter(rest_filter.FilterSet):
    class Meta:
        model = PriceModel
        fields = {
            "id": "__all__",
            "assessment": "__all__",
            "appraiser_title": "__all__",
            "price": "__all__",
        }


# 系统配置表
class SystemConfigModelFilter(rest_filter.FilterSet):
    class Meta:
        model = SystemConfigModel
        # fields = {
        #     "id": "__all__",
        #     "field_name": "__all__",
        #     "field_value": "__all__",
        # }
        fields = "__all__"







