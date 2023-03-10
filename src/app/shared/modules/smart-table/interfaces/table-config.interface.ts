import { TableColumn } from "./table-column.interface";

export interface TableConfig {
    columns: TableColumn[];
    showSearch: boolean;
    showPagination: boolean;
}