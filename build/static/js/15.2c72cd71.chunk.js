(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[15,39],{197:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return o}))},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){a=!0,o=i}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){var n=t||{},o=n.defaultValue,c=n.value,l=n.onChange,i=n.postState,u=a(r.useState((function(){return void 0!==c?c:void 0!==o?"function"===typeof o?o():o:"function"===typeof e?e():e})),2),s=u[0],f=u[1],p=void 0!==c?c:s;i&&(p=i(p));var d=r.useRef(!0);return r.useEffect((function(){d.current?d.current=!1:void 0===c&&f(c)}),[c]),[p,function(e){f(e),p!==e&&l&&l(e,p)}]}},217:function(e,t,n){"use strict";var r=n(12),a=n(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),c=r(n(218)),l=r(n(18)),i=function(e,t){return o.createElement(l.default,Object.assign({},e,{ref:t,icon:c.default}))};i.displayName="SearchOutlined";var u=o.forwardRef(i);t.default=u},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},219:function(e,t,n){"use strict";n(110),n(225)},220:function(e,t,n){"use strict";var r=n(10),a=n.n(r),o=n(1),c=n.n(o),l=n(0),i=n(221),u=n(4),s=n.n(u),f=n(28),p=l.createContext(null),d=p.Provider,v=p,b=n(238),y=n(66),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=function(e,t){var n,r=l.useContext(v),o=l.useContext(f.b),u=o.getPrefixCls,p=o.direction,d=l.useRef(),m=Object(b.a)(t,d);l.useEffect((function(){Object(y.a)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var O=e.prefixCls,g=e.className,x=e.children,C=e.style,j=h(e,["prefixCls","className","children","style"]),k=u("radio",O),w=c()({},j);r&&(w.name=r.name,w.onChange=function(t){e.onChange&&e.onChange(t),(null===r||void 0===r?void 0:r.onChange)&&r.onChange(t)},w.checked=e.value===r.value,w.disabled=e.disabled||r.disabled);var P=s()("".concat(k,"-wrapper"),(n={},a()(n,"".concat(k,"-wrapper-checked"),w.checked),a()(n,"".concat(k,"-wrapper-disabled"),w.disabled),a()(n,"".concat(k,"-wrapper-rtl"),"rtl"===p),n),g);return l.createElement("label",{className:P,style:C,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},l.createElement(i.a,c()({},w,{prefixCls:k,ref:m})),void 0!==x?l.createElement("span",null,x):null)},O=l.forwardRef(m);O.displayName="Radio",O.defaultProps={type:"radio"};var g=O,x=n(43),C=n.n(x),j=n(206),k=n(69),w=l.forwardRef((function(e,t){var n=l.useContext(f.b),r=n.getPrefixCls,o=n.direction,c=l.useContext(k.b),i=Object(j.a)(e.defaultValue,{value:e.value}),u=C()(i,2),p=u[0],v=u[1];return l.createElement(d,{value:{onChange:function(t){var n=p,r=t.target.value;"value"in e||v(r);var a=e.onChange;a&&r!==n&&a(t)},value:p,disabled:e.disabled,name:e.name}},function(){var n,i=e.prefixCls,u=e.className,f=void 0===u?"":u,d=e.options,v=e.optionType,b=e.buttonStyle,y=e.disabled,h=e.children,m=e.size,O=e.style,x=e.id,C=e.onMouseEnter,j=e.onMouseLeave,k=r("radio",i),w="".concat(k,"-group"),P=h;if(d&&d.length>0){var E="button"===v?"".concat(k,"-button"):k;P=d.map((function(e){return"string"===typeof e?l.createElement(g,{key:e,prefixCls:E,disabled:y,value:e,checked:p===e},e):l.createElement(g,{key:"radio-group-value-options-".concat(e.value),prefixCls:E,disabled:e.disabled||y,value:e.value,checked:p===e.value,style:e.style},e.label)}))}var S=m||c,N=s()(w,"".concat(w,"-").concat(b),(n={},a()(n,"".concat(w,"-").concat(S),S),a()(n,"".concat(w,"-rtl"),"rtl"===o),n),f);return l.createElement("div",{className:N,style:O,onMouseEnter:C,onMouseLeave:j,id:x,ref:t},P)}())}));w.defaultProps={buttonStyle:"outline"};var P=l.memo(w),E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},S=function(e,t){var n=l.useContext(v),r=l.useContext(f.b).getPrefixCls,a=e.prefixCls,o=E(e,["prefixCls"]),i=r("radio-button",a);return n&&(o.checked=e.value===n.value,o.disabled=e.disabled||n.disabled),l.createElement(g,c()({prefixCls:i},o,{type:"radio",ref:t}))},N=l.forwardRef(S),M=g;M.Button=N,M.Group=P;t.a=M},221:function(e,t,n){"use strict";var r=n(3),a=n(36),o=n(6),c=n(21),l=n(22),i=n(23),u=n(74),s=n(55),f=n(0),p=n.n(f),d=n(4),v=n.n(d);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var m=function(e){Object(i.a)(n,e);var t=h(n);function n(e){var r;Object(c.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=r.props,n=t.disabled,a=t.onChange;n||("checked"in r.props||r.setState({checked:e.target.checked}),a&&a({target:y(y({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var a="checked"in e?e.checked:e.defaultChecked;return r.state={checked:a},r}return Object(l.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,c=t.className,l=t.style,i=t.name,u=t.id,s=t.type,f=t.disabled,d=t.readOnly,b=t.tabIndex,y=t.onClick,h=t.onFocus,m=t.onBlur,O=t.autoFocus,g=t.value,x=t.required,C=Object(a.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value","required"]),j=Object.keys(C).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=C[t]),e}),{}),k=this.state.checked,w=v()(n,c,(e={},Object(o.a)(e,"".concat(n,"-checked"),k),Object(o.a)(e,"".concat(n,"-disabled"),f),e));return p.a.createElement("span",{className:w,style:l},p.a.createElement("input",Object(r.a)({name:i,id:u,type:s,required:x,readOnly:d,disabled:f,tabIndex:b,className:"".concat(n,"-input"),checked:!!k,onClick:y,onFocus:h,onBlur:m,onChange:this.handleChange,autoFocus:O,ref:this.saveInput,value:g},j)),p.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?y(y({},t),{},{checked:e.checked}):null}}]),n}(f.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},t.a=m},225:function(e,t,n){},232:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(r=n(217))&&r.__esModule?r:{default:r};t.default=a,e.exports=a},309:function(e,t,n){"use strict";n(110),n(393)},310:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({});t.a=a},392:function(e,t,n){"use strict";n(110),n(309)},393:function(e,t,n){},394:function(e,t,n){"use strict";n(110),n(309)},395:function(e,t,n){"use strict";n(110),n(396)},396:function(e,t,n){},470:function(e,t,n){"use strict";var r=n(10),a=n.n(r),o=n(1),c=n.n(o),l=n(30),i=n.n(l),u=n(31),s=n.n(u),f=n(112),p=n.n(f),d=n(32),v=n.n(d),b=n(33),y=n.n(b),h=n(0),m=n(4),O=n.n(m),g=n(221),x=n(199),C=n.n(x),j=n(43),k=n.n(j),w=n(68),P=n(28),E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},S=h.createContext(null),N=function(e){var t=e.defaultValue,n=e.children,r=e.options,o=void 0===r?[]:r,l=e.prefixCls,i=e.className,u=e.style,s=e.onChange,f=E(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),p=h.useContext(P.b),d=p.getPrefixCls,v=p.direction,b=h.useState(f.value||t||[]),y=k()(b,2),m=y[0],g=y[1],x=h.useState([]),j=k()(x,2),N=j[0],M=j[1];h.useEffect((function(){"value"in f&&g(f.value||[])}),[f.value]);var R=function(){return o.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},I=d("checkbox",l),D="".concat(I,"-group"),_=Object(w.a)(f,["value","disabled"]);o&&o.length>0&&(n=R().map((function(e){return h.createElement(A,{prefixCls:I,key:e.value.toString(),disabled:"disabled"in e?e.disabled:f.disabled,value:e.value,checked:-1!==m.indexOf(e.value),onChange:e.onChange,className:"".concat(D,"-item"),style:e.style},e.label)})));var L={toggleOption:function(e){var t=m.indexOf(e.value),n=C()(m);if(-1===t?n.push(e.value):n.splice(t,1),"value"in f||g(n),s){var r=R();s(n.filter((function(e){return-1!==N.indexOf(e)})).sort((function(e,t){return r.findIndex((function(t){return t.value===e}))-r.findIndex((function(e){return e.value===t}))})))}},value:m,disabled:f.disabled,name:f.name,registerValue:function(e){M((function(t){return[].concat(C()(t),[e])}))},cancelValue:function(e){M((function(t){return t.filter((function(t){return t!==e}))}))}},V=O()(D,a()({},"".concat(D,"-rtl"),"rtl"===v),i);return h.createElement("div",c()({className:V,style:u},_),h.createElement(S.Provider,{value:L},n))},M=h.memo(N),R=n(66),I=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},D=function(e){v()(n,e);var t=y()(n);function n(){var e;return i()(this,n),(e=t.apply(this,arguments)).saveCheckbox=function(t){e.rcCheckbox=t},e.renderCheckbox=function(t){var n,r=t.getPrefixCls,o=t.direction,l=p()(e),i=l.props,u=l.context,s=i.prefixCls,f=i.className,d=i.children,v=i.indeterminate,b=i.style,y=i.onMouseEnter,m=i.onMouseLeave,x=I(i,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),C=u,j=r("checkbox",s),k=c()({},x);C&&(k.onChange=function(){x.onChange&&x.onChange.apply(x,arguments),C.toggleOption({label:d,value:i.value})},k.name=C.name,k.checked=-1!==C.value.indexOf(i.value),k.disabled=i.disabled||C.disabled);var w=O()((n={},a()(n,"".concat(j,"-wrapper"),!0),a()(n,"".concat(j,"-rtl"),"rtl"===o),a()(n,"".concat(j,"-wrapper-checked"),k.checked),a()(n,"".concat(j,"-wrapper-disabled"),k.disabled),n),f),P=O()(a()({},"".concat(j,"-indeterminate"),v));return h.createElement("label",{className:w,style:b,onMouseEnter:y,onMouseLeave:m},h.createElement(g.a,c()({},k,{prefixCls:j,className:P,ref:e.saveCheckbox})),void 0!==d&&h.createElement("span",null,d))},e}return s()(n,[{key:"componentDidMount",value:function(){var e,t=this.props.value;null===(e=this.context)||void 0===e||e.registerValue(t),Object(R.a)("checked"in this.props||this.context||!("value"in this.props),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}},{key:"componentDidUpdate",value:function(e){var t,n,r=e.value,a=this.props.value;a!==r&&(null===(t=this.context)||void 0===t||t.cancelValue(r),null===(n=this.context)||void 0===n||n.registerValue(a))}},{key:"componentWillUnmount",value:function(){var e,t=this.props.value;null===(e=this.context)||void 0===e||e.cancelValue(t)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return h.createElement(P.a,null,this.renderCheckbox)}}]),n}(h.PureComponent);D.__ANT_CHECKBOX=!0,D.defaultProps={indeterminate:!1},D.contextType=S;var A=D;A.Group=M;t.a=A},471:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(10),c=n.n(o),l=n(111),i=n.n(l),u=n(43),s=n.n(u),f=n(0),p=n(4),d=n.n(p),v=n(28),b=n(310),y=n(73),h=n(258),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},O=(Object(y.a)("top","middle","bottom","stretch"),Object(y.a)("start","end","center","space-around","space-between"),f.forwardRef((function(e,t){var n,r=e.prefixCls,o=e.justify,l=e.align,u=e.className,p=e.style,y=e.children,O=e.gutter,g=void 0===O?0:O,x=e.wrap,C=m(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),j=f.useContext(v.b),k=j.getPrefixCls,w=j.direction,P=f.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),E=s()(P,2),S=E[0],N=E[1],M=f.useRef(g);f.useEffect((function(){var e=h.a.subscribe((function(e){var t=M.current||0;(!Array.isArray(t)&&"object"===i()(t)||Array.isArray(t)&&("object"===i()(t[0])||"object"===i()(t[1])))&&N(e)}));return function(){return h.a.unsubscribe(e)}}),[]);var R=k("row",r),I=function(){var e=[0,0];return(Array.isArray(g)?g:[g,0]).forEach((function(t,n){if("object"===i()(t))for(var r=0;r<h.b.length;r++){var a=h.b[r];if(S[a]&&void 0!==t[a]){e[n]=t[a];break}}else e[n]=t||0})),e}(),D=d()(R,(n={},c()(n,"".concat(R,"-no-wrap"),!1===x),c()(n,"".concat(R,"-").concat(o),o),c()(n,"".concat(R,"-").concat(l),l),c()(n,"".concat(R,"-rtl"),"rtl"===w),n),u),A=a()(a()(a()({},I[0]>0?{marginLeft:I[0]/-2,marginRight:I[0]/-2}:{}),I[1]>0?{marginTop:I[1]/-2,marginBottom:I[1]/2}:{}),p);return f.createElement(b.a.Provider,{value:{gutter:I,wrap:x}},f.createElement("div",a()({},C,{className:D,style:A,ref:t}),y))})));O.displayName="Row";var g=O;t.a=g},472:function(e,t,n){"use strict";var r=n(10),a=n.n(r),o=n(1),c=n.n(o),l=n(111),i=n.n(l),u=n(0),s=n(4),f=n.n(s),p=n(310),d=n(28),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var b=["xs","sm","md","lg","xl","xxl"],y=u.forwardRef((function(e,t){var n,r=u.useContext(d.b),o=r.getPrefixCls,l=r.direction,s=u.useContext(p.a),y=s.gutter,h=s.wrap,m=e.prefixCls,O=e.span,g=e.order,x=e.offset,C=e.push,j=e.pull,k=e.className,w=e.children,P=e.flex,E=e.style,S=v(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),N=o("col",m),M={};b.forEach((function(t){var n,r={},o=e[t];"number"===typeof o?r.span=o:"object"===i()(o)&&(r=o||{}),delete S[t],M=c()(c()({},M),(n={},a()(n,"".concat(N,"-").concat(t,"-").concat(r.span),void 0!==r.span),a()(n,"".concat(N,"-").concat(t,"-order-").concat(r.order),r.order||0===r.order),a()(n,"".concat(N,"-").concat(t,"-offset-").concat(r.offset),r.offset||0===r.offset),a()(n,"".concat(N,"-").concat(t,"-push-").concat(r.push),r.push||0===r.push),a()(n,"".concat(N,"-").concat(t,"-pull-").concat(r.pull),r.pull||0===r.pull),a()(n,"".concat(N,"-rtl"),"rtl"===l),n))}));var R=f()(N,(n={},a()(n,"".concat(N,"-").concat(O),void 0!==O),a()(n,"".concat(N,"-order-").concat(g),g),a()(n,"".concat(N,"-offset-").concat(x),x),a()(n,"".concat(N,"-push-").concat(C),C),a()(n,"".concat(N,"-pull-").concat(j),j),n),k,M),I=c()({},E);return y&&(I=c()(c()(c()({},y[0]>0?{paddingLeft:y[0]/2,paddingRight:y[0]/2}:{}),y[1]>0?{paddingTop:y[1]/2,paddingBottom:y[1]/2}:{}),I)),P&&(I.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),"auto"!==P||!1!==h||I.minWidth||(I.minWidth=0)),u.createElement("div",c()({},S,{style:I,className:R,ref:t}),w)}));y.displayName="Col";var h=y;t.a=h}}]);