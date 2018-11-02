import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BlankComponent} from "./blank/blank.component";
import {MatMenuModule,} from '@angular/material';
import {PositionComponent} from "./position/position.component";
import {PermissionComponent} from "./permission/permission.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatListModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlankComponent,
        children: [
          {
            path: '',
            component: PositionComponent
          },
          {
            path: 'permission',
            component: PermissionComponent
          }
        ]
      }
    ])
  ],
  declarations: [BlankComponent, PositionComponent, PermissionComponent],
})
export class ManagementModule {
}
