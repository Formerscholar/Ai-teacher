(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[15,38],{197:function(e,t,n){"use strict";function r(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){var r,o;o=n[r=t],r in(t=e)?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return o}))},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){var n,a=(n=t||{}).defaultValue,c=n.value,l=n.onChange,i=(t=n.postState,(n=o(r.useState((function(){return void 0!==c?c:void 0!==a?"function"==typeof a?a():a:"function"==typeof e?e():e})),2))[1]),u=void 0!==c?c:n[0];t&&(u=t(u));var s=r.useRef(!0);return r.useEffect((function(){s.current?s.current=!1:void 0===c&&i(c)}),[c]),[u,function(e){i(e),u!==e&&l&&l(e,u)}]}},216:function(e,t,n){"use strict";var r=n(12),o=n(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),c=r(n(217)),l=r(n(18));(n=function(e,t){return a.createElement(l.default,Object.assign({},e,{ref:t,icon:c.default}))}).displayName="SearchOutlined",t.default=a.forwardRef(n)},217:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},218:function(e,t,n){"use strict";n(110),n(224)},219:function(e,t,n){"use strict";var r=n(10),o=n.n(r),a=n(1),c=n.n(a),l=n(0),i=n(220),u=(r=n(4),n.n(r)),s=n(28),f=(a=l.createContext(null)).Provider,p=a,d=n(234),b=n(66);r=function(e,t){var n=l.useContext(p),r=(m=l.useContext(s.b)).getPrefixCls,a=m.direction,f=l.useRef(),v=Object(d.a)(t,f);l.useEffect((function(){Object(b.a)(!("optionType"in e),"Radio","`optionType` is only support in Radio.Group.")}),[]);var y=e.prefixCls,h=e.className,m=e.children;t=e.style,f=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&!~t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)!~t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}(e,["prefixCls","className","children","style"]),r=r("radio",y),y=c()({},f);return n&&(y.name=n.name,y.onChange=function(t){e.onChange&&e.onChange(t),null!=n&&n.onChange&&n.onChange(t)},y.checked=e.value===n.value,y.disabled=e.disabled||n.disabled),h=u()("".concat(r,"-wrapper"),(f={},o()(f,"".concat(r,"-wrapper-checked"),y.checked),o()(f,"".concat(r,"-wrapper-disabled"),y.disabled),o()(f,"".concat(r,"-wrapper-rtl"),"rtl"===a),f),h),l.createElement("label",{className:h,style:t,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},l.createElement(i.a,c()({},y,{prefixCls:r,ref:v})),void 0!==m?l.createElement("span",null,m):null)};(a=l.forwardRef(r)).displayName="Radio",a.defaultProps={type:"radio"};var v=a,y=(r=n(43),n.n(r)),h=n(205),m=n(69);(a=l.forwardRef((function(e,t){var n=(c=l.useContext(s.b)).getPrefixCls,r=c.direction,a=l.useContext(m.b),c=Object(h.a)(e.defaultValue,{value:e.value}),i=(c=y()(c,2))[0],p=c[1];return l.createElement(f,{value:{onChange:function(t){var n=i,r=t.target.value;"value"in e||p(r);var o=e.onChange;o&&r!==n&&o(t)},value:i,disabled:e.disabled,name:e.name}},function(){var c,s=void 0===(j=e.className)?"":j,f=e.options,p=e.optionType,d=e.buttonStyle,b=e.disabled,y=e.children,h=e.size,m=e.style,O=e.id,g=e.onMouseEnter,x=e.onMouseLeave,C=n("radio",e.prefixCls),j="".concat(C,"-group");y=y;return f&&0<f.length&&(c="button"===p?"".concat(C,"-button"):C,y=f.map((function(e){return"string"==typeof e?l.createElement(v,{key:e,prefixCls:c,disabled:b,value:e,checked:i===e},e):l.createElement(v,{key:"radio-group-value-options-".concat(e.value),prefixCls:c,disabled:e.disabled||b,value:e.value,checked:i===e.value,style:e.style},e.label)}))),h=h||a,s=u()(j,"".concat(j,"-").concat(d),(d={},o()(d,"".concat(j,"-").concat(h),h),o()(d,"".concat(j,"-rtl"),"rtl"===r),d),s),l.createElement("div",{className:s,style:m,onMouseEnter:g,onMouseLeave:x,id:O,ref:t},y)}())}))).defaultProps={buttonStyle:"outline"};r=l.memo(a),n=function(e,t){var n=l.useContext(p),r=l.useContext(s.b).getPrefixCls,o=e.prefixCls,a=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&!~t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)!~t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}(e,["prefixCls"]);o=r("radio-button",o);return n&&(a.checked=e.value===n.value,a.disabled=e.disabled||n.disabled),l.createElement(v,c()({prefixCls:o},a,{type:"radio",ref:t}))};(a=v).Button=l.forwardRef(n),a.Group=r,t.a=a},220:function(e,t,n){"use strict";var r=n(3),o=n(36),a=n(6),c=n(21),l=n(22),i=n(23),u=n(74),s=n(52),f=n(0),p=n.n(f),d=n(4),b=n.n(d);function v(e,t){var n,r=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)),r}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}(f=function(e){Object(i.a)(n,e);var t=function(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var e,r=Object(s.a)(t);return r=n?(e=Object(s.a)(this).constructor,Reflect.construct(r,arguments,e)):r.apply(this,arguments),Object(u.a)(this,r)}}(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=r.props,n=t.onChange;t.disabled||("checked"in r.props||r.setState({checked:e.target.checked}),n&&n({target:y(y({},r.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e},e="checked"in e?e.checked:e.defaultChecked,r.state={checked:e},r}return Object(l.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e=(C=this.props).prefixCls,t=C.className,n=C.style,c=C.name,l=C.id,i=C.type,u=C.disabled,s=C.readOnly,f=C.tabIndex,d=C.onClick,v=C.onFocus,y=C.onBlur,h=C.autoFocus,m=C.value,O=C.required,g=Object(o.a)(C,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value","required"]),x=Object.keys(g).reduce((function(e,t){return"aria-"!=t.substr(0,5)&&"data-"!=t.substr(0,5)&&"role"!==t||(e[t]=g[t]),e}),{}),C=this.state.checked;t=b()(e,t,(t={},Object(a.a)(t,"".concat(e,"-checked"),C),Object(a.a)(t,"".concat(e,"-disabled"),u),t));return p.a.createElement("span",{className:t,style:n},p.a.createElement("input",Object(r.a)({name:c,id:l,type:i,required:O,readOnly:s,disabled:u,tabIndex:f,className:"".concat(e,"-input"),checked:!!C,onClick:d,onFocus:v,onBlur:y,onChange:this.handleChange,autoFocus:h,ref:this.saveInput,value:m},x)),p.a.createElement("span",{className:"".concat(e,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?y(y({},t),{},{checked:e.checked}):null}}]),n}(f.Component)).defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},t.a=f},224:function(e,t,n){},229:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(r=n(216))&&r.__esModule?r:{default:r};e.exports=t.default=o},303:function(e,t,n){"use strict";n(110),n(379)},304:function(e,t,n){"use strict";var r=n(0);t.a=Object(r.createContext)({})},378:function(e,t,n){"use strict";n(110),n(303)},379:function(e,t,n){},380:function(e,t,n){"use strict";n(110),n(303)},381:function(e,t,n){"use strict";n(110),n(382)},382:function(e,t,n){},455:function(e,t,n){"use strict";var r=n(10),o=n.n(r),a=(r=n(1),n.n(r)),c=(r=n(30),n.n(r)),l=(r=n(31),n.n(r)),i=(r=n(112),n.n(r)),u=(r=n(32),n.n(r)),s=(r=n(33),n.n(r)),f=n(0),p=(r=n(4),n.n(r)),d=n(220),b=(r=n(199),n.n(r)),v=(r=n(43),n.n(r)),y=n(68),h=n(28),m=f.createContext(null),O=(r=function(e){var t=e.defaultValue,n=e.children,r=void 0===(d=e.options)?[]:d,c=e.prefixCls,l=e.className,i=e.style,u=e.onChange,s=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&!~t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)!~t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),d=(e=(d=f.useContext(h.b)).getPrefixCls,d.direction),O=(t=f.useState(s.value||t||[]),(t=v()(t,2))[0]),g=t[1],C=(t=f.useState([]),(t=v()(t,2))[0]),j=t[1];function k(){return r.map((function(e){return"string"==typeof e?{label:e,value:e}:e}))}f.useEffect((function(){"value"in s&&g(s.value||[])}),[s.value]);var w=e("checkbox",c),P="".concat(w,"-group");e=Object(y.a)(s,["value","disabled"]);return r&&0<r.length&&(n=k().map((function(e){return f.createElement(x,{prefixCls:w,key:""+e.value,disabled:("disabled"in e?e:s).disabled,value:e.value,checked:!!~O.indexOf(e.value),onChange:e.onChange,className:"".concat(P,"-item"),style:e.style},e.label)}))),c={toggleOption:function(e){var t,n=O.indexOf(e.value),r=b()(O);-1==n?r.push(e.value):r.splice(n,1),"value"in s||g(r),u&&(t=k(),u(r.filter((function(e){return!!~C.indexOf(e)})).sort((function(e,n){return t.findIndex((function(t){return t.value===e}))-t.findIndex((function(e){return e.value===n}))}))))},value:O,disabled:s.disabled,name:s.name,registerValue:function(e){j((function(t){return[].concat(b()(t),[e])}))},cancelValue:function(e){j((function(t){return t.filter((function(t){return t!==e}))}))}},l=p()(P,o()({},"".concat(P,"-rtl"),"rtl"===d),l),f.createElement("div",a()({className:l,style:i},e),f.createElement(m.Provider,{value:c},n))},r=f.memo(r),n(66)),g=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&!~t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)!~t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};(n=function(e){u()(n,e);var t=s()(n);function n(){var e;return c()(this,n),(e=t.apply(this,arguments)).saveCheckbox=function(t){e.rcCheckbox=t},e.renderCheckbox=function(t){var n=t.getPrefixCls,r=t.direction,c=(h=i()(e)).props,l=h.context,u=c.prefixCls,s=c.className,b=c.children,v=c.indeterminate,y=c.style,h=(t=c.onMouseEnter,c.onMouseLeave),m=g(c,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),O=l;l=n("checkbox",u),n=a()({},m);return O&&(n.onChange=function(){m.onChange&&m.onChange.apply(m,arguments),O.toggleOption({label:b,value:c.value})},n.name=O.name,n.checked=!!~O.value.indexOf(c.value),n.disabled=c.disabled||O.disabled),s=p()((u={},o()(u,"".concat(l,"-wrapper"),!0),o()(u,"".concat(l,"-rtl"),"rtl"===r),o()(u,"".concat(l,"-wrapper-checked"),n.checked),o()(u,"".concat(l,"-wrapper-disabled"),n.disabled),u),s),v=p()(o()({},"".concat(l,"-indeterminate"),v)),f.createElement("label",{className:s,style:y,onMouseEnter:t,onMouseLeave:h},f.createElement(d.a,a()({},n,{prefixCls:l,className:v,ref:e.saveCheckbox})),void 0!==b&&f.createElement("span",null,b))},e}return l()(n,[{key:"componentDidMount",value:function(){var e;null!==(e=this.context)&&void 0!==e&&e.registerValue(this.props.value),Object(O.a)("checked"in this.props||this.context||!("value"in this.props),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}},{key:"componentDidUpdate",value:function(e){var t=e.value,n=this.props.value;n!==t&&(null!==(e=this.context)&&void 0!==e&&e.cancelValue(t),null!==(t=this.context)&&void 0!==t&&t.registerValue(n))}},{key:"componentWillUnmount",value:function(){var e;null!==(e=this.context)&&void 0!==e&&e.cancelValue(this.props.value)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return f.createElement(h.a,null,this.renderCheckbox)}}]),n}(f.PureComponent)).__ANT_CHECKBOX=!0,n.defaultProps={indeterminate:!1},n.contextType=m;var x=n;x.Group=r,t.a=x},456:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=(r=n(10),n.n(r)),c=(r=n(111),n.n(r)),l=(r=n(43),n.n(r)),i=n(0),u=(r=n(4),n.n(r)),s=n(28),f=n(304),p=(r=n(73),n(256));(r=(Object(r.a)("top","middle","bottom","stretch"),Object(r.a)("start","end","center","space-around","space-between"),i.forwardRef((function(e,t){var n=e.prefixCls,r=e.justify,d=e.align,b=e.className,v=e.style,y=e.children,h=void 0===(g=e.gutter)?0:g,m=e.wrap,O=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&!~t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)!~t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),g=(x=i.useContext(s.b)).getPrefixCls,x=(e=x.direction,i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0})),C=(x=l()(x,2))[0],j=x[1],k=i.useRef(h);i.useEffect((function(){var e=p.a.subscribe((function(e){var t=k.current||0;(!Array.isArray(t)&&"object"===c()(t)||Array.isArray(t)&&("object"===c()(t[0])||"object"===c()(t[1])))&&j(e)}));return function(){return p.a.unsubscribe(e)}}),[]);var w;x=g("row",n),w=[0,0],(Array.isArray(h)?h:[h,0]).forEach((function(e,t){if("object"===c()(e))for(var n=0;n<p.b.length;n++){var r=p.b[n];if(C[r]&&void 0!==e[r]){w[t]=e[r];break}}else w[t]=e||0})),g=w,b=u()(x,(n={},a()(n,"".concat(x,"-no-wrap"),!1===m),a()(n,"".concat(x,"-").concat(r),r),a()(n,"".concat(x,"-").concat(d),d),a()(n,"".concat(x,"-rtl"),"rtl"===e),n),b),v=o()(o()(o()({},0<g[0]?{marginLeft:g[0]/-2,marginRight:g[0]/-2}:{}),0<g[1]?{marginTop:g[1]/-2,marginBottom:g[1]/2}:{}),v);return i.createElement(f.a.Provider,{value:{gutter:g,wrap:m}},i.createElement("div",o()({},O,{className:b,style:v,ref:t}),y))})))).displayName="Row",t.a=r},457:function(e,t,n){"use strict";var r=n(10),o=n.n(r),a=(r=n(1),n.n(r)),c=(r=n(111),n.n(r)),l=n(0),i=(r=n(4),n.n(r)),u=n(304),s=n(28),f=["xs","sm","md","lg","xl","xxl"];(n=l.forwardRef((function(e,t){var n=(C=l.useContext(s.b)).getPrefixCls,r=C.direction,p=(j=l.useContext(u.a)).gutter,d=j.wrap,b=e.prefixCls,v=e.span,y=e.order,h=e.offset,m=e.push,O=e.pull,g=e.className,x=e.children,C=e.flex,j=e.style,k=function(e,t){var n={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&!~t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)!~t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),w=n("col",b),P={};return f.forEach((function(t){var n={},l=e[t];"number"==typeof l?n.span=l:"object"===c()(l)&&(n=l||{}),delete k[t],P=a()(a()({},P),(l={},o()(l,"".concat(w,"-").concat(t,"-").concat(n.span),void 0!==n.span),o()(l,"".concat(w,"-").concat(t,"-order-").concat(n.order),n.order||0===n.order),o()(l,"".concat(w,"-").concat(t,"-offset-").concat(n.offset),n.offset||0===n.offset),o()(l,"".concat(w,"-").concat(t,"-push-").concat(n.push),n.push||0===n.push),o()(l,"".concat(w,"-").concat(t,"-pull-").concat(n.pull),n.pull||0===n.pull),o()(l,"".concat(w,"-rtl"),"rtl"===r),l))})),g=i()(w,(b={},o()(b,"".concat(w,"-").concat(v),void 0!==v),o()(b,"".concat(w,"-order-").concat(y),y),o()(b,"".concat(w,"-offset-").concat(h),h),o()(b,"".concat(w,"-push-").concat(m),m),o()(b,"".concat(w,"-pull-").concat(O),O),b),g,P),j=a()({},j),p&&(j=a()(a()(a()({},0<p[0]?{paddingLeft:p[0]/2,paddingRight:p[0]/2}:{}),0<p[1]?{paddingTop:p[1]/2,paddingBottom:p[1]/2}:{}),j)),C&&(j.flex="number"==typeof(p=C)?"".concat(p," ").concat(p," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(p)?"0 0 ".concat(p):p,"auto"!==C||!1!==d||j.minWidth||(j.minWidth=0)),l.createElement("div",a()({},k,{style:j,className:g,ref:t}),x)}))).displayName="Col",t.a=n}}]);