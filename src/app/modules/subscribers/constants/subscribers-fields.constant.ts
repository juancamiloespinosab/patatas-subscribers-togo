import {
  FORM_FIELD_TYPE,
  FORM_FIELD_VALIDATOR_TYPE,
} from '@shared/modules/smart-form/enums';
import { FormField } from '@shared/modules/smart-form/interfaces';

export const SUBSCRIBERS_FIELDS: FormField[] = [
  {
    name: 'Name',
    label: 'Name',
    placeholder: '',
    type: FORM_FIELD_TYPE.INPUT,
    validators: [
      {
        type: FORM_FIELD_VALIDATOR_TYPE.REQUIRED,
      },
    ],
  },
  {
    name: 'Email',
    label: 'Email',
    placeholder: '',
    type: FORM_FIELD_TYPE.INPUT,
    validators: [
      {
        type: FORM_FIELD_VALIDATOR_TYPE.REQUIRED,
      },
      {
        type: FORM_FIELD_VALIDATOR_TYPE.EMAIL,
      },
    ],
  },
  {
    name: 'CountryCode',
    label: 'Country Code',
    placeholder: '',
    type: FORM_FIELD_TYPE.INPUT,
    validators: [
      {
        type: FORM_FIELD_VALIDATOR_TYPE.REQUIRED,
      },
      {
        type: FORM_FIELD_VALIDATOR_TYPE.MAX_LENGTH,
        value: '2'
      },
    ],
  },
  {
    name: 'PhoneNumber',
    label: 'Phone Number',
    placeholder: '',
    type: FORM_FIELD_TYPE.INPUT,
    validators: [
      {
        type: FORM_FIELD_VALIDATOR_TYPE.REQUIRED,
      },
      {
        type: FORM_FIELD_VALIDATOR_TYPE.MAX_LENGTH,
        value: '10'
      },
    ],
  },
];
