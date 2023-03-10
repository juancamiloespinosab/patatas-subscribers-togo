import { PaginatorConfig } from './paginator-config.interface';
import { SearchConfig } from './search-config.interface';
import { TableColumn } from './table-column.interface';

export interface TableConfig {
  columns: TableColumn[];
  paginator: PaginatorConfig;
  search: SearchConfig;
}
