import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AnswerEvaluationComponent} from './answer-evaluation.component';
import {LoadingComponent} from '../../../loading/loading.component';
// 声明子组件
import {AnswerEvaluationDialogComponent} from './answer-evaluation-dialog/answer-evaluation-dialog.component';
import {MatDialogModule, MatRadioModule, MatButtonModule, MatProgressBarModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
    MatButtonModule,
    MatProgressBarModule,
    RouterModule.forChild([
      {
        path: '',
        component: AnswerEvaluationComponent,
      }
    ])
  ],
  declarations: [AnswerEvaluationComponent, AnswerEvaluationDialogComponent, LoadingComponent],
  entryComponents: [AnswerEvaluationDialogComponent],
  providers: [AnswerEvaluationDialogComponent]
})
export class AnswerEvaluationModule {
}
