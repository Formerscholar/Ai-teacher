(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[14],{183:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,i=Array.isArray,c=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)"undefined"!==typeof e[r]&&(n[r]=e[r]);return n};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce((function(e,n){return e[n]=t[n],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],r=0;r<t.length;++r)for(var c=t[r],a=c.obj[c.prop],o=Object.keys(a),s=0;s<o.length;++s){var l=o[s],u=a[l];"object"===typeof u&&null!==u&&-1===n.indexOf(u)&&(t.push({obj:a,prop:l}),n.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(i(n)){for(var r=[],c=0;c<n.length;++c)"undefined"!==typeof n[c]&&r.push(n[c]);t.obj[t.prop]=r}}}(t),e},decode:function(e,t,n){var r=e.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(i){return r}},encode:function(e,t,n){if(0===e.length)return e;var r="string"===typeof e?e:String(e);if("iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var i="",a=0;a<r.length;++a){var o=r.charCodeAt(a);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?i+=r.charAt(a):o<128?i+=c[o]:o<2048?i+=c[192|o>>6]+c[128|63&o]:o<55296||o>=57344?i+=c[224|o>>12]+c[128|o>>6&63]+c[128|63&o]:(a+=1,o=65536+((1023&o)<<10|1023&r.charCodeAt(a)),i+=c[240|o>>18]+c[128|o>>12&63]+c[128|o>>6&63]+c[128|63&o])}return i},isBuffer:function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,n,c){if(!n)return t;if("object"!==typeof n){if(i(t))t.push(n);else{if(!t||"object"!==typeof t)return[t,n];(c&&(c.plainObjects||c.allowPrototypes)||!r.call(Object.prototype,n))&&(t[n]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(n);var o=t;return i(t)&&!i(n)&&(o=a(t,c)),i(t)&&i(n)?(n.forEach((function(n,i){if(r.call(t,i)){var a=t[i];a&&"object"===typeof a&&n&&"object"===typeof n?t[i]=e(a,n,c):t.push(n)}else t[i]=n})),t):Object.keys(n).reduce((function(t,i){var a=n[i];return r.call(t,i)?t[i]=e(t[i],a,c):t[i]=a,t}),o)}}},184:function(e,t,n){"use strict";var r=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},188:function(e,t,n){"use strict";var r=n(196),i=n(197),c=n(184);e.exports={formats:c,parse:i,stringify:r}},189:function(e,t,n){"use strict";n.d(t,"k",(function(){return a})),n.d(t,"j",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"l",(function(){return p})),n.d(t,"m",(function(){return h})),n.d(t,"n",(function(){return m})),n.d(t,"b",(function(){return j})),n.d(t,"i",(function(){return b})),n.d(t,"o",(function(){return v})),n.d(t,"h",(function(){return O})),n.d(t,"g",(function(){return y}));var r=n(187),i=n(188),c=n.n(i);function a(e){return Object(r.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function o(e){return Object(r.a)({url:"/getExercisesDetail",method:"GET",params:e})}function s(e){return Object(r.a)({url:"/addExamBasket",method:"POST",data:c.a.stringify(e)})}function l(e){return Object(r.a)({url:"/delExamBasket",method:"POST",data:c.a.stringify(e)})}function u(e){return Object(r.a)({url:"/basketDetail",method:"GET",params:e})}function d(e){return Object(r.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function f(){return Object(r.a)({url:"/clearExamBasket",method:"GET"})}function p(e){return Object(r.a)({url:"/getPapersExercises",method:"GET",params:e})}function h(e){return Object(r.a)({url:"/getPapersList",method:"GET",params:e})}function m(e){return Object(r.a)({url:"/paperToBased",method:"GET",params:e})}function j(e){return Object(r.a)({url:"/addPapers",method:"POST",data:c.a.stringify(e)})}function b(e){return Object(r.a)({url:"/editPapers",method:"POST",data:c.a.stringify(e)})}function v(e){return Object(r.a)({url:"/paperToBasket",method:"GET",params:e})}function O(e){return Object(r.a)({url:"/editBasketSort",method:"GET",params:e})}function y(e){return Object(r.a)({url:"/editBasketScore",method:"GET",params:e})}},193:function(e,t,n){"use strict";n(206);var r=n(207),i=n(9),c=n(0);n(194);function a(e){var t=e.children,n=e.isOpen,c=void 0!==n&&n,a=e.closeClick,o=e.title,s=void 0===o?"":o,l=e.width,u=void 0===l?"41.71rem":l,d=e.height,f=void 0===d?"23.5rem":d,p=f.split("rem")[0]-4.64;return Object(i.jsx)(r.a,{className:"T_modelbox",title:s,visible:c,onCancel:a,footer:null,centered:!0,width:u,height:f,bodyStyle:{height:p+"rem"},closeIcon:Object(i.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(c.memo)(a)},194:function(e,t,n){},196:function(e,t,n){"use strict";var r=n(183),i=n(184),c=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},o=Array.isArray,s=Array.prototype.push,l=function(e,t){s.apply(e,o(t)?t:[t])},u=Date.prototype.toISOString,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,formatter:i.formatters[i.default],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},f=function e(t,n,i,c,a,s,u,f,p,h,m,j,b){var v=t;if("function"===typeof u?v=u(n,v):v instanceof Date?v=h(v):"comma"===i&&o(v)&&(v=v.join(",")),null===v){if(c)return s&&!j?s(n,d.encoder,b):n;v=""}if("string"===typeof v||"number"===typeof v||"boolean"===typeof v||r.isBuffer(v))return s?[m(j?n:s(n,d.encoder,b))+"="+m(s(v,d.encoder,b))]:[m(n)+"="+m(String(v))];var O,y=[];if("undefined"===typeof v)return y;if(o(u))O=u;else{var x=Object.keys(v);O=f?x.sort(f):x}for(var g=0;g<O.length;++g){var N=O[g];a&&null===v[N]||(o(v)?l(y,e(v[N],"function"===typeof i?i(n,N):n,i,c,a,s,u,f,p,h,m,j,b)):l(y,e(v[N],n+(p?"."+N:"["+N+"]"),i,c,a,s,u,f,p,h,m,j,b)))}return y};e.exports=function(e,t){var n,r=e,s=function(e){if(!e)return d;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||d.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=i.default;if("undefined"!==typeof e.format){if(!c.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var r=i.formatters[n],a=d.filter;return("function"===typeof e.filter||o(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?d.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:d.encode,encoder:"function"===typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:a,formatter:r,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}(t);"function"===typeof s.filter?r=(0,s.filter)("",r):o(s.filter)&&(n=s.filter);var u,p=[];if("object"!==typeof r||null===r)return"";u=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var h=a[u];n||(n=Object.keys(r)),s.sort&&n.sort(s.sort);for(var m=0;m<n.length;++m){var j=n[m];s.skipNulls&&null===r[j]||l(p,f(r[j],j,h,s.strictNullHandling,s.skipNulls,s.encode?s.encoder:null,s.filter,s.sort,s.allowDots,s.serializeDate,s.formatter,s.encodeValuesOnly,s.charset))}var b=p.join(s.delimiter),v=!0===s.addQueryPrefix?"?":"";return s.charsetSentinel&&("iso-8859-1"===s.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),b.length>0?v+b:""}},197:function(e,t,n){"use strict";var r=n(183),i=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},o=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(r),o=a?r.slice(0,a.index):r,s=[];if(o){if(!n.plainObjects&&i.call(Object.prototype,o)&&!n.allowPrototypes)return;s.push(o)}for(var l=0;null!==(a=c.exec(r))&&l<n.depth;){if(l+=1,!n.plainObjects&&i.call(Object.prototype,a[1].slice(1,-1))&&!n.allowPrototypes)return;s.push(a[1])}return a&&s.push("["+r.slice(a.index)+"]"),function(e,t,n){for(var r=t,i=e.length-1;i>=0;--i){var c,a=e[i];if("[]"===a&&n.parseArrays)c=[].concat(r);else{c=n.plainObjects?Object.create(null):{};var o="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,s=parseInt(o,10);n.parseArrays||""!==o?!isNaN(s)&&a!==o&&String(s)===o&&s>=0&&n.parseArrays&&s<=n.arrayLimit?(c=[])[s]=r:c[o]=r:c={0:r}}r=c}return r}(s,t,n)}};e.exports=function(e,t){var n=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?c.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:c.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:c.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:c.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:c.comma,decoder:"function"===typeof e.decoder?e.decoder:c.decoder,delimiter:"string"===typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:c.delimiter,depth:"number"===typeof e.depth?e.depth:c.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:c.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:c.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:c.strictNullHandling}}(t);if(""===e||null===e||"undefined"===typeof e)return n.plainObjects?Object.create(null):{};for(var s="string"===typeof e?function(e,t){var n,o={},s=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,l=t.parameterLimit===1/0?void 0:t.parameterLimit,u=s.split(t.delimiter,l),d=-1,f=t.charset;if(t.charsetSentinel)for(n=0;n<u.length;++n)0===u[n].indexOf("utf8=")&&("utf8=%E2%9C%93"===u[n]?f="utf-8":"utf8=%26%2310003%3B"===u[n]&&(f="iso-8859-1"),d=n,n=u.length);for(n=0;n<u.length;++n)if(n!==d){var p,h,m=u[n],j=m.indexOf("]="),b=-1===j?m.indexOf("="):j+1;-1===b?(p=t.decoder(m,c.decoder,f),h=t.strictNullHandling?null:""):(p=t.decoder(m.slice(0,b),c.decoder,f),h=t.decoder(m.slice(b+1),c.decoder,f)),h&&t.interpretNumericEntities&&"iso-8859-1"===f&&(h=a(h)),h&&t.comma&&h.indexOf(",")>-1&&(h=h.split(",")),i.call(o,p)?o[p]=r.combine(o[p],h):o[p]=h}return o}(e,n):e,l=n.plainObjects?Object.create(null):{},u=Object.keys(s),d=0;d<u.length;++d){var f=u[d],p=o(f,s[f],n);l=r.merge(l,p,n)}return r.compact(l)}},203:function(e,t,n){"use strict";var r=n(185),i=n.n(r),c=(n(191),n(64)),a=n(186),o=n(190),s=n(9),l=n(0),u=(n(204),n(66)),d=n(29),f=n(189);function p(e){var t,n=e.volumeTopicCount,r=e.props,u=e.settopicData,d=r.history,p=Object(l.useState)({}),h=Object(o.a)(p,2),m=h[0],j=h[1],b=Object(l.useState)(!1),v=Object(o.a)(b,2),O=v[0],y=v[1];Object(l.useEffect)((function(){return g(),function(){}}),[n]);var x=function(){var e=Object(a.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)();case 2:t=e.sent,n=t.code,r=t.msg,200===n?(c.b.success(r),g()):c.b.error(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(a.a)(i.a.mark((function e(){var t,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)();case 2:t=e.sent,n=t.code,r=t.data,200==n&&(j(r),c=null===r||void 0===r?void 0:r.basketCount,u(c));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(a.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(f.f)({type:t});case 3:n=e.sent,r=n.code,a=n.msg,200===r?(g(),c.b.success(a)):c.b.error(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{id:"AI_floatBox",style:{backgroundColor:O&&"#BBBBBB"},children:[Object(s.jsxs)("div",{className:"top_float_warp",onClick:function(){d.push("/main/mypaper")},children:[Object(s.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(s.jsxs)("span",{className:"count",children:[Object(s.jsx)("em",{children:n}),"/40"]}),Object(s.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(s.jsx)("img",{className:"arrow_icon",src:O?"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon.png":"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon",onClick:function(){y(!O)}}),O?Object(s.jsxs)("div",{className:"unfold",children:[Object(s.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(s.jsx)("span",{children:null===m||void 0===m?void 0:m.basketCount}),"\uff09"]}),Object(s.jsx)("div",{className:"typeList",children:null===m||void 0===m||null===(t=m.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(s.jsxs)("div",{className:"items",children:[Object(s.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(s.jsxs)("div",{className:"numdel",children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(s.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return N(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(s.jsx)("div",{className:"empty",onClick:x,children:"\u6e05\u7a7a\u8bd5\u9898"})]}):""]})}t.a=Object(u.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var n={type:d.a,value:t};e(n)},subtopicData:function(t){var n={type:d.e,value:t};e(n)},settopicData:function(t){var n={type:d.d,value:t};e(n)}}}))(Object(l.memo)(p))},204:function(e,t,n){},423:function(e,t,n){},495:function(e,t,n){"use strict";n.r(t);n(195);var r=n(192),i=(n(200),n(201)),c=n(185),a=n.n(c),o=(n(191),n(64)),s=n(186),l=n(190),u=n(9),d=n(0),f=(n(423),n(189)),p=n(198),h=n(66),m=n(29),j=n(203),b=n(193);function v(e){var t,n,c,h,m,v,O,y,x,g,N,w,_,k=e.subtopicData,C=e.history,E=e.location,S=e.volumeTopicCount,T=e.addtopicData,D=e.homeInfo,P=Object(d.useState)({}),B=Object(l.a)(P,2),L=B[0],A=B[1],H=Object(d.useState)(1),I=Object(l.a)(H,2),G=I[0],Q=I[1],R=Object(d.useState)(!1),F=Object(l.a)(R,2),V=F[0],z=F[1],M=Object(d.useState)(""),q=Object(l.a)(M,2),U=q[0],J=q[1];Object(d.useEffect)((function(){return K(G),function(){}}),[S]);var K=function(){var e=Object(s.a)(a.a.mark((function e(){var t,n,r,i,c,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:1,e.next=3,Object(f.j)({id:Object(p.h)(E.search).id,page:t});case 3:n=e.sent,r=n.code,i=n.data,c=n.msg,200===r?A(i):o.b.error(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)({exercises_id:t});case 2:n=e.sent,r=n.code,i=n.msg,200==r?(o.b.success(i),k(1)):(J(i),z(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(a.a.mark((function e(t,n){var r,i,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)({exercises_id:[t]});case 2:r=e.sent,i=r.code,c=r.msg,200==i?(o.b.success(c),T(1)):(J(c),z(!0));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){z(!1)};return Object(u.jsxs)("div",{id:"Questiondetails",children:[Object(u.jsxs)(i.a,{className:"bread",separator:Object(u.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(u.jsxs)(i.a.Item,{className:"breaditem",color:"textPrimary",onClick:function(e){e.preventDefault(),C.push("/main/knowledge")},children:[Object(u.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position"}),"\u77e5\u8bc6\u70b9\u7ec4\u5377"]}),Object(u.jsx)(i.a.Item,{className:"breaditem",color:"textPrimary",children:"\u8bd5\u9898\u8be6\u60c5"})]}),Object(u.jsx)("div",{className:"content_body",children:Object(u.jsxs)("div",{className:"bor_warp",children:[Object(u.jsx)("div",{className:"content_all",dangerouslySetInnerHTML:{__html:null===L||void 0===L||null===(t=L.exercise)||void 0===t?void 0:t.content_all}}),Object(u.jsxs)("div",{className:"Tests",children:[Object(u.jsx)("span",{className:"title",children:"\u3010\u8003\u70b9\u3011"}),"\u4e0d\u7b49\u5f0f\u7ec4\u7684\u89e3\u96c6"]}),Object(u.jsxs)("div",{className:"answer",children:[Object(u.jsx)("span",{className:"title",children:"\u3010\u7b54\u6848\u3011"}),Object(u.jsx)("span",{dangerouslySetInnerHTML:{__html:null===L||void 0===L||null===(n=L.exercise)||void 0===n?void 0:n.answer}})]}),Object(u.jsxs)("div",{className:"Parse",children:[Object(u.jsx)("span",{className:"title",children:"\u3010\u89e3\u6790\u3011"}),Object(u.jsx)("span",{dangerouslySetInnerHTML:{__html:null===L||void 0===L||null===(c=L.exercise)||void 0===c?void 0:c.analysis}})]}),Object(u.jsxs)("div",{className:"bot_warp",children:[Object(u.jsxs)("div",{className:"left_box",children:[Object(u.jsxs)("div",{className:"grade",children:["\u5e74\u7ea7\uff1a",null===L||void 0===L||null===(h=L.exercise)||void 0===h||null===(m=h.get_grade)||void 0===m?void 0:m.name]}),Object(u.jsxs)("div",{className:"type",children:["\u9898\u578b\uff1a",null===L||void 0===L||null===(v=L.exercise)||void 0===v||null===(O=v.get_question_category)||void 0===O?void 0:O.title]}),Object(u.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",null===D||void 0===D||null===(y=D.teacher)||void 0===y?void 0:y.level[null===L||void 0===L||null===(x=L.exercise)||void 0===x?void 0:x.level]]}),Object(u.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(p.g)(1e3*(null===L||void 0===L||null===(g=L.exercise)||void 0===g?void 0:g.update_time))]})]}),Object(u.jsx)("div",{className:"right_box",children:(null===L||void 0===L||null===(N=L.exercise)||void 0===N?void 0:N.is_basket)?Object(u.jsxs)(r.a,{className:"sub",variant:"contained",onClick:function(){var e;return $(null===L||void 0===L||null===(e=L.exercise)||void 0===e?void 0:e.id)},children:[Object(u.jsx)("em",{children:"-"}),"\u79fb\u9664"]}):Object(u.jsxs)(r.a,{className:"add",variant:"contained",onClick:function(){var e,t;return W(null===L||void 0===L||null===(e=L.exercise)||void 0===e?void 0:e.id,null===L||void 0===L||null===(t=L.exercise)||void 0===t?void 0:t.type)},children:[Object(u.jsx)("em",{children:"+"}),"\u7ec4\u5377"]})})]})]})}),Object(u.jsxs)("div",{className:"samelist",children:[Object(u.jsxs)("div",{className:"top_box",children:[Object(u.jsx)("div",{className:"left_warp",children:"\u540c\u7c7b\u578b\u9898\u76ee"}),Object(u.jsxs)("div",{className:"right_warp",onClick:function(){console.log("batchClick");var e=G;e++,Q(e),K(e)},children:[Object(u.jsx)("img",{className:"refsh_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/refsh_icon.png",alt:"refsh_icon"}),"\u6362\u4e00\u6279"]})]}),Object(u.jsx)("div",{className:"body_box",children:null===L||void 0===L||null===(w=L.exerciseList)||void 0===w||null===(_=w.data)||void 0===_?void 0:_.map((function(e){var t,n;return Object(u.jsxs)("div",{className:"items",children:[Object(u.jsx)("div",{className:"top_title",children:Object(u.jsxs)("div",{className:"info_class",children:[Object(u.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(u.jsx)("span",{children:null===D||void 0===D||null===(t=D.teacher)||void 0===t?void 0:t.level[null===e||void 0===e?void 0:e.level]})]}),Object(u.jsxs)("div",{className:"question",children:["\u9898\u578b\uff1a",null===e||void 0===e||null===(n=e.get_question_category)||void 0===n?void 0:n.title]})]})}),Object(u.jsx)("div",{className:"cet_body",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.content_all}}),Object(u.jsxs)("div",{className:"bot_btns",children:[Object(u.jsx)("div",{className:"left_box_warp",children:Object(u.jsxs)("div",{className:"update_time",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(p.g)(1e3*(null===e||void 0===e?void 0:e.update_time))]})}),Object(u.jsxs)("div",{className:"right_box_warp",children:[Object(u.jsxs)("div",{className:"answers",children:[Object(u.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(u.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(u.jsxs)("div",{className:"details",onClick:function(){return t=null===e||void 0===e?void 0:e.id,void K(t);var t},children:[Object(u.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(u.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),(null===e||void 0===e?void 0:e.is_basket)?Object(u.jsxs)(r.a,{className:"sub",variant:"contained",onClick:function(){return $(null===e||void 0===e?void 0:e.id)},children:[Object(u.jsx)("em",{children:"-"}),"\u79fb\u9664"]}):Object(u.jsxs)(r.a,{className:"add",variant:"contained",onClick:function(){return W(null===e||void 0===e?void 0:e.id,null===e||void 0===e?void 0:e.type)},children:[Object(u.jsx)("em",{children:"+"}),"\u7ec4\u5377"]})]})]})]},null===e||void 0===e?void 0:e.id)}))})]}),Object(u.jsx)(j.a,{props:e}),Object(u.jsx)(b.a,{isOpen:V,title:" ",closeClick:X,width:"41.71rem",height:"22.14rem",children:Object(u.jsxs)("div",{id:"tmodelbox",children:[Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("img",{className:"notice",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/notice.png",alt:"notice"}),Object(u.jsx)("span",{children:"\u64cd\u4f5c\u5931\u8d25"})]}),Object(u.jsx)("div",{className:"body_text",children:U}),Object(u.jsx)(r.a,{type:"primary",className:"btn",onClick:X,children:"\u6211\u77e5\u9053\u4e86"})]})})]})}t.default=Object(h.b)((function(e){return{homeInfo:e.homeInfo,volumeTopicCount:e.volumeTopicCount}}),(function(e){return{setData:function(t){var n={type:m.c,value:t};e(n)},addtopicData:function(t){var n={type:m.a,value:t};e(n)},subtopicData:function(t){var n={type:m.e,value:t};e(n)},settopicData:function(t){var n={type:m.d,value:t};e(n)}}}))(Object(d.memo)(v))}}]);