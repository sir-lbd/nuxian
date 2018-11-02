import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpService} from './$services/http.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    MatSnackBarModule,
    MatProgressBarModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: './$main/main.module#MainModule'
      }
    ], {
      useHash: true
    })
  ],
  providers: [
    HttpService,
  ],
  exports: [
    RouterModule
  ]
})
export class PagesModule {
  constructor(http: HttpService) {
    http.init();
  }
}
