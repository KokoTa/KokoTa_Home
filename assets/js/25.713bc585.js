(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{300:function(t,e,r){"use strict";r.r(e);var a=r(14),v=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"直播"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直播"}},[t._v("#")]),t._v(" 直播")]),t._v(" "),e("p",[t._v("直播和点播的区别就是：前者断断续续，后者是一个整体")]),t._v(" "),e("h2",{attrs:{id:"前置知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前置知识"}},[t._v("#")]),t._v(" 前置知识")]),t._v(" "),e("h3",{attrs:{id:"直播原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直播原理"}},[t._v("#")]),t._v(" 直播原理")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/%E7%9B%B4%E6%92%AD%E5%8E%9F%E7%90%86.png",alt:"直播原理"}})]),t._v(" "),e("h3",{attrs:{id:"视频格式支持情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视频格式支持情况"}},[t._v("#")]),t._v(" 视频格式支持情况")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/%E8%A7%86%E9%A2%91%E6%A0%BC%E5%BC%8F%E6%94%AF%E6%8C%81%E6%83%85%E5%86%B5.png",alt:"视频格式支持情况"}})]),t._v(" "),e("h2",{attrs:{id:"直播协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直播协议"}},[t._v("#")]),t._v(" 直播协议")]),t._v(" "),e("p",[t._v("根据不同的浏览器，其支持的直播协议的是不同的：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("HLS 协议(m3u8)：Safari 支持的协议，使用的是 m3u8 文件，该文件中包含 m3u8 或 ts 文件集，一般用于网页端直播(Video Tag)，前端使用较多，地址为 "),e("code",[t._v("//xxx.m3u8")])])]),t._v(" "),e("li",[e("p",[t._v("RTMP 协议(flv)：实时消息传递协议，使用的是 flv 文件，基于 TCP，一般用于客户端采集、传统软件直播(安卓/IOS/PC/Flash)，前端使用较少，地址为 "),e("code",[t._v("rtmp://xxx")])])]),t._v(" "),e("li",[e("p",[t._v("HTTP-FLV 协议(flv)：RTMP 的升级版，使用的是 flv 文件，基于 HTTP，一般用于网页端直播(Video Tag)，前端使用较多，地址为 "),e("code",[t._v("//xxx.flv")])])])]),t._v(" "),e("h3",{attrs:{id:"hsl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hsl"}},[t._v("#")]),t._v(" HSL")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/hls%E5%8D%8F%E8%AE%AE.png",alt:"hls协议"}})]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/hls%E5%8D%8F%E8%AE%AE2.png",alt:"hls协议2"}})]),t._v(" "),e("p",[t._v("HLS 协议使用的是 m3u8 文件")]),t._v(" "),e("p",[t._v("该文件有三种类型：动态类型(live playlist)、静态类型(event playlist)、全量类型(vod playlist)")]),t._v(" "),e("p",[t._v("其中动态和全量用的最多，静态除了在协议中有提及，实际上基本没用过")]),t._v(" "),e("p",[t._v("动态类型：文件包含部分资源片段，加载完毕后会另外继续加载")]),t._v(" "),e("p",[t._v("全量类型：文件包含所有资源片段")]),t._v(" "),e("p",[t._v("m3u8 文件内容如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("```m3u8\n#EXTM3U\n#EXT-X-VERSION:3 // 版本\n#EXT-X-ALLOW-CACHE:NO // 缓存\n#EXT-X-TARGETDURATION:12 // 总时长\n#EXT-X-MEDIA-SEQUENCE:352905 // 总序号\n#EXT-X-PLAYLIST-TYPE:EVENT/VOD // 类型，不写默认为动态类型\n\n#EXTINF:9.967, // 该片段时常\n/live/cctv1_2/352905.ts?wsApp=HLS&wsMonitor=0 // 片段地址\n#EXTINF:9.807,\n/live/cctv1_2/352906.ts?wsApp=HLS&wsMonitor=0\n#EXTINF:11.079,\n/live/cctv1_2/352907.ts?wsApp=HLS&wsMonitor=0\n#EXTINF:9.799,\n/live/cctv1_2/352908.ts?wsApp=HLS&wsMonitor=0\n#EXT-X-ENDLIST // 全量类型下才有的结尾，表示上面的片段就是全部资源了\n```\n")])])]),e("p",[t._v("首个 ts 文件(片段)包含 PAT 包，该包会去寻找 PMT 包，PMT 包会去解析 ts 文件是音频还是视频，然后整合资源变成视频帧，其中的多个 ts 文件统称为 PES")]),t._v(" "),e("h3",{attrs:{id:"http-flv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-flv"}},[t._v("#")]),t._v(" HTTP-FLV")]),t._v(" "),e("p",[t._v("RTMP 的升级版就是 HTTP-FLV，前者使用 TCP，后者使用 HTTP")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/http-flv.png",alt:"http-flv"}})]),t._v(" "),e("p",[t._v("RTMP 的缺点就是使用麻烦、偏底层")]),t._v(" "),e("p",[t._v("HSL 的缺点就是其延时问题，当一个文件中片段过多，就会造成延时")]),t._v(" "),e("p",[t._v("HTTP-FLV 协议解决了 RTMP 复杂、HLS 延时的问题，其优点有：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("可以一定程度上避免防火墙的干扰(比如有的机房只允许 80 端口通过)")])]),t._v(" "),e("li",[e("p",[t._v("兼容 HTTP 302 跳转，具有灵活性")])]),t._v(" "),e("li",[e("p",[t._v("可以使用 HTTPS")])]),t._v(" "),e("li",[e("p",[t._v("更好得支持移动的(Android/IOS)")])])]),t._v(" "),e("h2",{attrs:{id:"video-标签的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#video-标签的使用"}},[t._v("#")]),t._v(" Video 标签的使用")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/KokoTa/All-demo/blob/master/demo/Video%E6%A0%87%E7%AD%BE/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义播放器"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"直播源制作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直播源制作"}},[t._v("#")]),t._v(" 直播源制作")]),t._v(" "),e("h3",{attrs:{id:"手动制作-nginx-ffmpeg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动制作-nginx-ffmpeg"}},[t._v("#")]),t._v(" 手动制作(nginx + ffmpeg)")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("安装 nginx\nmac："),e("code",[t._v("brew install nginx-full --with-rtmp-module")]),t._v("\nwindows: "),e("a",{attrs:{href:"http://nginx-win.ecsds.eu/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("网址"),e("OutboundLink")],1),t._v("，中下载 1.7.11.3 版本，该版本内置了 rtmp 模块，"),e("a",{attrs:{href:"https://www.reddit.com/r/nginx/comments/59zrwf/precompiled_windows_versions_with_rtmp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("安装 ffmpeg\nmac: "),e("code",[t._v("brew install ffmpeg")]),t._v("\nwindows: "),e("a",{attrs:{href:"https://ffmpeg.zeranoe.com/builds/",target:"_blank",rel:"noopener noreferrer"}},[t._v("网址"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("配置 nginx\n除了文件位置不同，文件的配置也不同\nmac: 在 "),e("code",[t._v("/usr/local/etc/nginx")]),t._v(" 中的 "),e("code",[t._v("nginx.conf")]),t._v(" 中，"),e("a",{attrs:{href:"https://github.com/KokoTa/live-demo/blob/master/conf/nginx.conf",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置"),e("OutboundLink")],1),t._v("\nwindows: 在安装目录的 "),e("code",[t._v("conf")]),t._v(" 文件夹中，"),e("a",{attrs:{href:"https://github.com/KokoTa/live-demo/blob/master/conf/nginx-win-rtmp.conf",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("flv 推流\nmac: "),e("code",[t._v("ffmpeg -re -i test.mp4 -strict -2 -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/rtmplive/rtmp")]),t._v("\nwindows: "),e("code",[t._v("ffmpeg -re -i test.mp4 -strict -2 -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/live/home")])])]),t._v(" "),e("li",[e("p",[t._v("hls 推流\nmac: "),e("code",[t._v("ffmpeg -re -i test.mp4 -strict -2 -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/hls/stream")]),t._v("\nwindows: "),e("code",[t._v("ffmpeg -re -i test.mp4 -strict -2 -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/hls/stream")])])]),t._v(" "),e("li",[e("p",[t._v("安装 vlc 播放器\n"),e("a",{attrs:{href:"https://www.videolan.org/vlc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("网址"),e("OutboundLink")],1),t._v("，该播放器用来播放流媒体")])]),t._v(" "),e("li",[e("p",[t._v("检测流\n打开 vlc 播放器，并添加流来验证")])])]),t._v(" "),e("p",[t._v("Windows 下制作直播源详情可见 "),e("a",{attrs:{href:"https://www.jianshu.com/p/eacfc0a9f2fd",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"集成服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集成服务"}},[t._v("#")]),t._v(" 集成服务")]),t._v(" "),e("p",[t._v("注意该集成服务只能在类 linux 中才可以执行")]),t._v(" "),e("p",[t._v("将 "),e("a",{attrs:{href:"https://github.com/KokoTa/live-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("final"),e("OutboundLink")],1),t._v(" 解压放入系统后，进入 server 目录执行 "),e("code",[t._v("open server")]),t._v("，最后执行以下命令")]),t._v(" "),e("p",[e("img",{attrs:{src:"/images/%E9%9B%86%E6%88%90%E6%9C%8D%E5%8A%A1.png",alt:"集成服务"}})]),t._v(" "),e("p",[t._v("该集成服务集成了上面讲到的三种协议，而手动制作只集成了 hls 和 rtmp，没有 http-flv")]),t._v(" "),e("h2",{attrs:{id:"前端对接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端对接"}},[t._v("#")]),t._v(" 前端对接")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/KokoTa/live-demo",target:"_blank",rel:"noopener noreferrer"}},[t._v("地址"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);