(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[6],{112:function(e,t,n){},113:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var a=n(5),o=n(0),c=n(1),s=n(79),i=(n(112),n(2)),r=n(33),l=(n(8),n(35)),d=n(36),m=n(80),b=Object(m.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var u=o.forwardRef((function(e,t){var n=e.alt,a=e.children,c=e.classes,s=e.className,d=e.component,m=void 0===d?"div":d,u=e.imgProps,j=e.sizes,h=e.src,p=e.srcSet,f=e.variant,g=void 0===f?"circle":f,v=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),x=null,O=function(e){var t=e.src,n=e.srcSet,a=o.useState(!1),c=a[0],s=a[1];return o.useEffect((function(){if(t||n){s(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&s("loaded")},a.onerror=function(){e&&s("error")},function(){e=!1}}}),[t,n]),c}({src:h,srcSet:p}),N=h||p,y=N&&"error"!==O;return x=y?o.createElement("img",Object(i.a)({alt:n,src:h,srcSet:p,sizes:j,className:c.img},u)):null!=a?a:N&&n?n[0]:o.createElement(b,{className:c.fallback}),o.createElement(m,Object(i.a)({className:Object(l.a)(c.root,c.system,c[g],s,!y&&c.colorDefault),ref:t},v),x)})),j=Object(d.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(u),h=n(122),p=n(41),f=n(167),g=n(76),v=n(38),x=n(77),O=n(15),N="undefined"===typeof window?o.useEffect:o.useLayoutEffect,y=o.forwardRef((function(e,t){var n=e.alignItems,a=void 0===n?"center":n,c=e.autoFocus,s=void 0!==c&&c,d=e.button,m=void 0!==d&&d,b=e.children,u=e.classes,j=e.className,h=e.component,p=e.ContainerComponent,y=void 0===p?"li":p,C=e.ContainerProps,I=(C=void 0===C?{}:C).className,k=Object(r.a)(C,["className"]),w=e.dense,S=void 0!==w&&w,E=e.disabled,R=void 0!==E&&E,_=e.disableGutters,A=void 0!==_&&_,z=e.divider,F=void 0!==z&&z,M=e.focusVisibleClassName,P=e.selected,L=void 0!==P&&P,V=Object(r.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),B=o.useContext(x.a),D={dense:S||B.dense||!1,alignItems:a},G=o.useRef(null);N((function(){s&&G.current&&G.current.focus()}),[s]);var T=o.Children.toArray(b),q=T.length&&Object(g.a)(T[T.length-1],["ListItemSecondaryAction"]),H=o.useCallback((function(e){G.current=O.findDOMNode(e)}),[]),$=Object(v.a)(H,t),J=Object(i.a)({className:Object(l.a)(u.root,j,D.dense&&u.dense,!A&&u.gutters,F&&u.divider,R&&u.disabled,m&&u.button,"center"!==a&&u.alignItemsFlexStart,q&&u.secondaryAction,L&&u.selected),disabled:R},V),K=h||"li";return m&&(J.component=h||"div",J.focusVisibleClassName=Object(l.a)(u.focusVisible,M),K=f.a),q?(K=J.component||h?K:"div","li"===y&&("li"===K?K="div":"li"===J.component&&(J.component="div")),o.createElement(x.a.Provider,{value:D},o.createElement(y,Object(i.a)({className:Object(l.a)(u.container,I),ref:$},k),o.createElement(K,J,T),T.pop()))):o.createElement(x.a.Provider,{value:D},o.createElement(K,Object(i.a)({ref:$},J),T))})),C=Object(d.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(y),I=o.forwardRef((function(e,t){var n,a=e.classes,c=e.className,s=e.component,d=void 0===s?"li":s,m=e.disableGutters,b=void 0!==m&&m,u=e.ListItemClasses,j=e.role,h=void 0===j?"menuitem":j,p=e.selected,f=e.tabIndex,g=Object(r.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==f?f:-1),o.createElement(C,Object(i.a)({button:!0,role:h,tabIndex:n,component:d,selected:p,disableGutters:b,classes:Object(i.a)({dense:a.dense},u),className:Object(l.a)(a.root,c,p&&a.selected,!b&&a.gutters),ref:t},g))})),k=Object(d.a)((function(e){return{root:Object(i.a)({},e.typography.body1,Object(p.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(i.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(I),w=["data","integral","logout"];function S(){var e=Object(o.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],i=function(e){var t=e.target.dataset.info,n=new Map([[w[0],function(){console.log("datafunc")}],[w[1],function(){console.log("integralfunc")}],[w[2],function(){console.log("logoutfunc")}]]);n.get(t)&&n.get(t)(),c(null)};return Object(a.jsxs)("div",{id:"AI_header",children:[Object(a.jsxs)("div",{className:"title_box",children:[Object(a.jsx)("div",{className:"left_icon",children:Object(a.jsx)("img",{className:"logo",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/logo.png",alt:"logo"})}),Object(a.jsxs)("div",{className:"center_box",children:[Object(a.jsx)("div",{className:"cenItem index",children:"\u9996\u9875"}),Object(a.jsx)("div",{className:"cenItem",children:"\u73ed\u7ea7\u4fe1\u606f"}),Object(a.jsx)("div",{className:"cenItem",children:"\u540d\u6821\u8d44\u6e90"}),Object(a.jsx)("div",{className:"cenItem",children:"\u6821\u672c\u8bd5\u5377"}),Object(a.jsx)("div",{className:"cenItem",children:"\u77e5\u8bc6\u5e93"}),Object(a.jsx)("div",{className:"cenItem",children:"\u4e0a\u4f20\u7684\u8bd5\u5377"}),Object(a.jsx)("div",{className:"cenItem",children:"\u6211\u7684\u8bd5\u5377"})]}),Object(a.jsxs)("div",{className:"right_box",children:[Object(a.jsx)(j,{className:"Avatar",alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"}),Object(a.jsx)("span",{onClick:function(e){c(e.currentTarget)},children:"\u674e\u8001\u5e08"}),Object(a.jsx)("div",{className:"right_icon"}),Object(a.jsxs)(h.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:i,style:{top:"3.571429rem",left:"-1.714286rem"},children:[Object(a.jsx)(k,{"data-info":w[0],onClick:i,children:"\u4e2a\u4eba\u8d44\u6599"}),Object(a.jsx)(k,{"data-info":w[1],onClick:i,children:"\u79ef\u5206\u8bb0\u5f55"}),Object(a.jsx)(k,{"data-info":w[2],onClick:i,children:"\u9000\u51fa"})]})]})]}),Object(a.jsx)("img",{className:"banner",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/banner.png",alt:"banner"})]})}var E=Object(o.memo)(S);n(113);function R(){return Object(a.jsxs)("div",{id:"AI_footer",children:[Object(a.jsx)("img",{className:"footimg",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footimg.png",alt:"footimg"}),Object(a.jsxs)("footer",{children:[Object(a.jsxs)("div",{className:"left_info",children:[Object(a.jsx)("div",{className:"infoitems ",children:"\u8054\u7cfb\u6211\u4eec"}),Object(a.jsx)("div",{className:"infoitems ",children:"\u90ae\u7bb1\u5730\u5740"}),Object(a.jsx)("div",{className:"infoitems ",children:"\u54a8\u8be2\u70ed\u7ebf"}),Object(a.jsx)("div",{className:"infoitems botfont",children:"\u5173\u4e8e\u6211\u4eec"}),Object(a.jsx)("div",{className:"infoitems botfont",children:"kefu@aictb.com"}),Object(a.jsx)("div",{className:"infoitems botfont",children:"0514-82885886"})]}),Object(a.jsxs)("div",{className:"cen_box",children:[Object(a.jsx)("img",{className:"footqrcode",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/footqrcode.png",alt:"footqrcode"}),Object(a.jsx)("span",{className:"foottext",children:"\u5173\u6ce8\u5fae\u4fe1\u516c\u4f17\u53f7"})]}),Object(a.jsx)("img",{className:"foottip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/foottip.png",alt:"foottip"})]})]})}var _=Object(o.memo)(R),A=n(12),z=n.n(A),F=n(11),M=z()({loader:function(){return n.e(5).then(n.bind(null,172))},loading:F.a}),P=z()({loader:function(){return n.e(7).then(n.bind(null,160))},loading:F.a}),L=z()({loader:function(){return n.e(8).then(n.bind(null,161))},loading:F.a}),V=z()({loader:function(){return n.e(12).then(n.bind(null,162))},loading:F.a}),B=z()({loader:function(){return n.e(9).then(n.bind(null,163))},loading:F.a}),D=z()({loader:function(){return n.e(13).then(n.bind(null,164))},loading:F.a}),G=z()({loader:function(){return n.e(11).then(n.bind(null,165))},loading:F.a}),T=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(E,{props:e}),Object(a.jsx)(c.b,{path:"/main/index",component:M}),Object(a.jsx)(c.b,{path:"/main/class",component:P}),Object(a.jsx)(c.b,{path:"/main/famous",component:L}),Object(a.jsx)(c.b,{path:"/main/schoolbased",component:V}),Object(a.jsx)(c.b,{path:"/main/knowledge",component:B}),Object(a.jsx)(c.b,{path:"/main/uploadpaper",component:D}),Object(a.jsx)(c.b,{path:"/main/mypaper",component:G}),Object(a.jsx)(c.a,{to:"/main/index"}),Object(a.jsx)(_,{})]})};t.default=Object(o.memo)(T)}}]);