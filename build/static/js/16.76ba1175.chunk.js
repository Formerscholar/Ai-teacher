(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[16,4],{200:function(e,t,n){"use strict";n(205);var c=n(206),a=n(10),o=n(0);n(201);function r(e){var t=e.children,n=e.isOpen,o=void 0!==n&&n,r=e.closeClick,i=e.title,l=void 0===i?"":i,s=e.width,u=void 0===s?"41.71rem":s,d=e.height,f=void 0===d?"23.5rem":d,p=f.split("rem")[0]-4.64;return Object(a.jsx)(c.a,{className:"T_modelbox",title:l,visible:o,onCancel:r,footer:null,centered:!0,width:u,height:f,bodyStyle:{height:p+"rem"},closeIcon:Object(a.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(o.memo)(r)},201:function(e,t,n){},205:function(e,t,n){"use strict";n(110),n(210),n(186)},206:function(e,t,n){"use strict";var c=n(9),a=n.n(c),o=n(1),r=n.n(o),i=n(0),l=n(231),s=n(4),u=n.n(s),d=n(215),f=n(70),p=n.n(f),m=n(43),b=n.n(m),v=n(198),h=n.n(v);var j=n(185),O=n(207),y=function(e){var t=i.useRef(!1),n=i.useRef(),c=i.useState(!1),a=b()(c,2),o=a[0],l=a[1];i.useEffect((function(){var t;if(e.autoFocus){var c=n.current;t=setTimeout((function(){return c.focus()}))}return function(){t&&clearTimeout(t)}}),[]);var s=e.type,u=e.children,d=e.prefixCls,f=e.buttonProps;return i.createElement(j.a,r()({},Object(O.a)(s),{onClick:function(){var n=e.actionFn,c=e.closeModal;if(!t.current)if(t.current=!0,n){var a;if(n.length)a=n(c),t.current=!1;else if(!(a=n()))return void c();!function(n){var c=e.closeModal;n&&n.then&&(l(!0),n.then((function(){c.apply(void 0,arguments)}),(function(e){console.error(e),l(!1),t.current=!1})))}(a)}else c()},loading:o,prefixCls:d},f,{ref:n}),u)},x=n(64),g=n(20),C=function(e){var t=e.icon,n=e.onCancel,c=e.onOk,o=e.close,r=e.zIndex,l=e.afterClose,s=e.visible,d=e.keyboard,f=e.centered,p=e.getContainer,m=e.maskStyle,b=e.okText,v=e.okButtonProps,h=e.cancelText,j=e.cancelButtonProps,O=e.direction,C=e.prefixCls,k=e.rootPrefixCls,w=e.bodyStyle,N=e.modalRender;Object(x.a)(!("string"===typeof t&&t.length>2),"Modal","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(t,"` at https://ant.design/components/icon"));var E=e.okType||"primary",P="".concat(C,"-confirm"),S=!("okCancel"in e)||e.okCancel,T=e.width||416,_=e.style||{},R=void 0===e.mask||e.mask,I=void 0!==e.maskClosable&&e.maskClosable,F=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),M=e.transitionName||"zoom",B=e.maskTransitionName||"fade",D=u()(P,"".concat(P,"-").concat(e.type),a()({},"".concat(P,"-rtl"),"rtl"===O),e.className),z=S&&i.createElement(y,{actionFn:n,closeModal:o,autoFocus:"cancel"===F,buttonProps:j,prefixCls:"".concat(k,"-btn")},h);return i.createElement($,{prefixCls:C,className:D,wrapClassName:u()(a()({},"".concat(P,"-centered"),!!e.centered)),onCancel:function(){return o({triggerCancel:!0})},visible:s,title:"",transitionName:M,footer:"",maskTransitionName:B,mask:R,maskClosable:I,maskStyle:m,style:_,width:T,zIndex:r,afterClose:l,keyboard:d,centered:f,getContainer:p,modalRender:N},i.createElement("div",{className:"".concat(P,"-body-wrapper")},i.createElement(g.a,{prefixCls:k},i.createElement("div",{className:"".concat(P,"-body"),style:w},t,void 0===e.title?null:i.createElement("span",{className:"".concat(P,"-title")},e.title),i.createElement("div",{className:"".concat(P,"-content")},e.content))),i.createElement("div",{className:"".concat(P,"-btns")},z,i.createElement(y,{type:E,actionFn:c,closeModal:o,autoFocus:"ok"===F,buttonProps:v,prefixCls:"".concat(k,"-btn")},b))))},k=n(38),w=n(44),N=n(28),E=function(e,t){var n=e.afterClose,c=e.config,a=i.useState(!0),o=b()(a,2),l=o[0],s=o[1],u=i.useState(c),d=b()(u,2),f=d[0],p=d[1],m=i.useContext(N.b),v=m.direction,h=m.getPrefixCls,j=h("modal"),O=h();function y(){s(!1)}return i.useImperativeHandle(t,(function(){return{destroy:y,update:function(e){p((function(t){return r()(r()({},t),e)}))}}})),i.createElement(w.a,{componentName:"Modal",defaultLocale:k.a.Modal},(function(e){return i.createElement(C,r()({prefixCls:j,rootPrefixCls:O},f,{close:y,visible:l,afterClose:n,okText:f.okText||(f.okCancel?e.okText:e.justOkText),direction:v,cancelText:f.cancelText||e.cancelText}))}))},P=i.forwardRef(E),S=n(17),T=n(78),_=n.n(T),R=n(77),I=n.n(R),F=n(79),M=n.n(F),B=n(80),D=n.n(B),z=n(45),L=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},G="ant";function A(){return G}function V(e){var t=document.createElement("div");document.body.appendChild(t);var n=r()(r()({},e),{close:o,visible:!0});function c(){var n=S.unmountComponentAtNode(t);n&&t.parentNode&&t.parentNode.removeChild(t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];var i=a.some((function(e){return e&&e.triggerCancel}));e.onCancel&&i&&e.onCancel.apply(e,a);for(var l=0;l<W.length;l++){var s=W[l];if(s===o){W.splice(l,1);break}}}function a(e){var n=e.okText,c=e.cancelText,a=e.prefixCls,o=L(e,["okText","cancelText","prefixCls"]);setTimeout((function(){var e=Object(z.b)();S.render(i.createElement(C,r()({},o,{prefixCls:a||"".concat(A(),"-modal"),rootPrefixCls:A(),okText:n||(o.okCancel?e.okText:e.justOkText),cancelText:c||e.cancelText})),t)}))}function o(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];a(n=r()(r()({},n),{visible:!1,afterClose:c.bind.apply(c,[this].concat(t))}))}return a(n),W.push(o),{destroy:o,update:function(e){a(n="function"===typeof e?e(n):r()(r()({},n),e))}}}function q(e){return r()({type:"warning",icon:i.createElement(D.a,null),okCancel:!1},e)}function J(e){return r()({type:"info",icon:i.createElement(_.a,null),okCancel:!1},e)}function H(e){return r()({type:"success",icon:i.createElement(I.a,null),okCancel:!1},e)}function X(e){return r()({type:"error",icon:i.createElement(M.a,null),okCancel:!1},e)}function Y(e){return r()({type:"confirm",icon:i.createElement(D.a,null),okCancel:!0},e)}var K=0;var Q,U=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},W=[];"undefined"!==typeof window&&window.document&&window.document.documentElement&&Object(d.a)(document.documentElement,"click",(function(e){Q={x:e.pageX,y:e.pageY},setTimeout((function(){Q=null}),100)}));var Z=function(e){var t,n=i.useContext(N.b),c=n.getPopupContainer,o=n.getPrefixCls,s=n.direction,d=function(t){var n=e.onCancel;n&&n(t)},f=function(t){var n=e.onOk;n&&n(t)},m=function(t){var n=e.okText,c=e.okType,a=e.cancelText,o=e.confirmLoading;return i.createElement(i.Fragment,null,i.createElement(j.a,r()({onClick:d},e.cancelButtonProps),a||t.cancelText),i.createElement(j.a,r()({},Object(O.a)(c),{loading:o,onClick:f},e.okButtonProps),n||t.okText))},b=e.prefixCls,v=e.footer,h=e.visible,y=e.wrapClassName,x=e.centered,g=e.getContainer,C=e.closeIcon,k=U(e,["prefixCls","footer","visible","wrapClassName","centered","getContainer","closeIcon"]),E=o("modal",b),P=i.createElement(w.a,{componentName:"Modal",defaultLocale:Object(z.b)()},m),S=i.createElement("span",{className:"".concat(E,"-close-x")},C||i.createElement(p.a,{className:"".concat(E,"-close-icon")})),T=u()(y,(t={},a()(t,"".concat(E,"-centered"),!!x),a()(t,"".concat(E,"-wrap-rtl"),"rtl"===s),t));return i.createElement(l.a,r()({},k,{getContainer:void 0===g?c:g,prefixCls:E,wrapClassName:T,footer:void 0===v?P:v,visible:h,mousePosition:Q,onClose:d,closeIcon:S}))};Z.useModal=function(){var e=function(){var e=i.useState([]),t=b()(e,2),n=t[0],c=t[1];return[n,function(e){return c((function(t){return[].concat(h()(t),[e])})),function(){c((function(t){return t.filter((function(t){return t!==e}))}))}}]}(),t=b()(e,2),n=t[0],c=t[1];function a(e){return function(t){K+=1;var n,a=i.createRef(),o=i.createElement(P,{key:"modal-".concat(K),config:e(t),ref:a,afterClose:function(){n()}});return n=c(o),{destroy:function(){a.current&&a.current.destroy()},update:function(e){a.current&&a.current.update(e)}}}}return[{info:a(J),success:a(H),error:a(X),warning:a(q),confirm:a(Y)},i.createElement(i.Fragment,null,n)]},Z.defaultProps={width:520,transitionName:"zoom",maskTransitionName:"fade",confirmLoading:!1,visible:!1,okType:"primary"};var $=Z;function ee(e){return V(q(e))}var te=$;te.info=function(e){return V(J(e))},te.success=function(e){return V(H(e))},te.error=function(e){return V(X(e))},te.warning=ee,te.warn=ee,te.confirm=function(e){return V(Y(e))},te.destroyAll=function(){for(;W.length;){var e=W.pop();e&&e()}},te.config=function(e){var t=e.rootPrefixCls;t&&(G=t)};t.a=te},210:function(e,t,n){},223:function(e,t,n){"use strict";n(110),n(224)},224:function(e,t,n){},226:function(e,t,n){"use strict";var c=n(9),a=n.n(c),o=n(1),r=n.n(o),i=n(0),l=n(230),s=n(4),u=n.n(s),d=n(28),f=i.createContext(null),p=f.Provider,m=f,b=n(238),v=n(64),h=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},j=function(e,t){var n,c=i.useContext(m),o=i.useContext(d.b),s=o.getPrefixCls,f=o.direction,p=i.useRef(),j=Object(b.a)(t,p);i.useEffect((function(){Object(v.a)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var O=e.prefixCls,y=e.className,x=e.children,g=e.style,C=h(e,["prefixCls","className","children","style"]),k=s("radio",O),w=r()({},C);c&&(w.name=c.name,w.onChange=function(t){e.onChange&&e.onChange(t),(null===c||void 0===c?void 0:c.onChange)&&c.onChange(t)},w.checked=e.value===c.value,w.disabled=e.disabled||c.disabled);var N=u()("".concat(k,"-wrapper"),(n={},a()(n,"".concat(k,"-wrapper-checked"),w.checked),a()(n,"".concat(k,"-wrapper-disabled"),w.disabled),a()(n,"".concat(k,"-wrapper-rtl"),"rtl"===f),n),y);return i.createElement("label",{className:N,style:g,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i.createElement(l.a,r()({},w,{prefixCls:k,ref:j})),void 0!==x?i.createElement("span",null,x):null)},O=i.forwardRef(j);O.displayName="Radio",O.defaultProps={type:"radio"};var y=O,x=n(43),g=n.n(x),C=n(202),k=n(67),w=i.forwardRef((function(e,t){var n=i.useContext(d.b),c=n.getPrefixCls,o=n.direction,r=i.useContext(k.b),l=Object(C.a)(e.defaultValue,{value:e.value}),s=g()(l,2),f=s[0],m=s[1];return i.createElement(p,{value:{onChange:function(t){var n=f,c=t.target.value;"value"in e||m(c);var a=e.onChange;a&&c!==n&&a(t)},value:f,disabled:e.disabled,name:e.name}},function(){var n,l=e.prefixCls,s=e.className,d=void 0===s?"":s,p=e.options,m=e.optionType,b=e.buttonStyle,v=e.disabled,h=e.children,j=e.size,O=e.style,x=e.id,g=e.onMouseEnter,C=e.onMouseLeave,k=c("radio",l),w="".concat(k,"-group"),N=h;if(p&&p.length>0){var E="button"===m?"".concat(k,"-button"):k;N=p.map((function(e){return"string"===typeof e?i.createElement(y,{key:e,prefixCls:E,disabled:v,value:e,checked:f===e},e):i.createElement(y,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||v,value:e.value,checked:f===e.value,style:e.style},e.label)}))}var P=j||r,S=u()(w,"".concat(w,"-").concat(b),(n={},a()(n,"".concat(w,"-").concat(P),P),a()(n,"".concat(w,"-rtl"),"rtl"===o),n),d);return i.createElement("div",{className:S,style:O,onMouseEnter:g,onMouseLeave:C,id:x,ref:t},N)}())}));w.defaultProps={buttonStyle:"outline"};var N=i.memo(w),E=function(e,t){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)t.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n},P=function(e,t){var n=i.useContext(m),c=i.useContext(d.b).getPrefixCls,a=e.prefixCls,o=E(e,["prefixCls"]),l=c("radio-button",a);return n&&(o.checked=e.value===n.value,o.disabled=e.disabled||n.disabled),i.createElement(y,r()({prefixCls:l},o,{type:"radio",ref:t}))},S=i.forwardRef(P),T=y;T.Button=S,T.Group=N;t.a=T},230:function(e,t,n){"use strict";var c=n(3),a=n(36),o=n(6),r=n(21),i=n(22),l=n(23),s=n(81),u=n(53),d=n(0),f=n.n(d),p=n(4),m=n.n(p);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,c=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(c,arguments,a)}else n=c.apply(this,arguments);return Object(s.a)(this,n)}}var j=function(e){Object(l.a)(n,e);var t=h(n);function n(e){var c;Object(r.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=c.props,n=t.disabled,a=t.onChange;n||("checked"in c.props||c.setState({checked:e.target.checked}),a&&a({target:v(v({},c.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},c.saveInput=function(e){c.input=e};var a="checked"in e?e.checked:e.defaultChecked;return c.state={checked:a},c}return Object(i.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,r=t.className,i=t.style,l=t.name,s=t.id,u=t.type,d=t.disabled,p=t.readOnly,b=t.tabIndex,v=t.onClick,h=t.onFocus,j=t.onBlur,O=t.autoFocus,y=t.value,x=t.required,g=Object(a.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value","required"]),C=Object.keys(g).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=g[t]),e}),{}),k=this.state.checked,w=m()(n,r,(e={},Object(o.a)(e,"".concat(n,"-checked"),k),Object(o.a)(e,"".concat(n,"-disabled"),d),e));return f.a.createElement("span",{className:w,style:i},f.a.createElement("input",Object(c.a)({name:l,id:s,type:u,required:x,readOnly:p,disabled:d,tabIndex:b,className:"".concat(n,"-input"),checked:!!k,onClick:v,onFocus:h,onBlur:j,onChange:this.handleChange,autoFocus:O,ref:this.saveInput,value:y},C)),f.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?v(v({},t),{},{checked:e.checked}):null}}]),n}(d.Component);j.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},t.a=j},398:function(e,t,n){},501:function(e,t,n){"use strict";n.r(t);n(223);var c=n(226),a=(n(229),n(232)),o=(n(186),n(185)),r=(n(220),n(225)),i=(n(199),n(203)),l=(n(196),n(65)),s=n(192),u=n.n(s),d=n(193),f=n(195),p=n(10),m=n(0),b=(n(398),n(191));function v(e){return Object(b.a)({url:"/getSchoolResourcesList",method:"GET",params:e})}var h=n(197),j=n(200),O=n(209);function y(e){var t,n,s,b,y=e.history,x=Object(m.useState)(""),g=Object(f.a)(x,2),C=g[0],k=g[1],w=Object(m.useState)(""),N=Object(f.a)(w,2),E=N[0],P=N[1],S=Object(m.useState)(1),T=Object(f.a)(S,2),_=T[0],R=T[1],I=Object(m.useState)({}),F=Object(f.a)(I,2),M=F[0],B=F[1],D=Object(m.useState)(!1),z=Object(f.a)(D,2),L=z[0],G=z[1],A=Object(m.useState)(""),V=Object(f.a)(A,2),q=V[0],J=V[1],H=Object(m.useState)([]),X=Object(f.a)(H,2),Y=X[0],K=X[1],Q=Object(m.useState)(!1),U=Object(f.a)(Q,2),W=U[0],Z=U[1],$=Object(m.useState)(""),ee=Object(f.a)($,2),te=ee[0],ne=ee[1];Object(m.useEffect)((function(){return ce(),function(){}}),[]);var ce=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,c,a,o,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=4,v({name:t,page:n});case 4:c=e.sent,a=c.code,o=c.data,c.msg,200===a&&B(o);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{id:"Famous",children:[Object(p.jsxs)(i.a,{separator:Object(p.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(p.jsxs)(i.a.Item,{onClick:function(e){e.preventDefault(),localStorage.setItem("menuIndex","0"),y.push("/main/index")},style:{cursor:"pointer",color:"#222"},children:[Object(p.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(p.jsx)(i.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u540d\u6821\u8d44\u6e90"})]}),Object(p.jsxs)("div",{className:"content-warp",children:[Object(p.jsxs)("div",{className:"top_box",children:[Object(p.jsx)("span",{className:"name",children:"\u8bd5\u5377\u540d\u79f0:"}),Object(p.jsx)(r.a,{className:"outlined",variant:"outlined",value:C,style:{width:"11.43rem",height:"2.29rem"},size:"small",onInput:function(e){var t=e.target.value;console.log(Object(h.a)(t)),k(Object(h.a)(t)),P(Object(h.a)(t))}}),Object(p.jsx)(o.a,{variant:"contained",className:"btn",onClick:function(){R(1),ce(C,1),k("")},children:"\u67e5\u8be2"})]}),Object(p.jsxs)("div",{className:"body_box",children:[Object(p.jsx)("div",{className:"lists",children:null===M||void 0===M||null===(t=M.schoolResources)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.map((function(e){return Object(p.jsxs)("div",{className:"item",children:[Object(p.jsxs)("div",{className:"left_box",children:[Object(p.jsx)("img",{className:"paper_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png",alt:"paper_icon"}),Object(p.jsxs)("div",{className:"info_box",children:[Object(p.jsx)("div",{className:"title",children:null===e||void 0===e?void 0:e.title}),Object(p.jsxs)("div",{className:"bot_info",children:[Object(p.jsx)("img",{className:"time_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/time_icon.png",alt:"time_icon"}),Object(p.jsxs)("span",{className:"time_text",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(h.g)(1e3*(null===e||void 0===e?void 0:e.update_time))]}),Object(p.jsx)("img",{className:"View_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View_icon.png",alt:"View_icon"}),Object(p.jsx)("span",{className:"view_text",children:"\u6d4f\u89c8\u6b21\u6570\uff1a166"})]})]})]}),Object(p.jsxs)("div",{className:"right_box",onClick:function(){return t=null===e||void 0===e?void 0:e.pdf1,n=null===e||void 0===e?void 0:e.pdf2,K([t,n]),void G(!0);var t,n},children:[Object(p.jsx)("img",{className:"download_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/download_icon.png",alt:"download_icon"}),Object(p.jsx)("span",{className:"text",children:"\u4e0b\u8f7d"})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(p.jsx)("div",{className:"Pagination",children:Object(p.jsx)(a.a,{hideOnSinglePage:!1,showSizeChanger:!1,total:null===M||void 0===M||null===(s=M.schoolResources)||void 0===s?void 0:s.total,defaultPageSize:20,pageSize:(null===M||void 0===M||null===(b=M.schoolResources)||void 0===b?void 0:b.per_page)||20,onChange:function(e,t){R(e),ce(E,e)},current:_})})]})]}),Object(p.jsx)(j.a,{isOpen:L,title:"\u3010\u4e0b\u8f7d\u3011",closeClick:function(){G(!1)},width:"41.71rem",height:"23.5rem",children:Object(p.jsxs)("div",{id:"tmodelbox",children:[Object(p.jsx)("div",{className:"title",children:"\u8bd5\u5377\u7c7b\u578b\u9009\u62e9"}),Object(p.jsxs)(c.a.Group,{className:"radioGroup",onChange:function(e){var t=e.target.value;J(t),Y[t]?(ne(O.f+Y[t]),Z(!1)):Z(!0)},value:q,children:[Object(p.jsxs)(c.a,{value:1,children:["\u6559\u5e08\u7528\u5377 ",Object(p.jsx)("i",{children:"\uff08\u542b\u7b54\u6848\u548c\u89e3\u6790\uff09"})]}),Object(p.jsxs)(c.a,{value:0,children:["\u5b66\u751f\u7528\u5377",Object(p.jsx)("i",{children:"\uff08\u4e0d\u542b\u7b54\u6848\u548c\u89e3\u6790\uff09"})]})]}),Object(p.jsx)(o.a,{type:"primary",className:"btn",onClick:function(){W?l.b.error("\u6682\u65e0\u6b64\u8bd5\u5377!"):window.open(te),J(""),G(!1)},children:"\u786e\u5b9a"})]})})]})}t.default=Object(m.memo)(y)}}]);