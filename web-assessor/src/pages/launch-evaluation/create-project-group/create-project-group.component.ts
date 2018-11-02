import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// @ts-ignore
import {LaunchEvaluationService, Product} from '../launch-evaluation.service';

@Component({
  selector: 'app-create-project-group',
  templateUrl: './create-project-group.component.html',
  styleUrls: ['./create-project-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CreateProjectGroupComponent implements OnInit {

  step = 1;
  pub = [
    {
      title: '推荐测评'
    },
    {
      title: '所有量表'
    },
    {
      title: '历史测评项目'
    }
  ];

  assessments: any;
  appraisers: any;
  product: Product = {};
  startFormatDate: any;
  endFormatDate: any;
  amounts = 0;

  constructor(protected router: Router,
              protected activatedRoute: ActivatedRoute,
              protected service: LaunchEvaluationService) {
  }

  ngOnInit() {
    this.getAllAssessment();
    this.getAppraiserTitles();
  }

  // 获取所有量表
  getAllAssessment() {
    this.service.getAllAssessment().then(resp => {
      this.assessments = resp;
      this.activatedRoute.params.subscribe(params => {
        const ids = params['ids'].split(',');
        // console.log('ids', ids);
        this.assessments.forEach(item => {
          ids.forEach(id => {
            id = parseInt(id, 10);
            if (item.id === id) {
              item.select = true;
            }
          });
        });
        console.log('assessments', this.assessments);
      });
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

  select(event, item) {
    item.select = !item.select;
    // console.log('event', event);
  }

  closeDate(type: number) {
    if (type === 0) {
      this.startFormatDate = this.service.formatDate(this.product.start_time);
    } else {
      this.endFormatDate = this.service.formatDate(this.product.end_time);
    }
  }

  confirmCreate() {
    const ids = [];
    let qnum = 0;
    let num = 0;
    let consume_time = 0;
    this.assessments.forEach(item => {
      if (item.select) {
        ids.push(item.id);
        qnum += item.num;
        num += 1;
        consume_time = item.consum_time;
          item.price_assessment.forEach(price => {
            if (price.appraiser_title === 0) {
              this.amounts += price.price;
            }
          });
      }
    });
    // console.log(this.amounts.toFixed(2));
    this.product.user_id = 1;
    this.product.start_time = this.startFormatDate;
    this.product.end_time = this.endFormatDate;
    this.product.assessments = ids.join(',');
    this.product.qnum = qnum;
    this.product.num = num;
    this.product.consum_time = consume_time;
    if (!this.product.name || !this.product.products_describe || !this.product.start_time || !this.product.end_time) {
      return;
    }
    // console.log('product', this.product);
    this.service.createProduct(this.product).then((resp: any) => {
      // console.log(resp);
      this.router.navigate(['/launch-evaluation/import-members', resp.id, this.amounts]);
    }).catch(err => {
      console.log(err);
    });
  }


}
