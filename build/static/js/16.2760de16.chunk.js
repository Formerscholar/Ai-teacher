(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[16],{185:function(e,t,n){"use strict";n(110),n(192),n(203),n(202)},186:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(10),i=n.n(r),s=n(189),l=n.n(s),o=n(0),u=n(4),d=n.n(u),m=n(65),b=n(193),p=n.n(b),j=n(205),h=n(28),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},O=function(e){var t,n,a=e.prefixCls,r=e.separator,i=void 0===r?"/":r,s=e.children,l=e.overlay,u=e.dropdownProps,d=v(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=(0,o.useContext(h.b).getPrefixCls)("breadcrumb",a);return t="href"in d?o.createElement("a",c()({className:"".concat(m,"-link")},d),s):o.createElement("span",c()({className:"".concat(m,"-link")},d),s),n=t,t=l?o.createElement(j.a,c()({overlay:l,placement:"bottomCenter"},u),o.createElement("span",{className:"".concat(m,"-overlay-link")},n,o.createElement(p.a,null))):n,s?o.createElement("span",null,t,i&&""!==i&&o.createElement("span",{className:"".concat(m,"-separator")},i)):null};O.__ANT_BREADCRUMB_ITEM=!0;var f=O,g=function(e){var t=e.children,n=(0,o.useContext(h.b).getPrefixCls)("breadcrumb");return o.createElement("span",{className:"".concat(n,"-separator")},t||"/")};g.__ANT_BREADCRUMB_SEPARATOR=!0;var x=g,y=n(204),_=n(64),N=n(35),w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n};function E(e,t,n,a){var c=n.indexOf(e)===n.length-1,r=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return c?o.createElement("span",null,r):o.createElement("a",{href:"#/".concat(a.join("/"))},r)}var C=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},S=function(e){var t,n=e.prefixCls,a=e.separator,r=void 0===a?"/":a,s=e.style,u=e.className,b=e.routes,p=e.children,j=e.itemRender,v=void 0===j?E:j,O=e.params,g=void 0===O?{}:O,x=w(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),S=o.useContext(h.b),k=S.getPrefixCls,R=S.direction,B=k("breadcrumb",n);if(b&&b.length>0){var I=[];t=b.map((function(e){var t,n=C(e.path,g);return n&&I.push(n),e.children&&e.children.length&&(t=o.createElement(y.a,null,e.children.map((function(e){return o.createElement(y.a.Item,{key:e.path||e.breadcrumbName},v(e,g,b,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=l()(e),c=C(t,n);return c&&a.push(c),a}(I,e.path,g)))})))),o.createElement(f,{overlay:t,separator:r,key:n||e.breadcrumbName},v(e,g,b,I))}))}else p&&(t=Object(m.a)(p).map((function(e,t){return e?(Object(_.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(N.a)(e,{separator:r,key:t})):e})));var P=d()(B,i()({},"".concat(B,"-rtl"),"rtl"===R),u);return o.createElement("div",c()({className:P,style:s},x),t)};S.Item=f,S.Separator=x;var k=S;t.a=k},192:function(e,t,n){},200:function(e,t,n){"use strict";var a=n(9),c=n(0),r=(n(201),n(67)),i=n(37);function s(e){var t=e.volumeTopicslist,n=e.props.history;return Object(a.jsxs)("div",{id:"AI_floatBox",onClick:function(){n.push("/main/mypaper")},children:[Object(a.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(a.jsxs)("span",{className:"count",children:[Object(a.jsx)("em",{children:null===t||void 0===t?void 0:t.length}),"/40"]}),Object(a.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"}),Object(a.jsx)("img",{className:"arrow_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon.png",alt:"arrow_icon"})]})}t.a=Object(r.b)((function(e){return{volumeTopicslist:e.volumeTopicslist}}),(function(e){return{addtopicData:function(t){var n={type:i.a,value:t};e(n)},subtopicData:function(t){var n={type:i.d,value:t};e(n)}}}))(Object(c.memo)(s))},201:function(e,t,n){},215:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i}));var a=n(188);function c(e){return Object(a.a)({url:"/getSchoolBasedList",method:"GET",params:e})}function r(e){return Object(a.a)({url:"/getSchoolBasedDetail",method:"GET",params:e})}function i(e){return Object(a.a)({url:"/teamAcademicReport",method:"GET",params:e})}},434:function(e,t,n){},456:function(e,t,n){"use strict";n.r(t);n(210);var a=n(213),c=(n(184),n(183)),r=(n(273),n(282)),i=(n(223),n(225)),s=(n(185),n(186)),l=n(194),o=n.n(l),u=(n(197),n(70)),d=n(280),m=n(195),b=n(196),p=(n(281),n(276)),j=n(9),h=n(0),v=(n(434),n(190)),O=n(215),f=n(67),g=n(37),x=n(200),y=p.a.RangePicker;function _(e){var t,n,l,p,f,g=e.history,_=e.homeInfo,N=Object(h.useState)(0),w=Object(b.a)(N,2),E=w[0],C=w[1],S=Object(h.useState)({}),k=Object(b.a)(S,2),R=k[0],B=k[1],I=Object(h.useState)([]),P=Object(b.a)(I,2),T=P[0],A=P[1],D=Object(h.useState)(1),M=Object(b.a)(D,2),z=M[0],G=M[1],U=Object(h.useState)(Object(v.d)(new Date)[0]),V=Object(b.a)(U,2),q=V[0],J=V[1],L=Object(h.useState)(Object(v.d)(new Date)[1]),H=Object(b.a)(L,2),Q=H[0],X=H[1],F=Object(h.useState)(0),K=Object(b.a)(F,2),W=K[0],Y=K[1],Z=Object(h.useState)({title:{text:"\u9519\u9898\u77e5\u8bc6\u70b9\u5206\u5e03\u56fe"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:[]},series:[{name:"",type:"pie",radius:"55%",center:["40%","50%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),$=Object(b.a)(Z,2),ee=$[0],te=$[1],ne=Object(h.useRef)(null);Object(h.useEffect)((function(){return ae(),function(){}}),[]),Object(h.useEffect)((function(){window.echarts.init(ne.current).setOption(ee)}));var ae=function(){var e=Object(m.a)(o.a.mark((function e(){var t,n,a,c,r,i,s,l,m,b,p,j,h=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.length>0&&void 0!==h[0]?h[0]:E,n=h.length>1&&void 0!==h[1]?h[1]:z,a=h.length>2&&void 0!==h[2]?h[2]:q,c=h.length>3&&void 0!==h[3]?h[3]:Q,e.next=6,Object(O.c)({team_id:t,start_time:a,end_time:c,page:n});case 6:r=e.sent,i=r.code,s=r.data,l=r.msg,200===i?(B(s),b=[],p=[],j=Object(d.a)({},ee),null===s||void 0===s||null===(m=s.knowPointExercises)||void 0===m||m.map((function(e){b.push(e.title),p.push({name:e.title,value:e.count})})),j.legend.data=b,j.series[0].data=p,te(j)):u.b.error(l);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{id:"ClassReport",children:[Object(j.jsxs)(s.a,{separator:Object(j.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(j.jsxs)(s.a.Item,{onClick:function(e){e.preventDefault(),localStorage.setItem("menuIndex",0),g.push("/main/index")},style:{cursor:"pointer",color:"#222"},children:[Object(j.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(j.jsx)(s.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u73ed\u7ea7\u5b66\u60c5\u62a5\u544a"})]}),Object(j.jsxs)("div",{className:"top_warp",children:[Object(j.jsx)("div",{className:"left_name",children:null===_||void 0===_||null===(t=_.team)||void 0===t?void 0:t.map((function(e,t){var n;return Object(j.jsxs)("span",{className:t===W&&"crrunt",onClick:function(){return function(e,t){Y(t),C(e),ae(e,z,T[0],T[1])}(null===e||void 0===e?void 0:e.id,t)},children:[null===e||void 0===e||null===(n=e.get_grade)||void 0===n?void 0:n.name,null===e||void 0===e?void 0:e.name]},null===e||void 0===e?void 0:e.id)}))}),Object(j.jsxs)("div",{className:"right_timer",children:[Object(j.jsx)("div",{className:"title",children:"\u65f6\u95f4\u9009\u62e9:"}),Object(j.jsxs)(i.a.Group,{onChange:function(e){var t=e.target.value,n=new Map([["0",function(){var e=Object(v.e)(new Date,7);J(e[0]),X(e[1]),ae(E,z,e[0],e[1])}],["1",function(){var e=Object(v.e)(new Date,30);J(e[0]),X(e[1]),ae(E,z,e[0],e[1])}],["2",function(){var e=Object(v.e)(new Date,365);J(e[0]),X(e[1]),ae(E,z,e[0],e[1])}]]);n.get(t)&&n.get(t)()},defaultValue:"0",children:[Object(j.jsx)(i.a.Button,{value:"0",children:"\u8fd1\u4e00\u5468"}),Object(j.jsx)(i.a.Button,{value:"1",children:"\u8fd1\u4e00\u6708"}),Object(j.jsx)(i.a.Button,{value:"2",children:"\u8fd1\u4e00\u5e74"})]}),Object(j.jsx)(r.b,{direction:"vertical",size:12,children:Object(j.jsx)(y,{onChange:function(e,t){A(t)}})}),Object(j.jsx)(c.a,{type:"primary",className:"btnSearch",onClick:function(){J(T[0]),X(T[1]),ae(E,z,T[0],T[1])},children:"\u67e5\u8be2"})]})]}),Object(j.jsx)("div",{className:"Chars",children:Object(j.jsx)("div",{ref:ne,style:{width:"100%",height:"100%"}})}),Object(j.jsx)("div",{className:"topics",children:null===R||void 0===R||null===(n=R.userExercises)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.map((function(e,t){var n,a,r,i,s,l;return Object(j.jsxs)("div",{className:"items",children:[Object(j.jsx)("div",{className:"top_title",children:Object(j.jsxs)("div",{className:"info_class",children:[Object(j.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(j.jsx)("span",{children:null===_||void 0===_||null===(n=_.teacher)||void 0===n?void 0:n.level[null===e||void 0===e||null===(a=e.get_exercises)||void 0===a?void 0:a.level]})]}),Object(j.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(r=e.get_exercises)||void 0===r||null===(i=r.get_question_category)||void 0===i?void 0:i.title]})]})}),Object(j.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(s=e.get_exercises)||void 0===s?void 0:s.content_all}}),Object(j.jsxs)("div",{className:"bot_btns",children:[Object(j.jsx)("div",{className:"left_box_warp",children:Object(j.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(v.g)(1e3*(null===e||void 0===e||null===(l=e.get_exercises)||void 0===l?void 0:l.update_time))]})}),Object(j.jsxs)("div",{className:"right_box_warp",children:[Object(j.jsxs)("div",{className:"answers",children:[Object(j.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(j.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(j.jsxs)("div",{className:"details",onClick:function(){var t,n;return n=null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.id,localStorage.setItem("menuIndex",4),void g.push("/main/questiondetails?id=".concat(n))},children:[Object(j.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(j.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),Object(j.jsxs)(c.a,{className:"add",variant:"contained",children:[Object(j.jsx)("em",{children:"+"}),"\u7ec4\u5377"]})]})]})]},null===e||void 0===e?void 0:e.exercises_id)}))}),Object(j.jsx)("div",{className:"pages",children:Object(j.jsx)(a.a,{hideOnSinglePage:!1,total:null===R||void 0===R||null===(p=R.userExercises)||void 0===p?void 0:p.total,defaultPageSize:20,showSizeChanger:!1,showQuickJumper:!0,pageSize:(null===R||void 0===R||null===(f=R.userExercises)||void 0===f?void 0:f.per_page)||20,onChange:function(e,t){G(1*e),ae(E,1*e)},current:z})}),Object(j.jsx)(x.a,{props:e})]})}t.default=Object(f.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var n={type:g.c,value:t};e(n)}}}))(Object(h.memo)(_))}}]);