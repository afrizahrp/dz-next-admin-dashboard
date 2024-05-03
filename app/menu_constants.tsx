import { SideNavItemGroup } from '@/types/type';
import {
  BsEnvelope,
  BsGear,
  BsHouseDoor,
  BsKanban,
  BsListUl,
  BsQuestionCircle,
} from 'react-icons/bs';

export const SIDENAV_ITEMS: SideNavItemGroup[] = [
  {
    title: 'Dashboards',
    menuList: [
      {
        title: 'Dashboard',
        path: '/',
        icon: <BsHouseDoor size={20} />,
      },
    ],
  },
  {
    title: 'Manage',
    menuList: [
      {
        title: 'Products',
        path: '/products',
        icon: <BsKanban size={20} />,
        submenu: true,
        subMenuItems: [
          { title: 'All', path: '/products' },
          { title: 'New', path: '/products/new' },
        ],
      },
      {
        title: 'Orders',
        path: '/orders',
        icon: <BsListUl size={20} />,
      },
      {
        title: 'Feedbacks',
        path: '/feedbacks',
        icon: <BsEnvelope size={20} />,
      },
      {
        title: 'Main Item 1',
        path: '/main1',
        submenu: true,
        subMenuItems: [
          {
            title: 'Sub Item 1',
            path: '/main1/sub1',
            submenu: true, // Indicating this item has its own submenu
            subMenuItems: [
              {
                title: 'Sub Sub Item 1',
                path: '/main1/sub1/subsub1',
              },
              {
                title: 'Sub Sub Item 2',
                path: '/main1/sub1/subsub2',
              },
            ],
          },
          {
            title: 'Sub Item 2',
            path: '/main1/sub2',
          },
        ],
      },
    ],
  },
  {
    title: 'Others',
    menuList: [
      {
        title: 'Account',
        path: '/account',
        icon: <BsGear size={20} />,
      },
      {
        title: 'Help',
        path: '/help',
        icon: <BsQuestionCircle size={20} />,
      },
    ],
  },
];
