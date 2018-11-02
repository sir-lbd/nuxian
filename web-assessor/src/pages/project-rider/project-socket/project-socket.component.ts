import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-project-socket',
  templateUrl: './project-socket.component.html',
  styleUrls: ['./project-socket.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectSocketComponent implements OnInit {
  isShow = false;
  id: number;
  color = 0;
  left = [
    {title: '未测评', img: 'assets/img/icon-1.png'},
    {title: '已测评', img: 'assets/img/icon-4.png'},
  ];
  routers = [
    {url: 'project-rider'},

  ];
  lists = [
    {
      title: '青龙智能项目组A组',
      update: '2016-3-5',
      enddate: '2016-3-6',
      num: '25',
      testnum: '13',
      desc: '成员能力测试',
      pro: '鸿途',
      sty: '机打报告',
      shet: [
        {
          title: 'NL',
          cs: '能力测试',
          type: 0
        },
        {
          title: 'YL',
          cs: '压力测试',
          type: 1
        },
        {
          title: 'XL',
          cs: '心理测试',
          type: 2
        },
        {
          title: 'ZH',
          cs: '综合测试',
          type: 3
        }
      ]
    }
  ]

  constructor(protected router: Router, protected routerInfo: ActivatedRoute) {
  }

  ngOnInit() {

  }

  goDetail(i) {
    this.color = i;
    if (i === 0) {
      console.log(0);
      this.router.navigate([`${this.routers[0].url}`]);
    }
  }
}
