(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-office-map-map"],{1075:function(n,t,r){"use strict";r.r(t);var a=r("fb31"),e=r("93a1");for(var i in e)"default"!==i&&function(n){r.d(t,n,(function(){return e[n]}))}(i);r("2629");var u,o=r("f0c5"),c=Object(o["a"])(e["default"],a["b"],a["c"],!1,null,"1f551c98",null,!1,a["a"],u);t["default"]=c.exports},"11a9":function(n,t,r){var a=r("6ae2");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var e=r("4f06").default;e("508247d2",a,!0,{sourceMap:!1,shadowMode:!1})},"1c71":function(n,t,r){"use strict";r("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{marker:{id:101,longitude:121.50109,latitude:31.23691}}},onLoad:function(n){},methods:{getMarker:function(n){var t=Number(n.id),r=Number(n.longitude),a=Number(n.latitude);this.marker={id:t,longitude:r,latitude:a}}}};t.default=a},2629:function(n,t,r){"use strict";var a=r("11a9"),e=r.n(a);e.a},"6ae2":function(n,t,r){var a=r("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.office-map[data-v-1f551c98]{width:100%;height:100%}.office-map .map[data-v-1f551c98]{width:100%;height:calc(100% + 45px);position:absolute;top:-45px}',""]),n.exports=t},"93a1":function(n,t,r){"use strict";r.r(t);var a=r("1c71"),e=r.n(a);for(var i in a)"default"!==i&&function(n){r.d(t,n,(function(){return a[n]}))}(i);t["default"]=e.a},fb31:function(n,t,r){"use strict";var a,e=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("v-uni-view",{staticClass:"office-map"},[n.marker?r("v-uni-view",[r("v-uni-map",{staticClass:"map",attrs:{latitude:31.23691,longitude:121.50109,markers:[n.marker]}})],1):r("v-uni-view",[n._v("asd")])],1)},i=[];r.d(t,"b",(function(){return e})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return a}))}}]);