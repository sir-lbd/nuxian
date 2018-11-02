import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {StartEvaluationComponent} from './start-evaluation.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StartEvaluationComponent
      }
    ])
  ],
  declarations: [StartEvaluationComponent]
})
export class StartEvaluationModule { }
