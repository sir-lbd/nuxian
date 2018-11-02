import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material';
import {EvaluationRecordsComponent} from './evaluation-records.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EvaluationRecordsComponent
      }
    ])
  ],
  declarations: [EvaluationRecordsComponent]
})
export class EvaluationRecordsModule { }
