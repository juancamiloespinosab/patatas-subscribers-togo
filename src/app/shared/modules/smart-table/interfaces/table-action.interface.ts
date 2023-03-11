import { ACTION_TYPE } from '../enums';

export interface TableAction {
  type: ACTION_TYPE;
  data?: any;
}
