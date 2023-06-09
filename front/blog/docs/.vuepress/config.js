module.exports = {
  base: '/KokoTa_Home/',
  title: "KokoTa's Blog",
  description: 'Just playing around',
  themeConfig: {
    lastUpdated: 'Last Updated',
    sidebar: [
      {
        title: '旧文章迁移',
        path: '/front/',
        children: [
          '/front/盒模型与BFC与布局',
          '/front/事件与类型',
          '/front/HTTP',
          '/front/原型',
          '/front/类与继承',
          '/front/通信与安全',
          '/front/渲染与运行与性能与监控',
          '/front/HTTPS',
          '/front/Cookie与Session与Token',
          '/front/跨域',
          '/front/移动端适配',
          '/front/JS精度问题',
          '/front/服务端踩坑日记',
          '/front/前端问题汇总',
          '/front/微信开发',
          '/front/JS的this',
          '/front/缓存',
          '/front/MVVM',
          '/front/混合开发',
          '/front/直播',
          '/front/内网穿透'
        ]
      },
      {
        title: '前端知识汇总',
        path: '/question/',
        children: [
          {
            title: 'html',
            collapsable: true,
            children: ['/question/html/tag', '/question/html/browser']
          },
          {
            title: 'css',
            collapsable: true,
            children: [
              '/question/css/attribute',
              '/question/css/unit',
              '/question/css/layout',
              '/question/css/other'
            ]
          },
          {
            title: 'javascript',
            collapsable: true,
            children: [
              '/question/js/api',
              '/question/js/es6',
              '/question/js/node',
              '/question/js/webpack',
              '/question/js/other'
            ]
          },
          {
            title: 'net',
            collapsable: true,
            children: [
              '/question/net/http',
              '/question/net/tcp',
              '/question/net/other'
            ]
          },
          '/question/vue/',
          '/question/mongodb/',
          '/question/weixin/',
          '/question/other',
          '/question/interview'
        ]
      }
    ]
  }
}
