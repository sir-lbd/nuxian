import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-untested',
  templateUrl: './project-untested.component.html',
  styleUrls: ['./project-untested.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectUntestedComponent implements OnInit {
  lists = [
    {
      title: '青龙智能项目组A组',
      update: '2016-3-5',
      enddate: '2016-3-6',
      num: '25',
      testnum: '13',
      shet: [
        {
          title: 'NL',
          jd: '15',
          co: 0
        },
        {
          title: 'YL',
          jd: '25',
          co: 1
        },
        {
          title: 'XL',
          jd: '35',
          co: 2
        },
        {
          title: 'ZH',
          jd: '65',
          co: 3
        }
      ]
    }
  ];

  constructor(protected router: Router) {
  }

  ngOnInit() {
  }

  goDetail(i) {
    this.router.navigate(['/project-rider/project-texsted/finish/&'], {
      queryParams: {
        id: `${i}`
      }
    })
  }
}
