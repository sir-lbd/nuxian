import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ConfirmPaymentComponent} from './confirm-payment.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmPaymentComponent
      }
    ])
  ],
  declarations: [ConfirmPaymentComponent]
})
export class ConfirmPaymentModule { }
