import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {ComponentsModule} from '../../components/components.module';
import {SliderComponent} from './slider/slider.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MatMenuModule, MatButtonModule} from '@angular/material';
import {RouteGuardService} from '../$services/canActivate/routeguard.service';

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
            redirectTo: '/auth/login'
          },
          {
            path: 'auth',
            loadChildren: '../auth/auth.module#AuthModule'
          },
          {
            path: 'project-management',
            loadChildren: '../project-management/project-management.module#ProjectManagementModule',
            canActivate: [RouteGuardService]
          },
          {
            path: 'launch-evaluation',
            loadChildren: '../launch-evaluation/launch-evaluation.module#LaunchEvaluationModule',
            canActivate: [RouteGuardService]
          },
          {
            path: 'quality-file',
            loadChildren: '../quality-file/quality-file.module#QualityFileModule',
            canActivate: [RouteGuardService]
          },
          {
            path: 'management',
            loadChildren: '../management/management.module#ManagementModule',
            canActivate: [RouteGuardService]
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
