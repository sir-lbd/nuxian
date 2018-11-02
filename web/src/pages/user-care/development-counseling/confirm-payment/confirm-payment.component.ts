import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {ConfirmPaymentService} from './confirm-payment.service';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmPaymentComponent implements OnInit {

  type = -1;
  id: any;
  order: any;
  mark: any;

  constructor(public _router: Router, protected service: ConfirmPaymentService,
              public snackBar: MatSnackBar, protected activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(params => {
      this.id = +params['id'];
      console.log('id', this.id);
      this.service.getOrderDetail(this.id).then((resp: any) => {
        console.log('resp', resp);
        this.order = resp;
      }).catch(err => {
        console.log(err);
      });
    });
  }

  cancelOrder() {

  }

  confirmPay() {
    console.log('mark', this.mark);
  }

}
