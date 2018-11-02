import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AssessorReportComponent} from './assessor-report.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        component:  AssessorReportComponent
      }
    ])
  ],
  declarations: [ AssessorReportComponent ]
})
export class AssessorReportModule { }
