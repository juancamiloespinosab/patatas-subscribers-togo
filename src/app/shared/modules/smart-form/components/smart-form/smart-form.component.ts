import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FORM_FIELD_VALIDATOR_TYPE } from '@shared/modules/smart-form/enums';
import { FormConfig } from '@shared/modules/smart-form/interfaces';
import { FormFieldValidator } from '@shared/modules/smart-form/interfaces';
import { FormField } from '@shared/modules/smart-form/interfaces';

@Component({
  selector: 'app-smart-form',
  templateUrl: './smart-form.component.html',
  styleUrls: ['./smart-form.component.scss'],
})
export class SmartFormComponent implements OnInit, AfterViewInit {
  @Input() fields!: FormField[];
  @Input() config!: FormConfig;
  @Output() form: EventEmitter<FormGroup> = new EventEmitter();

  formGroup!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formGroup = this.buildFormGroup(this.fields);
  }

  ngAfterViewInit() {
    this.form.emit(this.formGroup);
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
