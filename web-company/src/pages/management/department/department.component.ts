import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DepartmentComponent implements OnInit {
  cmun = -1;
  more = false;
  title1 = [
    {
      title: '部门'
    },

    {
      title: '人数'
    },
    {
      title: '操作'
    }
    ];
  peo = [
    {
      title1: [
        {
          title: '经理'
        },
        {
          title: '5'
        }
      ]
    },
    {
      title1: [
        {
          title: '总监'
        },
        {
          title: '6'
        }
      ]
    },
  ];

  constructor() {
  }

  ngOnInit() {
    console.log('peo', this.peo)
  }
  moreC(i){
    this.cmun = i;
  }
}
