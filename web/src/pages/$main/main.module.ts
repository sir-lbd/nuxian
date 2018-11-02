import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {ComponentsModule} from '../../components/components.module';
import {SliderComponent} from './slider/slider.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MatMenuModule, MatButtonModule} from '@angular/material';
import {RouteGuardService} from '../$services/canActivate/routeguard.service';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: '/auth/login'
          },
          {
            path: 'auth',
            loadChildren: '../auth/auth.module#AuthModule',
          },
          {
            path: 'user-care',
            loadChildren: '../user-care/user-care.module#UserCareModule',
            canActivate: [RouteGuardService]
          },
          {
            // id: 产品id
            path: 'user-care/evaluation/assessment-list/:id/:ids/:index/:test',
            loadChildren: '../user-care/evaluation/assessment-list/assessment-list.module#AssessmentListModule',
            canActivate: [RouteGuardService]
          },
          {
            // id    量表的id列表
            // index  当前的量表下标
            path: 'user-care/evaluation/start-evaluation/:id/:ids/:index/:test',
            loadChildren: '../user-care/evaluation/start-evaluation/start-evaluation.module#StartEvaluationModule',
            canActivate: [RouteGuardService]
          },
          {
            // id: 产品id
            path: 'user-care/evaluation/answer-evaluation/:id/:ids/:index/:test',
            loadChildren: '../user-care/evaluation/answer-evaluation/answer-evaluation.module#AnswerEvaluationModule',
            canActivate: [RouteGuardService]
          },
          {
            // id: 产品id
            path: 'user-care/view-report/check-report/:ids/:id/:test',
            loadChildren: '../user-care/view-report/check-report/check-report.module#CheckReportModule',
            canActivate: [RouteGuardService]
          },
          {
            // 订单id
            path: 'user-care/development-counseling/confirm-payment/:id',
            loadChildren: '../user-care/development-counseling/confirm-payment/confirm-payment.module#ConfirmPaymentModule',
          canActivate: [RouteGuardService]
          },
          {
            path: 'user-care/evaluation/test-report',
            loadChildren: '../user-care/evaluation/test-report/test-report.module#TestReportModule',
            canActivate: [RouteGuardService]
          },
          {
            // id: 产品id
            path: 'user-care/view-report/report-detail/:ids/:id/:test',
            loadChildren: '../user-care/view-report/report-detail/report-detail.module#ReportDetailModule',
            canActivate: [RouteGuardService]
          },
          {
            path: 'user-care/development-counseling/expert-introduction',
            loadChildren: '../user-care/development-counseling/expert-introduction/expert-introduction.module#ExpertIntroductionModule',
          canActivate: [RouteGuardService]
          },
          {
            path: 'mine',
            loadChildren: '../mine/mine.module#MineModule',
            canActivate: [RouteGuardService]
          },
          {
            path: 'mine/record-details/:id',
            loadChildren: '../mine/record-details/record-details.module#RecordDetailsModule',
            canActivate: [RouteGuardService]
          },
        ]
      }
    ])
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
  ]
})
export class MainModule {
}
