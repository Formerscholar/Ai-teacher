(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[27],{191:function(e,t,n){"use strict";n.d(t,"p",(function(){return a})),n.d(t,"o",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"q",(function(){return b})),n.d(t,"r",(function(){return j})),n.d(t,"s",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"j",(function(){return f})),n.d(t,"m",(function(){return h})),n.d(t,"t",(function(){return O})),n.d(t,"i",(function(){return x})),n.d(t,"h",(function(){return g})),n.d(t,"f",(function(){return y})),n.d(t,"k",(function(){return w})),n.d(t,"l",(function(){return _})),n.d(t,"n",(function(){return N}));var r=n(189),c=n(190),s=n.n(c);function a(e){return Object(r.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function i(e){return Object(r.a)({url:"/getExercisesDetail",method:"GET",params:e})}function o(e){return Object(r.a)({url:"/addExamBasket",method:"POST",data:s.a.stringify(e)})}function u(e){return Object(r.a)({url:"/delExamBasket",method:"POST",data:s.a.stringify(e)})}function l(e){return Object(r.a)({url:"/basketDetail",method:"GET",params:e})}function d(e){return Object(r.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function p(){return Object(r.a)({url:"/clearExamBasket",method:"GET"})}function b(e){return Object(r.a)({url:"/getPapersExercises",method:"GET",params:e})}function j(e){return Object(r.a)({url:"/getPapersList",method:"GET",params:e})}function m(e){return Object(r.a)({url:"/paperToBased",method:"POST",data:s.a.stringify(e)})}function v(e){return Object(r.a)({url:"/addPapers",method:"POST",data:s.a.stringify(e)})}function f(e){return Object(r.a)({url:"/editPapers",method:"POST",data:s.a.stringify(e)})}function h(e){return Object(r.a)({url:"/getDetailPapers",method:"GET",params:e})}function O(e){return Object(r.a)({url:"/paperToBasket",method:"GET",params:e})}function x(e){return Object(r.a)({url:"/editBasketSort",method:"GET",params:e})}function g(e){return Object(r.a)({url:"/editBasketScore",method:"GET",params:e})}function y(e){return Object(r.a)({url:"/delTeacherExam",method:"GET",params:e})}function w(e){return Object(r.a)({url:"/editTypeBasketSort",method:"GET",params:e})}function _(e){return Object(r.a)({url:"/getChapterExercises",method:"GET",params:e})}function N(e){return Object(r.a)({url:"/getExerciseAnswer",method:"GET",params:e})}},197:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return s}))},208:function(e,t,n){"use strict";n(185);var r=n(184),c=n(187),s=n.n(c),a=(n(192),n(64)),i=n(188),o=n(183),u=n(7),l=n(0),d=(n(209),n(65)),p=n(29),b=n(191);function j(e){var t,n=e.volumeTopicCount,c=e.props,d=e.settopicData,p=c.history,j=Object(l.useState)({}),m=Object(o.a)(j,2),v=m[0],f=m[1];Object(l.useEffect)((function(){return O(),function(){}}),[n]);var h=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)();case 2:t=e.sent,n=t.code,r=t.msg,200===n?(a.b.success(r),O()):a.b.error(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)();case 2:t=e.sent,n=t.code,r=t.data,200==n&&(f(r),c=null===r||void 0===r?void 0:r.basketCount,d(c));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){p.push("/mypaper")},g=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(b.g)({type:t});case 3:n=e.sent,r=n.code,c=n.msg,200===r?(O(),a.b.success(c)):a.b.error(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"AI_floatBox",children:[Object(u.jsxs)("div",{className:"top_float_warp",onClick:x,children:[Object(u.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(u.jsxs)("span",{className:"count",children:[Object(u.jsx)("em",{children:n}),"/40"]}),Object(u.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(u.jsx)("img",{className:"arrow_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon"}),Object(u.jsxs)("div",{className:"unfold",children:[Object(u.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(u.jsx)("span",{children:null===v||void 0===v?void 0:v.basketCount}),"\uff09"]}),Object(u.jsx)("div",{className:"typeList",children:null===v||void 0===v||null===(t=v.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(u.jsxs)("div",{className:"numdel",children:[Object(u.jsxs)("span",{children:[Object(u.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(u.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return g(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(u.jsx)("div",{className:"empty",onClick:h,children:"\u6e05\u7a7a\u8bd5\u9898"}),Object(u.jsx)(r.a,{type:"primary",className:"preview",block:!0,onClick:x,children:"\u8bd5\u5377\u9884\u89c8"})]})]})}t.a=Object(d.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var n={type:p.a,value:t};e(n)},subtopicData:function(t){var n={type:p.e,value:t};e(n)},settopicData:function(t){var n={type:p.d,value:t};e(n)}}}))(Object(l.memo)(j))},209:function(e,t,n){},226:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return a}));var r=n(189);function c(e){return Object(r.a)({url:"/getSchoolBasedList",method:"GET",params:e})}function s(e){return Object(r.a)({url:"/getSchoolBasedDetail",method:"GET",params:e})}function a(e){return Object(r.a)({url:"/teamAcademicReport",method:"GET",params:e})}},401:function(e,t,n){},486:function(e,t,n){"use strict";n.r(t);n(185);var r=n(184),c=(n(195),n(196)),s=n(197),a=n(187),i=n.n(a),o=(n(192),n(64)),u=n(188),l=n(183),d=n(7),p=n(0),b=(n(401),n(226)),j=n(193),m=n(65),v=n(29),f=n(208),h=n(191);function O(e){var t,n,a=e.history,m=(e.location,e.homeInfo),v=e.addtopicData,O=e.subtopicData,x=e.volumeTopicCount,g=e.match,y=Object(p.useState)({}),w=Object(l.a)(y,2),_=w[0],N=w[1];Object(p.useEffect)((function(){return k(),function(){}}),[x]);var k=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)({id:g.params.id});case 2:t=e.sent,n=t.code,r=t.data,200===n&&(0===r.examsExercises.length?(o.b.error("\u672c\u8bd5\u5377\u65e0\u6570\u636e!"),a.go(-1)):(null===r||void 0===r||null===(c=r.examsExercises)||void 0===c||c.map((function(e){e.isanswer=!1})),N(r)));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,c,a,u,l,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(s.a)({},_),(c=r.examsExercises[t]).isanswer){e.next=12;break}if(void 0!==(a=c.get_exercises).knowName||void 0!==a.answer||void 0!==a.analysis){e.next=12;break}return e.next=7,Object(h.n)({id:n});case 7:u=e.sent,l=u.code,d=u.data,p=u.msg,200===l?(a.knowName=d.exercise.knowName,a.answer=d.exercise.answer,a.analysis=d.exercise.analysis):o.b.error(p);case 12:c.isanswer=!r.examsExercises[t].isanswer,N(r);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(i.a.mark((function e(t,n){var r,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)({exercises_id:[t]});case 2:r=e.sent,c=r.code,s=r.msg,200==c?(o.b.success(s),v(1)):o.b.error(s);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)({exercises_id:t});case 2:n=e.sent,r=n.code,c=n.msg,200==r?(o.b.success(c),O(1)):o.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{id:"Schoolbaseddetail",children:[Object(d.jsxs)(c.a,{className:"bread",separator:Object(d.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(d.jsxs)(c.a.Item,{style:{cursor:"pointer",color:"#222"},onClick:function(e){e.preventDefault(),a.push("/index")},children:[Object(d.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(d.jsx)(c.a.Item,{style:{cursor:"pointer",color:"#222"},onClick:function(e){e.preventDefault(),a.push("/schoolbased")},children:"\u6821\u672c\u8bd5\u5377"}),Object(d.jsx)(c.a.Item,{style:{cursor:"pointer",color:"#222"},children:null===_||void 0===_||null===(t=_.based)||void 0===t?void 0:t.title})]}),Object(d.jsx)("div",{className:"paperList",children:null===_||void 0===_||null===(n=_.examsExercises)||void 0===n?void 0:n.map((function(e,t){var n,c,s,a,i,o,u,l;return Object(d.jsxs)("div",{className:"items",children:[Object(d.jsx)("div",{className:"top_title",children:Object(d.jsxs)("div",{className:"info_class",children:[Object(d.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(d.jsx)("span",{children:null===m||void 0===m||null===(n=m.teacher)||void 0===n?void 0:n.level[null===e||void 0===e||null===(c=e.get_exercises)||void 0===c?void 0:c.level]})]}),Object(d.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(s=e.get_exercises)||void 0===s?void 0:s.title]})]})}),Object(d.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(a=e.get_exercises)||void 0===a?void 0:a.content_all}}),Object(d.jsxs)("div",{className:"answerbox",style:{display:(null===e||void 0===e?void 0:e.isanswer)?"block":"none"},children:[Object(d.jsxs)("div",{className:"Tests",children:[Object(d.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(d.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(i=e.get_exercises)||void 0===i?void 0:i.knowName}})]}),Object(d.jsxs)("div",{className:"answer",children:[Object(d.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(d.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(o=e.get_exercises)||void 0===o?void 0:o.answer}})]}),Object(d.jsxs)("div",{className:"Parse",children:[Object(d.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(d.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(u=e.get_exercises)||void 0===u?void 0:u.analysis}})]})]}),Object(d.jsxs)("div",{className:"bot_btns",children:[Object(d.jsx)("div",{className:"left_box_warp",children:Object(d.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(j.f)(1e3*(null===e||void 0===e||null===(l=e.get_exercises)||void 0===l?void 0:l.update_time))]})}),Object(d.jsxs)("div",{className:"right_box_warp",children:[Object(d.jsxs)("div",{className:"answers",onClick:function(){return T(t,null===e||void 0===e?void 0:e.exercises_id)},children:[Object(d.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(d.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(d.jsxs)("div",{className:"details",onClick:function(){var t,n;return n=null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.id,void window.open("/question/details?id=".concat(n))},children:[Object(d.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(d.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),(null===e||void 0===e?void 0:e.is_basket)?Object(d.jsx)(r.a,{className:"sub",variant:"contained",size:"small",onClick:function(){return C(null===e||void 0===e?void 0:e.exercises_id)},children:"- \u79fb\u9664"}):Object(d.jsx)(r.a,{className:"add",variant:"contained",size:"small",onClick:function(){var t;return E(null===e||void 0===e?void 0:e.exercises_id,null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.type)},children:"+ \u7ec4\u5377"})]})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(d.jsx)(f.a,{props:e})]})}t.default=Object(m.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setClass:function(t){var n={type:v.b,value:t};e(n)},addtopicData:function(t){var n={type:v.a,value:t};e(n)},subtopicData:function(t){var n={type:v.e,value:t};e(n)},settopicData:function(t){var n={type:v.d,value:t};e(n)}}}))(Object(p.memo)(O))}}]);