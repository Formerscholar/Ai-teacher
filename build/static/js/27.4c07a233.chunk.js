(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[27],{188:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));t=n(286);var c=n.n(t),a=n(214);function o(e){return new Promise((function(t,n){var o=c.a.create({baseURL:a.c,timeout:1e4});o.interceptors.request.use((function(e){return e}),(function(e){return e})),o.interceptors.response.use((function(e){return 777===e.data.code&&(window.location.href="/login"),e.data}),(function(e){if(e&&e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:e.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return e})),o(e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}c.a.defaults.withCredentials=!0},192:function(e,t,n){"use strict";function c(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"",c=""+(s=new Date(e)).getFullYear(),a=""+(1+s.getMonth()),o=""+s.getDate(),r=""+s.getHours(),s=(e=""+s.getMinutes(),""+s.getSeconds());a=a.length<2?"0"+a:a,o=o.length<2?"0"+o:o,r=r.length<2?"0"+r:r,e=e.length<2?"0"+e:e,s=s.length<2?"0"+s:s;return 1===n?"".concat(c,"\u5e74").concat(a,"\u6708").concat(o,"\u65e5"):t?"".concat(c,"-").concat(a,"-").concat(o," ").concat(r,":").concat(e,":").concat(s):"".concat(c,"-").concat(a,"-").concat(o)}n.d(t,"g",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"h",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return u}));var a=function(e,t){var n=new Date;n.setTime(6048e5+n.getTime()),n="expires="+n.toGMTString(),document.cookie=e+"="+t+"; "+n};function o(e){e=RegExp("(^| )"+e+"=([^;]*)(;|$)");return(e=document.cookie.match(e))?unescape(e[2]):null}function r(e){var t=new Date;t.setTime(t.getTime()-1);var n=o(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}function s(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function i(e){e=e.substr(1);var t={};return e.split("&").map((function(e){e=e.split("="),t[e[0]]=e[1]})),t}var l=function(e,t){return e.setTime(e.getTime()-24*t*60*60*1e3),[c(e),c(new Date)]},u=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)}},214:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"j",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"h",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return o})),n.d(t,"a",(function(){return m}));var c="http://test.aictb.com/teacher",a=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,o=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r="wx5f0976e726b587f8",s=encodeURIComponent("http://test.aictb.com/teacher/WXLogin"),i=[{text:"\u9996\u9875",url:"/index"},{text:"\u73ed\u7ea7\u4fe1\u606f",url:"/class"},{text:"\u5b66\u60c5\u62a5\u544a",url:"/classreport"},{text:"\u540d\u6821\u8d44\u6e90",url:"/famous"},{text:"\u6821\u672c\u8bd5\u5377",url:"/schoolbased"},{text:"\u77e5\u8bc6\u5e93",url:"/knowledge"},{text:"\u6211\u7684\u8bd5\u5377",url:"/mypaper/list"}],l="http://aictb.com",u="http://test.aictb.com",d=[{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/setup_icon_small.png",text:"\u4e2a\u4eba\u8d44\u6599"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon_small.png",text:"\u6211\u7684\u79ef\u5206"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon_small.png",text:"\u4e0b\u8f7d\u8bb0\u5f55"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/Group_icon_small.png",text:"\u4e0a\u4f20\u7684\u8bd5\u5377"}],m=["/user/datum","/user/integral","/user/down","/user/upload_list"]},249:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r}));var c=n(188);function a(e){return Object(c.a)({url:"/getLoginCode",method:"GET",params:e})}function o(e){return Object(c.a)({url:"/login",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/loginOut",method:"GET",params:e})}},347:function(e,t,n){},360:function(e,t,n){},476:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(0),o=n(5),r=(n(248),n(247)),s=(n(221),n(356)),i=(n(222),n(226)),l=(n(191),n(64)),u=n(186),d=n.n(u),m=n(187),b=n(185),h=(n(347),n(249)),f=n(214),j=n(192),p=n(188),x=n(65),g=n(29),O=["data","integral","download","volume","logout"],I=["Chapter","Knowledge"];var v=Object(x.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){e({type:g.c,value:t})}}}))(Object(a.memo)((function(e){var t=e.props,n=e.setData,o=t.history,u=t.location,x=Object(a.useState)(0),g=(k=Object(b.a)(x,2))[0],v=k[1],k=(e=Object(a.useState)({}),(x=Object(b.a)(e,2))[0]),w=x[1];function y(e){var n=new Map([[O[0],function(){o.push("/user/datum")}],[O[1],function(){o.push("/user/integral")}],[O[2],function(){o.push("/user/down")}],[O[3],function(){o.push("/user/upload_list")}],[O[4],function(){var e=Object(m.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(j.c)("id"),c=Object(j.c)("token"),e.next=4,Object(h.c)({id:n,token:c});case 4:c=(n=e.sent).msg,200==n.code?(Object(j.b)("id"),Object(j.b)("token"),t.history.push("/login")):l.b.error(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()]]);n.get(e)&&n.get(e)(),localStorage.setItem("menuIndex",0)}function S(e){var n=new Map([[I[0],function(){t.history.push("/chapter")}],[I[1],function(){t.history.push("/knowledge")}]]);n.get(e)&&n.get(e)(),localStorage.setItem("menuIndex",4)}Object(a.useEffect)((function(){v(localStorage.getItem("menuIndex")||0)})),Object(a.useEffect)((function(){return _(),function(){}}),[]);var _=function(){var e=Object(m.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)({url:"/home",method:"GET"});case 2:c=(t=e.sent).data,200==t.code&&(w(c),n(c));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=Object(c.jsxs)(i.a,{children:[Object(c.jsx)(i.a.Item,{onClick:function(){return S(I[0])},children:"\u7ae0\u8282\u540c\u6b65\u9009\u9898"}),Object(c.jsx)(i.a.Item,{onClick:function(){return S(I[1])},children:"\u77e5\u8bc6\u70b9\u7ec4\u5377"})]});return e=Object(c.jsxs)(i.a,{children:[Object(c.jsx)(i.a.Item,{onClick:function(){return y(O[0])},children:"\u4e2a\u4eba\u8d44\u6599"}),Object(c.jsx)(i.a.Item,{onClick:function(){return y(O[1])},children:"\u6211\u7684\u79ef\u5206"}),Object(c.jsx)(i.a.Item,{onClick:function(){return y(O[2])},children:"\u4e0b\u8f7d\u8bb0\u5f55"}),Object(c.jsx)(i.a.Item,{onClick:function(){return y(O[3])},children:"\u4e0a\u4f20\u8bd5\u5377"}),Object(c.jsx)(i.a.Item,{onClick:function(){return y(O[4])},style:{color:"#E9140A"},children:"\u9000\u51fa"})]}),Object(c.jsxs)("div",{id:"AI_header",children:[Object(c.jsx)("div",{className:"title_warp",children:Object(c.jsxs)("div",{className:"title_box",children:[Object(c.jsx)("div",{className:"left_icon",children:Object(c.jsx)("img",{className:"logo",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/logo.png",alt:"logo"})}),Object(c.jsx)("div",{className:"center_box",children:f.h.map((function(e,n){return Object(c.jsx)("div",{className:g==n?"cenItem index":"cenItem",onClick:function(){return v(e=n),localStorage.setItem("menuIndex",e),void(5!==e&&t.history.push("".concat(f.h[e].url)));var e},children:5==n?Object(c.jsx)(s.a,{overlay:N,placement:"bottomCenter",children:Object(c.jsx)("button",{children:e.text})}):e.text},n)}))}),Object(c.jsxs)("div",{overlay:N,placement:"bottomCenter",className:"right_box",children:[Object(c.jsx)(r.a,{className:"Avatar",alt:"Remy Sharp",src:null===(x=k.teacher)||void 0===x?void 0:x.avatar_file}),Object(c.jsx)(s.a,{overlay:e,placement:"bottomCenter",children:Object(c.jsxs)("button",{children:[null===(k=k.teacher)||void 0===k?void 0:k.true_name," ",Object(c.jsx)("div",{className:"right_icon"})]})})]})]})}),Object(c.jsx)("div","/index"===u.pathname?{className:"banner",onClick:function(){o.push("/user/upload_list")}}:{className:"banner1"})]})})));n(360);var k=Object(a.memo)((function(){return Object(c.jsxs)("div",{id:"AI_footer",children:[Object(c.jsx)("div",{className:"footimg"}),Object(c.jsx)("div",{className:"foot_warp",children:Object(c.jsxs)("footer",{children:[Object(c.jsxs)("div",{className:"left_info",children:[Object(c.jsx)("div",{className:"infoitems ",children:"\u8054\u7cfb\u6211\u4eec"}),Object(c.jsx)("div",{className:"infoitems ",children:"\u90ae\u7bb1\u5730\u5740"}),Object(c.jsx)("div",{className:"infoitems ",children:"\u54a8\u8be2\u70ed\u7ebf"}),Object(c.jsx)("div",{className:"infoitems botfont",children:"\u5173\u4e8e\u6211\u4eec"}),Object(c.jsx)("div",{className:"infoitems botfont",children:"kefu@aictb.com"}),Object(c.jsx)("div",{className:"infoitems botfont",children:"0514-82885886"})]}),Object(c.jsxs)("div",{className:"cen_box",children:[Object(c.jsx)("img",{className:"footqrcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footqrcode.png",alt:"footqrcode"}),Object(c.jsx)("span",{className:"foottext",children:"\u5173\u6ce8\u5fae\u4fe1\u516c\u4f17\u53f7"})]}),Object(c.jsx)("img",{className:"foottip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/foottip.png",alt:"foottip"})]})})]})})),w=(u=n(57),x=n.n(u),u=n(56),x()({loader:function(){return n.e(40).then(n.bind(null,461))},loading:u.a})),y=x()({loader:function(){return Promise.all([n.e(1),n.e(3),n.e(18),n.e(34)]).then(n.bind(null,462))},loading:u.a}),S=x()({loader:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(16)]).then(n.bind(null,477))},loading:u.a}),_=x()({loader:function(){return Promise.all([n.e(1),n.e(2),n.e(4),n.e(20)]).then(n.bind(null,463))},loading:u.a}),N=x()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(14)]).then(n.bind(null,464))},loading:u.a}),A=x()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(15),n.e(35)]).then(n.bind(null,465))},loading:u.a}),C=x()({loader:function(){return Promise.all([n.e(3),n.e(19),n.e(33)]).then(n.bind(null,466))},loading:u.a}),P=x()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(13)]).then(n.bind(null,467))},loading:u.a}),T=x()({loader:function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,468))},loading:u.a}),E=x()({loader:function(){return Promise.all([n.e(0),n.e(26)]).then(n.bind(null,469))},loading:u.a}),D=x()({loader:function(){return n.e(22).then(n.bind(null,470))},loading:u.a}),G=x()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(24)]).then(n.bind(null,471))},loading:u.a}),M=x()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(23)]).then(n.bind(null,472))},loading:u.a}),q=x()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(5),n.e(17)]).then(n.bind(null,473))},loading:u.a}),R=x()({loader:function(){return Promise.all([n.e(0),n.e(3),n.e(38),n.e(36)]).then(n.bind(null,474))},loading:u.a}),$=x()({loader:function(){return Promise.all([n.e(0),n.e(25)]).then(n.bind(null,475))},loading:u.a});u=function(e){switch(window.scrollTo(0,0),e.location.pathname){case"/":document.title="\u6559\u5e08\u7aef - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",0);break;case"/user":document.title="\u4e2a\u4eba\u4fe1\u606f - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",0);break;case"/class":document.title="\u73ed\u7ea7\u4fe1\u606f - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",1);break;case"/famous":document.title="\u540d\u6821\u8d44\u6e90 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",3);break;case"/schoolbased":document.title="\u6821\u672c\u8bd5\u5377 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",4);break;case"/knowledge":document.title="\u77e5\u8bc6\u5e93 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",5);break;case"/mypaper":document.title="\u6211\u7684\u7ec4\u5377 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",6);break;case"/mypaper/detail":document.title="\u8bd5\u5377\u8be6\u60c5 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",6);break;case"/class/detail":document.title="\u73ed\u7ea7\u8be6\u60c5 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",1);break;case"/chapter":document.title="\u7ae0\u8282\u540c\u6b65 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",5);break;case"/question/details":document.title="\u8bd5\u9898\u8be6\u60c5 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",5);break;case"/schoolbased/detail":document.title="\u8bd5\u5377\u8be6\u60c5 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",4);break;case"/class/detail/chars":document.title="\u5b66\u751f\u5b66\u60c5 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",1);break;case"/classreport":document.title="\u5b66\u60c5\u62a5\u544a - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",2);break;case"/mypaper/list":document.title="\u6211\u7684\u8bd5\u5377 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",6);break;case"/famous/detail":document.title="\u540d\u6821\u8d44\u6e90\u8be6\u60c5 - AI\u9519\u9898\u5b9d",localStorage.setItem("menuIndex",3)}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{props:e}),Object(c.jsxs)(o.d,{children:[Object(c.jsx)(o.b,{path:"/class/detail",exact:!0,component:C}),Object(c.jsx)(o.b,{path:"/class/detail/chars",exact:!0,component:G}),Object(c.jsx)(o.b,{path:"/schoolbased/detail",exact:!0,component:E}),Object(c.jsx)(o.b,{path:"/question/details",exact:!0,component:T}),Object(c.jsx)(o.b,{path:"/mypaper/list",exact:!0,component:q}),Object(c.jsx)(o.b,{path:"/mypaper/detail",exact:!0,component:R}),Object(c.jsx)(o.b,{path:"/famous/detail",exact:!0,component:$}),Object(c.jsx)(o.b,{path:"/index",component:w}),Object(c.jsx)(o.b,{path:"/user",component:D}),Object(c.jsx)(o.b,{path:"/class",component:y}),Object(c.jsx)(o.b,{path:"/famous",component:S}),Object(c.jsx)(o.b,{path:"/schoolbased",component:_}),Object(c.jsx)(o.b,{path:"/knowledge",component:N}),Object(c.jsx)(o.b,{path:"/mypaper",component:A}),Object(c.jsx)(o.b,{path:"/chapter",component:P}),Object(c.jsx)(o.b,{path:"/classreport",component:M}),Object(c.jsx)(o.a,{to:"/index"})]}),Object(c.jsx)(k,{})]})};t.default=Object(a.memo)(u)}}]);