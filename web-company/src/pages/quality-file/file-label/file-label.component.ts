import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-file-label',
  templateUrl: './file-label.component.html',
  styleUrls: ['./file-label.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileLabelComponent implements OnInit {
  color = 0;
  left = [
    {title: '', img: 'assets/img/list.png'},
    {title: '评测报告', img: 'assets/img/icon-1.png'},
    {title: '用户信息', img: 'assets/img/icon-4.png'},
    {title: '授权范围', img: 'assets/img/icon-1.png'},
    {title: '权限管理', img: 'assets/img/icon-1.png'},
  ];
  routers = [
    {url: 'quality-file'},
    {url: 'quality-file/file-see'},
    {url: 'quality-file/file-author'},
    {url: 'quality-file/file-permiss'},
  ];

  constructor(protected router: Router) {
  }

  ngOnInit() {
  }

  goDetail(i) {
    this.color = i;
    if (i === 1) {
      console.log(1);
      this.router.navigate([`${this.routers[0].url}`]);
    }
    if (i === 2) {
      console.log(2);
      this.router.navigate([`${this.routers[1].url}`]);
    }
    if (i === 3) {
      console.log(3);
      this.router.navigate([`${this.routers[2].url}`]);
    }
    if (i === 4) {
      console.log(3);
      this.router.navigate([`${this.routers[3].url}`]);
    }

  }
}
