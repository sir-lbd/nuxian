import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EvaluationService} from '../../../$services/evaluation/evaluation.service';
import {MatSnackBar} from '@angular/material';

// @ts-ignore
@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AssessmentListComponent implements OnInit {
  id: any;
  ids: any;
  current: number;
  assessments: any;
  testID: any;
  constructor(protected _router: Router, protected activatedRouter: ActivatedRoute,
              protected evaluation: EvaluationService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.ids = this.activatedRouter.snapshot.paramMap.get('ids');
    this.current = +this.activatedRouter.snapshot.paramMap.get('index');
    this.testID = +this.activatedRouter.snapshot.paramMap.get('test');
    this.evaluation.getAssessmentList(this.ids).then((assessments: any) => {
      this.assessments = assessments.results;
      this.assessments.forEach(item => {
        item.short_name = JSON.parse(item.short_name);
      });
      // console.log('assessments', this.assessments);
    }).catch(err => {
      console.log(err);
    });
  }

  back() {
    window.history.back(-1);
  }

  toTest() {
    // if (this.current + 1 === this.assessments.length) {
    //   this.snackBar.open('该产品量表已答完', '', {
    //     duration: 2000,
    //     verticalPosition: 'top'
    //   });
    //   return;
    // }
    this._router.navigate(['user-care/evaluation/start-evaluation', this.id, this.ids, this.current + 1, this.testID]);
  }

}
