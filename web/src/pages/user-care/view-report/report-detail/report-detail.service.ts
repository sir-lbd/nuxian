import {Injectable} from '@angular/core';
import {Http} from '../../../../services/http/http';

@Injectable({
  providedIn: 'root'
})
export class ReportDetailService {

  constructor(protected http: Http) {
  }

  // 获取测验信息
  getUserTest(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('userTestList', {id: id}).then(resp => {
        resolve(resp.results[0]);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取报告
  getReport(ids: any, test: any) {
    return new Promise((resolve, reject) => {
      this.http.call('getReport', {assessment__in: ids, user_test: test, limit: 1000}).then(resp => {
        resolve(resp.results);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取人格特质
  getPersonalityTrait(id: any, assessment_id: any, type: any) {
    return new Promise((resolve, reject) => {
      this.http.call('personalityTrait', {
        id: id,
        assessment_id: assessment_id,
        type: type
      }).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
