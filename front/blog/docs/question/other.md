# 其他

## 项目环境

本地环境是自己电脑自己配置的环境

开发环境是团队公用的开发环境

测试环境一般用于自动化测试，不过我们可以用于人工测试

预演环境使用 master 分支，使用部分生产环境是数据进行最后一步的测试

生产环境就是正式环境

## 单线程和多线程

一个函数里面有2个任务 A任务 和 B任务  AB各需要1秒 也就是执行完这个函数要2秒。如果用多线程 它会不停切换执行任务 唯一的好处是 B无需等A执行完了才执行 结果还是用了2秒。

## QZ-Tray 打印机库

[qz 破解教程](https://medium.com/@buddhiv/how-to-directly-print-from-your-browser-using-qz-tray-6c86ccd7b3f9)

## 单元测试原则

1. 单一职责。 如果一段代码承担的职责越多，为其编写单元测试的时候就要构造更多的输入数据，然后推测它的输出。比如，一段代码中既包含数据库的连接，也包含查询，那么为它编写测试用例就要同时关注数据库连接和数据库查询。较好的方式是将这两种职责进行解耦分离，变成两个单一职责的方法，分别测试数据库连接和数据库查询。

2. 接口抽象。 通过对程序代码进行接口抽象后，我们可以针对接口进行测试，而具体代码实现的变化不影响为接口编写的单元测试。

3. 层次分离。 层次分离实际上是单一职责的一种实现。在MVC结构的应用中，就是典型的层次分离模型，如果不分离各个层次，无法想象这个代码该如何切入测试。通过分层之后，可以逐层测试，逐层保证

## 数据结构和算法相关

1. [尾递归](http://www.ruanyifeng.com/blog/2015/04/tail-call.html)

## 业务逻辑相关

1. 新东日中医的路由控制流程：`未填写登录信息 -> 检查是否有用户信息 -> 没有就跳到登录页 -> 有就根据用户信息渲染左侧导航栏 -> 当输入某个地址时 -> 判断用户类型 -> 有权限就跳转到目标页 -> 没有就跳转到首页（判断的路由放在一个数组里进行遍历匹配）`

2. 气泡语音逻辑方面是调用微信的 SDK，U I 则是一张图根据情况进行背景定位

3. 如果不想保存登录状态的信息，那么信息就不要保存在 localStorage，而是保存在 sessionStorage，后者的信息在关闭页面后将被删除

4. 聊天记录加载保持加载后视图位置不变：基本思路就是获得高度差，然后利用这个差值进行相应操作

5. 实时数据的情况下，滑动到底部时数据加载重复的问题：[方案1](https://segmentfault.com/q/1010000007247723) [方案2](https://segmentfault.com/q/1010000002654914)

6. 某页面，有搜索和跳转到打印的功能，搜索条件为双向数据绑定，初始加载时条件为空，输出所有结果。此时如果只输入条件，不搜索，当前页结果还是显示所有结果，但按下跳转到打印页时，由于传过去的是双向绑定的变量，此时打印页请求的条件为这个变量，导致输出的结果不同。解决方法是设置变量A、B，A是双向数据绑定，点击搜索时让B = A，请求时用B变量，以达到双向绑定的数据和搜索时的数据分离。

7. 对于一些重要操作，比如支付等，务必使用防抖机制！