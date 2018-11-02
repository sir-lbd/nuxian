import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material';
import {UserInfoComponent} from './user-info.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        'path': '',
        component: UserInfoComponent
      }
    ])
  ],
  declarations: [UserInfoComponent]
})
export class UserInfoModule {
}
