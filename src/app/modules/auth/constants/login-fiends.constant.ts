import {
  FORM_FIELD_TYPE,
  FORM_FIELD_VALIDATOR_TYPE,
} from '@shared/smart-form/enums';
import { FormField } from '@shared/smart-form/interfaces';

export const LOGIN_FIELDS: FormField[] = [
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
