(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[31],{190:function(e,t,n){"use strict";n.d(t,"o",(function(){return a})),n.d(t,"n",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"p",(function(){return j})),n.d(t,"q",(function(){return b})),n.d(t,"r",(function(){return m})),n.d(t,"b",(function(){return p})),n.d(t,"j",(function(){return h})),n.d(t,"m",(function(){return v})),n.d(t,"s",(function(){return O})),n.d(t,"i",(function(){return f})),n.d(t,"h",(function(){return x})),n.d(t,"f",(function(){return y})),n.d(t,"k",(function(){return g})),n.d(t,"l",(function(){return _}));var c=n(188),s=(t=n(189),n.n(t));function a(e){return Object(c.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/getExercisesDetail",method:"GET",params:e})}function i(e){return Object(c.a)({url:"/addExamBasket",method:"POST",data:s.a.stringify(e)})}function l(e){return Object(c.a)({url:"/delExamBasket",method:"POST",data:s.a.stringify(e)})}function o(e){return Object(c.a)({url:"/basketDetail",method:"GET",params:e})}function u(e){return Object(c.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function d(){return Object(c.a)({url:"/clearExamBasket",method:"GET"})}function j(e){return Object(c.a)({url:"/getPapersExercises",method:"GET",params:e})}function b(e){return Object(c.a)({url:"/getPapersList",method:"GET",params:e})}function m(e){return Object(c.a)({url:"/paperToBased",method:"POST",data:s.a.stringify(e)})}function p(e){return Object(c.a)({url:"/addPapers",method:"POST",data:s.a.stringify(e)})}function h(e){return Object(c.a)({url:"/editPapers",method:"POST",data:s.a.stringify(e)})}function v(e){return Object(c.a)({url:"/getDetailPapers",method:"GET",params:e})}function O(e){return Object(c.a)({url:"/paperToBasket",method:"GET",params:e})}function f(e){return Object(c.a)({url:"/editBasketSort",method:"GET",params:e})}function x(e){return Object(c.a)({url:"/editBasketScore",method:"GET",params:e})}function y(e){return Object(c.a)({url:"/delTeacherExam",method:"GET",params:e})}function g(e){return Object(c.a)({url:"/editTypeBasketSort",method:"GET",params:e})}function _(e){return Object(c.a)({url:"/getChapterExercises",method:"GET",params:e})}},197:function(e,t,n){"use strict";function c(e,t){var n,c=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)),c}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){var c,s;s=n[c=t],c in(t=e)?Object.defineProperty(t,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[c]=s})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return s}))},207:function(e,t,n){"use strict";n(184);var c=n(183),s=n(186),a=n.n(s),r=(n(191),n(64)),i=n(187),l=n(185),o=n(9),u=n(0),d=(s=n(208),s=n(65),n(29)),j=n(190);t.a=Object(s.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){e({type:d.a,value:t})},subtopicData:function(t){e({type:d.e,value:t})},settopicData:function(t){e({type:d.d,value:t})}}}))(Object(u.memo)((function(e){var t,n=e.volumeTopicCount,s=e.settopicData,d=e.props.history,b=Object(u.useState)({}),m=(e=(h=Object(l.a)(b,2))[0],h[1]);Object(u.useEffect)((function(){return p(),function(){}}),[n]),b=function(){var e=Object(i.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)();case 2:n=(t=e.sent).msg,200===t.code?(r.b.success(n),p()):r.b.error(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var p=function(){var e=Object(i.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)();case 2:n=(t=e.sent).data,200==t.code&&(m(n),s(null==n?void 0:n.basketCount));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){d.push("/mypaper")},v=function(){var e=Object(i.a)(a.a.mark((function e(t){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(j.g)({type:t});case 3:c=(n=e.sent).msg,200===n.code?(p(),r.b.success(c)):r.b.error(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"AI_floatBox",children:[Object(o.jsxs)("div",{className:"top_float_warp",onClick:h,children:[Object(o.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(o.jsxs)("span",{className:"count",children:[Object(o.jsx)("em",{children:n}),"/40"]}),Object(o.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(o.jsx)("img",{className:"arrow_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon"}),Object(o.jsxs)("div",{className:"unfold",children:[Object(o.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(o.jsx)("span",{children:null==e?void 0:e.basketCount}),"\uff09"]}),Object(o.jsx)("div",{className:"typeList",children:null==e||null===(t=e.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(o.jsxs)("div",{className:"items",children:[Object(o.jsx)("div",{className:"type",children:null==e?void 0:e.type}),Object(o.jsxs)("div",{className:"numdel",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("em",{children:null==e?void 0:e.count}),"\u9898"]}),Object(o.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return v(e.id)}})]})]},null==e?void 0:e.id)}))}),Object(o.jsx)("div",{className:"empty",onClick:b,children:"\u6e05\u7a7a\u8bd5\u9898"}),Object(o.jsx)(c.a,{type:"primary",className:"preview",block:!0,onClick:h,children:"\u8bd5\u5377\u9884\u89c8"})]})]})})))},208:function(e,t,n){},386:function(e,t,n){},468:function(e,t,n){"use strict";n.r(t),n(184);var c=n(183),s=(n(195),n(196)),a=n(186),r=n.n(a),i=(n(191),n(64)),l=n(187),o=n(197),u=n(185),d=n(9),j=n(0),b=(a=n(386),n(190)),m=n(192),p=(a=n(65),n(29)),h=n(207);t.default=Object(a.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setData:function(t){e({type:p.c,value:t})},addtopicData:function(t){e({type:p.a,value:t})},subtopicData:function(t){e({type:p.e,value:t})},settopicData:function(t){e({type:p.d,value:t})}}}))(Object(j.memo)((function(e){var t,n,a,p,v,O,f,x,y,g,_,N,w,k=e.subtopicData,T=e.history,E=e.location,P=e.volumeTopicCount,C=e.addtopicData,S=e.homeInfo,D=Object(j.useState)({}),G=(D=Object(u.a)(D,2))[0],I=D[1],L=(D=Object(j.useState)(1),(D=Object(u.a)(D,2))[0]),B=D[1];Object(j.useEffect)((function(){return H(L),function(){}}),[P]);var H=function(){var e=Object(l.a)(r.a.mark((function e(){var t,n,c,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0<s.length&&void 0!==s[0]?s[0]:1,e.next=3,Object(b.n)({id:Object(m.h)(E.search).id,page:n});case 3:t=(c=e.sent).data,n=c.msg,200===c.code?(null!=t&&(null===(c=t.exerciseList)||void 0===c||null!==(c=c.data)&&void 0!==c&&c.map((function(e){e.isanswer=!1}))),I(t)):i.b.error(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.e)({exercises_id:t});case 2:c=(n=e.sent).msg,200==n.code?(i.b.success(c),k(1)):i.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(r.a.mark((function e(t,n){var c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)({exercises_id:[t]});case 2:s=(c=e.sent).msg,200==c.code?(i.b.success(s),C(1)):i.b.error(s);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{id:"Questiondetails",children:[Object(d.jsxs)(s.a,{className:"bread",separator:Object(d.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(d.jsxs)(s.a.Item,{className:"breaditem",color:"textPrimary",onClick:function(e){e.preventDefault(),T.push("/knowledge")},children:[Object(d.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position"}),"\u77e5\u8bc6\u70b9\u7ec4\u5377"]}),Object(d.jsx)(s.a.Item,{className:"breaditem",color:"textPrimary",children:"\u8bd5\u9898\u8be6\u60c5"})]}),Object(d.jsx)("div",{className:"content_body",children:Object(d.jsxs)("div",{className:"bor_warp",children:[Object(d.jsx)("div",{className:"content_all",dangerouslySetInnerHTML:{__html:null==G||null===(t=G.exercise)||void 0===t?void 0:t.content_all}}),Object(d.jsxs)("div",{className:"Tests",children:[Object(d.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(d.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null==G||null===(n=G.exercise)||void 0===n?void 0:n.knowName}})]}),Object(d.jsxs)("div",{className:"answer",children:[Object(d.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(d.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null==G||null===(a=G.exercise)||void 0===a?void 0:a.answer}})]}),Object(d.jsxs)("div",{className:"Parse",children:[Object(d.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(d.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null==G||null===(p=G.exercise)||void 0===p?void 0:p.analysis}})]}),Object(d.jsxs)("div",{className:"bot_warp",children:[Object(d.jsxs)("div",{className:"left_box",children:[Object(d.jsxs)("div",{className:"grade",children:["\u5e74\u7ea7\uff1a",null==G||null===(v=G.exercise)||void 0===v||null===(O=v.get_grade)||void 0===O?void 0:O.name]}),Object(d.jsxs)("div",{className:"type",children:["\u9898\u578b\uff1a",null==G||null===(f=G.exercise)||void 0===f||null===(x=f.get_question_category)||void 0===x?void 0:x.title]}),Object(d.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",null==S||null===(y=S.teacher)||void 0===y?void 0:y.level[null==G||null===(g=G.exercise)||void 0===g?void 0:g.level]]}),Object(d.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(m.g)(1e3*(null==G||null===(_=G.exercise)||void 0===_?void 0:_.update_time))]})]}),Object(d.jsx)("div",{className:"right_box",children:null!=G&&null!==(_=G.exercise)&&void 0!==_&&_.is_basket?Object(d.jsx)(c.a,{className:"sub",size:"small",variant:"contained",onClick:function(){var e;return M(null==G||null===(e=G.exercise)||void 0===e?void 0:e.id)},children:"- \u79fb\u9664"}):Object(d.jsx)(c.a,{className:"add",size:"small",variant:"contained",onClick:function(){var e,t;return q(null==G||null===(e=G.exercise)||void 0===e?void 0:e.id,null==G||null===(t=G.exercise)||void 0===t?void 0:t.type)},children:"+ \u7ec4\u5377"})})]})]})}),Object(d.jsxs)("div",{className:"samelist",children:[Object(d.jsxs)("div",{className:"top_box",children:[Object(d.jsx)("div",{className:"left_warp",children:"\u540c\u7c7b\u578b\u9898\u76ee"}),Object(d.jsxs)("div",{className:"right_warp",onClick:function(){var e=L;B(++e),H(e)},children:[Object(d.jsx)("img",{className:"refsh_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/refsh_icon.png",alt:"refsh_icon"}),"\u6362\u4e00\u6279"]})]}),Object(d.jsx)("div",{className:"body_box",children:null==G||null===(N=G.exerciseList)||void 0===N||null===(w=N.data)||void 0===w?void 0:w.map((function(e,t){var n,s;return Object(d.jsxs)("div",{className:"items",children:[Object(d.jsx)("div",{className:"top_title",children:Object(d.jsxs)("div",{className:"info_class",children:[Object(d.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(d.jsx)("span",{children:null==S||null===(n=S.teacher)||void 0===n?void 0:n.level[null==e?void 0:e.level]})]}),Object(d.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null==e||null===(s=e.get_question_category)||void 0===s?void 0:s.title]})]})}),Object(d.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null==e?void 0:e.content_all}}),Object(d.jsxs)("div",{className:"answerbox",style:{display:null!=e&&e.isanswer?"block":"none"},children:[Object(d.jsxs)("div",{className:"Tests",children:[Object(d.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(d.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null==e?void 0:e.knowName}})]}),Object(d.jsxs)("div",{className:"answer",children:[Object(d.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(d.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null==e?void 0:e.answer}})]}),Object(d.jsxs)("div",{className:"Parse",children:[Object(d.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(d.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null==e?void 0:e.analysis}})]})]}),Object(d.jsxs)("div",{className:"bot_btns",children:[Object(d.jsx)("div",{className:"left_box_warp",children:Object(d.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(m.g)(1e3*(null==e?void 0:e.update_time))]})}),Object(d.jsxs)("div",{className:"right_box_warp",children:[Object(d.jsxs)("div",{className:"answers",onClick:function(){return e=t,(n=Object(o.a)({},G)).exerciseList.data[e].isanswer=!n.exerciseList.data[e].isanswer,void I(n);var e,n},children:[Object(d.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(d.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(d.jsxs)("div",{className:"details",onClick:function(){H(null==e?void 0:e.id)},children:[Object(d.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(d.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),Object(d.jsx)(c.a,null!=e&&e.is_basket?{className:"sub",size:"small",variant:"contained",onClick:function(){return M(null==e?void 0:e.id)},children:"- \u79fb\u9664"}:{className:"add",size:"small",variant:"contained",onClick:function(){return q(null==e?void 0:e.id,null==e?void 0:e.type)},children:"+ \u7ec4\u5377"})]})]})]},null==e?void 0:e.id)}))})]}),Object(d.jsx)(h.a,{props:e})]})})))}}]);