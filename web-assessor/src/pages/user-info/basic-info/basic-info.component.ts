import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicInfoComponent implements OnInit {
  act = 0;

  constructor() {
  }

  ngOnInit() {
  }


}
