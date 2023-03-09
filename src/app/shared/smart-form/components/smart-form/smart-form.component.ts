import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FORM_FIELD_TYPE } from '@shared/smart-form/enums/FormFieldType.enum';
import { FORM_FIELD_VALIDATOR_TYPE } from '@shared/smart-form/enums/FormFieldValidatorsType';
import { FormFieldValidator } from '@shared/smart-form/interfaces/form-field-validator.interface';
import { FormField } from '@shared/smart-form/interfaces/form-field.interface';

@Component({
  selector: 'app-smart-form',
  templateUrl: './smart-form.component.html',
  styleUrls: ['./smart-form.component.scss'],
})
export class SmartFormComponent implements OnInit {
  formGroup!: FormGroup;

  @Input() fields: FormField[] = [
    {
      name: 'usuario',
      label: 'Usuario',
      placeholder: 'Usuario',
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
  ];

  constructor() {}

  ngOnInit(): void {
    this.formGroup = this.buildFormGroup(this.fields);
  }

  buildFormGroup(fields: FormField[]): FormGroup {
    const formGroup = new FormGroup({});
    fields.forEach((field: FormField) => {
      const formControlValidators = this.buildValidators(field.validators);
      const formControl = new FormControl('', formControlValidators);

      formGroup.addControl(field.name, formControl);
    });

    return formGroup;
  }

  buildValidators(validators: FormFieldValidator[]): ValidatorFn[] {
    const validatorsArray: ValidatorFn[] = [];
    validators.forEach((validator: FormFieldValidator) => {
      switch (validator.type) {
        case FORM_FIELD_VALIDATOR_TYPE.REQUIRED:
          validatorsArray.push(Validators.required);
          break;
        case FORM_FIELD_VALIDATOR_TYPE.PATTERN:
          validatorsArray.push(Validators.pattern(validator.value ?? ''));
          break;
        case FORM_FIELD_VALIDATOR_TYPE.EMAIL:
          validatorsArray.push(Validators.email);
          break;
      }
    });

    return validatorsArray;
  }

  getFormControlFromFormGroupByName(
    formControlName: string,
    formGroup: FormGroup
  ): FormControl {
    return formGroup.get(formControlName) as FormControl;
  }


}
