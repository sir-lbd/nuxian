import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {PowerListComponent} from "./power-list/power-list.component";
import {NgxEchartsModule} from "ngx-echarts";
import {MatButtonModule} from "@angular/material";
import {PsychologListComponent} from "./psycholog-list/psycholog-list.component";
import {PowerSocComponent} from "./power-soc/power-soc.component";
import {OverviewListComponent} from "./overview-list/overview-list.component";

@NgModule({
  imports: [
    CommonModule,
    NgxEchartsModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PowerListComponent,
        children: [
          {
            path: '',
            component: PowerSocComponent
          },
          {
            path: 'psy',
            component: PsychologListComponent
          },
          {
            path: 'overview',
            component: OverviewListComponent
          }
        ]
      },
    ])
  ],
  declarations: [PowerListComponent,PsychologListComponent,PowerSocComponent,OverviewListComponent]
})
export class ProjectListModule { }
