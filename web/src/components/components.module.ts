import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatMenuModule, MatRippleModule} from '@angular/material';
import {PageComponent} from './page/page.component';
import {MenuPageComponent} from './menu-page/menu-page.component';
import {ArticleGistComponent} from './article-gist/article-gist.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatRippleModule,
    RouterModule,
  ],
  declarations: [
    PageComponent,
    MenuPageComponent,
    ArticleGistComponent,
  ],
  exports: [
    PageComponent,
    MenuPageComponent,
    ArticleGistComponent,
  ]
})
export class ComponentsModule {
}
