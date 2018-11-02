import {Injectable} from '@angular/core';
import {Http} from '../../services/http/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService {

  constructor(protected http: Http) {
  }

  // 获取产品
  getProductList(user_id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('products', {user_id: user_id}).then(resp => {
        resolve(resp.results);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
