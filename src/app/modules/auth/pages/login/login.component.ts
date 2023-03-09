import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@core/models';
import { AccountService } from '@core/services/api/account.service';
import { AuthService } from '@core/services/app/auth.service';
import { LoginFormComponent } from '@modules/auth/components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('loginForm') loginFormComponent!: LoginFormComponent;
  loginForm!: FormGroup;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loginForm = this.loginFormComponent.form;
  }

  onClickLoginButton(): void {
    if (this.isInvalidForm(this.loginForm)) {
      return;
    }

    this.login(this.loginForm, this.accountService);
  }

  login(form: FormGroup, accountService: AccountService): void {
    accountService.login(form.value).subscribe({
      next: (user) => this.onSuccessLogin(user),
      error: (error) => this.onErrorLogin(),
    });
  }

  onSuccessLogin(user: User): void {
    this.authService.saveAccessToken(user.Token);
    this.router.navigate(['subscribers']);
  }

  onErrorLogin() {}

  isInvalidForm(form: FormGroup): boolean {
    return form.invalid;
  }
}
