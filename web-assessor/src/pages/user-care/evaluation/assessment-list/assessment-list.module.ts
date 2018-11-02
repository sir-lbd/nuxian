import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AssessmentListComponent} from './assessment-list.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AssessmentListComponent
      }
    ])
  ],
  declarations: [AssessmentListComponent]
})
export class AssessmentListModule { }
