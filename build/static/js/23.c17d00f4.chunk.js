(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[23],{195:function(e,t,n){"use strict";n(110),n(210),n(223),n(222)},196:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(10),l=n.n(c),i=n(199),s=n.n(i),o=n(0),u=n(4),d=n.n(u),m=n(67),p=n(207),b=n.n(p),h=n(229),j=n(28),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=function(e){var t,n,a=e.prefixCls,c=e.separator,l=void 0===c?"/":c,i=e.children,s=e.overlay,u=e.dropdownProps,d=f(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=(0,o.useContext(j.b).getPrefixCls)("breadcrumb",a);return t="href"in d?o.createElement("a",r()({className:"".concat(m,"-link")},d),i):o.createElement("span",r()({className:"".concat(m,"-link")},d),i),n=t,t=s?o.createElement(h.a,r()({overlay:s,placement:"bottomCenter"},u),o.createElement("span",{className:"".concat(m,"-overlay-link")},n,o.createElement(b.a,null))):n,i?o.createElement("span",null,t,l&&""!==l&&o.createElement("span",{className:"".concat(m,"-separator")},l)):null};v.__ANT_BREADCRUMB_ITEM=!0;var O=v,x=function(e){var t=e.children,n=(0,o.useContext(j.b).getPrefixCls)("breadcrumb");return o.createElement("span",{className:"".concat(n,"-separator")},t||"/")};x.__ANT_BREADCRUMB_SEPARATOR=!0;var g=x,y=n(227),_=n(66),N=n(37),E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function w(e,t,n,a){var r=n.indexOf(e)===n.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return r?o.createElement("span",null,c):o.createElement("a",{href:"#/".concat(a.join("/"))},c)}var P=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},C=function(e){var t,n=e.prefixCls,a=e.separator,c=void 0===a?"/":a,i=e.style,u=e.className,p=e.routes,b=e.children,h=e.itemRender,f=void 0===h?w:h,v=e.params,x=void 0===v?{}:v,g=E(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),C=o.useContext(j.b),R=C.getPrefixCls,A=C.direction,I=R("breadcrumb",n);if(p&&p.length>0){var k=[];t=p.map((function(e){var t,n=P(e.path,x);return n&&k.push(n),e.children&&e.children.length&&(t=o.createElement(y.a,null,e.children.map((function(e){return o.createElement(y.a.Item,{key:e.path||e.breadcrumbName},f(e,x,p,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=s()(e),r=P(t,n);return r&&a.push(r),a}(k,e.path,x)))})))),o.createElement(O,{overlay:t,separator:c,key:n||e.breadcrumbName},f(e,x,p,k))}))}else b&&(t=Object(m.a)(b).map((function(e,t){return e?(Object(_.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(N.a)(e,{separator:c,key:t})):e})));var B=d()(I,l()({},"".concat(I,"-rtl"),"rtl"===A),u);return o.createElement("div",r()({className:B,style:i},g),t)};C.Item=O,C.Separator=g;var R=C;t.a=R},207:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(211))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},210:function(e,t,n){},211:function(e,t,n){"use strict";var a=n(12),r=n(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),l=a(n(212)),i=a(n(18)),s=function(e,t){return c.createElement(i.default,Object.assign({},e,{ref:t,icon:l.default}))};s.displayName="DownOutlined";var o=c.forwardRef(s);t.default=o},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},402:function(e,t,n){},487:function(e,t,n){"use strict";n.r(t);n(250);var a=n(249),r=(n(195),n(196)),c=n(183),l=n(7),i=n(0),s=(n(402),n(5)),o=n(47),u=n.n(o),d=n(46),m=n(215),p=n(65),b=n(29),h=u()({loader:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(12),n.e(38)]).then(n.bind(null,419))},loading:d.a}),j=u()({loader:function(){return n.e(31).then(n.bind(null,444))},loading:d.a}),f=u()({loader:function(){return Promise.all([n.e(1),n.e(30)]).then(n.bind(null,446))},loading:d.a}),v=u()({loader:function(){return n.e(29).then(n.bind(null,448))},loading:d.a}),O=u()({loader:function(){return Promise.all([n.e(7),n.e(40)]).then(n.bind(null,450))},loading:d.a}),x=u()({loader:function(){return Promise.all([n.e(2),n.e(7),n.e(33)]).then(n.bind(null,465))},loading:d.a});function g(e){var t,n,o,u,d,p=e.history,b=e.location,g=e.homeInfo,y=Object(i.useState)(0),_=Object(c.a)(y,2),N=_[0],E=_[1];Object(i.useEffect)((function(){m.a.map((function(e,t){e==(null===b||void 0===b?void 0:b.pathname)&&E(t)}))}));return Object(l.jsxs)("div",{id:"User",children:[Object(l.jsxs)(r.a,{separator:Object(l.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(l.jsxs)(r.a.Item,{onClick:function(e){e.preventDefault(),p.push("/index")},style:{cursor:"pointer",color:"#222"},children:[Object(l.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(l.jsx)(r.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u4e2a\u4eba\u4e2d\u5fc3"}),Object(l.jsx)(r.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u4e2a\u4eba\u8d44\u6599"})]}),Object(l.jsxs)("div",{className:"body_warp",children:[Object(l.jsxs)("div",{className:"left_box",children:[Object(l.jsxs)("div",{className:"top_info",children:[Object(l.jsxs)("div",{className:"perpo",children:[Object(l.jsx)(a.a,{className:"Avatar",size:79,icon:Object(l.jsx)("img",{style:{width:"5.64rem",height:"5.64rem"},src:null===g||void 0===g||null===(t=g.teacher)||void 0===t?void 0:t.avatar_file,alt:"avatar"})}),Object(l.jsx)("div",{className:"name",children:null===g||void 0===g||null===(n=g.teacher)||void 0===n?void 0:n.true_name})]}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsxs)("div",{className:"subject",children:[Object(l.jsx)("img",{className:"subject_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/subject_icon.png",alt:"subject_icon"}),Object(l.jsx)("span",{children:null===g||void 0===g||null===(o=g.teacher)||void 0===o||null===(u=o.get_subject)||void 0===u?void 0:u.title})]}),Object(l.jsxs)("div",{className:"integral",children:[Object(l.jsx)("img",{className:"integral_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon.png",alt:"integral_icon"}),Object(l.jsxs)("span",{children:["\u79ef\u5206\uff1a",null===g||void 0===g||null===(d=g.teacher)||void 0===d?void 0:d.points]})]})]})]}),Object(l.jsx)("div",{className:"bot_menu",children:null===m.i||void 0===m.i?void 0:m.i.map((function(e,t){return Object(l.jsxs)("div",{className:N==t?"items current_bg":"items",onClick:function(){return function(e){p.push(m.a[e])}(t)},children:[Object(l.jsx)("img",{className:"pic_icon",src:e.img,alt:"icon_small"}),Object(l.jsx)("span",{className:"text",children:e.text})]},t)}))})]}),Object(l.jsx)("div",{className:"right_box",children:Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{exact:!0,path:"/user/down",component:f}),Object(l.jsx)(s.b,{exact:!0,path:"/user/integral",component:j}),Object(l.jsx)(s.b,{exact:!0,path:"/user/upload_list",component:v}),Object(l.jsx)(s.b,{exact:!0,path:"/user/upload_detail",component:O}),Object(l.jsx)(s.b,{exact:!0,path:"/user/upload_loading",component:x}),Object(l.jsx)(s.b,{path:"/user/datum",component:h})]})})]})]})}t.default=Object(p.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var n={type:b.c,value:t};e(n)}}}))(Object(i.memo)(g))}}]);