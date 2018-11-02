import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PagesModule} from '../pages/pages.module';

import {ServicesModule} from '../services/services.module';
import {ComponentsModule} from '../components/components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,

    ComponentsModule,
    PagesModule,
    ServicesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
