import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from '@core/models';
import { DEFAULT_QUERY_PARAMS_REQUEST } from '@core/services/api/constants';
import { GenericQueryParamsRequest } from '@core/services/api/interfaces/request/generic-query-params-request.interface';
import { SubscribersService } from '@core/services/api/subscribers.service';
import { ACTION_TYPE } from '@shared/modules/smart-table/enums';
import { DialogService } from '@shared/modules/dialog/services/dialog.service';
import {
  TableAction,
  TableConfig,
} from '@shared/modules/smart-table/interfaces';
import { SmartTableService } from '@shared/modules/smart-table/services/smart-table.service';
import { Subscription } from 'rxjs';
import { ConfirmDialogComponent } from '@shared/modules/dialog/components/confirm-dialog/confirm-dialog.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  data!: Partial<Subscriber>[];

  config: TableConfig = {
    columns: [
      {
        headerLabel: 'smart-table-subscriber-header-label-id',
        def: 'id',
        dataKeyName: 'Id',
      },
      {
        headerLabel: 'smart-table-subscriber-header-label-name',
        def: 'name',
        dataKeyName: 'Name',
      },
      {
        headerLabel: 'smart-table-subscriber-header-label-email',
        def: 'email',
        dataKeyName: 'Email',
      },
      {
        headerLabel: 'smart-table-subscriber-header-label-country-name',
        def: 'country',
        dataKeyName: 'CountryName',
      },
      {
        headerLabel:
          'smart-table-subscriber-header-label-subscription-state-description',
        def: 'subscriptionStateDescription',
        dataKeyName: 'SubscriptionStateDescription',
      },
    ],
    actions: [
      {
        type: ACTION_TYPE.EDIT,
      },
      {
        type: ACTION_TYPE.REMOVE,
      },
    ],
    paginator: {
      length: 5,
      pageIndex: 1,
      pageSize: 5,
      pageSizeOptions: [5, 10, 50],
    },
  };

  querySubscription!: Subscription;
  actionsSubscription!: Subscription;
  dialogRefSubscription!: Subscription;

  constructor(
    private subscribersService: SubscribersService,
    private smartTableService: SmartTableService,
    private dialogService: DialogService,
    private router: Router,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.getSubscribers();
    this.initQuerySubscription();
    this.initActionsSubscription();
  }

  initQuerySubscription() {
    this.querySubscription = this.smartTableService.query$.subscribe(
      (newQuery: GenericQueryParamsRequest) => {
        this.getSubscribers(newQuery);
      }
    );
  }

  initActionsSubscription() {
    this.actionsSubscription = this.smartTableService.actions$.subscribe(
      (action: TableAction) => {
        this.handlerAction(action);
      }
    );
  }

  getSubscribers(
    query: GenericQueryParamsRequest = DEFAULT_QUERY_PARAMS_REQUEST
  ) {
    this.subscribersService.getSubscribers(query).subscribe((data) => {
      this.data = data.Data;
      if (this.config.paginator) {
        this.config.paginator.length = data.Count;
      }
    });
  }

  deleteSubscriber(
    subscriberId: string,
    subscribersService: SubscribersService
  ): void {
    subscribersService.deleteSubscriber(subscriberId).subscribe({
      next: (res) => this.getSubscribers(),
      error: (error) => console.log(error),
    });
  }

  handlerAction(action: TableAction) {
    switch (action.type) {
      case ACTION_TYPE.EDIT:
        this.router.navigate(['/subscribers/edit/' + action.data.Id]);
        break;
      case ACTION_TYPE.REMOVE:
        this.openConfirmationDialog(action);
        break;
    }
  }

  openConfirmationDialog(action: TableAction) {
    const dialogRef = this.dialogService.openDialog(ConfirmDialogComponent, {
      width: '250px',
      data: {
        title: this.translateService.instant(
          'list-subscribers-confirm-dialog-title'
        ),
        message: `¿${this.translateService.instant(
          'list-subscribers-confirm-dialog-message'
        )}: ${action.data.Name}?`,
      },
    });
    this.dialogRefSubscription = dialogRef.subscribe((res) => {
      if (res === 'Confirm') {
        this.deleteSubscriber(action.data.Id, this.subscribersService);
      }
    });
  }

  ngOnDestroy(): void {
    this.actionsSubscription?.unsubscribe();
    this.querySubscription?.unsubscribe();
    this.dialogRefSubscription?.unsubscribe();
  }
}
