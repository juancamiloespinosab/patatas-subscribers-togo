import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FORM_FIELD_TYPE } from '@shared/smart-form/enums/FormFieldType.enum';
import { FORM_FIELD_VALIDATOR_TYPE } from '@shared/smart-form/enums';
import { FormConfig } from '@shared/smart-form/interfaces';
import { FormField } from '@shared/smart-form/interfaces';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;

  fields: FormField[] = [
    {
      name: 'UserName',
      label: 'Username',
      placeholder: '',
      type: FORM_FIELD_TYPE.INPUT,
      validators: [
        {
          type: FORM_FIELD_VALIDATOR_TYPE.REQUIRED,
        },
      ],
    },
    {
      name: 'Password',
      label: 'Password',
      placeholder: '',
      type: FORM_FIELD_TYPE.INPUT,
      validators: [
        {
          type: FORM_FIELD_VALIDATOR_TYPE.REQUIRED,
        },
      ],
    },
  ];

  config: FormConfig = {
    cols: 1,
  };

  constructor() {}

  ngOnInit(): void {}

  onFormBuilt(form: FormGroup) {
    this.form = form;
  }
}
