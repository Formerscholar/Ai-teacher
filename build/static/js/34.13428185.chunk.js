(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[34],{172:function(e,t,i){"use strict";i(173);var n=i(181),c=i(8),a=i(0);i(175);function s(e){var t=e.children,i=e.isOpen,a=void 0!==i&&i,s=e.closeClick,r=e.title,l=void 0===r?"":r,d=e.width,o=void 0===d?"41.71rem":d,u=e.height,j=void 0===u?"23.5rem":u,m=j.split("rem")[0]-4.64;return Object(c.jsx)(n.a,{className:"T_modelbox",title:l,visible:a,onCancel:s,footer:null,centered:!0,width:o,height:j,bodyStyle:{height:m+"rem"},closeIcon:Object(c.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(a.memo)(s)},175:function(e,t,i){},215:function(e,t,i){"use strict";i.d(t,"g",(function(){return s})),i.d(t,"f",(function(){return r})),i.d(t,"d",(function(){return l})),i.d(t,"c",(function(){return d})),i.d(t,"e",(function(){return o})),i.d(t,"a",(function(){return u})),i.d(t,"h",(function(){return j})),i.d(t,"b",(function(){return m}));var n=i(157),c=i(158),a=i.n(c);function s(){return Object(n.a)({url:"/getTeamList",method:"GET"})}function r(e){return Object(n.a)({url:"/getTeamDetail",method:"GET",params:e})}function l(e){return Object(n.a)({url:"/delTeamTeacher",method:"POST",data:a.a.stringify(e)})}function d(e){return Object(n.a)({url:"/delTeamStudent",method:"POST",data:a.a.stringify(e)})}function o(){return Object(n.a)({url:"/getAddTeam",method:"GET"})}function u(e){return Object(n.a)({url:"/addTeam",method:"POST",data:a.a.stringify(e)})}function j(e){return Object(n.a)({url:"/studentAcademicReport",method:"GET",params:e})}function m(e){return Object(n.a)({url:"/delTeam",method:"POST",data:a.a.stringify(e)})}},318:function(e,t,i){},357:function(e,t,i){"use strict";i.r(t);i(236);var n=i(234),c=(i(151),i(150)),a=(i(164),i(165)),s=(i(160),i(73)),r=i(155),l=i.n(r),d=i(156),o=i(152),u=i(8),j=i(0),m=(i(318),i(215)),b=i(154),v=i(72),h=i(29),O=i(172);function x(e){var t,i,r,v,h,x,p,f,_=e.location,g=e.history,N=e.homeInfo,y=Object(b.g)(_.search).id,k=Object(j.useState)({}),w=Object(o.a)(k,2),C=w[0],T=w[1],S=Object(j.useState)({}),I=Object(o.a)(S,2),D=I[0],E=I[1],P=Object(j.useState)(!1),A=Object(o.a)(P,2),G=A[0],J=A[1],R=Object(j.useState)(!1),F=Object(o.a)(R,2),L=F[0],V=F[1],q=Object(j.useState)(!1),z=Object(o.a)(q,2),B=z[0],H=z[1],K=Object(j.useState)(""),M=Object(o.a)(K,2),Q=M[0],U=M[1],W=Object(j.useState)(0),X=Object(o.a)(W,2),Y=X[0],Z=X[1];Object(j.useEffect)((function(){return $(),function(){}}),[]);var $=function(){var e=Object(d.a)(l.a.mark((function e(){var t,i,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)({team_id:y});case 2:t=e.sent,i=t.code,n=t.data,t.msg,200==i&&T(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(d.a)(l.a.mark((function e(){var t,i,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.b)({team_id:y});case 2:t=e.sent,i=t.code,n=t.msg,200===i?(s.b.success(n),g.go(-1)):s.b.error(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(d.a)(l.a.mark((function e(){var t,i,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.d)({team_id:y,teacher_id:Y});case 2:t=e.sent,i=t.code,n=t.msg,200===i?s.b.success(n):s.b.error(n),H(!1),$();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(d.a)(l.a.mark((function e(){var t,i,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.c)({team_id:D.team_id,student_id:D.student_id});case 2:t=e.sent,i=t.code,n=t.msg,200===i?s.b.success(n):s.b.error(n),J(!1),$();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"ClassDetails",children:[Object(u.jsxs)(a.a,{separator:Object(u.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(u.jsxs)(a.a.Item,{onClick:function(e){e.preventDefault(),g.push("/index")},style:{cursor:"pointer",color:"#222"},children:[Object(u.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(u.jsx)(a.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},onClick:function(e){e.preventDefault(),g.push("/class")},children:"\u73ed\u7ea7\u4fe1\u606f"}),Object(u.jsxs)(a.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:[null===C||void 0===C||null===(t=C.team)||void 0===t||null===(i=t.get_grade)||void 0===i?void 0:i.name,null===C||void 0===C||null===(r=C.team)||void 0===r?void 0:r.name]})]}),Object(u.jsxs)("div",{className:"teacher_list",children:[Object(u.jsxs)("div",{className:"title_del",children:[Object(u.jsxs)("div",{className:"left_name",children:[null===C||void 0===C||null===(v=C.team)||void 0===v||null===(h=v.get_grade)||void 0===h?void 0:h.name,null===C||void 0===C||null===(x=C.team)||void 0===x?void 0:x.name]}),Object(u.jsx)(c.a,{type:"primary",className:"delbtn",onClick:function(){V(!0)},children:"\u89e3\u6563\u73ed\u7ea7"})]}),Object(u.jsxs)("div",{className:"title_text",children:[Object(u.jsx)("span",{children:"\u8001\u5e08\u59d3\u540d"}),Object(u.jsx)("span",{children:"\u79d1\u76ee"}),Object(u.jsx)("span",{children:"\u6700\u540e\u767b\u5f55\u65f6\u95f4"}),Object(u.jsx)("span",{children:"\u64cd\u4f5c"})]}),Object(u.jsx)("div",{className:"teacher_items",children:null===C||void 0===C||null===(p=C.teamTeacher)||void 0===p?void 0:p.map((function(e){var t,i,c,a,s;return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsxs)("div",{className:"name_box flex_box",children:[Object(u.jsx)(n.a,{className:"Avatar",alt:"avatar",src:null===e||void 0===e?void 0:e.avatar_file}),Object(u.jsx)("span",{children:null===e||void 0===e?void 0:e.true_name})]}),Object(u.jsx)("div",{className:"subject_box flex_box",children:Object(u.jsx)("span",{children:null===e||void 0===e||null===(t=e.get_subject)||void 0===t?void 0:t.title})}),Object(u.jsx)("div",{className:"lasttime_box flex_box",children:Object(u.jsx)("span",{children:Object(b.f)(1e3*(null===e||void 0===e?void 0:e.last_login_time))})}),Object(u.jsx)("div",{className:"operate_box flex_box",children:(null===C||void 0===C||null===(i=C.team)||void 0===i?void 0:i.teacher_id)!==(null===e||void 0===e?void 0:e.id)&&(null===C||void 0===C||null===(c=C.team)||void 0===c?void 0:c.teacher_id)===(null===N||void 0===N||null===(a=N.teacher)||void 0===a?void 0:a.id)&&0===(null===C||void 0===C||null===(s=C.team)||void 0===s?void 0:s.is_active)?Object(u.jsx)("span",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,i=null===e||void 0===e?void 0:e.true_name,Z(t),U(i),void H(!0);var t,i},children:"\u79fb\u9664"}):Object(u.jsx)("span",{children:"-"})})]},null===e||void 0===e?void 0:e.id)}))})]}),Object(u.jsxs)("div",{className:"student_list",children:[Object(u.jsxs)("div",{className:"title_text",children:[Object(u.jsx)("span",{children:"\u5b66\u751f\u59d3\u540d"}),Object(u.jsx)("span",{children:"VIP\u8fc7\u671f\u65f6\u95f4"}),Object(u.jsx)("span",{children:"\u5df2\u6536\u96c6\u9519\u9898\u6570"}),Object(u.jsx)("span",{children:"\u66f4\u65b0\u9519\u9898\u65f6\u95f4"}),Object(u.jsx)("span",{children:"\u64cd\u4f5c"})]}),Object(u.jsx)("div",{className:"teacher_items",children:null===C||void 0===C||null===(f=C.teamStudent)||void 0===f?void 0:f.map((function(e){var t,i;return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsxs)("div",{className:"name_box flex_box",children:[Object(u.jsx)(n.a,{className:"Avatar",alt:"avatar",src:null===e||void 0===e?void 0:e.avatar_file}),Object(u.jsx)("span",{children:null===e||void 0===e?void 0:e.true_name}),1===(null===e||void 0===e?void 0:e.is_vip)?Object(u.jsx)("img",{className:"vip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/vip.png",alt:"vip"}):Object(u.jsx)(u.Fragment,{})]}),Object(u.jsx)("div",{className:"end_time flex_box",children:Object(b.f)(1e3*e.vip_time)}),Object(u.jsx)("div",{className:"subject_box flex_box",children:Object(u.jsx)("span",{children:null===e||void 0===e?void 0:e.errorCount})}),Object(u.jsx)("div",{className:"lasttime_box flex_box",children:Object(u.jsx)("span",{children:Object(b.f)(1e3*(null===e||void 0===e?void 0:e.last_add_exercises_time)||(new Date).getTime())})}),Object(u.jsxs)("div",{className:"operate_box flex_box",children:[Object(u.jsx)("span",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,void g.push("/class/detail/chars?id=".concat(t,"&iid=").concat(y));var t},children:"\u5b66\u60c5\u62a5\u544a"}),(null===C||void 0===C||null===(t=C.team)||void 0===t?void 0:t.teacher_id)!==(null===e||void 0===e?void 0:e.id)&&0===(null===C||void 0===C||null===(i=C.team)||void 0===i?void 0:i.is_active)?Object(u.jsx)("span",{onClick:function(){var t,i,n,c;return i=null===C||void 0===C||null===(t=C.team)||void 0===t?void 0:t.id,n=null===e||void 0===e?void 0:e.id,c=null===e||void 0===e?void 0:e.true_name,E({team_id:i,student_id:n,true_name:c}),void J(!0)},children:"\u79fb\u9664"}):Object(u.jsx)("span",{children:"-"})]})]},null===e||void 0===e?void 0:e.id)}))})]}),Object(u.jsx)(O.a,{isOpen:G,title:"\u3010\u6e29\u99a8\u63d0\u793a\u3011",closeClick:function(){return J(!1)},width:"41.71rem",height:"19.93rem",children:Object(u.jsxs)("div",{id:"tmodelbox",className:"delitem",children:[Object(u.jsxs)("div",{className:"title",children:["\u786e\u5b9a\u662f\u5426\u79fb\u9664\u300a",null===D||void 0===D?void 0:D.true_name,"\u300b\u5b66\u751f\uff1f"]}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)(c.a,{type:"primary",className:"btn",onClick:ie,children:"\u786e\u5b9a"}),Object(u.jsx)(c.a,{type:"primary",className:"btncanle",onClick:function(){return J(!1)},children:"\u53d6\u6d88"})]})]})}),Object(u.jsx)(O.a,{isOpen:L,title:"\u3010\u6e29\u99a8\u63d0\u793a\u3011",closeClick:function(){return V(!1)},width:"41.71rem",height:"19.93rem",children:Object(u.jsxs)("div",{id:"tmodelbox",className:"delitem",children:[Object(u.jsx)("div",{className:"title",children:"\u786e\u5b9a\u662f\u5426\u89e3\u6563\u8be5\u73ed\u7ea7\uff1f"}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)(c.a,{type:"primary",className:"btn",onClick:ee,children:"\u786e\u5b9a"}),Object(u.jsx)(c.a,{type:"primary",className:"btncanle",onClick:function(){return V(!1)},children:"\u53d6\u6d88"})]})]})}),Object(u.jsx)(O.a,{isOpen:B,title:"\u3010\u6e29\u99a8\u63d0\u793a\u3011",closeClick:function(){return H(!1)},width:"41.71rem",height:"19.93rem",children:Object(u.jsxs)("div",{id:"tmodelbox",className:"delitem",children:[Object(u.jsxs)("div",{className:"title",children:["\u786e\u5b9a\u662f\u5426\u79fb\u9664\u300a",Q,"\u300b\u8001\u5e08\uff1f"]}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)(c.a,{type:"primary",className:"btn",onClick:te,children:"\u786e\u5b9a"}),Object(u.jsx)(c.a,{type:"primary",className:"btncanle",onClick:function(){return H(!1)},children:"\u53d6\u6d88"})]})]})})]})}t.default=Object(v.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var i={type:h.c,value:t};e(i)}}}))(Object(j.memo)(x))}}]);