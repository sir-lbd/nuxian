import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserCareComponent} from './user-care.component';
import {ComponentsModule} from '../../components/components.module';
import {RouteGuardService} from '../$services/canActivate/routeguard.service';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserCareComponent,
        children: [
          {
            path: 'evaluation',
            loadChildren: './evaluation/evaluation.module#EvaluationModule',
            canActivate: [RouteGuardService]
          },
          {
            path: 'view-report',
            loadChildren: './view-report/view-report.module#ViewReportModule',
            canActivate: [RouteGuardService]
          },
          {
            path: 'development-counseling',
            loadChildren: './development-counseling/development-counseling.module#DevelopmentCounselingModule',
            canActivate: [RouteGuardService]
          },
        ]
      }
    ])
  ],
  declarations: [UserCareComponent]
})
export class UserCareModule {
}
