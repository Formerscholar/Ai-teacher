(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[5],{130:function(e,t,n){},131:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var a=n(4),o=n(0),c=n(2),i=n(54),r=n.n(i),s=n(55),l=n(58),d=n(71),u=(n(130),n(142)),b=n(40),m=n(57),f=n(1),p=(n(8),n(41)),h=n(42),j=n(184),g=n(96),v=n(47),O=n(97),x=n(11),y="undefined"===typeof window?o.useEffect:o.useLayoutEffect,k=o.forwardRef((function(e,t){var n=e.alignItems,a=void 0===n?"center":n,c=e.autoFocus,i=void 0!==c&&c,r=e.button,s=void 0!==r&&r,l=e.children,d=e.classes,u=e.className,m=e.component,h=e.ContainerComponent,k=void 0===h?"li":h,N=e.ContainerProps,w=(N=void 0===N?{}:N).className,C=Object(b.a)(N,["className"]),S=e.dense,I=void 0!==S&&S,E=e.disabled,T=void 0!==E&&E,R=e.disableGutters,M=void 0!==R&&R,_=e.divider,D=void 0!==_&&_,A=e.focusVisibleClassName,G=e.selected,P=void 0!==G&&G,z=Object(b.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),F=o.useContext(O.a),L={dense:I||F.dense||!1,alignItems:a},$=o.useRef(null);y((function(){i&&$.current&&$.current.focus()}),[i]);var B=o.Children.toArray(l),V=B.length&&Object(g.a)(B[B.length-1],["ListItemSecondaryAction"]),q=o.useCallback((function(e){$.current=x.findDOMNode(e)}),[]),H=Object(v.a)(q,t),J=Object(f.a)({className:Object(p.a)(d.root,u,L.dense&&d.dense,!M&&d.gutters,D&&d.divider,T&&d.disabled,s&&d.button,"center"!==a&&d.alignItemsFlexStart,V&&d.secondaryAction,P&&d.selected),disabled:T},z),U=m||"li";return s&&(J.component=m||"div",J.focusVisibleClassName=Object(p.a)(d.focusVisible,A),U=j.a),V?(U=J.component||m?U:"div","li"===k&&("li"===U?U="div":"li"===J.component&&(J.component="div")),o.createElement(O.a.Provider,{value:L},o.createElement(k,Object(f.a)({className:Object(p.a)(d.container,w),ref:H},C),o.createElement(U,J,B),B.pop()))):o.createElement(O.a.Provider,{value:L},o.createElement(U,Object(f.a)({ref:H},J),B))})),N=Object(h.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(k),w=o.forwardRef((function(e,t){var n,a=e.classes,c=e.className,i=e.component,r=void 0===i?"li":i,s=e.disableGutters,l=void 0!==s&&s,d=e.ListItemClasses,u=e.role,m=void 0===u?"menuitem":u,h=e.selected,j=e.tabIndex,g=Object(b.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==j?j:-1),o.createElement(N,Object(f.a)({button:!0,role:m,tabIndex:n,component:r,selected:h,disableGutters:l,classes:Object(f.a)({dense:a.dense},d),className:Object(p.a)(a.root,c,h&&a.selected,!l&&a.gutters),ref:t},g))})),C=Object(h.a)((function(e){return{root:Object(f.a)({},e.typography.body1,Object(m.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(f.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(w),S=n(193),I=n(188),E=n(185),T=n(66),R=n(60),M=n(56),_=n(48);var D=n(21),A=n(14),G=["data","integral","logout"],P=["Chapter","Knowledge"];function z(e){return Object(a.jsx)(E.a,Object(d.a)({elevation:6,variant:"filled"},e))}function F(e){e.homeInfo;var t,n,c=e.props,i=e.setData,d=Object(o.useState)(!1),b=Object(l.a)(d,2),m=b[0],f=b[1],p=Object(o.useState)("\u8bf7\u6c42\u9519\u8bef!"),h=Object(l.a)(p,2),j=h[0],g=h[1],v=Object(o.useState)(null),O=Object(l.a)(v,2),x=O[0],y=O[1],k=Object(o.useState)(null),N=Object(l.a)(k,2),w=N[0],E=N[1],D=Object(o.useState)(0),A=Object(l.a)(D,2),F=A[0],L=A[1],$=Object(o.useState)({}),B=Object(l.a)($,2),V=B[0],q=B[1];Object(o.useEffect)((function(){return H(),function(){}}),[]);var H=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)({url:"/home",method:"GET"});case 2:t=e.sent,n=t.code,a=t.data,200==n&&(q(a),i(a));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){var t=e.target.dataset.info,n=new Map([[G[0],function(){console.log("datafunc")}],[G[1],function(){console.log("integralfunc")}],[G[2],function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("logoutfunc"),t=Object(M.c)("id"),n=Object(M.c)("token"),e.next=5,Object(T.c)({id:t,token:n});case 5:a=e.sent,o=a.code,i=a.msg,200==o?(Object(M.b)("id"),Object(M.b)("token"),c.history.push("/login")):(g(i),f(!0),setTimeout((function(){f(!1)}),2888));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()]]);n.get(t)&&n.get(t)(),y(null)},U=function(e){var t=e.target.dataset.info,n=new Map([[P[0],function(){c.history.push("/main/chapter")}],[P[1],function(){c.history.push("/main/knowledge")}]]);n.get(t)&&n.get(t)(),E(null)};return Object(a.jsxs)("div",{id:"AI_header",children:[Object(a.jsxs)("div",{className:"title_box",children:[Object(a.jsx)("div",{className:"left_icon",children:Object(a.jsx)("img",{className:"logo",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/logo.png",alt:"logo"})}),Object(a.jsxs)("div",{className:"center_box",children:[R.d.map((function(e,t){return Object(a.jsx)("div",{className:F==t?"cenItem index":"cenItem",onClick:function(e){return n=e,L(a=t),void(4!==a?c.history.push("/".concat(R.d[a].url)):(console.log("headMenuClick "),E(n.currentTarget)));var n,a},children:e.text},t)})),Object(a.jsxs)(u.a,{id:"simple-menu",anchorEl:w,keepMounted:!0,open:Boolean(w),style:{top:"3.571429rem"},children:[Object(a.jsx)(C,{"data-info":P[0],onClick:U,children:"\u7ae0\u8282\u540c\u6b65\u9009\u9898"}),Object(a.jsx)(C,{"data-info":P[1],onClick:U,children:"\u77e5\u8bc6\u70b9\u7ec4\u5377"})]})]}),Object(a.jsxs)("div",{className:"right_box",children:[Object(a.jsx)(S.a,{className:"Avatar",alt:"Remy Sharp",src:null===(t=V.teacher)||void 0===t?void 0:t.avatar_file}),Object(a.jsxs)("span",{onClick:function(e){y(e.currentTarget)},children:[null===(n=V.teacher)||void 0===n?void 0:n.true_name," ",Object(a.jsx)("div",{className:"right_icon"})]}),Object(a.jsxs)(u.a,{id:"simple-menu",anchorEl:x,keepMounted:!0,open:Boolean(x),style:{top:"3.571429rem",left:"-1.714286rem"},children:[Object(a.jsx)(C,{"data-info":G[0],onClick:J,children:"\u4e2a\u4eba\u8d44\u6599"}),Object(a.jsx)(C,{"data-info":G[1],onClick:J,children:"\u79ef\u5206\u8bb0\u5f55"}),Object(a.jsx)(C,{"data-info":G[2],onClick:J,style:{color:"#E9140A"},children:"\u9000\u51fa"})]})]})]}),Object(a.jsx)("img",{className:"banner",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/banner.png",alt:"banner"}),Object(a.jsx)(I.a,{open:m,autoHideDuration:2888,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(a.jsx)(z,{severity:"error",children:j})})]})}var L=Object(D.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var n={type:A.b,value:t};e(n)}}}))(Object(o.memo)(F));n(131);function $(){return Object(a.jsxs)("div",{id:"AI_footer",children:[Object(a.jsx)("img",{className:"footimg",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footimg.png",alt:"footimg"}),Object(a.jsxs)("footer",{children:[Object(a.jsxs)("div",{className:"left_info",children:[Object(a.jsx)("div",{className:"infoitems ",children:"\u8054\u7cfb\u6211\u4eec"}),Object(a.jsx)("div",{className:"infoitems ",children:"\u90ae\u7bb1\u5730\u5740"}),Object(a.jsx)("div",{className:"infoitems ",children:"\u54a8\u8be2\u70ed\u7ebf"}),Object(a.jsx)("div",{className:"infoitems botfont",children:"\u5173\u4e8e\u6211\u4eec"}),Object(a.jsx)("div",{className:"infoitems botfont",children:"kefu@aictb.com"}),Object(a.jsx)("div",{className:"infoitems botfont",children:"0514-82885886"})]}),Object(a.jsxs)("div",{className:"cen_box",children:[Object(a.jsx)("img",{className:"footqrcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footqrcode.png",alt:"footqrcode"}),Object(a.jsx)("span",{className:"foottext",children:"\u5173\u6ce8\u5fae\u4fe1\u516c\u4f17\u53f7"})]}),Object(a.jsx)("img",{className:"foottip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/foottip.png",alt:"foottip"})]})]})}var B=Object(o.memo)($),V=n(17),q=n.n(V),H=n(16),J=q()({loader:function(){return n.e(7).then(n.bind(null,190))},loading:H.a}),U=q()({loader:function(){return n.e(8).then(n.bind(null,178))},loading:H.a}),K=q()({loader:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,191))},loading:H.a}),W=q()({loader:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,192))},loading:H.a}),X=q()({loader:function(){return n.e(13).then(n.bind(null,179))},loading:H.a}),Y=q()({loader:function(){return n.e(15).then(n.bind(null,180))},loading:H.a}),Q=q()({loader:function(){return n.e(14).then(n.bind(null,181))},loading:H.a}),Z=q()({loader:function(){return n.e(9).then(n.bind(null,187))},loading:H.a}),ee=q()({loader:function(){return n.e(12).then(n.bind(null,182))},loading:H.a}),te=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{props:e}),Object(a.jsx)(c.b,{path:"/main/index",component:J}),Object(a.jsx)(c.b,{path:"/main/class",component:U}),Object(a.jsx)(c.b,{path:"/main/famous",component:K}),Object(a.jsx)(c.b,{path:"/main/schoolbased",component:W}),Object(a.jsx)(c.b,{path:"/main/knowledge",component:X}),Object(a.jsx)(c.b,{path:"/main/uploadpaper",component:Y}),Object(a.jsx)(c.b,{path:"/main/mypaper",component:Q}),Object(a.jsx)(c.b,{path:"/main/classdetail",component:Z}),Object(a.jsx)(c.b,{path:"/main/chapter",component:ee}),Object(a.jsx)(c.a,{to:"/main/index"}),Object(a.jsx)(B,{})]})};t.default=Object(o.memo)(te)},193:function(e,t,n){"use strict";var a=n(1),o=n(40),c=n(0),i=(n(8),n(41)),r=n(42),s=n(72),l=Object(s.a)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var d=c.forwardRef((function(e,t){var n=e.alt,r=e.children,s=e.classes,d=e.className,u=e.component,b=void 0===u?"div":u,m=e.imgProps,f=e.sizes,p=e.src,h=e.srcSet,j=e.variant,g=void 0===j?"circle":j,v=Object(o.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),O=null,x=function(e){var t=e.src,n=e.srcSet,a=c.useState(!1),o=a[0],i=a[1];return c.useEffect((function(){if(t||n){i(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&i("loaded")},a.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,n]),o}({src:p,srcSet:h}),y=p||h,k=y&&"error"!==x;return O=k?c.createElement("img",Object(a.a)({alt:n,src:p,srcSet:h,sizes:f,className:s.img},m)):null!=r?r:y&&n?n[0]:c.createElement(l,{className:s.fallback}),c.createElement(b,Object(a.a)({className:Object(i.a)(s.root,s.system,s[g],d,!k&&s.colorDefault),ref:t},v),O)}));t.a=Object(r.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d)},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(78),o=n.n(a),c=n(60);function i(e){return new Promise((function(t,n){var a=o.a.create({baseURL:c.b,timeout:1e4});a.interceptors.request.use((function(e){return e}),(function(e){return e})),a.interceptors.response.use((function(e){return 777===e.data.code&&(window.location.href="/login"),e.data}),(function(e){if(console.log(e),e&&e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:e.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return e})),a(e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}o.a.defaults.withCredentials=!0},56:function(e,t,n){"use strict";function a(e){var t=new Date(e),n=t.getFullYear().toString(),a=(t.getMonth()+1).toString(),o=t.getDate().toString();return a=a.length<2?"0"+a:a,o=o.length<2?"0"+o:o,"".concat(n,"-").concat(a,"-").concat(o)}n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));var o=function(e,t){var n=new Date;n.setTime(n.getTime()+6048e5);var a="expires="+n.toGMTString();document.cookie=e+"="+t+"; "+a};function c(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function i(e){var t=new Date;t.setTime(t.getTime()-1);var n=c(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}function r(e){return e.replace(/(^\s*)|(\s*$)/g,"")}},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return r}));var a="http://test.aictb.com/teacher",o=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,c="wx5f0976e726b587f8",i=encodeURIComponent("http://test.aictb.com/teacher/WXLogin"),r=[{text:"\u9996\u9875",url:"main/index"},{text:"\u73ed\u7ea7\u4fe1\u606f",url:"main/class"},{text:"\u540d\u6821\u8d44\u6e90",url:"main/famous"},{text:"\u6821\u672c\u8bd5\u5377",url:"main/schoolbased"},{text:"\u77e5\u8bc6\u5e93",url:"main/knowledge"},{text:"\u4e0a\u4f20\u8bd5\u5377",url:"main/uploadpaper"},{text:"\u6211\u7684\u8bd5\u5377",url:"main/mypaper"}]},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var a=n(48);function o(e){return Object(a.a)({url:"/getLoginCode",method:"GET",params:e})}function c(e){return Object(a.a)({url:"/login",method:"GET",params:e})}function i(e){return Object(a.a)({url:"/loginOut",method:"GET",params:e})}}}]);