import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../../components/components.module';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
  } from '@angular/material';
import {LaunchEvaluationComponent} from './launch-evaluation.component';
import {CreateProjectGroupComponent} from './create-project-group/create-project-group.component';
import {ImportMembersComponent} from './import-members/import-members.component';
import {CreateOrderComponent} from './create-order/create-order.component';
import {CreatTeamComponent} from './creat-team/creat-team.component';
import {CreatConfigurationComponent} from './creat-configuration/creat-configuration.component';
import {FormsModule} from '@angular/forms';
// @ts-ignore
import {SetProjectGroupComponent} from "./set-project-group/set-project-group.component";

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild([
      {
        path: '',
        component: LaunchEvaluationComponent,
      },
      {
        path: 'create-project-group/:ids',
        component: CreateProjectGroupComponent,
      },
      {
        path: 'set-project-group',
        component: SetProjectGroupComponent,
      },
      {
        path: 'import-members/:id/:amount',
        component: ImportMembersComponent,
      },
      {
        path: 'create-order',
        component: CreateOrderComponent,
      },
      {
        path: 'create-team',
        component: CreatTeamComponent,
      },
      {
        path: 'create-conf',
        component: CreatConfigurationComponent,
      }
    ])
  ],
  declarations: [LaunchEvaluationComponent, CreateProjectGroupComponent,
    SetProjectGroupComponent, ImportMembersComponent, CreateOrderComponent, CreatTeamComponent,
    CreatConfigurationComponent]
})
export class LaunchEvaluationModule { }
