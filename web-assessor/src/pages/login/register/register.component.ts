import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

export interface Register {
  userName: string;
  pasword: string;
  doublePasword: string;
  company: string;
  realname: string;
  phone: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  togo = 0;
  forms: Register = {
    userName: '测试',
    pasword: '123456',
    doublePasword: '123456',
    company: '青龙智能',
    realname: '刘',
    phone: '17853592055'
  };

  constructor(protected router: Router) {
  }

  ngOnInit() {


  }

  addSubmit() {
    console.log('register', this.forms);
  }

  goLogin() {
    this.router.navigate(['/login'])
  }
}
