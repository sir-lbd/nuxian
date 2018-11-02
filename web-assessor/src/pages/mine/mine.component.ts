import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {PageMenu} from '../../components/menu-page/menu-page.component';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MineComponent implements OnInit {
  menu: PageMenu = {
    items: [
      {
        title: '用户信息',
        icon: {
          selected: '/assets/img/icon-2.png',
          normal: '/assets/img/icon-2.png'
        },
        url: '/mine/user-info',
      },
      {
        title: '测评记录',
        icon: {
          selected: '/assets/img/icon-3.png',
          normal: '/assets/img/icon-3.png'
        },
        url: '/mine/evaluation-records',
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
