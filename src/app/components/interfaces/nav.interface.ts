import { NAV_OPTION_TYPE } from "@components/enums/navOptionType.enum";

export interface NavOptions {
  routerLink: string;
  iconName: string;
  label: string;
  type: NAV_OPTION_TYPE;
}

export interface Nav {
  iconName: string;
  options: NavOptions[];
}
