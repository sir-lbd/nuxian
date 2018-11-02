import { Injectable } from '@angular/core';
import {Http} from '../../../../services/http/http';

@Injectable({
  providedIn: 'root'
})
export class StartEvaluationService {

  constructor(protected http: Http) {}

  getAssessment(id) {
    return new Promise((resolve, reject) => {
      this.http.call('assessmentDetail', {id: id,}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
