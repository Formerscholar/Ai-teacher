(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[26],{189:function(e,t,s){"use strict";s.d(t,"k",(function(){return i})),s.d(t,"j",(function(){return r})),s.d(t,"a",(function(){return l})),s.d(t,"e",(function(){return o})),s.d(t,"c",(function(){return d})),s.d(t,"f",(function(){return u})),s.d(t,"d",(function(){return j})),s.d(t,"l",(function(){return b})),s.d(t,"m",(function(){return m})),s.d(t,"n",(function(){return h})),s.d(t,"b",(function(){return v})),s.d(t,"i",(function(){return x})),s.d(t,"o",(function(){return O})),s.d(t,"h",(function(){return p})),s.d(t,"g",(function(){return _}));var c=s(187),a=s(188),n=s.n(a);function i(e){return Object(c.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/getExercisesDetail",method:"GET",params:e})}function l(e){return Object(c.a)({url:"/addExamBasket",method:"POST",data:n.a.stringify(e)})}function o(e){return Object(c.a)({url:"/delExamBasket",method:"POST",data:n.a.stringify(e)})}function d(e){return Object(c.a)({url:"/basketDetail",method:"GET",params:e})}function u(e){return Object(c.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(c.a)({url:"/clearExamBasket",method:"GET"})}function b(e){return Object(c.a)({url:"/getPapersExercises",method:"GET",params:e})}function m(e){return Object(c.a)({url:"/getPapersList",method:"GET",params:e})}function h(e){return Object(c.a)({url:"/paperToBased",method:"POST",data:n.a.stringify(e)})}function v(e){return Object(c.a)({url:"/addPapers",method:"POST",data:n.a.stringify(e)})}function x(e){return Object(c.a)({url:"/editPapers",method:"POST",data:n.a.stringify(e)})}function O(e){return Object(c.a)({url:"/paperToBasket",method:"GET",params:e})}function p(e){return Object(c.a)({url:"/editBasketSort",method:"GET",params:e})}function _(e){return Object(c.a)({url:"/editBasketScore",method:"GET",params:e})}},193:function(e,t,s){"use strict";s(207);var c=s(208),a=s(9),n=s(0);s(194);function i(e){var t=e.children,s=e.isOpen,n=void 0!==s&&s,i=e.closeClick,r=e.title,l=void 0===r?"":r,o=e.width,d=void 0===o?"41.71rem":o,u=e.height,j=void 0===u?"23.5rem":u,b=j.split("rem")[0]-4.64;return Object(a.jsx)(c.a,{className:"T_modelbox",title:l,visible:n,onCancel:i,footer:null,centered:!0,width:d,height:j,bodyStyle:{height:b+"rem"},closeIcon:Object(a.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(n.memo)(i)},194:function(e,t,s){},378:function(e,t,s){},450:function(e,t,s){"use strict";s.r(t);s(195);var c=s(192),a=(s(373),s(441)),n=(s(375),s(442)),i=(s(376),s(440)),r=(s(200),s(201)),l=s(205),o=s(185),d=s.n(o),u=(s(191),s(64)),j=s(186),b=s(190),m=(s(209),s(213)),h=s(9),v=s(0),x=(s(378),s(189)),O=s(66),p=s(29),_=s(193),f=s(198),N=m.a.TextArea;function g(e){var t,s,o=e.history,O=e.location,p=e.homeInfo,g=e.subtopicData,y=e.volumeTopicCount,w=e.settopicData,k=Object(f.h)(O.search),S=Object(v.useState)([]),C=Object(b.a)(S,2),T=C[0],E=C[1],D=Object(v.useState)({}),P=Object(b.a)(D,2),G=P[0],I=P[1],B=Object(v.useState)(""),L=Object(b.a)(B,2),M=L[0],H=L[1],q=Object(v.useState)(""),J=Object(b.a)(q,2),z=J[0],A=J[1],K=Object(v.useState)(""),Q=Object(b.a)(K,2),F=Q[0],R=Q[1],U=Object(v.useState)(""),V=Object(b.a)(U,2),W=V[0],X=V[1],Y=Object(v.useState)(""),Z=Object(b.a)(Y,2),$=Z[0],ee=Z[1],te=Object(v.useState)(0),se=Object(b.a)(te,2),ce=se[0],ae=se[1],ne=Object(v.useState)(0),ie=Object(b.a)(ne,2),re=ie[0],le=ie[1],oe=Object(v.useState)("\u7b2c\u2160\u5377\uff08\u9009\u62e9\u9898\uff09"),de=Object(b.a)(oe,2),ue=de[0],je=de[1],be=Object(v.useState)("\u7b2cI\u5377\u7684\u6ce8\u91ca"),me=Object(b.a)(be,2),he=me[0],ve=me[1],xe=Object(v.useState)(!1),Oe=Object(b.a)(xe,2),pe=Oe[0],_e=Oe[1],fe=Object(v.useState)(!1),Ne=Object(b.a)(fe,2),ge=Ne[0],ye=Ne[1];Object(v.useEffect)((function(){return we(),function(){}}),[y]);var we=function(){var e=Object(j.a)(d.a.mark((function e(){var t,s,c,a,n,i,r,l,o,j,b,m,h,v,O,p;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.l)({id:k.id});case 2:t=e.sent,s=t.code,c=t.data,a=t.msg,200===s?(null===c||void 0===c||null===(n=c.exercisesData)||void 0===n||n.map((function(e){null===e||void 0===e||e.map((function(e){e.isanswer=!1}))})),I(c),k.id&&(h=[],console.log("\u521d\u59cb\u5316\u8bd5\u5377\u4fe1\u606f",null===c||void 0===c?void 0:c.exam),A(null===c||void 0===c||null===(i=c.exam)||void 0===i?void 0:i.title),(null===c||void 0===c||null===(r=c.exam)||void 0===r?void 0:r.be_careful)&&(h.push("6"),ee(null===c||void 0===c||null===(v=c.exam)||void 0===v?void 0:v.be_careful)),(null===c||void 0===c||null===(l=c.exam)||void 0===l?void 0:l.exam_about)&&(h.push("3"),X(null===c||void 0===c||null===(O=c.exam)||void 0===O?void 0:O.exam_about)),(null===c||void 0===c||null===(o=c.exam)||void 0===o?void 0:o.is_fill_in)&&h.push("5"),(null===c||void 0===c||null===(j=c.exam)||void 0===j?void 0:j.is_question_score)&&h.push("8"),(null===c||void 0===c||null===(b=c.exam)||void 0===b?void 0:b.is_total_score)&&h.push("2"),(null===c||void 0===c||null===(m=c.exam)||void 0===m?void 0:m.name)&&(h.push("1"),R(null===c||void 0===c||null===(p=c.exam)||void 0===p?void 0:p.name)),E(h))):(I(c),u.b.error(a));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(e){var t=e.target.value;R(t)},Se=function(e){var t=e.target.value;X(t)},Ce=function(e){var t=e.target.value;ee(t)},Te=function(e){var t=e.target.value;je(t)},Ee=function(e){var t=e.target.value;ve(t)};var De=function(){var e=Object(j.a)(d.a.mark((function e(t){var s,c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.e)({exercises_id:t});case 2:s=e.sent,c=s.code,a=s.msg,200==c?(u.b.success(a),g(1)):(H(a),_e(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Pe=function(){_e(!1)},Ge=function(){var e=Object(j.a)(d.a.mark((function e(){var t,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.g)({id:ce,score:re});case 2:t=e.sent,s=t.code,c=t.msg,200===s?(u.b.success(c),we()):u.b.error(c),ye(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(j.a)(d.a.mark((function e(){var t,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.d)();case 2:t=e.sent,s=t.code,c=t.msg,200===s?(w(0),u.b.success(c)):u.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(j.a)(d.a.mark((function e(t,s){var c,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.h)({id:s,sort:t});case 2:c=e.sent,a=c.code,n=c.msg,200===a?(u.b.success(n),we()):u.b.error(n);case 6:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),Le=function(){var e=Object(j.a)(d.a.mark((function e(){var t,s,c,a,n,i,r,l,j,b,m;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=0,c=0,a=0,T.map((function(e){switch(e){case"5":s=1;break;case"2":c=1;break;case"8":a=1}})),n=[{parent_id:0,exercises_id:0,title:"\u7b2c\u2160\u5377\uff08\u9009\u62e9\u9898\uff09",score:0}],null===G||void 0===G||null===(t=G.exercisesData)||void 0===t||t.map((function(e,t){n.push({parent_id:1,exercises_id:0,title:"".concat(t+1,"\u3001").concat(e[0].typeName,"\uff08\u5171").concat(e.length,"\u9898\uff1b\u5171").concat(e[0].countScore,"\u5206\uff09"),score:0}),e.map((function(e,t){n.push({parent_id:2,exercises_id:e.exercises.id,title:t+1,score:e.score})}))})),console.log(n),!k.id){e.next=14;break}return e.next=8,Object(x.i)({title:z,name:F,exam_about:W,be_careful:$,is_fill_in:s,is_total_score:c,is_question_score:a,exercises:n,id:k.id});case 8:i=e.sent,r=i.code,l=i.msg,200===r?(u.b.success(l),o.push("/main/mypaperlist")):u.b.error(l),e.next=20;break;case 14:return e.next=16,Object(x.b)({title:z,name:F,exam_about:W,be_careful:$,is_fill_in:s,is_total_score:c,is_question_score:a,exercises:n});case 16:j=e.sent,b=j.code,m=j.msg,200===b?(u.b.success(m),o.push("/main/mypaperlist")):u.b.error(m);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{id:"Mypaper",children:[Object(h.jsxs)(r.a,{className:"bread",separator:Object(h.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(h.jsxs)(r.a.Item,{className:"breaditem",color:"textPrimary",onClick:function(e){e.preventDefault(),o.push("/main/index")},children:[Object(h.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position"}),"\u9996\u9875"]}),Object(h.jsx)(r.a.Item,{className:"breaditem",color:"textPrimary",onClick:function(){o.push("/main/mypaperlist")},children:"\u6211\u7684\u8bd5\u5377"}),Object(h.jsx)(r.a.Item,{className:"breaditem",color:"textPrimary",children:"\u8bd5\u5377\u7ec4\u5377"})]}),Object(h.jsxs)("div",{className:"Group_body",children:[Object(h.jsxs)("div",{className:"left_box",children:[null===T||void 0===T?void 0:T.map((function(e){return"0"==e&&Object(h.jsx)("div",{className:"Packaging",children:Object(h.jsx)("img",{className:"peal_line",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/peal_line.png",alt:"peal_line"})})})),Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)(m.a,{className:"Papertitle",bordered:!1,placeholder:"2020\u5e7411\u670813\u65e5\u521d\u4e2d\u6570\u5b66\u8bd5\u5377",value:z,onChange:function(e){var t=e.target.value;A(t)}}),null===T||void 0===T?void 0:T.map((function(e){return"1"==e&&Object(h.jsx)(m.a,{className:"subhead",placeholder:"\u8bd5\u5377\u526f\u6807\u9898",bordered:!1,value:F,onChange:ke})})),null===T||void 0===T?void 0:T.map((function(e){return"3"==e&&Object(h.jsx)(m.a,{className:"prompt",placeholder:"\u8003\u8bd5\u8303\u56f4\uff1axxx\uff1b\u8003\u8bd5\u65f6\u95f4\uff1a100\u5206\u949f\uff1b\u547d\u9898\u4eba\uff1axxx",bordered:!1,value:W,onChange:Se})})),null===T||void 0===T?void 0:T.map((function(e){return"5"==e&&Object(h.jsx)("div",{className:"examineeInfo",children:"\u5b66\u6821:___________\u59d3\u540d\uff1a___________\u73ed\u7ea7\uff1a___________\u8003\u53f7\uff1a___________"})})),null===T||void 0===T?void 0:T.map((function(e){return"2"==e&&Object(h.jsx)("div",{className:"TotalScore",children:Object(h.jsxs)("table",{border:"1",cellspacing:"0",cellpadding:"0",children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u9898\u53f7"}),Object(h.jsx)("td",{children:"\u4e00"}),Object(h.jsx)("td",{children:"\u4e8c"}),Object(h.jsx)("td",{children:"\u4e09"}),Object(h.jsx)("td",{children:"\u603b\u5206"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u5f97\u5206"}),Object(h.jsx)("td",{}),Object(h.jsx)("td",{}),Object(h.jsx)("td",{}),Object(h.jsx)("td",{})]})]})})})),null===T||void 0===T?void 0:T.map((function(e){return"6"==e&&Object(h.jsxs)("div",{className:"markedwords",children:[Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("span",{children:"*"}),"\u6ce8\u610f\u4e8b\u9879\uff1a"]}),Object(h.jsx)(N,{className:"context",autoSize:!0,placeholder:"1\uff0e\u7b54\u9898\u524d\u586b\u5199\u597d\u81ea\u5df1\u7684\u59d3\u540d\u3001\u73ed\u7ea7\u3001\u8003\u53f7\u7b49\u4fe1\u606f\r 2\uff0e\u8bf7\u5c06\u7b54\u6848\u6b63\u786e\u586b\u5199\u5728\u7b54\u9898\u5361\u4e0a",bordered:!1,value:$,onChange:Ce})]})})),null===T||void 0===T?void 0:T.map((function(e){return"7"==e&&Object(h.jsxs)("div",{className:"subsectionhead",children:[Object(h.jsx)(m.a,{className:"title_warp",bordered:!1,value:ue,onChange:Te}),Object(h.jsx)(m.a,{className:"annotation",bordered:!1,value:he,onChange:Ee})]})})),null===G||void 0===G||null===(t=G.exercisesData)||void 0===t?void 0:t.map((function(e,t){return Object(h.jsxs)("div",{className:"subsectionbody",children:[Object(h.jsxs)("div",{className:"goaltable",children:[null===T||void 0===T?void 0:T.map((function(e){return"8"==e&&Object(h.jsxs)("table",{border:"1",cellspacing:"0",cellpadding:"0",children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\u8bc4\u5377\u4eba"}),Object(h.jsx)("td",{children:"\u5f97\u5206"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{}),Object(h.jsx)("td",{})]})]})})),Object(h.jsxs)("div",{className:"title_box",children:[t+1,"\u3001",e[0].typeName,"\uff08\u5171",e.length,"\u9898\uff1b\u5171",e[0].countScore,"\u5206\uff09"]})]}),Object(h.jsx)("div",{className:"titlelists",children:null===e||void 0===e?void 0:e.map((function(e,s){var c,a,n,i;return Object(h.jsxs)("div",{className:"items",children:[Object(h.jsxs)("div",{className:"topbody",children:[s+1,".",Object(h.jsxs)("span",{className:"span",children:["\uff08",null===e||void 0===e?void 0:e.score,"\u5206\uff09"]}),Object(h.jsx)("span",{dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(c=e.exercises)||void 0===c?void 0:c.content_all}}),Object(h.jsxs)("div",{className:"answerbox",style:{display:(null===e||void 0===e?void 0:e.isanswer)?"block":"none"},children:[Object(h.jsxs)("div",{className:"Tests",children:[Object(h.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(h.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(a=e.exercises)||void 0===a?void 0:a.knowledge}})]}),Object(h.jsxs)("div",{className:"answer",children:[Object(h.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(h.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(n=e.exercises)||void 0===n?void 0:n.answer}})]}),Object(h.jsxs)("div",{className:"Parse",children:[Object(h.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(h.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(i=e.exercises)||void 0===i?void 0:i.analysis}})]})]})]}),Object(h.jsxs)("div",{className:"bot_btns",children:[Object(h.jsxs)("div",{className:"btn_item check_btn",onClick:function(){return function(e,t){var s=Object(l.a)({},G);s.exercisesData[e][t].isanswer=!s.exercisesData[e][t].isanswer,I(s)}(t,s)},children:[Object(h.jsx)("img",{className:"items_check",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_check.png",alt:"items_check"}),Object(h.jsx)("span",{className:"text",children:"\u67e5\u770b\u7b54\u6848"})]}),Object(h.jsxs)("div",{className:"btn_item set_btn",onClick:function(){return t=null===e||void 0===e?void 0:e.id,ae(t),void ye(!0);var t},children:[Object(h.jsx)("img",{className:"items_set",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_set.png",alt:"items_set"}),Object(h.jsx)("span",{className:"text",children:"\u8bbe\u7f6e\u5f97\u5206"})]}),Object(h.jsxs)("div",{className:"btn_item moveup_btn",onClick:function(){return Be(1,null===e||void 0===e?void 0:e.id)},children:[Object(h.jsx)("img",{className:"items_moveup",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_moveup.png",alt:"items_moveup"}),Object(h.jsx)("span",{className:"text",children:"\u4e0a\u79fb"})]}),Object(h.jsxs)("div",{className:"btn_item movedow_btn",onClick:function(){return Be(2,null===e||void 0===e?void 0:e.id)},children:[Object(h.jsx)("img",{className:"items_movedown",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_movedown.png",alt:"items_movedown"}),Object(h.jsx)("span",{className:"text",children:"\u4e0b\u79fb"})]}),Object(h.jsxs)("div",{className:"btn_item delete_btn",onClick:function(){var t;return De(null===e||void 0===e||null===(t=e.exercises)||void 0===t?void 0:t.id)},children:[Object(h.jsx)("img",{className:"items_delete",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/items_delete.png",alt:"items_delete"}),Object(h.jsx)("span",{className:"text",children:"\u5220\u9664"})]})]})]},s)}))})]},t)}))]})]}),Object(h.jsxs)("div",{className:"right_warp",children:[Object(h.jsxs)("div",{className:"right_top_box",children:[Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("div",{className:"left_text",children:"\u8bd5\u5377\u7ed3\u6784\u8bbe\u7f6e"}),Object(h.jsx)("div",{className:"right_text",children:"\u666e\u901a\u6a21\u677f"})]}),Object(h.jsx)(i.a.Group,{className:"CheckboxGroup",style:{width:"100%"},onChange:function(e){E(e)},value:T,children:Object(h.jsxs)(a.a,{children:[Object(h.jsx)(n.a,{span:12,children:Object(h.jsx)(i.a,{value:"0",children:"\u5bc6\u5c01\u7ebf"})}),Object(h.jsx)(n.a,{span:12,children:Object(h.jsx)(i.a,{value:"1",children:"\u526f\u6807\u9898"})}),Object(h.jsx)(n.a,{span:12,children:Object(h.jsx)(i.a,{value:"2",children:"\u603b\u5206\u680f"})}),Object(h.jsx)(n.a,{span:12,children:Object(h.jsx)(i.a,{value:"3",children:"\u8bd5\u5377\u4fe1\u606f"})}),Object(h.jsx)(n.a,{span:12,children:Object(h.jsx)(i.a,{value:"5",children:"\u8003\u751f\u4fe1\u606f"})}),Object(h.jsx)(n.a,{span:12,children:Object(h.jsx)(i.a,{value:"6",children:"\u6ce8\u610f\u4e8b\u9879"})}),Object(h.jsx)(n.a,{span:12,children:Object(h.jsx)(i.a,{value:"7",children:"\u5206\u5377\u53ca\u6ce8\u91ca"})}),Object(h.jsx)(n.a,{span:12,children:Object(h.jsx)(i.a,{value:"8",children:"\u5927\u9898\u8bc4\u5206\u533a"})})]})})]}),Object(h.jsxs)("div",{className:"right_bot_box",children:[Object(h.jsx)("div",{className:"title_warp",children:"\u8bd5\u5377\u4fe1\u606f"}),Object(h.jsxs)("div",{className:"prompt_warp",children:[Object(h.jsxs)("div",{className:"prompt_warp_title",children:[Object(h.jsxs)("div",{className:"scores",children:["\u5206\u6570\uff1a",Object(h.jsxs)("span",{children:[function(){var e,t=0;return null===G||void 0===G||null===(e=G.exercisesData)||void 0===e||e.map((function(e,s){t+=e[0].countScore})),t}(),"\u5206"]})]}),Object(h.jsxs)("div",{className:"QuestionNumber",children:["\u9898\u6570\uff1a",Object(h.jsxs)("span",{children:[function(){var e,t=0;return null===G||void 0===G||null===(e=G.exercisesData)||void 0===e||e.map((function(e,s){t+=e.length})),t}(),"\u9898"]})]}),Object(h.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(h.jsx)("span",{children:null===p||void 0===p||null===(s=p.teacher)||void 0===s?void 0:s.level[null===G||void 0===G?void 0:G.level]})]})]}),Object(h.jsxs)("div",{className:"cutoffrule",children:[Object(h.jsx)("div",{className:"wire"}),Object(h.jsx)("div",{className:"text_title",children:"\u7b2c\u2160\u5377\uff08\u9009\u62e9\u9898\uff09"}),Object(h.jsx)("div",{className:"wire"})]}),Object(h.jsxs)("div",{className:"title_box",children:[Object(h.jsx)("div",{className:"left_title_text",children:"\u4e00\u3001\u5355\u9009\u9898"}),Object(h.jsxs)("div",{className:"right_title_btns",children:[Object(h.jsx)("div",{className:"sort_btn",children:"\u6392\u5e8f"}),Object(h.jsx)("div",{className:"remove_btn",children:"\u5220\u9664"})]})]}),Object(h.jsxs)("div",{className:"serialList",children:[Object(h.jsx)("div",{className:"serialitem",children:"1"}),Object(h.jsx)("div",{className:"serialitem",children:"2"}),Object(h.jsx)("div",{className:"serialitem",children:"3"}),Object(h.jsx)("div",{className:"serialitem",children:"4"})]}),Object(h.jsxs)("div",{className:"cutoffrule two",children:[Object(h.jsx)("div",{className:"wire"}),Object(h.jsx)("div",{className:"text_title",children:"\u7b2c\u2161\u5377\uff08\u975e\u9009\u62e9\u9898\uff09"}),Object(h.jsx)("div",{className:"wire"})]}),Object(h.jsxs)("div",{className:"operatebtns",children:[Object(h.jsx)(c.a,{type:"primary",className:"downbtn",onClick:Le,children:"\u5b8c\u6210\u7ec4\u5377"}),Object(h.jsx)(c.a,{className:"continuebtn",onClick:function(){o.push("/main/knowledge")},children:"\u7ee7\u7eed\u9009\u9898"}),Object(h.jsx)(c.a,{className:"emptybtn",onClick:Ie,children:"\u6e05\u7a7a\u8bd5\u9898"})]})]})]})]})]}),Object(h.jsx)(_.a,{isOpen:pe,title:" ",closeClick:Pe,width:"41.71rem",height:"22.14rem",children:Object(h.jsxs)("div",{id:"tmodelbox",children:[Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("img",{className:"notice",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/notice.png",alt:"notice"}),Object(h.jsx)("span",{children:"\u64cd\u4f5c\u5931\u8d25"})]}),Object(h.jsx)("div",{className:"body_text",children:M}),Object(h.jsx)(c.a,{type:"primary",className:"btn",onClick:Pe,children:"\u6211\u77e5\u9053\u4e86"})]})}),Object(h.jsx)(_.a,{isOpen:ge,title:"\u3010\u6e29\u99a8\u63d0\u793a\u3011",closeClick:function(){ye(!1)},width:"41.71rem",height:"22.14rem",children:Object(h.jsxs)("div",{id:"tmodelbox",children:[Object(h.jsx)("div",{className:"title"}),Object(h.jsxs)("div",{className:"body_text crosbox",children:[Object(h.jsx)("span",{className:"span",children:"\u5206\u6570:"}),Object(h.jsx)(m.a,{type:"number",value:re,onChange:function(e){le(e.target.value)}})]}),Object(h.jsx)(c.a,{type:"primary",className:"btn",onClick:Ge,children:"\u786e\u5b9a"})]})})]})}t.default=Object(O.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setClass:function(t){var s={type:p.b,value:t};e(s)},addtopicData:function(t){var s={type:p.a,value:t};e(s)},subtopicData:function(t){var s={type:p.e,value:t};e(s)},settopicData:function(t){var s={type:p.d,value:t};e(s)}}}))(Object(v.memo)(g))}}]);