(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[38],{203:function(e,t,n){"use strict";n.d(t,"i",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"k",(function(){return u})),n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return l})),n.d(t,"l",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"f",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"e",(function(){return j})),n.d(t,"c",(function(){return h})),n.d(t,"h",(function(){return b}));var a=n(177),r=n(178),c=n.n(r);function s(e){return Object(a.a)({url:"/getUploadImage",method:"POST",data:e})}function i(e){return Object(a.a)({url:"/addTeacherUpload",method:"POST",data:c.a.stringify(e)})}function u(){return Object(a.a)({url:"/information",method:"GET"})}function o(){return Object(a.a)({url:"/getAllArea",method:"GET"})}function l(e){return Object(a.a)({url:"/getSchools",method:"GET",params:e})}function d(){return Object(a.a)({url:"/pointLog",method:"GET"})}function p(e){return Object(a.a)({url:"/getUploadList",method:"GET",params:e})}function f(e){return Object(a.a)({url:"/getOrganizingPapersLog",method:"GET",params:e})}function m(e){return Object(a.a)({url:"/editInformation",method:"POST",data:c.a.stringify(e)})}function j(e){return Object(a.a)({url:"/getCode",method:"GET",params:e})}function h(e){return Object(a.a)({url:"/editMobile",method:"GET",params:e})}function b(e){return Object(a.a)({url:"/getTeacherUpload",method:"GET",params:e})}},209:function(e,t,n){"use strict";var a=n(10),r=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),s=a(n(210)),i=a(n(24)),u=function(e,t){return c.createElement(i.default,Object.assign({},e,{ref:t,icon:s.default}))};u.displayName="SearchOutlined";var o=c.forwardRef(u);t.default=o},210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},227:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(209))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},446:function(e,t,n){"use strict";n.r(t);n(175);var a=n(174),r=(n(315),n(317)),c=n(20),s=n.n(c),i=(n(180),n(67)),u=n(39),o=n(3),l=n(8),d=(n(205),n(208)),p=n(11),f=n(0),m=(n(447),n(203)),j=d.a.TextArea;function h(e){var t=e.history,n=Object(f.useState)([]),c=Object(l.a)(n,2),h=c[0],b=c[1],O=Object(f.useState)(""),g=Object(l.a)(O,2),v=g[0],x=g[1],_=Object(f.useState)(""),N=Object(l.a)(_,2),y=N[0],T=N[1],E=Object(f.useRef)(null),k=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r,c,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("\u6267\u884caddEventListener",t),(n=t.target.files).length){e.next=4;break}return e.abrupt("return");case 4:return(a=new FormData).append("img_url",n[0],n[0].name),a.append("file_path","wx_xcx/paper/"),e.next=9,Object(m.i)(a);case 9:r=e.sent,c=r.code,u=r.data,l=r.msg,200===c?(b([].concat(Object(o.a)(h),[u.img])),i.b.success(l)):i.b.error(l),E.current.removeEventListener("change",k),E.current.value="";case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){E.current.click(),E.current.addEventListener("change",k)},w=function(){var e=Object(u.a)(s.a.mark((function e(){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)({image_urls:h,remark:v,paper_name:y});case 2:n=e.sent,a=n.code,r=n.msg,200===a?(i.b.success(r),b([]),T(""),x(""),t.push("/user/upload_list")):i.b.error(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{id:"Uploading",children:[Object(p.jsx)("div",{className:"upload_title",children:Object(p.jsx)("div",{className:"upload_left_text",children:"\u4e0a\u4f20\u8bd5\u5377"})}),Object(p.jsxs)("div",{className:"content_box",children:[Object(p.jsxs)("div",{className:"paperName",children:[Object(p.jsx)("span",{children:"\u8bd5\u5377\u540d\u79f0"}),Object(p.jsx)(d.a,{className:"myInput",placeholder:"\u8bf7\u586b\u5199\u8bd5\u5377\u540d\u79f0",onChange:function(e){var t=e.target.value;T(t)},value:y})]}),Object(p.jsxs)("div",{className:"Remarks",children:[Object(p.jsx)("span",{children:"\u5907\u6ce8"}),Object(p.jsx)(j,{className:"myInput",placeholder:"\u8bf7\u586b\u5199\u5907\u6ce8",onChange:function(e){var t=e.target.value;x(t)},value:v})]}),h.length?Object(p.jsxs)("div",{className:"upload_insert",children:[null===h||void 0===h?void 0:h.map((function(e,t){return Object(p.jsxs)("div",{className:"iamge_warp",children:[Object(p.jsx)(r.a,{className:"itemImg",width:"11.43rem",height:"14.29rem",src:e}),Object(p.jsx)("img",{className:"image_delete_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/image_delete_icon.png",alt:"image_delete_icon",onClick:function(){return function(e){var t=Object(o.a)(h);t.splice(e,1),b(t)}(t)}})]},t)})),Object(p.jsxs)("div",{className:"listUpload",onClick:C,children:[Object(p.jsx)("img",{className:"uploadlist",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/uploadlist.png",alt:"uploadlist"}),Object(p.jsx)("span",{children:"\u4e0a\u4f20\u56fe\u7247"})]})]}):Object(p.jsxs)("div",{className:"upload_box",onClick:C,children:[Object(p.jsx)("img",{className:"upload_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/upload_icon.png",alt:"upload_icon"}),Object(p.jsx)("h1",{children:"\u70b9\u51fb\u4e0a\u4f20\u56fe\u7247"}),Object(p.jsx)("p",{children:"\u683c\u5f0f\uff1aJPG\u3001JPEG2000\u3001PNG"})]}),Object(p.jsx)(a.a,{type:"primary",className:"btns",onClick:w,children:"\u4fdd\u5b58"})]}),Object(p.jsx)("input",{ref:E,id:"upload",type:"file",name:"file",hidden:!0})]})}t.default=Object(f.memo)(h)},447:function(e,t,n){}}]);