(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[39],{212:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"k",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"g",(function(){return o})),n.d(e,"l",(function(){return d})),n.d(e,"j",(function(){return l})),n.d(e,"f",(function(){return h})),n.d(e,"b",(function(){return m})),n.d(e,"e",(function(){return p})),n.d(e,"c",(function(){return f})),n.d(e,"h",(function(){return j}));var a=n(188),r=(e=n(189),n.n(e));function c(t){return Object(a.a)({url:"/getUploadImage",method:"POST",data:t})}function i(t){return Object(a.a)({url:"/addTeacherUpload",method:"POST",data:r.a.stringify(t)})}function s(){return Object(a.a)({url:"/information",method:"GET"})}function u(){return Object(a.a)({url:"/getAllArea",method:"GET"})}function o(t){return Object(a.a)({url:"/getSchools",method:"GET",params:t})}function d(){return Object(a.a)({url:"/pointLog",method:"GET"})}function l(t){return Object(a.a)({url:"/getUploadList",method:"GET",params:t})}function h(t){return Object(a.a)({url:"/getOrganizingPapersLog",method:"GET",params:t})}function m(t){return Object(a.a)({url:"/editInformation",method:"POST",data:r.a.stringify(t)})}function p(t){return Object(a.a)({url:"/getCode",method:"GET",params:t})}function f(t){return Object(a.a)({url:"/editMobile",method:"GET",params:t})}function j(t){return Object(a.a)({url:"/getTeacherUpload",method:"GET",params:t})}},436:function(t,e,n){"use strict";n.r(e),n(307);var a=n(308),r=n(186),c=n.n(r),i=(n(191),n(64)),s=n(187),u=n(185),o=n(9),d=n(0),l=(r=n(438),n(192)),h=n(212);e.default=Object(d.memo)((function(t){var e,n=t.location,r=Object(d.useState)(!1),m=(r=(t=Object(u.a)(r,2))[0],t[1]);Object(d.useEffect)((function(){return p(),function(){}}),[]);var p=function(){var t=Object(s.a)(c.a.mark((function t(){var e,a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.h)({id:Object(l.h)(n.search).id});case 2:a=(e=t.sent).data,r=e.msg,200===e.code?m(null==a?void 0:a.upload):i.b.error(r);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"Detail",children:[Object(o.jsx)("div",{className:"upload_title",children:Object(o.jsxs)("div",{className:"detail",children:[Object(o.jsx)("div",{className:"left_detail",children:null==r?void 0:r.paper_name}),Object(o.jsx)("div",{className:"right_detail",children:Object(l.g)(1e3*(null==r?void 0:r.add_time))})]})}),Object(o.jsxs)("div",{className:"uploadDeatilBox",children:[Object(o.jsxs)("div",{className:"status_check",style:{border:1===(null==r?void 0:r.status)?"1px solid #999999":2===(null==r?void 0:r.status)?"1px solid #20CFB9":"1px solid #E50304",backgroundColor:1===(null==r?void 0:r.status)?" #F5F5F5":2===(null==r?void 0:r.status)?" #E8FAF8":" #FCE5E5"},children:[Object(o.jsx)("img",{className:"passed_icon",src:1===(null==r?void 0:r.status)?"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/pass_icon.png":2===(null==r?void 0:r.status)?"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/passed_icon.png":"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/notpass_icon.png",alt:"passed_icon"}),Object(o.jsx)("span",{className:"tip_text",children:1===(null==r?void 0:r.status)?"\u7cfb\u7edf\u5c06\u4f1a\u53ca\u65f6\u5904\u7406\u4f60\u4e0a\u4f20\u7684\u56fe\u7247\uff0c\u5982\u6709\u95ee\u9898\u8bf7\u8054\u7cfb\u5ba2\u670d\u3002":2===(null==r?void 0:r.status)?"\u606d\u559c\uff01\u4f60\u6240\u63d0\u4ea4\u7684\u8bd5\u5377\u5df2\u7ecf\u5ba1\u6838\u901a\u8fc7\uff0c\u5982\u6709\u95ee\u9898\u8bf7\u8054\u7cfb\u5ba2\u670d\u3002":"\u672a\u901a\u8fc7\uff01\u4f60\u6240\u63d0\u4ea4\u7684\u9898\u76ee\u4e0d\u6e05\u6670\uff0c\u8bf7\u91cd\u65b0\u4e0a\u4f20\u3002"})]}),Object(o.jsx)("div",{className:"detail_images",children:null==r||null===(e=r.get_detail)||void 0===e?void 0:e.map((function(t){return Object(o.jsx)(a.a,{className:"Imageitems",height:"180px",width:"23.5%",src:null==t?void 0:t.picurl},null==t?void 0:t.id)}))})]})]})}))},438:function(t,e,n){}}]);