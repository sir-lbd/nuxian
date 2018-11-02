import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ExpertIntroductionComponent} from './expert-introduction.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExpertIntroductionComponent
      }
    ])
  ],
  declarations: [ExpertIntroductionComponent]
})
export class ExpertIntroductionModule { }
