import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserCareComponent} from './user-care.component';
import {ComponentsModule} from '../../components/components.module';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserCareComponent,
        children: [
          {
            path: 'evaluation',
            loadChildren: './evaluation/evaluation.module#EvaluationModule'
          },
          {
            path: 'view-report',
            loadChildren: './view-report/view-report.module#ViewReportModule'
          },
          {
            path: 'development-counseling',
            loadChildren: './development-counseling/development-counseling.module#DevelopmentCounselingModule'
          },
        ]
      }
    ])
  ],
  declarations: [UserCareComponent]
})
export class UserCareModule {
}
