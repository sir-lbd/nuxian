import {Injectable} from '@angular/core';
import {Http} from '../../../../services/http/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerEvaluationService {

  constructor(protected http: Http) {
  }

  getAssessment(id) {
    return this.http.call('assessmentDetail', {
      id: id,
    }).then(resp => {
      return resp;
    });
  }

  getQuestion(contents) {
    return this.http.call('question', {
      content__in: contents,
      limit: 1000,
      offset: 0
    }).then(resp => {
      return resp;
    });
  }
}
