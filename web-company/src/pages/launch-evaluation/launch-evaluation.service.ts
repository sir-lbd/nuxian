import { Injectable } from '@angular/core';
import {Http} from '../../services/http/http';
export interface Product {
  id?: number;
  name?: string;
  products_describe?: string;
  assessments?: string;
  qnum?: number;
  sort?: number;
  num?: number;
  consum_time?: number;
  start_time?: any;
  end_time?: any;
  user_id?: any;
  products?: any;
}

@Injectable({
  providedIn: 'root'
})
export class LaunchEvaluationService {

  constructor(protected http: Http) {
  }

  // 获取测评师等级
  getAppraiserTitles() {
    return new Promise((resolve, reject) => {
      this.http.call('appraisers', {id__gt: 0}).then(resp => {
        resolve(resp.results);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取测评师
  getAppraiser(id) {
    return new Promise((resolve, reject) => {
      this.http.call('appraisers', {id: id}).then(resp => {
        resolve(resp.results[0]);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取所有量表
  getAllAssessment() {
    return new Promise((resolve, reject) => {
      this.http.call('assessment', {status: 1}).then(resp => {
        resolve(resp.results);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 选择量表创建产品
  createProduct(product) {
    return new Promise((resolve, reject) => {
      this.http.call('product', product).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 生成shoplist数据
  postShopList(product_id: any, user_id: any, appraiser: any) {
    return new Promise((resolve, reject) => {
      let data: any;
      if (appraiser >= 0) {
        data = {
          product: product_id,
          user: user_id,
          appraiser_title: appraiser
        };
      } else {
        data = {
          product: product_id,
          user: user_id
        };
      }
      this.http.call('shopList', data).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取创建的产品
  getProductByID(id) {
    return new Promise((resolve, reject) => {
      this.http.call('products', {id: id}).then(resp => {
        resolve(resp.results[0]);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取产品中的量表
  getAssessmentsByProduct(assessments) {
    return new Promise((resolve, reject) => {
      this.http.call('assessment', {
        id__in: assessments,
        limit: 100
      }).then(resp => {
        resolve(resp.results);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取所有用户
  getAllUsers() {
    return new Promise((resolve, reject) => {
      this.http.call('companyUser').then(resp => {
        resolve(resp.results);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取shopList数据
  getShopList(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('getShopList', {id: id}).then(resp => {
        resolve(resp.results[0]);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取导入用户数据
  getShopListDetail(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('getShopListDetail', {id: id}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 修改shopList数据
  putShopList(id: any, detail: any) {
    return new Promise((resolve, reject) => {
      this.http.call('putShopList', {id: id, detail: detail}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 导入成员
  importMembers(product_id: any, test: any) {
    return new Promise((resolve, reject) => {
      this.http.call('importMember', {product_id: product_id, test: test}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取导入成员
  getUserTest(product_id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('userTest', {product_id: product_id, limit: 1000}).then(resp => {
        resolve(resp.results);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 创建订单
  createOrder(product: any, shop: any) {
    return new Promise((resolve, reject) => {
      this.http.call('createOrder', {
        product: product,
        company_shop_list: shop
      }).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取订单数据
  getOrder(id: number) {
    return new Promise((resolve, reject) => {
      this.http.call('companyOrder', {id: id}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 确认支付状态
  confirmOrder(id: number) {
    return new Promise((resolve, reject) => {
      this.http.call('putOrder', {id: id, status: 1}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 格式化时间
  formatDate(date, full?: any) {
    const time = new Date(date);
    const year = time.getFullYear();
    let month: any = time.getMonth() + 1;
    month = month >= 10 ? month : '0' + month;
    let day: any = time.getDate();
    day = day >= 10 ? day : '0' + day;
    let hour: any = time.getHours();
    hour = hour >= 10 ? hour : '0' + hour;
    let minutes: any = time.getMinutes();
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    let seconds: any = time.getSeconds();
    seconds = seconds >= 10 ? seconds : '0' + seconds;
    // console.log('year-month-day', year, month, day);
    if (!full) {
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
    } else {
      return year + '-' + month + '-' + day + ' ' + '00:00:00';
    }
  }
}
