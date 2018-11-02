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

  // 获取所有量表
  getAllAssessment() {
    return new Promise((resolve, reject) => {
      this.http.call('assessment').then(resp => {
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

  // 获取创建的产品

  formatDate(date) {
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
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
  }
}
