import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {TestDetailReportComponent} from './test-detail-report.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TestDetailReportComponent
      }
    ])
  ],
  declarations: [TestDetailReportComponent]
})
export class TestDetailReportModule { }
