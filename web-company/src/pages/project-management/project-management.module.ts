import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../../components/components.module';
import {MatButtonModule} from '@angular/material';
import {ProjectManagementComponent} from './project-management.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectManagementComponent,
      }
    ])
  ],
  declarations: [ProjectManagementComponent]
})
export class ProjectManagementModule { }
