import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlankComponent implements OnInit {
  num = 0;
  nav = [
    {
      open: false,
      title: '职位管理',
      logo: 'assets/img/folder.png',
      url: 'management',
      childrens: [
        {
          logo: 'assets/img/folder.png',
          title: '技术一'
        },
        {
          logo: 'assets/img/folder.png',
          title: '技术二'
        }
      ]
    },
    {
      open: false,
      logo: 'assets/img/folder.png',
      title: '权限管理',
      url: 'management/permission'
    }
  ];
  constructor( protected router: Router) {
  }

  ngOnInit() {


  }

  chose(i) {
    this.nav[i].open = !this.nav[i].open;
    this.num = i;
    this.router.navigate( [this.nav[i].url])
  }

}
