import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ConfirmPaymentComponent} from './confirm-payment.component';
import {MatButtonModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
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
