(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[17],{174:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(218),a=n.n(c),o=n(189);function r(e){return new Promise((function(t,n){var c=a.a.create({baseURL:o.b,timeout:1e4});c.interceptors.request.use((function(e){return e}),(function(e){return e})),c.interceptors.response.use((function(e){return 777===e.data.code&&(window.location.href="/login"),e.data}),(function(e){if(console.log(e),e&&e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:e.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return e})),c(e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}a.a.defaults.withCredentials=!0},183:function(e,t,n){"use strict";function c(e){var t=new Date(e),n=t.getFullYear().toString(),c=(t.getMonth()+1).toString(),a=t.getDate().toString();return c=c.length<2?"0"+c:c,a=a.length<2?"0"+a:a,"".concat(n,"-").concat(c,"-").concat(a)}n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return s}));var a=function(e,t){var n=new Date;n.setTime(n.getTime()+6048e5);var c="expires="+n.toGMTString();document.cookie=e+"="+t+"; "+c};function o(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function r(e){var t=new Date;t.setTime(t.getTime()-1);var n=o(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}function i(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function s(e){var t=e.substr(1),n={};return t.split("&").map((function(e){var t=e.split("=");n[t[0]]=t[1]})),n}},189:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s}));var c="http://test.aictb.com/teacher",a=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,o="wx5f0976e726b587f8",r=encodeURIComponent("http://test.aictb.com/teacher/WXLogin"),i=[{text:"\u9996\u9875",url:"/main/index"},{text:"\u73ed\u7ea7\u4fe1\u606f",url:"/main/class"},{text:"\u540d\u6821\u8d44\u6e90",url:"/main/famous"},{text:"\u6821\u672c\u8bd5\u5377",url:"/main/schoolbased"},{text:"\u77e5\u8bc6\u5e93",url:"/main/knowledge"},{text:"\u4e0a\u4f20\u8bd5\u5377",url:"/main/uploadpaper"},{text:"\u6211\u7684\u8bd5\u5377",url:"/main/mypaper"}],s="http://aictb.com"},203:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r}));var c=n(174);function a(e){return Object(c.a)({url:"/getLoginCode",method:"GET",params:e})}function o(e){return Object(c.a)({url:"/login",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/loginOut",method:"GET",params:e})}},275:function(e,t,n){},287:function(e,t,n){},362:function(e,t,n){"use strict";n.r(t);var c=n(13),a=n(0),o=n(7),r=(n(217),n(216)),i=(n(185),n(283)),s=(n(188),n(186)),u=(n(191),n(71)),l=n(20),d=n.n(l),m=n(39),b=n(8),f=(n(275),n(203)),h=n(189),j=n(183),p=n(174);var x=n(70),g=n(53),O=["data","integral","","","logout"],v=["Chapter","Knowledge"],I=["Uploadpaper","paperList"];function k(e){e.homeInfo;var t,n,o=e.props,l=e.setData,x=Object(a.useState)(localStorage.getItem("menuIndex")||0),g=Object(b.a)(x,2),k=g[0],w=g[1],y=Object(a.useState)({}),N=Object(b.a)(y,2),C=N[0],S=N[1];Object(a.useEffect)((function(){return _(),function(){}}),[]);var _=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.a)({url:"/home",method:"GET"});case 2:t=e.sent,n=t.code,c=t.data,200==n&&(S(c),l(c));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(e){var t=new Map([[O[0],function(){console.log("datafunc")}],[O[1],function(){console.log("integralfunc")}],[O[4],function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,c,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(j.c)("id"),n=Object(j.c)("token"),e.next=4,Object(f.c)({id:t,token:n});case 4:c=e.sent,a=c.code,r=c.msg,200==a?(Object(j.b)("id"),Object(j.b)("token"),o.history.push("/login")):u.b.error(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()]]);t.get(e)&&t.get(e)(),localStorage.setItem("menuIndex",0)},E=function(e){var t=new Map([[v[0],function(){o.history.push("/main/chapter")}],[v[1],function(){o.history.push("/main/knowledge")}]]);t.get(e)&&t.get(e)(),localStorage.setItem("menuIndex",4)},P=function(e){var t=new Map([[I[0],function(){o.history.push("/main/uploadpaper")}],[I[1],function(){o.history.push("/main/paperlist")}]]);t.get(e)&&t.get(e)(),localStorage.setItem("menuIndex",5)},D=Object(c.jsxs)(s.a,{children:[Object(c.jsx)(s.a.Item,{onClick:function(){return E(v[0])},children:"\u7ae0\u8282\u540c\u6b65\u9009\u9898"}),Object(c.jsx)(s.a.Item,{onClick:function(){return E(v[1])},children:"\u77e5\u8bc6\u70b9\u7ec4\u5377"})]}),G=Object(c.jsxs)(s.a,{children:[Object(c.jsx)(s.a.Item,{onClick:function(){return T(O[0])},children:"\u4e2a\u4eba\u8d44\u6599"}),Object(c.jsx)(s.a.Item,{onClick:function(){return T(O[1])},children:"\u6211\u7684\u79ef\u5206"}),Object(c.jsx)(s.a.Item,{onClick:function(){return T(O[2])},children:"\u4e0b\u8f7d\u8bb0\u5f55"}),Object(c.jsx)(s.a.Item,{onClick:function(){return T(O[3])},children:"\u7ec4\u5377\u8bb0\u5f55"}),Object(c.jsx)(s.a.Item,{onClick:function(){return T(O[4])},style:{color:"#E9140A"},children:"\u9000\u51fa"})]}),M=Object(c.jsxs)(s.a,{children:[Object(c.jsx)(s.a.Item,{onClick:function(){return P(I[0])},children:"\u4e0a\u4f20\u8bd5\u5377"}),Object(c.jsx)(s.a.Item,{onClick:function(){return P(I[1])},children:"\u8bd5\u5377\u5217\u8868"})]});return Object(c.jsxs)("div",{id:"AI_header",children:[Object(c.jsxs)("div",{className:"title_box",children:[Object(c.jsx)("div",{className:"left_icon",children:Object(c.jsx)("img",{className:"logo",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/logo.png",alt:"logo"})}),Object(c.jsx)("div",{className:"center_box",children:h.e.map((function(e,t){return Object(c.jsx)("div",{className:k==t?"cenItem index":"cenItem",onClick:function(e){return w(n=t),localStorage.setItem("menuIndex",n),void(4!==n&&5!==n&&o.history.push("".concat(h.e[n].url)));var n},children:4==t?Object(c.jsx)(i.a,{overlay:D,placement:"bottomCenter",children:Object(c.jsx)("button",{children:e.text})}):5==t?Object(c.jsx)(i.a,{overlay:M,placement:"bottomCenter",children:Object(c.jsx)("button",{children:e.text})}):e.text},t)}))}),Object(c.jsxs)("div",{overlay:D,placement:"bottomCenter",className:"right_box",children:[Object(c.jsx)(r.a,{className:"Avatar",alt:"Remy Sharp",src:null===(t=C.teacher)||void 0===t?void 0:t.avatar_file}),Object(c.jsx)(i.a,{overlay:G,placement:"bottomCenter",children:Object(c.jsxs)("button",{children:[null===(n=C.teacher)||void 0===n?void 0:n.true_name," ",Object(c.jsx)("div",{className:"right_icon"})]})})]})]}),Object(c.jsx)("img",{className:"banner",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/banner.png",alt:"banner"})]})}var w=Object(x.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var n={type:g.b,value:t};e(n)}}}))(Object(a.memo)(k));n(287);function y(){return Object(c.jsxs)("div",{id:"AI_footer",children:[Object(c.jsx)("img",{className:"footimg",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footimg.png",alt:"footimg"}),Object(c.jsxs)("footer",{children:[Object(c.jsxs)("div",{className:"left_info",children:[Object(c.jsx)("div",{className:"infoitems ",children:"\u8054\u7cfb\u6211\u4eec"}),Object(c.jsx)("div",{className:"infoitems ",children:"\u90ae\u7bb1\u5730\u5740"}),Object(c.jsx)("div",{className:"infoitems ",children:"\u54a8\u8be2\u70ed\u7ebf"}),Object(c.jsx)("div",{className:"infoitems botfont",children:"\u5173\u4e8e\u6211\u4eec"}),Object(c.jsx)("div",{className:"infoitems botfont",children:"kefu@aictb.com"}),Object(c.jsx)("div",{className:"infoitems botfont",children:"0514-82885886"})]}),Object(c.jsxs)("div",{className:"cen_box",children:[Object(c.jsx)("img",{className:"footqrcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footqrcode.png",alt:"footqrcode"}),Object(c.jsx)("span",{className:"foottext",children:"\u5173\u6ce8\u5fae\u4fe1\u516c\u4f17\u53f7"})]}),Object(c.jsx)("img",{className:"foottip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/foottip.png",alt:"foottip"})]})]})}var N=Object(a.memo)(y),C=n(60),S=n.n(C),_=n(59),T=S()({loader:function(){return n.e(19).then(n.bind(null,363))},loading:_.a}),E=S()({loader:function(){return Promise.all([n.e(0),n.e(4),n.e(11)]).then(n.bind(null,351))},loading:_.a}),P=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(18)]).then(n.bind(null,361))},loading:_.a}),D=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(21)]).then(n.bind(null,352))},loading:_.a}),G=S()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(10),n.e(20)]).then(n.bind(null,353))},loading:_.a}),M=S()({loader:function(){return Promise.all([n.e(1),n.e(9),n.e(22)]).then(n.bind(null,354))},loading:_.a}),q=S()({loader:function(){return n.e(24).then(n.bind(null,355))},loading:_.a}),A=S()({loader:function(){return n.e(12).then(n.bind(null,356))},loading:_.a}),L=S()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(23)]).then(n.bind(null,357))},loading:_.a}),R=S()({loader:function(){return n.e(14).then(n.bind(null,358))},loading:_.a}),U=S()({loader:function(){return n.e(13).then(n.bind(null,359))},loading:_.a}),$=S()({loader:function(){return n.e(15).then(n.bind(null,360))},loading:_.a}),F=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w,{props:e}),Object(c.jsx)(o.b,{path:"/main/index",component:T}),Object(c.jsx)(o.b,{path:"/main/class",component:E}),Object(c.jsx)(o.b,{path:"/main/famous",component:P}),Object(c.jsx)(o.b,{path:"/main/schoolbased",component:D}),Object(c.jsx)(o.b,{path:"/main/knowledge",component:G}),Object(c.jsx)(o.b,{path:"/main/uploadpaper",component:M}),Object(c.jsx)(o.b,{path:"/main/paperlist",component:U}),Object(c.jsx)(o.b,{path:"/main/mypaper",component:q}),Object(c.jsx)(o.b,{path:"/main/classdetail",component:A}),Object(c.jsx)(o.b,{path:"/main/chapter",component:L}),Object(c.jsx)(o.b,{path:"/main/questiondetails",component:R}),Object(c.jsx)(o.b,{path:"/main/schoolbaseddetail",component:$}),Object(c.jsx)(N,{})]})};t.default=Object(a.memo)(F)}}]);