import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TestReportComponent} from './test-report.component';
import {AssessorReportComponent} from '../assessor-report/assessor-report.component';
import {MatButtonModule} from '@angular/material';
import { AssessorReportModule } from '../assessor-report/assessor-report.module';

// @ts-ignore
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    AssessorReportModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestReportComponent,
      },
      {
        path: 'report',
        component: AssessorReportComponent
      }
    ])
  ],
  declarations: [AssessorReportComponent],

})
export class TestReportModule {
}
