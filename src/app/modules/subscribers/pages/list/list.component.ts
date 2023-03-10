import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from '@core/models';
import { GenericQueryParamsRequest } from '@core/services/api/interfaces/request/generic-query-params-request.interface';
import { SubscribersService } from '@core/services/api/subscribers.service';
import { TableConfig } from '@shared/modules/smart-table/interfaces';
import { SmartTableService } from '@shared/modules/smart-table/services/smart-table.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  data: Partial<Subscriber>[] = [
    {
      Id: 1234,
      Name: '1234',
      Email: 'Juan',
      CountryName: 'Colombia',
      SubscriptionStateDescription: 'Pendiente',
    },
    {
      Id: 5698,
      Name: '1234',
      Email: 'Juan',
      CountryName: 'Colombia',
      SubscriptionStateDescription: 'Pendiente',
    },
  ];

  config: TableConfig = {
    columns: [
      {
        headerLabel: 'Id',
        def: 'id',
        dataKeyName: 'Id',
      },
      {
        headerLabel: 'Name',
        def: 'name',
        dataKeyName: 'Name',
      },
      {
        headerLabel: 'Email',
        def: 'email',
        dataKeyName: 'Email',
      },
      {
        headerLabel: 'Country',
        def: 'country',
        dataKeyName: 'CountryName',
      },
      {
        headerLabel: 'Subscription State',
        def: 'subscriptionStateDescription',
        dataKeyName: 'SubscriptionStateDescription',
      },
    ],
    showPagination: false,
    showSearch: false,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private subscribersService: SubscribersService
  ) {}

  ngOnInit(): void {
    const queryParams: GenericQueryParamsRequest = {
      criteria: 'linda@gmail.com',
      count: '5',
      page: '1',
    };
    this.subscribersService
      .getSubscribers(queryParams)
      .subscribe((data) => console.log(8, data));
  }
}
