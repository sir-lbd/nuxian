import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FileLabelComponent} from "./file-label/file-label.component";
import {BlankComponent} from "./blank/blank.component";
import {FileReportComponent} from "./file-report/file-report.component";
import {MatButtonModule} from "@angular/material";
import {FileSeeComponent} from "./file-see/file-see.component";
import {FileAuthorComponent} from "./file-author/file-author.component";
import {FilePermissComponent} from "./file-permiss/file-permiss.component";
import {FileChangeComponent} from "./file-change/file-change.component";
import {FileSzdaComponent} from "./file-szda/file-szda.component";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FileLabelComponent,
        children:[
          {path: '',
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
      {
        path: 'blank',
        component: BlankComponent,
        children: [
          {
            path: '',
            component: FileChangeComponent
          }
        ]
      }
    ])
  ],
  declarations: [FileLabelComponent,FileSzdaComponent, BlankComponent, FileReportComponent,FileSeeComponent,FileAuthorComponent,FilePermissComponent,FileChangeComponent,]
})
export class QualityFileModule { }
