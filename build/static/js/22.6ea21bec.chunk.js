(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[22],{299:function(e,t,a){},353:function(e,t,a){"use strict";a.r(t);a(195);var c=a(198),i=(a(174),a(173)),s=(a(184),a(190)),n=a(20),l=a.n(n),o=a(39),r=a(8),d=a(13),j=a(0),u=(a(299),a(175));function h(e){return Object(u.a)({url:"/getSchoolBasedList",method:"GET",params:e})}var b=a(176);function m(e){var t,a,n,u,m=Object(j.useState)(""),v=Object(r.a)(m,2),O=v[0],p=v[1],x=Object(j.useState)(""),g=Object(r.a)(x,2),_=g[0],f=g[1],N=Object(j.useState)(1),S=Object(r.a)(N,2),w=S[0],y=S[1],k=Object(j.useState)({}),z=Object(r.a)(k,2),C=z[0],P=z[1];Object(j.useEffect)((function(){return V(),function(){}}),[]);var V=function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,c,i,s,n=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",a=n.length>1&&void 0!==n[1]?n[1]:1,e.next=4,h({title:t,page:a});case 4:c=e.sent,i=c.code,s=c.data,c.msg,200===i&&P(s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{id:"Schoolbased",children:[Object(d.jsxs)("div",{className:"top_box",children:[Object(d.jsx)("span",{className:"name",children:"\u8bd5\u5377\u540d\u79f0:"}),Object(d.jsx)(s.a,{className:"outlined",variant:"outlined",value:O,style:{width:"11.43rem",height:"2.29rem"},size:"small",onInput:function(e){var t=e.target.value;console.log(Object(b.a)(t)),p(Object(b.a)(t)),f(Object(b.a)(t))}}),Object(d.jsx)(i.a,{variant:"contained",className:"btn",onClick:function(){y(1),V(O,1),p("")},children:"\u67e5\u8be2"})]}),Object(d.jsxs)("div",{className:"body_box",children:[Object(d.jsx)("div",{className:"lists",children:null===C||void 0===C||null===(t=C.examsSchool)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.map((function(e){var t,a;return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsxs)("div",{className:"left_box",children:[Object(d.jsx)("img",{className:"paper_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png",alt:"paper_icon"}),Object(d.jsxs)("div",{className:"info_box",children:[Object(d.jsx)("div",{className:"title",children:null===e||void 0===e||null===(t=e.get_base)||void 0===t?void 0:t.title}),Object(d.jsxs)("div",{className:"bot_info",children:[Object(d.jsx)("img",{className:"time_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/time_icon.png",alt:"time_icon"}),Object(d.jsxs)("span",{className:"time_text",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(b.e)(1e3*(null===e||void 0===e||null===(a=e.get_base)||void 0===a?void 0:a.update_time))]}),Object(d.jsx)("img",{className:"View_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View_icon.png",alt:"View_icon"}),Object(d.jsx)("span",{className:"view_text",children:"\u6d4f\u89c8\u6b21\u6570\uff1a166"})]})]})]}),Object(d.jsx)("div",{className:"right_box",children:Object(d.jsx)("img",{className:"download_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right.png",alt:"download_icon"})})]},null===e||void 0===e?void 0:e.id)}))}),Object(d.jsx)("div",{className:"Pagination",children:Object(d.jsx)(c.a,{hideOnSinglePage:!1,showSizeChanger:!1,total:null===C||void 0===C||null===(n=C.examsSchool)||void 0===n?void 0:n.total,defaultPageSize:20,pageSize:(null===C||void 0===C||null===(u=C.examsSchool)||void 0===u?void 0:u.per_page)||20,onChange:function(e,t){y(e),V(_,e)},current:w})})]})]})}t.default=Object(j.memo)(m)}}]);