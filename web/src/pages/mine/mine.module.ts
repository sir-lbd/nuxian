import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MineComponent} from './mine.component';
import {ComponentsModule} from '../../components/components.module';
import {MatMenuModule, MatButtonModule} from '@angular/material';

// @ts-ignore
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MineComponent,
        children: [
          {
            path: 'user-info',
            loadChildren: './user-info/user-info.module#UserInfoModule'
          },
          {
            path: 'evaluation-records',
            loadChildren: './evaluation-records/evaluation-records.module#EvaluationRecordsModule'
          }
        ]
      }
    ])
  ],
  declarations: [MineComponent]
})
export class MineModule {
}
