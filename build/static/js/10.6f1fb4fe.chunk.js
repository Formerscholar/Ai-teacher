(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[10],{170:function(e,t,c){"use strict";c.r(t);var n=c(85),a=c.n(n),s=c(87),i=c(79),r=c(123),o=c(5),l=c(0),d=(c(88),c(158)),u=c(166),j=c(111),b=c(171),h=c(169),m=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,p="wx5f0976e726b587f8",O=encodeURIComponent("http://test.aictb.com/teacher/WXLogin"),g=function(e,t){var c=new Date;c.setTime(c.getTime()+6048e5);var n="expires="+c.toGMTString();document.cookie=e+"="+t+"; "+n};var x=c(89),f=c.n(x);function v(e){return new Promise((function(t,c){var n=f.a.create({baseURL:"http://test.aictb.com/teacher",timeout:1e4});n.interceptors.request.use((function(e){return e}),(function(e){return e})),n.interceptors.response.use((function(e){return 777===e.data.code&&(window.location.href="/login"),e.data}),(function(e){if(console.log(e),e&&e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:e.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return e})),n(e).then((function(e){t(e)})).catch((function(e){c(e)}))}))}function _(e){return Object(o.jsx)(h.a,Object(r.a)({elevation:6,variant:"filled"},e))}function N(e){var t=Object(l.useState)(!1),c=Object(i.a)(t,2),n=c[0],r=c[1],h=Object(l.useState)(!0),x=Object(i.a)(h,2),f=x[0],N=x[1],w=Object(l.useState)(!1),k=Object(i.a)(w,2),y=k[0],S=k[1],C=Object(l.useState)("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7\u7801!"),T=Object(i.a)(C,2),M=T[0],L=T[1],R=Object(l.useState)(!1),W=Object(i.a)(R,2),I=W[0],Q=W[1],E=Object(l.useState)(!0),F=Object(i.a)(E,2),G=F[0],D=F[1],J=Object(l.useState)("60"),P=Object(i.a)(J,2),U=P[0],q=P[1],z=Object(l.useState)(""),A=Object(i.a)(z,2),H=A[0],V=A[1],X=Object(l.useState)(""),$=Object(i.a)(X,2),B=$[0],K=$[1],Y=null,Z=null;Object(l.useEffect)((function(){return window.WxLogin({self_redirect:!0,id:"login_container",appid:p,scope:"snsapi_login",redirect_uri:O,state:Math.ceil(1e3*Math.random()),style:"black",href:""}),function(){clearInterval(Y),clearTimeout(Z)}}),[]);var ee=function(){var e=Object(s.a)(a.a.mark((function e(){var t,c,n,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7\u7801!"),!m.test(H)){e.next=16;break}return Q(!0),t=60,Y=setInterval((function(){t--,q(t)}),1e3),console.log(U),Z=setTimeout((function(){Q(!1)}),6e4),e.next=9,v({url:"/getLoginCode",method:"GET",params:{mobile:H}});case 9:c=e.sent,n=c.code,s=c.data,i=c.msg,console.log("getLoginCode",n,s,i),e.next=18;break;case 16:S(!0),setTimeout((function(){S(!1)}),2888);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var t=Object(s.a)(a.a.mark((function t(){var c,n,s,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v({url:"/login",method:"GET",params:{mobile:H,code:B}});case 2:c=t.sent,n=c.code,s=c.data,i=c.msg,L(i),200==n?(g("id",s.id),g("token",s.token),e.history.push("/main")):(S(!0),setTimeout((function(){S(!1)}),2888));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"Login",children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("div",{className:"left_box",children:Object(o.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/login_img.png",alt:"login_img"})}),Object(o.jsxs)("div",{className:"right_box",children:[Object(o.jsxs)("div",{className:"right_imgs",onClick:function(){n?(r(!n),setTimeout((function(){N(!f),window.WxLogin({self_redirect:!0,id:"login_container",appid:p,scope:"snsapi_login",redirect_uri:O,state:Math.ceil(1e3*Math.random()),style:"black",href:""})}),300)):(N(!f),setTimeout((function(){r(!n)}),300))},children:[n?Object(o.jsx)(d.a,{in:n,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"WeChat",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"}),Object(o.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/QRcode.png",alt:"QRcode"})]})}):"",f?Object(o.jsx)(d.a,{in:f,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/SMSlogin.png",className:"phone_right_icon"}),Object(o.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/computer.png",alt:"QRcode"})]})}):""]}),n?Object(o.jsx)(d.a,{in:n,children:Object(o.jsxs)("div",{className:"form_box",children:[Object(o.jsx)("div",{className:"title",children:"\u8001\u5e08\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"}),Object(o.jsxs)("div",{className:"phone",children:[Object(o.jsx)("span",{children:"\u624b\u673a\u53f7"}),Object(o.jsx)(u.a,{id:"standard-basic",className:"userinput",label:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onInput:function(e){var t=e.target.value;m.test(t)&&V(t)}})]}),Object(o.jsxs)("div",{className:"Verification",children:[Object(o.jsx)("span",{children:"\u9a8c\u8bc1\u7801"}),Object(o.jsx)(u.a,{id:"standard-basic",className:"userinput",label:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onInput:function(e){var t=e.target.value;K(t),D(!1)},InputProps:{endAdornment:Object(o.jsx)("button",{disabled:I,onClick:ee,children:I?"\u518d\u6b21\u83b7\u53d6(".concat(U,")"):"\u83b7\u53d6\u9a8c\u8bc1\u7801"})}})]}),Object(o.jsx)("div",{className:"btns",children:Object(o.jsx)(j.a,{variant:"contained",disabled:G,className:"login",onClick:te,children:"\u767b\u5f55"})}),Object(o.jsx)("div",{className:"tip",children:"\u5ba2\u670d\u7535\u8bdd:0514-82885886"})]})}):"",f?Object(o.jsx)(d.a,{in:f,children:Object(o.jsxs)("div",{className:"wechatForm",children:[Object(o.jsxs)("div",{className:"title_box",children:[Object(o.jsx)("img",{className:"wechat_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/wechat_icon.png",alt:"wechat_icon"}),Object(o.jsx)("span",{className:"text",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"})]}),Object(o.jsxs)("div",{className:"content_box",children:[Object(o.jsx)("div",{id:"login_container"}),Object(o.jsx)("img",{className:"MobileWeChattip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/MobileWeChattip.png",alt:"MobileWeChattip"})]}),Object(o.jsx)("div",{className:"footer_box",children:"\u6253\u5f00\u5fae\u4fe1,\u626b\u4e00\u626b\u767b\u5f55"})]})}):""]})]}),Object(o.jsx)(b.a,{open:y,autoHideDuration:2888,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(o.jsx)(_,{severity:"error",children:M})})]})}f.a.defaults.withCredentials=!0;t.default=Object(l.memo)(N)},88:function(e,t,c){}}]);