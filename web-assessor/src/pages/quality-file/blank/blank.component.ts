import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlankComponent implements OnInit {
  tog = 0;
  nav = [
    {
      title: '能力测试',
    },
    {
      title: '技术测试',
    },
    {
      title: '心理测试',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
