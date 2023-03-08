import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';

function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    JwtModule.forRoot({
      config: { tokenGetter: tokenGetter, allowedDomains: ['localhost:3000'] },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
