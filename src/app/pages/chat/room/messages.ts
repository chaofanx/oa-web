export const messages = [
  {
    text: '你好',
    reply: true,
    date: new Date(),
    user: {
      name: '管理员',
      avatar: '',
    },
  },
  {
    text: '你好',
    reply: false,
    date: new Date(),
    type: 'file',
    files: [
      {
        url: 'https://i.gifer.com/no.gif',
        type: 'image/jpeg',
        icon: false,
      },
    ],
    user: {
      name: '用户',
      avatar: '',
    },
  },
];
