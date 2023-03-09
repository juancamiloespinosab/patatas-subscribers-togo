import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MainLayoutComponent,
    SharedModule
  ]
})
export class AuthModule { }
