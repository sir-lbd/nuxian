import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-file-permiss',
  templateUrl: './file-permiss.component.html',
  styleUrls: ['./file-permiss.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilePermissComponent implements OnInit {
  button = [
    {title: '修改', url: '/quality-file/blank'},
    {title: '保存'},
  ];
  name = [
    {title: '权限名称'},
    {title: '项目管理'},
    {title: '发起评测'},
    {title: '素质档案'},
    {title: '发起评测'},
    {title: '素质档案'},
  ]

  constructor(protected  router: Router) {
  }

  ngOnInit() {
  }
  goBlank(i){
    if(i === 0){
      this.router.navigate([this.button[0].url])
    }

  }
}
