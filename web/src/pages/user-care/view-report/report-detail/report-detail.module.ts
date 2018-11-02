import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReportDetailComponent} from './report-detail.component';

import { NgxEchartsModule } from 'ngx-echarts';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReportDetailComponent
      }
    ])
  ],
  declarations: [ReportDetailComponent]
})
export class ReportDetailModule {
}
