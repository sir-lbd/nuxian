import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {EvaluationComponent} from './evaluation.component';
import {MatButtonModule, MatChipsModule, MatRippleModule} from '@angular/material';
import {AssessorReportModule} from "./assessor-report/assessor-report.module";
import {TestReportModule} from "./test-report/test-report.module";
// import {AssessorReportComponent} from "./assessor-report/assessor-report.component";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    MatChipsModule,
    AssessorReportModule,
    TestReportModule,
    RouterModule.forChild([
      {
        path: '',
        component: EvaluationComponent,
      }
      ,
      {
        path: 'upload/:type',
        loadChildren: './upload/upload.module#UploadModule',
      }
    ])
  ],
  declarations: [EvaluationComponent,]
})
export class EvaluationModule { }
