import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentComponent implements OnInit {
  lb = 0;

  constructor(protected router: Router) {
  }

  ngOnInit() {
  }

  goDru(){
    this.router.navigate(['/user-care/evaluation/file'])
  }
}
