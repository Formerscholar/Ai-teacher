(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[29],{179:function(e,t,n){"use strict";n.d(t,"p",(function(){return i})),n.d(t,"o",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"q",(function(){return m})),n.d(t,"r",(function(){return b})),n.d(t,"s",(function(){return v})),n.d(t,"b",(function(){return h})),n.d(t,"j",(function(){return p})),n.d(t,"m",(function(){return f})),n.d(t,"t",(function(){return O})),n.d(t,"i",(function(){return x})),n.d(t,"h",(function(){return g})),n.d(t,"f",(function(){return _})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return w})),n.d(t,"n",(function(){return N}));var a=n(177),c=n(178),r=n.n(c);function i(e){return Object(a.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function s(e){return Object(a.a)({url:"/getExercisesDetail",method:"GET",params:e})}function o(e){return Object(a.a)({url:"/addExamBasket",method:"POST",data:r.a.stringify(e)})}function u(e){return Object(a.a)({url:"/delExamBasket",method:"POST",data:r.a.stringify(e)})}function l(e){return Object(a.a)({url:"/basketDetail",method:"GET",params:e})}function d(e){return Object(a.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(a.a)({url:"/clearExamBasket",method:"GET"})}function m(e){return Object(a.a)({url:"/getPapersExercises",method:"GET",params:e})}function b(e){return Object(a.a)({url:"/getPapersList",method:"GET",params:e})}function v(e){return Object(a.a)({url:"/paperToBased",method:"POST",data:r.a.stringify(e)})}function h(e){return Object(a.a)({url:"/addPapers",method:"POST",data:r.a.stringify(e)})}function p(e){return Object(a.a)({url:"/editPapers",method:"POST",data:r.a.stringify(e)})}function f(e){return Object(a.a)({url:"/getDetailPapers",method:"GET",params:e})}function O(e){return Object(a.a)({url:"/paperToBasket",method:"GET",params:e})}function x(e){return Object(a.a)({url:"/editBasketSort",method:"GET",params:e})}function g(e){return Object(a.a)({url:"/editBasketScore",method:"GET",params:e})}function _(e){return Object(a.a)({url:"/delTeacherExam",method:"GET",params:e})}function y(e){return Object(a.a)({url:"/editTypeBasketSort",method:"GET",params:e})}function w(e){return Object(a.a)({url:"/getChapterExercises",method:"GET",params:e})}function N(e){return Object(a.a)({url:"/getExerciseAnswer",method:"GET",params:e})}},195:function(e,t,n){"use strict";n(175);var a=n(174),c=n(19),r=n.n(c),i=(n(180),n(66)),s=n(39),o=n(8),u=n(11),l=n(0),d=(n(196),n(67)),j=n(32),m=n(179);function b(e){var t,n=e.volumeTopicCount,c=e.props,d=e.settopicData,j=c.history,b=Object(l.useState)({}),v=Object(o.a)(b,2),h=v[0],p=v[1];Object(l.useEffect)((function(){return O(),function(){}}),[n]);var f=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.d)();case 2:t=e.sent,n=t.code,a=t.msg,200===n?(i.b.success(a),O()):i.b.error(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.c)();case 2:t=e.sent,n=t.code,a=t.data,200==n&&(p(a),c=null===a||void 0===a?void 0:a.basketCount,d(c));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){j.push("/mypaper")},g=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(m.g)({type:t});case 3:n=e.sent,a=n.code,c=n.msg,200===a?(O(),i.b.success(c)):i.b.error(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"AI_floatBox",children:[Object(u.jsxs)("div",{className:"top_float_warp",onClick:x,children:[Object(u.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(u.jsxs)("span",{className:"count",children:[Object(u.jsx)("em",{children:n}),"/40"]}),Object(u.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(u.jsx)("img",{className:"arrow_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon"}),Object(u.jsxs)("div",{className:"unfold",children:[Object(u.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(u.jsx)("span",{children:null===h||void 0===h?void 0:h.basketCount}),"\uff09"]}),Object(u.jsx)("div",{className:"typeList",children:null===h||void 0===h||null===(t=h.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(u.jsxs)("div",{className:"numdel",children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(u.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return g(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(u.jsx)("div",{className:"empty",onClick:f,children:"\u6e05\u7a7a\u8bd5\u9898"}),Object(u.jsx)(a.a,{type:"primary",className:"preview",block:!0,onClick:x,children:"\u8bd5\u5377\u9884\u89c8"})]})]})}t.a=Object(d.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var n={type:j.a,value:t};e(n)},subtopicData:function(t){var n={type:j.e,value:t};e(n)},settopicData:function(t){var n={type:j.d,value:t};e(n)}}}))(Object(l.memo)(b))},196:function(e,t,n){},219:function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"h",(function(){return j})),n.d(t,"b",(function(){return m}));var a=n(177),c=n(178),r=n.n(c);function i(){return Object(a.a)({url:"/getTeamList",method:"GET"})}function s(e){return Object(a.a)({url:"/getTeamDetail",method:"GET",params:e})}function o(e){return Object(a.a)({url:"/delTeamTeacher",method:"POST",data:r.a.stringify(e)})}function u(e){return Object(a.a)({url:"/delTeamStudent",method:"POST",data:r.a.stringify(e)})}function l(){return Object(a.a)({url:"/getAddTeam",method:"GET"})}function d(e){return Object(a.a)({url:"/addTeam",method:"POST",data:r.a.stringify(e)})}function j(e){return Object(a.a)({url:"/studentAcademicReport",method:"GET",params:e})}function m(e){return Object(a.a)({url:"/delTeam",method:"POST",data:r.a.stringify(e)})}},389:function(e,t,n){},471:function(e,t,n){"use strict";n.r(t);n(220);var a=n(222),c=(n(175),n(174)),r=(n(263),n(272)),i=(n(206),n(207)),s=(n(183),n(184)),o=n(19),u=n.n(o),l=(n(180),n(66)),d=n(1),j=n(39),m=n(8),b=(n(271),n(265)),v=n(11),h=n(0),p=(n(389),n(181)),f=n(219),O=n(179),x=n(67),g=n(32),_=n(195),y=n(232),w=n.n(y),N=b.a.RangePicker;function T(e){var t,n,o,b,x,g,y,T,k,E,S=e.location,C=e.history,D=e.homeInfo,G=e.addtopicData,P=e.subtopicData,B=e.volumeTopicCount,I=Object(p.g)(S.search).id,L=Object(p.g)(S.search).iid,M=Object(h.useState)({}),z=Object(m.a)(M,2),R=z[0],q=z[1],A=Object(h.useState)([]),H=Object(m.a)(A,2),V=H[0],Y=H[1],J=Object(h.useState)(1),K=Object(m.a)(J,2),Q=K[0],X=K[1],F=Object(h.useState)(Object(p.d)(new Date,7)[0]),U=Object(m.a)(F,2),W=U[0],Z=U[1],$=Object(h.useState)(Object(p.d)(new Date,7)[1]),ee=Object(m.a)($,2),te=ee[0],ne=ee[1],ae=Object(h.useState)({title:{text:"\u9519\u9898\u77e5\u8bc6\u70b9\u5206\u5e03\u56fe"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{type:"scroll",orient:"vertical",right:10,top:20,bottom:20,data:[]},series:[{name:"",type:"pie",radius:"55%",center:["40%","50%"],data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),ce=Object(m.a)(ae,2),re=ce[0],ie=ce[1],se=Object(h.useRef)(null);Object(h.useEffect)((function(){return oe(Q,W,te),function(){}}),[B]),Object(h.useEffect)((function(){window.echarts.init(se.current).setOption(re)}));var oe=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,a,c,r,i,s,o,j,m,b,v,h,p=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:Q,n=p.length>1&&void 0!==p[1]?p[1]:W,a=p.length>2&&void 0!==p[2]?p[2]:te,e.next=5,Object(f.h)({student_id:I,start_time:n,end_time:a,page:t});case 5:c=e.sent,r=c.code,i=c.data,s=c.msg,200===r?(null===i||void 0===i||null===(o=i.userExercises)||void 0===o||null===(j=o.data)||void 0===j||j.map((function(e){e.isanswer=!1})),q(i),b=[],v=[],h=Object(d.a)({},re),null===i||void 0===i||null===(m=i.knowPointExercises)||void 0===m||m.map((function(e){b.push(e.title),v.push({name:e.title,value:e.count})})),h.legend.data=b,h.series[0].data=v,ie(h)):l.b.error(s);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)({exercises_id:[t]});case 2:a=e.sent,c=a.code,r=a.msg,200==c?(l.b.success(r),G(1)):l.b.error(r);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),le=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.e)({exercises_id:t});case 2:n=e.sent,a=n.code,c=n.msg,200==a?(l.b.success(c),P(1)):l.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{id:"StudyReport",children:[Object(v.jsxs)(s.a,{separator:Object(v.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(v.jsxs)(s.a.Item,{onClick:function(e){e.preventDefault(),C.push("/index")},style:{cursor:"pointer",color:"#222"},children:[Object(v.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(v.jsx)(s.a.Item,{onClick:function(e){e.preventDefault(),C.push("/class")},className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u73ed\u7ea7\u4fe1\u606f"}),Object(v.jsxs)(s.a.Item,{onClick:function(e){e.preventDefault(),C.push("/class/detail?id=".concat(L))},className:"breaditem",style:{cursor:"pointer",color:"#222"},children:[null===R||void 0===R||null===(t=R.student)||void 0===t||null===(n=t.get_grade)||void 0===n?void 0:n.name,null===R||void 0===R||null===(o=R.student)||void 0===o||null===(b=o.get_team)||void 0===b?void 0:b.name]}),Object(v.jsxs)(s.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:[null===R||void 0===R||null===(x=R.student)||void 0===x?void 0:x.true_name,"\u7684\u5b66\u60c5\u62a5\u544a"]})]}),Object(v.jsxs)("div",{className:"top_warp",children:[Object(v.jsx)("div",{className:"left_name",children:null===R||void 0===R||null===(g=R.student)||void 0===g?void 0:g.true_name}),Object(v.jsxs)("div",{className:"right_timer",children:[Object(v.jsx)("div",{className:"title",children:"\u65f6\u95f4\u9009\u62e9:"}),Object(v.jsxs)(i.a.Group,{onChange:function(e){var t=e.target.value,n=new Map([["0",function(){var e=Object(p.d)(new Date,7);Y(e),Z(e[0]),ne(e[1]),oe(Q,e[0],e[1])}],["1",function(){var e=Object(p.d)(new Date,30);Y(e),Z(e[0]),ne(e[1]),oe(Q,e[0],e[1])}],["2",function(){var e=Object(p.d)(new Date,365);Y(e),Z(e[0]),ne(e[1]),oe(Q,e[0],e[1])}]]);n.get(t)&&n.get(t)()},defaultValue:"0",children:[Object(v.jsx)(i.a.Button,{value:"0",children:"\u8fd1\u4e00\u5468"}),Object(v.jsx)(i.a.Button,{value:"1",children:"\u8fd1\u4e00\u6708"}),Object(v.jsx)(i.a.Button,{value:"2",children:"\u8fd1\u4e00\u5e74"})]}),Object(v.jsx)(r.b,{direction:"vertical",size:12,children:Object(v.jsx)(N,{format:"YYYY-MM-DD",value:[w()(W),w()(te)],onChange:function(e,t){Y(t),Z(t[0]),ne(t[1])}})}),Object(v.jsx)(c.a,{type:"primary",className:"btnSearch",onClick:function(){Z(V[0]),ne(V[1]),oe(Q,V[0],V[1])},children:"\u67e5\u8be2"})]})]}),Object(v.jsx)("div",{className:"Chars",children:Object(v.jsx)("div",{ref:se,style:{width:"100%",height:"100%"}})}),Object(v.jsx)("div",{className:"topics",children:null===R||void 0===R||null===(y=R.userExercises)||void 0===y||null===(T=y.data)||void 0===T?void 0:T.map((function(e,t){var n,a,r,i,s,o,u,l,j;return Object(v.jsxs)("div",{className:"items",children:[Object(v.jsx)("div",{className:"top_title",children:Object(v.jsxs)("div",{className:"info_class",children:[Object(v.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(v.jsx)("span",{children:null===D||void 0===D||null===(n=D.teacher)||void 0===n?void 0:n.level[null===e||void 0===e||null===(a=e.get_exercises)||void 0===a?void 0:a.level]})]}),Object(v.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(r=e.get_exercises)||void 0===r||null===(i=r.get_question_category)||void 0===i?void 0:i.title]})]})}),Object(v.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(s=e.get_exercises)||void 0===s?void 0:s.content_all}}),Object(v.jsxs)("div",{className:"answerbox",style:{display:(null===e||void 0===e?void 0:e.isanswer)?"block":"none"},children:[Object(v.jsxs)("div",{className:"Tests",children:[Object(v.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(v.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(o=e.get_exercises)||void 0===o?void 0:o.knowName}})]}),Object(v.jsxs)("div",{className:"answer",children:[Object(v.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(v.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(u=e.get_exercises)||void 0===u?void 0:u.answer}})]}),Object(v.jsxs)("div",{className:"Parse",children:[Object(v.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(v.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(l=e.get_exercises)||void 0===l?void 0:l.analysis}})]})]}),Object(v.jsxs)("div",{className:"bot_btns",children:[Object(v.jsx)("div",{className:"left_box_warp",children:Object(v.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(p.f)(1e3*(null===e||void 0===e||null===(j=e.get_exercises)||void 0===j?void 0:j.update_time))]})}),Object(v.jsxs)("div",{className:"right_box_warp",children:[Object(v.jsxs)("div",{className:"answers",onClick:function(){return function(e){var t=Object(d.a)({},R);t.userExercises.data[e].isanswer=!t.userExercises.data[e].isanswer,q(t)}(t)},children:[Object(v.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(v.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(v.jsxs)("div",{className:"details",onClick:function(){var t;return function(e){window.open("/question/details?id=".concat(e))}(null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.id)},children:[Object(v.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(v.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),(null===e||void 0===e?void 0:e.is_basket)?Object(v.jsxs)(c.a,{className:"sub",size:"small",variant:"contained",onClick:function(){return le(null===e||void 0===e?void 0:e.exercises_id)},children:[Object(v.jsx)("em",{children:"-"}),"\u79fb\u9664"]}):Object(v.jsxs)(c.a,{className:"add",size:"small",variant:"contained",onClick:function(){var t;return ue(null===e||void 0===e?void 0:e.exercises_id,null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.type)},children:[Object(v.jsx)("em",{children:"+"}),"\u7ec4\u5377"]})]})]})]},null===e||void 0===e?void 0:e.exercises_id)}))}),Object(v.jsx)("div",{className:"pages",children:Object(v.jsx)(a.a,{hideOnSinglePage:!1,total:null===R||void 0===R||null===(k=R.userExercises)||void 0===k?void 0:k.total,defaultPageSize:20,showSizeChanger:!1,showQuickJumper:!0,pageSize:(null===R||void 0===R||null===(E=R.userExercises)||void 0===E?void 0:E.per_page)||20,onChange:function(e,t){X(1*e),oe(1*e)},current:Q})}),Object(v.jsx)(_.a,{props:e})]})}t.default=Object(x.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setData:function(t){var n={type:g.c,value:t};e(n)},addtopicData:function(t){var n={type:g.a,value:t};e(n)},subtopicData:function(t){var n={type:g.e,value:t};e(n)},settopicData:function(t){var n={type:g.d,value:t};e(n)}}}))(Object(h.memo)(T))}}]);