export default {
  pages: [
     // ─── 核心主包页面 ───
    'pages/home/index',             // 首页 容器页
    'pages/login/index',            // 登陆
    'pages/register/index',         // 注册
    // 'pages/home/index',             // 首页 容器页
    'pages/encyclopedia/index',     // 百科
    'pages/scan/index',             // 拍照识别
    'pages/management/index',       // 管理
    'pages/mine/index'              // 我的
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,            // 启用自定义底栏
    selectedColor: '#BB8049',         // 选中文字/图标颜色
    backgroundColor: '#fff',          // 背景色
    list: [                         // 即便 custom，也必须有 list，且不能空
      { pagePath: 'pages/home/index',       text: '首页' },
      { pagePath: 'pages/encyclopedia/index', text: '百科' },
      { pagePath: 'pages/scan/index',       text: '' /* 只要空 text 即可 */ },
      { pagePath: 'pages/management/index', text: '管理' },
      { pagePath: 'pages/mine/index',       text: '我的' }
    ]
  },
  subPackages: [
     // ─── 购物商城 ───
     {
      root: 'mall',
      pages: [
        'index',           // 首页-商城
        /* …mall 下其他页面… */
      ]
    },
     // ─── 百科（Wine & Cigar 两大类） ───
     {
      root: 'encyclopedia',
      pages: [
        'index',            // 百科首页
        'wine/index',       // 红酒
        'cigar/index',      // 雪茄列表
        /* …更多百科相关页面… */
      ]
    },
     // ─── 拍照识别 ───
     {
      root: 'scan',
      pages: [
        'index',       
        /* …更多拍照识别相关页面… */
      ]
    },
      // ─── 管理（Wine & Cigar 两大类） ───
      {
        root: 'management',
        pages: [         // 容器页
          'index',
          'wine/index',        // 红酒管理页面
          'cigar/index',       // 雪茄管理页面
          /* …管理功能更多页面… */
        ]
      },
      // ─── 我的（偶尔访问，但页面多） ───
    {
      root: 'mine',
      pages: [
        'index',
        'profile/index',           // 我的简介
        /* …更多“我的”下页面… */
      ]
    }
  ]

};
