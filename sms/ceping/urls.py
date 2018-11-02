#!/usr/bin/env python
# encoding: utf-8

"""
@version: v1.0
@author: zhangyang
@license: Apache Licence
@contact: 302773974@qq.com
@site: http://sms-mall.wei7star.com
@software: PyCharm
@file: urls.py
@time: 2018/9/6 下午3:27
"""
from django.conf.urls import url, include
import views

urlpatterns = [
    url(r"^", include(views.router.urls)),
    url(r'login/$', views.LoginApiView.as_view()),
    # url(r'company_member/$', views.CompanyMemberAPI.as_view()),
    # url(r'testreportmodel/$', views.TestReportModelViewSet.as_view({'get': 'list'})),
]