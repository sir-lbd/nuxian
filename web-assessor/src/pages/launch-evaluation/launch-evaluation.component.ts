import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectManagementService} from '../project-management/project-management.service';
import {LaunchEvaluationService} from './launch-evaluation.service';

// @ts-ignore
@Component({
  selector: 'app-launch-evaluation',
  templateUrl: './launch-evaluation.component.html',
  styleUrls: ['./launch-evaluation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LaunchEvaluationComponent implements OnInit {

  type = 0;
  nav = [
    {
      title: '推荐测评'
    },
    {
      title: '测评品牌'
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

  constructor(protected router: Router, protected pmServices: ProjectManagementService,
              protected service: LaunchEvaluationService) {
  }

  ngOnInit() {
    this.getRecommend();
    this.getAppraiserTitles();
    this.getAllAssessment();
  }

  // 获取推荐产品
  getRecommend() {
    this.pmServices.getProductList(1).then(resp => {
      console.log('resp', resp);
      this.recommendList = resp;
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取测评师等级
  getAppraiserTitles() {
    this.service.getAppraiserTitles().then(resp => {
      // console.log('resp', resp);
      this.appraisers = resp;
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取所有量表
  getAllAssessment() {
    this.service.getAllAssessment().then(resp => {
      console.log(resp);
      this.assessments = resp;
    }).catch(err => {
      console.log(err);
    });
  }

  // 选择产品
  selectProduct(item: any) {
    item.select = !item.select;
  }

  // 选择量表
  selectAssessment(item: any) {
    item.select = !item.select;
  }

  cancelSelect() {
    this.assessments.forEach(item => {
      item.select = false;
    });
  }

  confirmSelect() {
    const assessments = [];
    this.assessments.forEach(item => {
      if (item.select) {
        assessments.push(item.id);
      }
    });
    // console.log('assessments', assessments);
    if (!assessments.length) {
      return;
    }

    this.router.navigate(['/launch-evaluation/create-project-group', assessments.join(',')]);
  }

  chose(i) {
    this.type = i;
  }

  goProductList() {
    this.router.navigate(['/launch-evaluation/create-project-group']);
  }
}
