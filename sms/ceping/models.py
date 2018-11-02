# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import json
from django.db import models
from django.contrib.auth.models import AbstractUser, Group
import re
from django.core import validators
from django.utils import six
from django.utils.deconstruct import deconstructible
from django.utils.translation import ugettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver

from . import task


# permission
PERSON_USER_PERMISSION = 0b1
COMPANY_USER_PERMISSION = 0b10
APPRAISER_USER_PERMISSION = 0b100
ADMIN_USER_PERMISSION = 0x1000
# role
ADMIN_USER_ROLE = PERSON_USER_PERMISSION | COMPANY_USER_PERMISSION | APPRAISER_USER_PERMISSION | ADMIN_USER_PERMISSION
COMPANY_USER_ROLE = PERSON_USER_PERMISSION | COMPANY_USER_PERMISSION
PERSON_USER_ROLE = PERSON_USER_PERMISSION
APPRAISER_USER_ROLE = APPRAISER_USER_PERMISSION
#order status
UNPAY_ORDER_STATUS = 0
PAID_ORDER_STATUS = 1
FAILED_ORDER_STATUS = 2
CANCELLED_ORDER_STATUS = 3
# sex code
MALE_SEX = 1
FEMALE_SEX = 2


@deconstructible
class ASCIIUsernameValidator(validators.RegexValidator):
    regex = r'^[\S.@+-]+$'
    message = _(
        'Enter a valid username. This value may contain only English letters, '
        'numbers, and @/./+/-/_ characters.'
    )
    flags = re.ASCII if six.PY3 else 0


@deconstructible
class UnicodeUsernameValidator(validators.RegexValidator):
    regex = r'^[\S.@+-]+$'
    message = _(
        'Enter a valid username. This value may contain only letters, '
        'numbers, and @/./+/-/_ characters.'
    )
    flags = re.UNICODE if six.PY2 else 0


class UserModel(AbstractUser):
    """
    用户
    """
    username_validator = UnicodeUsernameValidator() if six.PY3 else ASCIIUsernameValidator()

    username = models.CharField(
        _('username'),
        max_length=150,
        unique=True,
        help_text=_('Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.'),
        validators=[username_validator],
        error_messages={
            'unique': _("A user with that username already exists."),
        }, blank=True
    )
    is_deleted = models.BooleanField(
        _('is_deleted'),
        default=False,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
        blank=True
    )
    role = models.IntegerField(help_text=u"用户角色", choices=((COMPANY_USER_ROLE, u"企业管理员用户"),
                                                        (PERSON_USER_ROLE, u"企业普通用户"),
                                                        (APPRAISER_USER_ROLE, u"咨询师用户"),
                                                        (ADMIN_USER_ROLE, u"管理员"),
                                                        ),
                             null=True, default=PERSON_USER_ROLE, blank=True
                            )


# @receiver(post_save, sender=UserModel)
# def add_group(sender, instance=None, **kwargs):
#     if instance:
#         if instance.role == COMPANY_USER_ROLE:
#             groups = Group.objects.filter(name__in=[COMPANY_USER_ROLE, PERSON_USER_ROLE])
#             instance.groups.set(groups)
#         elif instance.role == PERSON_USER_ROLE:
#             groups = Group.objects.filter(name=PERSON_USER_ROLE)
#             instance.groups.set(groups)


class CompanyModel(models.Model):
    """
    企业用户信息表
    """
    # user = models.OneToOneField(UserModel, help_text=u"关联企业用户", related_name="company_user")
    name = models.CharField(help_text=u"公司名称", max_length=255, blank=True)


class AppraiserTitleModel(models.Model):
    "测评师职称表"
    title = models.CharField(max_length=64, unique=True, help_text="职称", blank=True)
    is_person = models.BooleanField(default=False, help_text=u"区分机器和测评师", blank=True)
    working_life = models.CharField(max_length=255, help_text=u"工作年限区间", blank=True, null=True)
    working_field = models.CharField(max_length=255, help_text=u"测评范围", blank=True, null=True)
    description = models.CharField(max_length=255, help_text=u"描述", blank=True, null=True)
    label = models.CharField(max_length=255, help_text=u"标签数组", blank=True, null=True)
    short_description = models.CharField(max_length=255, help_text=u"一句话描述", blank=True, null=True)
    image_url = models.CharField(max_length=255, help_text=u"头像路径", blank=True, null=True)


class AppraiserUserModel(models.Model):
    """
    咨询师用户表
    """
    user = models.OneToOneField(UserModel, help_text=u"关联咨询师用户", related_name="appraiser_user", blank=True)
    title = models.ForeignKey(AppraiserTitleModel, help_text=u"个人姓名", max_length=255, blank=True)
    name = models.CharField(help_text=u"咨询师姓名", max_length=255, blank=True)


class CompanyFrameworkModel(models.Model):
    """
    企业架构表
    """
    company = models.ForeignKey(CompanyModel, help_text=u"管理企业", related_name="company_framework", blank=True)
    father = models.ForeignKey("self", help_text=u"上级组织", related_name="father_framework",
                               null=True, default=None, blank=True
                               )
    name = models.CharField(help_text=u"架构名称", max_length=255, blank=True)


class CompanyPermissionModel(models.Model):
    """
    企业权限表
    """
    name = models.CharField(max_length=255, help_text=u"权限名称", blank=True)
    codename = models.CharField(max_length=255, help_text=u"权限代码", blank=True)


class CompanyPositionModel(models.Model):
    """
    企业职位表
    """
    company = models.ForeignKey(CompanyModel, help_text=u"关联企业", related_name="company_position", blank=True)
    name = models.CharField(help_text=u"职位名称", max_length=255, blank=True)
    permissions = models.ManyToManyField(CompanyPermissionModel, help_text=u"权限多对多", blank=True)


class PersonUserModel(models.Model):
    """
    个人用户表
    """
    user = models.OneToOneField(UserModel, help_text=u"关联个人用户", related_name="person_user", blank=True)
    name = models.CharField(help_text=u"个人姓名", max_length=255, blank=True)
    company = models.ForeignKey(CompanyModel, help_text=u"关联企业用户", related_name="person_company",
                                blank=True, default=None, null=True)
    framework = models.ForeignKey(CompanyFrameworkModel, help_text=u"关联组织",
                                  related_name="person_framework", null=True, blank=True
                                  )
    is_leader = models.BooleanField(help_text=u"是否是领导成员", default=False, blank=True)
    is_owner = models.BooleanField(help_text=u"是否企业主", default=False, blank=True)
    sex = models.IntegerField(help_text=u"性别", choices=((MALE_SEX, u"男"), (FEMALE_SEX, u"女")),
                              default=MALE_SEX, blank=True
                              )
    position = models.ForeignKey(CompanyPositionModel, help_text=u"职位关联", null=True, blank=True)


class CompanyLabelModel(models.Model):
    """
    企业标签组表
    """
    company = models.ForeignKey(CompanyModel, help_text=u"管理企业", related_name="company_label", blank=True)
    name = models.CharField(help_text=u"架构名称", max_length=255, blank=True)
    staffs = models.TextField(help_text=u"普通成员", default="", blank=True)
    leaders = models.TextField(help_text=u"领导成员", default="", blank=True)


class ProductsModel(models.Model):
    """
    产品表
    """
    user = models.ForeignKey(UserModel, help_text=u"创建用户关联", related_name='product_user', blank=True, null=True)
    name = models.CharField(help_text=u"产品名称", max_length=255, blank=True)
    products_describe = models.CharField(help_text=u"产品描述", max_length=255, blank=True, null=True)
    assessments = models.CharField(help_text=u"量表配置数组", max_length=5000, blank=True, null=True)
    products = models.CharField(help_text=u"量表配置数组", max_length=5000, blank=True, null=True)
    qnum = models.IntegerField(help_text=u"试题总数", default=0, blank=True)
    sort = models.IntegerField(help_text=u"排序", default=0, blank=True)
    num = models.IntegerField(help_text=u"章节数", default=0, blank=True)
    consum_time = models.IntegerField(help_text=u"总时间", default=0, blank=True)
    create_time = models.DateTimeField(help_text=u"创建日期", auto_now_add=True, blank=True)
    end_time = models.DateTimeField(help_text=u"截至日期", blank=True, null=True)
    start_time = models.DateTimeField(help_text=u"开始日期", blank=True, null=True)
    lowest_appraiser_title = models.IntegerField(help_text=u"支持的咨询师最低级别", blank=True, default=0)
    audiences = models.CharField(help_text=u"受众人群", blank=True, null=True, max_length=255, default=None)
    brand = models.CharField(help_text=u"品牌", blank=True, null=True, default=0, max_length=255)
    scene = models.CharField(help_text=u"适用场景", blank=True, null=True, default=0, max_length=255)
    is_official = models.BooleanField(help_text=u"是否官方出品", blank=True, default=False)


class AssessmentModel(models.Model):
    """
    量表
    """
    Aid = models.CharField(help_text='量表编号', max_length=255, blank=True, null=True)
    name = models.CharField(help_text=u"目录名称", max_length=255, blank=True, null=True)
    introduce = models.CharField(help_text=u"量表简单描述", max_length=255, blank=True, null=True)
    image_url = models.CharField(help_text=u'量表图片url', max_length=255, blank=True, null=True)
    num = models.IntegerField(help_text=u"总题数", default=0, blank=True)
    consum_time = models.IntegerField(help_text=u"总时间", default=0, blank=True)
    sort = models.IntegerField(help_text=u"排序", default=0, blank=True)
    status = models.IntegerField(help_text=u"量表状态",  default=0, blank=True)
    create_time = models.DateTimeField(help_text=u"创建日期", auto_now_add=True, blank=True)
    description = models.TextField(help_text=u"描述信息", blank=True, null=True)
    copyright_fee = models.FloatField(help_text=u"版权费", blank=True, default=0)
    price = models.FloatField(help_text=u"信息服务费", blank=True, default=0)
    audiences = models.CharField(help_text=u"受众人群", blank=True, null=True, max_length=255, default=None)
    short_name = models.CharField(help_text=u"量表简称", blank=True, null=True, max_length=255, default=None)

    def sava(self, *args, **kwargs):
        self.copyright_fee = round(self.copyright_fee, 2)
        self.price = round(self.price, 2)
        return super(AssessmentModel, self).save(*args, **kwargs)

    @property
    def total_price(self):
        return round(self.copyright_fee + self.price, 2)


class ContentModel(models.Model):
    """
    目录表
    """
    Cid = models.CharField(help_text=u'自动编号', max_length=255, blank=True, null=True)
    assessment = models.ForeignKey(AssessmentModel, help_text=u'量表关联', related_name='assessment_content',
                                   blank=True, null=True
                                   )
    content = models.ForeignKey('self', help_text=u"目录关联",related_name='contents_parent', null=True, blank=True)
    type = models.IntegerField(help_text=u'类别编号', default=0, blank=True)
    summary = models.TextField(help_text=u'摘要简介', blank=True, null=True)
    summary_url = models.CharField(help_text='摘要图片url', max_length=255, blank=True, null=True)
    create_time = models.DateTimeField(help_text=u"创建日期", auto_now_add=True, blank=True)


class QuestionModel(models.Model):
    """
    试题表
    """
    Qid = models.CharField(help_text=u'试题编号', max_length=255, blank=True, null=True)
    content = models.ForeignKey(ContentModel, help_text=u'目录关联', related_name='contents_questions', blank=True, null=True)
    type = models.CharField(help_text=u"题目类型", max_length=255, blank=True, null=True)
    title = models.TextField(help_text=u"题干描述", blank=True, null=True)
    title_img = models.CharField(help_text=u"题干图片", max_length=1000, blank=True, null=True)
    option = models.TextField(help_text=u"选项", blank=True)
    create_time = models.DateTimeField(help_text=u"创建日期", auto_now_add=True, blank=True)
    is_scoring = models.BooleanField(help_text=u"是否计分", default=True, blank=True)
    is_repeated = models.BooleanField(help_text=u"是否本量表重复", default=False, blank=True)
    is_appeared = models.BooleanField(help_text=u"是否在其他量表出现", default=False, blank=True)


class CompanyShopListModel(models.Model):
    """
    企业购物清单
    """
    company = models.ForeignKey(CompanyModel, help_text=u"关联企业", blank=True)
    product = models.ForeignKey(ProductsModel, help_text=u"关联产品信息", blank=True)
    appraiser_title = models.ForeignKey(AppraiserTitleModel, help_text=u"关联测评师职称", null=True, blank=True)
    detail = models.TextField(help_text=u"详细清单", blank=True, default="")
    create_time = models.DateTimeField(help_text=u"创建时间", blank=True, auto_now_add=True)
    update_time = models.DateTimeField(help_text=u"更新时间", blank=True, auto_now=True)

    @property
    def price(self):
        price = 0
        if self.detail:
            detail = json.loads(self.detail)
            for d in detail:
                assessment_array = d['assessments'].split(",") if d['assessments'] else []
                assessments = AssessmentModel.objects.filter(id__in=assessment_array)
                appraiser_title = AppraiserTitleModel.objects.filter(pk=d['appraiser_title']).first()
                appraiser_title_ids = []
                if appraiser_title:
                    appraiser_title_ids = [appraiser_title.id]
                price_list = PriceModel.objects.filter(assessment__in=assessments, appraiser_title__in=appraiser_title_ids)
                report_price = sum([p.price * p.percent / 100  for p in price_list])
                assessment_price = sum([a.total_price for a in assessments])
                price += report_price + assessment_price
        return round(price, 2)


class CompanyOrderModel(models.Model):
    """
    企业订单表
    """
    product = models.ForeignKey(ProductsModel, help_text=u"产品关联", related_name="order_product", blank=True)
    company = models.ForeignKey(CompanyModel, help_text=u"关联企业", related_name="company_order_user", blank=True)
    price = models.FloatField(help_text=u"订单总价", default=0, blank=True)
    status = models.IntegerField(default=0, help_text=u"订单状态",
                                 choices=((UNPAY_ORDER_STATUS, u"待付款"), (PAID_ORDER_STATUS, u"已付款"),
                                          (CANCELLED_ORDER_STATUS, u"已取消")
                                          ),
                                 blank=True
                                 )
    create_date = models.DateTimeField(help_text=u"订单创建时间", auto_now_add=True, blank=True)



class UserTestModel(models.Model):
    """
    用户测试表
    """
    user = models.ForeignKey(UserModel, help_text=u"关联用户——个人用户", related_name='test_user', blank=True)
    appraiser_title = models.ForeignKey(AppraiserTitleModel, help_text=u"创建时的默认测评师职称",
                                        null=True, default=None, blank=True
                                        )
    assessments = models.CharField(max_length=255, help_text=u'量表关联', default="", blank=True)
    company_order = models.ForeignKey(CompanyOrderModel, help_text=u"关联企业订单",
                                      related_name="test_company_order", null=True,
                                      blank=True, default=None
                                      )
    create_time = models.DateTimeField(help_text=u"创建日期", auto_now_add=True, blank=True)
    start_date = models.DateTimeField(help_text=u"开始日期", null=True, blank=True)
    end_date = models.DateTimeField(help_text=u"结束日期", null=True, blank=True)
    curr_num = models.IntegerField(help_text=u"当前量表", default=-1, blank=True)


class PersonOrderModel(models.Model):
    """
    个人订单表
    """
    test = models.ForeignKey(ProductsModel, help_text=u"产品关联", related_name="person_order_test", blank=True)
    appraiser_title = models.ForeignKey(AppraiserTitleModel, related_name="person_order_appraiser_title", blank=True)
    price = models.FloatField(help_text=u"订单总额", blank=True, null=True)
    status = models.IntegerField(default=0, help_text=u"订单状态",
                                 choices=((0, u"待付款"), (1, u"已付款"), (2, u"已取消")),
                                 blank=True
                                 )
    create_date = models.DateTimeField(help_text=u"订单创建时间", auto_now_add=True, blank=True)
    note = models.TextField(help_text=u"备注", blank=True, null=True)


class UserAnswerModel(models.Model):
    """
    用户答题记录
    """
    user = models.ForeignKey(UserModel, help_text=u"关联用户", related_name='answer_user', blank=True)
    test = models.ForeignKey(UserTestModel, help_text='用户测试表关联', related_name='answer_test', blank=True)
    assessment = models.ForeignKey(AssessmentModel, help_text=u"量表关联", related_name="answer2assessment", blank=True)
    question = models.ForeignKey(QuestionModel, help_text=u"关联试题", related_name='answer_question', blank=True)
    answer = models.CharField(help_text=u"选项答案", max_length=255, blank=True)
    create_date = models.DateTimeField(help_text=u"答题时间", auto_now=True, blank=True)
    consum_time = models.IntegerField(help_text=u"耗时（秒）", default=0, blank=True)

    class Mate:
        unique_together = ('user', 'test', 'assessment', 'question')


class TestReportModel(models.Model):
    """
    测试报告表
    """
    user_test = models.ForeignKey(UserTestModel, help_text=u"用户测试表关联", related_name="report_test", blank=True)
    assessment = models.ForeignKey(AssessmentModel, help_text=u"量表关联", related_name="report2assessment", blank=True)
    report = models.TextField(help_text=u"测试报告", null=True, blank=True)
    create_time = models.DateTimeField(help_text=u"创建日期", auto_now_add=True, blank=True, null=True)

    class Mate:
        unique_together = ("user_test", "assessment")

    def generate_report(self):
        if not self.report:
            data = {}
            answers = UserAnswerModel.objects.filter(user=self.user_test.user,
                                                     test=self.user_test,
                                                     assessment=self.assessment
                                                     ).all()
            data["scale_answers"] = [{"question_id": a.question.Qid, "answer": a.answer} for a in answers]
            data['subject_info'] = {"subject_gender": {MALE_SEX: u"男", FEMALE_SEX: u"女"
                                                       }.get(self.user_test.user.person_user.sex, u"男")
                                    }
            data['scale_code'] = self.assessment.Aid
            result = task.report(data)
            if result:
                self.report = json.dumps(result)
                self.save()


class AppraiserModel(models.Model):
    """
    测评师表
    """
    account_phone = models.CharField(max_length=32, help_text=u"登录手机号码", blank=True)
    bank_card_name = models.CharField(max_length=64, help_text=u"银行卡户主姓名", blank=True, null=True)
    bank_of_deposit = models.CharField(max_length=255, help_text=u"开户行", blank=True, null=True)
    bank_card_id = models.CharField(max_length=255, help_text=u"银行卡号", blank=True, null=True)
    title = models.ForeignKey(AppraiserTitleModel, help_text="测评师职称表关联", blank=True, null=True)
    age = models.IntegerField(help_text=u"年龄", default=0, blank=True)
    id_card = models.CharField(max_length=32, help_text="身份证", blank=True, null=True)
    native_place = models.TextField(help_text=u"籍贯", blank=True, null=True)
    nationality = models.CharField(max_length=255, help_text=u"民族", blank=True, null=True)
    education = models.CharField(max_length=32, help_text=u"学历", blank=True, null=True)
    marital_status = models.IntegerField(help_text=u"婚姻状况", default=3, blank=True)
    office_address = models.TextField(help_text=u"办公地址", blank=True, null=True)
    profile = models.TextField(help_text=u"个人简介", blank=True, null=True)
    cert_url = models.CharField(max_length=255, help_text=u"证书url", blank=True, null=True)
    experience = models.TextField(help_text=u"工作经历", blank=True, null=True)
    motto = models.TextField(help_text=u"格言", blank=True, null=True)
    work_life = models.IntegerField(help_text=u"工作年限", blank=True, default=0)


class PriceModel(models.Model):
    """
    计费表
    """
    # product = models.ForeignKey(ProductsModel, help_text=u"产品关联", related_name="price_product", null=True)
    assessment = models.ForeignKey(AssessmentModel, help_text=u"量表关联",
                                   related_name="price_assessment", null=True, blank=True
                                   )
    appraiser_title = models.ForeignKey(AppraiserTitleModel, help_text=u"测评师职称关联",
                                        related_name="price_appraiser_title", null=True, blank=True
                                        )
    price = models.FloatField(help_text=u"原价", default=0, blank=True)
    percent = models.IntegerField(help_text=u"企业折扣0-100%", default=100, blank=True)

    class Mate:
        unique_together = ("assessment", "appraiser_title")

    def save(self, *args, **kwargs):
        self.price = round(self.price, 2)
        self.discount = round(self.discount, 2)
        super(PriceModel, self).save(*args, **kwargs)



class SystemConfigModel(models.Model):
    """
    系统设置表
    """
    field_name = models.CharField(max_length=64, help_text=u"key", blank=True, null=True, db_index=True)
    field_value = models.TextField(help_text=u"key", blank=True, null=True)


