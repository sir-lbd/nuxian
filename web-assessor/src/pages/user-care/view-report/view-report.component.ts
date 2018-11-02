import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'div.sub-page.view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewReportComponent implements OnInit {
  reports = [
    {
      title: '财务类',
      subtitle: '能力水平初步测试',
      icon: '/assets/img/picture-1.png',
      status: '已完成',
      details: [
        {
          label: '截止日期',
          desc: '2018-06-05'
        },
        {
          label: '测试章节',
          desc: '共四章'
        },
        {
          label: '答题时间',
          desc: '1时20分10秒'
        },
        {
          label: '试题数量',
          desc: '197'
        },
      ],
    },
    {
      title: '能力测评',
      subtitle: '能力水平初步测试',
      icon: '/assets/img/picture-1.png',
      status: '已完成',
      details: [
        {
          label: '截止日期',
          desc: '2018-06-05'
        },
        {
          label: '测试章节',
          desc: '共四章'
        },
        {
          label: '答题时间',
          desc: '1时20分10秒'
        },
        {
          label: '试题数量',
          desc: '197'
        },
      ],
    },
  ];

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  checkReport() {
    this.router.navigate(['/user-care/view-report/check-report']);
  }

}
