import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ReportDetailService} from './report-detail.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../$services/auth/auth.service';

// @ts-ignore
@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportDetailComponent implements OnInit {

  get UserID() {
    return AuthService.UserID;
  }

  assessments: any;
  productID: any;
  personalityTrait: any;
  personalityTraitDatas: any;
  showLoading = true;
  factorData = [];
  factorScoreDatas: any;
  factorScore: any;
  factorAnalysis: any;
  testID: any;
  product: any;

  reports: any = {};
  user: any;

  constructor(protected service: ReportDetailService,
              protected activatedRouter: ActivatedRoute,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.assessments = params['ids'];
      this.productID = params['id'];
      this.testID = params['test'];
      this.service.getUserTest(this.testID).then((resp: any) => {
        this.product = resp.product;
        // console.log('product', this.product);
      }).catch(err => {
        console.log(err);
      });
      // console.log('assessments', this.assessments, 'productID', this.productID, 'testID', this.testID);
      this.service.getReport(this.assessments, this.testID).then((resp: any) => {
        // console.log('resp', resp);
        resp.forEach(r => {
          this.reports[r.assessment.Aid] = {};
          this.reports[r.assessment.Aid]['report'] = JSON.parse(r.report);
          this.reports[r.assessment.Aid]['assessment'] = r.assessment;
        });
        if (this.reports.A001) {
          this.reports.A001.report.keyword = [];
          this.reports.A001.report.assessments.forEach((item, index) => {
            if (index < 16) {
              // console.log('item', item);
              item.assessment_content.assessment_simple = item.assessment_content.assessment_simple.split('、');
              item.assessment_content.assessment_simple.forEach(a => {
                this.reports.A001.report.keyword.push(a);
              });
            }
            if (item.assessment_id.indexOf('X') >= 0 || item.assessment_id.indexOf('Y') >= 0) {
              this.factorData.push(item);
            }
          });
          // console.log('factorData', this.factorData);
          this.getReportData(this.reports.A001.assessment.id);
        }
        // console.log('reports', this.reports);
      }).catch(err => {
        console.log(err);
      });
    });
    this.getUser();
  }

  // 获取user
  getUser() {
    this.authService.getUser(this.UserID).then(resp => {
      // console.log(resp);
      this.user = resp;
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取
  getReportData(id) {
    this.service.getPersonalityTrait(this.testID, id, 16).then((response: any) => {
      // console.log('response', response);
      const yData = [];
      const xData = [];
      response.forEach(item => {
        xData.push(item.assessment_content.name);
        yData.push(item.standard_score);
      });
      this.personalityTraitDatas = response;
      this.personalityTrait = {
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        lineStyle: {
          color: ['#29c7cb']
        },
        itemStyle: {
          color: ['#29c7cb']
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xData
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: [
          {
            name: '分值',
            type: 'line',
            data: yData,
          },
        ]
      };
    }).catch(err => {
      console.log(err);
    });
    this.service.getPersonalityTrait(this.testID, id, 'x').then((response: any) => {
      // console.log('response', response);
      const yData = [];
      const xData = [];
      response.forEach((item, index) => {
        if (index === 0) {
          item.assessment_content.name = '适应与焦虑性';
          item.standard_score = 0;
        }
        xData.push(item.assessment_content.name);
        yData.push(item.standard_score);
      });
      this.factorScoreDatas = response;
      this.factorScore = {
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        lineStyle: {
          color: ['#29c7cb']
        },
        itemStyle: {
          color: ['#29c7cb']
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xData
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: [
          {
            name: '分值',
            type: 'line',
            data: yData,
          },
        ]
      };
    }).catch(err => {
      console.log(err);
    });
    this.service.getPersonalityTrait(this.testID, id, 'y').then((response: any) => {
      // console.log('response', response);
      this.factorAnalysis = response;
    }).catch(err => {
      console.log(err);
    });
  }

}
