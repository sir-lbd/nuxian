import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ManagementService} from "../management.service";
import {MatPaginatorIntl, PageEvent, MatSnackBar} from "@angular/material";

import {MyPaginator} from "../../$services/data/paginator";
import {Http} from "../../../services/http/http";

interface Data {
  id?: number;
  name?: string;
  company?: any;
  permissions?: any;
}

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PositionComponent implements OnInit {
  //翻页
  length = 1;
  pageSize: number = 10;
  pageIndex = 0;
  previousPageIndex: number;
  //弹窗
  openw = false;
  active = false;
  open = false;
  cmun = -1;
  positionList: any;
  title1 = [
    {
      title: '职位'
    },

    {
      title: '权限数'
    },
    {
      title: '操作'
    }
  ];
  permissions:any = '';
  postData: Data = {
    name: '',
    company: '',
    permissions: []
  }
  putData: Data = {
    id: 0,
    name: '',
    company: '',
    permissions: []
  };

  constructor(protected service: ManagementService,
              protected matPaginatorIntl: MatPaginatorIntl,
              protected snackBar: MatSnackBar,
              protected http: Http
  ) {
    this.matPaginatorIntl = new MyPaginator(this.matPaginatorIntl).setPaginator();
  }

  ngOnInit() {
    //获取职位列表
    this.service.getPositionList().then((resp: any) => {
      this.positionList = resp;
      // this.length = Math.ceil(this.positionList.count / 10);
      this.length = resp.count;
      // console.log('length', this.length)
    });
  }

  // 添加职位
  addPossition() {
     this.postData.permissions.push(this.permissions);
    if (!this.postData || !this.postData.name) {
      return this.snackBar.open('请填写完整', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
    }
    this.service.addPossition(this.postData).then((resp: any) => {
    });
    this.open = !this.open;
    // console.log('blank',this.postData);
    this.postData = {};
    this.permissions = '';
  };
  moreC(i) {
    this.cmun = i;
  }

  // 更改职位
  putPossition(p) {
    this.putData = p;
    this.service.putPossition(this.putData).then((resp: any) => {
      return this.snackBar.open('更改成功', '', {
        duration: 2000,
        verticalPosition: 'top',
      });
    })
    // console.log('put', this.putData)
  }



  //翻页
  paginate(event) {
    console.log('event', event)
    this.pageIndex = event.pageIndex;
    this.service.getPositionList((this.pageIndex) * 10).then((resp: any) => {
      this.positionList = resp;
    });
  }


}
