import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-info-socket',
  templateUrl: './info-socket.component.html',
  styleUrls: ['./info-socket.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InfoSocketComponent implements OnInit {
  act = 0;
  com = 0;
  routers = [
    {
      url: '/user-info/basic'
    },
    {
      url: '/user-info/acc'
    }
  ]
  constructor(protected router: Router) { }

  ngOnInit() {
    this.goRouter(0)
  }
  goRouter(type: number){
    this.com = type;
    this.router.navigate([ `${this.routers[type].url}`])
  }
}
