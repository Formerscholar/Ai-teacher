(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[25],{215:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s}));var c=a(185);function n(e){return Object(c.a)({url:"/getSchoolBasedList",method:"GET",params:e})}function i(e){return Object(c.a)({url:"/getSchoolBasedDetail",method:"GET",params:e})}function s(e){return Object(c.a)({url:"/teamAcademicReport",method:"GET",params:e})}},341:function(e,t,a){},405:function(e,t,a){"use strict";a.r(t);a(208);var c=a(209),n=(a(184),a(183)),i=(a(210),a(217)),s=a(191),o=a.n(s),l=a(192),r=a(194),d=a(10),u=a(0),b=(a(341),a(215)),h=a(193);function j(e){var t,a,s,j,m=e.history,v=Object(u.useState)(""),O=Object(r.a)(v,2),p=O[0],g=O[1],x=Object(u.useState)(""),f=Object(r.a)(x,2),_=f[0],N=f[1],S=Object(u.useState)(1),w=Object(r.a)(S,2),y=w[0],k=w[1],z=Object(u.useState)({}),C=Object(r.a)(z,2),E=C[0],G=C[1];Object(u.useEffect)((function(){return P(),function(){}}),[]);var P=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,c,n,i,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"",a=s.length>1&&void 0!==s[1]?s[1]:1,e.next=4,Object(b.b)({title:t,page:a});case 4:c=e.sent,n=c.code,i=c.data,c.msg,200===n&&G(i);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{id:"Schoolbased",children:[Object(d.jsxs)("div",{className:"top_box",children:[Object(d.jsx)("span",{className:"name",children:"\u8bd5\u5377\u540d\u79f0:"}),Object(d.jsx)(i.a,{className:"outlined",variant:"outlined",value:p,style:{width:"11.43rem",height:"2.29rem"},size:"small",onInput:function(e){var t=e.target.value;console.log(Object(h.a)(t)),g(Object(h.a)(t)),N(Object(h.a)(t))}}),Object(d.jsx)(n.a,{variant:"contained",className:"btn",onClick:function(){k(1),P(p,1),g("")},children:"\u67e5\u8be2"})]}),Object(d.jsxs)("div",{className:"body_box",children:[Object(d.jsx)("div",{className:"lists",children:null===E||void 0===E||null===(t=E.examsSchool)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.map((function(e){var t,a;return Object(d.jsxs)("div",{className:"item",onClick:function(){return t=null===e||void 0===e?void 0:e.based_id,void m.push("/main/schoolbaseddetail?id=".concat(t));var t},children:[Object(d.jsxs)("div",{className:"left_box",children:[Object(d.jsx)("img",{className:"paper_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png",alt:"paper_icon"}),Object(d.jsxs)("div",{className:"info_box",children:[Object(d.jsx)("div",{className:"title",children:null===e||void 0===e||null===(t=e.get_base)||void 0===t?void 0:t.title}),Object(d.jsxs)("div",{className:"bot_info",children:[Object(d.jsx)("img",{className:"time_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/time_icon.png",alt:"time_icon"}),Object(d.jsxs)("span",{className:"time_text",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(h.g)(1e3*(null===e||void 0===e||null===(a=e.get_base)||void 0===a?void 0:a.update_time))]}),Object(d.jsx)("img",{className:"View_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View_icon.png",alt:"View_icon"}),Object(d.jsx)("span",{className:"view_text",children:"\u6d4f\u89c8\u6b21\u6570\uff1a166"})]})]})]}),Object(d.jsx)("div",{className:"right_box",children:Object(d.jsx)("img",{className:"download_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right.png",alt:"download_icon"})})]},null===e||void 0===e?void 0:e.id)}))}),Object(d.jsx)("div",{className:"Pagination",children:Object(d.jsx)(c.a,{hideOnSinglePage:!1,showSizeChanger:!1,total:null===E||void 0===E||null===(s=E.examsSchool)||void 0===s?void 0:s.total,defaultPageSize:20,pageSize:(null===E||void 0===E||null===(j=E.examsSchool)||void 0===j?void 0:j.per_page)||20,onChange:function(e,t){k(e),P(_,e)},current:y})})]})]})}t.default=Object(u.memo)(j)}}]);