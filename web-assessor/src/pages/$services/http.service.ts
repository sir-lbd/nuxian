import {Injectable} from '@angular/core';
import {Http} from '../../services/http/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(protected http: Http) {
  }

  init() {
    this.http.manager.reset([
      {
        url: {
          formal: 'http://muxian-sms.wei7star.com',
          test: 'http://192.168.3.66:8000'
        },
        debug: false,
        protocols: [
          {
            name: 'products',
            method: 'get',
            endpoint: 'muxian/productsmodel/'
          },
          {
            name: 'product',
            method: 'post',
            endpoint: 'muxian/productsmodel/'
          },
          {
            name: 'appraisers',
            method: 'get',
            endpoint: 'muxian/appraisertitlemodel/'
          },
          {
            name: 'assessment',
            method: 'get',
            endpoint: 'muxian/assessmentmodel/'
          },
        ]
      }
    ]);
  }
}
