import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyDialogComponent} from './my-dialog.component';
import {MatFormFieldModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
  ],
  declarations: [MyDialogComponent]
})
export class MyDialogModule { }
