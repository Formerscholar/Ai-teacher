(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[25],{148:function(e,t,n){"use strict";n.d(t,"q",(function(){return i})),n.d(t,"p",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"h",(function(){return u})),n.d(t,"e",(function(){return v})),n.d(t,"r",(function(){return j})),n.d(t,"s",(function(){return m})),n.d(t,"t",(function(){return b})),n.d(t,"c",(function(){return p})),n.d(t,"k",(function(){return h})),n.d(t,"n",(function(){return f})),n.d(t,"u",(function(){return x})),n.d(t,"j",(function(){return O})),n.d(t,"i",(function(){return _})),n.d(t,"g",(function(){return y})),n.d(t,"l",(function(){return g})),n.d(t,"m",(function(){return N})),n.d(t,"o",(function(){return w})),n.d(t,"a",(function(){return k}));var s=n(146),a=n(147),c=n.n(a);function i(e){return Object(s.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function r(e){return Object(s.a)({url:"/getExercisesDetail",method:"GET",params:e})}function o(e){return Object(s.a)({url:"/addExamBasket",method:"POST",data:c.a.stringify(e)})}function l(e){return Object(s.a)({url:"/delExamBasket",method:"POST",data:c.a.stringify(e)})}function d(e){return Object(s.a)({url:"/basketDetail",method:"GET",params:e})}function u(e){return Object(s.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function v(){return Object(s.a)({url:"/clearExamBasket",method:"GET"})}function j(e){return Object(s.a)({url:"/getPapersExercises",method:"GET",params:e})}function m(e){return Object(s.a)({url:"/getPapersList",method:"GET",params:e})}function b(e){return Object(s.a)({url:"/paperToBased",method:"POST",data:c.a.stringify(e)})}function p(e){return Object(s.a)({url:"/addPapers",method:"POST",data:c.a.stringify(e)})}function h(e){return Object(s.a)({url:"/editPapers",method:"POST",data:c.a.stringify(e)})}function f(e){return Object(s.a)({url:"/getDetailPapers",method:"GET",params:e})}function x(e){return Object(s.a)({url:"/paperToBasket",method:"GET",params:e})}function O(e){return Object(s.a)({url:"/editBasketSort",method:"GET",params:e})}function _(e){return Object(s.a)({url:"/editBasketScore",method:"GET",params:e})}function y(e){return Object(s.a)({url:"/delTeacherExam",method:"GET",params:e})}function g(e){return Object(s.a)({url:"/editTypeBasketSort",method:"GET",params:e})}function N(e){return Object(s.a)({url:"/getChapterExercises",method:"GET",params:e})}function w(e){return Object(s.a)({url:"/getExerciseAnswer",method:"GET",params:e})}function k(e){return Object(s.a)({url:"/academicReportKnowledgeDetail",method:"POST",data:c.a.stringify(e)})}},164:function(e,t,n){"use strict";n(143);var s=n(142),a=n(20),c=n.n(a),i=(n(149),n(66)),r=n(32),o=n(5),l=n(13),d=n(0),u=(n(165),n(65)),v=n(28),j=n(148);function m(e){var t,n=e.volumeTopicCount,a=e.props,u=e.settopicData,v=a.history,m=Object(d.useState)({}),b=Object(o.a)(m,2),p=b[0],h=b[1];Object(d.useEffect)((function(){return x(),function(){}}),[n]);var f=function(){var e=Object(r.a)(c.a.mark((function e(){var t,n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.e)();case 2:t=e.sent,n=t.code,s=t.msg,200===n?(i.b.success(s),x()):i.b.error(s);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(r.a)(c.a.mark((function e(){var t,n,s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)();case 2:t=e.sent,n=t.code,s=t.data,200==n&&(h(s),a=null===s||void 0===s?void 0:s.basketCount,u(a));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){v.push("/mypaper")},_=function(){var e=Object(r.a)(c.a.mark((function e(t){var n,s,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(j.h)({type:t});case 3:n=e.sent,s=n.code,a=n.msg,200===s?(x(),i.b.success(a)):i.b.error(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"AI_floatBox",children:[Object(l.jsxs)("div",{className:"top_float_warp",onClick:O,children:[Object(l.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(l.jsxs)("span",{className:"count",children:[Object(l.jsx)("em",{children:n}),"/40"]}),Object(l.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(l.jsx)("img",{className:"arrow_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon"}),Object(l.jsxs)("div",{className:"unfold",children:[Object(l.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(l.jsx)("span",{children:null===p||void 0===p?void 0:p.basketCount}),"\uff09"]}),Object(l.jsx)("div",{className:"typeList",children:null===p||void 0===p||null===(t=p.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)("div",{className:"items",children:[Object(l.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(l.jsxs)("div",{className:"numdel",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(l.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return _(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(l.jsx)("div",{className:"empty",onClick:f,children:"\u6e05\u7a7a\u8bd5\u9898"}),Object(l.jsx)(s.a,{type:"primary",className:"preview",block:!0,onClick:O,children:"\u8bd5\u5377\u9884\u89c8"})]})]})}t.a=Object(u.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var n={type:v.a,value:t};e(n)},subtopicData:function(t){var n={type:v.e,value:t};e(n)},settopicData:function(t){var n={type:v.d,value:t};e(n)}}}))(Object(d.memo)(m))},165:function(e,t,n){},166:function(e,t,n){"use strict";n(143);var s=n(142),a=n(13),c=n(0),i=n(65),r=n(28),o=n(145);n(167);function l(e){var t,n=e.homeInfo,i=e.level,r=e.exercises_title,l=e.content_all,d=e.isanswer,u=e.knowName,v=e.answer,j=e.analysis,m=e.update_time,b=e.is_basket,p=e.onSetAnswer,h=e.answerClick,f=e.removeClick,x=e.compositionClick;return Object(c.useEffect)((function(){var e=window.MathJax;return e&&e.typesetPromise&&e.typesetPromise(),function(){}}),[]),Object(a.jsxs)("div",{id:"AI_topic",children:[Object(a.jsx)("div",{className:"top_title",children:Object(a.jsxs)("div",{className:"info_class",children:[Object(a.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(a.jsx)("span",{children:null===n||void 0===n||null===(t=n.teacher)||void 0===t?void 0:t.level[i]})]}),Object(a.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",r]})]})}),Object(a.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:l}}),Object(a.jsxs)("div",{className:"answerbox",style:{display:d?"block":"none"},children:[Object(a.jsxs)("div",{className:"Tests",children:[Object(a.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(a.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:u}})]}),Object(a.jsxs)("div",{className:"answer",children:[Object(a.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(a.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:v}})]}),Object(a.jsxs)("div",{className:"Parse",children:[Object(a.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(a.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:j}})]})]}),Object(a.jsxs)("div",{className:"bot_btns",children:[Object(a.jsx)("div",{className:"left_box_warp",children:Object(a.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(o.f)(1e3*m)]})}),Object(a.jsxs)("div",{className:"right_box_warp",children:[Object(a.jsxs)("div",{className:"answers",onClick:p,children:[Object(a.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(a.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(a.jsxs)("div",{className:"details",onClick:h,children:[Object(a.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(a.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),b?Object(a.jsx)(s.a,{className:"sub",variant:"contained",size:"small",onClick:f,children:"- \u79fb\u9664"}):Object(a.jsx)(s.a,{className:"add",variant:"contained",size:"small",onClick:x,children:"+ \u7ec4\u5377"})]})]})]})}t.a=Object(i.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setClass:function(t){var n={type:r.b,value:t};e(n)},addtopicData:function(t){var n={type:r.a,value:t};e(n)},subtopicData:function(t){var n={type:r.e,value:t};e(n)},settopicData:function(t){var n={type:r.d,value:t};e(n)}}}))(Object(c.memo)(l))},167:function(e,t,n){},301:function(e,t,n){},344:function(e,t,n){"use strict";n.r(t);n(143);var s=n(142),a=(n(151),n(152)),c=n(20),i=n.n(c),r=(n(149),n(66)),o=n(32),l=n(1),d=n(5),u=n(13),v=n(0),j=(n(301),n(148)),m=n(145),b=n(65),p=n(28),h=n(164),f=n(166);function x(e){var t,n,c,b,p,x,O,_,y,g,N,w,k,T,C,E,S=e.subtopicData,D=e.history,P=e.location,I=e.volumeTopicCount,G=e.addtopicData,L=e.homeInfo,B=Object(v.useState)({}),M=Object(d.a)(B,2),H=M[0],A=M[1],q=Object(v.useState)(1),z=Object(d.a)(q,2),J=z[0],V=z[1];Object(v.useEffect)((function(){return K(J),function(){}}),[I]),Object(v.useEffect)((function(){var e=window.MathJax;e&&e.typesetPromise&&e.typesetPromise()}));var K=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,s,a,c,o,l,d=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:1,e.next=3,Object(j.p)({id:Object(m.g)(P.search).id,page:t});case 3:n=e.sent,s=n.code,a=n.data,c=n.msg,200===s?(null===a||void 0===a||null===(o=a.exerciseList)||void 0===o||null===(l=o.data)||void 0===l||l.map((function(e){e.isanswer=!1})),A(a)):r.b.error(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,s,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.f)({exercises_id:t});case 2:n=e.sent,s=n.code,a=n.msg,200==s?(r.b.success(a),S(1)):r.b.error(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var s,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)({exercises_id:[t]});case 2:s=e.sent,a=s.code,c=s.msg,200==a?(r.b.success(c),G(1)):r.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"Questiondetails",children:[Object(u.jsxs)(a.a,{className:"bread",separator:Object(u.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(u.jsxs)(a.a.Item,{className:"breaditem",color:"textPrimary",onClick:function(e){e.preventDefault(),D.push("/knowledge")},children:[Object(u.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position"}),"\u77e5\u8bc6\u70b9\u7ec4\u5377"]}),Object(u.jsx)(a.a.Item,{className:"breaditem",color:"textPrimary",children:"\u8bd5\u9898\u8be6\u60c5"})]}),Object(u.jsx)("div",{className:"content_body",children:Object(u.jsxs)("div",{className:"bor_warp",children:[Object(u.jsx)("div",{className:"content_all",dangerouslySetInnerHTML:{__html:null===H||void 0===H||null===(t=H.exercise)||void 0===t?void 0:t.content_all}}),Object(u.jsxs)("div",{className:"Tests",children:[Object(u.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(u.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===H||void 0===H||null===(n=H.exercise)||void 0===n?void 0:n.knowName}})]}),Object(u.jsxs)("div",{className:"answer",children:[Object(u.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(u.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===H||void 0===H||null===(c=H.exercise)||void 0===c?void 0:c.answer}})]}),Object(u.jsxs)("div",{className:"Parse",children:[Object(u.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(u.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===H||void 0===H||null===(b=H.exercise)||void 0===b?void 0:b.analysis}})]}),Object(u.jsxs)("div",{className:"bot_warp",children:[Object(u.jsxs)("div",{className:"left_box",children:[Object(u.jsxs)("div",{className:"grade",children:["\u5e74\u7ea7\uff1a",null===H||void 0===H||null===(p=H.exercise)||void 0===p||null===(x=p.get_grade)||void 0===x?void 0:x.name]}),Object(u.jsxs)("div",{className:"type",children:["\u9898\u578b\uff1a",null===H||void 0===H||null===(O=H.exercise)||void 0===O||null===(_=O.get_question_category)||void 0===_?void 0:_.title]}),Object(u.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",null===L||void 0===L||null===(y=L.teacher)||void 0===y?void 0:y.level[null===H||void 0===H||null===(g=H.exercise)||void 0===g?void 0:g.level]]}),Object(u.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(m.f)(1e3*(null===H||void 0===H||null===(N=H.exercise)||void 0===N?void 0:N.update_time))]})]}),Object(u.jsx)("div",{className:"right_box",children:(null===H||void 0===H||null===(w=H.exercise)||void 0===w?void 0:w.is_basket)?Object(u.jsx)(s.a,{className:"sub",size:"small",variant:"contained",onClick:function(){var e;return Q(null===H||void 0===H||null===(e=H.exercise)||void 0===e?void 0:e.id)},children:"- \u79fb\u9664"}):Object(u.jsx)(s.a,{className:"add",size:"small",variant:"contained",onClick:function(){var e,t;return R(null===H||void 0===H||null===(e=H.exercise)||void 0===e?void 0:e.id,null===H||void 0===H||null===(t=H.exercise)||void 0===t?void 0:t.type)},children:"+ \u7ec4\u5377"})})]})]})}),Object(u.jsxs)("div",{className:"samelist",children:[Object(u.jsxs)("div",{className:"top_box",children:[Object(u.jsx)("div",{className:"left_warp",children:"\u540c\u7c7b\u578b\u9898\u76ee"}),Object(u.jsxs)("div",{className:"right_warp",onClick:function(){console.log("batchClick");var e=J;e++,V(e),K(e)},children:[Object(u.jsx)("img",{className:"refsh_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/refsh_icon.png",alt:"refsh_icon"}),"\u6362\u4e00\u6279"]})]}),Object(u.jsx)("div",{className:"body_box",children:0===(null===H||void 0===H||null===(k=H.exerciseList)||void 0===k||null===(T=k.data)||void 0===T?void 0:T.length)?Object(u.jsx)("div",{style:{textAlign:"center",color:"#E50304"},children:"\u6ca1\u6709\u627e\u5230\u540c\u7c7b\u578b\u9898\u76ee"}):null===H||void 0===H||null===(C=H.exerciseList)||void 0===C||null===(E=C.data)||void 0===E?void 0:E.map((function(e,t){var n;return Object(u.jsx)(f.a,{level:null===e||void 0===e?void 0:e.level,exercises_title:null===e||void 0===e||null===(n=e.get_question_category)||void 0===n?void 0:n.title,content_all:null===e||void 0===e?void 0:e.content_all,isanswer:null===e||void 0===e?void 0:e.isanswer,knowName:null===e||void 0===e?void 0:e.knowName,answer:null===e||void 0===e?void 0:e.answer,analysis:null===e||void 0===e?void 0:e.analysis,update_time:null===e||void 0===e?void 0:e.update_time,is_basket:null===e||void 0===e?void 0:e.is_basket,onSetAnswer:function(){return function(e){var t=Object(l.a)({},H);t.exerciseList.data[e].isanswer=!t.exerciseList.data[e].isanswer,A(t)}(t)},answerClick:function(){return t=null===e||void 0===e?void 0:e.id,void K(t);var t},removeClick:function(){return Q(null===e||void 0===e?void 0:e.id)},compositionClick:function(){return R(null===e||void 0===e?void 0:e.id,null===e||void 0===e?void 0:e.type)}},null===e||void 0===e?void 0:e.id)}))})]}),Object(u.jsx)(h.a,{props:e})]})}t.default=Object(b.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setData:function(t){var n={type:p.c,value:t};e(n)},addtopicData:function(t){var n={type:p.a,value:t};e(n)},subtopicData:function(t){var n={type:p.e,value:t};e(n)},settopicData:function(t){var n={type:p.d,value:t};e(n)}}}))(Object(v.memo)(x))}}]);