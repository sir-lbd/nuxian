import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LaunchEvaluationService} from '../launch-evaluation.service';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentComponent implements OnInit {

  id: any;
  order: any;

  constructor(public activateRoute: ActivatedRoute,
              public service: LaunchEvaluationService,
              public router: Router,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = +params['id'];
      // console.log('id', this.id);
      this.service.getOrder(this.id).then(resp => {
        this.order = resp;
        console.log('order', this.order);
      }).catch(err => {
        console.log(err);
      });
    });
  }

  // 确认支付
  confirm() {
    this.service.confirmOrder(this.id).then(resp => {
      console.log(resp);
      this.snackBar.open('项目支付成功', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      setTimeout(() => {
        this.router.navigate(['/launch-evaluation']);
      }, 1000);
    }).catch(err => {
      console.log(err);
    });
  }

}
