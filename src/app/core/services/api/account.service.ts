import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account, User } from '@core/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  BASE_URL = environment.invertebradoApi.baseUrl;
  AUTH_API = environment.invertebradoApi.paths.account;

  constructor(private httpClient: HttpClient) {}

  Login(account: Account) {
    const url = `${this.BASE_URL}${this.AUTH_API.parent}${this.AUTH_API.children.login}`;
    return this.httpClient.post<User>(url, account);
  }
}
