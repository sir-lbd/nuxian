import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {MatButtonModule} from "@angular/material";
import {RegisterComponent} from "./register/register.component";
import {FormsModule} from "@angular/forms";
import {Guard} from "./guard/guard";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,

    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
        // canActivate: [Guard]
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  declarations: [LoginComponent,RegisterComponent],
  providers: [Guard]
})
export class LoginModule { }
//登入 注册都在这里
