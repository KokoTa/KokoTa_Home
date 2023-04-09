(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{293:function(a,t,r){"use strict";r.r(t);var v=r(14),e=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"混合开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#混合开发"}},[a._v("#")]),a._v(" 混合开发")]),a._v(" "),t("p",[a._v("混合开发可以理解为前端跨端开发，比如：")]),a._v(" "),t("p",[a._v("Android/IOS 端可以用 Cordova/React Native 实现")]),a._v(" "),t("p",[a._v("PC/Mac 端可以用 Electron 实现")]),a._v(" "),t("h2",{attrs:{id:"cordova"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cordova"}},[a._v("#")]),a._v(" Cordova")]),a._v(" "),t("p",[a._v("移动端混合开发的最简便方式，便是使用 Cordova，一个提供了 native api 及项目打包的工具库。")]),a._v(" "),t("p",[a._v("使用 Cordova 打包的应用其实就是一个拥有 native 功能的 web app，它运行于移动端的 webview 上。")]),a._v(" "),t("p",[a._v("这里介绍使用 Vue + Cordova 构建一个简易混合 APP 应用：")]),a._v(" "),t("ol",[t("li",[t("p",[t("code",[a._v("npm install -g @vue/cli")]),a._v(" 安装 vue-cli")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("vue create hybrid")]),a._v(" 创建 vue 项目")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("npm install -g cordova")]),a._v(" 安装 cordova")])]),a._v(" "),t("li",[t("p",[a._v("进入 vue 项目并执行 "),t("code",[a._v("cordova create app")]),a._v(" 新建 cordova 项目")])]),a._v(" "),t("li",[t("p",[a._v("进入 cordova 项目并添加对应的平台插件 "),t("code",[a._v("cordova platform add browser")]),a._v("、"),t("code",[a._v("cordova platform add android")]),a._v(" 等")])]),a._v(" "),t("li",[t("p",[a._v("添加"),t("a",{attrs:{href:"https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("安卓环境"),t("OutboundLink")],1),a._v("：")]),a._v(" "),t("ol",[t("li",[a._v("Java JDK 1.8")]),a._v(" "),t("li",[a._v("Gradle")]),a._v(" "),t("li",[a._v("Android Studio + Android SDK(版本要对上) + Android AVD")]),a._v(" "),t("li",[a._v("设置环境变量(JAVA_HOME/ANDROID_HOME等)")])])]),a._v(" "),t("li",[t("p",[a._v("添加 cordova 插件，比如 "),t("code",[a._v("cordova plugin add cordova-plugin-geolocation")]),a._v(" 等")])]),a._v(" "),t("li",[t("p",[a._v("回到上级，编写项目逻辑，同时引入 cordova 插件的写法来完成 native 功能")])]),a._v(" "),t("li",[t("p",[a._v("新建 vue 构建文件 vue.config.js，更改配置：")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("outputDir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./app/www'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 把构建后的文件放入 cordval 的 www 文件夹中")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("publicPath")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//用户部署的基本url,如果不配置默认为部署所在域的根目录，如果不要部署到子路径，则需要配置该项。如果设为空，转移后的使用相对路径引用文件。并且将所有的css js都放到了根目录")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("productionSourceMap")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//不生成map")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("runtimeCompiler")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 包含运行时编译器的 Vue 构建版本")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("在 vue 的 index.html 中添加 "),t("code",[a._v('<script src="cordova.js"><\/script>')])])]),a._v(" "),t("li",[t("p",[a._v("进入 cordova 项目并执行 "),t("code",[a._v("cordova run android")]),a._v(" 来进行调试")])])]),a._v(" "),t("p",[a._v("通过以上方式，我们会发现如果不调用 native api 而是单纯的 web 开发，开发效率还是挺高的")]),a._v(" "),t("p",[a._v("但是如果牵涉到 native api 时，开发效率就会降一大截，因为我们每次修改代码都需要 "),t("code",[a._v("npm run build")]),a._v(" "),t("code",[a._v("cordova run android")]),a._v(" 来进行调试")]),a._v(" "),t("p",[a._v("总的来说，webview 下运行的 app 性能较差，只适合一些简单的、展示性的场景")]),a._v(" "),t("h2",{attrs:{id:"react-native"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react-native"}},[a._v("#")]),a._v(" React Native")]),a._v(" "),t("p",[a._v("如果追求性能，那么果断推荐 React Native，相比于 Cordova，开发效率更高、应用性能也更高、原理上也更底层")])])}),[],!1,null,null,null);t.default=e.exports}}]);