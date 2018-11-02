import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {ComponentsModule} from '../../components/components.module';
import {SliderComponent} from './slider/slider.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MatMenuModule, MatButtonModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: '/project-rider'
          },
          {
            path: 'login',
            loadChildren: '../login/login.module#LoginModule'
          },
          {
            path: 'project-rider',
            loadChildren: '../project-rider/project-rider.module#ProjectRiderModule',
          },

          {
             path: 'project-list',
            loadChildren: '../project-list/project-list.module#ProjectListModule',
          },
          {
            path: 'user-info',
            loadChildren: '../user-info/user-info.module#UserInfoModule',
          },
          {
            path: 'project-management',
            loadChildren: '../project-management/project-management.module#ProjectManagementModule'
          },
          {
            path: 'launch-evaluation',
            loadChildren: '../launch-evaluation/launch-evaluation.module#LaunchEvaluationModule'
          },
          {
            path: 'quality-file',
            loadChildren: '../quality-file/quality-file.module#QualityFileModule'
          }
        ]
      }

    ])
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
  ]
})
export class MainModule {
}
