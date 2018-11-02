import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AnswerEvaluationComponent} from '../answer-evaluation.component';

@Component({
  selector: 'app-answer-evaluation-dialog',
  templateUrl: './answer-evaluation-dialog.component.html',
  styleUrls: ['./answer-evaluation-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnswerEvaluationDialogComponent implements OnInit {

  config: any;

  constructor(public dialogRef: MatDialogRef<AnswerEvaluationComponent>,
  ) {
  }

  ngOnInit() {
    this.dialogRef.afterOpen().subscribe(resp => {
      // console.log('open');
      // console.log(this.dialogRef._containerInstance._config.data);
      this.config = this.dialogRef._containerInstance._config.data;
    });

  }

}
