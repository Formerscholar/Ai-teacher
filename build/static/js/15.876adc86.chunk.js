(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[15],{186:function(e,t,a){"use strict";a(110),a(193),a(206),a(200)},187:function(e,t,a){"use strict";var n=a(1),c=a.n(n),s=a(10),r=a.n(s),i=a(192),l=a.n(i),o=a(0),d=a(4),u=a.n(d),m=a(65),v=a(188),b=a.n(v),j=a(205),h=a(28),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},f=function(e){var t,a,n=e.prefixCls,s=e.separator,r=void 0===s?"/":s,i=e.children,l=e.overlay,d=e.dropdownProps,u=p(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=(0,o.useContext(h.b).getPrefixCls)("breadcrumb",n);return t="href"in u?o.createElement("a",c()({className:"".concat(m,"-link")},u),i):o.createElement("span",c()({className:"".concat(m,"-link")},u),i),a=t,t=l?o.createElement(j.a,c()({overlay:l,placement:"bottomCenter"},d),o.createElement("span",{className:"".concat(m,"-overlay-link")},a,o.createElement(b.a,null))):a,i?o.createElement("span",null,t,r&&""!==r&&o.createElement("span",{className:"".concat(m,"-separator")},r)):null};f.__ANT_BREADCRUMB_ITEM=!0;var O=f,x=function(e){var t=e.children,a=(0,o.useContext(h.b).getPrefixCls)("breadcrumb");return o.createElement("span",{className:"".concat(a,"-separator")},t||"/")};x.__ANT_BREADCRUMB_SEPARATOR=!0;var _=x,y=a(204),N=a(64),g=a(35),w=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};function E(e,t,a,n){var c=a.indexOf(e)===a.length-1,s=function(e,t){if(!e.breadcrumbName)return null;var a=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),(function(e,a){return t[a]||e}))}(e,t);return c?o.createElement("span",null,s):o.createElement("a",{href:"#/".concat(n.join("/"))},s)}var P=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(a){e=e.replace(":".concat(a),t[a])})),e},C=function(e){var t,a=e.prefixCls,n=e.separator,s=void 0===n?"/":n,i=e.style,d=e.className,v=e.routes,b=e.children,j=e.itemRender,p=void 0===j?E:j,f=e.params,x=void 0===f?{}:f,_=w(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),C=o.useContext(h.b),I=C.getPrefixCls,R=C.direction,M=I("breadcrumb",a);if(v&&v.length>0){var T=[];t=v.map((function(e){var t,a=P(e.path,x);return a&&T.push(a),e.children&&e.children.length&&(t=o.createElement(y.a,null,e.children.map((function(e){return o.createElement(y.a.Item,{key:e.path||e.breadcrumbName},p(e,x,v,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,n=l()(e),c=P(t,a);return c&&n.push(c),n}(T,e.path,x)))})))),o.createElement(O,{overlay:t,separator:s,key:a||e.breadcrumbName},p(e,x,v,T))}))}else b&&(t=Object(m.a)(b).map((function(e,t){return e?(Object(N.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(g.a)(e,{separator:s,key:t})):e})));var k=u()(M,r()({},"".concat(M,"-rtl"),"rtl"===R),d);return o.createElement("div",c()({className:k,style:i},_),t)};C.Item=O,C.Separator=_;var I=C;t.a=I},188:function(e,t,a){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=(n=a(194))&&n.__esModule?n:{default:n};t.default=c,e.exports=c},193:function(e,t,a){},194:function(e,t,a){"use strict";var n=a(12),c=a(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(a(0)),r=n(a(195)),i=n(a(18)),l=function(e,t){return s.createElement(i.default,Object.assign({},e,{ref:t,icon:r.default}))};l.displayName="DownOutlined";var o=s.forwardRef(l);t.default=o},195:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},239:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s}));var n=a(185);function c(e){return Object(n.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function s(e){return Object(n.a)({url:"/getExercisesDetail",method:"GET",params:e})}},375:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t);a(184);var n=a(183),c=(a(186),a(187)),s=a(189),r=a.n(s),i=a(190),l=a(196),o=a(9),d=a(0),u=(a(375),a(239)),m=a(197),v=a(71),b=a(51);function j(e){var t,a,s,v,b,j,h,p,f,O,x,_,y=e.history,N=e.location,g=e.homeInfo,w=Object(d.useState)({}),E=Object(l.a)(w,2),P=E[0],C=E[1];Object(d.useEffect)((function(){return I(Object(m.h)(N.search).id),function(){}}),[]);var I=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)({id:t});case 2:a=e.sent,n=a.code,c=a.data,a.msg,200===n&&C(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"Questiondetails",children:[Object(o.jsxs)(c.a,{className:"bread",separator:Object(o.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(o.jsxs)(c.a.Item,{className:"breaditem",color:"textPrimary",onClick:function(e){e.preventDefault(),y.push("/main/knowledge")},children:[Object(o.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position"}),"\u77e5\u8bc6\u70b9\u7ec4\u5377"]}),Object(o.jsx)(c.a.Item,{className:"breaditem",color:"textPrimary",children:"\u8bd5\u9898\u8be6\u60c5"})]}),Object(o.jsx)("div",{className:"content_body",children:Object(o.jsxs)("div",{className:"bor_warp",children:[Object(o.jsx)("div",{className:"content_all",dangerouslySetInnerHTML:{__html:null===P||void 0===P||null===(t=P.exercise)||void 0===t?void 0:t.content_all}}),Object(o.jsxs)("div",{className:"Tests",children:[Object(o.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),"\u4e0d\u7b49\u5f0f\u7ec4\u7684\u89e3\u96c6"]}),Object(o.jsxs)("div",{className:"answer",children:[Object(o.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(o.jsx)("span",{dangerouslySetInnerHTML:{__html:null===P||void 0===P||null===(a=P.exercise)||void 0===a?void 0:a.answer}})]}),Object(o.jsxs)("div",{className:"Parse",children:[Object(o.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(o.jsx)("span",{dangerouslySetInnerHTML:{__html:null===P||void 0===P||null===(s=P.exercise)||void 0===s?void 0:s.analysis}})]}),Object(o.jsxs)("div",{className:"bot_warp",children:[Object(o.jsxs)("div",{className:"left_box",children:[Object(o.jsxs)("div",{className:"grade",children:["\u5e74\u7ea7\uff1a",null===P||void 0===P||null===(v=P.exercise)||void 0===v||null===(b=v.get_grade)||void 0===b?void 0:b.name]}),Object(o.jsxs)("div",{className:"type",children:["\u9898\u578b\uff1a",null===P||void 0===P||null===(j=P.exercise)||void 0===j||null===(h=j.get_question_category)||void 0===h?void 0:h.title]}),Object(o.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",null===g||void 0===g||null===(p=g.teacher)||void 0===p?void 0:p.level[null===P||void 0===P||null===(f=P.exercise)||void 0===f?void 0:f.level]]}),Object(o.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(m.g)(1e3*(null===P||void 0===P||null===(O=P.exercise)||void 0===O?void 0:O.update_time))]})]}),Object(o.jsx)("div",{className:"right_box",children:Object(o.jsxs)(n.a,{className:"add",variant:"contained",children:[Object(o.jsx)("span",{children:"+"}),"\u7ec4\u5377"]})})]})]})}),Object(o.jsxs)("div",{className:"samelist",children:[Object(o.jsxs)("div",{className:"top_box",children:[Object(o.jsx)("div",{className:"left_warp",children:"\u540c\u7c7b\u578b\u9898\u76ee"}),Object(o.jsxs)("div",{className:"right_warp",children:[Object(o.jsx)("img",{className:"refsh_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/refsh_icon.png",alt:"refsh_icon"})," ","\u6362\u4e00\u6279"]})]}),Object(o.jsx)("div",{className:"body_box",children:null===P||void 0===P||null===(x=P.exerciseList)||void 0===x||null===(_=x.data)||void 0===_?void 0:_.map((function(e){var t,a;return Object(o.jsxs)("div",{className:"items",children:[Object(o.jsx)("div",{className:"top_title",children:Object(o.jsxs)("div",{className:"info_class",children:[Object(o.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(o.jsx)("span",{children:null===g||void 0===g||null===(t=g.teacher)||void 0===t?void 0:t.level[null===e||void 0===e?void 0:e.level]})]}),Object(o.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(a=e.get_question_category)||void 0===a?void 0:a.title]})]})}),Object(o.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.content_all}}),Object(o.jsxs)("div",{className:"bot_btns",children:[Object(o.jsx)("div",{className:"left_box_warp",children:Object(o.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(m.g)(1e3*(null===e||void 0===e?void 0:e.update_time))]})}),Object(o.jsxs)("div",{className:"right_box_warp",children:[Object(o.jsxs)("div",{className:"answers",children:[Object(o.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(o.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(o.jsxs)("div",{className:"details",onClick:function(){return t=null===e||void 0===e?void 0:e.id,void I(t);var t},children:[Object(o.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(o.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),Object(o.jsxs)(n.a,{className:"add",variant:"contained",children:[Object(o.jsx)("span",{children:"+"}),"\u7ec4\u5377"]})]})]})]},null===e||void 0===e?void 0:e.id)}))})]})]})}t.default=Object(v.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var a={type:b.b,value:t};e(a)}}}))(Object(d.memo)(j))}}]);