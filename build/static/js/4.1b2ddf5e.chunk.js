(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[4],{117:function(e,t,n){},118:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var a=n(5),o=n(0),c=n(1),i=n(62),r=n.n(i),s=n(63),l=n(85),d=n(86),u=(n(117),n(2)),m=n(33),b=(n(8),n(35)),f=n(36),p=n(87),j=Object(p.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var h=o.forwardRef((function(e,t){var n=e.alt,a=e.children,c=e.classes,i=e.className,r=e.component,s=void 0===r?"div":r,l=e.imgProps,d=e.sizes,f=e.src,p=e.srcSet,h=e.variant,g=void 0===h?"circle":h,v=Object(m.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),O=null,x=function(e){var t=e.src,n=e.srcSet,a=o.useState(!1),c=a[0],i=a[1];return o.useEffect((function(){if(t||n){i(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&i("loaded")},a.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,n]),c}({src:f,srcSet:p}),y=f||p,N=y&&"error"!==x;return O=N?o.createElement("img",Object(u.a)({alt:n,src:f,srcSet:p,sizes:d,className:c.img},l)):null!=a?a:y&&n?n[0]:o.createElement(j,{className:c.fallback}),o.createElement(s,Object(u.a)({className:Object(b.a)(c.root,c.system,c[g],i,!N&&c.colorDefault),ref:t},v),O)})),g=Object(f.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(h),v=n(122),O=n(41),x=n(162),y=n(82),N=n(38),k=n(83),w=n(15),C="undefined"===typeof window?o.useEffect:o.useLayoutEffect,S=o.forwardRef((function(e,t){var n=e.alignItems,a=void 0===n?"center":n,c=e.autoFocus,i=void 0!==c&&c,r=e.button,s=void 0!==r&&r,l=e.children,d=e.classes,f=e.className,p=e.component,j=e.ContainerComponent,h=void 0===j?"li":j,g=e.ContainerProps,v=(g=void 0===g?{}:g).className,O=Object(m.a)(g,["className"]),S=e.dense,I=void 0!==S&&S,E=e.disabled,T=void 0!==E&&E,R=e.disableGutters,_=void 0!==R&&R,A=e.divider,G=void 0!==A&&A,M=e.focusVisibleClassName,z=e.selected,L=void 0!==z&&z,D=Object(m.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),F=o.useContext(k.a),P={dense:I||F.dense||!1,alignItems:a},V=o.useRef(null);C((function(){i&&V.current&&V.current.focus()}),[i]);var $=o.Children.toArray(l),q=$.length&&Object(y.a)($[$.length-1],["ListItemSecondaryAction"]),B=o.useCallback((function(e){V.current=w.findDOMNode(e)}),[]),H=Object(N.a)(B,t),J=Object(u.a)({className:Object(b.a)(d.root,f,P.dense&&d.dense,!_&&d.gutters,G&&d.divider,T&&d.disabled,s&&d.button,"center"!==a&&d.alignItemsFlexStart,q&&d.secondaryAction,L&&d.selected),disabled:T},D),U=p||"li";return s&&(J.component=p||"div",J.focusVisibleClassName=Object(b.a)(d.focusVisible,M),U=x.a),q?(U=J.component||p?U:"div","li"===h&&("li"===U?U="div":"li"===J.component&&(J.component="div")),o.createElement(k.a.Provider,{value:P},o.createElement(h,Object(u.a)({className:Object(b.a)(d.container,v),ref:H},O),o.createElement(U,J,$),$.pop()))):o.createElement(k.a.Provider,{value:P},o.createElement(U,Object(u.a)({ref:H},J),$))})),I=Object(f.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(S),E=o.forwardRef((function(e,t){var n,a=e.classes,c=e.className,i=e.component,r=void 0===i?"li":i,s=e.disableGutters,l=void 0!==s&&s,d=e.ListItemClasses,f=e.role,p=void 0===f?"menuitem":f,j=e.selected,h=e.tabIndex,g=Object(m.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==h?h:-1),o.createElement(I,Object(u.a)({button:!0,role:p,tabIndex:n,component:r,selected:j,disableGutters:l,classes:Object(u.a)({dense:a.dense},d),className:Object(b.a)(a.root,c,j&&a.selected,!l&&a.gutters),ref:t},g))})),T=Object(f.a)((function(e){return{root:Object(u.a)({},e.typography.body1,Object(O.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(u.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(E),R=n(164),_=n(163),A=n(53),G=n(43),M=n(46);var z=["data","integral","logout"],L=[{text:"\u9996\u9875",url:"main/index"},{text:"\u73ed\u7ea7\u4fe1\u606f",url:"main/class"},{text:"\u540d\u6821\u8d44\u6e90",url:"main/famous"},{text:"\u6821\u672c\u8bd5\u5377",url:"main/schoolbased"},{text:"\u77e5\u8bc6\u5e93",url:"main/knowledge"},{text:"\u4e0a\u4f20\u8bd5\u5377",url:"main/uploadpaper"},{text:"\u6211\u7684\u8bd5\u5377",url:"main/mypaper"}];function D(e){return Object(a.jsx)(_.a,Object(d.a)({elevation:6,variant:"filled"},e))}function F(e){var t,n,c=e.props,i=Object(o.useState)(!1),d=Object(l.a)(i,2),u=d[0],m=d[1],b=Object(o.useState)("\u8bf7\u6c42\u9519\u8bef!"),f=Object(l.a)(b,2),p=f[0],j=f[1],h=Object(o.useState)(null),O=Object(l.a)(h,2),x=O[0],y=O[1],N=Object(o.useState)(0),k=Object(l.a)(N,2),w=k[0],C=k[1],S=Object(o.useState)({}),I=Object(l.a)(S,2),E=I[0],_=I[1];Object(o.useEffect)((function(){return F(),function(){}}),[]);var F=function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)({url:"/home",method:"GET"});case 2:t=e.sent,n=t.code,a=t.data,200==n&&_(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){var t=e.target.dataset.id;C(t),c.history.push("/".concat(L[t].url))},V=function(e){var t=e.target.dataset.info,n=new Map([[z[0],function(){console.log("datafunc")}],[z[1],function(){console.log("integralfunc")}],[z[2],function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("logoutfunc"),t=Object(G.e)("id"),n=Object(G.e)("token"),e.next=5,Object(A.c)({id:t,token:n});case 5:a=e.sent,o=a.code,i=a.msg,200==o?(Object(G.d)("id"),Object(G.d)("token"),c.history.push("/login")):(j(i),m(!0),setTimeout((function(){m(!1)}),2888));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()]]);n.get(t)&&n.get(t)(),y(null)};return Object(a.jsxs)("div",{id:"AI_header",children:[Object(a.jsxs)("div",{className:"title_box",children:[Object(a.jsx)("div",{className:"left_icon",children:Object(a.jsx)("img",{className:"logo",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/logo.png",alt:"logo"})}),Object(a.jsx)("div",{className:"center_box",children:L.map((function(e,t){return Object(a.jsx)("div",{"data-id":t,className:w==t?"cenItem index":"cenItem",onClick:P,children:e.text},t)}))}),Object(a.jsxs)("div",{className:"right_box",children:[Object(a.jsx)(g,{className:"Avatar",alt:"Remy Sharp",src:null===(t=E.teacher)||void 0===t?void 0:t.avatar_file}),Object(a.jsx)("span",{onClick:function(e){y(e.currentTarget)},children:null===(n=E.teacher)||void 0===n?void 0:n.true_name}),Object(a.jsx)("div",{className:"right_icon"}),Object(a.jsxs)(v.a,{id:"simple-menu",anchorEl:x,keepMounted:!0,open:Boolean(x),onClose:V,style:{top:"3.571429rem",left:"-1.714286rem"},children:[Object(a.jsx)(T,{"data-info":z[0],onClick:V,children:"\u4e2a\u4eba\u8d44\u6599"}),Object(a.jsx)(T,{"data-info":z[1],onClick:V,children:"\u79ef\u5206\u8bb0\u5f55"}),Object(a.jsx)(T,{"data-info":z[2],onClick:V,style:{color:"#E9140A"},children:"\u9000\u51fa"})]})]})]}),Object(a.jsx)("img",{className:"banner",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/banner.png",alt:"banner"}),Object(a.jsx)(R.a,{open:u,autoHideDuration:2888,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(a.jsx)(D,{severity:"error",children:p})})]})}var P=Object(o.memo)(F);n(118);function V(){return Object(a.jsxs)("div",{id:"AI_footer",children:[Object(a.jsx)("img",{className:"footimg",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footimg.png",alt:"footimg"}),Object(a.jsxs)("footer",{children:[Object(a.jsxs)("div",{className:"left_info",children:[Object(a.jsx)("div",{className:"infoitems ",children:"\u8054\u7cfb\u6211\u4eec"}),Object(a.jsx)("div",{className:"infoitems ",children:"\u90ae\u7bb1\u5730\u5740"}),Object(a.jsx)("div",{className:"infoitems ",children:"\u54a8\u8be2\u70ed\u7ebf"}),Object(a.jsx)("div",{className:"infoitems botfont",children:"\u5173\u4e8e\u6211\u4eec"}),Object(a.jsx)("div",{className:"infoitems botfont",children:"kefu@aictb.com"}),Object(a.jsx)("div",{className:"infoitems botfont",children:"0514-82885886"})]}),Object(a.jsxs)("div",{className:"cen_box",children:[Object(a.jsx)("img",{className:"footqrcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footqrcode.png",alt:"footqrcode"}),Object(a.jsx)("span",{className:"foottext",children:"\u5173\u6ce8\u5fae\u4fe1\u516c\u4f17\u53f7"})]}),Object(a.jsx)("img",{className:"foottip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/foottip.png",alt:"foottip"})]})]})}var $=Object(o.memo)(V),q=n(12),B=n.n(q),H=n(11),J=B()({loader:function(){return n.e(6).then(n.bind(null,165))},loading:H.a}),U=B()({loader:function(){return n.e(7).then(n.bind(null,159))},loading:H.a}),W=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P,{props:e}),Object(a.jsx)(c.b,{path:"/main/index",component:J}),Object(a.jsx)(c.b,{path:"/main/class",component:U}),Object(a.jsx)(c.b,{path:"/main/famous",component:J}),Object(a.jsx)(c.b,{path:"/main/schoolbased",component:J}),Object(a.jsx)(c.b,{path:"/main/knowledge",component:J}),Object(a.jsx)(c.b,{path:"/main/uploadpaper",component:J}),Object(a.jsx)(c.b,{path:"/main/mypaper",component:J}),Object(a.jsx)(c.a,{to:"/main/index"}),Object(a.jsx)($,{})]})};t.default=Object(o.memo)(W)},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return l}));var a="http://test.aictb.com/teacher",o=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,c="wx5f0976e726b587f8",i=encodeURIComponent("http://test.aictb.com/teacher/WXLogin"),r=function(e,t){var n=new Date;n.setTime(n.getTime()+6048e5);var a="expires="+n.toGMTString();document.cookie=e+"="+t+"; "+a};function s(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function l(e){var t=new Date;t.setTime(t.getTime()-1);var n=s(e);null!=n&&(document.cookie=e+"="+n+";expires="+t.toGMTString())}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(64),o=n.n(a),c=n(43);function i(e){return new Promise((function(t,n){var a=o.a.create({baseURL:c.b,timeout:1e4});a.interceptors.request.use((function(e){return e}),(function(e){return e})),a.interceptors.response.use((function(e){return 777===e.data.code&&(Object(c.d)("id"),Object(c.d)("token"),window.location.href="/login"),e.data}),(function(e){if(console.log(e),e&&e.response)switch(e.response.status){case 400:e.message="\u8bf7\u6c42\u9519\u8bef";break;case 401:e.message="\u672a\u6388\u6743\u7684\u8bbf\u95ee";break;default:e.message="\u5176\u4ed6\u9519\u8bef\u4fe1\u606f"}return e})),a(e).then((function(e){t(e)})).catch((function(e){n(e)}))}))}o.a.defaults.withCredentials=!0},53:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var a=n(46);function o(e){return Object(a.a)({url:"/getLoginCode",method:"GET",params:e})}function c(e){return Object(a.a)({url:"/login",method:"GET",params:e})}function i(e){return Object(a.a)({url:"/loginOut",method:"GET",params:e})}}}]);