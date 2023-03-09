import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ERROR_MESSAGE } from '@shared/smart-form/constants/error-messages.constant';
import { FORM_FIELD_TYPE } from '@shared/smart-form/enums/FormFieldType.enum';
import { FormField } from '@shared/smart-form/interfaces/form-field.interface';

@Component({
  selector: 'app-dyn-field',
  templateUrl: './dyn-field.component.html',
  styleUrls: ['./dyn-field.component.scss'],
})
export class DynFieldComponent implements OnInit {
  
  @Input() field!: FormField;
  @Input() control!: FormControl;

  FORM_FIELD_TYPE = FORM_FIELD_TYPE;

  constructor() {

  }

  ngOnInit(): void {}

  getErrorMessage(formControl: FormControl): string {
    if (formControl.errors) {
      for (const [key, value] of Object.entries(formControl.errors)) {
        return ERROR_MESSAGE[key];
      }
    }

    return '';
  }
}
