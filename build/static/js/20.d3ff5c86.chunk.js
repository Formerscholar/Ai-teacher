(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[20],{192:function(e,t,n){"use strict";n.d(t,"i",(function(){return a})),n.d(t,"h",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return m})),n.d(t,"l",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"g",(function(){return v}));var c=n(189),s=n(187),i=n.n(s);function a(e){return Object(c.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/getExercisesDetail",method:"GET",params:e})}function o(e){return Object(c.a)({url:"/addExamBasket",method:"POST",data:i.a.stringify(e)})}function l(e){return Object(c.a)({url:"/delExamBasket",method:"POST",data:i.a.stringify(e)})}function u(e){return Object(c.a)({url:"/basketDetail",method:"GET",params:e})}function d(e){return Object(c.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(c.a)({url:"/clearExamBasket",method:"GET"})}function h(e){return Object(c.a)({url:"/getPapersExercises",method:"GET",params:e})}function m(e){return Object(c.a)({url:"/getPapersList",method:"GET",params:e})}function b(e){return Object(c.a)({url:"/paperToBased",method:"GET",params:e})}function p(e){return Object(c.a)({url:"/addPapers",method:"POST",data:i.a.stringify(e)})}function v(e){return Object(c.a)({url:"/getDetailPapers",method:"GET",params:e})}},197:function(e,t,n){"use strict";n(203);var c=n(205),s=n(10),i=n(0);n(198);function a(e){var t=e.children,n=e.isOpen,i=void 0!==n&&n,a=e.closeClick,r=e.title,o=void 0===r?"":r,l=e.width,u=void 0===l?"41.71rem":l,d=e.height,j=void 0===d?"23.5rem":d,h=j.split("rem")[0]-4.64;return Object(s.jsx)(c.a,{className:"T_modelbox",title:o,visible:i,onCancel:a,footer:null,centered:!0,width:u,height:j,bodyStyle:{height:h+"rem"},closeIcon:Object(s.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(i.memo)(a)},198:function(e,t,n){},213:function(e,t,n){"use strict";var c=n(193),s=n.n(c),i=(n(196),n(65)),a=n(194),r=n(195),o=n(10),l=n(0),u=(n(214),n(67)),d=n(33),j=n(192);function h(e){var t,n=e.volumeTopicCount,c=e.props,u=e.settopicData,d=c.history,h=Object(l.useState)({}),m=Object(r.a)(h,2),b=m[0],p=m[1],v=Object(l.useState)(!1),f=Object(r.a)(v,2),O=f[0],x=f[1];Object(l.useEffect)((function(){return y(),function(){}}),[n]);var g=function(){var e=Object(a.a)(s.a.mark((function e(){var t,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)();case 2:t=e.sent,n=t.code,c=t.msg,200===n?(i.b.success(c),y()):i.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.a)(s.a.mark((function e(){var t,n,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)();case 2:t=e.sent,n=t.code,c=t.data,200==n&&(p(c),i=null===c||void 0===c?void 0:c.basketCount,u(i));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(a.a)(s.a.mark((function e(t){var n,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(j.f)({type:t});case 3:n=e.sent,c=n.code,a=n.msg,200===c?(y(),i.b.success(a)):i.b.error(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"AI_floatBox",style:{backgroundColor:O&&"#BBBBBB"},children:[Object(o.jsxs)("div",{className:"top_float_warp",onClick:function(){localStorage.setItem("menuIndex",6),d.push("/main/mypaper")},children:[Object(o.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(o.jsxs)("span",{className:"count",children:[Object(o.jsx)("em",{children:n}),"/40"]}),Object(o.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(o.jsx)("img",{className:"arrow_icon",src:O?"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon.png":"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon",onClick:function(){x(!O)}}),O?Object(o.jsxs)("div",{className:"unfold",children:[Object(o.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(o.jsx)("span",{children:null===b||void 0===b?void 0:b.basketCount}),"\uff09"]}),Object(o.jsx)("div",{className:"typeList",children:null===b||void 0===b||null===(t=b.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(o.jsxs)("div",{className:"items",children:[Object(o.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(o.jsxs)("div",{className:"numdel",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(o.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return _(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(o.jsx)("div",{className:"empty",onClick:g,children:"\u6e05\u7a7a\u8bd5\u9898"})]}):""]})}t.a=Object(u.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var n={type:d.a,value:t};e(n)},subtopicData:function(t){var n={type:d.e,value:t};e(n)},settopicData:function(t){var n={type:d.d,value:t};e(n)}}}))(Object(l.memo)(h))},214:function(e,t,n){},235:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a}));var c=n(189);function s(e){return Object(c.a)({url:"/getSchoolBasedList",method:"GET",params:e})}function i(e){return Object(c.a)({url:"/getSchoolBasedDetail",method:"GET",params:e})}function a(e){return Object(c.a)({url:"/teamAcademicReport",method:"GET",params:e})}},398:function(e,t,n){},455:function(e,t,n){"use strict";n.r(t);n(186);var c=n(183),s=(n(200),n(201)),i=n(193),a=n.n(i),r=(n(196),n(65)),o=n(194),l=n(195),u=n(10),d=n(0),j=(n(398),n(235)),h=n(202),m=n(67),b=n(33),p=n(213),v=n(192),f=n(197);function O(e){var t,n,i=e.history,m=e.location,b=e.homeInfo,O=e.addtopicData,x=e.subtopicData,g=e.volumeTopicCount,y=Object(d.useState)({}),_=Object(l.a)(y,2),N=_[0],w=_[1],k=Object(d.useState)(!1),T=Object(l.a)(k,2),C=T[0],E=T[1],D=Object(d.useState)(""),S=Object(l.a)(D,2),B=S[0],I=S[1];Object(d.useEffect)((function(){return P(),function(){}}),[g]);var G=function(){E(!1)},P=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)({id:Object(h.h)(m.search).id});case 2:t=e.sent,n=t.code,c=t.data,200===n&&(0===c.examsExercises.length?(r.b.error("\u672c\u8bd5\u5377\u65e0\u6570\u636e!"),i.go(-1)):w(c));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(o.a)(a.a.mark((function e(t,n){var c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)({exercises_id:[t]});case 2:c=e.sent,s=c.code,i=c.msg,200==s?(r.b.success(i),O(1)):(I(i),E(!0));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)({exercises_id:t});case 2:n=e.sent,c=n.code,s=n.msg,200==c?(r.b.success(s),x(1)):(I(s),E(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"Schoolbaseddetail",children:[Object(u.jsxs)(s.a,{className:"bread",separator:Object(u.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(u.jsxs)(s.a.Item,{style:{cursor:"pointer",color:"#222"},onClick:function(e){e.preventDefault(),localStorage.setItem("menuIndex",0),i.push("/main/index")},children:[Object(u.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(u.jsx)(s.a.Item,{style:{cursor:"pointer",color:"#222"},onClick:function(e){e.preventDefault(),i.push("/main/schoolbased")},children:"\u6821\u672c\u8bd5\u5377"}),Object(u.jsx)(s.a.Item,{style:{cursor:"pointer",color:"#222"},children:"\u8bd5\u5377\u8be6\u60c5"}),Object(u.jsx)(s.a.Item,{style:{cursor:"pointer",color:"#222"},children:null===N||void 0===N||null===(t=N.based)||void 0===t?void 0:t.title})]}),Object(u.jsx)("div",{className:"paperList",children:null===N||void 0===N||null===(n=N.examsExercises)||void 0===n?void 0:n.map((function(e){var t,n,s,a,r,o;return Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("div",{className:"top_title",children:Object(u.jsxs)("div",{className:"info_class",children:[Object(u.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(u.jsx)("span",{children:null===b||void 0===b||null===(t=b.teacher)||void 0===t?void 0:t.level[null===e||void 0===e||null===(n=e.get_exercises)||void 0===n?void 0:n.level]})]}),Object(u.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(s=e.get_exercises)||void 0===s||null===(a=s.get_question_category)||void 0===a?void 0:a.title]})]})}),Object(u.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(r=e.get_exercises)||void 0===r?void 0:r.content_all}}),Object(u.jsxs)("div",{className:"bot_btns",children:[Object(u.jsx)("div",{className:"left_box_warp",children:Object(u.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(h.g)(1e3*(null===e||void 0===e||null===(o=e.get_exercises)||void 0===o?void 0:o.update_time))]})}),Object(u.jsxs)("div",{className:"right_box_warp",children:[Object(u.jsxs)("div",{className:"answers",children:[Object(u.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(u.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(u.jsxs)("div",{className:"details",onClick:function(){var t,n;return n=null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.id,void i.push("/main/questiondetails?id=".concat(n))},children:[Object(u.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(u.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),(null===e||void 0===e?void 0:e.is_basket)?Object(u.jsxs)(c.a,{className:"sub",variant:"contained",onClick:function(){return q(null===e||void 0===e?void 0:e.exercises_id)},children:[Object(u.jsx)("em",{children:"-"}),"\u79fb\u9664"]}):Object(u.jsxs)(c.a,{className:"add",variant:"contained",onClick:function(){var t;return L(null===e||void 0===e?void 0:e.exercises_id,null===e||void 0===e||null===(t=e.get_exercises)||void 0===t?void 0:t.type)},children:[Object(u.jsx)("em",{children:"+"}),"\u7ec4\u5377"]})]})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(u.jsx)(p.a,{props:e}),Object(u.jsx)(f.a,{isOpen:C,title:" ",closeClick:G,width:"41.71rem",height:"22.14rem",children:Object(u.jsxs)("div",{id:"tmodelbox",children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("img",{className:"notice",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/notice.png",alt:"notice"}),Object(u.jsx)("span",{children:"\u64cd\u4f5c\u5931\u8d25"})]}),Object(u.jsx)("div",{className:"body_text",children:B}),Object(u.jsx)(c.a,{type:"primary",className:"btn",onClick:G,children:"\u6211\u77e5\u9053\u4e86"})]})})]})}t.default=Object(m.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setClass:function(t){var n={type:b.b,value:t};e(n)},addtopicData:function(t){var n={type:b.a,value:t};e(n)},subtopicData:function(t){var n={type:b.e,value:t};e(n)},settopicData:function(t){var n={type:b.d,value:t};e(n)}}}))(Object(d.memo)(O))}}]);