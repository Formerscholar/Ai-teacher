(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[17],{186:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(247),a=n.n(c),i=n(200);function s(e){return new Promise((function(t,n){var c=a.a.create({baseURL:i.b,timeout:1e4});c.interceptors.request.use((function(e){return e}),(function(e){return e})),c.interceptors.response.use((function(e){return 777===e.data.code&&(window.location.href="/login"),e.data}),(function(e){if(console.log(e),e&&e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:e.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return e})),c(e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}a.a.defaults.withCredentials=!0},187:function(e,t,n){"use strict";function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(e),c=n.getFullYear().toString(),a=(n.getMonth()+1).toString(),i=n.getDate().toString(),s=n.getHours().toString(),r=n.getMinutes().toString(),o=n.getSeconds().toString();return a=a.length<2?"0"+a:a,i=i.length<2?"0"+i:i,s=s.length<2?"0"+s:s,r=r.length<2?"0"+r:r,o=o.length<2?"0"+o:o,t?"".concat(c,"-").concat(a,"-").concat(i," ").concat(s,":").concat(r,":").concat(o):"".concat(c,"-").concat(a,"-").concat(i)}n.d(t,"g",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"h",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l}));var a=function(e,t){var n=new Date;n.setTime(n.getTime()+6048e5);var c="expires="+n.toGMTString();document.cookie=e+"="+t+"; "+c};function i(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function s(e){var t=new Date;t.setTime(t.getTime()-1);var n=i(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}function r(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function o(e){var t=e.substr(1),n={};return t.split("&").map((function(e){var t=e.split("=");n[t[0]]=t[1]})),n}var u=function(e){var t=[],n=e,a=n.getDay(),i=864e5,s=0!=a?a-1:6,r=new Date(n.getTime()-s*i),o=new Date(r.getTime()+5184e5);return t.push(c(r)),t.push(c(o)),t},l=function(e,t){var n=e;return n.setTime(n.getTime()-24*t*60*60*1e3),[c(n),c(new Date)]}},200:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"g",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return u}));var c="http://test.aictb.com/teacher",a=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,i="wx5f0976e726b587f8",s=encodeURIComponent("http://test.aictb.com/teacher/WXLogin"),r=[{text:"\u9996\u9875",url:"/main/index"},{text:"\u73ed\u7ea7\u4fe1\u606f",url:"/main/class"},{text:"\u5b66\u60c5\u62a5\u544a",url:"/main/classreport"},{text:"\u540d\u6821\u8d44\u6e90",url:"/main/famous"},{text:"\u6821\u672c\u8bd5\u5377",url:"/main/schoolbased"},{text:"\u77e5\u8bc6\u5e93",url:"/main/knowledge"},{text:"\u6211\u7684\u8bd5\u5377",url:"/main/mypaper"}],o="http://aictb.com",u=[{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/setup_icon_small.png",text:"\u4e2a\u4eba\u8d44\u6599"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon_small.png",text:"\u6211\u7684\u79ef\u5206"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon_small.png",text:"\u4e0b\u8f7d\u8bb0\u5f55"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/Group_icon_small.png",text:"\u4e0a\u4f20\u8bd5\u5377"}]},226:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s}));var c=n(186);function a(e){return Object(c.a)({url:"/getLoginCode",method:"GET",params:e})}function i(e){return Object(c.a)({url:"/login",method:"GET",params:e})}function s(e){return Object(c.a)({url:"/loginOut",method:"GET",params:e})}},227:function(e,t,n){"use strict";var c;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(c=n(228))&&c.__esModule?c:{default:c};t.default=a,e.exports=a},228:function(e,t,n){"use strict";var c=n(12),a=n(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),s=c(n(229)),r=c(n(18)),o=function(e,t){return i.createElement(r.default,Object.assign({},e,{ref:t,icon:s.default}))};o.displayName="SearchOutlined";var u=i.forwardRef(o);t.default=u},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},281:function(e,t,n){},412:function(e,t,n){"use strict";n.r(t);n(184);var c=n(183),a=(n(207),n(211)),i=n(192),s=n.n(i),r=(n(197),n(70)),o=n(193),u=n(194),l=n(10),d=n(0),h=(n(281),n(200)),b=n(187),m=n(226);function f(e){var t=Object(d.useState)(!1),n=Object(u.a)(t,2),i=n[0],f=n[1],g=Object(d.useState)(!0),j=Object(u.a)(g,2),p=j[0],x=j[1],O=Object(d.useState)(!1),v=Object(u.a)(O,2),_=v[0],w=v[1],N=Object(d.useState)(!0),y=Object(u.a)(N,2),S=y[0],k=y[1],M=Object(d.useState)("60"),C=Object(u.a)(M,2),T=C[0],R=C[1],D=Object(d.useState)(""),L=Object(u.a)(D,2),W=L[0],E=L[1],G=Object(d.useState)(""),I=Object(u.a)(G,2),Q=I[0],F=I[1],P=null;Object(d.useEffect)((function(){return window.WxLogin({self_redirect:!0,id:"login_container",appid:h.a,scope:"snsapi_login",redirect_uri:h.c,state:Math.ceil(1e3*Math.random()),style:"black",href:""}),function(){clearInterval(P)}}),[]);var $=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.g.test(W)){e.next=12;break}return w(!0),t=T,P=setInterval((function(){0==t?(R("60"),w(!1),clearInterval(P)):(t--,R(t))}),1e3),e.next=6,Object(m.b)({mobile:W});case 6:n=e.sent,c=n.code,a=n.msg,200!==c&&r.b.error(a),e.next=13;break;case 12:r.b.error("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7\u7801!");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var t=Object(o.a)(s.a.mark((function t(){var n,c,a,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.a)({mobile:W,code:Q});case 2:n=t.sent,c=n.code,a=n.data,i=n.msg,200==c?(Object(b.f)("id",a.id),Object(b.f)("token",a.token),e.history.push("/main/index")):r.b.error(i);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.jsx)("div",{id:"Login",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"left_box",children:Object(l.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/login_img.png",alt:"login_img"})}),Object(l.jsxs)("div",{className:"right_box",children:[Object(l.jsxs)("div",{className:"right_imgs",onClick:function(){i?(f(!i),setTimeout((function(){x(!p),window.WxLogin({self_redirect:!0,id:"login_container",appid:h.a,scope:"snsapi_login",redirect_uri:h.c,state:Math.ceil(1e3*Math.random()),style:"black",href:""})}),300)):(x(!p),setTimeout((function(){f(!i)}),300))},children:[i?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"WeChat",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"}),Object(l.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/QRcode.png",alt:"QRcode"})]}):"",p?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/SMSlogin.png",className:"phone_right_icon"}),Object(l.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/computer.png",alt:"QRcode"})]}):""]}),i?Object(l.jsxs)("div",{className:"form_box",children:[Object(l.jsx)("div",{className:"title",children:"\u8001\u5e08\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"}),Object(l.jsxs)("div",{className:"phone",children:[Object(l.jsx)("span",{children:"\u624b\u673a\u53f7"}),Object(l.jsx)(a.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onInput:function(e){var t=e.target.value;h.g.test(t)&&E(Object(b.a)(t))}})]}),Object(l.jsxs)("div",{className:"Verification",children:[Object(l.jsx)("span",{children:"\u9a8c\u8bc1\u7801"}),Object(l.jsx)(a.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onInput:function(e){var t=e.target.value;F(Object(b.a)(t)),k(!1)},suffix:Object(l.jsx)("button",{disabled:_,onClick:$,children:_?"\u518d\u6b21\u83b7\u53d6(".concat(T,")"):"\u83b7\u53d6\u9a8c\u8bc1\u7801"})})]}),Object(l.jsx)("div",{className:"btns",children:Object(l.jsx)(c.a,{variant:"contained",disabled:S,className:"login",onClick:z,children:"\u767b\u5f55"})}),Object(l.jsx)("div",{className:"tip",children:"\u5ba2\u670d\u7535\u8bdd:0514-82885886"})]}):"",p?Object(l.jsxs)("div",{className:"wechatForm",children:[Object(l.jsxs)("div",{className:"title_box",children:[Object(l.jsx)("img",{className:"wechat_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/wechat_icon.png",alt:"wechat_icon"}),Object(l.jsx)("span",{className:"text",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"})]}),Object(l.jsxs)("div",{className:"content_box",children:[Object(l.jsx)("div",{id:"login_container"}),Object(l.jsx)("img",{className:"MobileWeChattip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/MobileWeChattip.png",alt:"MobileWeChattip"})]}),Object(l.jsx)("div",{className:"footer_box",children:"\u6253\u5f00\u5fae\u4fe1,\u626b\u4e00\u626b\u767b\u5f55"})]}):""]})]})})}t.default=Object(d.memo)(f)}}]);