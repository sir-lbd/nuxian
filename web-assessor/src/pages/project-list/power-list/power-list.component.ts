import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-power-list',
  templateUrl: './power-list.component.html',
  styleUrls: ['./power-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PowerListComponent implements OnInit {
  urls = [
    {
      url: '/project-list',
    },
    {
      url: '/project-list/psy',
    },
    {
      url: '/project-list',
    },
    {
      url: '/project-list',
    },
    {
      url: '/project-list',
    },
    {
      url: '/project-list/overview',
    }
  ]
  act = -1;
  userName = ''
  name = [
    {
      user: '姚明',
    },
    {
      user: '校长',
    }
  ]
  butt = [
    {
      title: '报告总览',
       url: ''
    },
    {
      title: '能力量表',
      url: ''
    },
    {
      title: '心理量表',
      url: ''
    },
    {
      title: '动机量表',
      url: ''
    },
    {
      title: '16pf',
      url: ''
    },
    {
      title: '综合评价',
      url: ''
    }
  ];

  constructor(protected router: Router) {
  }

  ngOnInit() {
    this.goEvery(0);
  }

  goEvery(type: number) {
    this.act = type
    console.log('typ', type)
    this.router.navigate([`${this.urls[type].url}`])
  }
}
