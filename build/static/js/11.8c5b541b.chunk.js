(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[11],{179:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(180))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},180:function(e,t,n){"use strict";var a=n(9),r=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=a(n(181)),l=a(n(24)),s=function(e,t){return c.createElement(l.default,Object.assign({},e,{ref:t,icon:i.default}))};s.displayName="DownOutlined";var o=c.forwardRef(s);t.default=o},181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},182:function(e,t,n){"use strict";n(104),n(189),n(200),n(192)},183:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(10),i=n.n(c),l=n(177),s=n.n(l),o=n(0),d=n(6),u=n.n(d),v=n(65),m=n(179),b=n.n(m),j=n(199),p=n(30),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},h=function(e){var t,n,a=e.prefixCls,c=e.separator,i=void 0===c?"/":c,l=e.children,s=e.overlay,d=e.dropdownProps,u=f(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=(0,o.useContext(p.b).getPrefixCls)("breadcrumb",a);return t="href"in u?o.createElement("a",r()({className:"".concat(v,"-link")},u),l):o.createElement("span",r()({className:"".concat(v,"-link")},u),l),n=t,t=s?o.createElement(j.a,r()({overlay:s,placement:"bottomCenter"},d),o.createElement("span",{className:"".concat(v,"-overlay-link")},n,o.createElement(b.a,null))):n,l?o.createElement("span",null,t,i&&""!==i&&o.createElement("span",{className:"".concat(v,"-separator")},i)):null};h.__ANT_BREADCRUMB_ITEM=!0;var O=h,x=function(e){var t=e.children,n=(0,o.useContext(p.b).getPrefixCls)("breadcrumb");return o.createElement("span",{className:"".concat(n,"-separator")},t||"/")};x.__ANT_BREADCRUMB_SEPARATOR=!0;var _=x,y=n(196),g=n(66),N=n(38),E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function w(e,t,n,a){var r=n.indexOf(e)===n.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return r?o.createElement("span",null,c):o.createElement("a",{href:"#/".concat(a.join("/"))},c)}var T=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},C=function(e){var t,n=e.prefixCls,a=e.separator,c=void 0===a?"/":a,l=e.style,d=e.className,m=e.routes,b=e.children,j=e.itemRender,f=void 0===j?w:j,h=e.params,x=void 0===h?{}:h,_=E(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),C=o.useContext(p.b),P=C.getPrefixCls,R=C.direction,k=P("breadcrumb",n);if(m&&m.length>0){var A=[];t=m.map((function(e){var t,n=T(e.path,x);return n&&A.push(n),e.children&&e.children.length&&(t=o.createElement(y.a,null,e.children.map((function(e){return o.createElement(y.a.Item,{key:e.path||e.breadcrumbName},f(e,x,m,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=s()(e),r=T(t,n);return r&&a.push(r),a}(A,e.path,x)))})))),o.createElement(O,{overlay:t,separator:c,key:n||e.breadcrumbName},f(e,x,m,A))}))}else b&&(t=Object(v.a)(b).map((function(e,t){return e?(Object(g.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(N.a)(e,{separator:c,key:t})):e})));var S=u()(k,i()({},"".concat(k,"-rtl"),"rtl"===R),d);return o.createElement("div",r()({className:S,style:l},_),t)};C.Item=O,C.Separator=_;var P=C;t.a=P},189:function(e,t,n){},194:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return o}));var a=n(175);function r(){return Object(a.a)({url:"/getTeamList",method:"GET"})}function c(e){return Object(a.a)({url:"/getTeamDetail",method:"GET",params:e})}function i(e){return Object(a.a)({url:"/delTeamTeacher",method:"POST",data:e})}function l(e){return Object(a.a)({url:"/delTeamStudent",method:"POST",data:e})}function s(){return Object(a.a)({url:"/getAddTeam",method:"GET"})}function o(e){return Object(a.a)({url:"/addTeam",method:"POST",data:e})}},336:function(e,t,n){},345:function(e,t,n){"use strict";n.r(t);n(211);var a=n(210),r=(n(182),n(183)),c=(n(185),n(71)),i=n(20),l=n.n(i),s=n(39),o=n(8),d=n(13),u=n(0),v=(n(336),n(194)),m=n(176),b=n(70),j=n(53);function p(e){var t,n,i,b,j,p=e.location,f=e.history,h=e.homeInfo,O=Object(u.useState)({}),x=Object(o.a)(O,2),_=x[0],y=x[1];Object(u.useEffect)((function(){return g(),function(){}}),[]);var g=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)({team_id:Object(m.f)(p.search).id});case 2:t=e.sent,n=t.code,a=t.data,t.msg,200==n&&y(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(l.a.mark((function e(t,n){var a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)({team_id:t,teacher_id:n});case 2:a=e.sent,r=a.code,i=a.msg,200===r?c.b.success(i):c.b.error(i),g();case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(l.a.mark((function e(t,n){var a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.b)({team_id:t,student_id:n});case 2:a=e.sent,r=a.code,i=a.msg,200===r?c.b.success(i):c.b.error(i),g();case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{id:"ClassDetails",children:[Object(d.jsxs)(r.a,{separator:Object(d.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(d.jsxs)(r.a.Item,{onClick:function(e){e.preventDefault(),f.push("/main/class")},style:{cursor:"pointer",color:"#222"},children:[Object(d.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u73ed\u7ea7\u4fe1\u606f"]}),Object(d.jsxs)(r.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:[null===_||void 0===_||null===(t=_.team)||void 0===t||null===(n=t.get_grade)||void 0===n?void 0:n.name,null===_||void 0===_||null===(i=_.team)||void 0===i?void 0:i.name]})]}),Object(d.jsxs)("div",{className:"teacher_list",children:[Object(d.jsxs)("div",{className:"title_text",children:[Object(d.jsx)("span",{children:"\u8001\u5e08\u59d3\u540d"}),Object(d.jsx)("span",{children:"\u79d1\u76ee"}),Object(d.jsx)("span",{children:"\u6700\u540e\u767b\u5f55\u65f6\u95f4"}),Object(d.jsx)("span",{children:"\u64cd\u4f5c"})]}),Object(d.jsx)("div",{className:"teacher_items",children:null===_||void 0===_||null===(b=_.teamTeacher)||void 0===b?void 0:b.map((function(e){var t,n,r,c,i;return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsxs)("div",{className:"name_box flex_box",children:[Object(d.jsx)(a.a,{className:"Avatar",alt:"avatar",src:null===e||void 0===e?void 0:e.avatar_file}),Object(d.jsxs)("span",{children:[null===e||void 0===e?void 0:e.true_name,"\u8001\u5e08"]})]}),Object(d.jsx)("div",{className:"subject_box flex_box",children:Object(d.jsx)("span",{children:null===e||void 0===e||null===(t=e.get_subject)||void 0===t?void 0:t.title})}),Object(d.jsx)("div",{className:"lasttime_box flex_box",children:Object(d.jsx)("span",{children:Object(m.e)(1e3*(null===e||void 0===e?void 0:e.last_login_time))})}),Object(d.jsx)("div",{className:"operate_box flex_box",children:(null===_||void 0===_||null===(n=_.team)||void 0===n?void 0:n.teacher_id)!==(null===e||void 0===e?void 0:e.id)&&(null===_||void 0===_||null===(r=_.team)||void 0===r?void 0:r.teacher_id)===(null===h||void 0===h||null===(c=h.teacher)||void 0===c?void 0:c.id)&&0===(null===_||void 0===_||null===(i=_.team)||void 0===i?void 0:i.is_active)?Object(d.jsx)("span",{onClick:function(){var t;return N(null===_||void 0===_||null===(t=_.team)||void 0===t?void 0:t.id,null===e||void 0===e?void 0:e.id)},children:"\u79fb\u9664"}):Object(d.jsx)("span",{children:"-"})})]},null===e||void 0===e?void 0:e.id)}))})]}),Object(d.jsxs)("div",{className:"student_list",children:[Object(d.jsxs)("div",{className:"title_text",children:[Object(d.jsx)("span",{children:"\u5b66\u751f\u59d3\u540d"}),Object(d.jsx)("span",{children:"\u5df2\u6536\u96c6\u9519\u9898\u6570"}),Object(d.jsx)("span",{children:"\u66f4\u65b0\u9519\u9898\u65f6\u95f4"}),Object(d.jsx)("span",{children:"\u64cd\u4f5c"})]}),Object(d.jsx)("div",{className:"teacher_items",children:null===_||void 0===_||null===(j=_.teamStudent)||void 0===j?void 0:j.map((function(e){var t,n;return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsxs)("div",{className:"name_box flex_box",children:[Object(d.jsx)(a.a,{className:"Avatar",alt:"avatar",src:null===e||void 0===e?void 0:e.avatar_file}),Object(d.jsx)("span",{children:null===e||void 0===e?void 0:e.true_name}),1===(null===e||void 0===e?void 0:e.is_vip)?Object(d.jsx)("img",{className:"vip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/vip.png",alt:"vip"}):Object(d.jsx)(d.Fragment,{})]}),Object(d.jsx)("div",{className:"subject_box flex_box",children:Object(d.jsx)("span",{children:null===e||void 0===e?void 0:e.errorCount})}),Object(d.jsx)("div",{className:"lasttime_box flex_box",children:Object(d.jsx)("span",{children:Object(m.e)(1e3*(null===e||void 0===e?void 0:e.last_add_exercises_time)||(new Date).getTime())})}),Object(d.jsxs)("div",{className:"operate_box flex_box",children:[Object(d.jsx)("span",{children:"\u5b66\u60c5\u62a5\u544a"}),(null===_||void 0===_||null===(t=_.team)||void 0===t?void 0:t.teacher_id)!==(null===e||void 0===e?void 0:e.id)&&0===(null===_||void 0===_||null===(n=_.team)||void 0===n?void 0:n.is_active)?Object(d.jsx)("span",{onClick:function(){var t;return E(null===_||void 0===_||null===(t=_.team)||void 0===t?void 0:t.id,null===e||void 0===e?void 0:e.user_id)},children:"\u79fb\u9664"}):Object(d.jsx)("span",{children:"-"})]})]},null===e||void 0===e?void 0:e.id)}))})]})]})}t.default=Object(b.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var n={type:j.b,value:t};e(n)}}}))(Object(u.memo)(p))}}]);