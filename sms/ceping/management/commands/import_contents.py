#!/usr/bin/env python
# encoding: utf-8

"""
@version: v1.0
@author: zhangyang
@license: Apache Licence 
@contact: 302773974@qq.com
@site: http://sms-mall.wei7star.com
@software: PyCharm
@file: import_contents.py
@time: 2018/9/7 下午3:06
"""
from django.core.management.base import BaseCommand, CommandError
import  xdrlib ,sys
import xlrd,os
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

    def handle(self, *args, **options):
        try:
            if options['name']:
                from answering.models import *
                print 'hello world, %s' % options['name']
                file = os.path.join(settings.BASE_DIR,options['name'])
                list = excel_table_byindex(file)
                for l in list:
                    # if l[u'科目/章节ID']:
                    #     content,created = ContentsModel.objects.get_or_create(id=l[u'科目/章节ID'])
                    #     if l[u'父类']:
                    #         parent,created = ContentsModel.objects.get_or_create(id=l[u'父类'])
                    #         content.parent1 = parent
                    #         if content.parent1:
                    #             parent1 = ContentsModel.objects.filter(id=content.parent1.id).first()
                    #             content.parent2 = parent1.parent1
                    #             if parent1.parent1:
                    #                 parent2 = ContentsModel.objects.filter(id=parent1.parent1.id).first()
                    #                 content.parent3 = parent2.parent1
                    #         # content.save()
                    #     # if l[u'父类']:
                    #     #     parent,created = ContentsModel.objects.get_or_create(id=l[u'父类'])
                    #     content.name = l[u'科目/章节名称']
                    #     # content.parent1 = parent
                    #     # content.contents_describe = l[u'科目/章节名称']
                    #     content.save()
                    if l[u'试卷题目数']:
                        contents = ContentsModel.objects.get(id=l[u'科目/章节ID'])
                        created = TestpaperModel.objects.create(qnum=l[u'试卷题目数'],
                                                                name=l[u'科目/章节名称'],
                                                                contents=contents,
                                                                total_score=l[u'满分'],
                                                                customs_score=l[u'通过分数'],
                                                                duration=l[u'考试时长'],
                                                                apply_object=l[u'适用对象']
                                                                )
                        created.save()
            self.stdout.write(self.style.SUCCESS(u'命令%s执行成功, 参数为%s' % (__file__, options['name'])))
        except Exception, ex:
            self.stdout.write(self.style.ERROR(str(ex)))
            self.stdout.write(self.style.ERROR(u'命令执行出错'))