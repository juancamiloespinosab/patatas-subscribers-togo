import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGO_TYPE } from '@components/enums';
import { User } from '@core/models';
import { AccountService } from '@core/services/api/account.service';
import { AuthService } from '@core/services/app/auth.service';
import { LoginFormComponent } from '@modules/auth/components/login-form/login-form.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('loginForm') loginFormComponent!: LoginFormComponent;
  loginForm!: FormGroup;
  logoType: LOGO_TYPE = LOGO_TYPE.MAIN
  
  accountServiceSubscription!: Subscription;

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
      this.loginForm.markAllAsTouched();
      return;
    }

    this.login(this.loginForm, this.accountService);
  }

  login(form: FormGroup, accountService: AccountService): void {
    this.accountServiceSubscription = accountService.login(form.value).subscribe({
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

  ngOnDestroy(): void {
    this.accountServiceSubscription?.unsubscribe();
  }
}
