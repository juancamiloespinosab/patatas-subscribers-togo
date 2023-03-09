import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { I18nModule } from './i18n.module';

function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    I18nModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    JwtModule.forRoot({
      config: { tokenGetter: tokenGetter, allowedDomains: ['localhost:3000'] },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
