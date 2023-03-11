import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from '@core/models';
import { SubscribersService } from '@core/services/api/subscribers.service';
import { SnackbarService } from '@core/services/app/snackbar.service';
import { CreateEditFormComponent } from '@modules/subscribers/components/create-edit-form/create-edit-form.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss'],
})
export class CreateEditComponent implements OnInit {
  @ViewChild('createEditForm')
  CreateEditFormComponent!: CreateEditFormComponent;
  createEditForm!: FormGroup;

  editMode = false;
  subscriberId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private subscribersService: SubscribersService,
    private snackbarService: SnackbarService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.editMode = this.activatedRoute.snapshot.data['editMode'];
    if (this.editMode) {
      this.subscriberId = this.activatedRoute.snapshot.params['id'];
    }
  }

  ngAfterViewInit() {
    this.createEditForm = this.CreateEditFormComponent.form;
    if (this.editMode) {
      this.getSubscriberById(
        this.CreateEditFormComponent.form,
        this.subscribersService,
        this.subscriberId
      );
    }
  }

  onClickcreateEditButton(): void {
    if (this.isInvalidForm(this.createEditForm)) {
      this.createEditForm.markAllAsTouched();
      return;
    }

    this.editMode
      ? this.editSubscriber(
          this.createEditForm,
          this.subscriberId,
          this.subscribersService
        )
      : this.createSubscriber(this.createEditForm, this.subscribersService);
  }

  createSubscriber(
    form: FormGroup,
    subscribersService: SubscribersService
  ): void {
    /* Añado valores por defecto ya que la api responde con un error inesperado cuando no se envian estos mismos*/
    let formValue = { ...form.value };
    formValue.JobTitle = '';
    formValue.Area = '';
    formValue.Topics = [];

    subscribersService.createSubscriber([formValue]).subscribe({
      next: (res) =>
        this.onCreateEditSubscriberSuccess('create-edit-create-succes-message'),
      error: (error) => console.log(error),
    });
  }

  getSubscriberById(
    form: FormGroup,
    subscribersService: SubscribersService,
    subscriberId: string
  ): void {
    subscribersService.getSubscriberById(subscriberId).subscribe({
      next: (subscriber) => this.patchFormValue(subscriber, form),
      error: (error) => console.log(error),
    });
  }

  editSubscriber(
    form: FormGroup,
    subscriberId: string,
    subscribersService: SubscribersService
  ): void {
    subscribersService
      .updateSubscriber({ Id: subscriberId, ...form.value })
      .subscribe({
        next: (res) =>
          this.onCreateEditSubscriberSuccess(
            'create-edit-create-succes-message'
          ),
        error: (error) => console.log(error),
      });
  }

  onCreateEditSubscriberSuccess(i18nKey: string) {
    const message = this.translateService.instant(i18nKey);
    this.snackbarService.openSnackBar(message);
  }

  patchFormValue(subscriber: Subscriber, form: FormGroup) {
    form.patchValue(subscriber);
  }

  isInvalidForm(form: FormGroup): boolean {
    return form.invalid;
  }
}
