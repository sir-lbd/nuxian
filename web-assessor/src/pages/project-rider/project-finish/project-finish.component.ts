import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-finish',
  templateUrl: './project-finish.component.html',
  styleUrls: ['./project-finish.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectFinishComponent implements OnInit {
  finish = [
    {
      name: '李女士',
      position: '技术总监',
      conventional: '心理能力',
      match: '李经理、王经理',
      finished: true,
      list: [
        {
          title: 'N',
          blue:true
        },
        {
          title: 'X',
          green: true
        },
        {
          title: 'Y',
          orange: true
        },
        {
          title: 'ZH',
          red: true
        }
      ]
    },
    {
      name: '李女士',
      position: '技术总监',
      conventional: '',
      match: '',
      finished: false,
      list: [
        {
          title: 'N',
          blue:true
        },
        {
          title: 'X',
          green: true
        },
        {
          title: 'Y',
          orange: true
        },
        {
          title: 'ZH',
          red: true
        }
      ]
    }
  ];
  constructor(protected router: Router) { }

  ngOnInit() {
  }
  goEchart(type?: number){
    if(type === 0){
      this.router.navigate(['/project-list'])
    }
  }
}
