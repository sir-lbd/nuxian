import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-file-author',
  templateUrl: './file-author.component.html',
  styleUrls: ['./file-author.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileAuthorComponent implements OnInit {
  isOpen = false;
  ac = 0;
  people = [
    {title: '授权人'},
    {title: '被授权人'},
  ];
  people2 = [
    {title: '修改'},
    {title: '批量删除'},
    {title: '保存'},
  ];
  pcxm = [
    {title: '评测项目'},
    {title: '部门'},
    {title: '职务'},
    {title: '可被查看'},
    {title: '操作'},
  ];
  pcxm2 = [
    {title: '青龙智能能力提升'},
    {title: '研发部'},
    {title: '总监'},
    {title: '金世华'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  opens() {
    this.isOpen = !this.isOpen;
  }
}
