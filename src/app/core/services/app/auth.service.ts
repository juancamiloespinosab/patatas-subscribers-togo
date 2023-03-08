import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private jwtHelperService: JwtHelperService) {}

  isAuthenticated() {
    const accessToken = this.getAccessToken();
    return !this.jwtHelperService.isTokenExpired(accessToken);
  }

  saveAccessToken(access_token: string) {
    localStorage.setItem('access_token', access_token);
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }
}
