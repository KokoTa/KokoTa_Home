(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{292:function(_,v,r){"use strict";r.r(v);var t=r(14),a=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"微信开发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微信开发"}},[_._v("#")]),_._v(" 微信开发")]),_._v(" "),v("p",[_._v("他：你不是在学微信开发吗？学得怎么样了？"),v("br"),_._v("\n我：Em...情况不容乐观= ="),v("br"),_._v("\n他：What happen？"),v("br"),_._v("\n我：卡在授权出不去了0 0"),v("br"),_._v("\n他：有好好看文档吗？"),v("br"),_._v("\n我：看不懂^ ^"),v("br"),_._v("\n他：......")]),_._v(" "),v("h2",{attrs:{id:"微信开发介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微信开发介绍"}},[_._v("#")]),_._v(" 微信开发介绍")]),_._v(" "),v("p",[_._v("微信开发其实就是在微信这个原生应用的框架下进行的二次开发，简单来说就是依赖于微信的开发。"),v("br"),_._v("\n微信开发一般分为两类："),v("strong",[_._v("微信公众号开发")]),_._v("、"),v("strong",[_._v("微信小程序开发")]),_._v("。")]),_._v(" "),v("h2",{attrs:{id:"微信公众号开发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号开发"}},[_._v("#")]),_._v(" 微信公众号开发")]),_._v(" "),v("p",[_._v("微信的公众号具有许多功能：消息发送、用户管理、群发、素材管理等。"),v("br"),_._v("\n虽然可以通过微信公众号平台的界面进行可视化管理，但深度的定制还是由程序后台来处理会显得方便些。"),v("br"),_._v("\n另外微信公众号还提供 "),v("strong",[_._v("微信JS-SDK")]),_._v(" 来使在微信访问的网页能调用微信的原生功能。")]),_._v(" "),v("h3",{attrs:{id:"微信公众号分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号分类"}},[_._v("#")]),_._v(" 微信公众号分类")]),_._v(" "),v("p",[_._v("公众号分为三类："),v("strong",[_._v("订阅号")]),_._v("、"),v("strong",[_._v("服务号")]),_._v("、"),v("strong",[_._v("企业号")]),_._v("。\n"),v("strong",[_._v("订阅号")]),_._v("：一般是个人或小团体，主要用于消息订阅、通知、互动等"),v("br"),_._v(" "),v("strong",[_._v("服务号")]),_._v("：一般用于商店或企业，主要用于消息推送、支付、客服咨询等"),v("br"),_._v(" "),v("strong",[_._v("企业号")]),_._v("：一般用于企业，主要用于企业内的考勤、活动等"),v("br"),_._v("\n这里我们是基于 "),v("strong",[_._v("订阅号")]),_._v(" 来进行开发的。")]),_._v(" "),v("h3",{attrs:{id:"交互流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交互流程"}},[_._v("#")]),_._v(" 交互流程")]),_._v(" "),v("p",[_._v("微信公众号的交互流程其实是服务器和服务器之间的交互流程，如图："),v("br"),_._v(" "),v("img",{attrs:{src:"/images/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%A4%E4%BA%92%E6%B5%81%E7%A8%8B.jpg",alt:"微信公众号交互流程"}})]),_._v(" "),v("ol",{attrs:{start:"0"}},[v("li",[_._v("生成 "),v("code",[_._v("access_token")]),_._v("，用于微信API的请求")]),_._v(" "),v("li",[_._v("在公众平台配置服务器后，微信服务器会发送 GET 请求到填写的服务器URL上")]),_._v(" "),v("li",[_._v("配置服务器根据请求中的信息生成签名，返回给微信服务器，验证成功")]),_._v(" "),v("li",[_._v("用户发送信息给公众号，公众号将信息发送给微信服务器")]),_._v(" "),v("li",[_._v("微信服务器推送 POST 请求给配置服务器，内容格式为 XML")]),_._v(" "),v("li",[_._v("配置服务器解析数据并返回相应的 XML 数据给微信服务器")]),_._v(" "),v("li",[_._v("微信服务器将回复推送到公众号")])]),_._v(" "),v("h3",{attrs:{id:"开发问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开发问题"}},[_._v("#")]),_._v(" 开发问题")]),_._v(" "),v("h4",{attrs:{id:"接口配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#接口配置"}},[_._v("#")]),_._v(" 接口配置")]),_._v(" "),v("p",[_._v("在开发时，我们可以使用微信公众平台接口测试帐号来进行开发，开发完毕后再应用于正式号。"),v("br"),_._v("\n在填写配置服务器的地址时，我们可以选择使用内网穿透，让本地内网的项目映射到外网，让外网的这个地址作为配置服务器的地址。"),v("br"),_._v("\n这里我们使用 "),v("strong",[_._v("Natapp")]),_._v(" 内网穿透工具来实现。")]),_._v(" "),v("p",[_._v("首先我们进入官网并注册后，获得免费隧道，然后根据官方教程进行配置。"),v("br"),_._v("\n打开应用后我们可以获得一个临时的外网地址，在网站输入该地址可以访问到本地项目。")]),_._v(" "),v("p",[_._v("当然，由于是临时地址，所以会经常更换，因此微信的配置服务器地址也需要同步更新，这显然是很麻烦的。"),v("br"),_._v("\n因此可以通过购买VIP隧道的方式来自定义映射的域名。"),v("br"),_._v("\n这里我们使用二级域名作为自定义域名。")]),_._v(" "),v("p",[_._v("自定义域名映射步骤：")]),_._v(" "),v("ol",[v("li",[_._v("首先走一遍"),v("a",{attrs:{href:"https://natapp.cn/article/beian",target:"_blank",rel:"noopener noreferrer"}},[_._v("官方教程"),v("OutboundLink")],1),_._v("，先授权顶级域名")]),_._v(" "),v("li",[_._v("然后在腾讯云域名管理里添加一条二级域名的解析(将要使用的自定义二级域名)")]),_._v(" "),v("li",[_._v("设置 Nginx 关于该二级域名的配置并 reload，注意这里我们需要使用代理选项，配置如图："),v("br"),_._v(" "),v("img",{attrs:{src:"/images/Nginx%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F%E9%85%8D%E7%BD%AE.png",alt:"Nginx配置"}})]),_._v(" "),v("li",[_._v("更新 Nata 配置的隧道 token\n这样我们就可以通过访问自定义域名来访问本地项目啦，配置服务器地址也可以填这个地址啦！")])]),_._v(" "),v("h4",{attrs:{id:"js-sdk-验证"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js-sdk-验证"}},[_._v("#")]),_._v(" JS-SDK 验证")]),_._v(" "),v("p",[_._v("微信的 "),v("strong",[_._v("Access_token")]),_._v(" 和 "),v("strong",[_._v("ticket")]),_._v(" 都是有 有效时间(7200秒) 的，并且如果获取了新的，旧的就作废了。"),v("br"),_._v("\n基于以上问题，我们将这两条数据单独存储在本地以供使用，在过期后自动进行更新。")]),_._v(" "),v("p",[_._v("微信的公众号开发只需要 "),v("code",[_._v("access_token")]),_._v(" 即可，但 JS-SDK 开发还需要 "),v("code",[_._v("ticket")]),_._v("，用来生成网页签名(所以一共有两个签名，一个是微信验证时的签名，一个是网页用的签名)。"),v("br"),_._v("\n签名的生成方法不过于赘述，但这里需要提一个点：")]),_._v(" "),v("p",[_._v("项目中是单独暴露一个 "),v("code",[_._v("/sign")]),_._v(" API 来获取签名的，签名中需要的 "),v("code",[_._v("url")]),_._v(" 是请求方的页面。"),v("br"),_._v("\n即 /index 页面向 /sign 请求签名， "),v("code",[_._v("url")]),_._v(" 就是 /index。"),v("br"),_._v("\n注意这个 url 的域名不一定就是配置服务器的域名，只要加入了JS接口安全域名白名单就行，"),v("a",{attrs:{href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115",target:"_blank",rel:"noopener noreferrer"}},[_._v("详情"),v("OutboundLink")],1)]),_._v(" "),v("p",[_._v("最后奉上 SDK 网页开发的流程，用以对比公众号开发流程："),v("br"),_._v(" "),v("img",{attrs:{src:"/images/%E5%BE%AE%E4%BF%A1JSSDK%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B.jpg",alt:"Nginx配置"}})]),_._v(" "),v("h2",{attrs:{id:"微信小程序开发"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序开发"}},[_._v("#")]),_._v(" 微信小程序开发")]),_._v(" "),v("p",[_._v("与微信网页开发不同，小程序开发是自有一套规范的。"),v("br"),_._v("\n在这个规范下，我们使用其提供的 "),v("strong",[_._v("配置、组件、API")]),_._v(" 等来进行开发(受约束的开发)。")]),_._v(" "),v("p",[_._v("我们使用微信开发者工具来开发小程序，跟着"),v("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/",target:"_blank",rel:"noopener noreferrer"}},[_._v("官方文档"),v("OutboundLink")],1),_._v("走一遍，"),v("br"),_._v("\n我们会发现它和 Vue、React 很像：标签语言、模板、组件、单向数据绑定等等。")]),_._v(" "),v("p",[_._v("小程序提供了大量组件，不需要引入其他库或者第三方组件，就能完成开发。"),v("br"),_._v("\n因此小程序开发好像很简单的样子。")]),_._v(" "),v("p",[_._v("然而当涉及到请求和支付时，是有点麻烦的(其实很麻烦)。"),v("br"),_._v("\n这里只提其中两点，"),v("strong",[_._v("请求")]),_._v(" 和 "),v("strong",[_._v("支付")]),_._v("。"),v("br"),_._v("\n其他的麻烦点大同小异，结合文档慢慢实践就OK啦！")]),_._v(" "),v("h3",{attrs:{id:"请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求"}},[_._v("#")]),_._v(" 请求")]),_._v(" "),v("p",[_._v("小程序开发如果要请求外部地址，需要使用 "),v("code",[_._v("wx.request")]),_._v(" 这个API。"),v("br"),_._v("\n而这个API，只能请求已经添加到白名单的网址(道理类似sdk请求源要加入白名单)，而且这个白名单还分为四种情况："),v("br"),_._v(" "),v("strong",[_._v("请求、socket、upload、download")]),v("br"),_._v("\n所以如果想请求诸如：豆瓣API、知乎日报API，那就请务必把网址加入到白名单中。")]),_._v(" "),v("h3",{attrs:{id:"支付"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#支付"}},[_._v("#")]),_._v(" 支付")]),_._v(" "),v("p",[_._v("微信的支付，无论是 "),v("strong",[_._v("公众号支付、SDK支付、小程序支付")]),_._v("，都是一件繁琐的事情，毕竟涉及到金钱交♂易嘛。"),v("br"),_._v("\n让我们来看看 "),v("strong",[_._v("小程序支付")]),_._v("，引用一下官方视图："),v("br"),_._v(" "),v("img",{attrs:{src:"/images/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%94%AF%E4%BB%98.jpg",alt:"小程序支付流程"}})]),_._v(" "),v("ol",[v("li",[_._v("用户进入小程序，点击下单按钮，通过 "),v("code",[_._v("wx.login")]),_._v(" 获得 "),v("code",[_._v("code")]),_._v("，然后将其发送给商家后端")]),_._v(" "),v("li",[_._v("商家后端请求微信后，获取 "),v("code",[_._v("openid/session_key/unionid")])]),_._v(" "),v("li",[_._v("在2的基础上商家后端请求微信后端，获取 "),v("code",[_._v("prepay_id/code_url")]),_._v(" 等")]),_._v(" "),v("li",[_._v("商家后端组合数据，通过算法获得签名，再将签名和其他数据传给小程序")]),_._v(" "),v("li",[_._v("小程序获得数据后弹出支付页面")]),_._v(" "),v("li",[_._v("用户确认支付后，小程序自动请求微信后端，OK后微信后端返回支付结果给小程序，并推送支付信息给商家后端")]),_._v(" "),v("li",[_._v("商家后端处理推送过来的信息，完成支付流程")])]),_._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[_._v("#")]),_._v(" 参考")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1445241432",target:"_blank",rel:"noopener noreferrer"}},[_._v("微信公众号开发文档"),v("OutboundLink")],1),v("br"),_._v(" "),v("a",{attrs:{href:"https://github.com/KokoTa/Wechat-GZH",target:"_blank",rel:"noopener noreferrer"}},[_._v("项目源码"),v("OutboundLink")],1),_._v(" "),v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/23594164",target:"_blank",rel:"noopener noreferrer"}},[_._v("从零接入小程序支付"),v("OutboundLink")],1),v("br"),_._v(" "),v("a",{attrs:{href:"https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_4&index=3",target:"_blank",rel:"noopener noreferrer"}},[_._v("小程序支付流程"),v("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=a.exports}}]);