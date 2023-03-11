import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@shared/modules/smart-form/interfaces';
import { LOGIN_FIELDS } from '@modules/auth/constants/login-fields.constant';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;

  fields: FormField[] = LOGIN_FIELDS;

  constructor() {}

  ngOnInit(): void {}

  onFormBuilt(form: FormGroup) {
    this.form = form;
  }
}
