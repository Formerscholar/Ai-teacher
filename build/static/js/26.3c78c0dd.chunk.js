(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[26],{190:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(279),a=n.n(c),i=n(206);function s(t){return new Promise((function(e,n){var c=a.a.create({baseURL:i.b,timeout:1e4});c.interceptors.request.use((function(t){return t}),(function(t){return t})),c.interceptors.response.use((function(t){return 777===t.data.code&&(window.location.href="/login"),t.data}),(function(t){if(console.log(t),t&&t.response)switch(t.response.status){case 400:t.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:t.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:t.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return t})),c(t).then((function(t){e(t)})).catch((function(t){n(t)}))}))}a.a.defaults.withCredentials=!0},191:function(t,e,n){"use strict";function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(t),c=n.getFullYear().toString(),a=(n.getMonth()+1).toString(),i=n.getDate().toString(),s=n.getHours().toString(),r=n.getMinutes().toString(),o=n.getSeconds().toString();return a=a.length<2?"0"+a:a,i=i.length<2?"0"+i:i,s=s.length<2?"0"+s:s,r=r.length<2?"0"+r:r,o=o.length<2?"0"+o:o,e?"".concat(c,"-").concat(a,"-").concat(i," ").concat(s,":").concat(r,":").concat(o):"".concat(c,"-").concat(a,"-").concat(i)}n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return r})),n.d(e,"g",(function(){return o})),n.d(e,"d",(function(){return u}));var a=function(t,e){var n=new Date;n.setTime(n.getTime()+6048e5);var c="expires="+n.toGMTString();document.cookie=t+"="+e+"; "+c};function i(t){var e,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(n))?unescape(e[2]):null}function s(t){var e=new Date;e.setTime(e.getTime()-1);var n=i(t);null!=n&&(document.cookie=t+"="+n+";expires="+e.toGMTString())}function r(t){return t.replace(/(^\s*)|(\s*$)/g,"")}function o(t){var e=t.substr(1),n={};return e.split("&").map((function(t){var e=t.split("=");n[e[0]]=e[1]})),n}var u=function(t,e){var n=t;return n.setTime(n.getTime()-24*e*60*60*1e3),[c(n),c(new Date)]}},206:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"i",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"g",(function(){return o})),n.d(e,"e",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"d",(function(){return l})),n.d(e,"f",(function(){return i}));var c="http://test.aictb.com/teacher",a=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,s="wx5f0976e726b587f8",r=encodeURIComponent("http://test.aictb.com/teacher/WXLogin"),o=[{text:"\u9996\u9875",url:"/main/index"},{text:"\u73ed\u7ea7\u4fe1\u606f",url:"/main/class"},{text:"\u5b66\u60c5\u62a5\u544a",url:"/main/classreport"},{text:"\u540d\u6821\u8d44\u6e90",url:"/main/famous"},{text:"\u6821\u672c\u8bd5\u5377",url:"/main/schoolbased"},{text:"\u77e5\u8bc6\u5e93",url:"/main/knowledge"},{text:"\u6211\u7684\u8bd5\u5377",url:"/main/mypaperlist"}],u="http://aictb.com",l="http://test.aictb.com",d=[{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/setup_icon_small.png",text:"\u4e2a\u4eba\u8d44\u6599"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon_small.png",text:"\u6211\u7684\u79ef\u5206"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon_small.png",text:"\u4e0b\u8f7d\u8bb0\u5f55"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/Group_icon_small.png",text:"\u4e0a\u4f20\u7684\u8bd5\u5377"}]},242:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return s}));var c=n(190);function a(t){return Object(c.a)({url:"/getLoginCode",method:"GET",params:t})}function i(t){return Object(c.a)({url:"/login",method:"GET",params:t})}function s(t){return Object(c.a)({url:"/loginOut",method:"GET",params:t})}},309:function(t,e,n){},439:function(t,e,n){"use strict";n.r(e);n(184);var c=n(183),a=(n(203),n(205)),i=n(186),s=n.n(i),r=(n(189),n(64)),o=n(187),u=n(188),l=n(9),d=n(0),h=(n(309),n(206)),b=n(191),m=n(242);function g(t){var e=Object(d.useState)(!1),n=Object(u.a)(e,2),i=n[0],g=n[1],j=Object(d.useState)(!0),f=Object(u.a)(j,2),p=f[0],x=f[1],O=Object(d.useState)(!1),v=Object(u.a)(O,2),_=v[0],w=v[1],N=Object(d.useState)(!0),k=Object(u.a)(N,2),S=k[0],y=k[1],T=Object(d.useState)("60"),M=Object(u.a)(T,2),C=M[0],R=M[1],W=Object(d.useState)(""),G=Object(u.a)(W,2),I=G[0],L=G[1],D=Object(d.useState)(""),E=Object(u.a)(D,2),Q=E[0],F=E[1],$=null;Object(d.useEffect)((function(){return window.WxLogin({self_redirect:!0,id:"login_container",appid:h.a,scope:"snsapi_login",redirect_uri:h.c,state:Math.ceil(1e3*Math.random()),style:"black",href:""}),function(){clearInterval($)}}),[]);var z=function(){var t=Object(o.a)(s.a.mark((function t(){var e,n,c,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!h.i.test(I)){t.next=12;break}return w(!0),e=C,$=setInterval((function(){0==e?(R("60"),w(!1),clearInterval($)):(e--,R(e))}),1e3),t.next=6,Object(m.b)({mobile:I});case 6:n=t.sent,c=n.code,a=n.msg,200!==c&&r.b.error(a),t.next=13;break;case 12:r.b.error("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7\u7801!");case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(s.a.mark((function e(){var n,c,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)({mobile:I,code:Q});case 2:n=e.sent,c=n.code,a=n.data,i=n.msg,200==c?(Object(b.e)("id",a.id),Object(b.e)("token",a.token),t.history.push("/main/index")):r.b.error(i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{id:"Login",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"left_box",children:Object(l.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/login_img.png",alt:"login_img"})}),Object(l.jsxs)("div",{className:"right_box",children:[Object(l.jsxs)("div",{className:"right_imgs",onClick:function(){i?(g(!i),setTimeout((function(){x(!p),window.WxLogin({self_redirect:!0,id:"login_container",appid:h.a,scope:"snsapi_login",redirect_uri:h.c,state:Math.ceil(1e3*Math.random()),style:"black",href:""})}),300)):(x(!p),setTimeout((function(){g(!i)}),300))},children:[i?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"WeChat",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"}),Object(l.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/QRcode.png",alt:"QRcode"})]}):"",p?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/SMSlogin.png",className:"phone_right_icon"}),Object(l.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/computer.png",alt:"QRcode"})]}):""]}),i?Object(l.jsxs)("div",{className:"form_box",children:[Object(l.jsx)("div",{className:"title",children:"\u8001\u5e08\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"}),Object(l.jsxs)("div",{className:"phone",children:[Object(l.jsx)("span",{children:"\u624b\u673a\u53f7"}),Object(l.jsx)(a.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onInput:function(t){var e=t.target.value;h.i.test(e)&&L(Object(b.a)(e))}})]}),Object(l.jsxs)("div",{className:"Verification",children:[Object(l.jsx)("span",{children:"\u9a8c\u8bc1\u7801"}),Object(l.jsx)(a.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onInput:function(t){var e=t.target.value;F(Object(b.a)(e)),y(!1)},suffix:Object(l.jsx)("button",{disabled:_,onClick:z,children:_?"\u518d\u6b21\u83b7\u53d6(".concat(C,")"):"\u83b7\u53d6\u9a8c\u8bc1\u7801"})})]}),Object(l.jsx)("div",{className:"btns",children:Object(l.jsx)(c.a,{variant:"contained",disabled:S,className:"login",onClick:A,children:"\u767b\u5f55"})}),Object(l.jsx)("div",{className:"tip",children:"\u5ba2\u670d\u7535\u8bdd:0514-82885886"})]}):"",p?Object(l.jsxs)("div",{className:"wechatForm",children:[Object(l.jsxs)("div",{className:"title_box",children:[Object(l.jsx)("img",{className:"wechat_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/wechat_icon.png",alt:"wechat_icon"}),Object(l.jsx)("span",{className:"text",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"})]}),Object(l.jsxs)("div",{className:"content_box",children:[Object(l.jsx)("div",{id:"login_container"}),Object(l.jsx)("img",{className:"MobileWeChattip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/MobileWeChattip.png",alt:"MobileWeChattip"})]}),Object(l.jsx)("div",{className:"footer_box",children:"\u6253\u5f00\u5fae\u4fe1,\u626b\u4e00\u626b\u767b\u5f55"})]}):""]})]})})}e.default=Object(d.memo)(g)}}]);