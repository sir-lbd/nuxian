import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-creat-team',
  templateUrl: './creat-team.component.html',
  styleUrls: ['./creat-team.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreatTeamComponent implements OnInit {
  lb = 0;
  pub = [
    {
      title: '推荐测评'
    },
    {
      title: '所有量表'
    }
    ,
    {
      title: '历史测评项目'
    }
  ];

  constructor(protected router: Router) {
  }

  ngOnInit() {
  }

  goImport() {
    this.router.navigate(['/launch-evaluation/import-members']);
  }


}
