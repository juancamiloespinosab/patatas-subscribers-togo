import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ACTION_ICON } from '../../constants';
import { ACTION_TYPE } from '../../enums';
import {
  PaginatorConfig,
  SearchConfig,
  TableAction,
  TableColumn,
  TableConfig,
} from '../../interfaces';
import { SmartTableService } from '../../services/smart-table.service';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {
  displayedColumns!: string[];
  columns!: TableColumn[];
  actions!: TableAction[];
  dataSource!: MatTableDataSource<any>;
  paginatorConfig!: PaginatorConfig;
  searchConfig!: SearchConfig;

  @Input() set data(data: Array<any>) {
    this.dataSource = new MatTableDataSource(data);
  }

  @Input() set config(config: TableConfig) {
    this.columns = config.columns;
    this.displayedColumns = this.columns.map((column) => column.def);

    if (config.actions) {
      this.actions = config.actions;
      this.displayedColumns.push('actions');
    }

    if (config.paginator) {
      this.paginatorConfig = config.paginator;
    }

    if (config.search) {
      this.searchConfig = config.search;
    }
  }

  ACTION_ICON = ACTION_ICON;

  constructor(private smartTableService: SmartTableService) {}

  onActionClick(type: ACTION_TYPE, data: any) {
    this.smartTableService.emitAction({ type, data });
  }
}
