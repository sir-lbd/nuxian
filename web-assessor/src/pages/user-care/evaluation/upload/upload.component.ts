import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatHorizontalStepper} from '@angular/material';

@Component({
  selector: 'div.sub-page.evaluation-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadComponent implements OnInit {

  type: string;
  group: FormGroup;

  constructor(route: ActivatedRoute, protected _formBuilder: FormBuilder) {
    route.params.subscribe(params => {
      this.type = params.type;
    });

    this.group = this._formBuilder.group({
      name: [],
      phone: [],
      email: [],
    });
  }

  ngOnInit() {
  }

  selectFile() {
    console.log('上传附件');
  }

  upload(stepper: MatHorizontalStepper) {
    stepper.next();
  }

  done(stepper: MatHorizontalStepper) {
    stepper.next();
  }

}
