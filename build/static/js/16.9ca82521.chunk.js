(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[16],{187:function(e,t,n){"use strict";n(205);var c=n(206),a=n(9),i=n(0);n(188);function s(e){var t=e.children,n=e.isOpen,i=void 0!==n&&n,s=e.closeClick,r=e.title,o=void 0===r?"":r,l=e.width,u=void 0===l?"41.71rem":l,d=e.height,j=void 0===d?"23.5rem":d,b=j.split("rem")[0]-4.64;return Object(a.jsx)(c.a,{className:"T_modelbox",title:o,visible:i,onCancel:s,footer:null,centered:!0,width:u,height:j,bodyStyle:{height:b+"rem"},closeIcon:Object(a.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(i.memo)(s)},188:function(e,t,n){},189:function(e,t,n){"use strict";n.d(t,"m",(function(){return s})),n.d(t,"l",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"n",(function(){return b})),n.d(t,"o",(function(){return v})),n.d(t,"p",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"j",(function(){return p})),n.d(t,"q",(function(){return f})),n.d(t,"i",(function(){return O})),n.d(t,"h",(function(){return x})),n.d(t,"f",(function(){return g})),n.d(t,"k",(function(){return y}));var c=n(195),a=n(192),i=n.n(a);function s(e){return Object(c.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/getExercisesDetail",method:"GET",params:e})}function o(e){return Object(c.a)({url:"/addExamBasket",method:"POST",data:i.a.stringify(e)})}function l(e){return Object(c.a)({url:"/delExamBasket",method:"POST",data:i.a.stringify(e)})}function u(e){return Object(c.a)({url:"/basketDetail",method:"GET",params:e})}function d(e){return Object(c.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(c.a)({url:"/clearExamBasket",method:"GET"})}function b(e){return Object(c.a)({url:"/getPapersExercises",method:"GET",params:e})}function v(e){return Object(c.a)({url:"/getPapersList",method:"GET",params:e})}function m(e){return Object(c.a)({url:"/paperToBased",method:"POST",data:i.a.stringify(e)})}function h(e){return Object(c.a)({url:"/addPapers",method:"POST",data:i.a.stringify(e)})}function p(e){return Object(c.a)({url:"/editPapers",method:"POST",data:i.a.stringify(e)})}function f(e){return Object(c.a)({url:"/paperToBasket",method:"GET",params:e})}function O(e){return Object(c.a)({url:"/editBasketSort",method:"GET",params:e})}function x(e){return Object(c.a)({url:"/editBasketScore",method:"GET",params:e})}function g(e){return Object(c.a)({url:"/delTeacherExam",method:"GET",params:e})}function y(e){return Object(c.a)({url:"/editTypeBasketSort",method:"GET",params:e})}},203:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return i}))},207:function(e,t,n){"use strict";n(186);var c=n(185),a=n(190),i=n.n(a),s=(n(194),n(64)),r=n(191),o=n(193),l=n(9),u=n(0),d=(n(208),n(65)),j=n(29),b=n(189);function v(e){var t,n=e.volumeTopicCount,a=e.props,d=e.settopicData,j=a.history,v=Object(u.useState)({}),m=Object(o.a)(v,2),h=m[0],p=m[1];Object(u.useEffect)((function(){return O(),function(){}}),[n]);var f=function(){var e=Object(r.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)();case 2:t=e.sent,n=t.code,c=t.msg,200===n?(s.b.success(c),O()):s.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(r.a)(i.a.mark((function e(){var t,n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)();case 2:t=e.sent,n=t.code,c=t.data,200==n&&(p(c),a=null===c||void 0===c?void 0:c.basketCount,d(a));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){j.push("/main/mypaper")},g=function(){var e=Object(r.a)(i.a.mark((function e(t){var n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(b.g)({type:t});case 3:n=e.sent,c=n.code,a=n.msg,200===c?(O(),s.b.success(a)):s.b.error(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"AI_floatBox",children:[Object(l.jsxs)("div",{className:"top_float_warp",onClick:x,children:[Object(l.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(l.jsxs)("span",{className:"count",children:[Object(l.jsx)("em",{children:n}),"/40"]}),Object(l.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(l.jsx)("img",{className:"arrow_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon"}),Object(l.jsxs)("div",{className:"unfold",children:[Object(l.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(l.jsx)("span",{children:null===h||void 0===h?void 0:h.basketCount}),"\uff09"]}),Object(l.jsx)("div",{className:"typeList",children:null===h||void 0===h||null===(t=h.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)("div",{className:"items",children:[Object(l.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(l.jsxs)("div",{className:"numdel",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(l.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return g(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(l.jsx)("div",{className:"empty",onClick:f,children:"\u6e05\u7a7a\u8bd5\u9898"}),Object(l.jsx)(c.a,{type:"primary",className:"preview",block:!0,onClick:x,children:"\u8bd5\u5377\u9884\u89c8"})]})]})}t.a=Object(d.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var n={type:j.a,value:t};e(n)},subtopicData:function(t){var n={type:j.e,value:t};e(n)},settopicData:function(t){var n={type:j.d,value:t};e(n)}}}))(Object(u.memo)(v))},208:function(e,t,n){},213:function(e,t,n){"use strict";var c=n(12),a=n(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),s=c(n(214)),r=c(n(18)),o=function(e,t){return i.createElement(r.default,Object.assign({},e,{ref:t,icon:s.default}))};o.displayName="SearchOutlined";var l=i.forwardRef(o);t.default=l},214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},223:function(e,t,n){"use strict";var c;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(c=n(213))&&c.__esModule?c:{default:c};t.default=a,e.exports=a},228:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s}));var c=n(195);function a(e){return Object(c.a)({url:"/getSchoolBasedList",method:"GET",params:e})}function i(e){return Object(c.a)({url:"/getSchoolBasedDetail",method:"GET",params:e})}function s(e){return Object(c.a)({url:"/teamAcademicReport",method:"GET",params:e})}},434:function(e,t,n){},457:function(e,t,n){"use strict";n.r(t);n(219);var c=n(222),a=(n(186),n(185)),i=(n(272),n(279)),s=(n(216),n(217)),r=(n(199),n(200)),o=n(190),l=n.n(o),u=(n(194),n(64)),d=n(203),j=n(191),b=n(193),v=(n(278),n(273)),m=n(9),h=n(0),p=(n(434),n(198)),f=n(228),O=n(189),x=n(65),g=n(29),y=n(207),_=n(187),w=n(237),N=n.n(w),k=v.a.RangePicker;function T(e){var t,n,o,v,x,g=e.history,w=e.homeInfo,T=e.addtopicData,C=e.subtopicData,E=e.volumeTopicCount,S=Object(h.useState)(0),D=Object(b.a)(S,2),P=D[0],B=D[1],G=Object(h.useState)({}),M=Object(b.a)(G,2),I=M[0],L=M[1],z=Object(h.useState)(Object(p.d)(new Date)),R=Object(b.a)(z,2),q=R[0],H=R[1],V=Object(h.useState)(1),Y=Object(b.a)(V,2),J=Y[0],A=Y[1],K=Object(h.useState)(Object(p.d)(new Date)[0]),Q=Object(b.a)(K,2),X=Q[0],F=Q[1],U=Object(h.useState)(Object(p.d)(new Date)[1]),W=Object(b.a)(U,2),Z=W[0],$=W[1],ee=Object(h.useState)(0),te=Object(b.a)(ee,2),ne=te[0],ce=te[1],ae=Object(h.useState)({title:{text:"\u9519\u9898\u77e5\u8bc6\u70b9\u5206\u5e03\u56fe"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:[]},series:[{name:"",type:"pie",radius:"55%",center:["40%","50%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),ie=Object(b.a)(ae,2),se=ie[0],re=ie[1],oe=Object(h.useState)(!1),le=Object(b.a)(oe,2),ue=le[0],de=le[1],je=Object(h.useState)(""),be=Object(b.a)(je,2),ve=be[0],me=be[1],he=Object(h.useRef)(null);Object(h.useEffect)((function(){return fe(P,J,X,Z),function(){}}),[E]),Object(h.useEffect)((function(){window.echarts.init(he.current).setOption(se)}));var pe=function(){de(!1)},fe=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,c,a,i,s,r,o,j,b,v,m,h,p,O=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.length>0&&void 0!==O[0]?O[0]:P,n=O.length>1&&void 0!==O[1]?O[1]:J,c=O.length>2&&void 0!==O[2]?O[2]:X,a=O.length>3&&void 0!==O[3]?O[3]:Z,e.next=6,Object(f.c)({team_id:t,start_time:c,end_time:a,page:n});case 6:i=e.sent,s=i.code,r=i.data,o=i.msg,200===s?(null===r||void 0===r||null===(j=r.userExercises)||void 0===j||null===(b=j.data)||void 0===b||b.map((function(e){e.isanswer=!1})),L(r),m=[],h=[],p=Object(d.a)({},se),null===r||void 0===r||null===(v=r.knowPointExercises)||void 0===v||v.map((function(e){m.push(e.title),h.push({name:e.title,value:e.count})})),p.legend.data=m,p.series[0].data=h,re(p)):u.b.error(o);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var c,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)({exercises_id:[t]});case 2:c=e.sent,a=c.code,i=c.msg,200==a?(u.b.success(i),T(1)):(me(i),de(!0));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),xe=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)({exercises_id:t});case 2:n=e.sent,c=n.code,a=n.msg,200==c?(u.b.success(a),C(1)):(me(a),de(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{id:"ClassReport",children:[Object(m.jsxs)(r.a,{separator:Object(m.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(m.jsxs)(r.a.Item,{onClick:function(e){e.preventDefault(),g.push("/main/index")},style:{cursor:"pointer",color:"#222"},children:[Object(m.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(m.jsx)(r.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u73ed\u7ea7\u5b66\u60c5\u62a5\u544a"})]}),Object(m.jsxs)("div",{className:"top_warp",children:[Object(m.jsx)("div",{className:"left_name",children:null===I||void 0===I||null===(t=I.teams)||void 0===t?void 0:t.map((function(e,t){var n;return Object(m.jsxs)("span",{className:t===ne&&"crrunt",onClick:function(){return function(e,t){ce(t),B(e),fe(e,J,q[0],q[1])}(null===e||void 0===e?void 0:e.id,t)},children:[null===e||void 0===e||null===(n=e.get_grade)||void 0===n?void 0:n.name,null===e||void 0===e?void 0:e.name]},null===e||void 0===e?void 0:e.id)}))}),Object(m.jsxs)("div",{className:"right_timer",children:[Object(m.jsx)("div",{className:"title",children:"\u65f6\u95f4\u9009\u62e9:"}),Object(m.jsxs)(s.a.Group,{onChange:function(e){var t=e.target.value,n=new Map([["0",function(){var e=Object(p.e)(new Date,7);F(e[0]),$(e[1]),fe(P,J,e[0],e[1])}],["1",function(){var e=Object(p.e)(new Date,30);F(e[0]),$(e[1]),fe(P,J,e[0],e[1])}],["2",function(){var e=Object(p.e)(new Date,365);F(e[0]),$(e[1]),fe(P,J,e[0],e[1])}]]);n.get(t)&&n.get(t)()},defaultValue:"0",children:[Object(m.jsx)(s.a.Button,{value:"0",children:"\u8fd1\u4e00\u5468"}),Object(m.jsx)(s.a.Button,{value:"1",children:"\u8fd1\u4e00\u6708"}),Object(m.jsx)(s.a.Button,{value:"2",children:"\u8fd1\u4e00\u5e74"})]}),Object(m.jsx)(i.b,{direction:"vertical",size:12,children:Object(m.jsx)(k,{format:"YYYY-MM-DD",value:[N()(X),N()(Z)],onChange:function(e,t){H(t),F(t[0]),$(t[1])}})}),Object(m.jsx)(a.a,{type:"primary",className:"btnSearch",onClick:function(){F(q[0]),$(q[1]),fe(P,J,q[0],q[1])},children:"\u67e5\u8be2"})]})]}),Object(m.jsx)("div",{className:"Chars",children:Object(m.jsx)("div",{ref:he,style:{width:"100%",height:"100%"}})}),Object(m.jsx)("div",{className:"topics",children:null===I||void 0===I||null===(n=I.userExercises)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.map((function(e,t){var n,c,i,s,r,o,l,u,j;return Object(m.jsxs)("div",{className:"items",children:[Object(m.jsx)("div",{className:"top_title",children:Object(m.jsxs)("div",{className:"info_class",children:[Object(m.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(m.jsx)("span",{children:null===w||void 0===w||null===(n=w.teacher)||void 0===n?void 0:n.level[null===e||void 0===e||null===(c=e.get_exercises)||void 0===c?void 0:c.level]})]}),Object(m.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(i=e.get_exercises)||void 0===i||null===(s=i.get_question_category)||void 0===s?void 0:s.title]})]})}),Object(m.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(r=e.get_exercises)||void 0===r?void 0:r.content_all}}),Object(m.jsxs)("div",{className:"answerbox",style:{display:(null===e||void 0===e?void 0:e.isanswer)?"block":"none"},children:[Object(m.jsxs)("div",{className:"Tests",children:[Object(m.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(m.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(o=e.get_exercises)||void 0===o?void 0:o.knowName}})]}),Object(m.jsxs)("div",{className:"answer",children:[Object(m.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(m.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(l=e.get_exercises)||void 0===l?void 0:l.answer}})]}),Object(m.jsxs)("div",{className:"Parse",children:[Object(m.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(m.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(u=e.get_exercises)||void 0===u?void 0:u.analysis}})]})]}),Object(m.jsxs)("div",{className:"bot_btns",children:[Object(m.jsx)("div",{className:"left_box_warp",children:Object(m.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(p.g)(1e3*(null===e||void 0===e||null===(j=e.get_exercises)||void 0===j?void 0:j.update_time))]})}),Object(m.jsxs)("div",{className:"right_box_warp",children:[Object(m.jsxs)("div",{className:"answers",onClick:function(){return function(e){var t=Object(d.a)({},I);t.userExercises.data[e].isanswer=!t.userExercises.data[e].isanswer,L(t)}(t)},children:[Object(m.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(m.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(m.jsxs)("div",{className:"details",onClick:function(){var t,n;return n=null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.id,void g.push("/main/questiondetails?id=".concat(n))},children:[Object(m.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(m.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),(null===e||void 0===e?void 0:e.is_basket)?Object(m.jsxs)(a.a,{className:"sub",variant:"contained",onClick:function(){return xe(null===e||void 0===e?void 0:e.exercises_id)},children:[Object(m.jsx)("em",{children:"-"}),"\u79fb\u9664"]}):Object(m.jsxs)(a.a,{className:"add",variant:"contained",onClick:function(){var t;return Oe(null===e||void 0===e?void 0:e.exercises_id,null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.type)},children:[Object(m.jsx)("em",{children:"+"}),"\u7ec4\u5377"]})]})]})]},null===e||void 0===e?void 0:e.exercises_id)}))}),Object(m.jsx)("div",{className:"pages",children:Object(m.jsx)(c.a,{hideOnSinglePage:!1,total:null===I||void 0===I||null===(v=I.userExercises)||void 0===v?void 0:v.total,defaultPageSize:20,showSizeChanger:!1,showQuickJumper:!0,pageSize:(null===I||void 0===I||null===(x=I.userExercises)||void 0===x?void 0:x.per_page)||20,onChange:function(e,t){A(1*e),fe(P,1*e)},current:J})}),Object(m.jsx)(y.a,{props:e}),Object(m.jsx)(_.a,{isOpen:ue,title:" ",closeClick:pe,width:"41.71rem",height:"22.14rem",children:Object(m.jsxs)("div",{id:"tmodelbox",children:[Object(m.jsxs)("div",{className:"title",children:[Object(m.jsx)("img",{className:"notice",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/notice.png",alt:"notice"}),Object(m.jsx)("span",{children:"\u64cd\u4f5c\u5931\u8d25"})]}),Object(m.jsx)("div",{className:"body_text",children:ve}),Object(m.jsx)(a.a,{type:"primary",className:"btn",onClick:pe,children:"\u6211\u77e5\u9053\u4e86"})]})})]})}t.default=Object(x.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setData:function(t){var n={type:g.c,value:t};e(n)},addtopicData:function(t){var n={type:g.a,value:t};e(n)},subtopicData:function(t){var n={type:g.e,value:t};e(n)},settopicData:function(t){var n={type:g.d,value:t};e(n)}}}))(Object(h.memo)(T))}}]);