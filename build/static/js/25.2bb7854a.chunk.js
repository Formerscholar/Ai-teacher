(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[25],{187:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(259),c=n.n(a),o=n(209);function i(e){return new Promise((function(t,n){var a=c.a.create({baseURL:o.b,timeout:1e4});a.interceptors.request.use((function(e){return e}),(function(e){return e})),a.interceptors.response.use((function(e){return 777===e.data.code&&(window.location.href="/login"),e.data}),(function(e){if(console.log(e),e&&e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:e.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return e})),a(e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}c.a.defaults.withCredentials=!0},198:function(e,t,n){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(e),a=n.getFullYear().toString(),c=(n.getMonth()+1).toString(),o=n.getDate().toString(),i=n.getHours().toString(),r=n.getMinutes().toString(),s=n.getSeconds().toString();return c=c.length<2?"0"+c:c,o=o.length<2?"0"+o:o,i=i.length<2?"0"+i:i,r=r.length<2?"0"+r:r,s=s.length<2?"0"+s:s,t?"".concat(a,"-").concat(c,"-").concat(o," ").concat(i,":").concat(r,":").concat(s):"".concat(a,"-").concat(c,"-").concat(o)}n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"h",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return u}));var c=function(e,t){var n=new Date;n.setTime(n.getTime()+6048e5);var a="expires="+n.toGMTString();document.cookie=e+"="+t+"; "+a};function o(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function i(e){var t=new Date;t.setTime(t.getTime()-1);var n=o(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}function r(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function s(e){var t=e.substr(1),n={};return t.split("&").map((function(e){var t=e.split("=");n[t[0]]=t[1]})),n}var l=function(e){var t=[],n=e,c=n.getDay(),o=864e5,i=0!=c?c-1:6,r=new Date(n.getTime()-i*o),s=new Date(r.getTime()+5184e5);return t.push(a(r)),t.push(a(s)),t},u=function(e,t){var n=e;return n.setTime(n.getTime()-24*t*60*60*1e3),[a(n),a(new Date)]}},209:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"h",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"d",(function(){return l}));var a="http://test.aictb.com/teacher",c=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,o="wx5f0976e726b587f8",i=encodeURIComponent("http://test.aictb.com/teacher/WXLogin"),r=[{text:"\u9996\u9875",url:"/main/index"},{text:"\u73ed\u7ea7\u4fe1\u606f",url:"/main/class"},{text:"\u5b66\u60c5\u62a5\u544a",url:"/main/classreport"},{text:"\u540d\u6821\u8d44\u6e90",url:"/main/famous"},{text:"\u6821\u672c\u8bd5\u5377",url:"/main/schoolbased"},{text:"\u77e5\u8bc6\u5e93",url:"/main/knowledge"},{text:"\u6211\u7684\u8bd5\u5377",url:"/main/mypaperlist"}],s="http://aictb.com",l="http://test.aictb.com",u=[{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/setup_icon_small.png",text:"\u4e2a\u4eba\u8d44\u6599"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon_small.png",text:"\u6211\u7684\u79ef\u5206"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon_small.png",text:"\u4e0b\u8f7d\u8bb0\u5f55"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/Group_icon_small.png",text:"\u4e0a\u4f20\u7684\u8bd5\u5377"}]},240:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var a=n(187);function c(e){return Object(a.a)({url:"/getLoginCode",method:"GET",params:e})}function o(e){return Object(a.a)({url:"/login",method:"GET",params:e})}function i(e){return Object(a.a)({url:"/loginOut",method:"GET",params:e})}},323:function(e,t,n){},336:function(e,t,n){},458:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n(0),o=n(5),i=(n(228),n(332)),r=(n(239),n(237)),s=(n(229),n(236)),l=(n(191),n(64)),u=n(185),m=n.n(u),d=n(186),b=n(190),h=(n(323),n(240)),f=n(209),p=n(198),j=n(187);var g=n(66),x=n(29),O=["data","integral","download","volume","logout"],v=["Chapter","Knowledge"];function I(e){var t,n,o=e.props,u=e.setData,g=o.history,x=o.location,I=Object(c.useState)(0),k=Object(b.a)(I,2),w=k[0],y=k[1],S=Object(c.useState)({}),N=Object(b.a)(S,2),_=N[0],A=N[1];Object(c.useEffect)((function(){y(localStorage.getItem("menuIndex")||0)})),Object(c.useEffect)((function(){return C(),function(){}}),[]);var C=function(){var e=Object(d.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)({url:"/home",method:"GET"});case 2:t=e.sent,n=t.code,a=t.data,200==n&&(A(a),u(a));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(e){var t=new Map([[O[0],function(){g.push("/main/user?type=0")}],[O[1],function(){g.push("/main/user?type=1")}],[O[2],function(){g.push("/main/user?type=2")}],[O[3],function(){g.push("/main/user?type=3")}],[O[4],function(){var e=Object(d.a)(m.a.mark((function e(){var t,n,a,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(p.c)("id"),n=Object(p.c)("token"),e.next=4,Object(h.c)({id:t,token:n});case 4:a=e.sent,c=a.code,i=a.msg,200==c?(Object(p.b)("id"),Object(p.b)("token"),o.history.push("/login")):l.b.error(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()]]);t.get(e)&&t.get(e)(),localStorage.setItem("menuIndex",0)},P=function(e){var t=new Map([[v[0],function(){o.history.push("/main/chapter")}],[v[1],function(){o.history.push("/main/knowledge")}]]);t.get(e)&&t.get(e)(),localStorage.setItem("menuIndex",4)},D=Object(a.jsxs)(s.a,{children:[Object(a.jsx)(s.a.Item,{onClick:function(){return P(v[0])},children:"\u7ae0\u8282\u540c\u6b65\u9009\u9898"}),Object(a.jsx)(s.a.Item,{onClick:function(){return P(v[1])},children:"\u77e5\u8bc6\u70b9\u7ec4\u5377"})]}),E=Object(a.jsxs)(s.a,{children:[Object(a.jsx)(s.a.Item,{onClick:function(){return T(O[0])},children:"\u4e2a\u4eba\u8d44\u6599"}),Object(a.jsx)(s.a.Item,{onClick:function(){return T(O[1])},children:"\u6211\u7684\u79ef\u5206"}),Object(a.jsx)(s.a.Item,{onClick:function(){return T(O[2])},children:"\u4e0b\u8f7d\u8bb0\u5f55"}),Object(a.jsx)(s.a.Item,{onClick:function(){return T(O[3])},children:"\u4e0a\u4f20\u8bd5\u5377"}),Object(a.jsx)(s.a.Item,{onClick:function(){return T(O[4])},style:{color:"#E9140A"},children:"\u9000\u51fa"})]});return Object(a.jsxs)("div",{id:"AI_header",children:[Object(a.jsx)("div",{className:"title_warp",children:Object(a.jsxs)("div",{className:"title_box",children:[Object(a.jsx)("div",{className:"left_icon",children:Object(a.jsx)("img",{className:"logo",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/logo.png",alt:"logo"})}),Object(a.jsx)("div",{className:"center_box",children:f.f.map((function(e,t){return Object(a.jsx)("div",{className:w==t?"cenItem index":"cenItem",onClick:function(e){return y(n=t),localStorage.setItem("menuIndex",n),void o.history.push("".concat(f.f[n].url));var n},children:e.text},t)}))}),Object(a.jsxs)("div",{overlay:D,placement:"bottomCenter",className:"right_box",children:[Object(a.jsx)(r.a,{className:"Avatar",alt:"Remy Sharp",src:null===(t=_.teacher)||void 0===t?void 0:t.avatar_file}),Object(a.jsx)(i.a,{overlay:E,placement:"bottomCenter",children:Object(a.jsxs)("button",{children:[null===(n=_.teacher)||void 0===n?void 0:n.true_name," ",Object(a.jsx)("div",{className:"right_icon"})]})})]})]})}),"/main/index"===x.pathname?Object(a.jsx)("div",{className:"banner",onClick:function(){g.push("/main/user?type=3")}}):Object(a.jsx)("div",{className:"banner1"})]})}var k=Object(g.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var n={type:x.c,value:t};e(n)}}}))(Object(c.memo)(I));n(336);function w(){return Object(a.jsxs)("div",{id:"AI_footer",children:[Object(a.jsx)("div",{className:"footimg"}),Object(a.jsx)("div",{className:"foot_warp",children:Object(a.jsxs)("footer",{children:[Object(a.jsxs)("div",{className:"left_info",children:[Object(a.jsx)("div",{className:"infoitems ",children:"\u8054\u7cfb\u6211\u4eec"}),Object(a.jsx)("div",{className:"infoitems ",children:"\u90ae\u7bb1\u5730\u5740"}),Object(a.jsx)("div",{className:"infoitems ",children:"\u54a8\u8be2\u70ed\u7ebf"}),Object(a.jsx)("div",{className:"infoitems botfont",children:"\u5173\u4e8e\u6211\u4eec"}),Object(a.jsx)("div",{className:"infoitems botfont",children:"kefu@aictb.com"}),Object(a.jsx)("div",{className:"infoitems botfont",children:"0514-82885886"})]}),Object(a.jsxs)("div",{className:"cen_box",children:[Object(a.jsx)("img",{className:"footqrcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footqrcode.png",alt:"footqrcode"}),Object(a.jsx)("span",{className:"foottext",children:"\u5173\u6ce8\u5fae\u4fe1\u516c\u4f17\u53f7"})]}),Object(a.jsx)("img",{className:"foottip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/foottip.png",alt:"foottip"})]})})]})}var y=Object(c.memo)(w),S=n(59),N=n.n(S),_=n(58),A=N()({loader:function(){return n.e(29).then(n.bind(null,446))},loading:_.a}),C=N()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,447))},loading:_.a}),T=N()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(21)]).then(n.bind(null,459))},loading:_.a}),P=N()({loader:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(22)]).then(n.bind(null,448))},loading:_.a}),D=N()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(11),n.e(23)]).then(n.bind(null,449))},loading:_.a}),E=N()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(12),n.e(26)]).then(n.bind(null,450))},loading:_.a}),G=N()({loader:function(){return Promise.all([n.e(20),n.e(28)]).then(n.bind(null,451))},loading:_.a}),q=N()({loader:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(15)]).then(n.bind(null,452))},loading:_.a}),M=N()({loader:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,453))},loading:_.a}),R=N()({loader:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,454))},loading:_.a}),L=N()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(9),n.e(27)]).then(n.bind(null,460))},loading:_.a}),$=N()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(17)]).then(n.bind(null,455))},loading:_.a}),F=N()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(16)]).then(n.bind(null,456))},loading:_.a}),J=N()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(19)]).then(n.bind(null,457))},loading:_.a}),U=function(e){switch(window.scrollTo(0,0),e.location.pathname){case"/main/index":document.title="\u6559\u5e08\u7aef - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",0);break;case"/main/user":document.title="\u4e2a\u4eba\u4fe1\u606f - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",0);break;case"/main/class":document.title="\u73ed\u7ea7\u4fe1\u606f - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",1);break;case"/main/famous":document.title="\u540d\u6821\u8d44\u6e90 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",3);break;case"/main/schoolbased":document.title="\u6821\u672c\u8bd5\u5377 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",4);break;case"/main/knowledge":document.title="\u77e5\u8bc6\u5e93 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",5);break;case"/main/mypaper":document.title="\u6211\u7684\u7ec4\u5377 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",6);break;case"/main/classdetail":document.title="\u73ed\u7ea7\u8be6\u60c5 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",1);break;case"/main/chapter":document.title="\u7ae0\u8282\u540c\u6b65 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",5);break;case"/main/questiondetails":document.title="\u8bd5\u9898\u8be6\u60c5 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",5);break;case"/main/schoolbaseddetail":document.title="\u8bd5\u5377\u8be6\u60c5 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",4);break;case"/main/studyreport":document.title="\u5b66\u751f\u5b66\u60c5 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",1);break;case"/main/classreport":document.title="\u5b66\u60c5\u62a5\u544a - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",2);break;case"/main/mypaperlist":document.title="\u6211\u7684\u8bd5\u5377 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",6)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(k,{props:e}),Object(a.jsx)(o.b,{path:"/main/index",component:A}),Object(a.jsx)(o.b,{path:"/main/user",component:L}),Object(a.jsx)(o.b,{path:"/main/class",component:C}),Object(a.jsx)(o.b,{path:"/main/famous",component:T}),Object(a.jsx)(o.b,{path:"/main/schoolbased",component:P}),Object(a.jsx)(o.b,{path:"/main/knowledge",component:D}),Object(a.jsx)(o.b,{path:"/main/mypaper",component:E}),Object(a.jsx)(o.b,{path:"/main/classdetail",component:G}),Object(a.jsx)(o.b,{path:"/main/chapter",component:q}),Object(a.jsx)(o.b,{path:"/main/questiondetails",component:M}),Object(a.jsx)(o.b,{path:"/main/schoolbaseddetail",component:R}),Object(a.jsx)(o.b,{path:"/main/studyreport",component:$}),Object(a.jsx)(o.b,{path:"/main/classreport",component:F}),Object(a.jsx)(o.b,{path:"/main/mypaperlist",component:J}),Object(a.jsx)(y,{})]})};t.default=Object(c.memo)(U)}}]);