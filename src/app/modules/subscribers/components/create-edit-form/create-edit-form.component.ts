import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SUBSCRIBERS_FIELDS } from '@modules/subscribers/constants';
import { FormField } from '@shared/modules/smart-form/interfaces';

@Component({
  selector: 'app-create-edit-form',
  templateUrl: './create-edit-form.component.html',
  styleUrls: ['./create-edit-form.component.scss'],
})
export class CreateEditFormComponent implements OnInit {
  form!: FormGroup;

  fields: FormField[] = SUBSCRIBERS_FIELDS;

  constructor() {}

  ngOnInit(): void {}

  onFormBuilt(form: FormGroup) {
    this.form = form;
  }
}
