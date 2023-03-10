import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn, TableConfig } from '../../interfaces';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {
  displayedColumns!: string[];
  columns!: TableColumn[];
  dataSource!: MatTableDataSource<any>;

  @Input() set data(data: Array<any>) {
    this.dataSource = new MatTableDataSource(data);
  }

  @Input() set config(config: TableConfig) {
    this.columns = config.columns;
    this.displayedColumns = this.columns.map((column) => column.def);
  }

  constructor() {}
}
