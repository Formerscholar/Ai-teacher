(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[24],{151:function(e,t,n){"use strict";n(105),n(164),n(190),n(189)},152:function(e,t,n){"use strict";var c=n(2),a=n(3),r=n(4),i=n(0),s=n(6),o=n.n(s),l=n(67),u=n(160),d=n(199),b=n(27),m=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},h=function(e){var t,n,a=e.prefixCls,r=e.separator,s=void 0===r?"/":r,o=e.children,l=e.overlay,h=e.dropdownProps,j=m(e,["prefixCls","separator","children","overlay","dropdownProps"]),p=(0,i.useContext(b.b).getPrefixCls)("breadcrumb",a);return t="href"in j?i.createElement("a",Object(c.a)({className:"".concat(p,"-link")},j),o):i.createElement("span",Object(c.a)({className:"".concat(p,"-link")},j),o),n=t,t=l?i.createElement(d.a,Object(c.a)({overlay:l,placement:"bottomCenter"},h),i.createElement("span",{className:"".concat(p,"-overlay-link")},n,i.createElement(u.a,null))):n,o?i.createElement("span",null,t,s&&""!==s&&i.createElement("span",{className:"".concat(p,"-separator")},s)):null};h.__ANT_BREADCRUMB_ITEM=!0;var j=h,p=function(e){var t=e.children,n=(0,i.useContext(b.b).getPrefixCls)("breadcrumb");return i.createElement("span",{className:"".concat(n,"-separator")},t||"/")};p.__ANT_BREADCRUMB_SEPARATOR=!0;var f=p,v=n(197),O=n(65),x=n(33),y=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n};function g(e,t,n,c){var a=n.indexOf(e)===n.length-1,r=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return a?i.createElement("span",null,r):i.createElement("a",{href:"#/".concat(c.join("/"))},r)}var _=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},N=function(e){var t,n=e.prefixCls,s=e.separator,u=void 0===s?"/":s,d=e.style,m=e.className,h=e.routes,p=e.children,f=e.itemRender,N=void 0===f?g:f,w=e.params,E=void 0===w?{}:w,C=y(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),S=i.useContext(b.b),k=S.getPrefixCls,R=S.direction,B=k("breadcrumb",n);if(h&&h.length>0){var P=[];t=h.map((function(e){var t,n=_(e.path,E);return n&&P.push(n),e.children&&e.children.length&&(t=i.createElement(v.a,null,e.children.map((function(e){return i.createElement(v.a.Item,{key:e.path||e.breadcrumbName},N(e,E,h,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,c=Object(r.a)(e),a=_(t,n);return a&&c.push(a),c}(P,e.path,E)))})))),i.createElement(j,{overlay:t,separator:u,key:n||e.breadcrumbName},N(e,E,h,P))}))}else p&&(t=Object(l.a)(p).map((function(e,t){return e?(Object(O.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(x.a)(e,{separator:u,key:t})):e})));var T=o()(B,Object(a.a)({},"".concat(B,"-rtl"),"rtl"===R),m);return i.createElement("div",Object(c.a)({className:T,style:d},C),t)};N.Item=j,N.Separator=f;var w=N;t.a=w},155:function(e,t,n){"use strict";n(161);var c=n(163),a=n(13),r=n(0);n(156);function i(e){var t=e.children,n=e.isOpen,r=void 0!==n&&n,i=e.closeClick,s=e.title,o=void 0===s?"":s,l=e.width,u=void 0===l?"41.71rem":l,d=e.height,b=void 0===d?"23.5rem":d,m=b.split("rem")[0]-4.64;return Object(a.jsx)(c.a,{className:"T_modelbox",title:o,visible:r,onCancel:i,footer:null,centered:!0,width:u,height:b,bodyStyle:{height:m+"rem"},closeIcon:Object(a.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(r.memo)(i)},156:function(e,t,n){},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(73);var a=n(44),r=n(74);function i(e,t){return Object(c.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,a=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(c=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);c=!0);}catch(o){a=!0,r=o}finally{try{c||null==s.return||s.return()}finally{if(a)throw r}}return n}}(e,t)||Object(a.a)(e,t)||Object(r.a)()}var s=n(0);function o(e,t){var n=t||{},c=n.defaultValue,a=n.value,r=n.onChange,o=n.postState,l=i(s.useState((function(){return void 0!==a?a:void 0!==c?"function"===typeof c?c():c:"function"===typeof e?e():e})),2),u=l[0],d=l[1],b=void 0!==a?a:u;o&&(b=o(b));var m=s.useRef(!0);return s.useEffect((function(){m.current?m.current=!1:void 0===a&&d(a)}),[a]),[b,function(e){d(e),b!==e&&r&&r(e,b)}]}},160:function(e,t,n){"use strict";var c=n(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},r=n(8),i=function(e,t){return c.createElement(r.a,Object.assign({},e,{ref:t,icon:a}))};i.displayName="DownOutlined";t.a=c.forwardRef(i)},164:function(e,t,n){},225:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var c=n(146);function a(e){return Object(c.a)({url:"/getSchoolResourcesList",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/schoolResourcesToMe",method:"GET",params:e})}function i(e){return Object(c.a)({url:"/getBasedDir",method:"GET",params:e})}},406:function(e,t,n){},757:function(e,t,n){"use strict";n.r(t);n(185);var c=n(188),a=(n(144),n(143)),r=(n(151),n(152)),i=(n(148),n(66)),s=n(20),o=n.n(s),l=n(32),u=n(5),d=n(13),b=n(0),m=(n(406),n(225)),h=n(145),j=n(155),p=n(168);function f(e){var t=e.history;console.log(t);var n=Object(h.g)(t.location.search).id,s=Object(b.useState)(""),f=Object(u.a)(s,2),v=(f[0],f[1],Object(b.useState)("")),O=Object(u.a)(v,2),x=(O[0],O[1],Object(b.useState)(1)),y=Object(u.a)(x,2),g=(y[0],y[1],Object(b.useState)([])),_=Object(u.a)(g,2),N=_[0],w=_[1],E=Object(b.useState)(!1),C=Object(u.a)(E,2),S=C[0],k=C[1],R=Object(b.useState)(0),B=Object(u.a)(R,2),P=B[0],T=B[1],A=Object(b.useState)([]),I=Object(u.a)(A,2),M=I[0],D=I[1],G=Object(b.useState)(!1),U=Object(u.a)(G,2),V=U[0],z=U[1],F=Object(b.useState)(""),J=Object(u.a)(F,2),L=J[0],q=J[1];Object(b.useEffect)((function(){return H(),function(){}}),[]);var H=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)({parent_id:n});case 2:t=e.sent,c=t.code,a=t.data,t.msg,200===c&&w(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.c)({based_id:t});case 2:n=e.sent,c=n.code,a=n.msg,200===c?i.b.success(a):i.b.error(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{id:"Famous",children:[Object(d.jsxs)(r.a,{separator:Object(d.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(d.jsxs)(r.a.Item,{onClick:function(e){e.preventDefault(),t.push("/index")},style:{cursor:"pointer",color:"#222"},children:[Object(d.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(d.jsx)(r.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u540d\u6821\u8d44\u6e90"}),Object(d.jsx)(r.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:decodeURI(Object(h.g)(t.location.search).title)})]}),Object(d.jsxs)("div",{className:"content-warp",children:[Object(d.jsxs)("div",{className:"top_box",children:[Object(d.jsx)("span",{className:"name",children:"\u6587\u4ef6\u5939\u5217\u8868"}),Object(d.jsx)(a.a,{variant:"contained",className:"btn",onClick:function(){t.goBack()},children:"\u8fd4\u56de"})]}),Object(d.jsx)("div",{className:"body_box",children:Object(d.jsx)("div",{className:"lists",children:null===N||void 0===N?void 0:N.map((function(e){var n,c;return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsxs)("div",{className:"left_box",children:[Object(d.jsx)("img",{className:"paper_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png",alt:"paper_icon"}),Object(d.jsxs)("div",{className:"info_box",children:[Object(d.jsx)("div",{className:"title",onClick:function(){return n=null===e||void 0===e?void 0:e.id,void t.push("/famous/detail?id=".concat(n));var n},children:null===e||void 0===e?void 0:e.title}),Object(d.jsxs)("div",{className:"bot_info",children:[Object(d.jsx)("img",{className:"time_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/time_icon.png",alt:"time_icon"}),Object(d.jsxs)("span",{className:"time_text",children:["\u7ec4\u5377\u65f6\u95f4\uff1a",Object(h.f)(1e3*(null===e||void 0===e?void 0:e.add_time))]}),(null===e||void 0===e||null===(n=e.get_based_category)||void 0===n?void 0:n.name)?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"View_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View_icon.png",alt:"View_icon"}),Object(d.jsxs)("span",{className:"view_text",children:["\u8bd5\u5377\u5206\u7c7b\uff1a",null===e||void 0===e||null===(c=e.get_based_category)||void 0===c?void 0:c.name]})]}):""]})]})]}),Object(d.jsxs)("div",{className:"right_btn",children:[Object(d.jsxs)("div",{className:"download_box",onClick:function(){return function(e,t){var n=[e,t];q(p.f+e),D(n),k(!0)}(null===e||void 0===e?void 0:e.pdf1,null===e||void 0===e?void 0:e.pdf2)},children:[Object(d.jsx)("img",{className:"download_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon_write.png",alt:"download_icon"}),Object(d.jsx)("span",{className:"text",children:"\u4e0b\u8f7d"})]}),Object(d.jsx)("div",{className:"Synchronize",onClick:function(){return K(null===e||void 0===e?void 0:e.id)},children:"\u540c\u6b65\u6211\u7684\u8bd5\u5377"})]})]},null===e||void 0===e?void 0:e.id)}))})})]}),Object(d.jsx)(j.a,{isOpen:S,title:"\u3010\u4e0b\u8f7d\u3011",closeClick:function(){k(!1)},width:"41.71rem",height:"23.5rem",children:Object(d.jsxs)("div",{id:"tmodelbox",children:[Object(d.jsx)("div",{className:"title",children:"\u8bd5\u5377\u7c7b\u578b\u9009\u62e9"}),Object(d.jsxs)(c.a.Group,{className:"radioGroup",onChange:function(e){var t=e.target.value;T(t),M[t]?(q(p.f+M[t]),z(!1)):z(!0)},value:P,children:[Object(d.jsxs)(c.a,{value:1,children:["\u6559\u5e08\u7528\u5377 ",Object(d.jsx)("i",{children:"\uff08\u542b\u7b54\u6848\u548c\u89e3\u6790\uff09"})]}),Object(d.jsxs)(c.a,{value:0,children:["\u5b66\u751f\u7528\u5377",Object(d.jsx)("i",{children:"\uff08\u4e0d\u542b\u7b54\u6848\u548c\u89e3\u6790\uff09"})]})]}),Object(d.jsx)(a.a,{type:"primary",className:"btn",onClick:function(){V?i.b.error("\u6682\u65e0\u6b64\u8bd5\u5377!"):window.open(L),T(""),k(!1)},children:"\u786e\u5b9a"})]})})]})}t.default=Object(b.memo)(f)}}]);