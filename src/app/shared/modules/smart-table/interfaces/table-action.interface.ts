import { ACTION_TYPE } from '../enums';

export interface TableAction {
  actionType: ACTION_TYPE;
  data: any;
}
