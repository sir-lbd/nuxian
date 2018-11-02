import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProjectSocketComponent} from "./project-socket/project-socket.component";
import {ProjectUntestedComponent} from "./project-untested/project-untested.component";
import {ProjectFinishComponent} from "./project-finish/project-finish.component";
import {MatButtonModule} from "@angular/material";
import {ProjectTexstedComponent} from "./project-texsted/project-texsted.component";
import {NgxEchartsModule} from "ngx-echarts";
import {EchartSocketComponent} from "./echart-socket/echart-socket.component";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    NgxEchartsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectSocketComponent,
        children: [
          {
            path: '',
            component: ProjectUntestedComponent
          }
        ]
      },
      {
        path: 'project-texsted',
        component: ProjectTexstedComponent,
        children: [
          {
            // index去向第几个
            path: 'finish/:index',
            component: ProjectFinishComponent
          }
        ]
      }
    ])
  ],
  declarations: [ProjectSocketComponent,EchartSocketComponent, ProjectUntestedComponent, ProjectFinishComponent,  ProjectTexstedComponent]
})
export class ProjectRiderModule {
}
