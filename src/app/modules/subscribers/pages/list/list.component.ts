import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber } from '@core/models';
import { DEFAULT_QUERY_PARAMS_REQUEST } from '@core/services/api/constants';
import { GenericQueryParamsRequest } from '@core/services/api/interfaces/request/generic-query-params-request.interface';
import { SubscribersService } from '@core/services/api/subscribers.service';
import { ACTION_TYPE } from '@shared/modules/smart-table/enums';
import {
  TableAction,
  TableConfig,
} from '@shared/modules/smart-table/interfaces';
import { SmartTableService } from '@shared/modules/smart-table/services/smart-table.service';
import { Subscription } from 'rxjs';

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

  constructor(
    private subscribersService: SubscribersService,
    private smartTableService: SmartTableService
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

  handlerAction(action: TableAction) {
    switch (action.type) {
      case ACTION_TYPE.EDIT:
        break;
      case ACTION_TYPE.REMOVE:
        break;
    }
  }

  ngOnDestroy(): void {
    this.actionsSubscription.unsubscribe();
    this.querySubscription.unsubscribe();
  }
}
