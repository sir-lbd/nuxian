import {Injectable} from '@angular/core';
import {Http} from "../../services/http/http";

export interface Position {

}

@Injectable({
  providedIn: 'root'
})
export class ManagementService {


  constructor(protected http: Http) {
  }

// 。。。。。。。。。。。。。。。。。。。。权限。。。。。。。。。
  //获取职位管理
  getPositionList(offset?: number) {
    return new Promise((resolve, reject) => {
      this.http.call('position',{offset: offset} ).then((resp: any) => {
        resolve(resp);
      }).catch(err => {
        reject(err)
      });
    });
  }

  //添加职位
  // @ts-ignore
  addPossition(postData) {
    return new Promise((resolve, reject) => {
      this.http.call('postPosition',
         postData
      ).then((resp: any) => {
        resolve(resp);
        console.log('data', resp)
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 更改授权
  // @ts-ignore
  putPossition(putData) {
    return new Promise((resolve, reject) => {
      this.http.call('putPosition',putData).then((resp: any) => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

// 。。。。。。。。。。。。。。。。。。。。。。职位。。。。。。。。。
  //获取权限管理
  getPermissionList() {
    return new Promise((resolve, reject) => {
      this.http.call('permission').then((resp: any) => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
