import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LaunchEvaluationService} from '../launch-evaluation.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateOrderComponent implements OnInit {

  id: any;
  report: any;
  product: any;
  assessments: any;
  appraiser: any;
  users: any;
  shop: any;

  constructor(public activatedRoute: ActivatedRoute,
              private service: LaunchEvaluationService,
              public router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.getImportMembers(this.id);
      this.service.getShopList(this.id).then((shop: any) => {
        shop.detail = JSON.parse(shop.detail);
        // console.log('shop', shop);
        this.shop = shop;
        this.report = shop.appraiser_title;
        this.service.getProductByID(shop.product).then((resp: any) => {
          this.product = resp;
          // console.log('product', this.product);
          this.service.getAssessmentsByProduct(resp.assessments).then(assessments => {
            this.assessments = assessments;
            // console.log('assessments', this.assessments);
          }).catch(err => {
            console.log(err);
          });
        }).catch(err => {
          console.log(err);
        });
        if (this.report > 0) {
          this.service.getAppraiser(this.report).then(resp => {
            this.appraiser = resp;
            // console.log('appraiser', this.appraiser);
          }).catch(err => {
            console.log(err);
          });
        }
      }).catch(err => {
        console.log(err);
      });
    });
  }

  // 获取导入用户数据
  getImportMembers(id: any) {
    this.service.getShopListDetail(id).then(resp => {
      this.users = resp;
      // console.log('users', this.users);
    }).catch(err => {
      console.log(err);
    });
  }


  // 创建订单
  createOrder() {
    // this.router.navigate(['/launch-evaluation/payment', 1]);
    this.service.createOrder(this.product.id, this.shop.id).then((resp: any) => {
      this.router.navigate(['/launch-evaluation/payment', resp.id]);
    }).catch(err => {
      console.log(err);
    });
  }

  backTo() {
    // console.log('bb');
    window.history.back(-1);
  }


}
