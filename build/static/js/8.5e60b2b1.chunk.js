(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[8],{173:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(199),a=n.n(c),s=n(177);function i(e){return new Promise((function(t,n){var c=a.a.create({baseURL:s.b,timeout:1e4});c.interceptors.request.use((function(e){return e}),(function(e){return e})),c.interceptors.response.use((function(e){return 777===e.data.code&&(window.location.href="/login"),e.data}),(function(e){if(console.log(e),e&&e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:e.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return e})),c(e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}a.a.defaults.withCredentials=!0},175:function(e,t,n){"use strict";function c(e){var t=new Date(e),n=t.getFullYear().toString(),c=(t.getMonth()+1).toString(),a=t.getDate().toString();return c=c.length<2?"0"+c:c,a=a.length<2?"0"+a:a,"".concat(n,"-").concat(c,"-").concat(a)}n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var a=function(e,t){var n=new Date;n.setTime(n.getTime()+6048e5);var c="expires="+n.toGMTString();document.cookie=e+"="+t+"; "+c};function s(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function i(e){var t=new Date;t.setTime(t.getTime()-1);var n=s(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}function r(e){return e.replace(/(^\s*)|(\s*$)/g,"")}},177:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return r}));var c="http://test.aictb.com/teacher",a=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,s="wx5f0976e726b587f8",i=encodeURIComponent("http://test.aictb.com/teacher/WXLogin"),r=[{text:"\u9996\u9875",url:"main/index"},{text:"\u73ed\u7ea7\u4fe1\u606f",url:"main/class"},{text:"\u540d\u6821\u8d44\u6e90",url:"main/famous"},{text:"\u6821\u672c\u8bd5\u5377",url:"main/schoolbased"},{text:"\u77e5\u8bc6\u5e93",url:"main/knowledge"},{text:"\u4e0a\u4f20\u8bd5\u5377",url:"main/uploadpaper"},{text:"\u6211\u7684\u8bd5\u5377",url:"main/mypaper"}]},184:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var c=n(173);function a(e){return Object(c.a)({url:"/getLoginCode",method:"GET",params:e})}function s(e){return Object(c.a)({url:"/login",method:"GET",params:e})}function i(e){return Object(c.a)({url:"/loginOut",method:"GET",params:e})}},185:function(e,t,n){"use strict";var c;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(c=n(186))&&c.__esModule?c:{default:c};t.default=a,e.exports=a},186:function(e,t,n){"use strict";var c=n(9),a=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(0)),i=c(n(187)),r=c(n(24)),o=function(e,t){return s.createElement(r.default,Object.assign({},e,{ref:t,icon:i.default}))};o.displayName="SearchOutlined";var u=s.forwardRef(o);t.default=u},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},223:function(e,t,n){},314:function(e,t,n){"use strict";n.r(t);n(172);var c=n(174),a=(n(179),n(182)),s=n(20),i=n.n(s),r=(n(198),n(75)),o=n(39),u=n(8),l=n(13),d=n(0),b=(n(223),n(177)),h=n(175),j=n(184);function m(e){var t=Object(d.useState)(!1),n=Object(u.a)(t,2),s=n[0],m=n[1],f=Object(d.useState)(!0),p=Object(u.a)(f,2),g=p[0],O=p[1],x=Object(d.useState)(!1),v=Object(u.a)(x,2),_=v[0],w=v[1],N=Object(d.useState)(!0),k=Object(u.a)(N,2),C=k[0],M=k[1],y=Object(d.useState)("60"),S=Object(u.a)(y,2),T=S[0],R=S[1],L=Object(d.useState)(""),F=Object(u.a)(L,2),W=F[0],E=F[1],G=Object(d.useState)(""),I=Object(u.a)(G,2),Q=I[0],D=I[1],P=null,$=null;Object(d.useEffect)((function(){return window.WxLogin({self_redirect:!0,id:"login_container",appid:b.a,scope:"snsapi_login",redirect_uri:b.c,state:Math.ceil(1e3*Math.random()),style:"black",href:""}),function(){clearInterval(P),clearTimeout($)}}),[]);var z=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,c,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b.e.test(W)){e.next=15;break}return w(!0),t=60,P=setInterval((function(){t--,R(t)}),1e3),console.log(T),$=setTimeout((function(){w(!1)}),6e4),e.next=8,Object(j.b)({mobile:W});case 8:n=e.sent,c=n.code,a=n.data,s=n.msg,console.log("getLoginCode",c,a,s),e.next=16;break;case 15:r.b.error("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7\u7801!");case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var t=Object(o.a)(i.a.mark((function t(){var n,c,a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)({mobile:W,code:Q});case 2:n=t.sent,c=n.code,a=n.data,s=n.msg,200==c?(Object(h.d)("id",a.id),Object(h.d)("token",a.token),e.history.push("/main")):r.b.error(s);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.jsx)("div",{id:"Login",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"left_box",children:Object(l.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/login_img.png",alt:"login_img"})}),Object(l.jsxs)("div",{className:"right_box",children:[Object(l.jsxs)("div",{className:"right_imgs",onClick:function(){s?(m(!s),setTimeout((function(){O(!g),window.WxLogin({self_redirect:!0,id:"login_container",appid:b.a,scope:"snsapi_login",redirect_uri:b.c,state:Math.ceil(1e3*Math.random()),style:"black",href:""})}),300)):(O(!g),setTimeout((function(){m(!s)}),300))},children:[s?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"WeChat",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"}),Object(l.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/QRcode.png",alt:"QRcode"})]}):"",g?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/SMSlogin.png",className:"phone_right_icon"}),Object(l.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/computer.png",alt:"QRcode"})]})}):""]}),s?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"form_box",children:[Object(l.jsx)("div",{className:"title",children:"\u8001\u5e08\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"}),Object(l.jsxs)("div",{className:"phone",children:[Object(l.jsx)("span",{children:"\u624b\u673a\u53f7"}),Object(l.jsx)(a.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onInput:function(e){var t=e.target.value;b.e.test(t)&&E(Object(h.a)(t))}})]}),Object(l.jsxs)("div",{className:"Verification",children:[Object(l.jsx)("span",{children:"\u9a8c\u8bc1\u7801"}),Object(l.jsx)(a.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onInput:function(e){var t=e.target.value;D(Object(h.a)(t)),M(!1)},suffix:Object(l.jsx)("button",{disabled:_,onClick:z,children:_?"\u518d\u6b21\u83b7\u53d6(".concat(T,")"):"\u83b7\u53d6\u9a8c\u8bc1\u7801"})})]}),Object(l.jsx)("div",{className:"btns",children:Object(l.jsx)(c.a,{variant:"contained",disabled:C,className:"login",onClick:J,children:"\u767b\u5f55"})}),Object(l.jsx)("div",{className:"tip",children:"\u5ba2\u670d\u7535\u8bdd:0514-82885886"})]})}):"",g?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"wechatForm",children:[Object(l.jsxs)("div",{className:"title_box",children:[Object(l.jsx)("img",{className:"wechat_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/wechat_icon.png",alt:"wechat_icon"}),Object(l.jsx)("span",{className:"text",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"})]}),Object(l.jsxs)("div",{className:"content_box",children:[Object(l.jsx)("div",{id:"login_container"}),Object(l.jsx)("img",{className:"MobileWeChattip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/MobileWeChattip.png",alt:"MobileWeChattip"})]}),Object(l.jsx)("div",{className:"footer_box",children:"\u6253\u5f00\u5fae\u4fe1,\u626b\u4e00\u626b\u767b\u5f55"})]})}):""]})]})})}t.default=Object(d.memo)(m)}}]);