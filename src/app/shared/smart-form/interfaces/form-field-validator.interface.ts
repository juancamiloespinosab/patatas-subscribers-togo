import { FORM_FIELD_VALIDATOR_TYPE } from "../enums/FormFieldValidatorsType";

export interface FormFieldValidator {
  type: FORM_FIELD_VALIDATOR_TYPE;
  value?: string;
}
