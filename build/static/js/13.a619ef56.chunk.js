(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[13],{176:function(e,t,a){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(r=a(180))&&r.__esModule?r:{default:r};t.default=n,e.exports=n},178:function(e,t,a){"use strict";a(104),a(179),a(188),a(185)},179:function(e,t,a){},180:function(e,t,a){"use strict";var r=a(9),n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),s=r(a(181)),i=r(a(24)),l=function(e,t){return c.createElement(i.default,Object.assign({},e,{ref:t,icon:s.default}))};l.displayName="DownOutlined";var o=c.forwardRef(l);t.default=o},181:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},182:function(e,t,a){"use strict";var r=a(2),n=a.n(r),c=a(10),s=a.n(c),i=a(177),l=a.n(i),o=a(0),d=a(6),u=a.n(d),p=a(64),m=a(176),v=a.n(m),b=a(187),f=a(30),h=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},j=function(e){var t,a,r=e.prefixCls,c=e.separator,s=void 0===c?"/":c,i=e.children,l=e.overlay,d=e.dropdownProps,u=h(e,["prefixCls","separator","children","overlay","dropdownProps"]),p=(0,o.useContext(f.b).getPrefixCls)("breadcrumb",r);return t="href"in u?o.createElement("a",n()({className:"".concat(p,"-link")},u),i):o.createElement("span",n()({className:"".concat(p,"-link")},u),i),a=t,t=l?o.createElement(b.a,n()({overlay:l,placement:"bottomCenter"},d),o.createElement("span",{className:"".concat(p,"-overlay-link")},a,o.createElement(v.a,null))):a,i?o.createElement("span",null,t,s&&""!==s&&o.createElement("span",{className:"".concat(p,"-separator")},s)):null};j.__ANT_BREADCRUMB_ITEM=!0;var O=j,y=function(e){var t=e.children,a=(0,o.useContext(f.b).getPrefixCls)("breadcrumb");return o.createElement("span",{className:"".concat(a,"-separator")},t||"/")};y.__ANT_BREADCRUMB_SEPARATOR=!0;var x=y,g=a(186),N=a(65),_=a(38),E=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function w(e,t,a,r){var n=a.indexOf(e)===a.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var a=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),(function(e,a){return t[a]||e}))}(e,t);return n?o.createElement("span",null,c):o.createElement("a",{href:"#/".concat(r.join("/"))},c)}var R=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(a){e=e.replace(":".concat(a),t[a])})),e},P=function(e){var t,a=e.prefixCls,r=e.separator,c=void 0===r?"/":r,i=e.style,d=e.className,m=e.routes,v=e.children,b=e.itemRender,h=void 0===b?w:b,j=e.params,y=void 0===j?{}:j,x=E(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),P=o.useContext(f.b),C=P.getPrefixCls,B=P.direction,k=C("breadcrumb",a);if(m&&m.length>0){var A=[];t=m.map((function(e){var t,a=R(e.path,y);return a&&A.push(a),e.children&&e.children.length&&(t=o.createElement(g.a,null,e.children.map((function(e){return o.createElement(g.a.Item,{key:e.path||e.breadcrumbName},h(e,y,m,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,r=l()(e),n=R(t,a);return n&&r.push(n),r}(A,e.path,y)))})))),o.createElement(O,{overlay:t,separator:c,key:a||e.breadcrumbName},h(e,y,m,A))}))}else v&&(t=Object(p.a)(v).map((function(e,t){return e?(Object(N.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(_.a)(e,{separator:c,key:t})):e})));var T=u()(k,s()({},"".concat(k,"-rtl"),"rtl"===B),d);return o.createElement("div",n()({className:T,style:i},x),t)};P.Item=O,P.Separator=x;var C=P;t.a=C},212:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return s}));var r=a(174);function n(e){return Object(r.a)({url:"/getUploadImage",method:"POST",data:e})}function c(e){return Object(r.a)({url:"/addTeacherUpload",method:"POST",data:e})}function s(e){return Object(r.a)({url:"/getUploadList",method:"GET",params:e})}},346:function(e,t,a){},359:function(e,t,a){"use strict";a.r(t);a(173);var r=a(172),n=(a(178),a(182)),c=a(20),s=a.n(c),i=a(39),l=a(8),o=a(13),d=a(0),u=(a(346),a(212)),p=a(183);function m(e){var t,a,c=e.history,m=Object(d.useState)({}),v=Object(l.a)(m,2),b=v[0],f=v[1];Object(d.useEffect)((function(){return h(),function(){}}),[]);var h=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.c)();case 2:t=e.sent,a=t.code,r=t.data,200===a&&f(null===r||void 0===r?void 0:r.teacherUploadList);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"Paperlist",children:[Object(o.jsx)(n.a,{separator:Object(o.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:Object(o.jsxs)(n.a.Item,{style:{cursor:"pointer",color:"#222"},children:[Object(o.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u8bd5\u5377\u5217\u8868"]})}),Object(o.jsxs)("div",{className:"content_warp",children:[Object(o.jsxs)("div",{className:"top_box",children:[Object(o.jsx)("div",{className:"left_text",children:"\u6211\u4e0a\u4f20\u7684\u8bd5\u5377\u5217\u8868"}),Object(o.jsxs)(r.a,{type:"primary",className:"updateBtn",onClick:function(){c.push("/main/uploadpaper")},children:[Object(o.jsx)("span",{children:"+"})," \u4e0a\u4f20\u8bd5\u5377"]})]}),Object(o.jsxs)("div",{className:"body",children:[Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("div",{className:"name",children:"\u540d\u79f0"}),Object(o.jsx)("div",{className:"uptime",children:"\u4e0a\u4f20\u65f6\u95f4"}),Object(o.jsx)("div",{className:"Review",children:"\u5ba1\u6838\u72b6\u6001"})]}),0==(null===b||void 0===b||null===(t=b.data)||void 0===t?void 0:t.length)?Object(o.jsx)("div",{className:"lists",children:Object(o.jsx)("img",{className:"listNoData",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_list_nodata.png",alt:"paper_list_nodata"})}):Object(o.jsx)("div",{className:"datalist",children:null===b||void 0===b||null===(a=b.data)||void 0===a?void 0:a.map((function(e){return Object(o.jsxs)("div",{className:"items",children:[Object(o.jsx)("div",{className:"name",children:null===e||void 0===e?void 0:e.paper_name}),Object(o.jsx)("div",{className:"uptime",children:Object(p.e)(1e3*(null===e||void 0===e?void 0:e.add_time))}),1==(null===e||void 0===e?void 0:e.status)?Object(o.jsx)("div",{className:"Review",children:"\u5f85\u5ba1\u6838"}):2==(null===e||void 0===e?void 0:e.status)?Object(o.jsx)("div",{className:"Review",children:"\u5df2\u7ecf\u901a\u8fc7"}):Object(o.jsx)("div",{className:"Reviews",children:"\u672a\u901a\u8fc7"})]},null===e||void 0===e?void 0:e.upload_id)}))})]})]})]})}t.default=Object(d.memo)(m)}}]);