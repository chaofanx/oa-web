import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '主页',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Meeting',
    group: true,
  },
  {
    title: '组织管理',
    icon: 'people-outline',
    link: '/pages/organization',
    children: [
      {
        title: '部门管理',
        icon: 'briefcase-outline',
        link: '/pages/organization/dept',
      },
      {
        title: '用户管理',
        icon: 'person-done-outline',
        link: '/pages/organization/user',
      },
    ],
  },
  {
    title: '会议管理',
    icon: 'video-outline',
    link: '/pages/meet',
    children: [
      {
        title: '会议预约',
        icon: 'tv-outline',
        link: '/pages/meet/appointment',
      },
      {
        title: '加入会议',
        icon: 'tv-outline',
        link: '/pages/meet/room',
      },
      {
        title: '会议室',
        icon: 'tv-outline',
        link: '/pages/meet/offline',
      },
      {
        title: '聊天室',
        icon: 'tv-outline',
        link: '/pages/chat/room',
      },
    ],
  },
  {
    title: '流程审批',
    icon: 'video-outline',
    link: '/pages/approval',
    children: [
      {
        title: '会议审批',
        icon: 'tv-outline',
        link: '/pages/approval/meet',
      },
    ],
  },
  {
    title: 'System',
    group: true,
  },
  {
    title: '系统设置',
    icon: 'options-outline',
    link: '/pages/dashboard',
    children: [
      {
        title: '系统设置',
        icon: 'home-outline',
        link: '/pages/setting',
      },
    ],
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
];
