(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[37],{148:function(e,t,c){"use strict";c.d(t,"q",(function(){return i})),c.d(t,"p",(function(){return r})),c.d(t,"b",(function(){return l})),c.d(t,"f",(function(){return d})),c.d(t,"d",(function(){return o})),c.d(t,"h",(function(){return u})),c.d(t,"e",(function(){return j})),c.d(t,"r",(function(){return m})),c.d(t,"s",(function(){return h})),c.d(t,"t",(function(){return b})),c.d(t,"c",(function(){return O})),c.d(t,"k",(function(){return x})),c.d(t,"n",(function(){return p})),c.d(t,"u",(function(){return v})),c.d(t,"j",(function(){return f})),c.d(t,"i",(function(){return N})),c.d(t,"g",(function(){return g})),c.d(t,"l",(function(){return y})),c.d(t,"m",(function(){return _})),c.d(t,"o",(function(){return w})),c.d(t,"a",(function(){return k}));var n=c(146),s=c(147),a=c.n(s);function i(e){return Object(n.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function r(e){return Object(n.a)({url:"/getExercisesDetail",method:"GET",params:e})}function l(e){return Object(n.a)({url:"/addExamBasket",method:"POST",data:a.a.stringify(e)})}function d(e){return Object(n.a)({url:"/delExamBasket",method:"POST",data:a.a.stringify(e)})}function o(e){return Object(n.a)({url:"/basketDetail",method:"GET",params:e})}function u(e){return Object(n.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(n.a)({url:"/clearExamBasket",method:"GET"})}function m(e){return Object(n.a)({url:"/getPapersExercises",method:"GET",params:e})}function h(e){return Object(n.a)({url:"/getPapersList",method:"GET",params:e})}function b(e){return Object(n.a)({url:"/paperToBased",method:"POST",data:a.a.stringify(e)})}function O(e){return Object(n.a)({url:"/addPapers",method:"POST",data:a.a.stringify(e)})}function x(e){return Object(n.a)({url:"/editPapers",method:"POST",data:a.a.stringify(e)})}function p(e){return Object(n.a)({url:"/getDetailPapers",method:"GET",params:e})}function v(e){return Object(n.a)({url:"/paperToBasket",method:"GET",params:e})}function f(e){return Object(n.a)({url:"/editBasketSort",method:"GET",params:e})}function N(e){return Object(n.a)({url:"/editBasketScore",method:"GET",params:e})}function g(e){return Object(n.a)({url:"/delTeacherExam",method:"GET",params:e})}function y(e){return Object(n.a)({url:"/editTypeBasketSort",method:"GET",params:e})}function _(e){return Object(n.a)({url:"/getChapterExercises",method:"GET",params:e})}function w(e){return Object(n.a)({url:"/getExerciseAnswer",method:"GET",params:e})}function k(e){return Object(n.a)({url:"/academicReportKnowledgeDetail",method:"POST",data:a.a.stringify(e)})}},160:function(e,t,c){"use strict";c(161);var n=c(168),s=c(13),a=c(0);c(163);function i(e){var t=e.children,c=e.isOpen,a=void 0!==c&&c,i=e.closeClick,r=e.title,l=void 0===r?"":r,d=e.width,o=void 0===d?"41.71rem":d,u=e.height,j=void 0===u?"23.5rem":u,m=j.split("rem")[0]-4.64;return Object(s.jsx)(n.a,{className:"T_modelbox",title:l,visible:a,onCancel:i,footer:null,centered:!0,width:o,height:j,bodyStyle:{height:m+"rem"},closeIcon:Object(s.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(a.memo)(i)},163:function(e,t,c){},307:function(e,t,c){},350:function(e,t,c){"use strict";c.r(t);c(174);var n=c(177),s=(c(143),c(142)),a=(c(151),c(152)),i=c(20),r=c.n(i),l=(c(149),c(66)),d=c(1),o=c(32),u=c(5),j=c(13),m=c(0),h=(c(307),c(148)),b=c(65),O=c(28),x=c(145),p=c(160),v=c(173),f=["\u666e\u901a\u7b54\u9898\u5361","\u6807\u51c6\u7b54\u9898\u5361","\u5bc6\u96c6\u7b54\u9898\u5361"];function N(e){var t,c,i,b,O,N,g,y=e.history,_=e.location,w=e.volumeTopicCount,k=Object(x.g)(_.search),E=Object(m.useState)({}),T=Object(u.a)(E,2),C=T[0],S=T[1],G=Object(m.useRef)(null),P=Object(m.useState)(!1),B=Object(u.a)(P,2),A=B[0],D=B[1],I=Object(m.useState)(!1),M=Object(u.a)(I,2),J=M[0],K=M[1],L=Object(m.useState)(!1),R=Object(u.a)(L,2),X=R[0],q=R[1],z=Object(m.useState)("doc"),H=Object(u.a)(z,2),F=H[0],Q=H[1],U=Object(m.useState)("A4"),V=Object(u.a)(U,2),W=V[0],Y=V[1],Z=Object(m.useState)(1),$=Object(u.a)(Z,2),ee=$[0],te=$[1],ce=Object(m.useState)({title:{text:"\u8bd5\u5377\u96be\u5ea6\u5206\u6790",left:"center"},tooltip:{trigger:"item",formatter:"{b} : {c} ({d}%)"},legend:{bottom:0,left:"center",data:[]},series:[{name:"",type:"pie",radius:"50%",center:["50%","50%"],selectedMode:"single",data:[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}),ne=Object(u.a)(ce,2),se=ne[0],ae=ne[1];Object(m.useEffect)((function(){return ie(),function(){}}),[w]),Object(m.useEffect)((function(){var e=window.MathJax;e&&e.typesetPromise&&e.typesetPromise(),window.echarts.init(G.current).setOption(se)}));var ie=function(){var e=Object(o.a)(r.a.mark((function e(){var t,c,n,s,a,i,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.n)({id:k.id});case 2:t=e.sent,c=t.code,n=t.data,s=t.msg,200===c?(S(n),i=[],o=[],u=Object(d.a)({},se),null===n||void 0===n||null===(a=n.levelAnalysi)||void 0===a||a.map((function(e){e[1],"(".concat(e[0],"\u9053)");i.push(e[1]),o.push({name:e[1],value:e[0]})})),u.legend.data=i,u.series[0].data=o,ae(u)):l.b.error(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("".concat(v.e,"/teacher/organizingPapers?paper_type=").concat(W,"&exam_id=").concat(null===C||void 0===C||null===(t=C.teacherExam)||void 0===t?void 0:t.id,"&extension=").concat(F)),K(!1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{id:"Mypaper",children:[Object(j.jsxs)(a.a,{className:"bread",separator:Object(j.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(j.jsxs)(a.a.Item,{className:"breaditem",color:"textPrimary",onClick:function(e){e.preventDefault(),y.push("/index")},children:[Object(j.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position"}),"\u9996\u9875"]}),Object(j.jsx)(a.a.Item,{className:"breaditem",color:"textPrimary",onClick:function(){y.push("/mypaper/list")},children:"\u6211\u7684\u8bd5\u5377"}),Object(j.jsx)(a.a.Item,{className:"breaditem",color:"textPrimary",children:"\u8bd5\u5377\u8be6\u60c5"})]}),Object(j.jsxs)("div",{className:"content_body",children:[Object(j.jsxs)("div",{className:"left_box",children:[Object(j.jsx)("div",{className:"title_box",children:null===C||void 0===C||null===(t=C.teacherExam)||void 0===t?void 0:t.title}),null===C||void 0===C||null===(c=C.teacherExamExercise)||void 0===c?void 0:c.map((function(e,t){return 1==(null===e||void 0===e?void 0:e.parent_id)?Object(j.jsx)("div",{className:"topic_title",children:null===e||void 0===e?void 0:e.title},t):2==(null===e||void 0===e?void 0:e.parent_id)?Object(j.jsxs)("div",{className:"topic_html",children:[Object(j.jsxs)("span",{className:"title_warp",children:[null===e||void 0===e?void 0:e.title,".",Object(j.jsxs)("div",{className:"span",children:["(",null===e||void 0===e?void 0:e.score,")"]})]}),Object(j.jsx)("span",{dangerouslySetInnerHTML:{__html:null===e||void 0===e||null===(c=e.get_one_exercises)||void 0===c?void 0:c.content_all}})]},t):void 0;var c}))]}),Object(j.jsxs)("div",{className:"right_box",children:[Object(j.jsxs)("div",{className:"top_box",children:[Object(j.jsx)(s.a,{type:"primary",className:"downbtn",onClick:function(){return K(!0)},children:"\u4e0b\u8f7d\u8bd5\u5377"}),Object(j.jsx)(s.a,{className:"lastbtn",onClick:function(){return q(!0)},children:"\u7b54\u9898\u5361\u4e0b\u8f7d"})]}),Object(j.jsxs)("div",{className:"bott_box",children:[Object(j.jsxs)("div",{className:"tip_top",children:[Object(j.jsxs)("div",{className:"left_boxx",children:["\u8bd5\u5377\u5206\u6790",Object(j.jsxs)("span",{children:["(\u603b\u5206:",null===C||void 0===C?void 0:C.countScore,"\u5206)"]})]}),Object(j.jsx)("div",{className:"right_boxs",onClick:function(){var e=Object(d.a)({},se);e.title.text="",e.title.left="left",e.legend.left="center",ae(e),D(!0)},children:"\u8be6\u60c5"})]}),Object(j.jsx)("div",{ref:G,style:{width:"100%",height:"376px"}}),Object(j.jsxs)("div",{className:"my_chars",children:[Object(j.jsx)("div",{className:"title_text",children:"\u77e5\u8bc6\u70b9\u5206\u6790"}),Object(j.jsx)("div",{className:"list",children:null===C||void 0===C||null===(i=C.knowAnalysis)||void 0===i?void 0:i.map((function(e,t){return Object(j.jsxs)("div",{className:"items",children:[Object(j.jsxs)("div",{className:"top_text",children:[Object(j.jsxs)("div",{className:"left_txt",children:[e[1],Object(j.jsxs)("span",{children:[e[2],"%"]})]}),Object(j.jsxs)("div",{className:"right_txt",children:[e[0],"\u9053\u9898"]})]}),Object(j.jsx)("div",{className:"progress",style:{width:"".concat(e[2],"%"),backgroundColor:Object(x.e)()}})]},t)}))})]})]})]})]}),Object(j.jsx)(p.a,{isOpen:J,title:"\u3010\u4e0b\u8f7d\u786e\u8ba4\u3011",closeClick:function(){K(!1)},width:"62.64rem",height:"31.57rem",children:Object(j.jsxs)("div",{id:"tmodelbox",className:"downbox",children:[Object(j.jsx)("div",{className:"title",children:null===C||void 0===C||null===(b=C.teacherExam)||void 0===b?void 0:b.title}),Object(j.jsxs)("div",{className:"body_text",children:[Object(j.jsxs)("div",{className:"fileformt",children:[Object(j.jsx)("span",{className:"title_txt",children:"\u6587\u4ef6\u683c\u5f0f:"}),Object(j.jsxs)(n.a.Group,{onChange:function(e){return Q(e.target.value)},value:F,children:[Object(j.jsx)(n.a,{className:"itemradio itemradios",style:{display:"block"},value:"doc",children:Object(j.jsxs)("span",{className:"context",children:[Object(j.jsx)("span",{className:"span",children:"DOC"}),Object(j.jsx)("span",{className:"tip",children:"doc\u683c\u5f0f\u6587\u6863\uff0c\u516c\u5f0f\u4e3a\u56fe\u7247\uff0c\u4e0d\u53ef\u7f16\u8f91\u516c\u5f0f"})]})}),Object(j.jsx)(n.a,{className:"itemradio itemradios",style:{display:"block"},value:"docx",children:Object(j.jsxs)("span",{className:"context",children:[Object(j.jsx)("span",{className:"span",children:"DOCX"}),Object(j.jsx)("span",{className:"tip",children:"docx\u683c\u5f0f\u6587\u6863\uff0c\u53ef\u7f16\u8f91\u516c\u5f0f"})]})})]})]}),Object(j.jsxs)("div",{className:"fileformt",children:[Object(j.jsx)("span",{className:"title_txt",children:"\u7eb8\u5f20\u5927\u5c0f:"}),Object(j.jsxs)(n.a.Group,{onChange:function(e){Y(e.target.value)},value:W,children:[Object(j.jsx)(n.a,{className:"itemradio",value:"A4",children:"A4"}),Object(j.jsx)(n.a,{className:"itemradio",value:"A3",children:"A3\uff08\u53cc\u680f\uff09"}),Object(j.jsx)(n.a,{className:"itemradio",value:"B4",children:"B4\uff08\u53cc\u680f\uff09"})]})]})]}),Object(j.jsx)(s.a,{type:"primary",className:"btn",onClick:re,children:"\u786e\u5b9a"})]})}),Object(j.jsx)(p.a,{isOpen:A,title:"\u3010\u8bd5\u5377\u5206\u6790\u3011",closeClick:function(){D(!1)},width:"62.64rem",height:"31.57rem",style:{overflow:"auto"},children:Object(j.jsxs)("div",{className:"charsbox",children:[Object(j.jsx)("div",{className:"title",children:null===C||void 0===C||null===(O=C.teacherExam)||void 0===O?void 0:O.title}),Object(j.jsxs)("div",{className:"levelchars",children:[Object(j.jsx)("div",{className:"tip_title",children:Object(j.jsx)("div",{className:"text",children:"\u8bd5\u5377\u96be\u5ea6\u5206\u6790"})}),Object(j.jsxs)("div",{className:"chars_boxs",children:[Object(j.jsx)("div",{className:"chars",children:Object(j.jsx)("div",{ref:G,style:{width:"400px",height:"210px"}})}),Object(j.jsx)("div",{className:"tables",children:Object(j.jsxs)("table",{border:"1",cellspacing:"0",cellpadding:"0",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"\u9898\u578b"}),Object(j.jsx)("td",{children:"\u9898\u76ee\u91cf(\u5360\u6bd4)"}),Object(j.jsx)("td",{children:"\u5206\u503c(\u5360\u6bd4)"})]}),null===C||void 0===C||null===(N=C.typeAnalysis)||void 0===N?void 0:N.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e[1]}),Object(j.jsxs)("td",{children:[e[0],"(",e[3],"%)"]}),Object(j.jsxs)("td",{children:[e[2],"(",e[4],"%)"]})]},t)}))]})})]}),Object(j.jsx)("div",{className:"tip_title",children:Object(j.jsx)("div",{className:"text",children:"\u77e5\u8bc6\u70b9\u5206\u6790"})}),Object(j.jsx)("div",{className:"my_chars",children:Object(j.jsx)("div",{className:"list",children:null===C||void 0===C||null===(g=C.knowAnalysis)||void 0===g?void 0:g.map((function(e,t){return Object(j.jsxs)("div",{className:"items",children:[Object(j.jsxs)("div",{className:"top_text",children:[Object(j.jsxs)("div",{className:"left_txt",children:[e[1],Object(j.jsxs)("span",{children:[e[2],"%"]})]}),Object(j.jsxs)("div",{className:"right_txt",children:[e[0],"\u9053\u9898"]})]}),Object(j.jsx)("div",{className:"progress",style:{width:"".concat(e[2],"%"),backgroundColor:Object(x.e)()}})]},t)}))})})]})]})}),Object(j.jsx)(p.a,{isOpen:X,title:"\u3010\u7b54\u9898\u5361\u4e0b\u8f7d\u3011",closeClick:function(){q(!1)},width:"50rem",height:"20rem",children:Object(j.jsxs)("div",{className:"answerbox",children:[Object(j.jsx)("div",{className:"titles",children:"\u8bf7\u9009\u62e9\u4e0b\u8f7d\u7684\u7b54\u9898\u5361\u7c7b\u578b\uff0c\u9009\u62e9\u540e\u70b9\u51fb\u201c\u786e\u5b9a\u201d\u6309\u94ae\u5373\u53ef\u4e0b\u8f7d"}),Object(j.jsxs)("div",{className:"an_type",children:[Object(j.jsx)("div",{className:"tip",children:"\u7b54\u9898\u5361\u7c7b\u578b\uff1a"}),Object(j.jsx)("div",{className:"typelist",children:null===f||void 0===f?void 0:f.map((function(e,t){return Object(j.jsx)("div",{className:ee==t+1?"items current":"items",onClick:function(){return function(e){te(e)}(t+1)},children:e},t)}))})]}),Object(j.jsxs)("div",{className:"btns",children:[Object(j.jsx)(s.a,{type:"primary",className:"surebtn",onClick:function(){window.open("".concat(v.e,"/teacher/downloadAnswerSheet?exam_id=").concat(k.id,"&type=").concat(ee)),q(!1)},children:"\u786e\u5b9a"}),Object(j.jsx)(s.a,{className:"canlebtn",onClick:function(){q(!1)},children:"\u53d6\u6d88"})]})]})})]})}t.default=Object(b.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setClass:function(t){var c={type:O.b,value:t};e(c)},addtopicData:function(t){var c={type:O.a,value:t};e(c)},subtopicData:function(t){var c={type:O.e,value:t};e(c)},settopicData:function(t){var c={type:O.d,value:t};e(c)}}}))(Object(m.memo)(N))}}]);