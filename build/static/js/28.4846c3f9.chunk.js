(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[28],{179:function(e,t,n){"use strict";n.d(t,"p",(function(){return i})),n.d(t,"o",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"q",(function(){return b})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return m})),n.d(t,"b",(function(){return p})),n.d(t,"j",(function(){return h})),n.d(t,"m",(function(){return f})),n.d(t,"t",(function(){return O})),n.d(t,"i",(function(){return x})),n.d(t,"h",(function(){return g})),n.d(t,"f",(function(){return _})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return w})),n.d(t,"n",(function(){return N}));var a=n(177),c=n(178),s=n.n(c);function i(e){return Object(a.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function r(e){return Object(a.a)({url:"/getExercisesDetail",method:"GET",params:e})}function o(e){return Object(a.a)({url:"/addExamBasket",method:"POST",data:s.a.stringify(e)})}function u(e){return Object(a.a)({url:"/delExamBasket",method:"POST",data:s.a.stringify(e)})}function l(e){return Object(a.a)({url:"/basketDetail",method:"GET",params:e})}function d(e){return Object(a.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(a.a)({url:"/clearExamBasket",method:"GET"})}function b(e){return Object(a.a)({url:"/getPapersExercises",method:"GET",params:e})}function v(e){return Object(a.a)({url:"/getPapersList",method:"GET",params:e})}function m(e){return Object(a.a)({url:"/paperToBased",method:"POST",data:s.a.stringify(e)})}function p(e){return Object(a.a)({url:"/addPapers",method:"POST",data:s.a.stringify(e)})}function h(e){return Object(a.a)({url:"/editPapers",method:"POST",data:s.a.stringify(e)})}function f(e){return Object(a.a)({url:"/getDetailPapers",method:"GET",params:e})}function O(e){return Object(a.a)({url:"/paperToBasket",method:"GET",params:e})}function x(e){return Object(a.a)({url:"/editBasketSort",method:"GET",params:e})}function g(e){return Object(a.a)({url:"/editBasketScore",method:"GET",params:e})}function _(e){return Object(a.a)({url:"/delTeacherExam",method:"GET",params:e})}function y(e){return Object(a.a)({url:"/editTypeBasketSort",method:"GET",params:e})}function w(e){return Object(a.a)({url:"/getChapterExercises",method:"GET",params:e})}function N(e){return Object(a.a)({url:"/getExerciseAnswer",method:"GET",params:e})}},195:function(e,t,n){"use strict";n(175);var a=n(174),c=n(19),s=n.n(c),i=(n(180),n(66)),r=n(39),o=n(8),u=n(11),l=n(0),d=(n(196),n(67)),j=n(32),b=n(179);function v(e){var t,n=e.volumeTopicCount,c=e.props,d=e.settopicData,j=c.history,v=Object(l.useState)({}),m=Object(o.a)(v,2),p=m[0],h=m[1];Object(l.useEffect)((function(){return O(),function(){}}),[n]);var f=function(){var e=Object(r.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)();case 2:t=e.sent,n=t.code,a=t.msg,200===n?(i.b.success(a),O()):i.b.error(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(r.a)(s.a.mark((function e(){var t,n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)();case 2:t=e.sent,n=t.code,a=t.data,200==n&&(h(a),c=null===a||void 0===a?void 0:a.basketCount,d(c));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){j.push("/mypaper")},g=function(){var e=Object(r.a)(s.a.mark((function e(t){var n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(b.g)({type:t});case 3:n=e.sent,a=n.code,c=n.msg,200===a?(O(),i.b.success(c)):i.b.error(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"AI_floatBox",children:[Object(u.jsxs)("div",{className:"top_float_warp",onClick:x,children:[Object(u.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(u.jsxs)("span",{className:"count",children:[Object(u.jsx)("em",{children:n}),"/40"]}),Object(u.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(u.jsx)("img",{className:"arrow_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon"}),Object(u.jsxs)("div",{className:"unfold",children:[Object(u.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(u.jsx)("span",{children:null===p||void 0===p?void 0:p.basketCount}),"\uff09"]}),Object(u.jsx)("div",{className:"typeList",children:null===p||void 0===p||null===(t=p.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(u.jsxs)("div",{className:"numdel",children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(u.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return g(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(u.jsx)("div",{className:"empty",onClick:f,children:"\u6e05\u7a7a\u8bd5\u9898"}),Object(u.jsx)(a.a,{type:"primary",className:"preview",block:!0,onClick:x,children:"\u8bd5\u5377\u9884\u89c8"})]})]})}t.a=Object(d.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var n={type:j.a,value:t};e(n)},subtopicData:function(t){var n={type:j.e,value:t};e(n)},settopicData:function(t){var n={type:j.d,value:t};e(n)}}}))(Object(l.memo)(v))},196:function(e,t,n){},213:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var a=n(177);function c(e){return Object(a.a)({url:"/getSchoolBasedList",method:"GET",params:e})}function s(e){return Object(a.a)({url:"/getSchoolBasedDetail",method:"GET",params:e})}function i(e){return Object(a.a)({url:"/teamAcademicReport",method:"GET",params:e})}},398:function(e,t,n){},472:function(e,t,n){"use strict";n.r(t);n(220);var a=n(222),c=(n(175),n(174)),s=(n(263),n(272)),i=(n(206),n(207)),r=(n(183),n(184)),o=n(19),u=n.n(o),l=(n(180),n(66)),d=n(1),j=n(39),b=n(8),v=(n(271),n(265)),m=n(11),p=n(0),h=(n(398),n(181)),f=n(213),O=n(179),x=n(67),g=n(32),_=n(195),y=n(232),w=n.n(y),N=v.a.RangePicker;function k(e){var t,n,o,v,x,g=e.history,y=e.homeInfo,k=e.addtopicData,T=e.subtopicData,E=e.volumeTopicCount,S=Object(p.useState)(0),C=Object(b.a)(S,2),D=C[0],G=C[1],B=Object(p.useState)({}),P=Object(b.a)(B,2),I=P[0],L=P[1],M=Object(p.useState)(Object(h.d)(new Date,7)),z=Object(b.a)(M,2),R=z[0],q=z[1],H=Object(p.useState)(1),V=Object(b.a)(H,2),Y=V[0],A=V[1],J=Object(p.useState)(Object(h.d)(new Date,7)[0]),K=Object(b.a)(J,2),Q=K[0],X=K[1],F=Object(p.useState)(Object(h.d)(new Date,7)[1]),U=Object(b.a)(F,2),W=U[0],Z=U[1],$=Object(p.useState)(0),ee=Object(b.a)($,2),te=ee[0],ne=ee[1],ae=Object(p.useState)({title:{text:"\u9519\u9898\u77e5\u8bc6\u70b9\u5206\u5e03\u56fe"},tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:[]},series:[{name:"",type:"pie",radius:"55%",center:["40%","50%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),ce=Object(b.a)(ae,2),se=ce[0],ie=ce[1],re=Object(p.useRef)(null);Object(p.useEffect)((function(){return oe(D,Y,Q,W),function(){}}),[E]),Object(p.useEffect)((function(){window.echarts.init(re.current).setOption(se)}));var oe=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,a,c,s,i,r,o,j,b,v,m,p,h,O=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O.length>0&&void 0!==O[0]?O[0]:D,n=O.length>1&&void 0!==O[1]?O[1]:Y,a=O.length>2&&void 0!==O[2]?O[2]:Q,c=O.length>3&&void 0!==O[3]?O[3]:W,e.next=6,Object(f.c)({team_id:t,start_time:a,end_time:c,page:n});case 6:s=e.sent,i=s.code,r=s.data,o=s.msg,200===i?(null===r||void 0===r||null===(j=r.userExercises)||void 0===j||null===(b=j.data)||void 0===b||b.map((function(e){e.isanswer=!1})),L(r),m=[],p=[],h=Object(d.a)({},se),null===r||void 0===r||null===(v=r.knowPointExercises)||void 0===v||v.map((function(e){m.push(e.title),p.push({name:e.title,value:e.count})})),h.legend.data=m,h.series[0].data=p,ie(h)):l.b.error(o);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)({exercises_id:[t]});case 2:a=e.sent,c=a.code,s=a.msg,200==c?(l.b.success(s),k(1)):l.b.error(s);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)({exercises_id:t});case 2:n=e.sent,a=n.code,c=n.msg,200==a?(l.b.success(c),T(1)):l.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{id:"ClassReport",children:[Object(m.jsxs)(r.a,{separator:Object(m.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(m.jsxs)(r.a.Item,{onClick:function(e){e.preventDefault(),g.push("/index")},style:{cursor:"pointer",color:"#222"},children:[Object(m.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(m.jsx)(r.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u73ed\u7ea7\u5b66\u60c5\u62a5\u544a"})]}),Object(m.jsxs)("div",{className:"top_warp",children:[Object(m.jsx)("div",{className:"left_name",children:null===I||void 0===I||null===(t=I.teams)||void 0===t?void 0:t.map((function(e,t){var n;return Object(m.jsxs)("span",{className:t===te&&"crrunt",onClick:function(){return function(e,t){ne(t),G(e),oe(e,Y,R[0],R[1])}(null===e||void 0===e?void 0:e.id,t)},children:[null===e||void 0===e||null===(n=e.get_grade)||void 0===n?void 0:n.name,null===e||void 0===e?void 0:e.name]},null===e||void 0===e?void 0:e.id)}))}),Object(m.jsxs)("div",{className:"right_timer",children:[Object(m.jsx)("div",{className:"title",children:"\u65f6\u95f4\u9009\u62e9:"}),Object(m.jsxs)(i.a.Group,{onChange:function(e){var t=e.target.value,n=new Map([["0",function(){var e=Object(h.d)(new Date,7);q(e),X(e[0]),Z(e[1]),oe(D,Y,e[0],e[1])}],["1",function(){var e=Object(h.d)(new Date,30);q(e),X(e[0]),Z(e[1]),oe(D,Y,e[0],e[1])}],["2",function(){var e=Object(h.d)(new Date,365);q(e),X(e[0]),Z(e[1]),oe(D,Y,e[0],e[1])}]]);n.get(t)&&n.get(t)()},defaultValue:"0",children:[Object(m.jsx)(i.a.Button,{value:"0",children:"\u8fd1\u4e00\u5468"}),Object(m.jsx)(i.a.Button,{value:"1",children:"\u8fd1\u4e00\u6708"}),Object(m.jsx)(i.a.Button,{value:"2",children:"\u8fd1\u4e00\u5e74"})]}),Object(m.jsx)(s.b,{direction:"vertical",size:12,children:Object(m.jsx)(N,{format:"YYYY-MM-DD",value:[w()(Q),w()(W)],onChange:function(e,t){q(t),X(t[0]),Z(t[1])}})}),Object(m.jsx)(c.a,{type:"primary",className:"btnSearch",onClick:function(){X(R[0]),Z(R[1]),oe(D,Y,R[0],R[1])},children:"\u67e5\u8be2"})]})]}),Object(m.jsx)("div",{className:"Chars",children:Object(m.jsx)("div",{ref:re,style:{width:"100%",height:"100%"}})}),Object(m.jsx)("div",{className:"topics",children:null===I||void 0===I||null===(n=I.userExercises)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.map((function(e,t){var n,a,s,i,r,o,u,l,j;return Object(m.jsxs)("div",{className:"items",children:[Object(m.jsx)("div",{className:"top_title",children:Object(m.jsxs)("div",{className:"info_class",children:[Object(m.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(m.jsx)("span",{children:null===y||void 0===y||null===(n=y.teacher)||void 0===n?void 0:n.level[null===e||void 0===e||null===(a=e.get_exercises)||void 0===a?void 0:a.level]})]}),Object(m.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(s=e.get_exercises)||void 0===s||null===(i=s.get_question_category)||void 0===i?void 0:i.title]})]})}),Object(m.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(r=e.get_exercises)||void 0===r?void 0:r.content_all}}),Object(m.jsxs)("div",{className:"answerbox",style:{display:(null===e||void 0===e?void 0:e.isanswer)?"block":"none"},children:[Object(m.jsxs)("div",{className:"Tests",children:[Object(m.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(m.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(o=e.get_exercises)||void 0===o?void 0:o.knowName}})]}),Object(m.jsxs)("div",{className:"answer",children:[Object(m.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(m.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(u=e.get_exercises)||void 0===u?void 0:u.answer}})]}),Object(m.jsxs)("div",{className:"Parse",children:[Object(m.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(m.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(l=e.get_exercises)||void 0===l?void 0:l.analysis}})]})]}),Object(m.jsxs)("div",{className:"bot_btns",children:[Object(m.jsx)("div",{className:"left_box_warp",children:Object(m.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(h.f)(1e3*(null===e||void 0===e||null===(j=e.get_exercises)||void 0===j?void 0:j.update_time))]})}),Object(m.jsxs)("div",{className:"right_box_warp",children:[Object(m.jsxs)("div",{className:"answers",onClick:function(){return function(e){var t=Object(d.a)({},I);t.userExercises.data[e].isanswer=!t.userExercises.data[e].isanswer,L(t)}(t)},children:[Object(m.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(m.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(m.jsxs)("div",{className:"details",onClick:function(){var t,n;return n=null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.id,void window.open("/question/details?id=".concat(n))},children:[Object(m.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(m.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),(null===e||void 0===e?void 0:e.is_basket)?Object(m.jsx)(c.a,{className:"sub",size:"small",variant:"contained",onClick:function(){return le(null===e||void 0===e?void 0:e.exercises_id)},children:"- \u79fb\u9664"}):Object(m.jsx)(c.a,{className:"add",variant:"contained",size:"small",onClick:function(){var t;return ue(null===e||void 0===e?void 0:e.exercises_id,null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.type)},children:"+ \u7ec4\u5377"})]})]})]},null===e||void 0===e?void 0:e.exercises_id)}))}),Object(m.jsx)("div",{className:"pages",children:Object(m.jsx)(a.a,{hideOnSinglePage:!1,total:null===I||void 0===I||null===(v=I.userExercises)||void 0===v?void 0:v.total,defaultPageSize:20,showSizeChanger:!1,showQuickJumper:!0,pageSize:(null===I||void 0===I||null===(x=I.userExercises)||void 0===x?void 0:x.per_page)||20,onChange:function(e,t){A(1*e),oe(D,1*e)},current:Y})}),Object(m.jsx)(_.a,{props:e})]})}t.default=Object(x.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setData:function(t){var n={type:g.c,value:t};e(n)},addtopicData:function(t){var n={type:g.a,value:t};e(n)},subtopicData:function(t){var n={type:g.e,value:t};e(n)},settopicData:function(t){var n={type:g.d,value:t};e(n)}}}))(Object(p.memo)(k))}}]);