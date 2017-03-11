# bilive

B 站自动挂机领经验 （滑稽

Inspire by [lwl](https://blog.lwl12.com/read/bilibili-live-upgrade.html).

## 原理

向 B 站发送心跳包，让服务器认为你一直在线。

## 用法

``` sh
npm install
vi index.js # 填写 B 站 cookie
node index.js
```

出现下面信息代表配置成功

```
Status: success
Time: 2017-03-11 23:46:24
Response: {"code":0,"msg":"","data":[]}
UserInfo: {UserInfo}
```

然后设置定时任务

``` sh
crontab -e
```

添加一行

```sh
*/5 * * * * node /path/to/file/index.js  > /path/to/file/bilive.log
```

## License

MIT