(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[15],{183:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,c=Array.isArray,s=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var s=t[n],i=s.obj[s.prop],a=Object.keys(i),o=0;o<a.length;++o){var l=a[o],d=i[l];"object"===typeof d&&null!==d&&-1===r.indexOf(d)&&(t.push({obj:i,prop:l}),r.push(d))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(c(r)){for(var n=[],s=0;s<r.length;++s)"undefined"!==typeof r[s]&&n.push(r[s]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(c){return n}},encode:function(e,t,r){if(0===e.length)return e;var n="string"===typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var c="",i=0;i<n.length;++i){var a=n.charCodeAt(i);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?c+=n.charAt(i):a<128?c+=s[a]:a<2048?c+=s[192|a>>6]+s[128|63&a]:a<55296||a>=57344?c+=s[224|a>>12]+s[128|a>>6&63]+s[128|63&a]:(i+=1,a=65536+((1023&a)<<10|1023&n.charCodeAt(i)),c+=s[240|a>>18]+s[128|a>>12&63]+s[128|a>>6&63]+s[128|63&a])}return c},isBuffer:function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,s){if(!r)return t;if("object"!==typeof r){if(c(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(s&&(s.plainObjects||s.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var a=t;return c(t)&&!c(r)&&(a=i(t,s)),c(t)&&c(r)?(r.forEach((function(r,c){if(n.call(t,c)){var i=t[c];i&&"object"===typeof i&&r&&"object"===typeof r?t[c]=e(i,r,s):t.push(r)}else t[c]=r})),t):Object.keys(r).reduce((function(t,c){var i=r[c];return n.call(t,c)?t[c]=e(t[c],i,s):t[c]=i,t}),a)}}},184:function(e,t,r){"use strict";var n=String.prototype.replace,c=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,c,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},191:function(e,t,r){"use strict";var n=r(196),c=r(197),s=r(184);e.exports={formats:s,parse:c,stringify:n}},192:function(e,t,r){"use strict";r.d(t,"k",(function(){return i})),r.d(t,"j",(function(){return a})),r.d(t,"a",(function(){return o})),r.d(t,"e",(function(){return l})),r.d(t,"c",(function(){return d})),r.d(t,"f",(function(){return u})),r.d(t,"d",(function(){return f})),r.d(t,"l",(function(){return p})),r.d(t,"m",(function(){return j})),r.d(t,"n",(function(){return m})),r.d(t,"b",(function(){return h})),r.d(t,"i",(function(){return b})),r.d(t,"o",(function(){return O})),r.d(t,"h",(function(){return v})),r.d(t,"g",(function(){return x}));var n=r(189),c=r(191),s=r.n(c);function i(e){return Object(n.a)({url:"/getKnowledgeExercises",method:"GET",params:e})}function a(e){return Object(n.a)({url:"/getExercisesDetail",method:"GET",params:e})}function o(e){return Object(n.a)({url:"/addExamBasket",method:"POST",data:s.a.stringify(e)})}function l(e){return Object(n.a)({url:"/delExamBasket",method:"POST",data:s.a.stringify(e)})}function d(e){return Object(n.a)({url:"/basketDetail",method:"GET",params:e})}function u(e){return Object(n.a)({url:"/delTypeExamBasket",method:"GET",params:e})}function f(){return Object(n.a)({url:"/clearExamBasket",method:"GET"})}function p(e){return Object(n.a)({url:"/getPapersExercises",method:"GET",params:e})}function j(e){return Object(n.a)({url:"/getPapersList",method:"GET",params:e})}function m(e){return Object(n.a)({url:"/paperToBased",method:"POST",data:s.a.stringify(e)})}function h(e){return Object(n.a)({url:"/addPapers",method:"POST",data:s.a.stringify(e)})}function b(e){return Object(n.a)({url:"/editPapers",method:"POST",data:s.a.stringify(e)})}function O(e){return Object(n.a)({url:"/paperToBasket",method:"GET",params:e})}function v(e){return Object(n.a)({url:"/editBasketSort",method:"GET",params:e})}function x(e){return Object(n.a)({url:"/editBasketScore",method:"GET",params:e})}},196:function(e,t,r){"use strict";var n=r(183),c=r(184),s=Object.prototype.hasOwnProperty,i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Array.isArray,o=Array.prototype.push,l=function(e,t){o.apply(e,a(t)?t:[t])},d=Date.prototype.toISOString,u={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,formatter:c.formatters[c.default],indices:!1,serializeDate:function(e){return d.call(e)},skipNulls:!1,strictNullHandling:!1},f=function e(t,r,c,s,i,o,d,f,p,j,m,h,b){var O=t;if("function"===typeof d?O=d(r,O):O instanceof Date?O=j(O):"comma"===c&&a(O)&&(O=O.join(",")),null===O){if(s)return o&&!h?o(r,u.encoder,b):r;O=""}if("string"===typeof O||"number"===typeof O||"boolean"===typeof O||n.isBuffer(O))return o?[m(h?r:o(r,u.encoder,b))+"="+m(o(O,u.encoder,b))]:[m(r)+"="+m(String(O))];var v,x=[];if("undefined"===typeof O)return x;if(a(d))v=d;else{var y=Object.keys(O);v=f?y.sort(f):y}for(var N=0;N<v.length;++N){var g=v[N];i&&null===O[g]||(a(O)?l(x,e(O[g],"function"===typeof c?c(r,g):r,c,s,i,o,d,f,p,j,m,h,b)):l(x,e(O[g],r+(p?"."+g:"["+g+"]"),c,s,i,o,d,f,p,j,m,h,b)))}return x};e.exports=function(e,t){var r,n=e,o=function(e){if(!e)return u;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||u.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=c.default;if("undefined"!==typeof e.format){if(!s.call(c.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=c.formatters[r],i=u.filter;return("function"===typeof e.filter||a(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:u.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?u.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:u.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?u.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:u.encode,encoder:"function"===typeof e.encoder?e.encoder:u.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:u.encodeValuesOnly,filter:i,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:u.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:u.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:u.strictNullHandling}}(t);"function"===typeof o.filter?n=(0,o.filter)("",n):a(o.filter)&&(r=o.filter);var d,p=[];if("object"!==typeof n||null===n)return"";d=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var j=i[d];r||(r=Object.keys(n)),o.sort&&r.sort(o.sort);for(var m=0;m<r.length;++m){var h=r[m];o.skipNulls&&null===n[h]||l(p,f(n[h],h,j,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.formatter,o.encodeValuesOnly,o.charset))}var b=p.join(o.delimiter),O=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?O+="utf8=%26%2310003%3B&":O+="utf8=%E2%9C%93&"),b.length>0?O+b:""}},197:function(e,t,r){"use strict";var n=r(183),c=Object.prototype.hasOwnProperty,s={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},i=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},a=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,s=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(n),a=i?n.slice(0,i.index):n,o=[];if(a){if(!r.plainObjects&&c.call(Object.prototype,a)&&!r.allowPrototypes)return;o.push(a)}for(var l=0;null!==(i=s.exec(n))&&l<r.depth;){if(l+=1,!r.plainObjects&&c.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;o.push(i[1])}return i&&o.push("["+n.slice(i.index)+"]"),function(e,t,r){for(var n=t,c=e.length-1;c>=0;--c){var s,i=e[c];if("[]"===i&&r.parseArrays)s=[].concat(n);else{s=r.plainObjects?Object.create(null):{};var a="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,o=parseInt(a,10);r.parseArrays||""!==a?!isNaN(o)&&i!==a&&String(o)===a&&o>=0&&r.parseArrays&&o<=r.arrayLimit?(s=[])[o]=n:s[a]=n:s={0:n}}n=s}return n}(o,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return s;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?s.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?s.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:s.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:s.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:s.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:s.comma,decoder:"function"===typeof e.decoder?e.decoder:s.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:s.delimiter,depth:"number"===typeof e.depth?e.depth:s.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:s.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:s.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:s.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:s.strictNullHandling}}(t);if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var o="string"===typeof e?function(e,t){var r,a={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,l=t.parameterLimit===1/0?void 0:t.parameterLimit,d=o.split(t.delimiter,l),u=-1,f=t.charset;if(t.charsetSentinel)for(r=0;r<d.length;++r)0===d[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===d[r]?f="utf-8":"utf8=%26%2310003%3B"===d[r]&&(f="iso-8859-1"),u=r,r=d.length);for(r=0;r<d.length;++r)if(r!==u){var p,j,m=d[r],h=m.indexOf("]="),b=-1===h?m.indexOf("="):h+1;-1===b?(p=t.decoder(m,s.decoder,f),j=t.strictNullHandling?null:""):(p=t.decoder(m.slice(0,b),s.decoder,f),j=t.decoder(m.slice(b+1),s.decoder,f)),j&&t.interpretNumericEntities&&"iso-8859-1"===f&&(j=i(j)),j&&t.comma&&j.indexOf(",")>-1&&(j=j.split(",")),c.call(a,p)?a[p]=n.combine(a[p],j):a[p]=j}return a}(e,r):e,l=r.plainObjects?Object.create(null):{},d=Object.keys(o),u=0;u<d.length;++u){var f=d[u],p=a(f,o[f],r);l=n.merge(l,p,r)}return n.compact(l)}},204:function(e,t,r){"use strict";var n=r(187),c=r.n(n),s=(r(195),r(64)),i=r(188),a=r(193),o=r(9),l=r(0),d=(r(205),r(65)),u=r(29),f=r(192);function p(e){var t,r=e.volumeTopicCount,n=e.props,d=e.settopicData,u=n.history,p=Object(l.useState)({}),j=Object(a.a)(p,2),m=j[0],h=j[1];Object(l.useEffect)((function(){return O(),function(){}}),[r]);var b=function(){var e=Object(i.a)(c.a.mark((function e(){var t,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)();case 2:t=e.sent,r=t.code,n=t.msg,200===r?(s.b.success(n),O()):s.b.error(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(c.a.mark((function e(){var t,r,n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)();case 2:t=e.sent,r=t.code,n=t.data,200==r&&(h(n),s=null===n||void 0===n?void 0:n.basketCount,d(s));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(c.a.mark((function e(t){var r,n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(f.f)({type:t});case 3:r=e.sent,n=r.code,i=r.msg,200===n?(O(),s.b.success(i)):s.b.error(i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"AI_floatBox",children:[Object(o.jsxs)("div",{className:"top_float_warp",onClick:function(){u.push("/main/mypaper")},children:[Object(o.jsx)("img",{className:"basket_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/basket_icon.png",alt:"basket_icon"}),Object(o.jsxs)("span",{className:"count",children:[Object(o.jsx)("em",{children:r}),"/40"]}),Object(o.jsx)("span",{className:"title",children:"\u8fdb\u5165\u7ec4\u5377"})]}),Object(o.jsx)("img",{className:"arrow_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/arrow_icon_left.png",alt:"arrow_icon"}),Object(o.jsxs)("div",{className:"unfold",children:[Object(o.jsxs)("div",{className:"gross",children:["\u8bd5\u9898\u603b\u91cf\uff08",Object(o.jsx)("span",{children:null===m||void 0===m?void 0:m.basketCount}),"\uff09"]}),Object(o.jsx)("div",{className:"typeList",children:null===m||void 0===m||null===(t=m.basketDetail)||void 0===t?void 0:t.map((function(e){return Object(o.jsxs)("div",{className:"items",children:[Object(o.jsx)("div",{className:"type",children:null===e||void 0===e?void 0:e.type}),Object(o.jsxs)("div",{className:"numdel",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("em",{children:null===e||void 0===e?void 0:e.count}),"\u9898"]}),Object(o.jsx)("img",{className:"tip_del_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/tip_del_icon.png",alt:"tip_del_icon",onClick:function(){return v(e.id)}})]})]},null===e||void 0===e?void 0:e.id)}))}),Object(o.jsx)("div",{className:"empty",onClick:b,children:"\u6e05\u7a7a\u8bd5\u9898"})]})]})}t.a=Object(d.b)((function(e){return{volumeTopicCount:e.volumeTopicCount}}),(function(e){return{addtopicData:function(t){var r={type:u.a,value:t};e(r)},subtopicData:function(t){var r={type:u.e,value:t};e(r)},settopicData:function(t){var r={type:u.d,value:t};e(r)}}}))(Object(l.memo)(p))},205:function(e,t,r){},216:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=(n=r(221))&&n.__esModule?n:{default:n};t.default=c,e.exports=c},221:function(e,t,r){"use strict";var n=r(12),c=r(15);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=c(r(0)),i=n(r(222)),a=n(r(18)),o=function(e,t){return s.createElement(a.default,Object.assign({},e,{ref:t,icon:i.default}))};o.displayName="DownOutlined";var l=s.forwardRef(o);t.default=l},222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"}},380:function(e,t,r){},452:function(e,t,r){"use strict";r.r(t);r(210);var n=r(212),c=(r(217),r(219)),s=(r(194),r(190)),i=r(9),a=r(0),o=(r(380),r(204));function l(e){return Object(i.jsxs)("div",{id:"Chapter",children:[Object(i.jsx)("div",{className:"left_box",children:Object(i.jsx)("div",{className:"title",children:"\u4e03\u5e74\u7ea7\u6570\u5b66 \xb7 \u7ae0\u8282"})}),Object(i.jsxs)("div",{className:"right_box",children:[Object(i.jsxs)("div",{className:"top_box",children:[Object(i.jsxs)("div",{className:"select_box",children:[Object(i.jsxs)("div",{className:"grade grop_warp",children:[Object(i.jsx)("span",{className:"title",children:"\u5e74\u7ea7\uff1a"}),Object(i.jsxs)("div",{className:"select_items",children:[Object(i.jsx)("div",{className:"select_item Selected",children:"\u4e03\u5e74\u7ea7"}),Object(i.jsx)("div",{className:"select_item",children:"\u516b\u5e74\u7ea7"}),Object(i.jsx)("div",{className:"select_item",children:"\u4e5d\u5e74\u7ea7"})]})]}),Object(i.jsxs)("div",{className:"Difficulty grop_warp",children:[Object(i.jsx)("span",{className:"title",children:"\u96be\u5ea6\uff1a"}),Object(i.jsxs)("div",{className:"select_items",children:[Object(i.jsx)("div",{className:"select_item Selected",children:"\u4e0d\u9650"}),Object(i.jsx)("div",{className:"select_item",children:"\u5bb9\u6613"}),Object(i.jsx)("div",{className:"select_item",children:"\u8f83\u6613"}),Object(i.jsx)("div",{className:"select_item",children:"\u4e2d\u7b49"}),Object(i.jsx)("div",{className:"select_item",children:"\u8f83\u96be"}),Object(i.jsx)("div",{className:"select_item",children:"\u56f0\u96be"})]})]}),Object(i.jsxs)("div",{className:"Questions grop_warp",children:[Object(i.jsx)("span",{className:"title",children:"\u9898\u7c7b\uff1a"}),Object(i.jsxs)("div",{className:"select_items",children:[Object(i.jsx)("div",{className:"select_item Selected",children:"\u4e0d\u9650"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"}),Object(i.jsx)("div",{className:"select_item",children:"\u586b\u7a7a\u9898"})]})]})]}),Object(i.jsxs)("div",{className:"tip_box",children:[Object(i.jsxs)("div",{className:"left_boxs",children:[Object(i.jsxs)("div",{className:"timer",children:[Object(i.jsx)("span",{children:"\u65f6\u95f4"}),Object(i.jsx)("img",{className:"down",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down.png",alt:"down"})]}),Object(i.jsxs)("div",{className:"count",children:[Object(i.jsx)("span",{children:"\u4f7f\u7528\u6b21\u6570"}),Object(i.jsx)("img",{className:"down",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/down.png",alt:"down"})]})]}),Object(i.jsxs)("div",{className:"right_boxs",children:[Object(i.jsx)("div",{className:"total",children:"\u5171\u8ba1\uff1a1234647687\u9898"}),Object(i.jsx)("div",{className:"allin",children:"\u9009\u62e9\u672c\u9875\u5168\u90e8\u8bd5\u9898"})]})]})]}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)("div",{className:"items",children:[Object(i.jsxs)("div",{className:"top_title",children:[Object(i.jsxs)("div",{className:"info_class",children:[Object(i.jsxs)("div",{className:"difficulty",children:["\u96be\u5ea6\uff1a",Object(i.jsx)("span",{children:"\u4e2d\u7b49"})]}),Object(i.jsx)("div",{className:"question",children:"\u9898\u578b\uff1a\u4e0d\u7b49\u5f0f\u7ec4\u7684\u89e3\u96c6"})]}),Object(i.jsx)("img",{className:"new_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/new_icon.png",alt:"new_icon"})]}),Object(i.jsxs)("div",{className:"cet_body",children:[Object(i.jsx)("p",{children:"sadasd"}),Object(i.jsxs)("p",{children:["1",Object(i.jsx)("br",{})]}),Object(i.jsxs)("p",{children:["2",Object(i.jsx)("br",{})]})]}),Object(i.jsxs)("div",{className:"bot_btns",children:[Object(i.jsxs)("div",{className:"left_box_warp",children:[Object(i.jsx)("div",{className:"update_time",children:"\u66f4\u65b0\u65f6\u95f4\uff1a2020-08-09"}),Object(i.jsx)("div",{className:"counts",children:"\u7ec4\u5377\u6b21\u6570\uff1a0"})]}),Object(i.jsxs)("div",{className:"right_box_warp",children:[Object(i.jsxs)("div",{className:"answers",children:[Object(i.jsx)("img",{className:"View",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/View.png",alt:"View"}),Object(i.jsx)("span",{children:"\u67e5\u770b\u7b54\u6848"})]}),Object(i.jsxs)("div",{className:"details",children:[Object(i.jsx)("img",{className:"answer",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/answer.png",alt:"answer"}),Object(i.jsx)("span",{children:"\u8bd5\u9898\u8be6\u60c5"})]}),Object(i.jsxs)(s.a,{className:"add",variant:"contained",children:[Object(i.jsx)("em",{children:"+"}),"\u7ec4\u5377"]})]})]})]})}),Object(i.jsxs)("div",{className:"pages",children:[Object(i.jsx)(c.a,{showSizeChanger:!1,count:10,variant:"outlined",shape:"rounded"}),Object(i.jsx)("div",{className:"showtotal",children:"\u5171500\u9875"}),Object(i.jsx)(n.a,{className:"outlined",id:"outlined-basic",variant:"outlined",value:"1"}),Object(i.jsx)(s.a,{variant:"contained",className:"btns",children:"\u8df3\u8f6c"})]})]}),Object(i.jsx)(o.a,{props:e})]})}t.default=Object(a.memo)(l)}}]);