import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ManagementService} from "../management.service";

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PermissionComponent implements OnInit {

  more = false;
  peo = [
    {
      title1: [
        {
          title: '权限名称'
        },

        {
          title: ''
        },
        {
          title: ''
        },
        {
          title: ''
        },
        {
          title: ''
        }
      ]
    },
    {
      title2: [
        {
          title: '项目管理'
        },
        {
          title: '项目管理'
        },
        {
          title: '项目管理'
        },
        {
          title: '项目管理'
        },
        {
          title: '项目管理'
        }
      ],
    },
    {
      title2: [
        {
          title: '项目管理'
        },
        {
          title: '项目管理'
        },
        {
          title: '项目管理'
        },
        {
          title: '项目管理'
        },
        {
          title: '项目管理'
        }
      ],
    },
  ];
  constructor( protected service: ManagementService) {
  }

  ngOnInit() {
    console.log('peo', this.peo);
    //获取权限列表
    this.service.getPermissionList().then((resp: any) =>{
      // console.log('PermissionList', this.permissionList)
    })
  }

}
