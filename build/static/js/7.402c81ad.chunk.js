(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[7],{110:function(e,t,n){},202:function(e,t,n){"use strict";n.r(t);var c=n(56),i=n.n(c),a=n(57),r=n(60),s=n(67),o=n(4),u=n(0),l=(n(110),n(1)),d=n(50),b=n(40),j=(n(8),n(208)),m=n(66),h=n(63),f=n(71),p=n(47),O={entering:{opacity:1},entered:{opacity:1}},g={enter:m.b.enteringScreen,exit:m.b.leavingScreen},x=u.forwardRef((function(e,t){var n=e.children,c=e.disableStrictModeCompat,i=void 0!==c&&c,a=e.in,r=e.onEnter,s=e.onEntered,o=e.onEntering,m=e.onExit,x=e.onExited,v=e.onExiting,y=e.style,w=e.TransitionComponent,_=void 0===w?j.a:w,E=e.timeout,N=void 0===E?g:E,k=Object(b.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),S=Object(h.a)(),T=S.unstable_strictMode&&!i,C=u.useRef(null),M=Object(p.a)(n.ref,t),R=Object(p.a)(T?C:void 0,M),L=function(e){return function(t,n){if(e){var c=T?[C.current,t]:[t,n],i=Object(d.a)(c,2),a=i[0],r=i[1];void 0===r?e(a):e(a,r)}}},W=L(o),I=L((function(e,t){Object(f.b)(e);var n=Object(f.a)({style:y,timeout:N},{mode:"enter"});e.style.webkitTransition=S.transitions.create("opacity",n),e.style.transition=S.transitions.create("opacity",n),r&&r(e,t)})),D=L(s),G=L(v),Q=L((function(e){var t=Object(f.a)({style:y,timeout:N},{mode:"exit"});e.style.webkitTransition=S.transitions.create("opacity",t),e.style.transition=S.transitions.create("opacity",t),m&&m(e)})),F=L(x);return u.createElement(_,Object(l.a)({appear:!0,in:a,nodeRef:T?C:void 0,onEnter:I,onEntered:D,onEntering:W,onExit:Q,onExited:F,onExiting:G,timeout:N},k),(function(e,t){return u.cloneElement(n,Object(l.a)({style:Object(l.a)({opacity:0,visibility:"exited"!==e||a?void 0:"hidden"},O[e],y,n.props.style),ref:R},t))}))})),v=n(195),y=n(101),w=n(201),_=n(198),E=n(61),N=n(58),k=n(69);function S(e){return Object(o.jsx)(_.a,Object(s.a)({elevation:6,variant:"filled"},e))}function T(e){var t=Object(u.useState)(!1),n=Object(r.a)(t,2),c=n[0],s=n[1],l=Object(u.useState)(!0),d=Object(r.a)(l,2),b=d[0],j=d[1],m=Object(u.useState)(!1),h=Object(r.a)(m,2),f=h[0],p=h[1],O=Object(u.useState)("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7\u7801!"),g=Object(r.a)(O,2),_=g[0],T=g[1],C=Object(u.useState)(!1),M=Object(r.a)(C,2),R=M[0],L=M[1],W=Object(u.useState)(!0),I=Object(r.a)(W,2),D=I[0],G=I[1],Q=Object(u.useState)("60"),F=Object(r.a)(Q,2),$=F[0],J=F[1],P=Object(u.useState)(""),U=Object(r.a)(P,2),q=U[0],z=U[1],A=Object(u.useState)(""),H=Object(r.a)(A,2),V=H[0],X=H[1],Y=null,B=null;Object(u.useEffect)((function(){return window.WxLogin({self_redirect:!0,id:"login_container",appid:E.a,scope:"snsapi_login",redirect_uri:E.c,state:Math.ceil(1e3*Math.random()),style:"black",href:""}),function(){clearInterval(Y),clearTimeout(B)}}),[]);var K=function(){var e=Object(a.a)(i.a.mark((function e(){var t,n,c,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7\u7801!"),!E.e.test(q)){e.next=16;break}return L(!0),t=60,Y=setInterval((function(){t--,J(t)}),1e3),console.log($),B=setTimeout((function(){L(!1)}),6e4),e.next=9,Object(k.b)({mobile:q});case 9:n=e.sent,c=n.code,a=n.data,r=n.msg,console.log("getLoginCode",c,a,r),e.next=18;break;case 16:p(!0),setTimeout((function(){p(!1)}),2888);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var t=Object(a.a)(i.a.mark((function t(){var n,c,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(k.a)({mobile:q,code:V});case 2:n=t.sent,c=n.code,a=n.data,r=n.msg,T(r),200==c?(Object(N.d)("id",a.id),Object(N.d)("token",a.token),e.history.push("/main")):(p(!0),setTimeout((function(){p(!1)}),2888));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"Login",children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("div",{className:"left_box",children:Object(o.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/login_img.png",alt:"login_img"})}),Object(o.jsxs)("div",{className:"right_box",children:[Object(o.jsxs)("div",{className:"right_imgs",onClick:function(){c?(s(!c),setTimeout((function(){j(!b),window.WxLogin({self_redirect:!0,id:"login_container",appid:E.a,scope:"snsapi_login",redirect_uri:E.c,state:Math.ceil(1e3*Math.random()),style:"black",href:""})}),300)):(j(!b),setTimeout((function(){s(!c)}),300))},children:[c?Object(o.jsx)(x,{in:c,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"WeChat",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"}),Object(o.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/QRcode.png",alt:"QRcode"})]})}):"",b?Object(o.jsx)(x,{in:b,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/SMSlogin.png",className:"phone_right_icon"}),Object(o.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/computer.png",alt:"QRcode"})]})}):""]}),c?Object(o.jsx)(x,{in:c,children:Object(o.jsxs)("div",{className:"form_box",children:[Object(o.jsx)("div",{className:"title",children:"\u8001\u5e08\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"}),Object(o.jsxs)("div",{className:"phone",children:[Object(o.jsx)("span",{children:"\u624b\u673a\u53f7"}),Object(o.jsx)(v.a,{id:"standard-basic",className:"userinput",label:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onInput:function(e){var t=e.target.value;E.e.test(t)&&z(Object(N.a)(t))}})]}),Object(o.jsxs)("div",{className:"Verification",children:[Object(o.jsx)("span",{children:"\u9a8c\u8bc1\u7801"}),Object(o.jsx)(v.a,{id:"standard-basic",className:"userinput",label:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onInput:function(e){var t=e.target.value;X(Object(N.a)(t)),G(!1)},InputProps:{endAdornment:Object(o.jsx)("button",{disabled:R,onClick:K,children:R?"\u518d\u6b21\u83b7\u53d6(".concat($,")"):"\u83b7\u53d6\u9a8c\u8bc1\u7801"})}})]}),Object(o.jsx)("div",{className:"btns",children:Object(o.jsx)(y.a,{variant:"contained",disabled:D,className:"login",onClick:Z,children:"\u767b\u5f55"})}),Object(o.jsx)("div",{className:"tip",children:"\u5ba2\u670d\u7535\u8bdd:0514-82885886"})]})}):"",b?Object(o.jsx)(x,{in:b,children:Object(o.jsxs)("div",{className:"wechatForm",children:[Object(o.jsxs)("div",{className:"title_box",children:[Object(o.jsx)("img",{className:"wechat_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/wechat_icon.png",alt:"wechat_icon"}),Object(o.jsx)("span",{className:"text",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"})]}),Object(o.jsxs)("div",{className:"content_box",children:[Object(o.jsx)("div",{id:"login_container"}),Object(o.jsx)("img",{className:"MobileWeChattip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/MobileWeChattip.png",alt:"MobileWeChattip"})]}),Object(o.jsx)("div",{className:"footer_box",children:"\u6253\u5f00\u5fae\u4fe1,\u626b\u4e00\u626b\u767b\u5f55"})]})}):""]})]}),Object(o.jsx)(w.a,{open:f,autoHideDuration:2888,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(o.jsx)(S,{severity:"error",children:_})})]})}t.default=Object(u.memo)(T)},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(81),i=n.n(c),a=n(61);function r(e){return new Promise((function(t,n){var c=i.a.create({baseURL:a.b,timeout:1e4});c.interceptors.request.use((function(e){return e}),(function(e){return e})),c.interceptors.response.use((function(e){return 777===e.data.code&&(window.location.href="/login"),e.data}),(function(e){if(console.log(e),e&&e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:e.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return e})),c(e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}i.a.defaults.withCredentials=!0},58:function(e,t,n){"use strict";function c(e){var t=new Date(e),n=t.getFullYear().toString(),c=(t.getMonth()+1).toString(),i=t.getDate().toString();return c=c.length<2?"0"+c:c,i=i.length<2?"0"+i:i,"".concat(n,"-").concat(c,"-").concat(i)}n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var i=function(e,t){var n=new Date;n.setTime(n.getTime()+6048e5);var c="expires="+n.toGMTString();document.cookie=e+"="+t+"; "+c};function a(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function r(e){var t=new Date;t.setTime(t.getTime()-1);var n=a(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}function s(e){return e.replace(/(^\s*)|(\s*$)/g,"")}},61:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return s}));var c="http://test.aictb.com/teacher",i=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,a="wx5f0976e726b587f8",r=encodeURIComponent("http://test.aictb.com/teacher/WXLogin"),s=[{text:"\u9996\u9875",url:"main/index"},{text:"\u73ed\u7ea7\u4fe1\u606f",url:"main/class"},{text:"\u540d\u6821\u8d44\u6e90",url:"main/famous"},{text:"\u6821\u672c\u8bd5\u5377",url:"main/schoolbased"},{text:"\u77e5\u8bc6\u5e93",url:"main/knowledge"},{text:"\u4e0a\u4f20\u8bd5\u5377",url:"main/uploadpaper"},{text:"\u6211\u7684\u8bd5\u5377",url:"main/mypaper"}]},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r}));var c=n(48);function i(e){return Object(c.a)({url:"/getLoginCode",method:"GET",params:e})}function a(e){return Object(c.a)({url:"/login",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/loginOut",method:"GET",params:e})}}}]);