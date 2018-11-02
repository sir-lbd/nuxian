import { Injectable } from '@angular/core';
import {Http} from '../../../services/http/http';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(protected http: Http) {}

  getMyProduct(user) {
    return this.http.call('product', {
      // user_id: user,
      user_id: 1,
    }).then(resp => {
      return resp;
    });
  }
}
