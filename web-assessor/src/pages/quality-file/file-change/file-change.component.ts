import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-file-change',
  templateUrl: './file-change.component.html',
  styleUrls: ['./file-change.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileChangeComponent implements OnInit {
  peo = [
    {
      title1: [
        {
          title: '□'
        },
        {
          title: '姓名'
        },
        {
          title: '职位'
        },
        {
          title: '效率'
        },
        {
          title: '风格'
        },
        {
          title: '动力'
        },
        {
          title: '心理健康'
        }
      ]
    },
    {

    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
