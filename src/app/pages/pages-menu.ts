import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '主页',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Auth',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: '登陆',
        link: '/auth/login',
      },
      {
        title: '注册',
        link: '/auth/register',
      },
      {
        title: '忘记密码',
        link: '/auth/request-password',
      },
      {
        title: '重设密码',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Meeting',
    group: true,
  },
  {
    title: '组织管理',
    icon: 'home-outline',
    link: '/pages/organization',
    children: [
      {
        title: '部门管理',
        icon: 'home-outline',
        link: '/pages/organization/dept',
      },
      {
        title: '角色管理',
        icon: 'home-outline',
        link: '/pages/organization/role',
      },
      {
        title: '用户管理',
        icon: 'home-outline',
        link: '/pages/organization/user',
      },
    ],
  },
  {
    title: '在线办公',
    icon: 'home-outline',
    link: '/pages/dashboard',
    children: [
      {
        title: '审批任务',
        icon: 'home-outline',
        link: '/pages/tables/smart-table',
      },
      {
        title: '员工请假',
        icon: 'home-outline',
        link: '/pages/tables/smart-table',
      },
      {
        title: '违纪罚款',
        icon: 'home-outline',
        link: '/pages/tables/smart-table',
      },
      {
        title: '报销管理',
        icon: 'home-outline',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: '会议管理',
    icon: 'home-outline',
    link: '/pages/meet',
    children: [
      {
        title: '会议室',
        icon: 'home-outline',
        link: '/pages/meet/room',
      },
      {
        title: '线下会议',
        icon: 'home-outline',
        link: '/pages/tables/smart-table',
      },
      {
        title: '线上会议',
        icon: 'home-outline',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'System',
    group: true,
  },
  {
    title: '系统设置',
    icon: 'home-outline',
    link: '/pages/dashboard',
    children: [
      {
        title: '系统设置',
        icon: 'home-outline',
        link: '/pages/dashboard',
      },
      {
        title: '罚款类型',
        icon: 'home-outline',
        link: '/pages/dashboard',
      },
    ],
  },
  // {
  //   title: 'Other',
  //   group: true,
  // },
  // {
  //   title: '布局',
  //   icon: 'layout-outline',
  //   children: [
  //     {
  //       title: 'Stepper',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/pages/layout/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/pages/layout/infinite-list',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/pages/layout/accordion',
  //     },
  //     {
  //       title: 'Tabs',
  //       pathMatch: 'prefix',
  //       link: '/pages/layout/tabs',
  //     },
  //   ],
  // },
  // {
  //   title: '表单',
  //   icon: 'edit-2-outline',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //     {
  //       title: 'Buttons',
  //       link: '/pages/forms/buttons',
  //     },
  //     {
  //       title: 'Datepicker',
  //       link: '/pages/forms/datepicker',
  //     },
  //   ],
  // },
  // {
  //   title: 'UI Features',
  //   icon: 'keypad-outline',
  //   link: '/pages/ui-features',
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //   ],
  // },
  // {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: '额外组件',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/pages/extra-components/alert',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
  // {
  //   title: '地图',
  //   icon: 'map-outline',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: '图表',
  //   icon: 'pie-chart-outline',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //   ],
  // },
  // {
  //   title: '编辑器',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: '表格 & 数据',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: '杂项',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
];
