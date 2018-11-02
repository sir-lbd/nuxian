import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-acc-info',
  templateUrl: './acc-info.component.html',
  styleUrls: ['./acc-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccInfoComponent implements OnInit {
  act = 0;
  constructor() { }

  ngOnInit() {
  }

}
