import {Injectable} from '@angular/core';
import {Http} from '../../../services/http/http';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(protected http: Http) {
  }

  // 获取产品表数据
  getProductList(user) {
    return new Promise((resolve, reject) => {
      this.http.call('product', {user_id: user}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 根据id获取产品
  getProduct(id?: number) {
    return new Promise((resolve, reject) => {
      this.http.call('product', {id: id}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取量表数据
  getAssessmentList(ids: any) {
    return new Promise((resolve, reject) => {
      this.http.call('assessment', {id__in: ids}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取章节
  getContentList(id: number) {
    return new Promise((resolve, reject) => {
      this.http.call('ContentList', {'assessment': id}).then(resp => {
        if (resp && resp.results[0]) {
          resp.results[0].content_get.forEach(q => {
            q.option = JSON.parse(q.option);
            q.answers = [];
            q.selected = '';
            for (const o in q.option) {
              q.answers.push({'option': o, 'title': q.option[o].title, 'is_fill': q.option[o].is_fill});
            }
          });
        }
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }




}
