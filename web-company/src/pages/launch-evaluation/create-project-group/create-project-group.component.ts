import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// @ts-ignore
import {LaunchEvaluationService, Product} from '../launch-evaluation.service';
import {ProjectManagementService} from '../../project-management/project-management.service';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../$services/auth/auth.service';

@Component({
  selector: 'app-create-project-group',
  templateUrl: './create-project-group.component.html',
  styleUrls: ['./create-project-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CreateProjectGroupComponent implements OnInit {

  get UserID() {
    return AuthService.UserID;
  }

  label = 0;
  step = 0;
  pub = [
    {
      title: '测评品牌'
    },
    {
      title: '适用场景'
    },
    {
      title: '所有量表'
    },
    {
      title: '历史评测项目'
    }
  ];

  reports = [
    {
      id: -1,
      name: '基础数据',
      select: true,
      disable: true,
      value: -1,
    },
    {
      id: 0,
      name: '基础报告',
      select: false,
      disable: false,
      value: 0,
    },
    {
      id: 1,
      name: '咨询报告',
      select: false,
      disable: true,
      value: 1
    },
  ];

  assessments: any;
  appraisers: any;
  product: Product = {};
  startFormatDate: any;
  endFormatDate: any;
  amounts = 0;
  recommendList: any;
  selectAppraiser: any;
  amount = 0;
  selected = [];
  report = -1;
  brandData: any;
  sceneData: any;
  historyData: any;
  products: any;

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected service: LaunchEvaluationService,
              protected pmServices: ProjectManagementService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getBrand();
    this.getScene();
    this.getHistory();
    this.getAllAssessment();
    this.getAppraiserTitles();
  }

  // 切换
  selectLabel(index: number) {
    this.label = index;
  }

  // 获取历史测评项目
  getHistory() {
    const data = {user_id: this.UserID, brand: 0, scene: 0, limit: 1000};
    this.pmServices.getProductList(data).then((resp: any) => {
      resp.forEach(item => {
        item.assessments = item.assessments.split(',');
        item.price = 0;
        item.copyright_fee = 0;
        item.assessments_list.forEach(list => {
          item.price += list.price;
          item.copyright_fee += list.copyright_fee;
        });
        item.price = parseFloat(item.price.toFixed(2));
        item.copyright_fee = parseFloat(item.copyright_fee.toFixed(2));
      });
      this.historyData = resp;
      // console.log('historyData', this.historyData);
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取推荐品牌
  getBrand() {
    const data = {brand: 1, limit: 1000};
    this.pmServices.getProductList(data).then((resp: any) => {
      // console.log('resp', resp);
      resp.forEach(item => {
        item.assessments = item.assessments.split(',');
        item.price = 0;
        item.copyright_fee = 0;
        item.assessments_list.forEach(list => {
          item.price += list.price;
          item.copyright_fee += list.copyright_fee;
        });
        item.price = parseFloat(item.price.toFixed(2));
        item.copyright_fee = parseFloat(item.copyright_fee.toFixed(2));
      });
      this.brandData = resp;
      // console.log('brandData', this.brandData);
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取试用场景
  getScene() {
    const data = {scene: 1, limit: 1000};
    this.pmServices.getProductList(data).then((resp: any) => {
      // console.log('resp', resp);
      resp.forEach(item => {
        item.assessments = item.assessments.split(',');
        item.price = 0;
        item.copyright_fee = 0;
        item.assessments_list.forEach(list => {
          item.price += list.price;
          item.copyright_fee += list.copyright_fee;
        });
        item.price = parseFloat(item.price.toFixed(2));
        item.copyright_fee = parseFloat(item.copyright_fee.toFixed(2));
      });
      this.sceneData = resp;
      // console.log('sceneData', this.sceneData);
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取所有量表
  getAllAssessment() {
    this.service.getAllAssessment().then(resp => {
      this.assessments = resp;
      this.assessments.forEach(a => {
        a.select = false;
      });
      console.log('assessments', this.assessments);
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

  // 选择测评师等级
  checkAppraiser(event: any, item: any) {
    item.select = !item.select;
    this.reports[1].select = true;
    this.reports[2].select = true;
    this.report = item.id;
    this.caculateAmount();
    // console.log('report', this.report);
  }

  // 选择报告
  selectReport(event: any, r: any) {
    r.select = !r.select;
    // console.log('r', r);
    // console.log('amount', this.amount);
    if (r.select) {
      this.report = r.value;
      if (this.report === 1) {
        this.reports[1].select = true;
      }
    } else {
      if (this.reports[1].select && !this.reports[2].select) {
        this.report = 0;
      }
      if (!this.reports[1].select && !this.reports[2].select) {
        this.report = -1;
      }
    }

    this.caculateAmount();
    // console.log('report', this.report);
  }

  // 选择产品
  select(event, item) {
    // this.selected = [];
    // console.log('event', event);
    item.select = event.checked;
    // this.selected = [];
    // console.log('label', this.label);
    // console.log('item', item);
    if (this.label === 2) {
      if (item.select) {
        if (this.selected.indexOf(item.id) < 0) {
          this.selected.push(item.id);
        }
      } else {
        if (this.selected.indexOf(item.id) >= 0) {
          this.selected.splice(this.selected.indexOf(item.id), 1);
        }
      }
    } else {
      this.products = [];
      this.caculateAssessments();
    }
    // this.caculateAmount();
    // console.log('selected', this.selected);
  }

  // 统计选择量表
  caculateAssessments() {
    this.historyData && this.historyData.length && this.historyData.forEach(list => {
      // console.log('list', list);
      if (list.select) {
        this.products.push(list.id);
        list.assessments.forEach(a => {
          a = parseInt(a, 10);
          if (this.selected.indexOf(a) < 0) {
            this.selected.push(a);
          }
        });
      }
    });
    this.brandData && this.brandData.length && this.brandData.forEach(list => {
      // console.log('list', list);
      if (list.select) {
        this.products.push(list.id);
        list.assessments.forEach(a => {
          a = parseInt(a, 10);
          if (this.selected.indexOf(a) < 0) {
            this.selected.push(a);
          }
        });
      }
    });
    this.sceneData && this.sceneData.length && this.sceneData.forEach(list => {
      // console.log('list', list);
      if (list.select) {
        this.products.push(list.id);
        list.assessments.forEach(a => {
          a = parseInt(a, 10);
          if (this.selected.indexOf(a) < 0) {
            this.selected.push(a);
          }
        });
      }
    });
    // console.log('selectedAssessments', selectedAssessments);
    this.assessments && this.assessments.length && this.assessments.forEach(assessment => {
      if (this.selected.indexOf(assessment.id) >= 0) {
        assessment.select = true;
      } else {
        assessment.select = false;
      }
    });
    // console.log('products', this.products);
    // console.log('assessments', this.assessments);
  }

  // 计算金额
  caculateAmount() {
    // console.log('assessments', this.assessments);
    // console.log('appraisers', this.appraisers);
    // console.log('report', this.reports);
  }

  closeDate(type: number) {
    if (type === 0) {
      if (this.product.start_time) {
        this.startFormatDate = this.service.formatDate(this.product.start_time);
      }
    } else {
      if (this.product.end_time) {
        this.endFormatDate = this.service.formatDate(this.product.end_time);
      }
    }
  }

  upStep() {
    this.step = 0;
  }

  nextStep() {
    // console.log('report', this.report);
    // console.log('selected', this.selected);
    if (!this.selected.length) {
      this.snackBar.open('请选择产品或量表！', '', {
        duration: 2000,
        verticalPosition: 'top'
      })
      return;
    }
    this.step = 1;
    // console.log('selected', this.selected);
  }

  confirmCreate() {
    // console.log('product', this.product);
    if (!this.product.name || !this.product.products_describe || !this.product.start_time || !this.product.end_time) {
      this.snackBar.open('请填写项目组相关内容！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      return;
    }
    const now = new Date(this.service.formatDate(new Date(), 1));
    // console.log('now', now);
    if (now > this.product.start_time) {
      this.snackBar.open('开始时间不能小于当前时间！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      return;
    }
    if (this.product.start_time >= this.product.end_time) {
      this.snackBar.open('开始时间不能大于或等于结束时间！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      return;
    }

    let qnum = 0;
    let num = 0;
    let consume_time = 0;
    this.assessments.forEach(item => {
      if (item.select) {
        qnum += item.num;
        num += 1;
        consume_time = item.consum_time;
      }
    });
    // console.log('amounts', this.amounts);
    this.product.user_id = this.UserID;
    this.product.start_time = this.startFormatDate;
    this.product.end_time = this.endFormatDate;
    this.product.assessments = this.selected.join(',');
    this.product.qnum = qnum;
    this.product.num = num;
    this.product.consum_time = consume_time;
    if (this.products && this.products.length) {
      this.product.products = this.products.join(',');
    }

    // console.log('report', this.report);
    this.service.createProduct(this.product).then((resp: any) => {
      // console.log(resp);
      this.service.postShopList(resp.id, this.UserID, this.report).then((res: any) => {
        // console.log('res', res);
        this.router.navigate(['/launch-evaluation/import-members', res.id]);
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
      console.log(err);
    });
  }

}
