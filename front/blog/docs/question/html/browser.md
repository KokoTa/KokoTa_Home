# 浏览器相关

## 页面加载流程

1. 浏览器开启线程进行协议判断

2. 解析 URL

3. DNS 解析获取 IP，发送信息

4. 服务器处理逻辑，读取缓存或查询数据库

5. 服务器返回相应，304 或 200

6. 浏览器获得 HTML

7. 解析 HTML 生成 DOM Tree，下载 MIME 文件，设置缓存

8. CSS 合并 DOM Tree 进行布局和绘制，JS 执行

## 浏览器自带的存储

sessionStorage 刷新后还在，状态树刷新后就不在了

## 重定向问题

简单请求服务端可以重定向，非简单请求不可以