(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[29],{217:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return v}));var i=n(188),c=n(187),a=n.n(c);function s(){return Object(i.a)({url:"/getTeamList",method:"GET"})}function r(e){return Object(i.a)({url:"/getTeamDetail",method:"GET",params:e})}function l(e){return Object(i.a)({url:"/delTeamTeacher",method:"POST",data:a.a.stringify(e)})}function d(e){return Object(i.a)({url:"/delTeamStudent",method:"POST",data:a.a.stringify(e)})}function o(){return Object(i.a)({url:"/getAddTeam",method:"GET"})}function u(e){return Object(i.a)({url:"/addTeam",method:"POST",data:a.a.stringify(e)})}function v(e){return Object(i.a)({url:"/studentAcademicReport",method:"GET",params:e})}},379:function(e,t,n){},451:function(e,t,n){"use strict";n.r(t);n(237);var i=n(235),c=(n(191),n(195)),a=(n(196),n(65)),s=n(189),r=n.n(s),l=n(190),d=n(194),o=n(10),u=n(0),v=(n(379),n(217)),j=n(200),m=n(68),b=n(33);function h(e){var t,n,s,m,b,h=e.location,x=e.history,O=e.homeInfo,p=Object(j.h)(h.search).id,f=Object(u.useState)({}),_=Object(d.a)(f,2),g=_[0],N=_[1];Object(u.useEffect)((function(){return y(),function(){}}),[]);var y=function(){var e=Object(l.a)(r.a.mark((function e(){var t,n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)({team_id:p});case 2:t=e.sent,n=t.code,i=t.data,t.msg,200==n&&N(i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(r.a.mark((function e(t,n){var i,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)({team_id:t,teacher_id:n});case 2:i=e.sent,c=i.code,s=i.msg,200===c?a.b.success(s):a.b.error(s),y();case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(r.a.mark((function e(t,n){var i,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.b)({team_id:t,student_id:n});case 2:i=e.sent,c=i.code,s=i.msg,200===c?a.b.success(s):a.b.error(s),y();case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"ClassDetails",children:[Object(o.jsxs)(c.a,{separator:Object(o.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(o.jsxs)(c.a.Item,{onClick:function(e){e.preventDefault(),x.push("/main/class")},style:{cursor:"pointer",color:"#222"},children:[Object(o.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u73ed\u7ea7\u4fe1\u606f"]}),Object(o.jsxs)(c.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:[null===g||void 0===g||null===(t=g.team)||void 0===t||null===(n=t.get_grade)||void 0===n?void 0:n.name,null===g||void 0===g||null===(s=g.team)||void 0===s?void 0:s.name]})]}),Object(o.jsxs)("div",{className:"teacher_list",children:[Object(o.jsxs)("div",{className:"title_text",children:[Object(o.jsx)("span",{children:"\u8001\u5e08\u59d3\u540d"}),Object(o.jsx)("span",{children:"\u79d1\u76ee"}),Object(o.jsx)("span",{children:"\u6700\u540e\u767b\u5f55\u65f6\u95f4"}),Object(o.jsx)("span",{children:"\u64cd\u4f5c"})]}),Object(o.jsx)("div",{className:"teacher_items",children:null===g||void 0===g||null===(m=g.teamTeacher)||void 0===m?void 0:m.map((function(e){var t,n,c,a,s;return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsxs)("div",{className:"name_box flex_box",children:[Object(o.jsx)(i.a,{className:"Avatar",alt:"avatar",src:null===e||void 0===e?void 0:e.avatar_file}),Object(o.jsxs)("span",{children:[null===e||void 0===e?void 0:e.true_name,"\u8001\u5e08"]})]}),Object(o.jsx)("div",{className:"subject_box flex_box",children:Object(o.jsx)("span",{children:null===e||void 0===e||null===(t=e.get_subject)||void 0===t?void 0:t.title})}),Object(o.jsx)("div",{className:"lasttime_box flex_box",children:Object(o.jsx)("span",{children:Object(j.g)(1e3*(null===e||void 0===e?void 0:e.last_login_time))})}),Object(o.jsx)("div",{className:"operate_box flex_box",children:(null===g||void 0===g||null===(n=g.team)||void 0===n?void 0:n.teacher_id)!==(null===e||void 0===e?void 0:e.id)&&(null===g||void 0===g||null===(c=g.team)||void 0===c?void 0:c.teacher_id)===(null===O||void 0===O||null===(a=O.teacher)||void 0===a?void 0:a.id)&&0===(null===g||void 0===g||null===(s=g.team)||void 0===s?void 0:s.is_active)?Object(o.jsx)("span",{onClick:function(){var t;return T(null===g||void 0===g||null===(t=g.team)||void 0===t?void 0:t.id,null===e||void 0===e?void 0:e.id)},children:"\u79fb\u9664"}):Object(o.jsx)("span",{children:"-"})})]},null===e||void 0===e?void 0:e.id)}))})]}),Object(o.jsxs)("div",{className:"student_list",children:[Object(o.jsxs)("div",{className:"title_text",children:[Object(o.jsx)("span",{children:"\u5b66\u751f\u59d3\u540d"}),Object(o.jsx)("span",{children:"\u5df2\u6536\u96c6\u9519\u9898\u6570"}),Object(o.jsx)("span",{children:"\u66f4\u65b0\u9519\u9898\u65f6\u95f4"}),Object(o.jsx)("span",{children:"\u64cd\u4f5c"})]}),Object(o.jsx)("div",{className:"teacher_items",children:null===g||void 0===g||null===(b=g.teamStudent)||void 0===b?void 0:b.map((function(e){var t,n;return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsxs)("div",{className:"name_box flex_box",children:[Object(o.jsx)(i.a,{className:"Avatar",alt:"avatar",src:null===e||void 0===e?void 0:e.avatar_file}),Object(o.jsx)("span",{children:null===e||void 0===e?void 0:e.true_name}),1===(null===e||void 0===e?void 0:e.is_vip)?Object(o.jsx)("img",{className:"vip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/vip.png",alt:"vip"}):Object(o.jsx)(o.Fragment,{})]}),Object(o.jsx)("div",{className:"subject_box flex_box",children:Object(o.jsx)("span",{children:null===e||void 0===e?void 0:e.errorCount})}),Object(o.jsx)("div",{className:"lasttime_box flex_box",children:Object(o.jsx)("span",{children:Object(j.g)(1e3*(null===e||void 0===e?void 0:e.last_add_exercises_time)||(new Date).getTime())})}),Object(o.jsxs)("div",{className:"operate_box flex_box",children:[Object(o.jsx)("span",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,n=null===e||void 0===e?void 0:e.true_name,localStorage.setItem("menuIndex",2),void x.push("/main/studyreport?id=".concat(t,"&iid=").concat(p,"&name=").concat(encodeURI(n)));var t,n},children:"\u5b66\u60c5\u62a5\u544a"}),(null===g||void 0===g||null===(t=g.team)||void 0===t?void 0:t.teacher_id)!==(null===e||void 0===e?void 0:e.id)&&0===(null===g||void 0===g||null===(n=g.team)||void 0===n?void 0:n.is_active)?Object(o.jsx)("span",{onClick:function(){var t;return w(null===g||void 0===g||null===(t=g.team)||void 0===t?void 0:t.id,null===e||void 0===e?void 0:e.user_id)},children:"\u79fb\u9664"}):Object(o.jsx)("span",{children:"-"})]})]},null===e||void 0===e?void 0:e.id)}))})]})]})}t.default=Object(m.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var n={type:b.c,value:t};e(n)}}}))(Object(u.memo)(h))}}]);