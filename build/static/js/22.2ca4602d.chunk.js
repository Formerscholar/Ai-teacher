(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[22],{189:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(289),a=n.n(c),s=n(215);function r(e){return new Promise((function(t,n){var c=a.a.create({baseURL:s.c,timeout:1e4});c.interceptors.request.use((function(e){return e}),(function(e){return e})),c.interceptors.response.use((function(e){return 777===e.data.code&&(window.location.href="/login"),e.data}),(function(e){if(console.log(e),e&&e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:e.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return e})),c(e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}a.a.defaults.withCredentials=!0},193:function(e,t,n){"use strict";function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=new Date(e),a=c.getFullYear().toString(),s=(c.getMonth()+1).toString(),r=c.getDate().toString(),i=c.getHours().toString(),o=c.getMinutes().toString(),u=c.getSeconds().toString();return s=s.length<2?"0"+s:s,r=r.length<2?"0"+r:r,i=i.length<2?"0"+i:i,o=o.length<2?"0"+o:o,u=u.length<2?"0"+u:u,1===n?"".concat(a,"\u5e74").concat(s,"\u6708").concat(r,"\u65e5"):t?"".concat(a,"-").concat(s,"-").concat(r," ").concat(i,":").concat(o,":").concat(u):"".concat(a,"-").concat(s,"-").concat(r)}n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"g",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return u}));function a(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function s(e){var t=new Date;t.setTime(t.getTime()-1);var n=a(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}function r(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function i(e){var t=e.substr(1),n={};return t.split("&").map((function(e){var t=e.split("=");n[t[0]]=t[1]})),n}var o=function(e,t){var n=e;return n.setTime(n.getTime()-24*t*60*60*1e3),[c(n),c(new Date)]},u=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)}},215:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"j",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"i",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return h}));var c="https://api2.aictb.com/teacher",a=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,r="wx5f0976e726b587f8",i=encodeURIComponent("https://api2.aictb.com/teacher/WXLogin"),o=[{text:"\u9996\u9875",url:"/index"},{text:"\u73ed\u7ea7\u4fe1\u606f",url:"/class"},{text:"\u5b66\u60c5\u62a5\u544a",url:"/classreport"},{text:"\u540d\u6821\u8d44\u6e90",url:"/famous"},{text:"\u6821\u672c\u8bd5\u5377",url:"/schoolbased"},{text:"\u77e5\u8bc6\u5e93",url:"/knowledge"},{text:"\u6211\u7684\u8bd5\u5377",url:"/mypaper/list"}],u="http://aictb.com",l="https://api2.aictb.com",d=[{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/setup_icon_small.png",text:"\u4e2a\u4eba\u8d44\u6599"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon_small.png",text:"\u6211\u7684\u79ef\u5206"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon_small.png",text:"\u4e0b\u8f7d\u8bb0\u5f55"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/Group_icon_small.png",text:"\u4e0a\u4f20\u7684\u8bd5\u5377"}],h=["/user/datum","/user/integral","/user/down","/user/upload_list"]},217:function(e,t,n){"use strict";var c=n(12),a=n(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(0)),r=c(n(218)),i=c(n(18)),o=function(e,t){return s.createElement(i.default,Object.assign({},e,{ref:t,icon:r.default}))};o.displayName="SearchOutlined";var u=s.forwardRef(o);t.default=u},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},232:function(e,t,n){"use strict";var c;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(c=n(217))&&c.__esModule?c:{default:c};t.default=a,e.exports=a},251:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var c=n(189);function a(e){return Object(c.a)({url:"/getLoginCode",method:"GET",params:e})}function s(e){return Object(c.a)({url:"/loginOut",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/loginByPwd",method:"GET",params:e})}function i(e){return Object(c.a)({url:"/editPwd",method:"GET",params:e})}},326:function(e,t,n){},476:function(e,t,n){"use strict";n.r(t);n(185);var c=n(184),a=(n(214),n(216)),s=n(187),r=n.n(s),i=(n(192),n(64)),o=n(188),u=n(183),l=n(7),d=n(0),h=(n(326),n(215)),b=n(193),j=n(251);function f(e){var t=Object(d.useState)(0),n=Object(u.a)(t,2),s=n[0],f=n[1],m=Object(d.useState)(!1),p=Object(u.a)(m,2),g=p[0],x=p[1],O=Object(d.useState)(!0),v=Object(u.a)(O,2),_=v[0],w=v[1],N=Object(d.useState)("60"),y=Object(u.a)(N,2),S=y[0],k=y[1],C=Object(d.useState)(""),M=Object(u.a)(C,2),T=M[0],I=M[1],R=Object(d.useState)(""),P=Object(u.a)(R,2),E=P[0],L=P[1],W=Object(d.useState)(""),G=Object(u.a)(W,2),Q=G[0],z=G[1],D=null;Object(d.useEffect)((function(){return window.WxLogin({self_redirect:!0,id:"login_container",appid:h.b,scope:"snsapi_login",redirect_uri:h.d,state:Math.ceil(1e3*Math.random()),style:"black",href:""}),function(){clearInterval(D)}}),[]);var F=function(e){var t=e.target.value;h.j.test(t)&&I(Object(b.a)(t))},$=function(e){var t=e.target.value;z(Object(b.a)(t)),w(!1)},V=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,c,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.j.test(T)){e.next=9;break}return e.next=3,Object(j.c)({mobile:T});case 3:t=e.sent,n=t.code,c=t.msg,200!==n?i.b.error(c):(x(!0),a=S,D=setInterval((function(){0==a?(k("60"),x(!1),clearInterval(D)):(a--,k(a))}),1e3)),e.next=10;break;case 9:i.b.error("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7\u7801!");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var t=Object(o.a)(r.a.mark((function t(){var n,c,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.b)({mobile:T,pwd:Q});case 2:n=t.sent,c=n.code,n.data,a=n.msg,200==c?e.history.push("/index"):i.b.error(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)({mobile:T,pwd:Q,code:E});case 2:t=e.sent,n=t.code,c=t.msg,200==n?(i.b.success(c),setTimeout((function(){f(1)}),300)):i.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{id:"Login",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"left_box",children:Object(l.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/login_img.png",alt:"login_img"})}),Object(l.jsxs)("div",{className:"right_box",children:[Object(l.jsx)("div",{className:"right_imgs",onClick:function(){1===s?(f(0),setTimeout((function(){window.WxLogin({self_redirect:!0,id:"login_container",appid:h.b,scope:"snsapi_login",redirect_uri:h.d,state:Math.ceil(1e3*Math.random()),style:"black",href:""})}),300)):setTimeout((function(){f(1)}),300)},children:0===s?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"WeChat",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"}),Object(l.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/QRcode.png",alt:"QRcode"})]}):1===s?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/SMSlogin.png",className:"phone_right_icon"}),Object(l.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/computer.png",alt:"QRcode"})]}):""}),1===s?Object(l.jsxs)("div",{className:"form_box",children:[Object(l.jsx)("div",{className:"title",children:"\u8001\u5e08\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"}),Object(l.jsxs)("div",{className:"phone",children:[Object(l.jsx)("span",{children:"\u624b\u673a\u53f7"}),Object(l.jsx)(a.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onInput:F})]}),Object(l.jsxs)("div",{className:"Verification",children:[Object(l.jsx)("span",{children:"\u5bc6\u7801"}),Object(l.jsx)(a.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",onInput:$,type:"password"})]}),Object(l.jsx)("div",{className:"changePassword",onClick:function(){console.log("changePassword"),setTimeout((function(){f(2)}),300)},children:"\u5fd8\u8bb0\u5bc6\u7801?"}),Object(l.jsx)("div",{className:"btns",children:Object(l.jsx)(c.a,{variant:"contained",disabled:_,className:"login",onClick:A,children:"\u767b\u5f55"})}),Object(l.jsx)("div",{className:"tip",children:"\u5ba2\u670d\u7535\u8bdd:0514-82885886"})]}):0===s?Object(l.jsxs)("div",{className:"wechatForm",children:[Object(l.jsxs)("div",{className:"title_box",children:[Object(l.jsx)("img",{className:"wechat_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/wechat_icon.png",alt:"wechat_icon"}),Object(l.jsx)("span",{className:"text",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"})]}),Object(l.jsxs)("div",{className:"content_box",children:[Object(l.jsx)("div",{id:"login_container"}),Object(l.jsx)("img",{className:"MobileWeChattip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/MobileWeChattip.png",alt:"MobileWeChattip"})]}),Object(l.jsx)("div",{className:"footer_box",children:"\u6253\u5f00\u5fae\u4fe1,\u626b\u4e00\u626b\u767b\u5f55"})]}):Object(l.jsxs)("div",{className:"form_box",children:[Object(l.jsx)("div",{className:"title",children:"\u4fee\u6539\u5bc6\u7801"}),Object(l.jsxs)("div",{className:"phone",children:[Object(l.jsx)("span",{children:"\u624b\u673a\u53f7"}),Object(l.jsx)(a.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onInput:F})]}),Object(l.jsxs)("div",{className:"Verification",children:[Object(l.jsx)("span",{children:"\u65b0\u5bc6\u7801"}),Object(l.jsx)(a.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",onInput:$,type:"password"})]}),Object(l.jsxs)("div",{className:"Verification",children:[Object(l.jsx)("span",{children:"\u9a8c\u8bc1\u7801"}),Object(l.jsx)(a.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onInput:function(e){var t=e.target.value;L(Object(b.a)(t)),w(!1)},suffix:Object(l.jsx)("button",{disabled:g,onClick:V,children:g?"\u518d\u6b21\u83b7\u53d6(".concat(S,")"):"\u83b7\u53d6\u9a8c\u8bc1\u7801"})})]}),Object(l.jsx)("div",{className:"btns",children:Object(l.jsx)(c.a,{variant:"contained",disabled:_,className:"login",onClick:B,children:"\u4fee\u6539"})}),Object(l.jsx)("div",{className:"tip",children:"\u5ba2\u670d\u7535\u8bdd:0514-82885886"})]})]})]})})}t.default=Object(d.memo)(f)}}]);