import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CheckReportComponent} from './check-report.component';
import {MatButtonModule, MatRadioModule, MatTabsModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    MatTabsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CheckReportComponent
      }
    ])
  ],
  declarations: [CheckReportComponent]
})
export class CheckReportModule { }
