// 配置
window.Config = {

  // 站点名
  SiteName: 'Asgard Main Network Montior',

  // 站点链接
  SiteUrl: 'https://zctnet.top:999/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur1574099-390c722620c23a8b981459f5'

  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '首页',
      url: 'https://zctnet.top:666/'
    },
    {
      text: 'Asgard社区',
      url: 'https://zctnet.top:777/'
    }
  ]
};
