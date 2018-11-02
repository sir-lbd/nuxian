import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,

    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
