(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[18],{183:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,i=Array.isArray,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],c=Object.keys(a),l=0;l<c.length;++l){var s=c[l],d=a[s];"object"===typeof d&&null!==d&&-1===r.indexOf(d)&&(t.push({obj:a,prop:s}),r.push(d))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(i(r)){for(var n=[],o=0;o<r.length;++o)"undefined"!==typeof r[o]&&n.push(r[o]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(i){return n}},encode:function(e,t,r){if(0===e.length)return e;var n="string"===typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var i="",a=0;a<n.length;++a){var c=n.charCodeAt(a);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?i+=n.charAt(a):c<128?i+=o[c]:c<2048?i+=o[192|c>>6]+o[128|63&c]:c<55296||c>=57344?i+=o[224|c>>12]+o[128|c>>6&63]+o[128|63&c]:(a+=1,c=65536+((1023&c)<<10|1023&n.charCodeAt(a)),i+=o[240|c>>18]+o[128|c>>12&63]+o[128|c>>6&63]+o[128|63&c])}return i},isBuffer:function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,o){if(!r)return t;if("object"!==typeof r){if(i(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var c=t;return i(t)&&!i(r)&&(c=a(t,o)),i(t)&&i(r)?(r.forEach((function(r,i){if(n.call(t,i)){var a=t[i];a&&"object"===typeof a&&r&&"object"===typeof r?t[i]=e(a,r,o):t.push(r)}else t[i]=r})),t):Object.keys(r).reduce((function(t,i){var a=r[i];return n.call(t,i)?t[i]=e(t[i],a,o):t[i]=a,t}),c)}}},184:function(e,t,r){"use strict";var n=String.prototype.replace,i=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,i,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},185:function(e,t,r){"use strict";r(203);var n=r(206),i=r(9),o=r(0);r(186);function a(e){var t=e.children,r=e.isOpen,o=void 0!==r&&r,a=e.closeClick,c=e.title,l=void 0===c?"":c,s=e.width,d=void 0===s?"41.71rem":s,u=e.height,f=void 0===u?"23.5rem":u,p=f.split("rem")[0]-4.64;return Object(i.jsx)(n.a,{className:"T_modelbox",title:l,visible:o,onCancel:a,footer:null,centered:!0,width:d,height:f,bodyStyle:{height:p+"rem"},closeIcon:Object(i.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(o.memo)(a)},186:function(e,t,r){},191:function(e,t,r){"use strict";var n=r(196),i=r(197),o=r(184);e.exports={formats:o,parse:i,stringify:n}},196:function(e,t,r){"use strict";var n=r(183),i=r(184),o=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,l=Array.prototype.push,s=function(e,t){l.apply(e,c(t)?t:[t])},d=Date.prototype.toISOString,u={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,formatter:i.formatters[i.default],indices:!1,serializeDate:function(e){return d.call(e)},skipNulls:!1,strictNullHandling:!1},f=function e(t,r,i,o,a,l,d,f,p,m,h,b,v){var j=t;if("function"===typeof d?j=d(r,j):j instanceof Date?j=m(j):"comma"===i&&c(j)&&(j=j.join(",")),null===j){if(o)return l&&!b?l(r,u.encoder,v):r;j=""}if("string"===typeof j||"number"===typeof j||"boolean"===typeof j||n.isBuffer(j))return l?[h(b?r:l(r,u.encoder,v))+"="+h(l(j,u.encoder,v))]:[h(r)+"="+h(String(j))];var y,O=[];if("undefined"===typeof j)return O;if(c(d))y=d;else{var x=Object.keys(j);y=f?x.sort(f):x}for(var g=0;g<y.length;++g){var _=y[g];a&&null===j[_]||(c(j)?s(O,e(j[_],"function"===typeof i?i(r,_):r,i,o,a,l,d,f,p,m,h,b,v)):s(O,e(j[_],r+(p?"."+_:"["+_+"]"),i,o,a,l,d,f,p,m,h,b,v)))}return O};e.exports=function(e,t){var r,n=e,l=function(e){if(!e)return u;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||u.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i.default;if("undefined"!==typeof e.format){if(!o.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=i.formatters[r],a=u.filter;return("function"===typeof e.filter||c(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:u.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?u.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:u.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?u.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:u.encode,encoder:"function"===typeof e.encoder?e.encoder:u.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:u.encodeValuesOnly,filter:a,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:u.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:u.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:u.strictNullHandling}}(t);"function"===typeof l.filter?n=(0,l.filter)("",n):c(l.filter)&&(r=l.filter);var d,p=[];if("object"!==typeof n||null===n)return"";d=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var m=a[d];r||(r=Object.keys(n)),l.sort&&r.sort(l.sort);for(var h=0;h<r.length;++h){var b=r[h];l.skipNulls&&null===n[b]||s(p,f(n[b],b,m,l.strictNullHandling,l.skipNulls,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.formatter,l.encodeValuesOnly,l.charset))}var v=p.join(l.delimiter),j=!0===l.addQueryPrefix?"?":"";return l.charsetSentinel&&("iso-8859-1"===l.charset?j+="utf8=%26%2310003%3B&":j+="utf8=%E2%9C%93&"),v.length>0?j+v:""}},197:function(e,t,r){"use strict";var n=r(183),i=Object.prototype.hasOwnProperty,o={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},c=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(n),c=a?n.slice(0,a.index):n,l=[];if(c){if(!r.plainObjects&&i.call(Object.prototype,c)&&!r.allowPrototypes)return;l.push(c)}for(var s=0;null!==(a=o.exec(n))&&s<r.depth;){if(s+=1,!r.plainObjects&&i.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(a[1])}return a&&l.push("["+n.slice(a.index)+"]"),function(e,t,r){for(var n=t,i=e.length-1;i>=0;--i){var o,a=e[i];if("[]"===a&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var c="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,l=parseInt(c,10);r.parseArrays||""!==c?!isNaN(l)&&a!==c&&String(l)===c&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(o=[])[l]=n:o[c]=n:o={0:n}}n=o}return n}(l,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return o;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?o.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?o.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:o.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:o.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:o.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:o.comma,decoder:"function"===typeof e.decoder?e.decoder:o.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:o.delimiter,depth:"number"===typeof e.depth?e.depth:o.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:o.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:o.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:o.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:o.strictNullHandling}}(t);if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var l="string"===typeof e?function(e,t){var r,c={},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,s=t.parameterLimit===1/0?void 0:t.parameterLimit,d=l.split(t.delimiter,s),u=-1,f=t.charset;if(t.charsetSentinel)for(r=0;r<d.length;++r)0===d[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===d[r]?f="utf-8":"utf8=%26%2310003%3B"===d[r]&&(f="iso-8859-1"),u=r,r=d.length);for(r=0;r<d.length;++r)if(r!==u){var p,m,h=d[r],b=h.indexOf("]="),v=-1===b?h.indexOf("="):b+1;-1===v?(p=t.decoder(h,o.decoder,f),m=t.strictNullHandling?null:""):(p=t.decoder(h.slice(0,v),o.decoder,f),m=t.decoder(h.slice(v+1),o.decoder,f)),m&&t.interpretNumericEntities&&"iso-8859-1"===f&&(m=a(m)),m&&t.comma&&m.indexOf(",")>-1&&(m=m.split(",")),i.call(c,p)?c[p]=n.combine(c[p],m):c[p]=m}return c}(e,r):e,s=r.plainObjects?Object.create(null):{},d=Object.keys(l),u=0;u<d.length;++u){var f=d[u],p=c(f,l[f],r);s=n.merge(s,p,r)}return n.compact(s)}},215:function(e,t,r){"use strict";r.d(t,"f",(function(){return a})),r.d(t,"e",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"d",(function(){return d})),r.d(t,"a",(function(){return u})),r.d(t,"g",(function(){return f}));var n=r(189),i=r(191),o=r.n(i);function a(){return Object(n.a)({url:"/getTeamList",method:"GET"})}function c(e){return Object(n.a)({url:"/getTeamDetail",method:"GET",params:e})}function l(e){return Object(n.a)({url:"/delTeamTeacher",method:"POST",data:o.a.stringify(e)})}function s(e){return Object(n.a)({url:"/delTeamStudent",method:"POST",data:o.a.stringify(e)})}function d(){return Object(n.a)({url:"/getAddTeam",method:"GET"})}function u(e){return Object(n.a)({url:"/addTeam",method:"POST",data:o.a.stringify(e)})}function f(e){return Object(n.a)({url:"/studentAcademicReport",method:"GET",params:e})}},379:function(e,t,r){},451:function(e,t,r){"use strict";r.r(t);r(194);var n=r(190),i=(r(234),r(233)),o=(r(201),r(202)),a=(r(195),r(64)),c=r(187),l=r.n(c),s=r(188),d=r(193),u=r(9),f=r(0),p=(r(379),r(215)),m=r(198),h=r(65),b=r(29),v=r(185);function j(e){var t,r,c,h,b,j=e.location,y=e.history,O=e.homeInfo,x=Object(m.h)(j.search).id,g=Object(f.useState)({}),_=Object(d.a)(g,2),N=_[0],w=_[1],S=Object(f.useState)({}),k=Object(d.a)(S,2),D=k[0],C=k[1],P=Object(f.useState)(!1),T=Object(d.a)(P,2),E=T[0],A=T[1],L=Object(f.useState)(""),R=Object(d.a)(L,2);R[0],R[1];Object(f.useEffect)((function(){return H(),function(){}}),[]);var H=function(){var e=Object(s.a)(l.a.mark((function e(){var t,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.e)({team_id:x});case 2:t=e.sent,r=t.code,n=t.data,t.msg,200==r&&w(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(l.a.mark((function e(t,r){var n,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.c)({team_id:t,teacher_id:r});case 2:n=e.sent,i=n.code,o=n.msg,200===i?a.b.success(o):a.b.error(o),H();case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(l.a.mark((function e(){var t,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.b)({team_id:D.team_id,student_id:D.student_id});case 2:t=e.sent,r=t.code,n=t.msg,200===r?a.b.success(n):a.b.error(n),A(!1),H();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{id:"ClassDetails",children:[Object(u.jsxs)(o.a,{separator:Object(u.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(u.jsxs)(o.a.Item,{onClick:function(e){e.preventDefault(),y.push("/main/class")},style:{cursor:"pointer",color:"#222"},children:[Object(u.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u73ed\u7ea7\u4fe1\u606f"]}),Object(u.jsxs)(o.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:[null===N||void 0===N||null===(t=N.team)||void 0===t||null===(r=t.get_grade)||void 0===r?void 0:r.name,null===N||void 0===N||null===(c=N.team)||void 0===c?void 0:c.name]})]}),Object(u.jsxs)("div",{className:"teacher_list",children:[Object(u.jsxs)("div",{className:"title_text",children:[Object(u.jsx)("span",{children:"\u8001\u5e08\u59d3\u540d"}),Object(u.jsx)("span",{children:"\u79d1\u76ee"}),Object(u.jsx)("span",{children:"\u6700\u540e\u767b\u5f55\u65f6\u95f4"}),Object(u.jsx)("span",{children:"\u64cd\u4f5c"})]}),Object(u.jsx)("div",{className:"teacher_items",children:null===N||void 0===N||null===(h=N.teamTeacher)||void 0===h?void 0:h.map((function(e){var t,r,n,o,a;return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsxs)("div",{className:"name_box flex_box",children:[Object(u.jsx)(i.a,{className:"Avatar",alt:"avatar",src:null===e||void 0===e?void 0:e.avatar_file}),Object(u.jsxs)("span",{children:[null===e||void 0===e?void 0:e.true_name,"\u8001\u5e08"]})]}),Object(u.jsx)("div",{className:"subject_box flex_box",children:Object(u.jsx)("span",{children:null===e||void 0===e||null===(t=e.get_subject)||void 0===t?void 0:t.title})}),Object(u.jsx)("div",{className:"lasttime_box flex_box",children:Object(u.jsx)("span",{children:Object(m.g)(1e3*(null===e||void 0===e?void 0:e.last_login_time))})}),Object(u.jsx)("div",{className:"operate_box flex_box",children:(null===N||void 0===N||null===(r=N.team)||void 0===r?void 0:r.teacher_id)!==(null===e||void 0===e?void 0:e.id)&&(null===N||void 0===N||null===(n=N.team)||void 0===n?void 0:n.teacher_id)===(null===O||void 0===O||null===(o=O.teacher)||void 0===o?void 0:o.id)&&0===(null===N||void 0===N||null===(a=N.team)||void 0===a?void 0:a.is_active)?Object(u.jsx)("span",{onClick:function(){var t;return I(null===N||void 0===N||null===(t=N.team)||void 0===t?void 0:t.id,null===e||void 0===e?void 0:e.id)},children:"\u79fb\u9664"}):Object(u.jsx)("span",{children:"-"})})]},null===e||void 0===e?void 0:e.id)}))})]}),Object(u.jsxs)("div",{className:"student_list",children:[Object(u.jsxs)("div",{className:"title_text",children:[Object(u.jsx)("span",{children:"\u5b66\u751f\u59d3\u540d"}),Object(u.jsx)("span",{children:"\u5df2\u6536\u96c6\u9519\u9898\u6570"}),Object(u.jsx)("span",{children:"\u66f4\u65b0\u9519\u9898\u65f6\u95f4"}),Object(u.jsx)("span",{children:"\u64cd\u4f5c"})]}),Object(u.jsx)("div",{className:"teacher_items",children:null===N||void 0===N||null===(b=N.teamStudent)||void 0===b?void 0:b.map((function(e){var t,r;return Object(u.jsxs)("div",{className:"item",children:[Object(u.jsxs)("div",{className:"name_box flex_box",children:[Object(u.jsx)(i.a,{className:"Avatar",alt:"avatar",src:null===e||void 0===e?void 0:e.avatar_file}),Object(u.jsx)("span",{children:null===e||void 0===e?void 0:e.true_name}),1===(null===e||void 0===e?void 0:e.is_vip)?Object(u.jsx)("img",{className:"vip",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/vip.png",alt:"vip"}):Object(u.jsx)(u.Fragment,{})]}),Object(u.jsx)("div",{className:"subject_box flex_box",children:Object(u.jsx)("span",{children:null===e||void 0===e?void 0:e.errorCount})}),Object(u.jsx)("div",{className:"lasttime_box flex_box",children:Object(u.jsx)("span",{children:Object(m.g)(1e3*(null===e||void 0===e?void 0:e.last_add_exercises_time)||(new Date).getTime())})}),Object(u.jsxs)("div",{className:"operate_box flex_box",children:[Object(u.jsx)("span",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,r=null===e||void 0===e?void 0:e.true_name,void y.push("/main/studyreport?id=".concat(t,"&iid=").concat(x,"&name=").concat(encodeURI(r)));var t,r},children:"\u5b66\u60c5\u62a5\u544a"}),(null===N||void 0===N||null===(t=N.team)||void 0===t?void 0:t.teacher_id)!==(null===e||void 0===e?void 0:e.id)&&0===(null===N||void 0===N||null===(r=N.team)||void 0===r?void 0:r.is_active)?Object(u.jsx)("span",{onClick:function(){var t,r,n,i;return r=null===N||void 0===N||null===(t=N.team)||void 0===t?void 0:t.id,n=null===e||void 0===e?void 0:e.id,i=null===e||void 0===e?void 0:e.true_name,C({team_id:r,student_id:n,true_name:i}),void A(!0)},children:"\u79fb\u9664"}):Object(u.jsx)("span",{children:"-"})]})]},null===e||void 0===e?void 0:e.id)}))})]}),Object(u.jsx)(v.a,{isOpen:E,title:"\u3010\u6e29\u99a8\u63d0\u793a\u3011",closeClick:function(){return A(!1)},width:"41.71rem",height:"19.93rem",children:Object(u.jsxs)("div",{id:"tmodelbox",className:"delitem",children:[Object(u.jsxs)("div",{className:"title",children:["\u786e\u5b9a\u662f\u5426\u79fb\u9664\u300a",null===D||void 0===D?void 0:D.true_name,"\u300b\u5b66\u751f\uff1f"]}),Object(u.jsx)(n.a,{type:"primary",className:"btn",onClick:F,children:"\u786e\u5b9a"})]})})]})}t.default=Object(h.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var r={type:b.c,value:t};e(r)}}}))(Object(f.memo)(j))}}]);