(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[18],{191:function(e,t,n){"use strict";n.d(t,"p",(function(){return i})),n.d(t,"o",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"d",(function(){return j})),n.d(t,"q",(function(){return m})),n.d(t,"r",(function(){return b})),n.d(t,"s",(function(){return h})),n.d(t,"b",(function(){return f})),n.d(t,"j",(function(){return p})),n.d(t,"m",(function(){return O})),n.d(t,"t",(function(){return v})),n.d(t,"i",(function(){return x})),n.d(t,"h",(function(){return g})),n.d(t,"f",(function(){return y})),n.d(t,"k",(function(){return N})),n.d(t,"l",(function(){return w})),n.d(t,"n",(function(){return _}));var c=n(189),r=n(190),a=n.n(r);function i(e){return Object(c.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function s(e){return Object(c.a)({url:"/getExercisesDetail",method:"GET",params:e})}function o(e){return Object(c.a)({url:"/addExamBasket",method:"POST",data:a.a.stringify(e)})}function u(e){return Object(c.a)({url:"/delExamBasket",method:"POST",data:a.a.stringify(e)})}function l(e){return Object(c.a)({url:"/basketDetail",method:"GET",params:e})}function d(e){return Object(c.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function j(){return Object(c.a)({url:"/clearExamBasket",method:"GET"})}function m(e){return Object(c.a)({url:"/getPapersExercises",method:"GET",params:e})}function b(e){return Object(c.a)({url:"/getPapersList",method:"GET",params:e})}function h(e){return Object(c.a)({url:"/paperToBased",method:"POST",data:a.a.stringify(e)})}function f(e){return Object(c.a)({url:"/addPapers",method:"POST",data:a.a.stringify(e)})}function p(e){return Object(c.a)({url:"/editPapers",method:"POST",data:a.a.stringify(e)})}function O(e){return Object(c.a)({url:"/getDetailPapers",method:"GET",params:e})}function v(e){return Object(c.a)({url:"/paperToBasket",method:"GET",params:e})}function x(e){return Object(c.a)({url:"/editBasketSort",method:"GET",params:e})}function g(e){return Object(c.a)({url:"/editBasketScore",method:"GET",params:e})}function y(e){return Object(c.a)({url:"/delTeacherExam",method:"GET",params:e})}function N(e){return Object(c.a)({url:"/editTypeBasketSort",method:"GET",params:e})}function w(e){return Object(c.a)({url:"/getChapterExercises",method:"GET",params:e})}function _(e){return Object(c.a)({url:"/getExerciseAnswer",method:"GET",params:e})}},204:function(e,t,n){"use strict";n(224);var c=n(228),r=n(7),a=n(0);n(205);function i(e){var t=e.children,n=e.isOpen,a=void 0!==n&&n,i=e.closeClick,s=e.title,o=void 0===s?"":s,u=e.width,l=void 0===u?"41.71rem":u,d=e.height,j=void 0===d?"23.5rem":d,m=j.split("rem")[0]-4.64;return Object(r.jsx)(c.a,{className:"T_modelbox",title:o,visible:a,onCancel:i,footer:null,centered:!0,width:l,height:j,bodyStyle:{height:m+"rem"},closeIcon:Object(r.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(a.memo)(i)},205:function(e,t,n){},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(0);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],c=!0,r=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(c=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);c=!0);}catch(o){r=!0,a=o}finally{try{c||null==s.return||s.return()}finally{if(r)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function i(e,t){var n=t||{},a=n.defaultValue,i=n.value,s=n.onChange,o=n.postState,u=r(c.useState((function(){return void 0!==i?i:void 0!==a?"function"===typeof a?a():a:"function"===typeof e?e():e})),2),l=u[0],d=u[1],j=void 0!==i?i:l;o&&(j=o(j));var m=c.useRef(!0);return c.useEffect((function(){m.current?m.current=!1:void 0===i&&d(i)}),[i]),[j,function(e){d(e),j!==e&&s&&s(e,j)}]}},217:function(e,t,n){"use strict";var c=n(12),r=n(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=c(n(218)),s=c(n(18)),o=function(e,t){return a.createElement(s.default,Object.assign({},e,{ref:t,icon:i.default}))};o.displayName="SearchOutlined";var u=a.forwardRef(o);t.default=u},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"}},232:function(e,t,n){"use strict";var c;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(c=n(217))&&c.__esModule?c:{default:c};t.default=r,e.exports=r},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(0);function r(e,t,n){var r=c.useRef({});return"value"in r.current&&!n(r.current.condition,t)||(r.current.value=e(),r.current.condition=t),r.current.value}},416:function(e,t,n){},490:function(e,t,n){"use strict";n.r(t);n(219);var c=n(220),r=(n(279),n(288)),a=(n(287),n(281)),i=(n(185),n(184)),s=(n(214),n(216)),o=(n(195),n(196)),u=n(187),l=n.n(u),d=(n(192),n(64)),j=n(188),m=n(183),b=n(7),h=n(0),f=(n(416),n(191)),p=n(193),O=n(204),v=n(215),x=n(248),g=n.n(x);function y(e){var t,n,u=e.history,x=Object(h.useState)({}),y=Object(m.a)(x,2),N=y[0],w=y[1],_=Object(h.useState)(!1),k=Object(m.a)(_,2),S=k[0],C=k[1],E=Object(h.useState)(!1),T=Object(m.a)(E,2),G=T[0],P=T[1],A=Object(h.useState)(!1),B=Object(m.a)(A,2),D=B[0],M=B[1],I=Object(h.useState)(!1),z=Object(m.a)(I,2),R=z[0],L=z[1],J=Object(h.useState)(0),V=Object(m.a)(J,2),q=V[0],K=V[1],U=Object(h.useState)(Object(p.f)(new Date,!0)),X=Object(m.a)(U,2),$=X[0],F=X[1],H=Object(h.useState)(0),Q=Object(m.a)(H,2),W=Q[0],Y=Q[1],Z=Object(h.useState)(""),ee=Object(m.a)(Z,2),te=ee[0],ne=ee[1],ce=Object(h.useState)("doc"),re=Object(m.a)(ce,2),ae=re[0],ie=re[1],se=Object(h.useState)("A4"),oe=Object(m.a)(se,2),ue=oe[0],le=oe[1],de=Object(h.useState)(""),je=Object(m.a)(de,2),me=je[0],be=je[1],he=Object(h.useState)(0),fe=Object(m.a)(he,2),pe=fe[0],Oe=fe[1],ve=Object(h.useState)(0),xe=Object(m.a)(ve,2),ge=xe[0],ye=xe[1];Object(h.useEffect)((function(){return Ne(),function(){}}),[]);var Ne=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,c,r,a,i=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",e.next=3,Object(f.r)({title:t});case 3:n=e.sent,c=n.code,r=n.data,a=n.msg,200===c?w(r):d.b.error(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var we=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Oe(t),M(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.t)({id:pe});case 2:t=e.sent,n=t.code,c=t.msg,200===n?u.push("/mypaper?id=".concat(pe)):d.b.error(c),M(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.f)({id:ge});case 2:t=e.sent,n=t.code,c=t.msg,200===n?(Ne(),d.b.success(c)):d.b.error(c),L(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("".concat(v.e,"/teacher/organizingPapers?paper_type=").concat(ue,"&exam_id=").concat(W,"&extension=").concat(ae)),P(!1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.s)({id:q,show_time:$});case 2:t=e.sent,n=t.code,c=t.msg,200===n?d.b.success(c):d.b.error(c),C(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{id:"Mypaperlist",children:[Object(b.jsxs)(o.a,{separator:Object(b.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(b.jsxs)(o.a.Item,{onClick:function(e){e.preventDefault(),u.push("/index")},style:{cursor:"pointer",color:"#222"},children:[Object(b.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(b.jsx)(o.a.Item,{style:{cursor:"pointer",color:"#222"},children:"\u6211\u7684\u8bd5\u5377"})]}),Object(b.jsxs)("div",{className:"grouplist",children:[Object(b.jsxs)("div",{className:"listhead",children:[Object(b.jsx)("div",{className:"left_text",children:"\u6211\u7684\u8bd5\u5377\u5217\u8868"}),Object(b.jsxs)("div",{className:"right_warp",children:[Object(b.jsx)(s.a,{className:"timeSelect",value:me,onChange:function(e){var t=e.target.value;be(t)},placeholder:"\u8bd5\u5377"}),Object(b.jsx)(i.a,{type:"primary",className:"search",onClick:function(){Ne(me)},children:"\u641c\u7d22"})]})]}),Object(b.jsx)("div",{className:"listbody",children:null===N||void 0===N||null===(t=N.examList)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.map((function(e){return Object(b.jsxs)("div",{className:"items",children:[Object(b.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return t=null===e||void 0===e?void 0:e.id,ye(t),void L(!0);var t}}),Object(b.jsxs)("div",{className:"left_info",onClick:function(){return t=null===e||void 0===e?void 0:e.id,void u.push("/mypaper/detail?id=".concat(t));var t},children:[Object(b.jsx)("img",{className:"paper_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/paper_icon.png",alt:"paper_icon"}),Object(b.jsxs)("div",{className:"left_info_text",children:[Object(b.jsx)("div",{className:"top_text",children:null===e||void 0===e?void 0:e.title}),Object(b.jsx)("div",{className:"bot_image_text",children:Object(b.jsxs)("div",{className:"groupOftimebox",children:[Object(b.jsx)("img",{className:"groupOftime",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/groupOftime.png",alt:"groupOftime"}),"\u7ec4\u5377\u65f6\u95f4\uff1a",Object(p.f)(1e3*(null===e||void 0===e?void 0:e.add_time))]})})]})]}),Object(b.jsxs)("div",{className:"right_btns",children:[Object(b.jsxs)(i.a,{className:"download",type:"primary",onClick:function(){return t=null===e||void 0===e?void 0:e.id,n=null===e||void 0===e?void 0:e.title,Y(t),ne(n),void P(!0);var t,n},children:[Object(b.jsx)("img",{className:"down_btn",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down_btn.png",alt:"down_btn"}),"\u4e0b\u8f7d"]}),Object(b.jsx)(i.a,{className:"reedit",onClick:function(){return t=null===e||void 0===e?void 0:e.id,C(!0),void K(t);var t},children:"\u540c\u6b65\u6821\u672c\u8bd5\u5377"}),Object(b.jsx)(i.a,{className:"reedit",onClick:function(){return we(null===e||void 0===e?void 0:e.id)},children:"\u91cd\u65b0\u7f16\u8f91"})]})]},null===e||void 0===e?void 0:e.id)}))})]}),Object(b.jsx)(O.a,{isOpen:S,title:"\u3010\u540c\u6b65\u3011",closeClick:function(){C(!1)},width:"41.71rem",height:"19.93rem",children:Object(b.jsxs)("div",{id:"tmodelbox",children:[Object(b.jsx)("div",{className:"title",children:"\u9009\u62e9\u4e0a\u7ebf\u65f6\u95f4"}),Object(b.jsx)(r.b,{className:"Space",direction:"vertical",size:35,children:Object(b.jsx)(a.a,{showTime:!0,onOk:function(e){F(Object(p.f)(e,!0))},defaultValue:g()(new Date)})}),Object(b.jsx)(i.a,{type:"primary",className:"btn",onClick:Ce,children:"\u786e\u5b9a"})]})}),Object(b.jsx)(O.a,{isOpen:G,title:"\u3010\u4e0b\u8f7d\u786e\u8ba4\u3011",closeClick:function(){P(!1)},width:"62.64rem",height:"31.57rem",children:Object(b.jsxs)("div",{id:"tmodelbox",className:"downbox",children:[Object(b.jsx)("div",{className:"title",children:te}),Object(b.jsxs)("div",{className:"body_text",children:[Object(b.jsxs)("div",{className:"fileformt",children:[Object(b.jsx)("span",{className:"title_txt",children:"\u6587\u4ef6\u683c\u5f0f:"}),Object(b.jsxs)(c.a.Group,{onChange:function(e){ie(e.target.value)},value:ae,children:[Object(b.jsx)(c.a,{className:"itemradio itemradios",style:{display:"block"},value:"doc",children:Object(b.jsxs)("span",{className:"context",children:[Object(b.jsx)("span",{className:"span",children:"DOC"}),Object(b.jsx)("span",{className:"tip",children:"doc\u683c\u5f0f\u6587\u6863\uff0c\u516c\u5f0f\u4e3a\u56fe\u7247\uff0c\u4e0d\u53ef\u7f16\u8f91\u516c\u5f0f"})]})}),Object(b.jsx)(c.a,{className:"itemradio itemradios",style:{display:"block"},value:"docx",children:Object(b.jsxs)("span",{className:"context",children:[Object(b.jsx)("span",{className:"span",children:"DOCX"}),Object(b.jsx)("span",{className:"tip",children:"docx\u683c\u5f0f\u6587\u6863\uff0c\u53ef\u7f16\u8f91\u516c\u5f0f"})]})})]})]}),Object(b.jsxs)("div",{className:"fileformt",children:[Object(b.jsx)("span",{className:"title_txt",children:"\u7eb8\u5f20\u5927\u5c0f:"}),Object(b.jsxs)(c.a.Group,{onChange:function(e){le(e.target.value)},value:ue,children:[Object(b.jsx)(c.a,{className:"itemradio",value:"A4",children:"A4"}),Object(b.jsx)(c.a,{className:"itemradio",value:"A3",children:"A3\uff08\u53cc\u680f\uff09"}),Object(b.jsx)(c.a,{className:"itemradio",value:"B4",children:"B4\uff08\u53cc\u680f\uff09"})]})]})]}),Object(b.jsx)(i.a,{type:"primary",className:"btn",onClick:Se,children:"\u786e\u5b9a"})]})}),Object(b.jsx)(O.a,{isOpen:D,title:"\u3010\u6e29\u99a8\u63d0\u793a\u3011",closeClick:function(){M(!1)},width:"41.71rem",height:"19.93rem",children:Object(b.jsxs)("div",{id:"tmodelbox",children:[Object(b.jsx)("div",{className:"title",children:"\u91cd\u65b0\u7f16\u8f91\u5c06\u6e05\u7a7a\u8bd5\u9898\u7bee"}),Object(b.jsxs)("div",{className:"btns",children:[Object(b.jsx)(i.a,{type:"primary",className:"btn",onClick:_e,children:"\u786e\u5b9a"}),Object(b.jsx)(i.a,{className:"cancel",onClick:function(){M(!1)},children:"\u53d6\u6d88"})]})]})}),Object(b.jsx)(O.a,{isOpen:R,title:"\u3010\u6e29\u99a8\u63d0\u793a\u3011",closeClick:function(){L(!1)},width:"41.71rem",height:"19.93rem",children:Object(b.jsxs)("div",{id:"tmodelbox",children:[Object(b.jsx)("div",{className:"title",children:"\u662f\u5426\u5220\u9664\u6b64\u8bd5\u5377?"}),Object(b.jsxs)("div",{className:"btns",children:[Object(b.jsx)(i.a,{type:"primary",className:"btn",onClick:ke,children:"\u786e\u5b9a"}),Object(b.jsx)(i.a,{className:"cancel",onClick:function(){L(!1)},children:"\u53d6\u6d88"})]})]})})]})}t.default=Object(h.memo)(y)}}]);