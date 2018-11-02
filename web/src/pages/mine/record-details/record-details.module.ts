import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatTabsModule} from '@angular/material';
import {RecordDetailsComponent} from './record-details.component';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RecordDetailsComponent
      }
    ])
  ],
  declarations: [RecordDetailsComponent]
})
export class RecordDetailsModule { }
