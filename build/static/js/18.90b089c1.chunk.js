(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[18],{198:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return j})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return b}));var c=n(188),i=n(187),s=n.n(i);function a(e){return Object(c.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function o(e){return Object(c.a)({url:"/getExercisesDetail",method:"GET",params:e})}function l(e){return Object(c.a)({url:"/addExamBasket",method:"POST",data:s.a.stringify(e)})}function r(e){return Object(c.a)({url:"/delExamBasket",method:"POST",data:s.a.stringify(e)})}function d(e){return Object(c.a)({url:"/basketDetail",method:"GET",params:e})}function u(e){return Object(c.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(c.a)({url:"/clearExamBasket",method:"GET"})}function v(e){return Object(c.a)({url:"/getPapersExercises",method:"GET",params:e})}function b(e){return Object(c.a)({url:"/getPapersList",method:"GET",params:e})}},208:function(e,t,n){"use strict";var c=n(189),i=n.n(c),s=(n(196),n(65)),a=n(190),o=n(194),l=n(10),r=n(0),d=(n(209),n(68)),u=n(33),j=n(198);function v(e){var t,n=e.volumeTopicCount,c=e.props,d=e.settopicData,u=c.history,v=Object(r.useState)({}),b=Object(o.a)(v,2),h=b[0],m=b[1],p=Object(r.useState)(!1),O=Object(o.a)(p,2),x=O[0],f=O[1];Object(r.useEffect)((function(){return _(),function(){}}),[n]);var g=function(){var e=Object(a.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.c)();case 2:t=e.sent,n=t.code,c=t.msg,200===n?(s.b.success(c),_()):s.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(a.a)(i.a.mark((function e(){var t,n,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)();case 2:t=e.sent,n=t.code,c=t.data,200==n&&(m(c),s=null===c||void 0===c?void 0:c.basketCount,d(s));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(a.a)(i.a.mark((function e(t){var n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(j.e)({type:t});case 3:n=e.sent,c=n.code,a=n.msg,200===c?(_(),s.b.success(a)):s.b.error(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{id:"AI_floatBox",style:{backgroundColor:x&&"#BBBBBB"},children:[Object(l.jsxs)("div",{className:"top_float_warp",onClick:function(){localStorage.setItem("menuIndex",6),u.push("/main/mypaper")},children:[Object(l.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(l.jsxs)("span",{className:"count",children:[Object(l.jsx)("em",{children:n}),"/40"]}),Object(l.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(l.jsx)("img",{className:"arrow_icon",src:x?"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon.png":"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon",onClick:function(){f(!x)}}),x?Object(l.jsxs)("div",{className:"unfold",children:[Object(l.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(l.jsx)("span",{children:null===h||void 0===h?void 0:h.basketCount}),"\uff09"]}),Object(l.jsx)("div",{className:"typeList",children:null===h||void 0===h||null===(t=h.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)("div",{className:"items",children:[Object(l.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(l.jsxs)("div",{className:"numdel",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(l.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return N(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(l.jsx)("div",{className:"empty",onClick:g,children:"\u6e05\u7a7a\u8bd5\u9898"})]}):""]})}t.a=Object(d.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var n={type:u.a,value:t};e(n)},subtopicData:function(t){var n={type:u.e,value:t};e(n)},settopicData:function(t){var n={type:u.d,value:t};e(n)}}}))(Object(r.memo)(v))},209:function(e,t,n){},222:function(e,t,n){"use strict";n(223);var c=n(229),i=n(10),s=n(0);n(225);function a(e){var t=e.children,n=e.isOpen,s=void 0!==n&&n,a=e.closeClick,o=e.title,l=void 0===o?"":o,r=e.width,d=void 0===r?"41.71rem":r,u=e.height,j=void 0===u?"23.5rem":u,v=j.split("rem")[0]-4.64;return Object(i.jsx)(c.a,{className:"T_modelbox",title:l,visible:s,onCancel:a,footer:null,centered:!0,width:d,height:j,bodyStyle:{height:v+"rem"},closeIcon:Object(i.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(s.memo)(a)},225:function(e,t,n){},355:function(e,t,n){},449:function(e,t,n){"use strict";n.r(t);n(218);var c=n(221),i=(n(186),n(185)),s=(n(353),n(438)),a=(n(191),n(195)),o=(n(196),n(65)),l=n(189),r=n.n(l),d=n(190),u=n(194),j=n(10),v=n(0),b=(n(355),n(198)),h=n(68),m=n(33),p=n(200),O=n(208),x=n(222);function f(e){var t,n,l,h,m,f,g,_,N,y,w,k=e.homeInfo,S=e.history,C=e.addtopicData,E=e.subtopicData,T=e.volumeTopicCount,D=Object(v.useState)({}),I=Object(u.a)(D,2),B=I[0],L=I[1],G=Object(v.useState)(0),P=Object(u.a)(G,2),K=P[0],q=P[1],z=Object(v.useState)(0),J=Object(u.a)(z,2),V=J[0],Q=J[1],A=Object(v.useState)(0),H=Object(u.a)(A,2),M=H[0],R=H[1],F=Object(v.useState)(0),U=Object(u.a)(F,2),W=U[0],X=U[1],Y=Object(v.useState)(0),Z=Object(u.a)(Y,2),$=Z[0],ee=Z[1],te=Object(v.useState)(0),ne=Object(u.a)(te,2),ce=ne[0],ie=ne[1],se=Object(v.useState)(1),ae=Object(u.a)(se,2),oe=ae[0],le=ae[1],re=Object(v.useState)("1"),de=Object(u.a)(re,2),ue=de[0],je=(de[1],Object(v.useState)([])),ve=Object(u.a)(je,2),be=ve[0],he=ve[1],me=Object(v.useState)([]),pe=Object(u.a)(me,2),Oe=pe[0],xe=pe[1],fe=Object(v.useState)([]),ge=Object(u.a)(fe,2),_e=ge[0],Ne=ge[1],ye=Object(v.useState)(!0),we=Object(u.a)(ye,2),ke=we[0],Se=we[1],Ce=Object(v.useState)(!1),Ee=Object(u.a)(Ce,2),Te=Ee[0],De=Ee[1],Ie=Object(v.useState)(""),Be=Object(u.a)(Ie,2),Le=Be[0],Ge=Be[1];Object(v.useEffect)((function(){return Pe(W,Oe,M,$,oe),function(){}}),[T]);var Pe=function(){var e=Object(d.a)(r.a.mark((function e(t){var n,c,i,s,a,o,l,d=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:0,c=d.length>2&&void 0!==d[2]?d[2]:0,i=d.length>3&&void 0!==d[3]?d[3]:0,s=d.length>4&&void 0!==d[4]?d[4]:1,e.next=6,Object(b.g)({grade_id:t,konwledge_id:n,type:c,level:i,page:s});case 6:a=e.sent,o=a.code,l=a.data,a.msg,200===o&&(L(l),X(null===l||void 0===l?void 0:l.grade_id));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var Ke=function(){De(!1)},qe=function(){var e=Object(d.a)(r.a.mark((function e(t,n){var c,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)({exercises_id:[t]});case 2:c=e.sent,i=c.code,s=c.msg,200==i?(o.b.success(s),C(1)):(Ge(s),De(!0));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ze=function(){var e=Object(d.a)(r.a.mark((function e(t){var n,c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)({exercises_id:t});case 2:n=e.sent,c=n.code,i=n.msg,200==c?(o.b.success(i),E(1)):(Ge(i),De(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Je=function(){var e=Object(d.a)(r.a.mark((function e(){var t,n,c,i,s,a,l,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=null===B||void 0===B||null===(t=B.exercisesLists)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.map((function(e){return e.id})),e.next=3,Object(b.a)({exercises_id:c});case 3:i=e.sent,s=i.code,a=i.msg,200==s?(o.b.success(a),C(null===B||void 0===B||null===(l=B.exercisesLists)||void 0===l||null===(d=l.data)||void 0===d?void 0:d.length)):(Ge(a),De(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{id:"Knowledge",children:[Object(j.jsxs)(a.a,{separator:Object(j.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(j.jsxs)(a.a.Item,{style:{cursor:"pointer",color:"#222"},onClick:function(e){e.preventDefault(),localStorage.setItem("menuIndex",0),S.push("/main/index")},children:[Object(j.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"},alt:"position"}),"\u9996\u9875"]}),Object(j.jsx)(a.a.Item,{style:{cursor:"pointer",color:"#222"},children:"\u77e5\u8bc6\u5e93"})]}),Object(j.jsxs)("div",{className:"Knowledge_box",children:[Object(j.jsxs)("div",{className:"left_box",children:[Object(j.jsxs)("div",{className:"title",children:[null===B||void 0===B||null===(t=B.grades)||void 0===t?void 0:t.map((function(e){if((null===e||void 0===e?void 0:e.id)==(null===B||void 0===B?void 0:B.grade_id))return null===e||void 0===e?void 0:e.name})),null===k||void 0===k||null===(n=k.teacher)||void 0===n||null===(l=n.get_subject)||void 0===l?void 0:l.title," \xb7 \u77e5\u8bc6\u70b9"]}),Object(j.jsx)(s.a,{checkable:!0,showLine:!0,onExpand:function(e){console.log("onExpand",e),he(e),Se(!1)},expandedKeys:be,autoExpandParent:ke,onCheck:function(e){console.log("onCheck",e),xe(e),Pe(W,e,M,$,ue)},checkedKeys:Oe,onSelect:function(e,t){console.log("onSelect",t),Ne(e)},selectedKeys:_e,treeData:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return null===t||void 0===t?void 0:t.map((function(t){return{title:null===t||void 0===t?void 0:t.name,key:null===t||void 0===t?void 0:t.id,children:(null===t||void 0===t?void 0:t.children)&&e(null===t||void 0===t?void 0:t.children)}}))}(null===B||void 0===B?void 0:B.knowledge)})]}),Object(j.jsxs)("div",{className:"right_box",children:[Object(j.jsxs)("div",{className:"top_box",children:[Object(j.jsxs)("div",{className:"select_box",children:[Object(j.jsxs)("div",{className:"grade grop_warp",children:[Object(j.jsx)("span",{className:"title",children:"\u5e74\u7ea7\uff1a"}),Object(j.jsx)("div",{className:"select_items",children:null===B||void 0===B||null===(h=B.grades)||void 0===h?void 0:h.map((function(e,t){return Object(j.jsx)("div",{className:t===K?"select_item Selected":"select_item",onClick:function(){return function(e,t){q(t),X(e),Pe(e,Oe,M,$,oe)}(null===e||void 0===e?void 0:e.id,t)},children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))})]}),Object(j.jsxs)("div",{className:"Difficulty grop_warp",children:[Object(j.jsx)("span",{className:"title",children:"\u96be\u5ea6\uff1a"}),Object(j.jsx)("div",{className:"select_items",children:null===B||void 0===B||null===(m=B.level)||void 0===m?void 0:m.map((function(e,t){return Object(j.jsx)("div",{className:t===V?"select_item Selected":"select_item",onClick:function(){return function(e){Q(e),ee(e),Pe(W,Oe,M,e,oe)}(t)},children:e},t)}))})]}),Object(j.jsxs)("div",{className:"Questions grop_warp",children:[Object(j.jsx)("span",{className:"title",children:"\u9898\u7c7b\uff1a"}),Object(j.jsx)("div",{className:"select_items",children:null===B||void 0===B||null===(f=B.questionCategory)||void 0===f?void 0:f.map((function(e,t){return Object(j.jsx)("div",{className:t===ce?"select_item Selected":"select_item",onClick:function(){return function(e,t){R(e),ie(t),Pe(W,Oe,e,$,oe)}(null===e||void 0===e?void 0:e.id,t)},children:null===e||void 0===e?void 0:e.title},null===e||void 0===e?void 0:e.id)}))})]})]}),Object(j.jsxs)("div",{className:"tip_box",children:[Object(j.jsxs)("div",{className:"left_boxs",children:[Object(j.jsxs)("div",{className:"timer",children:[Object(j.jsx)("span",{children:"\u65f6\u95f4"}),Object(j.jsx)("img",{className:"down",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down.png",alt:"down"})]}),Object(j.jsxs)("div",{className:"count",children:[Object(j.jsx)("span",{children:"\u4f7f\u7528\u6b21\u6570"}),Object(j.jsx)("img",{className:"down",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down.png",alt:"down"})]})]}),Object(j.jsxs)("div",{className:"right_boxs",children:[Object(j.jsxs)("div",{className:"total",children:["\u5171\u8ba1\uff1a",null===B||void 0===B||null===(g=B.exercisesLists)||void 0===g?void 0:g.total,"\u9898"]}),Object(j.jsx)("div",{className:"allin",onClick:Je,children:"\u9009\u62e9\u672c\u9875\u5168\u90e8\u8bd5\u9898"})]})]})]}),Object(j.jsx)("div",{className:"content",children:null===B||void 0===B||null===(_=B.exercisesLists)||void 0===_||null===(N=_.data)||void 0===N?void 0:N.map((function(e){var t;return Object(j.jsxs)("div",{className:"items",children:[Object(j.jsx)("div",{className:"top_title",children:Object(j.jsxs)("div",{className:"info_class",children:[Object(j.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(j.jsx)("span",{children:null===B||void 0===B?void 0:B.level[null===e||void 0===e?void 0:e.level]})]}),Object(j.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(t=e.get_question_category)||void 0===t?void 0:t.title]})]})}),Object(j.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.content_all}}),Object(j.jsxs)("div",{className:"bot_btns",children:[Object(j.jsx)("div",{className:"left_box_warp",children:Object(j.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(p.g)(1e3*(null===e||void 0===e?void 0:e.update_time))]})}),Object(j.jsxs)("div",{className:"right_box_warp",children:[Object(j.jsxs)("div",{className:"answers",children:[Object(j.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(j.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(j.jsxs)("div",{className:"details",onClick:function(){return t=null===e||void 0===e?void 0:e.id,void S.push("/main/questiondetails?id=".concat(t));var t},children:[Object(j.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(j.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),(null===e||void 0===e?void 0:e.is_basket)?Object(j.jsxs)(i.a,{className:"sub",variant:"contained",onClick:function(){return ze(null===e||void 0===e?void 0:e.id)},children:[Object(j.jsx)("em",{children:"-"}),"\u79fb\u9664"]}):Object(j.jsxs)(i.a,{className:"add",variant:"contained",onClick:function(){return qe(null===e||void 0===e?void 0:e.id,null===e||void 0===e?void 0:e.type)},children:[Object(j.jsx)("em",{children:"+"}),"\u7ec4\u5377"]})]})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(j.jsx)("div",{className:"pages",children:Object(j.jsx)(c.a,{hideOnSinglePage:!1,total:null===B||void 0===B||null===(y=B.exercisesLists)||void 0===y?void 0:y.total,defaultPageSize:20,showSizeChanger:!1,showQuickJumper:!0,pageSize:(null===B||void 0===B||null===(w=B.exercisesLists)||void 0===w?void 0:w.per_page)||20,onChange:function(e,t){le(1*e),Pe(W,Oe,M,$,e)},current:oe})})]}),Object(j.jsx)(O.a,{props:e}),Object(j.jsx)(x.a,{isOpen:Te,title:" ",closeClick:Ke,width:"41.71rem",height:"22.14rem",children:Object(j.jsxs)("div",{id:"tmodelbox",children:[Object(j.jsxs)("div",{className:"title",children:[Object(j.jsx)("img",{className:"notice",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/notice.png",alt:"notice"}),Object(j.jsx)("span",{children:"\u64cd\u4f5c\u5931\u8d25"})]}),Object(j.jsx)("div",{className:"body_text",children:Le}),Object(j.jsx)(i.a,{type:"primary",className:"btn",onClick:Ke,children:"\u6211\u77e5\u9053\u4e86"})]})})]})]})}t.default=Object(h.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setData:function(t){var n={type:m.c,value:t};e(n)},addtopicData:function(t){var n={type:m.a,value:t};e(n)},subtopicData:function(t){var n={type:m.e,value:t};e(n)},settopicData:function(t){var n={type:m.d,value:t};e(n)}}}))(Object(v.memo)(f))}}]);