import { FORM_FIELD_TYPE } from '../enums/FormFieldType.enum';
import { FormFieldValidator } from './form-field-validator.interface';

export interface FormField {
  name: string;
  label: string;
  placeholder: string;
  type: FORM_FIELD_TYPE;
  validators: FormFieldValidator[];
}
