import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {DevelopmentCounselingComponent} from './development-counseling.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DevelopmentCounselingComponent
      },
      // {
      //   path: 'expert-introduction',
      //   loadChildren: './expert-introduction/expert-introduction.module#ExpertIntroductionModule',
      // },
      // {
      //   path: 'confirm-payment',
      //   loadChildren: './confirm-payment/confirm-payment.module#ConfirmPaymentModule',
      // },
    ])
  ],
  declarations: [DevelopmentCounselingComponent]
})
export class DevelopmentCounselingModule { }
