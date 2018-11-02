import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FileLabelComponent} from './file-label/file-label.component';
import {BlankComponent} from './blank/blank.component';
import {FileReportComponent} from './file-report/file-report.component';
import {MatButtonModule, MatCheckboxModule, MatPaginatorModule,
  MatListModule, MatDialogModule, MatFormFieldModule} from '@angular/material';
import {FileSeeComponent} from './file-see/file-see.component';
import {FileAuthorComponent} from './file-author/file-author.component';
import {FilePermissComponent} from './file-permiss/file-permiss.component';
import {FormsModule} from '@angular/forms';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlankComponent,
      },
      {
        path: 'label',
        component: FileLabelComponent,
        children: [
          {
            path: '',
            component: FileReportComponent
          },
          {
            path: 'file-see',
            component: FileSeeComponent,
          },
          {
            path: 'file-author',
            component: FileAuthorComponent,
          },
          {
            path: 'file-permiss',
            component: FilePermissComponent,
          }
        ]
      },
    ])
  ],
  declarations: [FileLabelComponent, BlankComponent, FileReportComponent,
    FileSeeComponent, FileAuthorComponent, FilePermissComponent, MyDialogComponent],
  entryComponents: [MyDialogComponent],
  providers: [MyDialogComponent]
})
export class QualityFileModule { }
