(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[36],{148:function(e,t,c){"use strict";c.d(t,"q",(function(){return i})),c.d(t,"p",(function(){return r})),c.d(t,"b",(function(){return l})),c.d(t,"f",(function(){return o})),c.d(t,"d",(function(){return d})),c.d(t,"h",(function(){return u})),c.d(t,"e",(function(){return j})),c.d(t,"r",(function(){return b})),c.d(t,"s",(function(){return m})),c.d(t,"t",(function(){return h})),c.d(t,"c",(function(){return v})),c.d(t,"k",(function(){return x})),c.d(t,"n",(function(){return p})),c.d(t,"u",(function(){return O})),c.d(t,"j",(function(){return f})),c.d(t,"i",(function(){return _})),c.d(t,"g",(function(){return g})),c.d(t,"l",(function(){return N})),c.d(t,"m",(function(){return y})),c.d(t,"o",(function(){return k})),c.d(t,"a",(function(){return w}));var n=c(146),s=c(147),a=c.n(s);function i(e){return Object(n.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function r(e){return Object(n.a)({url:"/getExercisesDetail",method:"GET",params:e})}function l(e){return Object(n.a)({url:"/addExamBasket",method:"POST",data:a.a.stringify(e)})}function o(e){return Object(n.a)({url:"/delExamBasket",method:"POST",data:a.a.stringify(e)})}function d(e){return Object(n.a)({url:"/basketDetail",method:"GET",params:e})}function u(e){return Object(n.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(n.a)({url:"/clearExamBasket",method:"GET"})}function b(e){return Object(n.a)({url:"/getPapersExercises",method:"GET",params:e})}function m(e){return Object(n.a)({url:"/getPapersList",method:"GET",params:e})}function h(e){return Object(n.a)({url:"/paperToBased",method:"POST",data:a.a.stringify(e)})}function v(e){return Object(n.a)({url:"/addPapers",method:"POST",data:a.a.stringify(e)})}function x(e){return Object(n.a)({url:"/editPapers",method:"POST",data:a.a.stringify(e)})}function p(e){return Object(n.a)({url:"/getDetailPapers",method:"GET",params:e})}function O(e){return Object(n.a)({url:"/paperToBasket",method:"GET",params:e})}function f(e){return Object(n.a)({url:"/editBasketSort",method:"GET",params:e})}function _(e){return Object(n.a)({url:"/editBasketScore",method:"GET",params:e})}function g(e){return Object(n.a)({url:"/delTeacherExam",method:"GET",params:e})}function N(e){return Object(n.a)({url:"/editTypeBasketSort",method:"GET",params:e})}function y(e){return Object(n.a)({url:"/getChapterExercises",method:"GET",params:e})}function k(e){return Object(n.a)({url:"/getExerciseAnswer",method:"GET",params:e})}function w(e){return Object(n.a)({url:"/academicReportKnowledgeDetail",method:"POST",data:a.a.stringify(e)})}},160:function(e,t,c){"use strict";c(161);var n=c(168),s=c(13),a=c(0);c(163);function i(e){var t=e.children,c=e.isOpen,a=void 0!==c&&c,i=e.closeClick,r=e.title,l=void 0===r?"":r,o=e.width,d=void 0===o?"41.71rem":o,u=e.height,j=void 0===u?"23.5rem":u,b=j.split("rem")[0]-4.64;return Object(s.jsx)(n.a,{className:"T_modelbox",title:l,visible:a,onCancel:i,footer:null,centered:!0,width:d,height:j,bodyStyle:{height:b+"rem"},closeIcon:Object(s.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(a.memo)(i)},163:function(e,t,c){},298:function(e,t,c){},341:function(e,t,c){"use strict";c.r(t);c(174);var n=c(177),s=(c(143),c(142)),a=(c(293),c(331)),i=(c(295),c(332)),r=(c(296),c(330)),l=(c(151),c(152)),o=c(1),d=c(20),u=c.n(d),j=(c(149),c(66)),b=c(32),m=c(5),h=(c(172),c(176)),v=c(13),x=c(0),p=(c(298),c(148)),O=c(65),f=c(28),_=c(160),g=c(145),N=h.a.TextArea;function y(e){var t,c,d,O,f=e.history,y=e.location,k=e.homeInfo,w=e.subtopicData,T=e.volumeTopicCount,C=e.settopicData,S=Object(g.g)(y.search),E=Object(x.useState)([]),D=Object(m.a)(E,2),G=D[0],P=D[1],I=Object(x.useState)({}),B=Object(m.a)(I,2),L=B[0],M=B[1],q=Object(x.useState)("".concat(Object(g.f)(new Date,!1,1),"\u521d\u4e2d\u6570\u5b66\u8bd5\u5377")),H=Object(m.a)(q,2),J=H[0],A=H[1],K=Object(x.useState)(""),z=Object(m.a)(K,2),F=z[0],Q=z[1],R=Object(x.useState)(""),U=Object(m.a)(R,2),V=U[0],W=U[1],X=Object(x.useState)(""),Y=Object(m.a)(X,2),Z=Y[0],$=Y[1],ee=Object(x.useState)(0),te=Object(m.a)(ee,2),ce=te[0],ne=te[1],se=Object(x.useState)(0),ae=Object(m.a)(se,2),ie=ae[0],re=ae[1],le=Object(x.useState)("\u7b2c\u2160\u5377\uff08\u9009\u62e9\u9898\uff09"),oe=Object(m.a)(le,2),de=oe[0],ue=oe[1],je=Object(x.useState)("\u7b2cI\u5377\u7684\u6ce8\u91ca"),be=Object(m.a)(je,2),me=be[0],he=be[1],ve=Object(x.useState)(!1),xe=Object(m.a)(ve,2),pe=xe[0],Oe=xe[1],fe=Object(x.useState)(!1),_e=Object(m.a)(fe,2),ge=_e[0],Ne=_e[1],ye=Object(x.useState)(""),ke=Object(m.a)(ye,2),we=(ke[0],ke[1]),Te=Object(x.useState)(2),Ce=Object(m.a)(Te,2),Se=Ce[0],Ee=Ce[1],De=Object(x.useState)([]),Ge=Object(m.a)(De,2),Pe=Ge[0],Ie=Ge[1];Object(x.useEffect)((function(){return Be(),function(){}}),[T]),Object(x.useEffect)((function(){var e=window.MathJax;e&&e.typesetPromise&&e.typesetPromise()}));var Be=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c,n,s,a,i,r,l,o,d,b,m,h,v,x,O,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.r)({id:S.id});case 2:t=e.sent,c=t.code,n=t.data,s=t.msg,200===c?(null===n||void 0===n||null===(a=n.exercisesData)||void 0===a||a.map((function(e){null===e||void 0===e||e.map((function(e){e.isanswer=!1}))})),M(n),Ie([null===n||void 0===n||null===(i=n.exercisesData[0][0])||void 0===i?void 0:i.type]),S.id&&(v=[],console.log("\u521d\u59cb\u5316\u8bd5\u5377\u4fe1\u606f",null===n||void 0===n?void 0:n.exam),A(null===n||void 0===n||null===(r=n.exam)||void 0===r?void 0:r.title),(null===n||void 0===n||null===(l=n.exam)||void 0===l?void 0:l.be_careful)&&(v.push("6"),$(null===n||void 0===n||null===(x=n.exam)||void 0===x?void 0:x.be_careful)),(null===n||void 0===n||null===(o=n.exam)||void 0===o?void 0:o.exam_about)&&(v.push("3"),W(null===n||void 0===n||null===(O=n.exam)||void 0===O?void 0:O.exam_about)),(null===n||void 0===n||null===(d=n.exam)||void 0===d?void 0:d.is_fill_in)&&v.push("5"),(null===n||void 0===n||null===(b=n.exam)||void 0===b?void 0:b.is_question_score)&&v.push("8"),(null===n||void 0===n||null===(m=n.exam)||void 0===m?void 0:m.is_total_score)&&v.push("2"),(null===n||void 0===n||null===(h=n.exam)||void 0===h?void 0:h.name)&&(v.push("1"),Q(null===n||void 0===n||null===(f=n.exam)||void 0===f?void 0:f.name)),P(v))):(M(n),j.b.error(s));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var Le=function(){var e=Object(b.a)(u.a.mark((function e(t,c){var n,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.h)({type:t});case 2:n=e.sent,s=n.code,a=n.msg,200===s?(w(c),j.b.success(a)):j.b.error(a);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),Me=function(){Ne(!0)},qe=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.l)({type:Pe,sort:Se});case 2:t=e.sent,c=t.code,n=t.msg,200===c?(Be(),Ne(!1),j.b.success(n)):j.b.error(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),He=function(e){var t=e.target.value;Q(t)},Je=function(e){var t=e.target.value;W(t)},Ae=function(e){var t=e.target.value;$(t)},Ke=function(e){var t=e.target.value;ue(t)},ze=function(e){var t=e.target.value;he(t)};var Fe=function(){var e=Object(b.a)(u.a.mark((function e(t){var c,n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.f)({exercises_id:t});case 2:c=e.sent,n=c.code,s=c.msg,200==n?(j.b.success(s),w(1)):j.b.error(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Qe=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.i)({id:ce,score:ie});case 2:t=e.sent,c=t.code,n=t.msg,200===c?(j.b.success(n),Be()):j.b.error(n),Oe(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.e)();case 2:t=e.sent,c=t.code,n=t.msg,200===c?(C(0),j.b.success(n)):j.b.error(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(b.a)(u.a.mark((function e(t,c){var n,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.j)({id:c,sort:t});case 2:n=e.sent,s=n.code,a=n.msg,200===s?(j.b.success(a),Be()):j.b.error(a);case 6:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),Ve=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c,n,s,a,i,r,l,o,d,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=0,n=0,s=0,G.map((function(e){switch(e){case"5":c=1;break;case"2":n=1;break;case"8":s=1}})),a=[{parent_id:0,exercises_id:0,title:"\u7b2c\u2160\u5377\uff08\u9009\u62e9\u9898\uff09",score:0}],null===L||void 0===L||null===(t=L.exercisesData)||void 0===t||t.map((function(e,t){a.push({parent_id:1,exercises_id:0,title:"".concat(t+1,"\u3001").concat(e[0].typeName,"\uff08\u5171").concat(e.length,"\u9898\uff1b\u5171").concat(e[0].countScore,"\u5206\uff09"),score:0}),e.map((function(e,t){a.push({parent_id:2,exercises_id:e.exercises.id,title:t+1,score:e.score})}))})),console.log(a),!S.id){e.next=14;break}return e.next=8,Object(p.k)({title:J,name:F,exam_about:V,be_careful:Z,is_fill_in:c,is_total_score:n,is_question_score:s,exercises:a,id:S.id});case 8:i=e.sent,r=i.code,l=i.msg,200===r?(j.b.success(l),f.push("/mypaper/list")):j.b.error(l),e.next=20;break;case 14:return e.next=16,Object(p.c)({title:J,name:F,exam_about:V,be_careful:Z,is_fill_in:c,is_total_score:n,is_question_score:s,exercises:a});case 16:o=e.sent,d=o.code,b=o.msg,200===d?(j.b.success(b),f.push("/mypaper/list")):j.b.error(b);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{id:"Mypaper",children:[Object(v.jsxs)(l.a,{className:"bread",separator:Object(v.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(v.jsxs)(l.a.Item,{className:"breaditem",color:"textPrimary",onClick:function(e){e.preventDefault(),f.push("/index")},children:[Object(v.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position"}),"\u9996\u9875"]}),Object(v.jsx)(l.a.Item,{className:"breaditem",color:"textPrimary",onClick:function(){f.push("/mypaper/list")},children:"\u6211\u7684\u8bd5\u5377"}),Object(v.jsx)(l.a.Item,{className:"breaditem",color:"textPrimary",children:"\u8bd5\u5377\u7ec4\u5377"})]}),Object(v.jsxs)("div",{className:"Group_body",children:[Object(v.jsxs)("div",{className:"left_box",children:[null===G||void 0===G?void 0:G.map((function(e){return"0"==e&&Object(v.jsx)("div",{className:"Packaging",children:Object(v.jsx)("img",{className:"peal_line",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/peal_line.png",alt:"peal_line"})})})),Object(v.jsxs)("div",{className:"main",children:[Object(v.jsx)(h.a,{className:"Papertitle",bordered:!1,placeholder:"2020\u5e7411\u670813\u65e5\u521d\u4e2d\u6570\u5b66\u8bd5\u5377",value:J,onChange:function(e){var t=e.target.value;A(t)}}),null===G||void 0===G?void 0:G.map((function(e){return"1"==e&&Object(v.jsx)(h.a,{className:"subhead",placeholder:"\u8bd5\u5377\u526f\u6807\u9898",bordered:!1,value:F,onChange:He})})),null===G||void 0===G?void 0:G.map((function(e){return"3"==e&&Object(v.jsx)(h.a,{className:"prompt",placeholder:"\u8003\u8bd5\u8303\u56f4\uff1axxx\uff1b\u8003\u8bd5\u65f6\u95f4\uff1a100\u5206\u949f\uff1b\u547d\u9898\u4eba\uff1axxx",bordered:!1,value:V,onChange:Je})})),null===G||void 0===G?void 0:G.map((function(e){return"5"==e&&Object(v.jsx)("div",{className:"examineeInfo",children:"\u5b66\u6821:___________\u59d3\u540d\uff1a___________\u73ed\u7ea7\uff1a___________\u8003\u53f7\uff1a___________"})})),null===G||void 0===G?void 0:G.map((function(e){return"2"==e&&Object(v.jsx)("div",{className:"TotalScore",children:Object(v.jsxs)("table",{border:"1",cellspacing:"0",cellpadding:"0",children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"\u9898\u53f7"}),Object(v.jsx)("td",{children:"\u4e00"}),Object(v.jsx)("td",{children:"\u4e8c"}),Object(v.jsx)("td",{children:"\u4e09"}),Object(v.jsx)("td",{children:"\u603b\u5206"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"\u5f97\u5206"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{})]})]})})})),null===G||void 0===G?void 0:G.map((function(e){return"6"==e&&Object(v.jsxs)("div",{className:"markedwords",children:[Object(v.jsxs)("div",{className:"title",children:[Object(v.jsx)("span",{children:"*"}),"\u6ce8\u610f\u4e8b\u9879\uff1a"]}),Object(v.jsx)(N,{className:"context",autoSize:!0,placeholder:"1\uff0e\u7b54\u9898\u524d\u586b\u5199\u597d\u81ea\u5df1\u7684\u59d3\u540d\u3001\u73ed\u7ea7\u3001\u8003\u53f7\u7b49\u4fe1\u606f\r 2\uff0e\u8bf7\u5c06\u7b54\u6848\u6b63\u786e\u586b\u5199\u5728\u7b54\u9898\u5361\u4e0a",bordered:!1,value:Z,onChange:Ae})]})})),null===G||void 0===G?void 0:G.map((function(e){return"7"==e&&Object(v.jsxs)("div",{className:"subsectionhead",children:[Object(v.jsx)(h.a,{className:"title_warp",bordered:!1,value:de,onChange:Ke}),Object(v.jsx)(h.a,{className:"annotation",bordered:!1,value:me,onChange:ze})]})})),null===L||void 0===L||null===(t=L.exercisesData)||void 0===t?void 0:t.map((function(e,t){return Object(v.jsxs)("div",{className:"subsectionbody",children:[Object(v.jsxs)("div",{className:"goaltable",children:[null===G||void 0===G?void 0:G.map((function(e){return"8"==e&&Object(v.jsxs)("table",{border:"1",cellspacing:"0",cellpadding:"0",children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:"\u8bc4\u5377\u4eba"}),Object(v.jsx)("td",{children:"\u5f97\u5206"})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{}),Object(v.jsx)("td",{})]})]})})),Object(v.jsxs)("div",{className:"title_box",children:[t+1,"\u3001",e[0].typeName,"\uff08\u5171",e.length,"\u9898\uff1b\u5171",e[0].countScore,"\u5206\uff09"]})]}),Object(v.jsx)("div",{className:"titlelists",children:null===e||void 0===e?void 0:e.map((function(e,c){var n,s,a,i;return Object(v.jsxs)("div",{className:"items",children:[Object(v.jsxs)("div",{className:"bot_btns",children:[Object(v.jsxs)("div",{className:"btn_item check_btn",onClick:function(){return function(e,t){var c=Object(o.a)({},L);c.exercisesData[e][t].isanswer=!c.exercisesData[e][t].isanswer,M(c)}(t,c)},children:[Object(v.jsx)("img",{className:"items_check",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_check.png",alt:"items_check"}),Object(v.jsx)("span",{className:"text",children:"\u67e5\u770b\u7b54\u6848"})]}),Object(v.jsxs)("div",{className:"btn_item set_btn",onClick:function(){return t=null===e||void 0===e?void 0:e.id,c=null===e||void 0===e?void 0:e.score,ne(t),Oe(!0),we(c),void re(c);var t,c},children:[Object(v.jsx)("img",{className:"items_set",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_set.png",alt:"items_set"}),Object(v.jsx)("span",{className:"text",children:"\u8bbe\u7f6e\u5f97\u5206"})]}),Object(v.jsxs)("div",{className:"btn_item moveup_btn",onClick:function(){return Ue(1,null===e||void 0===e?void 0:e.id)},children:[Object(v.jsx)("img",{className:"items_moveup",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_moveup.png",alt:"items_moveup"}),Object(v.jsx)("span",{className:"text",children:"\u4e0a\u79fb"})]}),Object(v.jsxs)("div",{className:"btn_item movedow_btn",onClick:function(){return Ue(2,null===e||void 0===e?void 0:e.id)},children:[Object(v.jsx)("img",{className:"items_movedown",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_movedown.png",alt:"items_movedown"}),Object(v.jsx)("span",{className:"text",children:"\u4e0b\u79fb"})]}),Object(v.jsxs)("div",{className:"btn_item delete_btn",onClick:function(){var t;return Fe(null===e||void 0===e||null===(t=e.exercises)||void 0===t?void 0:t.id)},children:[Object(v.jsx)("img",{className:"items_delete",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_delete.png",alt:"items_delete"}),Object(v.jsx)("span",{className:"text",children:"\u5220\u9664"})]})]}),Object(v.jsxs)("div",{className:"topbody",children:[c+1,".",Object(v.jsxs)("span",{className:"span",children:["\uff08",null===e||void 0===e?void 0:e.score,"\u5206\uff09"]}),Object(v.jsx)("span",{dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(n=e.exercises)||void 0===n?void 0:n.content_all}}),Object(v.jsxs)("div",{className:"answerbox",style:{display:(null===e||void 0===e?void 0:e.isanswer)?"block":"none"},children:[Object(v.jsxs)("div",{className:"Tests",children:[Object(v.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(v.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(s=e.exercises)||void 0===s?void 0:s.knowName}})]}),Object(v.jsxs)("div",{className:"answer",children:[Object(v.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(v.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(a=e.exercises)||void 0===a?void 0:a.answer}})]}),Object(v.jsxs)("div",{className:"Parse",children:[Object(v.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(v.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(i=e.exercises)||void 0===i?void 0:i.analysis}})]})]})]})]},c)}))})]},t)}))]})]}),Object(v.jsxs)("div",{className:"right_warp",children:[Object(v.jsxs)("div",{className:"right_top_box",children:[Object(v.jsxs)("div",{className:"title",children:[Object(v.jsx)("div",{className:"left_text",children:"\u8bd5\u5377\u7ed3\u6784\u8bbe\u7f6e"}),Object(v.jsx)("div",{className:"right_text",children:"\u666e\u901a\u6a21\u677f"})]}),Object(v.jsx)(r.a.Group,{className:"CheckboxGroup",style:{width:"100%"},onChange:function(e){P(e)},value:G,children:Object(v.jsxs)(a.a,{children:[Object(v.jsx)(i.a,{span:12,children:Object(v.jsx)(r.a,{value:"0",children:"\u5bc6\u5c01\u7ebf"})}),Object(v.jsx)(i.a,{span:12,children:Object(v.jsx)(r.a,{value:"1",children:"\u526f\u6807\u9898"})}),Object(v.jsx)(i.a,{span:12,children:Object(v.jsx)(r.a,{value:"2",children:"\u603b\u5206\u680f"})}),Object(v.jsx)(i.a,{span:12,children:Object(v.jsx)(r.a,{value:"3",children:"\u8bd5\u5377\u4fe1\u606f"})}),Object(v.jsx)(i.a,{span:12,children:Object(v.jsx)(r.a,{value:"5",children:"\u8003\u751f\u4fe1\u606f"})}),Object(v.jsx)(i.a,{span:12,children:Object(v.jsx)(r.a,{value:"6",children:"\u6ce8\u610f\u4e8b\u9879"})}),Object(v.jsx)(i.a,{span:12,children:Object(v.jsx)(r.a,{value:"7",children:"\u5206\u5377\u53ca\u6ce8\u91ca"})}),Object(v.jsx)(i.a,{span:12,children:Object(v.jsx)(r.a,{value:"8",children:"\u5927\u9898\u8bc4\u5206\u533a"})})]})})]}),Object(v.jsxs)("div",{className:"right_bot_box",children:[Object(v.jsx)("div",{className:"title_warp",children:"\u8bd5\u5377\u4fe1\u606f"}),Object(v.jsxs)("div",{className:"prompt_warp",children:[Object(v.jsxs)("div",{className:"prompt_warp_title",children:[Object(v.jsxs)("div",{className:"scores",children:["\u5206\u6570\uff1a",Object(v.jsxs)("span",{children:[function(){var e,t=0;return null===L||void 0===L||null===(e=L.exercisesData)||void 0===e||e.map((function(e,c){t+=e[0].countScore})),t}(),"\u5206"]})]}),Object(v.jsxs)("div",{className:"QuestionNumber",children:["\u9898\u6570\uff1a",Object(v.jsxs)("span",{children:[function(){var e,t=0;return null===L||void 0===L||null===(e=L.exercisesData)||void 0===e||e.map((function(e,c){t+=e.length})),t}(),"\u9898"]})]}),Object(v.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(v.jsx)("span",{children:null===k||void 0===k||null===(c=k.teacher)||void 0===c?void 0:c.level[null===L||void 0===L?void 0:L.level]})]})]}),null===L||void 0===L||null===(d=L.exercisesData)||void 0===d?void 0:d.map((function(e,t){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"title_box",children:[Object(v.jsxs)("div",{className:"left_title_text",children:[t+1,"\u3001",e[0].typeName]}),Object(v.jsxs)("div",{className:"right_title_btns",children:[Object(v.jsx)("div",{className:"sort_btn",onClick:Me,children:"\u6392\u5e8f"}),Object(v.jsx)("div",{className:"remove_btn",onClick:function(){var t;return Le(null===(t=e[0])||void 0===t?void 0:t.type,null===e||void 0===e?void 0:e.length)},children:"\u5220\u9664"})]})]},t),Object(v.jsx)("div",{className:"serialList",children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(v.jsx)("div",{className:"serialitem",children:t+1},t)}))})]})})),Object(v.jsxs)("div",{className:"operatebtns",children:[Object(v.jsx)(s.a,{type:"primary",className:"downbtn",onClick:Ve,children:"\u5b8c\u6210\u7ec4\u5377"}),Object(v.jsx)(s.a,{className:"continuebtn",onClick:function(){f.push("/knowledge")},children:"\u7ee7\u7eed\u9009\u9898"}),Object(v.jsx)(s.a,{className:"emptybtn",onClick:Re,children:"\u6e05\u7a7a\u8bd5\u9898"})]})]})]})]})]}),Object(v.jsx)(_.a,{isOpen:pe,title:"\u3010\u6e29\u99a8\u63d0\u793a\u3011",closeClick:function(){Oe(!1)},width:"41.71rem",height:"22.14rem",children:Object(v.jsxs)("div",{id:"tmodelbox",children:[Object(v.jsxs)("div",{className:"body_text crosbox",children:[Object(v.jsx)("span",{className:"span",children:"\u5206\u6570:"}),Object(v.jsx)(h.a,{type:"number",value:ie,onChange:function(e){re(e.target.value)}})]}),Object(v.jsx)(s.a,{type:"primary",className:"btn",onClick:Qe,children:"\u786e\u5b9a"})]})}),Object(v.jsx)(_.a,{isOpen:ge,title:"\u3010\u8bd5\u9898\u6392\u5e8f\u3011",closeClick:function(){Ne(!1)},width:"41.71rem",height:"22.14rem",children:Object(v.jsxs)("div",{id:"tmodelbox",className:"scroe",children:[Object(v.jsxs)("div",{className:"body",children:[Object(v.jsxs)("div",{className:"problemsorte",children:[Object(v.jsx)("div",{className:"text",children:"\u9700\u8981\u6392\u5e8f\u7684\u5927\u9898"}),Object(v.jsx)(r.a.Group,{style:{width:"100%"},value:Pe,onChange:function(e){Ie(e)},children:Object(v.jsx)(a.a,{children:null===L||void 0===L||null===(O=L.exercisesData)||void 0===O?void 0:O.map((function(e,t){var c,n;return Object(v.jsx)(r.a,{value:null===(c=e[0])||void 0===c?void 0:c.type,children:null===(n=e[0])||void 0===n?void 0:n.typeName},t)}))})})]}),Object(v.jsxs)("div",{className:"sortord",children:[Object(v.jsx)("div",{className:"text",children:"\u6392\u5e8f\u65b9\u5f0f"}),Object(v.jsxs)(n.a.Group,{onChange:function(e){console.log("radio checked",e.target.value),Ee(e.target.value)},value:Se,children:[Object(v.jsx)(n.a,{value:2,children:"\u96be\u5ea6\u4ece\u4f4e\u5230\u9ad8\u6392\u5e8f"}),Object(v.jsx)(n.a,{value:1,children:"\u96be\u5ea6\u4ece\u9ad8\u5230\u4f4e\u6392\u5e8f"})]})]})]}),Object(v.jsxs)("div",{className:"btns",children:[Object(v.jsx)(s.a,{type:"primary",className:"btn",onClick:qe,children:"\u786e\u5b9a"}),Object(v.jsx)(s.a,{type:"primary",className:"btn_cancel",onClick:function(){Ne(!1)},children:"\u53d6\u6d88"})]})]})})]})}t.default=Object(O.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setClass:function(t){var c={type:f.b,value:t};e(c)},addtopicData:function(t){var c={type:f.a,value:t};e(c)},subtopicData:function(t){var c={type:f.e,value:t};e(c)},settopicData:function(t){var c={type:f.d,value:t};e(c)}}}))(Object(x.memo)(y))}}]);