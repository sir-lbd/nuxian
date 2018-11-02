import {Injectable} from '@angular/core';
import {Http} from '../../services/http/http';

const DEBUG = false;
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  static get URL() {
    return DEBUG ? 'http://muxian-sms.wei7star.com' : 'http://appserver.goolya.cn';
  }

  constructor(protected http: Http) {
  }

  init() {
    this.http.manager.reset([
      {
        url: {
          formal: 'http://appserver.goolya.cn',
          test: 'http://muxian-sms.wei7star.com',
          // test: 'http://192.168.3.66:8000'
        },
        debug: true,
        protocols: [
          {
            name: 'login',
            method: 'post',
            endpoint: 'muxian/login/'
          },
          {
            name: 'assessmentDetail',
            method: 'get',
            endpoint: 'muxian/assessmentmodel/${id}/'
          },
          {
            name: 'product',
            method: 'get',
            endpoint: 'muxian/productsmodel/'
          },
          {
            name: 'assessment',
            method: 'get',
            endpoint: 'muxian/assessmentmodel/'
          },
          {
            name: 'practice',
            method: 'get',
            endpoint: 'muxian/questionmodel/practice/'
          },
          {
            name: 'question',
            method: 'get',
            endpoint: 'muxian/questionmodel/'
          },
          {
            name: 'ContentList',
            method: 'get',
            endpoint: 'muxian/contentmodel/'
          },
          {
            name: 'UserTest',
            method: 'put',
            endpoint: 'muxian/usertestmodel/${id}/'
          },
          {
            name: 'userTestList',
            method: 'get',
            endpoint: 'muxian/usertestmodel/'
          },
          {
            name: 'AnswerQuestion',
            method: 'post',
            endpoint: 'muxian/useranswermodel/'
          },
          {
            name: 'testCurrentNum',
            method: 'put',
            endpoint: '/muxian/usertestmodel/${id}/'
          },
          {
            name: 'consumeTime',
            method: 'get',
            endpoint: 'muxian/usertestmodel/${id}/test_consum_time/'
          },
          {
            name: 'getReport',
            method: 'get',
            endpoint: 'muxian/testreportmodel/'
          },
          {
            name: 'appraiserTitle',
            method: 'get',
            endpoint: 'muxian/appraisertitlemodel/'
          },
          {
            name: 'systemConfig',
            method: 'get',
            endpoint: 'muxian/systemconfigmodel/'
          },
          {
            name: 'createOrder',
            method: 'post',
            endpoint: 'muxian/order/'
          },
          {
            name: 'order',
            method: 'get',
            endpoint: 'muxian/ordermodel/'
          },
          {
            name: 'personalityTrait',
            method: 'get',
            endpoint: 'muxian/usertestmodel/${id}/part_report/'
          },
          {
            name: 'user',
            method: 'get',
            endpoint: 'muxian/personuser/${id}/'
          },
        ]
      }
    ]);
  }
}
