import {NgModule} from '@angular/core';
import {PageController} from './controller/controller.service';
import {XLSXFactory} from './xlsx/xlsx.service';
import {HttpClientModule} from '@angular/common/http';
import {Http} from './http/http';

import './utils/_string';
import './utils/_number';
import './utils/_tools';
import './utils/_object';


@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    Http,
    PageController,
    XLSXFactory,
  ]
})
export class ServicesModule {
}
