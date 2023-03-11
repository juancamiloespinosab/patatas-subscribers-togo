import { FORM_FIELD_VALIDATOR_TYPE } from '../enums';

export const ERROR_MESSAGE: { [key: string]: string } = {
  [FORM_FIELD_VALIDATOR_TYPE.EMAIL]: 'smart-form-email-error-msg',
  [FORM_FIELD_VALIDATOR_TYPE.PATTERN]: 'smart-form-pattern-error-msg',
  [FORM_FIELD_VALIDATOR_TYPE.REQUIRED]: 'smart-form-required-error-msg',
  [FORM_FIELD_VALIDATOR_TYPE.MAX_LENGTH]: 'smart-form-max-length-error-msg',
};
