import { Injectable } from '@angular/core';
import { GenericQueryParamsRequest } from '@core/services/api/interfaces/request/generic-query-params-request.interface';
import { Subject } from 'rxjs';
import { PaginatorConfig, TableAction } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SmartTableService {
  public actions$: Subject<TableAction> = new Subject();
  public query$: Subject<GenericQueryParamsRequest> = new Subject();

  private searchValue: string = '';
  private paginatorValue: PaginatorConfig = {
    length: 0,
    pageIndex: 1,
    pageSize: 5,
  };

  constructor() {}

  emitAction(action: TableAction) {
    this.actions$.next(action);
  }

  emitQuery() {
    this.query$.next({
      criteria: this.searchValue,
      page: (this.paginatorValue.pageIndex + 1).toString(),
      count: this.paginatorValue.pageSize.toString(),
    });
  }

  setSearchValue(newValue: string) {
    this.searchValue = newValue;
  }

  setPaginatorValue(newValue: PaginatorConfig) {
    this.paginatorValue = newValue;
  }
}
