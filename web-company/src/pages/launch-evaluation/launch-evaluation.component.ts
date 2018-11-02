import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectManagementService} from '../project-management/project-management.service';
import {LaunchEvaluationService} from './launch-evaluation.service';
import {HttpService} from "../$services/http.service";
import {AuthService} from "../$services/auth/auth.service";

// @ts-ignore
@Component({
  selector: 'app-launch-evaluation',
  templateUrl: './launch-evaluation.component.html',
  styleUrls: ['./launch-evaluation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LaunchEvaluationComponent implements OnInit {

  get url() {
    return HttpService.URL;
  }

  get UserID() {
    return AuthService.UserID;
  }

  type = 0;
  nav = [
    {
      title: '测评品牌'
    },
    {
      title: '适用场景'
    }
    ,
    {
      title: '所有量表'
    }
    ,
    {
      title: '历史测评项目'
    }
  ];

  recommendList: any;
  appraisers: any;
  assessments: any;
  sceneData: any;
  brandData: any;

  constructor(protected router: Router, protected pmServices: ProjectManagementService,
              protected service: LaunchEvaluationService,
              protected httpService: HttpService) {
  }

  ngOnInit() {
    if (this.UserID) {
      this.getRecommend();
      this.getAppraiserTitles();
      this.getAllAssessment();
      this.getScene();
      this.getBrand();
    }
  }

  // 获取推荐品牌
  getBrand() {
    const data = {brand: 1, limit: 1000};
    this.pmServices.getProductList(data).then(resp => {
      // console.log('resp', resp);
      this.brandData = resp;
      // console.log('brandData', this.brandData);
    }).catch(err => {
      console.log(err);
    });
  }
  // 获取试用场景
  getScene() {
    const data = {scene: 1, limit: 1000};
    this.pmServices.getProductList(data).then(resp => {
      // console.log('resp', resp);
      this.sceneData = resp;
      // console.log('getBrand', this.sceneData);
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取历史测评项目
  getRecommend() {
    const data = {user_id: this.UserID, brand: 0, scene: 0, limit: 1000};
    this.pmServices.getProductList(data).then(resp => {
      // console.log('resp', resp);
      this.recommendList = resp;
      // console.log('recommendList', this.recommendList);
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取测评师等级
  getAppraiserTitles() {
    this.service.getAppraiserTitles().then(resp => {
      this.appraisers = resp;
      this.appraisers.forEach(a => {
        a.label = a.label.split(',');
        a.image_url = this.url + a.image_url;
      });
      console.log('appraisers', this.appraisers);
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取所有量表
  getAllAssessment() {
    this.service.getAllAssessment().then(resp => {
      this.assessments = resp;
      // console.log('assessments', this.assessments);
    }).catch(err => {
      console.log(err);
    });
  }

  toCreate() {
    this.router.navigate(['/launch-evaluation/create-project-group']);
  }

}
