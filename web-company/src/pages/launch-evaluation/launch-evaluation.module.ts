import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../../components/components.module';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatCheckboxModule,
} from '@angular/material';
import {LaunchEvaluationComponent} from './launch-evaluation.component';
import {CreateProjectGroupComponent} from './create-project-group/create-project-group.component';
import {ImportMembersComponent} from './import-members/import-members.component';
import {CreateOrderComponent} from './create-order/create-order.component';
import {FormsModule} from '@angular/forms';
// @ts-ignore
import {PaymentComponent} from './payment/payment.component';
import {RouteGuardService} from "../$services/canActivate/routeguard.service";

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    RouterModule.forChild([
      {
        path: '',
        component: LaunchEvaluationComponent,
      },
      {
        path: 'create-project-group',
        component: CreateProjectGroupComponent,
      },
      {
        path: 'import-members/:id',
        component: ImportMembersComponent,
      },
      {
        path: 'create-order/:id',
        component: CreateOrderComponent,
      },
      {
        path: 'payment/:id',
        component: PaymentComponent,
      },
    ])
  ],
  declarations: [LaunchEvaluationComponent, CreateProjectGroupComponent,
    ImportMembersComponent, CreateOrderComponent, PaymentComponent],
  providers: [RouteGuardService]
})
export class LaunchEvaluationModule { }
