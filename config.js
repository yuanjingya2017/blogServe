/**
 * config
 */

var path = require('path');

var config = {
  // debug 为 true 时，用于本地调试
  debug: true,

  // get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: 'blogServe', // 社区名字
  description: '个人博客服务端代码', // 社区的描述
  keywords: 'nodejs, node, express, connect, socket.io',
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: 'localhost',
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: '',
  // 默认的cnzz tracker ID，自有站点请修改
  cnzz_tracker_id: '',

  // mongodb 配置
  db: 'mongodb://127.0.0.1/blog_serve',

  session_secret: 'node_club_secret', // 务必修改
  auth_cookie_name: 'node_club',

  // 程序运行的端口
  port: 3002,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  log_dir: path.join(__dirname, 'logs'),

  // 邮箱配置
  mail_opts: {
    host: "smtp.163.com", // 主机
    secure: true, // 使用 SSL
    port: 465, // SMTP 端口
    secureConnection: true, // 使用 SSL
    auth: {
      user: '17664051304@163.com',
      pass: '419210yjy'
    }
  },
  // admin 可删除话题，编辑标签。把 user_login_name 换成你的登录名
  admins: { user_login_name: true },

  // oneapm 是个用来监控网站性能的服务
  oneapm_key: '',


  file_limit: '1MB'
};
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'start') {
  config.db = 'mongodb://127.0.0.1/node_club_test';
}

module.exports = config;
