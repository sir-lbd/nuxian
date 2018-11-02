import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material";
import {InfoSocketComponent} from "./info-socket/info-socket.component";
import {BasicInfoComponent} from "./basic-info/basic-info.component";
import {AccInfoComponent} from "./acc-info/acc-info.component";
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InfoSocketComponent,
        children: [
          {
            path: 'basic',
            component: BasicInfoComponent
          },
          {
            path: 'acc',
            component: AccInfoComponent
          }
        ]
      },

    ])
  ],
  declarations: [InfoSocketComponent,BasicInfoComponent, AccInfoComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class UserInfoModule { }
