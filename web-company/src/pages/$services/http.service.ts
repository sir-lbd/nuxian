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
          // test: 'http://muxian-sms.wei7star.com',
          test: 'http://192.168.3.66:8000'
        },
        debug: true,
        protocols: [
          {
            name: 'login',
            method: 'post',
            endpoint: 'muxian/login/'
          },
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
          {
            name: 'companyUser',
            method: 'get',
            endpoint: 'muxian/company_member/'
          },
          {
            name: 'importMember',
            method: 'post',
            endpoint: 'muxian/usertestmodel/create_many/'
          },
          {
            name: 'userTest',
            method: 'get',
            endpoint: 'muxian/usertestmodel/'
          },
          {
            name: 'shopList',
            method: 'post',
            endpoint: 'muxian/companyshoplistmodel/'
          },
          {
            name: 'getShopList',
            method: 'get',
            endpoint: 'muxian/companyshoplistmodel/'
          },
          {
            name: 'getShopListDetail',
            method: 'get',
            endpoint: 'muxian/companyshoplistmodel/${id}/detail_info/'
          },
          {
            name: 'putShopList',
            method: 'put',
            endpoint: 'muxian/companyshoplistmodel/${id}/'
          },
          {
            name: 'createOrder',
            method: 'post',
            endpoint: 'muxian/companyordermodel/'
          },
          {
            name: 'companyOrder',
            method: 'get',
            endpoint: 'muxian/companyordermodel/${id}/'
          },
          {
            name: 'putOrder',
            method: 'put',
            endpoint: 'muxian/companyordermodel/${id}/'
          },
          {
            name: 'position',
            method: 'get',
            endpoint: 'muxian/companypositionmodel/?limit=10'
          },
          {
            name: 'positionSet',
            method: 'get',
            endpoint: 'muxian/companypositionmodel/'
          },
          {
            name: 'postPosition',
            method: 'post',
            endpoint: 'muxian/companypositionmodel/'
          },
          {
            name: 'putPosition',
            method: 'put',
            endpoint: 'muxian/companypositionmodel/${id}/'
          },
          {
            name: 'permission',
            method: 'get',
            endpoint: 'muxian/companypermissionmodel/'
          },
          {
            name: 'user',
            method: 'get',
            endpoint: 'muxian/personuser/${id}/'
          },
          {
            name: 'framework',
            method: 'get',
            endpoint: 'muxian/companymodel/${id}/frameworks/'
          },
          {
            name: 'addFramework',
            method: 'post',
            endpoint: 'muxian/companyframeworkmodel/'
          },
          {
            name: 'editCompany',
            method: 'put',
            endpoint: 'muxian/companymodel/${id}/'
          },
          {
            name: 'editFramework',
            method: 'put',
            endpoint: 'muxian/companyframeworkmodel/${id}/'
          },
          {
            name: 'deleteFramework',
            method: 'delete',
            endpoint: 'muxian/companyframeworkmodel/${id}/'
          },
          {
            name: 'personUsers',
            method: 'get',
            endpoint: 'muxian/companyframeworkmodel/${id}/'
          },
          {
            name: 'editPersonUser',
            method: 'put',
            endpoint: 'muxian/personuser/${id}/'
          },
          {
            name: 'deletePersonUser',
            method: 'delete',
            endpoint: 'muxian/personuser/${id}/'
          },
          {
            name: 'companyLabels',
            method: 'get',
            endpoint: 'muxian/companymodel/${id}/labels/'
          },
          {
            name: 'addLabel',
            method: 'post',
            endpoint: 'muxian/companylabelmodel/'
          },
          {
            name: 'labelMembers',
            method: 'get',
            endpoint: 'muxian/companylabelmodel/${id}/members/'
          },
          {
            name: 'deleteLabel',
            method: 'delete',
            endpoint: 'muxian/companylabelmodel/${id}/'
          },
          {
            name: 'editLabel',
            method: 'put',
            endpoint: 'muxian/companylabelmodel/${id}/'
          },
          {
            name: 'deleteFromLabel',
            method: 'post',
            endpoint: 'muxian/companylabelmodel/${id}/remove/'
          },
          {
            name: 'putLabel',
            method: 'put',
            endpoint: 'muxian/companylabelmodel/${id}/'
          },
        ]
      }
    ])
  };
}
