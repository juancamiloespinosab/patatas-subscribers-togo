import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from '@layout/main-layout/main-layout.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from '@shared/shared.module';
import { I18nModule } from 'src/app/i18n.module';
import { LogoComponent } from '@components/atomic-components';
import { VoidNavbarLayoutComponent } from '@layout/void-navbar-layout/void-navbar-layout.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    I18nModule,
    AuthRoutingModule,
    MainLayoutComponent,
    VoidNavbarLayoutComponent,
    LogoComponent,
    SharedModule,
  ],
})
export class AuthModule {}
