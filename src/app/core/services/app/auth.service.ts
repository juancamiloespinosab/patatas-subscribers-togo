import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private jwtHelperService: JwtHelperService) {}

  isAuthenticated() {
    try {
      const accessToken = this.getAccessToken();
      return !this.jwtHelperService.isTokenExpired(accessToken);
    } catch {
      return false;
    }
  }

  saveAccessToken(access_token: string) {
    localStorage.setItem('access_token', access_token);
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  saveUserData(user: User) {
    localStorage.setItem('user_data', JSON.stringify(user));
  }

  getUserData(): User {
    return JSON.parse(localStorage.getItem('user_data') ?? '');
  }
}
