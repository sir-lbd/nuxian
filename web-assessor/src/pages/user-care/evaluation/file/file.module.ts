import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FileComponent} from "./file/file.component";
import {PaymentComponent} from "./payment/payment.component";
import {MatButtonModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FileComponent
      },
      {
        path: 'payment',
        component: PaymentComponent
      }
    ])
  ],
  declarations: [FileComponent, PaymentComponent]
})
export class FileModule { }
