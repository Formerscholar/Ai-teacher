(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[16],{185:function(e,t,n){"use strict";n(203);var c=n(204),a=n(9),i=n(0);n(186);function s(e){var t=e.children,n=e.isOpen,i=void 0!==n&&n,s=e.closeClick,r=e.title,o=void 0===r?"":r,l=e.width,u=void 0===l?"41.71rem":l,d=e.height,j=void 0===d?"23.5rem":d,b=j.split("rem")[0]-4.64;return Object(a.jsx)(c.a,{className:"T_modelbox",title:o,visible:i,onCancel:s,footer:null,centered:!0,width:u,height:j,bodyStyle:{height:b+"rem"},closeIcon:Object(a.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(i.memo)(s)},186:function(e,t,n){},187:function(e,t,n){"use strict";n.d(t,"k",(function(){return s})),n.d(t,"j",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"l",(function(){return b})),n.d(t,"m",(function(){return h})),n.d(t,"n",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"i",(function(){return f})),n.d(t,"o",(function(){return p})),n.d(t,"h",(function(){return O})),n.d(t,"g",(function(){return x}));var c=n(190),a=n(192),i=n.n(a);function s(e){return Object(c.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/getExercisesDetail",method:"GET",params:e})}function o(e){return Object(c.a)({url:"/addExamBasket",method:"POST",data:i.a.stringify(e)})}function l(e){return Object(c.a)({url:"/delExamBasket",method:"POST",data:i.a.stringify(e)})}function u(e){return Object(c.a)({url:"/basketDetail",method:"GET",params:e})}function d(e){return Object(c.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(c.a)({url:"/clearExamBasket",method:"GET"})}function b(e){return Object(c.a)({url:"/getPapersExercises",method:"GET",params:e})}function h(e){return Object(c.a)({url:"/getPapersList",method:"GET",params:e})}function m(e){return Object(c.a)({url:"/paperToBased",method:"POST",data:i.a.stringify(e)})}function v(e){return Object(c.a)({url:"/addPapers",method:"POST",data:i.a.stringify(e)})}function f(e){return Object(c.a)({url:"/editPapers",method:"POST",data:i.a.stringify(e)})}function p(e){return Object(c.a)({url:"/paperToBasket",method:"GET",params:e})}function O(e){return Object(c.a)({url:"/editBasketSort",method:"GET",params:e})}function x(e){return Object(c.a)({url:"/editBasketScore",method:"GET",params:e})}},205:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return i}))},206:function(e,t,n){"use strict";var c=n(188),a=n.n(c),i=(n(195),n(64)),s=n(189),r=n(193),o=n(9),l=n(0),u=(n(207),n(65)),d=n(29),j=n(187);function b(e){var t,n=e.volumeTopicCount,c=e.props,u=e.settopicData,d=c.history,b=Object(l.useState)({}),h=Object(r.a)(b,2),m=h[0],v=h[1];Object(l.useEffect)((function(){return p(),function(){}}),[n]);var f=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)();case 2:t=e.sent,n=t.code,c=t.msg,200===n?(i.b.success(c),p()):i.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)();case 2:t=e.sent,n=t.code,c=t.data,200==n&&(v(c),i=null===c||void 0===c?void 0:c.basketCount,u(i));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(j.f)({type:t});case 3:n=e.sent,c=n.code,s=n.msg,200===c?(p(),i.b.success(s)):i.b.error(s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"AI_floatBox",children:[Object(o.jsxs)("div",{className:"top_float_warp",onClick:function(){d.push("/main/mypaper")},children:[Object(o.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(o.jsxs)("span",{className:"count",children:[Object(o.jsx)("em",{children:n}),"/40"]}),Object(o.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(o.jsx)("img",{className:"arrow_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon"}),Object(o.jsxs)("div",{className:"unfold",children:[Object(o.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(o.jsx)("span",{children:null===m||void 0===m?void 0:m.basketCount}),"\uff09"]}),Object(o.jsx)("div",{className:"typeList",children:null===m||void 0===m||null===(t=m.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(o.jsxs)("div",{className:"items",children:[Object(o.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(o.jsxs)("div",{className:"numdel",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(o.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return O(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(o.jsx)("div",{className:"empty",onClick:f,children:"\u6e05\u7a7a\u8bd5\u9898"})]})]})}t.a=Object(u.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var n={type:d.a,value:t};e(n)},subtopicData:function(t){var n={type:d.e,value:t};e(n)},settopicData:function(t){var n={type:d.d,value:t};e(n)}}}))(Object(l.memo)(b))},207:function(e,t,n){},213:function(e,t,n){"use strict";var c=n(12),a=n(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),s=c(n(214)),r=c(n(18)),o=function(e,t){return i.createElement(r.default,Object.assign({},e,{ref:t,icon:s.default}))};o.displayName="SearchOutlined";var l=i.forwardRef(o);t.default=l},214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},215:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"g",(function(){return j}));var c=n(190),a=n(192),i=n.n(a);function s(){return Object(c.a)({url:"/getTeamList",method:"GET"})}function r(e){return Object(c.a)({url:"/getTeamDetail",method:"GET",params:e})}function o(e){return Object(c.a)({url:"/delTeamTeacher",method:"POST",data:i.a.stringify(e)})}function l(e){return Object(c.a)({url:"/delTeamStudent",method:"POST",data:i.a.stringify(e)})}function u(){return Object(c.a)({url:"/getAddTeam",method:"GET"})}function d(e){return Object(c.a)({url:"/addTeam",method:"POST",data:i.a.stringify(e)})}function j(e){return Object(c.a)({url:"/studentAcademicReport",method:"GET",params:e})}},220:function(e,t,n){"use strict";var c;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(c=n(213))&&c.__esModule?c:{default:c};t.default=a,e.exports=a},426:function(e,t,n){},453:function(e,t,n){"use strict";n.r(t);n(217);var c=n(219),a=(n(194),n(191)),i=(n(249),n(256)),s=(n(223),n(226)),r=(n(200),n(201)),o=n(188),l=n.n(o),u=(n(195),n(64)),d=n(205),j=n(189),b=n(193),h=(n(255),n(250)),m=n(9),v=n(0),f=(n(426),n(196)),p=n(215),O=n(187),x=n(65),g=n(29),y=n(206),_=n(185),w=n(231),N=n.n(w),k=h.a.RangePicker;function T(e){var t,n,o,h,x=e.location,g=e.history,w=e.homeInfo,T=e.addtopicData,S=e.subtopicData,C=e.volumeTopicCount,E=Object(f.h)(x.search).id,P=Object(f.h)(x.search).iid,D=decodeURI(Object(f.h)(x.search).name),G=Object(v.useState)({}),B=Object(b.a)(G,2),I=B[0],M=B[1],L=Object(v.useState)([]),R=Object(b.a)(L,2),z=R[0],H=R[1],V=Object(v.useState)(1),Y=Object(b.a)(V,2),q=Y[0],A=Y[1],J=Object(v.useState)(Object(f.d)(new Date)[0]),K=Object(b.a)(J,2),Q=K[0],U=K[1],X=Object(v.useState)(Object(f.d)(new Date)[1]),F=Object(b.a)(X,2),W=F[0],Z=F[1],$=Object(v.useState)({title:{text:"\u9519\u9898\u77e5\u8bc6\u70b9\u5206\u5e03\u56fe"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:[]},series:[{name:"",type:"pie",radius:"55%",center:["40%","50%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),ee=Object(b.a)($,2),te=ee[0],ne=ee[1],ce=Object(v.useState)(!1),ae=Object(b.a)(ce,2),ie=ae[0],se=ae[1],re=Object(v.useState)(""),oe=Object(b.a)(re,2),le=oe[0],ue=oe[1],de=Object(v.useRef)(null);Object(v.useEffect)((function(){return be(q,Q,W),function(){}}),[C]),Object(v.useEffect)((function(){window.echarts.init(de.current).setOption(te)}));var je=function(){se(!1)},be=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,c,a,i,s,r,o,j,b,h,m,v,f=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.length>0&&void 0!==f[0]?f[0]:q,n=f.length>1&&void 0!==f[1]?f[1]:Q,c=f.length>2&&void 0!==f[2]?f[2]:W,e.next=5,Object(p.g)({student_id:E,start_time:n,end_time:c,page:t});case 5:a=e.sent,i=a.code,s=a.data,r=a.msg,200===i?(null===s||void 0===s||null===(o=s.userExercises)||void 0===o||null===(j=o.data)||void 0===j||j.map((function(e){e.isanswer=!1})),M(s),h=[],m=[],v=Object(d.a)({},te),null===s||void 0===s||null===(b=s.knowPointExercises)||void 0===b||b.map((function(e){h.push(e.title),m.push({name:e.title,value:e.count})})),v.legend.data=h,v.series[0].data=m,ne(v)):u.b.error(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var c,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)({exercises_id:[t]});case 2:c=e.sent,a=c.code,i=c.msg,200==a?(u.b.success(i),T(1)):(ue(i),se(!0));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),me=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)({exercises_id:t});case 2:n=e.sent,c=n.code,a=n.msg,200==c?(u.b.success(a),S(1)):(ue(a),se(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{id:"StudyReport",children:[Object(m.jsxs)(r.a,{separator:Object(m.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(m.jsxs)(r.a.Item,{onClick:function(e){e.preventDefault(),g.push("/main/index")},style:{cursor:"pointer",color:"#222"},children:[Object(m.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(m.jsx)(r.a.Item,{onClick:function(e){e.preventDefault(),g.push("/main/class")},className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u73ed\u7ea7\u4fe1\u606f"}),Object(m.jsx)(r.a.Item,{onClick:function(e){e.preventDefault(),g.push("/main/classdetail?id=".concat(P))},className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u4e03\u5e74\u7ea7\u4e00\u73ed"}),Object(m.jsxs)(r.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:[D,"\u7684\u5b66\u60c5\u62a5\u544a"]})]}),Object(m.jsxs)("div",{className:"top_warp",children:[Object(m.jsx)("div",{className:"left_name",children:D}),Object(m.jsxs)("div",{className:"right_timer",children:[Object(m.jsx)("div",{className:"title",children:"\u65f6\u95f4\u9009\u62e9:"}),Object(m.jsxs)(s.a.Group,{onChange:function(e){var t=e.target.value,n=new Map([["0",function(){var e=Object(f.e)(new Date,7);U(e[0]),Z(e[1]),be(q,e[0],e[1])}],["1",function(){var e=Object(f.e)(new Date,30);U(e[0]),Z(e[1]),be(q,e[0],e[1])}],["2",function(){var e=Object(f.e)(new Date,365);U(e[0]),Z(e[1]),be(q,e[0],e[1])}]]);n.get(t)&&n.get(t)()},defaultValue:"0",children:[Object(m.jsx)(s.a.Button,{value:"0",children:"\u8fd1\u4e00\u5468"}),Object(m.jsx)(s.a.Button,{value:"1",children:"\u8fd1\u4e00\u6708"}),Object(m.jsx)(s.a.Button,{value:"2",children:"\u8fd1\u4e00\u5e74"})]}),Object(m.jsx)(i.b,{direction:"vertical",size:12,children:Object(m.jsx)(k,{format:"YYYY-MM-DD",value:[N()(Q),N()(W)],onChange:function(e,t){H(t),U(t[0]),Z(t[1])}})}),Object(m.jsx)(a.a,{type:"primary",className:"btnSearch",onClick:function(){U(z[0]),Z(z[1]),be(q,z[0],z[1])},children:"\u67e5\u8be2"})]})]}),Object(m.jsx)("div",{className:"Chars",children:Object(m.jsx)("div",{ref:de,style:{width:"100%",height:"100%"}})}),Object(m.jsx)("div",{className:"topics",children:null===I||void 0===I||null===(t=I.userExercises)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.map((function(e,t){var n,c,i,s,r,o,l,u,j;return Object(m.jsxs)("div",{className:"items",children:[Object(m.jsx)("div",{className:"top_title",children:Object(m.jsxs)("div",{className:"info_class",children:[Object(m.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(m.jsx)("span",{children:null===w||void 0===w||null===(n=w.teacher)||void 0===n?void 0:n.level[null===e||void 0===e||null===(c=e.get_exercises)||void 0===c?void 0:c.level]})]}),Object(m.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(i=e.get_exercises)||void 0===i||null===(s=i.get_question_category)||void 0===s?void 0:s.title]})]})}),Object(m.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(r=e.get_exercises)||void 0===r?void 0:r.content_all}}),Object(m.jsxs)("div",{className:"answerbox",style:{display:(null===e||void 0===e?void 0:e.isanswer)?"block":"none"},children:[Object(m.jsxs)("div",{className:"Tests",children:[Object(m.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(m.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(o=e.get_exercises)||void 0===o?void 0:o.knowledge}})]}),Object(m.jsxs)("div",{className:"answer",children:[Object(m.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(m.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(l=e.get_exercises)||void 0===l?void 0:l.answer}})]}),Object(m.jsxs)("div",{className:"Parse",children:[Object(m.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(m.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(u=e.get_exercises)||void 0===u?void 0:u.analysis}})]})]}),Object(m.jsxs)("div",{className:"bot_btns",children:[Object(m.jsx)("div",{className:"left_box_warp",children:Object(m.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(f.g)(1e3*(null===e||void 0===e||null===(j=e.get_exercises)||void 0===j?void 0:j.update_time))]})}),Object(m.jsxs)("div",{className:"right_box_warp",children:[Object(m.jsxs)("div",{className:"answers",onClick:function(){return function(e){var t=Object(d.a)({},I);t.userExercises.data[e].isanswer=!t.userExercises.data[e].isanswer,M(t)}(t)},children:[Object(m.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(m.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(m.jsxs)("div",{className:"details",onClick:function(){var t;return function(e){g.push("/main/questiondetails?id=".concat(e))}(null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.id)},children:[Object(m.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(m.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),(null===e||void 0===e?void 0:e.is_basket)?Object(m.jsxs)(a.a,{className:"sub",variant:"contained",onClick:function(){return me(null===e||void 0===e?void 0:e.exercises_id)},children:[Object(m.jsx)("em",{children:"-"}),"\u79fb\u9664"]}):Object(m.jsxs)(a.a,{className:"add",variant:"contained",onClick:function(){var t;return he(null===e||void 0===e?void 0:e.exercises_id,null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.type)},children:[Object(m.jsx)("em",{children:"+"}),"\u7ec4\u5377"]})]})]})]},null===e||void 0===e?void 0:e.exercises_id)}))}),Object(m.jsx)("div",{className:"pages",children:Object(m.jsx)(c.a,{hideOnSinglePage:!1,total:null===I||void 0===I||null===(o=I.userExercises)||void 0===o?void 0:o.total,defaultPageSize:20,showSizeChanger:!1,showQuickJumper:!0,pageSize:(null===I||void 0===I||null===(h=I.userExercises)||void 0===h?void 0:h.per_page)||20,onChange:function(e,t){A(1*e),be(1*e)},current:q})}),Object(m.jsx)(y.a,{props:e}),Object(m.jsx)(_.a,{isOpen:ie,title:" ",closeClick:je,width:"41.71rem",height:"22.14rem",children:Object(m.jsxs)("div",{id:"tmodelbox",children:[Object(m.jsxs)("div",{className:"title",children:[Object(m.jsx)("img",{className:"notice",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/notice.png",alt:"notice"}),Object(m.jsx)("span",{children:"\u64cd\u4f5c\u5931\u8d25"})]}),Object(m.jsx)("div",{className:"body_text",children:le}),Object(m.jsx)(a.a,{type:"primary",className:"btn",onClick:je,children:"\u6211\u77e5\u9053\u4e86"})]})})]})}t.default=Object(x.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setData:function(t){var n={type:g.c,value:t};e(n)},addtopicData:function(t){var n={type:g.a,value:t};e(n)},subtopicData:function(t){var n={type:g.e,value:t};e(n)},settopicData:function(t){var n={type:g.d,value:t};e(n)}}}))(Object(v.memo)(T))}}]);