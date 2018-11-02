import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductImportComponent} from './product-import/product-import.component';
import {ProductPayComponent} from './product-pay/product-pay.component';
import {ProductComComponent} from './product-com/product-com.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductComponent
      },
      {
        path: 'product-list',
        component: ProductListComponent
      }
      ,
      {
        path: 'product-import',
        component: ProductImportComponent
      },
      {
        path: 'product-pay',
        component: ProductPayComponent
      },
      {
        path: 'product-com',
        component: ProductComComponent
      }
    ])
  ],
  declarations: [ProductComponent, ProductPayComponent, ProductListComponent, ProductImportComponent, ProductComComponent]
})
export class ProductModule {
}
