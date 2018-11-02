#coding=utf-8
#!/usr/bin/env python


"""
@version: v1.0
@author: zhangyang
@license: Apache Licence 
@contact: 302773974@qq.com
@site: http://sms-mall.wei7star.com
@software: PyCharm
@file: import_question.py
@time: 2018/9/7 下午3:39
"""
from django.core.management.base import BaseCommand, CommandError
import  xdrlib ,sys
import xlrd,os
import json
from ceping.models import *
from tools import *
from django.conf import settings

class Command(BaseCommand):

    def add_arguments(self, parser):

        parser.add_argument(
            '-n',
            '--name',
            action='store',
            dest='name',
            default='close',
            help='name of author.',
        )

    def create_assessment(self, list):
        for l in list:
            num = 0
            if l[u'练习题数量']:
                num += int(l[u'练习题数量'])
            if l[u'测试题数量']:
                num += int(l[u'测试题数量'])
            AssessmentModel.objects.get_or_create(
                Aid = l[u'量表编号'],
                name = l[u'量表名称'],
                image_url = l[u'量表图片'],
                description = l[u'量表介绍'],
                short_name = l[u'量表简称'],
                consum_time = l[u'测验总时长(分钟）'] or 0,
                num = num,
            )

    def create_content(self, list):
        for l in list:
            assessment, created = AssessmentModel.objects.get_or_create(Aid=l[u'量表编号'])
            if not l[u"题组编号"]:
                ContentModel.objects.create(
                    assessment=assessment,
                    summary=l[u"部分或题组介绍（富文本）"],
                    Cid = l[u"部分编号"],
                    summary_url = l[u"题干图片【只需按要求命名，无需填写（TZ-tg-编号.文件类型）】"],
                )
            else:
                content, created = ContentModel.objects.get_or_create(Cid=l[u"部分编号"])
                ContentModel.objects.create(
                    assessment=assessment,
                    summary=l[u"部分或题组介绍（富文本）"],
                    Cid=l[u"题组编号"],
                    content=content,
                    summary_url=l[u"题干图片【只需按要求命名，无需填写（TZ-tg-编号.文件类型）】"],
                )

    def create_question(self, list):
        for l in list:
            option = {}
            if l[u'选项A']:
                option['A'] = {'title': l[u'选项A'], 'is_fill': 0}
                if l[u'填空1']:
                    option['A']['is_fill'] = 1
            if l[u'选项B']:
                option['B'] = {'title': l[u'选项B'], 'is_fill': 0}
                if l[u'填空2']:
                    option['B']['is_fill'] = 1
            if l[u'选项C']:
                option['C'] = {'title': l[u'选项C'], 'is_fill': 0}
                if l[u'填空3']:
                    option['C']['is_fill'] = 1
            if l[u'选项D']:
                option['D'] = {'title': l[u'选项D'], 'is_fill': 0}
            if l[u'选项E']:
                option['E'] = {'title': l[u'选项E'], 'is_fill': 0}
            if l[u'选项F']:
                option['F'] = {'title': l[u'选项F'], 'is_fill': 0}
            if l[u'选项G']:
                option['G'] = {'title': l[u'选项G'], 'is_fill': 0}
            if l[u'选项H']:
                option['H'] = {'title': l[u'选项H'], 'is_fill': 0}
            if l[u'选项I']:
                option['I'] = {'title': l[u'选项I'], 'is_fill': 0}
            if l[u'选项J']:
                option['J'] = {'title': l[u'选项J'], 'is_fill': 0}

            assessment, created = AssessmentModel.objects.get_or_create(Aid=l[u'量表编号'])
            content, created = ContentModel.objects.get_or_create(Cid=l[u'部分编号'], assessment=assessment)
            if l[u'题组编号']:
                content_d, created = ContentModel.objects.get_or_create(Cid=l[u'题组编号'], content=content)
                content_ = content_d
            else:
                content_ = content
            QuestionModel.objects.create(type=l[u'题型'],
                                         Qid=l[u'题目编号'],
                                         title=l[u'题干'],
                                         option= json.dumps(option),
                                         is_repeated=True if l[u'是否重复题'] == "Y" else False,
                                         is_scoring=True if l[u'是否计分'] == "Y" else False,
                                         is_appeared=True if l[u'重复量表'] == "Y" else False,
                                         content=content_)

    def handle(self, *args, **options):
        if options['name']:
            print 'hello world, %s' % options['name']
            file = os.path.join(settings.BASE_DIR,options['name'])
            #assessment
            # assessments = excel_table_byindex(file, by_index=1)
            # self.create_assessment(assessments)
            #
            # contents = excel_table_byindex(file, by_index=2)
            # self.create_content(contents)

            list = excel_table_byindex(file)
            self.create_question(list)


        return