#coding=utf-8
"""
@Project: ceping
@Date: 2018/10/25
@PC: qinglong001
"""
from .models import *


class CompanyPersonUserFilterBackend(object):
    def filter_queryset(self, request, queryset, view):
        user = request.user
        if user.role & ADMIN_USER_PERMISSION:
            return queryset
        elif user.role & COMPANY_USER_PERMISSION:
            return queryset.filter(person_user__company=user.person_user.company)
        else:
            return queryset.filter(id=user.id)


class CompanyMemberFilterBackend(object):
    def filter_queryset(self, request, queryset, view):
        user = request.user
        if user.role & ADMIN_USER_PERMISSION:
            return queryset
        if user.role & PERSON_USER_PERMISSION:
            return queryset.filter(person_user__company=user.person_user.company)
        return queryset.none()


class CompanyFilterBackend(object):
    def filter_queryset(self, request, queryset, view):
        user = request.user
        if user.role & ADMIN_USER_PERMISSION:
            return queryset
        if user.role & PERSON_USER_PERMISSION:
            return queryset.filter(id=user.person_user.company.id)
        return queryset.none()


class CompanyFrameworkFilterBackend(object):
    def filter_queryset(self, request, queryset, view):
        user = request.user
        if user.role & ADMIN_USER_PERMISSION:
            return queryset
        if user.role & PERSON_USER_PERMISSION:
            return queryset.filter(company=user.person_user.company)
        return queryset.none()


class CompanyLabelFilterBackend(object):
    def filter_queryset(self, request, queryset, view):
        if request.user.role & ADMIN_USER_PERMISSION:
            return queryset
        if request.user.role & PERSON_USER_PERMISSION:
            return queryset.filter(company=request.user.person_user.company)
        return queryset.none()


class CompanyShopListFilterBackend(object):
    def filter_queryset(self, request, queryset, view):
        if request.user.role & ADMIN_USER_PERMISSION:
            return queryset
        if request.user.role & COMPANY_USER_PERMISSION:
            return queryset.filter(company=request.user.person_user.company)
        return request.none()


class CompanyOrderFilterBackend(object):
    def filter_queryset(self, request, queryset, view):
        if request.user.role & ADMIN_USER_PERMISSION:
            return queryset
        if request.user.role & COMPANY_USER_PERMISSION:
            return queryset.filter(company=request.user.person_user.company)
        return request.none()


class UserAnswerFilterBackend(object):
    # 只有自己可查看自己的答案
    def filter_queryset(self, request, queryset, view):
        return queryset.filter(user=request.user)



class UserTestFilterBackend(object):
    # 只有自己可以查看测试记录
    def filter_queryset(self, request, queryset, view):
        return queryset.filter(user=request.user)

