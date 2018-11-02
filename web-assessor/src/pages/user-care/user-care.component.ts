import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PageMenu} from '../../components/menu-page/menu-page.component';
import {Router} from "@angular/router";

@Component({
  selector: 'div.page.user-care',
  templateUrl: './user-care.component.html',
  styleUrls: ['./user-care.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserCareComponent implements OnInit {
  isShow = false;
  isShow2 = false;
  menu: PageMenu = {
    items: [
      {
        title: '参加测评',
        icon: {
          selected: '/assets/img/icon-2.png',
          normal: '/assets/img/icon-2.png'
        },
        url: '/user-care/evaluation',
      },
      {
        title: '查看报告',
        icon: {
          selected: '/assets/img/icon-3.png',
          normal: '/assets/img/icon-3.png'
        },
        url: '/user-care/view-report',
      },
      {
        title: '发展性咨询',
        icon: {
          selected: '/assets/img/icon-1.png',
          normal: '/assets/img/icon-1.png'
        },
        url: '/user-care/development-counseling',
      }
    ]
  };

  constructor( protected router: Router) {
  }

  ngOnInit() {
  }
  goFile(){
    this.router.navigate(['/user-care/evaluation/file'])
  }
}
