(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[24],{191:function(e,t,n){"use strict";n.d(t,"p",(function(){return i})),n.d(t,"o",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"q",(function(){return b})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"j",(function(){return h})),n.d(t,"m",(function(){return f})),n.d(t,"t",(function(){return O})),n.d(t,"i",(function(){return x})),n.d(t,"h",(function(){return g})),n.d(t,"f",(function(){return y})),n.d(t,"k",(function(){return w})),n.d(t,"l",(function(){return _})),n.d(t,"n",(function(){return N}));var c=n(189),a=n(190),r=n.n(a);function i(e){return Object(c.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function s(e){return Object(c.a)({url:"/getExercisesDetail",method:"GET",params:e})}function o(e){return Object(c.a)({url:"/addExamBasket",method:"POST",data:r.a.stringify(e)})}function u(e){return Object(c.a)({url:"/delExamBasket",method:"POST",data:r.a.stringify(e)})}function l(e){return Object(c.a)({url:"/basketDetail",method:"GET",params:e})}function d(e){return Object(c.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(c.a)({url:"/clearExamBasket",method:"GET"})}function b(e){return Object(c.a)({url:"/getPapersExercises",method:"GET",params:e})}function v(e){return Object(c.a)({url:"/getPapersList",method:"GET",params:e})}function p(e){return Object(c.a)({url:"/paperToBased",method:"POST",data:r.a.stringify(e)})}function m(e){return Object(c.a)({url:"/addPapers",method:"POST",data:r.a.stringify(e)})}function h(e){return Object(c.a)({url:"/editPapers",method:"POST",data:r.a.stringify(e)})}function f(e){return Object(c.a)({url:"/getDetailPapers",method:"GET",params:e})}function O(e){return Object(c.a)({url:"/paperToBasket",method:"GET",params:e})}function x(e){return Object(c.a)({url:"/editBasketSort",method:"GET",params:e})}function g(e){return Object(c.a)({url:"/editBasketScore",method:"GET",params:e})}function y(e){return Object(c.a)({url:"/delTeacherExam",method:"GET",params:e})}function w(e){return Object(c.a)({url:"/editTypeBasketSort",method:"GET",params:e})}function _(e){return Object(c.a)({url:"/getChapterExercises",method:"GET",params:e})}function N(e){return Object(c.a)({url:"/getExerciseAnswer",method:"GET",params:e})}},197:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return r}))},208:function(e,t,n){"use strict";n(185);var c=n(184),a=n(187),r=n.n(a),i=(n(192),n(64)),s=n(188),o=n(183),u=n(7),l=n(0),d=(n(209),n(65)),j=n(29),b=n(191);function v(e){var t,n=e.volumeTopicCount,a=e.props,d=e.settopicData,j=a.history,v=Object(l.useState)({}),p=Object(o.a)(v,2),m=p[0],h=p[1];Object(l.useEffect)((function(){return O(),function(){}}),[n]);var f=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)();case 2:t=e.sent,n=t.code,c=t.msg,200===n?(i.b.success(c),O()):i.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,c,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)();case 2:t=e.sent,n=t.code,c=t.data,200==n&&(h(c),a=null===c||void 0===c?void 0:c.basketCount,d(a));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){j.push("/mypaper")},g=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,c,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(b.g)({type:t});case 3:n=e.sent,c=n.code,a=n.msg,200===c?(O(),i.b.success(a)):i.b.error(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"AI_floatBox",children:[Object(u.jsxs)("div",{className:"top_float_warp",onClick:x,children:[Object(u.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(u.jsxs)("span",{className:"count",children:[Object(u.jsx)("em",{children:n}),"/40"]}),Object(u.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(u.jsx)("img",{className:"arrow_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon"}),Object(u.jsxs)("div",{className:"unfold",children:[Object(u.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(u.jsx)("span",{children:null===m||void 0===m?void 0:m.basketCount}),"\uff09"]}),Object(u.jsx)("div",{className:"typeList",children:null===m||void 0===m||null===(t=m.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(u.jsxs)("div",{className:"numdel",children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(u.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return g(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(u.jsx)("div",{className:"empty",onClick:f,children:"\u6e05\u7a7a\u8bd5\u9898"}),Object(u.jsx)(c.a,{type:"primary",className:"preview",block:!0,onClick:x,children:"\u8bd5\u5377\u9884\u89c8"})]})]})}t.a=Object(d.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var n={type:j.a,value:t};e(n)},subtopicData:function(t){var n={type:j.e,value:t};e(n)},settopicData:function(t){var n={type:j.d,value:t};e(n)}}}))(Object(l.memo)(v))},209:function(e,t,n){},226:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i}));var c=n(189);function a(e){return Object(c.a)({url:"/getSchoolBasedList",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/getSchoolBasedDetail",method:"GET",params:e})}function i(e){return Object(c.a)({url:"/teamAcademicReport",method:"GET",params:e})}},415:function(e,t,n){},489:function(e,t,n){"use strict";n.r(t);n(235);var c=n(237),a=(n(185),n(184)),r=(n(279),n(288)),i=(n(219),n(220)),s=(n(195),n(196)),o=n(187),u=n.n(o),l=(n(192),n(64)),d=n(197),j=n(188),b=n(183),v=(n(287),n(281)),p=n(7),m=n(0),h=(n(415),n(193)),f=n(226),O=n(191),x=n(65),g=n(29),y=n(208),w=n(248),_=n.n(w),N=v.a.RangePicker;function k(e){var t,n,o,v,x,g=e.history,w=e.homeInfo,k=e.addtopicData,E=e.subtopicData,T=e.volumeTopicCount,S=Object(m.useState)(0),D=Object(b.a)(S,2),C=D[0],P=D[1],G=Object(m.useState)({}),B=Object(b.a)(G,2),I=B[0],L=B[1],M=Object(m.useState)(Object(h.d)(new Date,7)),z=Object(b.a)(M,2),R=z[0],q=z[1],H=Object(m.useState)(1),V=Object(b.a)(H,2),Y=V[0],A=V[1],J=Object(m.useState)(Object(h.d)(new Date,7)[0]),K=Object(b.a)(J,2),Q=K[0],X=K[1],F=Object(m.useState)(Object(h.d)(new Date,7)[1]),U=Object(b.a)(F,2),W=U[0],Z=U[1],$=Object(m.useState)(0),ee=Object(b.a)($,2),te=ee[0],ne=ee[1],ce=Object(m.useState)({title:{text:"\u9519\u9898\u77e5\u8bc6\u70b9\u5206\u5e03\u56fe"},tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:[]},series:[{name:"",type:"pie",radius:"55%",center:["40%","50%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),ae=Object(b.a)(ce,2),re=ae[0],ie=ae[1],se=Object(m.useRef)(null);Object(m.useEffect)((function(){return oe(C,Y,Q,W),function(){}}),[T]),Object(m.useEffect)((function(){window.echarts.init(se.current).setOption(re)}));var oe=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,c,a,r,i,s,o,j,b,v,p,m,h,O=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.length>0&&void 0!==O[0]?O[0]:C,n=O.length>1&&void 0!==O[1]?O[1]:Y,c=O.length>2&&void 0!==O[2]?O[2]:Q,a=O.length>3&&void 0!==O[3]?O[3]:W,e.next=6,Object(f.c)({team_id:t,start_time:c,end_time:a,page:n});case 6:r=e.sent,i=r.code,s=r.data,o=r.msg,200===i?(null===s||void 0===s||null===(j=s.userExercises)||void 0===j||null===(b=j.data)||void 0===b||b.map((function(e){e.isanswer=!1})),L(s),p=[],m=[],h=Object(d.a)({},re),null===s||void 0===s||null===(v=s.knowPointExercises)||void 0===v||v.map((function(e){p.push(e.title),m.push({name:e.title,value:e.count})})),h.legend.data=p,h.series[0].data=m,ie(h)):l.b.error(o);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(j.a)(u.a.mark((function e(t,n){var c,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)({exercises_id:[t]});case 2:c=e.sent,a=c.code,r=c.msg,200==a?(l.b.success(r),k(1)):l.b.error(r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)({exercises_id:t});case 2:n=e.sent,c=n.code,a=n.msg,200==c?(l.b.success(a),E(1)):l.b.error(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{id:"ClassReport",children:[Object(p.jsxs)(s.a,{separator:Object(p.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(p.jsxs)(s.a.Item,{onClick:function(e){e.preventDefault(),g.push("/index")},style:{cursor:"pointer",color:"#222"},children:[Object(p.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(p.jsx)(s.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u73ed\u7ea7\u5b66\u60c5\u62a5\u544a"})]}),Object(p.jsxs)("div",{className:"top_warp",children:[Object(p.jsx)("div",{className:"left_name",children:null===I||void 0===I||null===(t=I.teams)||void 0===t?void 0:t.map((function(e,t){var n;return Object(p.jsxs)("span",{className:t===te&&"crrunt",onClick:function(){return function(e,t){ne(t),P(e),oe(e,Y,R[0],R[1])}(null===e||void 0===e?void 0:e.id,t)},children:[null===e||void 0===e||null===(n=e.get_grade)||void 0===n?void 0:n.name,null===e||void 0===e?void 0:e.name]},null===e||void 0===e?void 0:e.id)}))}),Object(p.jsxs)("div",{className:"right_timer",children:[Object(p.jsx)("div",{className:"title",children:"\u65f6\u95f4\u9009\u62e9:"}),Object(p.jsxs)(i.a.Group,{onChange:function(e){var t=e.target.value,n=new Map([["0",function(){var e=Object(h.d)(new Date,7);q(e),X(e[0]),Z(e[1]),oe(C,Y,e[0],e[1])}],["1",function(){var e=Object(h.d)(new Date,30);q(e),X(e[0]),Z(e[1]),oe(C,Y,e[0],e[1])}],["2",function(){var e=Object(h.d)(new Date,365);q(e),X(e[0]),Z(e[1]),oe(C,Y,e[0],e[1])}]]);n.get(t)&&n.get(t)()},defaultValue:"0",children:[Object(p.jsx)(i.a.Button,{value:"0",children:"\u8fd1\u4e00\u5468"}),Object(p.jsx)(i.a.Button,{value:"1",children:"\u8fd1\u4e00\u6708"}),Object(p.jsx)(i.a.Button,{value:"2",children:"\u8fd1\u4e00\u5e74"})]}),Object(p.jsx)(r.b,{direction:"vertical",size:12,children:Object(p.jsx)(N,{format:"YYYY-MM-DD",value:[_()(Q),_()(W)],onChange:function(e,t){q(t),X(t[0]),Z(t[1])}})}),Object(p.jsx)(a.a,{type:"primary",className:"btnSearch",onClick:function(){X(R[0]),Z(R[1]),oe(C,Y,R[0],R[1])},children:"\u67e5\u8be2"})]})]}),Object(p.jsx)("div",{className:"Chars",children:Object(p.jsx)("div",{ref:se,style:{width:"100%",height:"100%"}})}),Object(p.jsx)("div",{className:"topics",children:null===I||void 0===I||null===(n=I.userExercises)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.map((function(e,t){var n,c,r,i,s,o,u,l,j;return Object(p.jsxs)("div",{className:"items",children:[Object(p.jsx)("div",{className:"top_title",children:Object(p.jsxs)("div",{className:"info_class",children:[Object(p.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(p.jsx)("span",{children:null===w||void 0===w||null===(n=w.teacher)||void 0===n?void 0:n.level[null===e||void 0===e||null===(c=e.get_exercises)||void 0===c?void 0:c.level]})]}),Object(p.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(r=e.get_exercises)||void 0===r||null===(i=r.get_question_category)||void 0===i?void 0:i.title]})]})}),Object(p.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(s=e.get_exercises)||void 0===s?void 0:s.content_all}}),Object(p.jsxs)("div",{className:"answerbox",style:{display:(null===e||void 0===e?void 0:e.isanswer)?"block":"none"},children:[Object(p.jsxs)("div",{className:"Tests",children:[Object(p.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(p.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(o=e.get_exercises)||void 0===o?void 0:o.knowName}})]}),Object(p.jsxs)("div",{className:"answer",children:[Object(p.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(p.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(u=e.get_exercises)||void 0===u?void 0:u.answer}})]}),Object(p.jsxs)("div",{className:"Parse",children:[Object(p.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(p.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(l=e.get_exercises)||void 0===l?void 0:l.analysis}})]})]}),Object(p.jsxs)("div",{className:"bot_btns",children:[Object(p.jsx)("div",{className:"left_box_warp",children:Object(p.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(h.f)(1e3*(null===e||void 0===e||null===(j=e.get_exercises)||void 0===j?void 0:j.update_time))]})}),Object(p.jsxs)("div",{className:"right_box_warp",children:[Object(p.jsxs)("div",{className:"answers",onClick:function(){return function(e){var t=Object(d.a)({},I);t.userExercises.data[e].isanswer=!t.userExercises.data[e].isanswer,L(t)}(t)},children:[Object(p.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(p.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(p.jsxs)("div",{className:"details",onClick:function(){var t,n;return n=null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.id,void window.open("/question/details?id=".concat(n))},children:[Object(p.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(p.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),(null===e||void 0===e?void 0:e.is_basket)?Object(p.jsx)(a.a,{className:"sub",size:"small",variant:"contained",onClick:function(){return le(null===e||void 0===e?void 0:e.exercises_id)},children:"- \u79fb\u9664"}):Object(p.jsx)(a.a,{className:"add",variant:"contained",size:"small",onClick:function(){var t;return ue(null===e||void 0===e?void 0:e.exercises_id,null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.type)},children:"+ \u7ec4\u5377"})]})]})]},null===e||void 0===e?void 0:e.exercises_id)}))}),Object(p.jsx)("div",{className:"pages",children:Object(p.jsx)(c.a,{hideOnSinglePage:!1,total:null===I||void 0===I||null===(v=I.userExercises)||void 0===v?void 0:v.total,defaultPageSize:20,showSizeChanger:!1,showQuickJumper:!0,pageSize:(null===I||void 0===I||null===(x=I.userExercises)||void 0===x?void 0:x.per_page)||20,onChange:function(e,t){A(1*e),oe(C,1*e)},current:Y})}),Object(p.jsx)(y.a,{props:e})]})}t.default=Object(x.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setData:function(t){var n={type:g.c,value:t};e(n)},addtopicData:function(t){var n={type:g.a,value:t};e(n)},subtopicData:function(t){var n={type:g.e,value:t};e(n)},settopicData:function(t){var n={type:g.d,value:t};e(n)}}}))(Object(m.memo)(k))}}]);