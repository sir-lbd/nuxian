import {Injectable} from '@angular/core';
import {Http} from '../../../../services/http/http';

@Injectable({
  providedIn: 'root'
})
export class CheckReportService {

  constructor(public http: Http) {
  }

  // 获取报告列表
  getReportType() {
    return new Promise((resolve, reject) => {
      this.http.call('appraiserTitle').then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取系统配置
  getSystemConfig(field_name: any) {
    return new Promise((resolve, reject) => {
      this.http.call('systemConfig', {field_name: field_name}).then(resp => {
        resolve(resp.results[0]);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 创建订单
  createOrder(appraiser_title_id: any, price: any, product_id: any, user_id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('createOrder', {
        appraiser_title_id: appraiser_title_id,
        price: price,
        product_id: product_id,
        user_id: user_id
      }).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

}
