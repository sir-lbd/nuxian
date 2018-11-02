import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {CheckReportService} from "../view-report/check-report/check-report.service";
import {HttpService} from "../../$services/http.service";

@Component({
  selector: 'div.sub-page.counseling',
  templateUrl: './development-counseling.component.html',
  styleUrls: ['./development-counseling.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DevelopmentCounselingComponent implements OnInit {

  get URL() {
    return HttpService.URL;
  }
  appraisers = [];


  constructor(public _router: Router, public service: CheckReportService) {
  }

  ngOnInit() {
    this.service.getReportType().then((resp: any) => {
      resp.results.forEach(item => {
        if (item.id > 0) {
          item.image_url = this.URL + item.image_url;
          item.label = item.label.split(',');
          this.appraisers.push(item);
        }
      });
      console.log('appraisers', this.appraisers);
    }).catch(err => {
      console.log(err);
    });
  }

  goExpertSelect() {
    // this._router.navigate(['/user-care/development-counseling/expert-introduction']);
  }
}
