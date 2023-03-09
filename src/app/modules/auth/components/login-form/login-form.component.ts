import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FORM_FIELD_TYPE } from '@shared/smart-form/enums/FormFieldType.enum';
import { FORM_FIELD_VALIDATOR_TYPE } from '@shared/smart-form/enums';
import { FormConfig } from '@shared/smart-form/interfaces';
import { FormField } from '@shared/smart-form/interfaces';
import { LOGIN_FIELDS } from '@modules/auth/constants/login-fiends.constant';

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
