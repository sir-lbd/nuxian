import {Injectable} from '@angular/core';
import {Http} from '../../../../services/http/http';

@Injectable({
  providedIn: 'root'
})
export class StartEvaluationService {

  constructor(protected http: Http) {
  }

  getAssessment(id) {
    return new Promise((resolve, reject) => {
      this.http.call('assessmentDetail', {id: id}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 生成测试记录
  postUserTest(id: any, start_date: any) {
    return new Promise((resolve, reject) => {
      const data = {
        id: id,
        start_date: this.formatDate(start_date)
      };
      this.http.call('UserTest', data).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

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
