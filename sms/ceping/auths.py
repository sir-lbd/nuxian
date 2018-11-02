#coding=utf-8

from rest_framework.permissions import *

from .models import *


class UserViewSetPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        # 允许读操作
        if request.method in SAFE_METHODS:
            return True
        # 允许管理员操作
        if request.user.role & ADMIN_USER_PERMISSION:
            return True
        if request.user.role & COMPANY_USER_PERMISSION:
            # 只能操作本企业员工
            if obj.person_user.company == request.user.person_user.company:
                # 企业管理员不能删除自己
                if request.method == "DELETE" and request.user == obj:
                    return False
                else:
                    return True
            else:
                return False
        if obj == request.user:
            return True
        return False


class CompanyPermission(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        else:
            user = request.user
            return getattr(user, "role", 0) & COMPANY_USER_PERMISSION


class CompanyViewSetPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        # 允许匿名创建企业
        if request.method == "POST":
            return True
        if request.user and request.user.is_authenticated:
            # 允许认证用户的读权限
            if request.method in SAFE_METHODS:
                return True
            # 允许管理员操作
            if request.user.role & ADMIN_USER_PERMISSION:
                return True
            # 允许企业操作自身
            if request.user.role & COMPANY_USER_PERMISSION:
                return True
            return False
        return False


class CompanyFrameworkModelViewSetPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        if request.user.role & ADMIN_USER_PERMISSION:
            return True
        # 允许本企业管理员操作
        if request.user.role & COMPANY_USER_PERMISSION and request.user.person_user.company == obj.company:
            return True
        return False


class CompanyLabelModelViewSetPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        if request.user.role & ADMIN_USER_PERMISSION:
            return True
        # 允许本企业管理员操作
        if request.user.role & COMPANY_USER_PERMISSION and request.user.person_user.company == obj.company:
            return True
        return False


class CompanyShopListModelViewSetPermission(BasePermission):
    # 读写操作都要求管理权限
    def has_object_permission(self, request, view, obj):
        if request.user.role & ADMIN_USER_PERMISSION:
            return True
        if request.user.role & COMPANY_USER_PERMISSION and request.user.person_user.company == obj.company:
            return True
        return False


class CompanyOrderModelViewSetPermission(BasePermission):
    # 读写操作都要求管理权限
    def has_object_permission(self, request, view, obj):
        if request.user.role & ADMIN_USER_PERMISSION:
            return True
        if request.user.role & COMPANY_USER_PERMISSION and request.user.person_user.company == obj.company:
            return True
        return False


class ProductsModelViewSetPermission(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        if request.user.role & ADMIN_USER_PERMISSION or request.user.role & COMPANY_USER_PERMISSION:
            return True
        return False


class OnlyAdminCanWritePermission(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        if request.user.role & ADMIN_USER_PERMISSION:
            return True
        return False

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        if request.user.role & ADMIN_USER_PERMISSION:
            return True
        return False


class QuestionModelViewSetPermission(OnlyAdminCanWritePermission):
    pass


class AssessmentModelViewSetPermission(OnlyAdminCanWritePermission):
    pass


class ContentModelViewSetPermission(OnlyAdminCanWritePermission):
    pass


class UserAnswerModelViewSetPermission(BasePermission):
    # 只允许自己读写
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class UserTestModelViewSetPermission(BasePermission):
    # 只允许自己读写
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class TestReportModelViewSetPermission(BasePermission):
    # 只允许自己读写
    def has_object_permission(self, request, view, obj):
        return request.user == obj.user_test.user


class AppraiserTitleModelViewSetPermission(OnlyAdminCanWritePermission):
    pass


class PriceModelViewSetPermission(OnlyAdminCanWritePermission):
    pass


class SystemConfigViewSetPermission(OnlyAdminCanWritePermission):
    pass


class OnlyAdminCanDeletePermission(BasePermission):
    def has_permission(self, request, view):
        if request.method == "DELETE":
            return request.user.role == ADMIN_USER_ROLE
        else:
            return True


class OnlyAdminCanCreatePermission(BasePermission):
    def has_permission(self, request, view):
        if request.method == "POST":
            return request.user.role == ADMIN_USER_ROLE
        else:
            return True

class OnlyAdminCanChangePermission(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        else:
            return request.user.role == ADMIN_USER_ROLE


