(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[25],{201:function(e,t,i){"use strict";i(214);var n=i(219),c=i(9),a=i(0);i(202);function s(e){var t=e.children,i=e.isOpen,a=void 0!==i&&i,s=e.closeClick,r=e.title,l=void 0===r?"":r,d=e.width,o=void 0===d?"41.71rem":d,u=e.height,j=void 0===u?"23.5rem":u,v=j.split("rem")[0]-4.64;return Object(c.jsx)(n.a,{className:"T_modelbox",title:l,visible:a,onCancel:s,footer:null,centered:!0,width:o,height:j,bodyStyle:{height:v+"rem"},closeIcon:Object(c.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(a.memo)(s)},202:function(e,t,i){},213:function(e,t,i){"use strict";i.d(t,"f",(function(){return s})),i.d(t,"e",(function(){return r})),i.d(t,"c",(function(){return l})),i.d(t,"b",(function(){return d})),i.d(t,"d",(function(){return o})),i.d(t,"a",(function(){return u})),i.d(t,"g",(function(){return j}));var n=i(190),c=i(196),a=i.n(c);function s(){return Object(n.a)({url:"/getTeamList",method:"GET"})}function r(e){return Object(n.a)({url:"/getTeamDetail",method:"GET",params:e})}function l(e){return Object(n.a)({url:"/delTeamTeacher",method:"POST",data:a.a.stringify(e)})}function d(e){return Object(n.a)({url:"/delTeamStudent",method:"POST",data:a.a.stringify(e)})}function o(){return Object(n.a)({url:"/getAddTeam",method:"GET"})}function u(e){return Object(n.a)({url:"/addTeam",method:"POST",data:a.a.stringify(e)})}function j(e){return Object(n.a)({url:"/studentAcademicReport",method:"GET",params:e})}},380:function(e,t,i){},446:function(e,t,i){"use strict";i.r(t);i(184);var n=i(183),c=(i(241),i(239)),a=(i(192),i(193)),s=(i(189),i(64)),r=i(186),l=i.n(r),d=i(187),o=i(188),u=i(9),j=i(0),v=(i(380),i(213)),m=i(191),b=i(65),h=i(29),x=i(201);function O(e){var t,i,r,b,h,O=e.location,p=e.history,f=e.homeInfo,_=Object(m.g)(O.search).id,g=Object(j.useState)({}),N=Object(o.a)(g,2),y=N[0],T=N[1],w=Object(j.useState)({}),k=Object(o.a)(w,2),C=k[0],S=k[1],I=Object(j.useState)(!1),D=Object(o.a)(I,2),E=D[0],A=D[1],G=Object(j.useState)(""),P=Object(o.a)(G,2);P[0],P[1];Object(j.useEffect)((function(){return J(),function(){}}),[]);var J=function(){var e=Object(d.a)(l.a.mark((function e(){var t,i,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)({team_id:_});case 2:t=e.sent,i=t.code,n=t.data,t.msg,200==i&&T(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(l.a.mark((function e(t,i){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)({team_id:t,teacher_id:i});case 2:n=e.sent,c=n.code,a=n.msg,200===c?s.b.success(a):s.b.error(a),J();case 7:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),F=function(){var e=Object(d.a)(l.a.mark((function e(){var t,i,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.b)({team_id:C.team_id,student_id:C.student_id});case 2:t=e.sent,i=t.code,n=t.msg,200===i?s.b.success(n):s.b.error(n),A(!1),J();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"ClassDetails",children:[Object(u.jsxs)(a.a,{separator:Object(u.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(u.jsxs)(a.a.Item,{onClick:function(e){e.preventDefault(),p.push("/index")},style:{cursor:"pointer",color:"#222"},children:[Object(u.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(u.jsx)(a.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},onClick:function(e){e.preventDefault(),p.push("/class")},children:"\u73ed\u7ea7\u4fe1\u606f"}),Object(u.jsxs)(a.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:[null===y||void 0===y||null===(t=y.team)||void 0===t||null===(i=t.get_grade)||void 0===i?void 0:i.name,null===y||void 0===y||null===(r=y.team)||void 0===r?void 0:r.name]})]}),Object(u.jsxs)("div",{className:"teacher_list",children:[Object(u.jsxs)("div",{className:"title_text",children:[Object(u.jsx)("span",{children:"\u8001\u5e08\u59d3\u540d"}),Object(u.jsx)("span",{children:"\u79d1\u76ee"}),Object(u.jsx)("span",{children:"\u6700\u540e\u767b\u5f55\u65f6\u95f4"}),Object(u.jsx)("span",{children:"\u64cd\u4f5c"})]}),Object(u.jsx)("div",{className:"teacher_items",children:null===y||void 0===y||null===(b=y.teamTeacher)||void 0===b?void 0:b.map((function(e){var t,i,n,a,s;return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsxs)("div",{className:"name_box flex_box",children:[Object(u.jsx)(c.a,{className:"Avatar",alt:"avatar",src:null===e||void 0===e?void 0:e.avatar_file}),Object(u.jsxs)("span",{children:[null===e||void 0===e?void 0:e.true_name,"\u8001\u5e08"]})]}),Object(u.jsx)("div",{className:"subject_box flex_box",children:Object(u.jsx)("span",{children:null===e||void 0===e||null===(t=e.get_subject)||void 0===t?void 0:t.title})}),Object(u.jsx)("div",{className:"lasttime_box flex_box",children:Object(u.jsx)("span",{children:Object(m.f)(1e3*(null===e||void 0===e?void 0:e.last_login_time))})}),Object(u.jsx)("div",{className:"operate_box flex_box",children:(null===y||void 0===y||null===(i=y.team)||void 0===i?void 0:i.teacher_id)!==(null===e||void 0===e?void 0:e.id)&&(null===y||void 0===y||null===(n=y.team)||void 0===n?void 0:n.teacher_id)===(null===f||void 0===f||null===(a=f.teacher)||void 0===a?void 0:a.id)&&0===(null===y||void 0===y||null===(s=y.team)||void 0===s?void 0:s.is_active)?Object(u.jsx)("span",{onClick:function(){var t;return R(null===y||void 0===y||null===(t=y.team)||void 0===t?void 0:t.id,null===e||void 0===e?void 0:e.id)},children:"\u79fb\u9664"}):Object(u.jsx)("span",{children:"-"})})]},null===e||void 0===e?void 0:e.id)}))})]}),Object(u.jsxs)("div",{className:"student_list",children:[Object(u.jsxs)("div",{className:"title_text",children:[Object(u.jsx)("span",{children:"\u5b66\u751f\u59d3\u540d"}),Object(u.jsx)("span",{children:"\u5df2\u6536\u96c6\u9519\u9898\u6570"}),Object(u.jsx)("span",{children:"\u66f4\u65b0\u9519\u9898\u65f6\u95f4"}),Object(u.jsx)("span",{children:"\u64cd\u4f5c"})]}),Object(u.jsx)("div",{className:"teacher_items",children:null===y||void 0===y||null===(h=y.teamStudent)||void 0===h?void 0:h.map((function(e){var t,i;return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsxs)("div",{className:"name_box flex_box",children:[Object(u.jsx)(c.a,{className:"Avatar",alt:"avatar",src:null===e||void 0===e?void 0:e.avatar_file}),Object(u.jsx)("span",{children:null===e||void 0===e?void 0:e.true_name}),1===(null===e||void 0===e?void 0:e.is_vip)?Object(u.jsx)("img",{className:"vip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/vip.png",alt:"vip"}):Object(u.jsx)(u.Fragment,{})]}),Object(u.jsx)("div",{className:"subject_box flex_box",children:Object(u.jsx)("span",{children:null===e||void 0===e?void 0:e.errorCount})}),Object(u.jsx)("div",{className:"lasttime_box flex_box",children:Object(u.jsx)("span",{children:Object(m.f)(1e3*(null===e||void 0===e?void 0:e.last_add_exercises_time)||(new Date).getTime())})}),Object(u.jsxs)("div",{className:"operate_box flex_box",children:[Object(u.jsx)("span",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,void p.push("/main/studyreport?id=".concat(t,"&iid=").concat(_));var t},children:"\u5b66\u60c5\u62a5\u544a"}),(null===y||void 0===y||null===(t=y.team)||void 0===t?void 0:t.teacher_id)!==(null===e||void 0===e?void 0:e.id)&&0===(null===y||void 0===y||null===(i=y.team)||void 0===i?void 0:i.is_active)?Object(u.jsx)("span",{onClick:function(){var t,i,n,c;return i=null===y||void 0===y||null===(t=y.team)||void 0===t?void 0:t.id,n=null===e||void 0===e?void 0:e.id,c=null===e||void 0===e?void 0:e.true_name,S({team_id:i,student_id:n,true_name:c}),void A(!0)},children:"\u79fb\u9664"}):Object(u.jsx)("span",{children:"-"})]})]},null===e||void 0===e?void 0:e.id)}))})]}),Object(u.jsx)(x.a,{isOpen:E,title:"\u3010\u6e29\u99a8\u63d0\u793a\u3011",closeClick:function(){return A(!1)},width:"41.71rem",height:"19.93rem",children:Object(u.jsxs)("div",{id:"tmodelbox",className:"delitem",children:[Object(u.jsxs)("div",{className:"title",children:["\u786e\u5b9a\u662f\u5426\u79fb\u9664\u300a",null===C||void 0===C?void 0:C.true_name,"\u300b\u5b66\u751f\uff1f"]}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)(n.a,{type:"primary",className:"btn",onClick:F,children:"\u786e\u5b9a"}),Object(u.jsx)(n.a,{type:"primary",className:"btncanle",onClick:function(){return A(!1)},children:"\u53d6\u6d88"})]})]})})]})}t.default=Object(b.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var i={type:h.c,value:t};e(i)}}}))(Object(j.memo)(O))}}]);