import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {EvaluationComponent} from './evaluation.component';
import {MatButtonModule, MatChipsModule, MatRippleModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    MatChipsModule,
    RouterModule.forChild([
      {
        path: '',
        component: EvaluationComponent,
      },
      {
        path: 'upload/:type',
        loadChildren: './upload/upload.module#UploadModule',
      },
    ])
  ],
  declarations: [EvaluationComponent]
})
export class EvaluationModule { }
