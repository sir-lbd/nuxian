import {Injectable} from '@angular/core';
import {Http} from '../../../../services/http/http';
import {StartEvaluationService} from '../start-evaluation/start-evaluation.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerEvaluationService {

  constructor(protected http: Http, protected statrService: StartEvaluationService) {
  }

  // 获取练习题
  getPractice(contents: any) {
    return new Promise((resolve, reject) => {
      this.http.call('practice', {
        content__in: contents,
        limit: 1000,
        offset: 0
      }).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 生成测试记录
  postUserTest(id: any, end_date: any) {
    return new Promise((resolve, reject) => {
      const data = {
        id: id,
        end_date: this.statrService.formatDate(end_date)
      };
      this.http.call('UserTest', data).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }


  // 获取量表
  getAssessment(id) {
    return this.http.call('assessmentDetail', {
      id: id,
    }).then(resp => {
      return resp;
    });
  }

  // 获取试题
  getQuestion(contents) {
    return this.http.call('question', {
      content__in: contents,
      limit: 1000,
      offset: 0
    }).then(resp => {
      return resp;
    });
  }

  // 答题
  answerQuestion(user_id: any, question_id: any, test_id: any, assessment_id: any, answer: any, consum_time: any) {
    return new Promise((resolve, reject) => {
      this.http.call('AnswerQuestion', {
        user_id: user_id,
        question_id: question_id,
        test_id: test_id,
        assessment_id: assessment_id,
        answer: answer,
        consum_time: consum_time
      }).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 更新产品测试量表位置
  testCurrentNum(id: any, curr_num: any) {
    return new Promise((resolve, reject) => {
      this.http.call('testCurrentNum', {
        id: id,
        curr_num: curr_num
      }).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 总共耗时
  consumeTime(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('consumeTime', {id: id}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

}
