(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[15],{189:function(e,t,n){"use strict";n(110),n(195),n(201),n(200)},190:function(e,t,n){"use strict";var r=n(1),a=n.n(r),c=n(9),s=n.n(c),i=n(187),l=n.n(i),o=n(0),u=n(4),d=n.n(u),m=n(65),p=n(196),h=n.n(p),b=n(205),v=n(28),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},j=function(e){var t,n,r=e.prefixCls,c=e.separator,s=void 0===c?"/":c,i=e.children,l=e.overlay,u=e.dropdownProps,d=f(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=(0,o.useContext(v.b).getPrefixCls)("breadcrumb",r);return t="href"in d?o.createElement("a",a()({className:"".concat(m,"-link")},d),i):o.createElement("span",a()({className:"".concat(m,"-link")},d),i),n=t,t=l?o.createElement(b.a,a()({overlay:l,placement:"bottomCenter"},u),o.createElement("span",{className:"".concat(m,"-overlay-link")},n,o.createElement(h.a,null))):n,i?o.createElement("span",null,t,s&&""!==s&&o.createElement("span",{className:"".concat(m,"-separator")},s)):null};j.__ANT_BREADCRUMB_ITEM=!0;var O=j,x=function(e){var t=e.children,n=(0,o.useContext(v.b).getPrefixCls)("breadcrumb");return o.createElement("span",{className:"".concat(n,"-separator")},t||"/")};x.__ANT_BREADCRUMB_SEPARATOR=!0;var y=x,g=n(204),_=n(64),N=n(35),E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function w(e,t,n,r){var a=n.indexOf(e)===n.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return a?o.createElement("span",null,c):o.createElement("a",{href:"#/".concat(r.join("/"))},c)}var C=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},R=function(e){var t,n=e.prefixCls,r=e.separator,c=void 0===r?"/":r,i=e.style,u=e.className,p=e.routes,h=e.children,b=e.itemRender,f=void 0===b?w:b,j=e.params,x=void 0===j?{}:j,y=E(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),R=o.useContext(v.b),P=R.getPrefixCls,B=R.direction,I=P("breadcrumb",n);if(p&&p.length>0){var k=[];t=p.map((function(e){var t,n=C(e.path,x);return n&&k.push(n),e.children&&e.children.length&&(t=o.createElement(g.a,null,e.children.map((function(e){return o.createElement(g.a.Item,{key:e.path||e.breadcrumbName},f(e,x,p,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=l()(e),a=C(t,n);return a&&r.push(a),r}(k,e.path,x)))})))),o.createElement(O,{overlay:t,separator:c,key:n||e.breadcrumbName},f(e,x,p,k))}))}else h&&(t=Object(m.a)(h).map((function(e,t){return e?(Object(_.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(N.a)(e,{separator:c,key:t})):e})));var A=d()(I,s()({},"".concat(I,"-rtl"),"rtl"===B),u);return o.createElement("div",a()({className:A,style:i},y),t)};R.Item=O,R.Separator=y;var P=R;t.a=P},195:function(e,t,n){},196:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(202))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},202:function(e,t,n){"use strict";var r=n(12),a=n(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),s=r(n(203)),i=r(n(18)),l=function(e,t){return c.createElement(i.default,Object.assign({},e,{ref:t,icon:s.default}))};l.displayName="DownOutlined";var o=c.forwardRef(l);t.default=o},203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},215:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s}));var r=n(185);function a(e){return Object(r.a)({url:"/getSchoolBasedList",method:"GET",params:e})}function c(e){return Object(r.a)({url:"/getSchoolBasedDetail",method:"GET",params:e})}function s(e){return Object(r.a)({url:"/teamAcademicReport",method:"GET",params:e})}},366:function(e,t,n){},411:function(e,t,n){"use strict";n.r(t);n(184);var r=n(183),a=(n(189),n(190)),c=n(191),s=n.n(c),i=(n(197),n(68)),l=n(192),o=n(194),u=n(10),d=n(0),m=(n(366),n(215)),p=n(193),h=n(70),b=n(51);function v(e){var t,n,c=Object(d.useState)({}),h=Object(o.a)(c,2),b=h[0],v=h[1],f=e.history,j=e.location,O=e.homeInfo;Object(d.useEffect)((function(){return x(),function(){}}),[]);var x=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)({id:Object(p.h)(j.search).id});case 2:t=e.sent,n=t.code,r=t.data,200===n&&(0===r.examsExercises.length?(i.b.error("\u672c\u8bd5\u5377\u65e0\u6570\u636e!"),f.go(-1)):v(r));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"Schoolbaseddetail",children:[Object(u.jsxs)(a.a,{separator:Object(u.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(u.jsxs)(a.a.Item,{style:{cursor:"pointer",color:"#222"},onClick:function(e){e.preventDefault(),f.push("/main/schoolbased")},children:[Object(u.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u6821\u672c\u8bd5\u5377"]}),Object(u.jsx)(a.a.Item,{style:{cursor:"pointer",color:"#222"},children:"\u8bd5\u5377\u8be6\u60c5"}),Object(u.jsx)(a.a.Item,{style:{cursor:"pointer",color:"#222"},children:null===b||void 0===b||null===(t=b.based)||void 0===t?void 0:t.title})]}),Object(u.jsx)("div",{className:"paperList",children:null===b||void 0===b||null===(n=b.examsExercises)||void 0===n?void 0:n.map((function(e){var t,n,a,c,s,i;return Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("div",{className:"top_title",children:Object(u.jsxs)("div",{className:"info_class",children:[Object(u.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(u.jsx)("span",{children:null===O||void 0===O||null===(t=O.teacher)||void 0===t?void 0:t.level[null===e||void 0===e||null===(n=e.get_exercises)||void 0===n?void 0:n.level]})]}),Object(u.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(a=e.get_exercises)||void 0===a||null===(c=a.get_question_category)||void 0===c?void 0:c.title]})]})}),Object(u.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(s=e.get_exercises)||void 0===s?void 0:s.content_all}}),Object(u.jsxs)("div",{className:"bot_btns",children:[Object(u.jsx)("div",{className:"left_box_warp",children:Object(u.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(p.g)(1e3*(null===e||void 0===e||null===(i=e.get_exercises)||void 0===i?void 0:i.update_time))]})}),Object(u.jsxs)("div",{className:"right_box_warp",children:[Object(u.jsxs)("div",{className:"answers",children:[Object(u.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(u.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(u.jsxs)("div",{className:"details",onClick:function(){var t,n;return n=null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.id,void f.push("/main/questiondetails?id=".concat(n))},children:[Object(u.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(u.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),Object(u.jsxs)(r.a,{className:"add",variant:"contained",children:[Object(u.jsx)("span",{children:"+"}),"\u7ec4\u5377"]})]})]})]},null===e||void 0===e?void 0:e.id)}))})]})}t.default=Object(h.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setClass:function(t){var n={type:b.a,value:t};e(n)}}}))(Object(d.memo)(v))}}]);