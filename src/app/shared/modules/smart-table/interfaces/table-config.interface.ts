import { PaginatorConfig } from './paginator-config.interface';
import { SearchConfig } from './search-config.interface';
import { TableAction } from './table-action.interface';
import { TableColumn } from './table-column.interface';

export interface TableConfig {
  columns: TableColumn[];
  actions?: TableAction[];
  paginator?: PaginatorConfig;
  search?: SearchConfig;
}
