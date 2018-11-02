import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UploadComponent} from './upload.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: UploadComponent,
      }
    ])
  ],
  declarations: [UploadComponent]
})
export class UploadModule {
}
