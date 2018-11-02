import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ViewReportComponent} from './view-report.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewReportComponent
      }
    ])
  ],
  declarations: [ViewReportComponent]
})
export class ViewReportModule { }
