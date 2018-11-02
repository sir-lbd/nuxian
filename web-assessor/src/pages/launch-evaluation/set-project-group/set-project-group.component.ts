import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-set-project-group',
  templateUrl: './set-project-group.component.html',
  styleUrls: ['./set-project-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SetProjectGroupComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  goPay() {
    this.router.navigate(['/launch-evaluation/create-order']);
  }
  goTeam() {
    this.router.navigate(['/launch-evaluation/create-team']);
  }
}
