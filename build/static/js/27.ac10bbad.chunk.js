(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[27],{154:function(e,t,n){"use strict";function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=new Date(e),s=c.getFullYear().toString(),i=(c.getMonth()+1).toString(),a=c.getDate().toString(),r=c.getHours().toString(),o=c.getMinutes().toString(),l=c.getSeconds().toString();return i=i.length<2?"0"+i:i,a=a.length<2?"0"+a:a,r=r.length<2?"0"+r:r,o=o.length<2?"0"+o:o,l=l.length<2?"0"+l:l,1===n?"".concat(s,"\u5e74").concat(i,"\u6708").concat(a,"\u65e5"):t?"".concat(s,"-").concat(i,"-").concat(a," ").concat(r,":").concat(o,":").concat(l):"".concat(s,"-").concat(i,"-").concat(a)}n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return l}));function s(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function i(e){var t=new Date;t.setTime(t.getTime()-1);var n=s(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}function a(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function r(e){var t=e.substr(1),n={};return t.split("&").map((function(e){var t=e.split("=");n[t[0]]=t[1]})),n}var o=function(e,t){var n=e;return n.setTime(n.getTime()-24*t*60*60*1e3),[c(n),c(new Date)]},l=function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)}},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(250),s=n.n(c),i=n(192);function a(e){return new Promise((function(t,n){var c=s.a.create({baseURL:i.c,timeout:1e4});c.interceptors.request.use((function(e){return e}),(function(e){return e})),c.interceptors.response.use((function(e){return 777===e.data.code&&(window.location.href="/login"),e.data}),(function(e){if(console.log(e),e&&e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:e.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return e})),c(e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}s.a.defaults.withCredentials=!0},192:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"j",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"h",(function(){return o})),n.d(t,"f",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return i})),n.d(t,"a",(function(){return h}));var c="https://api2.aictb.com/teacher",s=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,a="wx5f0976e726b587f8",r=encodeURIComponent("https://api2.aictb.com/teacher/WXLogin"),o=[{text:"\u9996\u9875",url:"/index"},{text:"\u73ed\u7ea7\u4fe1\u606f",url:"/class"},{text:"\u5b66\u60c5\u62a5\u544a",url:"/classreport"},{text:"\u540d\u6821\u8d44\u6e90",url:"/famous"},{text:"\u6821\u672c\u8bd5\u5377",url:"/schoolbased"},{text:"\u77e5\u8bc6\u5e93",url:"/knowledge"},{text:"\u6211\u7684\u8bd5\u5377",url:"/mypaper/list"}],l="http://aictb.com",u="https://api2.aictb.com",d=[{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/setup_icon_small.png",text:"\u4e2a\u4eba\u8d44\u6599"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon_small.png",text:"\u6211\u7684\u79ef\u5206"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon_small.png",text:"\u4e0b\u8f7d\u8bb0\u5f55"},{img:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/Group_icon_small.png",text:"\u4e0a\u4f20\u7684\u8bd5\u5377"}],h=["/user/datum","/user/integral","/user/down","/user/upload_list"]},212:function(e,t,n){"use strict";var c=n(2),s=n(21),i=n(22),a=n(23),r=n(24),o=n(0),l=n(84),u=n(77),d=n(12),h=n(82),b=n(195),f=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.apply(this,arguments)).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0,offsetHeight:0,offsetWidth:0},e.onResize=function(t){var n=e.props.onResize,s=t[0].target,i=s.getBoundingClientRect(),a=i.width,r=i.height,o=s.offsetWidth,l=s.offsetHeight,u=Math.floor(a),d=Math.floor(r);if(e.state.width!==u||e.state.height!==d||e.state.offsetWidth!==o||e.state.offsetHeight!==l){var h={width:u,height:d,offsetWidth:o,offsetHeight:l};e.setState(h),n&&Promise.resolve().then((function(){n(Object(c.a)(Object(c.a)({},h),{},{offsetWidth:o,offsetHeight:l}))}))}},e.setChildNode=function(t){e.childNode=t},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=Object(l.a)(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new b.a(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=Object(u.a)(e);if(t.length>1)Object(d.a)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return Object(d.a)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(o.isValidElement(n)&&Object(h.c)(n)){var c=n.ref;t[0]=o.cloneElement(n,{ref:Object(h.a)(c,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!o.isValidElement(e)||"key"in e&&null!==e.key?e:o.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}]),n}(o.Component);f.displayName="ResizeObserver",t.a=f},216:function(e,t,n){"use strict";var c=n(0),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},i=n(6),a=function(e,t){return c.createElement(i.a,Object.assign({},e,{ref:t,icon:s}))};a.displayName="SearchOutlined";t.a=c.forwardRef(a)},238:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var c=n(157);function s(e){return Object(c.a)({url:"/getLoginCode",method:"GET",params:e})}function i(e){return Object(c.a)({url:"/loginOut",method:"GET",params:e})}function a(e){return Object(c.a)({url:"/loginByPwd",method:"GET",params:e})}function r(e){return Object(c.a)({url:"/editPwd",method:"GET",params:e})}},277:function(e,t,n){},351:function(e,t,n){"use strict";n.r(t);n(151);var c=n(150),s=(n(191),n(193)),i=n(155),a=n.n(i),r=(n(160),n(73)),o=n(156),l=n(152),u=n(8),d=n(0),h=(n(277),n(192)),b=n(154),f=n(238);function m(e){var t=Object(d.useState)(0),n=Object(l.a)(t,2),i=n[0],m=n[1],j=Object(d.useState)(!1),p=Object(l.a)(j,2),g=p[0],O=p[1],v=Object(d.useState)(!0),x=Object(l.a)(v,2),w=x[0],N=x[1],y=Object(d.useState)("60"),_=Object(l.a)(y,2),k=_[0],C=_[1],S=Object(d.useState)(""),z=Object(l.a)(S,2),M=z[0],R=z[1],E=Object(d.useState)(""),W=Object(l.a)(E,2),T=W[0],I=W[1],L=Object(d.useState)(""),U=Object(l.a)(L,2),D=U[0],G=U[1],H=null;Object(d.useEffect)((function(){return window.WxLogin({self_redirect:!0,id:"login_container",appid:h.b,scope:"snsapi_login",redirect_uri:h.d,state:Math.ceil(1e3*Math.random()),style:"black",href:""}),function(){clearInterval(H)}}),[]);var P=function(e){var t=e.target.value;h.j.test(t)&&R(Object(b.a)(t))},F=function(e){var t=e.target.value;G(Object(b.a)(t)),N(!1)},Q=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.j.test(M)){e.next=9;break}return e.next=3,Object(f.c)({mobile:M});case 3:t=e.sent,n=t.code,c=t.msg,200!==n?r.b.error(c):(O(!0),s=k,H=setInterval((function(){0==s?(C("60"),O(!1),clearInterval(H)):(s--,C(s))}),1e3)),e.next=10;break;case 9:r.b.error("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7\u7801!");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var t=Object(o.a)(a.a.mark((function t(){var n,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.b)({mobile:M,pwd:D});case 2:n=t.sent,c=n.code,n.data,s=n.msg,200==c?e.history.push("/index"):r.b.error(s);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),$=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)({mobile:M,pwd:D,code:T});case 2:t=e.sent,n=t.code,c=t.msg,200==n?(r.b.success(c),setTimeout((function(){m(1)}),300)):r.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{id:"Login",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("div",{className:"left_box",children:Object(u.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/login_img.png",alt:"login_img"})}),Object(u.jsxs)("div",{className:"right_box",children:[Object(u.jsx)("div",{className:"right_imgs",onClick:function(){1===i?(m(0),setTimeout((function(){window.WxLogin({self_redirect:!0,id:"login_container",appid:h.b,scope:"snsapi_login",redirect_uri:h.d,state:Math.ceil(1e3*Math.random()),style:"black",href:""})}),300)):setTimeout((function(){m(1)}),300)},children:0===i?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"WeChat",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"}),Object(u.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/QRcode.png",alt:"QRcode"})]}):1===i?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/SMSlogin.png",className:"phone_right_icon"}),Object(u.jsx)("img",{className:"QRcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/computer.png",alt:"QRcode"})]}):""}),1===i?Object(u.jsxs)("div",{className:"form_box",children:[Object(u.jsx)("div",{className:"title",children:"\u8001\u5e08\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"}),Object(u.jsxs)("div",{className:"phone",children:[Object(u.jsx)("span",{children:"\u624b\u673a\u53f7"}),Object(u.jsx)(s.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onInput:P})]}),Object(u.jsxs)("div",{className:"Verification",children:[Object(u.jsx)("span",{children:"\u5bc6\u7801"}),Object(u.jsx)(s.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",onInput:F,type:"password"})]}),Object(u.jsx)("div",{className:"changePassword",onClick:function(){console.log("changePassword"),setTimeout((function(){m(2)}),300)},children:"\u5fd8\u8bb0\u5bc6\u7801?"}),Object(u.jsx)("div",{className:"btns",children:Object(u.jsx)(c.a,{variant:"contained",disabled:w,className:"login",onClick:V,children:"\u767b\u5f55"})}),Object(u.jsx)("div",{className:"tip",children:"\u5ba2\u670d\u7535\u8bdd:0514-82885886"})]}):0===i?Object(u.jsxs)("div",{className:"wechatForm",children:[Object(u.jsxs)("div",{className:"title_box",children:[Object(u.jsx)("img",{className:"wechat_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/wechat_icon.png",alt:"wechat_icon"}),Object(u.jsx)("span",{className:"text",children:"\u5fae\u4fe1\u626b\u7801\u767b\u5f55"})]}),Object(u.jsxs)("div",{className:"content_box",children:[Object(u.jsx)("div",{id:"login_container"}),Object(u.jsx)("img",{className:"MobileWeChattip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/MobileWeChattip.png",alt:"MobileWeChattip"})]}),Object(u.jsx)("div",{className:"footer_box",children:"\u6253\u5f00\u5fae\u4fe1,\u626b\u4e00\u626b\u767b\u5f55"})]}):Object(u.jsxs)("div",{className:"form_box",children:[Object(u.jsx)("div",{className:"title",children:"\u4fee\u6539\u5bc6\u7801"}),Object(u.jsxs)("div",{className:"phone",children:[Object(u.jsx)("span",{children:"\u624b\u673a\u53f7"}),Object(u.jsx)(s.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",onInput:P})]}),Object(u.jsxs)("div",{className:"Verification",children:[Object(u.jsx)("span",{children:"\u9a8c\u8bc1\u7801"}),Object(u.jsx)(s.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onInput:function(e){var t=e.target.value;I(Object(b.a)(t)),N(!1)},suffix:Object(u.jsx)("button",{disabled:g,onClick:Q,children:g?"\u518d\u6b21\u83b7\u53d6(".concat(k,")"):"\u83b7\u53d6\u9a8c\u8bc1\u7801"})})]}),Object(u.jsxs)("div",{className:"Verification",children:[Object(u.jsx)("span",{children:"\u65b0\u5bc6\u7801"}),Object(u.jsx)(s.a,{className:"userinput",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",onInput:F,type:"password"})]}),Object(u.jsx)("div",{className:"btns",children:Object(u.jsx)(c.a,{variant:"contained",disabled:w,className:"login",onClick:$,children:"\u4fee\u6539"})}),Object(u.jsx)("div",{className:"tip",children:"\u5ba2\u670d\u7535\u8bdd:0514-82885886"})]})]})]})})}t.default=Object(d.memo)(m)}}]);