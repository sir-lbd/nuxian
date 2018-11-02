import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReportDetailComponent} from './report-detail.component';

@NgModule({
  imports: [
    CommonModule,
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
