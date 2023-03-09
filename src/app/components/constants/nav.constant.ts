import { NAV_OPTION_TYPE } from '@components/enums';
import { Nav } from '@components/interfaces';

export const NAV: Nav = {
  iconName: 'account_circle',
  options: [
    {
      routerLink: '/subscribers',
      iconName: 'diversity_3',
      label: 'Subscribers',
      type: NAV_OPTION_TYPE.LINK,
    },
    {
      routerLink: '/subscribers/create',
      iconName: 'group_add',
      label: 'New Subscriber',
      type: NAV_OPTION_TYPE.LINK,
    },
    {
      routerLink: '',
      iconName: '',
      label: '',
      type: NAV_OPTION_TYPE.HR,
    },
    {
      routerLink: '',
      iconName: 'logout',
      label: 'Logout',
      type: NAV_OPTION_TYPE.BUTTON,
    },
  ],
};
