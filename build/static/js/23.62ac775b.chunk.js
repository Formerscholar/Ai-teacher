(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[23],{185:function(e,t,n){"use strict";n(203);var c=n(206),i=n(9),s=n(0);n(186);function a(e){var t=e.children,n=e.isOpen,s=void 0!==n&&n,a=e.closeClick,r=e.title,o=void 0===r?"":r,l=e.width,d=void 0===l?"41.71rem":l,u=e.height,j=void 0===u?"23.5rem":u,v=j.split("rem")[0]-4.64;return Object(i.jsx)(c.a,{className:"T_modelbox",title:o,visible:s,onCancel:a,footer:null,centered:!0,width:d,height:j,bodyStyle:{height:v+"rem"},closeIcon:Object(i.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(s.memo)(a)},186:function(e,t,n){},192:function(e,t,n){"use strict";n.d(t,"k",(function(){return a})),n.d(t,"j",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return j})),n.d(t,"l",(function(){return v})),n.d(t,"m",(function(){return b})),n.d(t,"n",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"i",(function(){return p})),n.d(t,"o",(function(){return O})),n.d(t,"h",(function(){return f})),n.d(t,"g",(function(){return x}));var c=n(189),i=n(191),s=n.n(i);function a(e){return Object(c.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/getExercisesDetail",method:"GET",params:e})}function o(e){return Object(c.a)({url:"/addExamBasket",method:"POST",data:s.a.stringify(e)})}function l(e){return Object(c.a)({url:"/delExamBasket",method:"POST",data:s.a.stringify(e)})}function d(e){return Object(c.a)({url:"/basketDetail",method:"GET",params:e})}function u(e){return Object(c.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(c.a)({url:"/clearExamBasket",method:"GET"})}function v(e){return Object(c.a)({url:"/getPapersExercises",method:"GET",params:e})}function b(e){return Object(c.a)({url:"/getPapersList",method:"GET",params:e})}function m(e){return Object(c.a)({url:"/paperToBased",method:"POST",data:s.a.stringify(e)})}function h(e){return Object(c.a)({url:"/addPapers",method:"POST",data:s.a.stringify(e)})}function p(e){return Object(c.a)({url:"/editPapers",method:"POST",data:s.a.stringify(e)})}function O(e){return Object(c.a)({url:"/paperToBasket",method:"GET",params:e})}function f(e){return Object(c.a)({url:"/editBasketSort",method:"GET",params:e})}function x(e){return Object(c.a)({url:"/editBasketScore",method:"GET",params:e})}},204:function(e,t,n){"use strict";var c=n(187),i=n.n(c),s=(n(195),n(64)),a=n(188),r=n(193),o=n(9),l=n(0),d=(n(205),n(65)),u=n(29),j=n(192);function v(e){var t,n=e.volumeTopicCount,c=e.props,d=e.settopicData,u=c.history,v=Object(l.useState)({}),b=Object(r.a)(v,2),m=b[0],h=b[1];Object(l.useEffect)((function(){return O(),function(){}}),[n]);var p=function(){var e=Object(a.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)();case 2:t=e.sent,n=t.code,c=t.msg,200===n?(s.b.success(c),O()):s.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(i.a.mark((function e(){var t,n,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)();case 2:t=e.sent,n=t.code,c=t.data,200==n&&(h(c),s=null===c||void 0===c?void 0:c.basketCount,d(s));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(i.a.mark((function e(t){var n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(j.f)({type:t});case 3:n=e.sent,c=n.code,a=n.msg,200===c?(O(),s.b.success(a)):s.b.error(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"AI_floatBox",children:[Object(o.jsxs)("div",{className:"top_float_warp",onClick:function(){u.push("/main/mypaper")},children:[Object(o.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(o.jsxs)("span",{className:"count",children:[Object(o.jsx)("em",{children:n}),"/40"]}),Object(o.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(o.jsx)("img",{className:"arrow_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon"}),Object(o.jsxs)("div",{className:"unfold",children:[Object(o.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(o.jsx)("span",{children:null===m||void 0===m?void 0:m.basketCount}),"\uff09"]}),Object(o.jsx)("div",{className:"typeList",children:null===m||void 0===m||null===(t=m.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(o.jsxs)("div",{className:"items",children:[Object(o.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(o.jsxs)("div",{className:"numdel",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(o.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return f(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(o.jsx)("div",{className:"empty",onClick:p,children:"\u6e05\u7a7a\u8bd5\u9898"})]})]})}t.a=Object(d.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var n={type:u.a,value:t};e(n)},subtopicData:function(t){var n={type:u.e,value:t};e(n)},settopicData:function(t){var n={type:u.d,value:t};e(n)}}}))(Object(l.memo)(v))},205:function(e,t,n){},355:function(e,t,n){},449:function(e,t,n){"use strict";n.r(t);n(217);var c=n(219),i=(n(194),n(190)),s=(n(353),n(437)),a=(n(201),n(202)),r=(n(195),n(64)),o=n(207),l=n(187),d=n.n(l),u=n(188),j=n(193),v=n(9),b=n(0),m=(n(355),n(192)),h=n(65),p=n(29),O=n(198),f=n(204),x=n(185);function g(e){var t,n,l,h,p,g,_,N,y,w,k,S=e.homeInfo,T=e.history,C=e.addtopicData,E=e.subtopicData,D=e.volumeTopicCount,L=Object(b.useState)({}),P=Object(j.a)(L,2),I=P[0],G=P[1],B=Object(b.useState)(0),K=Object(j.a)(B,2),q=K[0],H=K[1],M=Object(b.useState)(0),z=Object(j.a)(M,2),J=z[0],V=z[1],Q=Object(b.useState)(0),A=Object(j.a)(Q,2),R=A[0],F=A[1],U=Object(b.useState)(0),W=Object(j.a)(U,2),X=W[0],Y=W[1],Z=Object(b.useState)(0),$=Object(j.a)(Z,2),ee=$[0],te=$[1],ne=Object(b.useState)(0),ce=Object(j.a)(ne,2),ie=ce[0],se=ce[1],ae=Object(b.useState)(1),re=Object(j.a)(ae,2),oe=re[0],le=re[1],de=Object(b.useState)("1"),ue=Object(j.a)(de,2),je=ue[0],ve=(ue[1],Object(b.useState)([])),be=Object(j.a)(ve,2),me=be[0],he=be[1],pe=Object(b.useState)([]),Oe=Object(j.a)(pe,2),fe=Oe[0],xe=Oe[1],ge=Object(b.useState)([]),_e=Object(j.a)(ge,2),Ne=_e[0],ye=_e[1],we=Object(b.useState)(!0),ke=Object(j.a)(we,2),Se=ke[0],Te=ke[1],Ce=Object(b.useState)(!1),Ee=Object(j.a)(Ce,2),De=Ee[0],Le=Ee[1],Pe=Object(b.useState)(""),Ie=Object(j.a)(Pe,2),Ge=Ie[0],Be=Ie[1];Object(b.useEffect)((function(){return Ke(X,fe,R,ee,oe),function(){}}),[D]);var Ke=function(){var e=Object(u.a)(d.a.mark((function e(t){var n,c,i,s,a,r,o,l,u,j=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.length>1&&void 0!==j[1]?j[1]:0,c=j.length>2&&void 0!==j[2]?j[2]:0,i=j.length>3&&void 0!==j[3]?j[3]:0,s=j.length>4&&void 0!==j[4]?j[4]:1,e.next=6,Object(m.k)({grade_id:t,konwledge_id:n,type:c,level:i,page:s});case 6:a=e.sent,r=a.code,o=a.data,a.msg,200===r&&(null===o||void 0===o||null===(l=o.exercisesLists)||void 0===l||null===(u=l.data)||void 0===u||u.map((function(e){e.isanswer=!1})),G(o),Y(null===o||void 0===o?void 0:o.grade_id));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var qe=function(){Le(!1)},He=function(){var e=Object(u.a)(d.a.mark((function e(t,n){var c,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)({exercises_id:[t]});case 2:c=e.sent,i=c.code,s=c.msg,200==i?(r.b.success(s),C(1)):(Be(s),Le(!0));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Me=function(){var e=Object(u.a)(d.a.mark((function e(t){var n,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.e)({exercises_id:t});case 2:n=e.sent,c=n.code,i=n.msg,200==c?(r.b.success(i),E(1)):(Be(i),Le(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ze=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,c,i,s,a,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=null===I||void 0===I||null===(t=I.exercisesLists)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.map((function(e){return e.id})),e.next=3,Object(m.a)({exercises_id:c});case 3:i=e.sent,s=i.code,a=i.msg,200==s?(r.b.success(a),C(null===I||void 0===I||null===(o=I.exercisesLists)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.length)):(Be(a),Le(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{id:"Knowledge",children:[Object(v.jsxs)(a.a,{separator:Object(v.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(v.jsxs)(a.a.Item,{style:{cursor:"pointer",color:"#222"},onClick:function(e){e.preventDefault(),T.push("/main/index")},children:[Object(v.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"},alt:"position"}),"\u9996\u9875"]}),Object(v.jsx)(a.a.Item,{style:{cursor:"pointer",color:"#222"},children:"\u77e5\u8bc6\u5e93"})]}),Object(v.jsxs)("div",{className:"Knowledge_box",children:[Object(v.jsxs)("div",{className:"left_box",children:[Object(v.jsxs)("div",{className:"title",children:[null===I||void 0===I||null===(t=I.grades)||void 0===t?void 0:t.map((function(e){if((null===e||void 0===e?void 0:e.id)==(null===I||void 0===I?void 0:I.grade_id))return null===e||void 0===e?void 0:e.name})),null===S||void 0===S||null===(n=S.teacher)||void 0===n||null===(l=n.get_subject)||void 0===l?void 0:l.title," \xb7 \u77e5\u8bc6\u70b9"]}),Object(v.jsx)(s.a,{checkable:!0,showLine:!0,onExpand:function(e){console.log("onExpand",e),he(e),Te(!1)},expandedKeys:me,autoExpandParent:Se,onCheck:function(e){console.log("onCheck",e),xe(e),Ke(X,e,R,ee,je)},checkedKeys:fe,onSelect:function(e,t){console.log("onSelect",t),ye(e)},selectedKeys:Ne,treeData:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return null===t||void 0===t?void 0:t.map((function(t){return{title:null===t||void 0===t?void 0:t.name,key:null===t||void 0===t?void 0:t.id,children:(null===t||void 0===t?void 0:t.children)&&e(null===t||void 0===t?void 0:t.children)}}))}(null===I||void 0===I?void 0:I.knowledge)})]}),Object(v.jsxs)("div",{className:"right_box",children:[Object(v.jsxs)("div",{className:"top_box",children:[Object(v.jsxs)("div",{className:"select_box",children:[Object(v.jsxs)("div",{className:"grade grop_warp",children:[Object(v.jsx)("span",{className:"title",children:"\u5e74\u7ea7\uff1a"}),Object(v.jsx)("div",{className:"select_items",children:null===I||void 0===I||null===(h=I.grades)||void 0===h?void 0:h.map((function(e,t){return Object(v.jsx)("div",{className:t===q?"select_item Selected":"select_item",onClick:function(){return function(e,t){H(t),Y(e),Ke(e,fe,R,ee,oe)}(null===e||void 0===e?void 0:e.id,t)},children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))})]}),Object(v.jsxs)("div",{className:"Difficulty grop_warp",children:[Object(v.jsx)("span",{className:"title",children:"\u96be\u5ea6\uff1a"}),Object(v.jsx)("div",{className:"select_items",children:null===I||void 0===I||null===(p=I.level)||void 0===p?void 0:p.map((function(e,t){return Object(v.jsx)("div",{className:t===J?"select_item Selected":"select_item",onClick:function(){return function(e){V(e),te(e),Ke(X,fe,R,e,oe)}(t)},children:e},t)}))})]}),Object(v.jsxs)("div",{className:"Questions grop_warp",children:[Object(v.jsx)("span",{className:"title",children:"\u9898\u7c7b\uff1a"}),Object(v.jsx)("div",{className:"select_items",children:null===I||void 0===I||null===(g=I.questionCategory)||void 0===g?void 0:g.map((function(e,t){return Object(v.jsx)("div",{className:t===ie?"select_item Selected":"select_item",onClick:function(){return function(e,t){F(e),se(t),Ke(X,fe,e,ee,oe)}(null===e||void 0===e?void 0:e.id,t)},children:null===e||void 0===e?void 0:e.title},null===e||void 0===e?void 0:e.id)}))})]})]}),Object(v.jsx)("div",{className:"tip_box",children:Object(v.jsxs)("div",{className:"right_boxs",children:[Object(v.jsxs)("div",{className:"total",children:["\u5171\u8ba1\uff1a",null===I||void 0===I||null===(_=I.exercisesLists)||void 0===_?void 0:_.total,"\u9898"]}),Object(v.jsx)("div",{className:"allin",onClick:ze,children:"\u9009\u62e9\u672c\u9875\u5168\u90e8\u8bd5\u9898"})]})})]}),Object(v.jsx)("div",{className:"content",children:null===I||void 0===I||null===(N=I.exercisesLists)||void 0===N||null===(y=N.data)||void 0===y?void 0:y.map((function(e,t){var n;return Object(v.jsxs)("div",{className:"items",children:[Object(v.jsx)("div",{className:"top_title",children:Object(v.jsxs)("div",{className:"info_class",children:[Object(v.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(v.jsx)("span",{children:null===I||void 0===I?void 0:I.level[null===e||void 0===e?void 0:e.level]})]}),Object(v.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(n=e.get_question_category)||void 0===n?void 0:n.title]})]})}),Object(v.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.content_all}}),Object(v.jsxs)("div",{className:"answerbox",style:{display:(null===e||void 0===e?void 0:e.isanswer)?"block":"none"},children:[Object(v.jsxs)("div",{className:"Tests",children:[Object(v.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),Object(v.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.knowledge}})]}),Object(v.jsxs)("div",{className:"answer",children:[Object(v.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(v.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.answer}})]}),Object(v.jsxs)("div",{className:"Parse",children:[Object(v.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(v.jsx)("div",{className:"body_txt",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.analysis}})]})]}),Object(v.jsxs)("div",{className:"bot_btns",children:[Object(v.jsx)("div",{className:"left_box_warp",children:Object(v.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(O.g)(1e3*(null===e||void 0===e?void 0:e.update_time))]})}),Object(v.jsxs)("div",{className:"right_box_warp",children:[Object(v.jsxs)("div",{className:"answers",onClick:function(){return function(e){var t=Object(o.a)({},I);t.exercisesLists.data[e].isanswer=!t.exercisesLists.data[e].isanswer,G(t)}(t)},children:[Object(v.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(v.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(v.jsxs)("div",{className:"details",onClick:function(){return t=null===e||void 0===e?void 0:e.id,void T.push("/main/questiondetails?id=".concat(t));var t},children:[Object(v.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(v.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),(null===e||void 0===e?void 0:e.is_basket)?Object(v.jsxs)(i.a,{className:"sub",variant:"contained",onClick:function(){return Me(null===e||void 0===e?void 0:e.id)},children:[Object(v.jsx)("em",{children:"-"}),"\u79fb\u9664"]}):Object(v.jsxs)(i.a,{className:"add",variant:"contained",onClick:function(){return He(null===e||void 0===e?void 0:e.id,null===e||void 0===e?void 0:e.type)},children:[Object(v.jsx)("em",{children:"+"}),"\u7ec4\u5377"]})]})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(v.jsx)("div",{className:"pages",children:Object(v.jsx)(c.a,{hideOnSinglePage:!1,total:null===I||void 0===I||null===(w=I.exercisesLists)||void 0===w?void 0:w.total,defaultPageSize:20,showSizeChanger:!1,showQuickJumper:!0,pageSize:(null===I||void 0===I||null===(k=I.exercisesLists)||void 0===k?void 0:k.per_page)||20,onChange:function(e,t){le(1*e),Ke(X,fe,R,ee,e)},current:oe})})]}),Object(v.jsx)(f.a,{props:e}),Object(v.jsx)(x.a,{isOpen:De,title:" ",closeClick:qe,width:"41.71rem",height:"22.14rem",children:Object(v.jsxs)("div",{id:"tmodelbox",children:[Object(v.jsxs)("div",{className:"title",children:[Object(v.jsx)("img",{className:"notice",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/notice.png",alt:"notice"}),Object(v.jsx)("span",{children:"\u64cd\u4f5c\u5931\u8d25"})]}),Object(v.jsx)("div",{className:"body_text",children:Ge}),Object(v.jsx)(i.a,{type:"primary",className:"btn",onClick:qe,children:"\u6211\u77e5\u9053\u4e86"})]})})]})]})}t.default=Object(h.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setData:function(t){var n={type:p.c,value:t};e(n)},addtopicData:function(t){var n={type:p.a,value:t};e(n)},subtopicData:function(t){var n={type:p.e,value:t};e(n)},settopicData:function(t){var n={type:p.d,value:t};e(n)}}}))(Object(b.memo)(g))}}]);