import {
  AfterViewInit,
  Component, ElementRef, OnInit, ViewChild, ViewEncapsulation,
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CheckReportService} from './check-report.service';
import {EvaluationService} from '../../../$services/evaluation/evaluation.service';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../../$services/auth/auth.service';
import {HttpService} from "../../../$services/http.service";

declare const Swiper;

@Component({
  selector: 'app-check-report',
  templateUrl: './check-report.component.html',
  styleUrls: ['./check-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CheckReportComponent implements OnInit, AfterViewInit {

  @ViewChild('Equity') equity: ElementRef;

  get UserID() {
    return AuthService.UserID;
  }
  get URL() {
    return HttpService.URL;
  }
  bg = -1;
  nums = 0;
  ////
  act = false;
  hidden = 0;
  report = -1;
  appraiser: any = [];
  machine: any;
  id: any;
  ids: any;
  amounts: any;
  assessments: any;
  reportIntroduce: any;
  selectedType: any;
  testID: any;
  mySwiper: any;

  banner = [
    [{
      name: '基础报告',
      active: true,
      num: 0,
      title: [
        {
          img: ['assets/img/top-1.png', 'assets/img/top-1-1.png'],
          span: '完整评价等级'
        },
        {
          img: ['assets/img/top-2.png', 'assets/img/top-2-1.png'],
          span: '学术名词解释'
        },
        {
          img: ['assets/img/top-3.png', 'assets/img/top-3-3.png'],
          span: '丰富详尽图标'
        }
      ],
    },
    {
      name: '咨询师报告',
      num: 1,
      title: [
        {
          img: ['assets/img/top-4.png', 'assets/img/top-4-4.png'],
          span: '咨询师精读撰稿'
        },
        {
          img: ['assets/img/top-5.png', 'assets/img/top-5-5.png'],
          span: '结合个人背景'
        },
        {
          img: ['assets/img/top-6.png', 'assets/img/top-6-6.png'],
          span: '表内交叉分析'
        }
      ],
    }],
    [{
      name: '高级咨询师报告',
      num: 2,
      title: [
        {
          img: ['assets/img/top-7-7.png', 'assets/img/top-7.png'],
          span: '多表综合分析'
        },
        {
          img: ['assets/img/top-8-8.png', 'assets/img/top-8.png'],
          span: '对比团队成员'
        },
        {
          img: ['assets/img/top-9-9.png', 'assets/img/top-9.png'],
          span: '个人发展咨询'
        }
      ],
    },
    {
      name: '专家报告',
      num: 3,
      title: [
        {
          img: ['assets/img/top-10.png', 'assets/img/top-10-10.png'],
          span: '教授独写撰稿'
        },
        {
          img: ['assets/img/top-11.png', 'assets/img/top-11-11.png'],
          span: '职业生涯计划'
        },
        {
          img: ['assets/img/top-12.png', 'assets/img/top-12-12.png'],
          span: '个性根源解析'
        }
      ],
    }]
  ];

  select = 0;

  constructor(public _router: Router, public service: CheckReportService, protected evaluation: EvaluationService,
              public snackBar: MatSnackBar, protected activedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // console.log('banner', this.banner);

    this.activedRoute.params.subscribe(params => {
      this.ids = params['ids'];
      this.id = +params['id'];
      this.testID = +params['test'];
      this.amounts = this.ids.split(',').length;
      this.evaluation.getAssessmentList(this.ids).then((assessments: any) => {
        // console.log('assessments', assessments);
        // 获取报告类型
        this.service.getReportType().then((resp: any) => {
          // console.log('resp', resp);
          resp.results.forEach(item => {
            item.price = 0;
            assessments.results.forEach(assessment => {
              assessment.price_assessment.length && assessment.price_assessment.forEach(price => {
                // console.log('price', price);
                if (price.appraiser_title === item.id) {
                  item.price += price.price;
                }
              });
            });
            item.price = item.price.toFixed(2);
            if (!item.is_person) {
              this.machine = item;
            } else {
              item.image_url = this.URL + item.image_url;
              this.appraiser.push(item);
            }
          });
        }).catch(err => {
          console.log(err);
        });
        // console.log('assessments', this.assessments);
      }).catch(err => {
        console.log(err);
      });
    });
    this.getSystemConfig();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.mySwiper = new Swiper(this.equity.nativeElement, {
        loop: false,
        allowSlidePrev: true,
        observer: true
      });
    }, 1000);
  }

  getSystemConfig() {
    this.service.getSystemConfig('reportIntroduce').then(resp => {
      // console.log('resp', resp);
      this.reportIntroduce = resp;
    }).catch(err => {
      console.log(err);
    });
  }

  next() {
    this.mySwiper.slideNext();
  }

  pre () {
    this.mySwiper.slidePrev();
  }

  // 查看每个权益
  goOne(i) {
    this.nums = i;
  }

  // 选择报告类型
  selectReport(event, type?: any) {
    this.report = event.value;
    // console.log('type', type);
    this.selectedType = type;
    // this.banner[type.id].actives = !this.act;
    this.bg = type.id;
    this.nums = type.id;

  }

  // 确认购买 创建订单
  createOrder() {
    if (!this.selectedType) {
      this.snackBar.open('请选择报告类型或咨询师！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      return;
    }
    this.service.createOrder(this.selectedType.id, this.selectedType.price, this.id, this.UserID).then((resp: any) => {
      // console.log('resp', resp);
      this._router.navigate(['/user-care/development-counseling/confirm-payment', resp.id]);
    }).catch(err => {
      console.log(err);
    });
  }

  checkReport() {
    this._router.navigate(['/user-care/view-report/report-detail', this.ids, this.id, this.testID]);
  }

  // 返回首页
  backToHome() {
    this._router.navigate(['/user-care/evaluation']);
  }

  goSelectAssessor() {
    this._router.navigate(['user-care/development-counseling/expert-introduction']);
  }

  // 查看咨询师详情
  goDetailReport() {
    this._router.navigate(['/user-care/view-report/report-detail']);
  }

}
