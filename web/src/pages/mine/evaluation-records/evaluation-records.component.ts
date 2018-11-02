import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-evaluation-records',
  templateUrl: './evaluation-records.component.html',
  styleUrls: ['./evaluation-records.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EvaluationRecordsComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  checkDetail() {
    this.router.navigate(['/mine/record-details', 1]);
  }

}
