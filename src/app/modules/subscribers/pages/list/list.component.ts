import { Component, OnInit } from '@angular/core';
import { Subscriber } from '@core/models';
import { SubscribersService } from '@core/services/api/subscribers.service';
import {
  TableConfig,
} from '@shared/modules/smart-table/interfaces';

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
        headerLabel: 'smart-table-subscriber-header-label-subscription-state-description',
        def: 'subscriptionStateDescription',
        dataKeyName: 'SubscriptionStateDescription',
      },
    ],
    paginator: {
      show: false,
      length: 0,
      pageIndex: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 50],
    },
    search: {
      show: true,
      label: 'Buscar'
    },
  };

  constructor(private subscribersService: SubscribersService) {}

  ngOnInit(): void {
    // this.getSubscribers();
  }

  getSubscribers() {
    this.subscribersService
      .getSubscribers()
      .subscribe((data) => (this.data = data.Data));
  }
}
