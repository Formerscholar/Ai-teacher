(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[24],{191:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(287),a=n.n(c),o=n(209);function i(e){return new Promise((function(t,n){var c=a.a.create({baseURL:o.c,timeout:1e4});c.interceptors.request.use((function(e){return e}),(function(e){return e})),c.interceptors.response.use((function(e){return 777===e.data.code&&(window.location.href="/login"),e.data}),(function(e){if(console.log(e),e&&e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:e.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return e})),c(e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}a.a.defaults.withCredentials=!0},197:function(e,t,n){"use strict";function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(e),c=n.getFullYear().toString(),a=(n.getMonth()+1).toString(),o=n.getDate().toString(),i=n.getHours().toString(),r=n.getMinutes().toString(),s=n.getSeconds().toString();return a=a.length<2?"0"+a:a,o=o.length<2?"0"+o:o,i=i.length<2?"0"+i:i,r=r.length<2?"0"+r:r,s=s.length<2?"0"+s:s,t?"".concat(c,"-").concat(a,"-").concat(o," ").concat(i,":").concat(r,":").concat(s):"".concat(c,"-").concat(a,"-").concat(o)}n.d(t,"g",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"h",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l}));var a=function(e,t){var n=new Date;n.setTime(n.getTime()+6048e5);var c="expires="+n.toGMTString();document.cookie=e+"="+t+"; "+c};function o(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function i(e){var t=new Date;t.setTime(t.getTime()-1);var n=o(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}function r(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function s(e){var t=e.substr(1),n={};return t.split("&").map((function(e){var t=e.split("=");n[t[0]]=t[1]})),n}var u=function(e){var t=[],n=e,a=n.getDay(),o=864e5,i=0!=a?a-1:6,r=new Date(n.getTime()-i*o),s=new Date(r.getTime()+5184e5);return t.push(c(r)),t.push(c(s)),t},l=function(e,t){var n=e;return n.setTime(n.getTime()-24*t*60*60*1e3),[c(n),c(new Date)]}},209:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"i",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"h",(function(){return l})),n.d(t,"b",(function(){return m})),n.d(t,"e",(function(){return u}));var c="http://test.aictb.com/teacher",a=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,o="wx5f0976e726b587f8",i=encodeURIComponent("http://test.aictb.com/teacher/WXLogin"),r=[{text:"\u9996\u9875",url:"/main/index"},{text:"\u73ed\u7ea7\u4fe1\u606f",url:"/main/class"},{text:"\u5b66\u60c5\u62a5\u544a",url:"/main/classreport"},{text:"\u540d\u6821\u8d44\u6e90",url:"/main/famous"},{text:"\u6821\u672c\u8bd5\u5377",url:"/main/schoolbased"},{text:"\u77e5\u8bc6\u5e93",url:"/main/knowledge"},{text:"\u6211\u7684\u8bd5\u5377",url:"/main/mypaperlist"}],s="http://aictb.com",u="http://test.aictb.com",l=[{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/setup_icon_small.png",text:"\u4e2a\u4eba\u8d44\u6599"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon_small.png",text:"\u6211\u7684\u79ef\u5206"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon_small.png",text:"\u4e0b\u8f7d\u8bb0\u5f55"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/Group_icon_small.png",text:"\u4e0a\u4f20\u8bd5\u5377"}],m=["https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/banner.png","https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/banner1.png"]},277:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var c=n(191);function a(e){return Object(c.a)({url:"/getLoginCode",method:"GET",params:e})}function o(e){return Object(c.a)({url:"/login",method:"GET",params:e})}function i(e){return Object(c.a)({url:"/loginOut",method:"GET",params:e})}},351:function(e,t,n){},390:function(e,t,n){},500:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n(0),o=n(5),i=(n(344),n(364)),r=(n(235),n(360)),s=(n(275),n(274)),u=(n(236),n(260)),l=(n(196),n(65)),m=n(192),d=n.n(m),h=n(193),b=n(195),f=(n(351),n(277)),p=n(209),j=n(197),g=n(191);var x=n(68),O=n(33),v=["data","integral","download","volume","logout"],y=["Chapter","Knowledge"],I=["Uploadpaper","paperList"];function w(e){e.homeInfo;var t,n,o=e.props,m=e.setData,x=o.history,O=Object(a.useState)(0),w=Object(b.a)(O,2),k=w[0],N=w[1],_=Object(a.useState)({}),S=Object(b.a)(_,2),C=S[0],P=S[1];Object(a.useEffect)((function(){N(localStorage.getItem("menuIndex")||0)})),Object(a.useEffect)((function(){return T(),function(){}}),[]);var T=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)({url:"/home",method:"GET"});case 2:t=e.sent,n=t.code,c=t.data,200==n&&(P(c),m(c));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){localStorage.setItem("menuIndex",-1);var t=new Map([[v[0],function(){x.push("/main/user?type=0")}],[v[1],function(){x.push("/main/user?type=1")}],[v[2],function(){x.push("/main/user?type=2")}],[v[3],function(){x.push("/main/user?type=3")}],[v[4],function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,c,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(j.c)("id"),n=Object(j.c)("token"),e.next=4,Object(f.c)({id:t,token:n});case 4:c=e.sent,a=c.code,i=c.msg,200==a?(Object(j.b)("id"),Object(j.b)("token"),o.history.push("/login")):l.b.error(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()]]);t.get(e)&&t.get(e)(),localStorage.setItem("menuIndex",0)},E=function(e){var t=new Map([[y[0],function(){o.history.push("/main/chapter")}],[y[1],function(){o.history.push("/main/knowledge")}]]);t.get(e)&&t.get(e)(),localStorage.setItem("menuIndex",4)},G=function(e){var t=new Map([[I[0],function(){o.history.push("/main/mypaper")}],[I[1],function(){o.history.push("/main/mypaperlist")}]]);t.get(e)&&t.get(e)(),localStorage.setItem("menuIndex",6)},M=Object(c.jsxs)(u.a,{children:[Object(c.jsx)(u.a.Item,{onClick:function(){return E(y[0])},children:"\u7ae0\u8282\u540c\u6b65\u9009\u9898"}),Object(c.jsx)(u.a.Item,{onClick:function(){return E(y[1])},children:"\u77e5\u8bc6\u70b9\u7ec4\u5377"})]}),q=Object(c.jsxs)(u.a,{children:[Object(c.jsx)(u.a.Item,{onClick:function(){return D(v[0])},children:"\u4e2a\u4eba\u8d44\u6599"}),Object(c.jsx)(u.a.Item,{onClick:function(){return D(v[1])},children:"\u6211\u7684\u79ef\u5206"}),Object(c.jsx)(u.a.Item,{onClick:function(){return D(v[2])},children:"\u4e0b\u8f7d\u8bb0\u5f55"}),Object(c.jsx)(u.a.Item,{onClick:function(){return D(v[3])},children:"\u4e0a\u4f20\u8bd5\u5377"}),Object(c.jsx)(u.a.Item,{onClick:function(){return D(v[4])},style:{color:"#E9140A"},children:"\u9000\u51fa"})]});u.a,u.a.Item,u.a.Item;return Object(c.jsxs)("div",{id:"AI_header",children:[Object(c.jsxs)("div",{className:"title_box",children:[Object(c.jsx)("div",{className:"left_icon",children:Object(c.jsx)("img",{className:"logo",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/logo.png",alt:"logo"})}),Object(c.jsx)("div",{className:"center_box",children:p.g.map((function(e,t){return Object(c.jsx)("div",{className:k==t?"cenItem index":"cenItem",onClick:function(e){return N(n=t),localStorage.setItem("menuIndex",n),void o.history.push("".concat(p.g[n].url));var n},children:e.text},t)}))}),Object(c.jsxs)("div",{overlay:M,placement:"bottomCenter",className:"right_box",children:[Object(c.jsx)(s.a,{className:"Avatar",alt:"Remy Sharp",src:null===(t=C.teacher)||void 0===t?void 0:t.avatar_file}),Object(c.jsx)(r.a,{overlay:q,placement:"bottomCenter",children:Object(c.jsxs)("button",{children:[null===(n=C.teacher)||void 0===n?void 0:n.true_name," ",Object(c.jsx)("div",{className:"right_icon"})]})})]})]}),Object(c.jsx)(i.a,{effect:"fade",autoplay:!0,autoplaySpeed:2888,dots:!1,children:null===p.b||void 0===p.b?void 0:p.b.map((function(e,t){return Object(c.jsx)("img",{className:"banner",src:e,alt:"banner"},t)}))})]})}var k=Object(x.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var n={type:O.c,value:t};e(n)}}}))(Object(a.memo)(w));n(390);function N(){return Object(c.jsxs)("div",{id:"AI_footer",children:[Object(c.jsx)("img",{className:"footimg",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footimg.png",alt:"footimg"}),Object(c.jsxs)("footer",{children:[Object(c.jsxs)("div",{className:"left_info",children:[Object(c.jsx)("div",{className:"infoitems ",children:"\u8054\u7cfb\u6211\u4eec"}),Object(c.jsx)("div",{className:"infoitems ",children:"\u90ae\u7bb1\u5730\u5740"}),Object(c.jsx)("div",{className:"infoitems ",children:"\u54a8\u8be2\u70ed\u7ebf"}),Object(c.jsx)("div",{className:"infoitems botfont",children:"\u5173\u4e8e\u6211\u4eec"}),Object(c.jsx)("div",{className:"infoitems botfont",children:"kefu@aictb.com"}),Object(c.jsx)("div",{className:"infoitems botfont",children:"0514-82885886"})]}),Object(c.jsxs)("div",{className:"cen_box",children:[Object(c.jsx)("img",{className:"footqrcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footqrcode.png",alt:"footqrcode"}),Object(c.jsx)("span",{className:"foottext",children:"\u5173\u6ce8\u5fae\u4fe1\u516c\u4f17\u53f7"})]}),Object(c.jsx)("img",{className:"foottip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/foottip.png",alt:"foottip"})]})]})}var _=Object(a.memo)(N),S=n(59),C=n.n(S),P=n(58),T=C()({loader:function(){return n.e(32).then(n.bind(null,488))},loading:P.a}),D=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(25),n.e(27)]).then(n.bind(null,489))},loading:P.a}),E=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(16)]).then(n.bind(null,501))},loading:P.a}),G=C()({loader:function(){return Promise.all([n.e(0),n.e(3),n.e(2),n.e(26)]).then(n.bind(null,490))},loading:P.a}),M=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(13),n.e(22)]).then(n.bind(null,491))},loading:P.a}),q=C()({loader:function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(15),n.e(28)]).then(n.bind(null,492))},loading:P.a}),A=C()({loader:function(){return Promise.all([n.e(18),n.e(30)]).then(n.bind(null,493))},loading:P.a}),L=C()({loader:function(){return Promise.all([n.e(0),n.e(3),n.e(2),n.e(17)]).then(n.bind(null,494))},loading:P.a}),R=C()({loader:function(){return Promise.all([n.e(19),n.e(31)]).then(n.bind(null,495))},loading:P.a}),U=C()({loader:function(){return Promise.all([n.e(1),n.e(20),n.e(21)]).then(n.bind(null,496))},loading:P.a}),$=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(10),n.e(33)]).then(n.bind(null,502))},loading:P.a}),F=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(12)]).then(n.bind(null,497))},loading:P.a}),J=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(11)]).then(n.bind(null,498))},loading:P.a}),H=C()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(14),n.e(29)]).then(n.bind(null,499))},loading:P.a}),K=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{props:e}),Object(c.jsx)(o.b,{path:"/main/index",component:T}),Object(c.jsx)(o.b,{path:"/main/user",component:$}),Object(c.jsx)(o.b,{path:"/main/class",component:D}),Object(c.jsx)(o.b,{path:"/main/famous",component:E}),Object(c.jsx)(o.b,{path:"/main/schoolbased",component:G}),Object(c.jsx)(o.b,{path:"/main/knowledge",component:M}),Object(c.jsx)(o.b,{path:"/main/mypaper",component:q}),Object(c.jsx)(o.b,{path:"/main/classdetail",component:A}),Object(c.jsx)(o.b,{path:"/main/chapter",component:L}),Object(c.jsx)(o.b,{path:"/main/questiondetails",component:R}),Object(c.jsx)(o.b,{path:"/main/schoolbaseddetail",component:U}),Object(c.jsx)(o.b,{path:"/main/studyreport",component:F}),Object(c.jsx)(o.b,{path:"/main/classreport",component:J}),Object(c.jsx)(o.b,{path:"/main/mypaperlist",component:H}),Object(c.jsx)(_,{})]})};t.default=Object(a.memo)(K)}}]);