(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[21],{185:function(e,t,n){"use strict";n.d(t,"n",(function(){return a})),n.d(t,"m",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"o",(function(){return b})),n.d(t,"p",(function(){return m})),n.d(t,"q",(function(){return p})),n.d(t,"b",(function(){return v})),n.d(t,"j",(function(){return f})),n.d(t,"r",(function(){return h})),n.d(t,"i",(function(){return O})),n.d(t,"h",(function(){return x})),n.d(t,"f",(function(){return g})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return _}));var c=n(190),r=n(196),s=n.n(r);function a(e){return Object(c.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function i(e){return Object(c.a)({url:"/getExercisesDetail",method:"GET",params:e})}function o(e){return Object(c.a)({url:"/addExamBasket",method:"POST",data:s.a.stringify(e)})}function u(e){return Object(c.a)({url:"/delExamBasket",method:"POST",data:s.a.stringify(e)})}function l(e){return Object(c.a)({url:"/basketDetail",method:"GET",params:e})}function d(e){return Object(c.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(c.a)({url:"/clearExamBasket",method:"GET"})}function b(e){return Object(c.a)({url:"/getPapersExercises",method:"GET",params:e})}function m(e){return Object(c.a)({url:"/getPapersList",method:"GET",params:e})}function p(e){return Object(c.a)({url:"/paperToBased",method:"POST",data:s.a.stringify(e)})}function v(e){return Object(c.a)({url:"/addPapers",method:"POST",data:s.a.stringify(e)})}function f(e){return Object(c.a)({url:"/editPapers",method:"POST",data:s.a.stringify(e)})}function h(e){return Object(c.a)({url:"/paperToBasket",method:"GET",params:e})}function O(e){return Object(c.a)({url:"/editBasketSort",method:"GET",params:e})}function x(e){return Object(c.a)({url:"/editBasketScore",method:"GET",params:e})}function g(e){return Object(c.a)({url:"/delTeacherExam",method:"GET",params:e})}function y(e){return Object(c.a)({url:"/editTypeBasketSort",method:"GET",params:e})}function _(e){return Object(c.a)({url:"/getChapterExercises",method:"GET",params:e})}},197:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return s}))},201:function(e,t,n){"use strict";n(184);var c=n(183),r=n(186),s=n.n(r),a=(n(189),n(64)),i=n(187),o=n(188),u=n(9),l=n(0),d=(n(202),n(65)),j=n(29),b=n(185);function m(e){var t,n=e.volumeTopicCount,r=e.props,d=e.settopicData,j=r.history,m=Object(l.useState)({}),p=Object(o.a)(m,2),v=p[0],f=p[1];Object(l.useEffect)((function(){return O(),function(){}}),[n]);var h=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)();case 2:t=e.sent,n=t.code,c=t.msg,200===n?(a.b.success(c),O()):a.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)();case 2:t=e.sent,n=t.code,c=t.data,200==n&&(f(c),r=null===c||void 0===c?void 0:c.basketCount,d(r));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){j.push("/main/mypaper")},g=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(b.g)({type:t});case 3:n=e.sent,c=n.code,r=n.msg,200===c?(O(),a.b.success(r)):a.b.error(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"AI_floatBox",children:[Object(u.jsxs)("div",{className:"top_float_warp",onClick:x,children:[Object(u.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(u.jsxs)("span",{className:"count",children:[Object(u.jsx)("em",{children:n}),"/40"]}),Object(u.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(u.jsx)("img",{className:"arrow_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon"}),Object(u.jsxs)("div",{className:"unfold",children:[Object(u.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(u.jsx)("span",{children:null===v||void 0===v?void 0:v.basketCount}),"\uff09"]}),Object(u.jsx)("div",{className:"typeList",children:null===v||void 0===v||null===(t=v.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(u.jsxs)("div",{className:"numdel",children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(u.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return g(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(u.jsx)("div",{className:"empty",onClick:h,children:"\u6e05\u7a7a\u8bd5\u9898"}),Object(u.jsx)(c.a,{type:"primary",className:"preview",block:!0,onClick:x,children:"\u8bd5\u5377\u9884\u89c8"})]})]})}t.a=Object(d.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var n={type:j.a,value:t};e(n)},subtopicData:function(t){var n={type:j.e,value:t};e(n)},settopicData:function(t){var n={type:j.d,value:t};e(n)}}}))(Object(l.memo)(m))},202:function(e,t,n){},224:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return a}));var c=n(190);function r(e){return Object(c.a)({url:"/getSchoolBasedList",method:"GET",params:e})}function s(e){return Object(c.a)({url:"/getSchoolBasedDetail",method:"GET",params:e})}function a(e){return Object(c.a)({url:"/teamAcademicReport",method:"GET",params:e})}},383:function(e,t,n){},448:function(e,t,n){"use strict";n.r(t);n(184);var c=n(183),r=(n(192),n(193)),s=n(197),a=n(186),i=n.n(a),o=(n(189),n(64)),u=n(187),l=n(188),d=n(9),j=n(0),b=(n(383),n(224)),m=n(191),p=n(65),v=n(29),f=n(201),h=n(185);function O(e){var t,n,a=e.history,p=e.location,v=e.homeInfo,O=e.addtopicData,x=e.subtopicData,g=e.volumeTopicCount,y=Object(j.useState)({}),_=Object(l.a)(y,2),w=_[0],N=_[1];Object(j.useEffect)((function(){return k(),function(){}}),[g]);var k=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)({id:Object(m.h)(p.search).id});case 2:t=e.sent,n=t.code,c=t.data,200===n&&(0===c.examsExercises.length?(o.b.error("\u672c\u8bd5\u5377\u65e0\u6570\u636e!"),a.go(-1)):(null===c||void 0===c||null===(r=c.examsExercises)||void 0===r||r.map((function(e){e.isanswer=!1})),N(c)));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var c,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)({exercises_id:[t]});case 2:c=e.sent,r=c.code,s=c.msg,200==r?(o.b.success(s),O(1)):o.b.error(s);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)({exercises_id:t});case 2:n=e.sent,c=n.code,r=n.msg,200==c?(o.b.success(r),x(1)):o.b.error(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{id:"Schoolbaseddetail",children:[Object(d.jsxs)(r.a,{className:"bread",separator:Object(d.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(d.jsxs)(r.a.Item,{style:{cursor:"pointer",color:"#222"},onClick:function(e){e.preventDefault(),a.push("/main/index")},children:[Object(d.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(d.jsx)(r.a.Item,{style:{cursor:"pointer",color:"#222"},children:"\u8bd5\u5377\u8be6\u60c5"}),Object(d.jsx)(r.a.Item,{style:{cursor:"pointer",color:"#222"},children:null===w||void 0===w||null===(t=w.based)||void 0===t?void 0:t.title})]}),Object(d.jsx)("div",{className:"paperList",children:null===w||void 0===w||null===(n=w.examsExercises)||void 0===n?void 0:n.map((function(e,t){var n,r,a,i,o,u,l,j,b;return Object(d.jsxs)("div",{className:"items",children:[Object(d.jsx)("div",{className:"top_title",children:Object(d.jsxs)("div",{className:"info_class",children:[Object(d.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(d.jsx)("span",{children:null===v||void 0===v||null===(n=v.teacher)||void 0===n?void 0:n.level[null===e||void 0===e||null===(r=e.get_exercises)||void 0===r?void 0:r.level]})]}),Object(d.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(a=e.get_exercises)||void 0===a||null===(i=a.get_question_category)||void 0===i?void 0:i.title]})]})}),Object(d.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(o=e.get_exercises)||void 0===o?void 0:o.content_all}}),Object(d.jsxs)("div",{className:"answerbox",style:{display:(null===e||void 0===e?void 0:e.isanswer)?"block":"none"},children:[Object(d.jsxs)("div",{className:"Tests",children:[Object(d.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(d.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(u=e.get_exercises)||void 0===u?void 0:u.knowName}})]}),Object(d.jsxs)("div",{className:"answer",children:[Object(d.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(d.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(l=e.get_exercises)||void 0===l?void 0:l.answer}})]}),Object(d.jsxs)("div",{className:"Parse",children:[Object(d.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(d.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(j=e.get_exercises)||void 0===j?void 0:j.analysis}})]})]}),Object(d.jsxs)("div",{className:"bot_btns",children:[Object(d.jsx)("div",{className:"left_box_warp",children:Object(d.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(m.g)(1e3*(null===e||void 0===e||null===(b=e.get_exercises)||void 0===b?void 0:b.update_time))]})}),Object(d.jsxs)("div",{className:"right_box_warp",children:[Object(d.jsxs)("div",{className:"answers",onClick:function(){return function(e){var t=Object(s.a)({},w);t.examsExercises[e].isanswer=!t.examsExercises[e].isanswer,N(t)}(t)},children:[Object(d.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(d.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(d.jsxs)("div",{className:"details",onClick:function(){var t,n;return n=null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.id,void window.open("/main/questiondetails?id=".concat(n))},children:[Object(d.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(d.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),(null===e||void 0===e?void 0:e.is_basket)?Object(d.jsx)(c.a,{className:"sub",variant:"contained",size:"small",onClick:function(){return E(null===e||void 0===e?void 0:e.exercises_id)},children:"- \u79fb\u9664"}):Object(d.jsx)(c.a,{className:"add",variant:"contained",size:"small",onClick:function(){var t;return T(null===e||void 0===e?void 0:e.exercises_id,null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.type)},children:"+ \u7ec4\u5377"})]})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(d.jsx)(f.a,{props:e})]})}t.default=Object(p.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setClass:function(t){var n={type:v.b,value:t};e(n)},addtopicData:function(t){var n={type:v.a,value:t};e(n)},subtopicData:function(t){var n={type:v.e,value:t};e(n)},settopicData:function(t){var n={type:v.d,value:t};e(n)}}}))(Object(j.memo)(O))}}]);