(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[16],{276:function(e,t,c){},324:function(e,t,c){"use strict";c.r(t);c(183);var a=c(180),s=(c(172),c(174)),n=(c(179),c(182)),i=c(20),o=c.n(i),l=c(39),r=c(8),d=c(13),j=c(0),u=(c(276),c(173));function h(e){return Object(u.a)({url:"/getSchoolResourcesList",method:"GET",params:e})}var b=c(175);function m(e){var t,c,i,u,m=Object(j.useState)(""),v=Object(r.a)(m,2),O=v[0],p=v[1],x=Object(j.useState)(""),g=Object(r.a)(x,2),_=g[0],f=g[1],N=Object(j.useState)(1),w=Object(r.a)(N,2),S=w[0],y=w[1],k=Object(j.useState)({}),z=Object(r.a)(k,2),C=z[0],R=z[1];Object(j.useEffect)((function(){return P(),function(){}}),[]);var P=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,a,s,n,i=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",c=i.length>1&&void 0!==i[1]?i[1]:1,e.next=4,h({name:t,page:c});case 4:a=e.sent,s=a.code,n=a.data,a.msg,200===s&&R(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){};return Object(d.jsxs)("div",{id:"Famous",children:[Object(d.jsxs)("div",{className:"top_box",children:[Object(d.jsx)("span",{className:"name",children:"\u8bd5\u5377\u540d\u79f0:"}),Object(d.jsx)(n.a,{className:"outlined",variant:"outlined",value:O,style:{width:"11.43rem",height:"2.29rem"},size:"small",onInput:function(e){var t=e.target.value;console.log(Object(b.a)(t)),p(Object(b.a)(t)),f(Object(b.a)(t))}}),Object(d.jsx)(s.a,{variant:"contained",className:"btn",onClick:function(){y(1),P(O,1),p("")},children:"\u67e5\u8be2"})]}),Object(d.jsxs)("div",{className:"body_box",children:[Object(d.jsx)("div",{className:"lists",children:null===C||void 0===C||null===(t=C.schoolResources)||void 0===t||null===(c=t.data)||void 0===c?void 0:c.map((function(e){return Object(d.jsxs)("div",{className:"item",children:[Object(d.jsxs)("div",{className:"left_box",children:[Object(d.jsx)("img",{className:"paper_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png",alt:"paper_icon"}),Object(d.jsxs)("div",{className:"info_box",children:[Object(d.jsx)("div",{className:"title",children:null===e||void 0===e?void 0:e.title}),Object(d.jsxs)("div",{className:"bot_info",children:[Object(d.jsx)("img",{className:"time_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/time_icon.png",alt:"time_icon"}),Object(d.jsxs)("span",{className:"time_text",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(b.e)(1e3*(null===e||void 0===e?void 0:e.update_time))]}),Object(d.jsx)("img",{className:"View_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View_icon.png",alt:"View_icon"}),Object(d.jsx)("span",{className:"view_text",children:"\u6d4f\u89c8\u6b21\u6570\uff1a166"})]})]})]}),Object(d.jsxs)("div",{className:"right_box",children:[Object(d.jsx)("img",{className:"download_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon.png",alt:"download_icon"}),Object(d.jsx)("span",{className:"text",onClick:V,children:"\u4e0b\u8f7d"})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(d.jsx)("div",{className:"Pagination",children:Object(d.jsx)(a.a,{hideOnSinglePage:!1,showSizeChanger:!1,total:null===C||void 0===C||null===(i=C.schoolResources)||void 0===i?void 0:i.total,defaultPageSize:20,pageSize:(null===C||void 0===C||null===(u=C.schoolResources)||void 0===u?void 0:u.per_page)||20,onChange:function(e,t){y(e),P(_,e)},current:S})})]})]})}t.default=Object(j.memo)(m)}}]);