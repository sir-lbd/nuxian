import {Injectable} from '@angular/core';
import {Http} from '../../../../services/http/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmPaymentService {

  constructor(protected http: Http) {
  }

  // 获取订单信息
  getOrderDetail(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('order', {id: id}).then(resp => {
        resolve(resp.results[0]);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
