(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[27],{193:function(e,t,a){"use strict";a(206);var c=a(207),n=a(9),i=a(0);a(194);function s(e){var t=e.children,a=e.isOpen,i=void 0!==a&&a,s=e.closeClick,l=e.title,r=void 0===l?"":l,d=e.width,o=void 0===d?"41.71rem":d,u=e.height,j=void 0===u?"23.5rem":u,v=j.split("rem")[0]-4.64;return Object(n.jsx)(c.a,{className:"T_modelbox",title:r,visible:i,onCancel:s,footer:null,centered:!0,width:o,height:j,bodyStyle:{height:v+"rem"},closeIcon:Object(n.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/delete_icon.png",alt:"delete_icon",style:{width:"1.29rem",height:"1.29rem"}}),children:t})}t.a=Object(i.memo)(s)},194:function(e,t,a){},431:function(e,t,a){},502:function(e,t,a){"use strict";a.r(t);a(425);var c=a(478),n=(a(195),a(192)),i=(a(427),a(480)),s=(a(485),a(477)),l=(a(248),a(246)),r=(a(200),a(201)),d=(a(191),a(64)),o=a(481),u=a(185),j=a.n(u),v=a(186),b=a(190),m=(a(209),a(212)),h=(a(243),a(232)),O=a(9),p=a(0),x=(a(431),a(187)),f=a(188),g=a.n(f);function N(e){return Object(x.a)({url:"/getUploadImage",method:"POST",data:e})}function _(e){return Object(x.a)({url:"/getOrganizingPapersLog",method:"GET",params:e})}function y(e){return Object(x.a)({url:"/editInformation",method:"POST",data:g.a.stringify(e)})}var w=a(503),k=a(504),S=a(208),C=a(198),T=a(66),E=a(29),G=a(193),I=h.a.Option,L=m.a.TextArea;function P(e){var t,a,u,f,T,E,P,U,A,R=e.history,D=e.location,z=e.homeInfo,J=Object(p.useState)({}),F=Object(b.a)(J,2),M=F[0],q=F[1],B=Object(p.useState)(!1),Z=Object(b.a)(B,2),$=Z[0],H=Z[1],K=Object(p.useState)(""),Q=Object(b.a)(K,2),V=Q[0],W=Q[1],X=Object(p.useState)(0),Y=Object(b.a)(X,2),ee=Y[0],te=Y[1],ae=Object(p.useState)([]),ce=Object(b.a)(ae,2),ne=ce[0],ie=ce[1],se=Object(p.useState)("1"),le=Object(b.a)(se,2),re=le[0],de=le[1],oe=Object(p.useState)([]),ue=Object(b.a)(oe,2),je=(ue[0],ue[1]),ve=Object(p.useState)([]),be=Object(b.a)(ve,2),me=be[0],he=be[1],Oe=Object(p.useState)([]),pe=Object(b.a)(Oe,2),xe=pe[0],fe=pe[1],ge=Object(p.useState)(0),Ne=Object(b.a)(ge,2),_e=Ne[0],ye=Ne[1],we=Object(p.useState)({}),ke=Object(b.a)(we,2),Se=ke[0],Ce=ke[1],Te=Object(p.useState)([]),Ee=Object(b.a)(Te,2),Ge=Ee[0],Ie=Ee[1],Le=Object(p.useState)(!1),Pe=Object(b.a)(Le,2),Ue=Pe[0],Ae=Pe[1],Re=Object(p.useState)(""),De=Object(b.a)(Re,2),ze=De[0],Je=De[1],Fe=Object(p.useState)([]),Me=Object(b.a)(Fe,2),qe=Me[0],Be=Me[1],Ze=Object(p.useState)(""),$e=Object(b.a)(Ze,2),He=$e[0],Ke=$e[1],Qe=Object(p.useState)({}),Ve=Object(b.a)(Qe,2),We=Ve[0],Xe=Ve[1],Ye=Object(p.useState)("0"),et=Object(b.a)(Ye,2),tt=et[0],at=et[1],ct=Object(p.useState)(!1),nt=Object(b.a)(ct,2),it=nt[0],st=nt[1],lt=Object(p.useState)(!1),rt=Object(b.a)(lt,2),dt=rt[0],ot=rt[1],ut=Object(p.useState)(""),jt=Object(b.a)(ut,2),vt=jt[0],bt=jt[1],mt=Object(p.useState)(""),ht=Object(b.a)(mt,2),Ot=ht[0],pt=ht[1],xt=Object(p.useState)(""),ft=Object(b.a)(xt,2),gt=ft[0],Nt=ft[1],_t=Object(p.useState)(!1),yt=Object(b.a)(_t,2),wt=yt[0],kt=yt[1],St=Object(p.useRef)(null);Object(p.useEffect)((function(){var e;return Lt(),Ct(1*(null===(e=Object(C.h)(null===D||void 0===D?void 0:D.search))||void 0===e?void 0:e.type)),function(){}}),[]),Object(p.useEffect)((function(){var e;te(null===(e=Object(C.h)(null===D||void 0===D?void 0:D.search))||void 0===e?void 0:e.type)}));var Ct=function(e){var t=new Map([[0,Dt],[1,It],[2,Tt],[3,Gt]]);t.get(e)&&t.get(e)()},Tt=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c,n,i=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:0,e.next=3,_({day:t});case 3:a=e.sent,c=a.code,n=a.data,200===c&&Xe(null===n||void 0===n?void 0:n.log);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Et=function(){St.current.click(),St.current.addEventListener("change",Ut)},Gt=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=void 0,Object(x.a)({url:"/getUploadList",method:"GET",params:n});case 2:t=e.sent,a=t.code,c=t.data,200===a&&Ie(null===c||void 0===c?void 0:c.teacherUploadList);case 6:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}(),It=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)({url:"/pointLog",method:"GET"});case 2:t=e.sent,a=t.code,c=t.data,200===a&&Ce(null===c||void 0===c?void 0:c.pointLog);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Lt=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)({url:"/getAllArea",method:"GET"});case 2:t=e.sent,a=t.code,c=t.data,200===a&&(ie(Rt(c)),je(c));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pt=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n={image_urls:qe,remark:He,paper_name:ze},Object(x.a)({url:"/addTeacherUpload",method:"POST",data:g.a.stringify(n)});case 2:t=e.sent,a=t.code,c=t.msg,200===a?(d.b.success(c),Ae(!1),Be([]),Je(""),Ke(""),Gt()):d.b.error(c);case 6:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}(),Ut=function(){var e=Object(v.a)(j.a.mark((function e(t){var a,c,n,i,s,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("\u6267\u884caddEventListener",t),(a=t.target.files).length){e.next=4;break}return e.abrupt("return");case 4:return(c=new FormData).append("img_url",a[0],a[0].name),c.append("file_path","wx_xcx/paper/"),e.next=9,N(c);case 9:n=e.sent,i=n.code,s=n.data,l=n.msg,200===i?(Be([].concat(Object(o.a)(qe),[s.img])),d.b.success(l)):d.b.error(l),St.current.removeEventListener("change",Ut),St.current.value="";case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),At=function(){var e=Object(v.a)(j.a.mark((function e(t,a,c){var n,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l={province_id:t,city_id:a,area_id:c},Object(x.a)({url:"/getSchools",method:"GET",params:l});case 2:n=e.sent,i=n.code,s=n.data,200===i&&fe(s);case 6:case"end":return e.stop()}var l}),e)})));return function(t,a,c){return e.apply(this,arguments)}}(),Rt=function e(t){return null===t||void 0===t?void 0:t.map((function(t){var a={};return a.value=null===t||void 0===t?void 0:t.id,a.label=null===t||void 0===t?void 0:t.name,(null===t||void 0===t?void 0:t.children)&&(a.children=e(null===t||void 0===t?void 0:t.children)),a}))},Dt=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c,n,i,s,l,r,o,u,v,b,m,h;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)({url:"/information",method:"GET"});case 2:t=e.sent,a=t.code,c=t.data,n=t.msg,200===a?(q(null===c||void 0===c?void 0:c.teacher),de(null===c||void 0===c||null===(i=c.teacher)||void 0===i?void 0:i.gender),W(null===c||void 0===c||null===(s=c.teacher)||void 0===s?void 0:s.avatar_file),he([null===c||void 0===c||null===(l=c.teacher)||void 0===l?void 0:l.province_id,null===c||void 0===c||null===(r=c.teacher)||void 0===r?void 0:r.city_id,null===c||void 0===c||null===(o=c.teacher)||void 0===o?void 0:o.area_id]),At(null===c||void 0===c||null===(u=c.teacher)||void 0===u?void 0:u.province_id,null===c||void 0===c||null===(v=c.teacher)||void 0===v?void 0:v.city_id,null===c||void 0===c||null===(b=c.teacher)||void 0===b?void 0:b.area_id),ye(null===c||void 0===c||null===(m=c.teacher)||void 0===m||null===(h=m.get_school)||void 0===h?void 0:h.id)):d.b.error(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),zt=Object(O.jsxs)("div",{children:[$?Object(O.jsx)(w.a,{}):Object(O.jsx)(k.a,{}),Object(O.jsx)("div",{style:{marginTop:8},children:"\u4e0a\u4f20\u5934\u50cf"})]});var Jt=function(){var e=Object(v.a)(j.a.mark((function e(t){var a,c,n,i,s,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.file,console.log("customRequest",a),(c=new FormData).append("img_url",a,a.name),c.append("file_path","wx_xcx/avatar/"),e.next=7,N(c);case 7:n=e.sent,i=n.code,s=n.data,l=n.msg,200===i?W(null===s||void 0===s?void 0:s.img):d.b.error(l);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ft=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(vt)){e.next=11;break}return e.next=4,y({name:null===M||void 0===M?void 0:M.true_name,sex:re,img:V,school_id:_e,email:vt});case 4:t=e.sent,a=t.code,c=t.msg,200===a?d.b.success(c):d.b.error(c),st(!1),e.next=12;break;case 11:d.b.error("\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e!\u91cd\u65b0\u8f93\u5165!");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var Mt=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y({name:null===M||void 0===M?void 0:M.true_name,sex:re,img:V,school_id:_e,email:null===M||void 0===M?void 0:M.email});case 2:t=e.sent,a=t.code,c=t.msg,200===a?d.b.success(c):d.b.error(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),qt=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n={mobile:Ot,code:gt},Object(x.a)({url:"/editMobile",method:"GET",params:n});case 2:t=e.sent,a=t.code,c=t.msg,200===a?(Dt(),d.b.success(c)):d.b.error(c),kt(!1),ot(!1),pt(""),Nt("");case 10:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}(),Bt=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(Ot)){e.next=10;break}return e.next=4,n={mobile:Ot},Object(x.a)({url:"/getCode",method:"GET",params:n});case 4:t=e.sent,a=t.code,c=t.msg,200===a?(kt(!0),d.b.success(c)):d.b.error(c),e.next=11;break;case 10:d.b.error("\u624b\u673a\u53f7\u683c\u5f0f\u4e0d\u6b63\u786e!\u8bf7\u91cd\u65b0\u586b\u5199!");case 11:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{id:"User",children:[Object(O.jsxs)(r.a,{separator:Object(O.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(O.jsxs)(r.a.Item,{onClick:function(e){e.preventDefault(),R.push("/main/index")},style:{cursor:"pointer",color:"#222"},children:[Object(O.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(O.jsx)(r.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u4e2a\u4eba\u4e2d\u5fc3"}),Object(O.jsx)(r.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u4e2a\u4eba\u8d44\u6599"})]}),Object(O.jsxs)("div",{className:"body_warp",children:[Object(O.jsxs)("div",{className:"left_box",children:[Object(O.jsxs)("div",{className:"top_info",children:[Object(O.jsxs)("div",{className:"perpo",children:[Object(O.jsx)(l.a,{className:"Avatar",size:79,icon:Object(O.jsx)("img",{style:{width:"5.64rem",height:"5.64rem"},src:null===z||void 0===z||null===(t=z.teacher)||void 0===t?void 0:t.avatar_file,alt:"avatar"})}),Object(O.jsx)("div",{className:"name",children:null===z||void 0===z||null===(a=z.teacher)||void 0===a?void 0:a.true_name})]}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsxs)("div",{className:"subject",children:[Object(O.jsx)("img",{className:"subject_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/subject_icon.png",alt:"subject_icon"}),Object(O.jsx)("span",{children:null===z||void 0===z||null===(u=z.teacher)||void 0===u||null===(f=u.get_subject)||void 0===f?void 0:f.title})]}),Object(O.jsxs)("div",{className:"integral",children:[Object(O.jsx)("img",{className:"integral_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon.png",alt:"integral_icon"}),Object(O.jsxs)("span",{children:["\u79ef\u5206\uff1a",null===z||void 0===z||null===(T=z.teacher)||void 0===T?void 0:T.points]})]})]})]}),Object(O.jsx)("div",{className:"bot_menu",children:null===S.h||void 0===S.h?void 0:S.h.map((function(e,t){return Object(O.jsxs)("div",{className:ee==t?"items current_bg":"items",onClick:function(){return function(e){R.push("/main/user?type=".concat(e)),Ct(e)}(t)},children:[Object(O.jsx)("img",{className:"pic_icon",src:e.img,alt:"icon_small"}),Object(O.jsx)("span",{className:"text",children:e.text})]},t)}))})]}),0==ee?Object(O.jsxs)("div",{className:"right_box",children:[Object(O.jsx)("div",{className:"title",children:"\u57fa\u672c\u4fe1\u606f"}),Object(O.jsxs)("div",{className:"body_box",children:[Object(O.jsxs)("div",{className:"name",children:[Object(O.jsx)("div",{className:"lable",children:"\u59d3\u540d\uff1a"}),Object(O.jsx)(m.a,{className:"iteminput",value:null===M||void 0===M?void 0:M.true_name,disabled:!0})]}),Object(O.jsxs)("div",{className:"sex",children:[Object(O.jsx)("div",{className:"lable",children:"\u6027\u522b\uff1a"}),Object(O.jsxs)(h.a,{className:"itemSelect",value:re.toString(),style:{width:"38.07rem"},onChange:function(e,t){de(e)},children:[Object(O.jsx)(I,{value:"1",children:"\u7537"}),Object(O.jsx)(I,{value:"2",children:"\u5973"})]})]}),Object(O.jsxs)("div",{className:"avatarBox",children:[Object(O.jsx)("div",{className:"lable",children:"\u5934\u50cf\uff1a"}),Object(O.jsxs)("div",{className:"Upload_warp",children:[Object(O.jsx)(s.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||d.b.error("\u4ec5\u652f\u6301 JPG/PNG \u6587\u4ef6!");var a=e.size/1024/1024<2;return a||d.b.error("\u56fe\u7247\u5927\u5c0f\u5927\u4e8e 2MB!"),console.log(e),t&&a},onChange:function(e){H(!0),function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}(e.file.originFileObj,(function(e){H(!1)}))},customRequest:Jt,children:V?Object(O.jsx)("img",{src:V,alt:"avatar",style:{width:"100%"}}):zt}),Object(O.jsx)("div",{className:"Upload_tip",children:"\u652f\u6301.jpg/png/ \u683c\u5f0f"})]})]}),Object(O.jsxs)("div",{className:"sex",children:[Object(O.jsx)("div",{className:"lable",children:"\u5730\u533a\uff1a"}),Object(O.jsx)(i.a,{className:"itemSelect",options:ne,onChange:function(e){he(e),At(e[0],e[1],e[2]),ye(null)},placeholder:"\u8bf7\u9009\u62e9\u7701/\u5e02/\u533a",value:me})]}),Object(O.jsxs)("div",{className:"sex",children:[Object(O.jsx)("div",{className:"lable",children:"\u5b66\u6821\uff1a"}),Object(O.jsx)(h.a,{className:"itemSelect",style:{width:"38.07rem"},value:_e,onChange:function(e,t){ye(e)},children:null===xe||void 0===xe?void 0:xe.map((function(e){return Object(O.jsx)(I,{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))})]}),Object(O.jsxs)("div",{className:"name email",children:[Object(O.jsx)("div",{className:"lable",children:"\u90ae\u7bb1\uff1a"}),Object(O.jsx)(m.a,{className:"iteminput",value:null===M||void 0===M?void 0:M.email,disabled:!0}),Object(O.jsx)("span",{className:"changeTip",onClick:function(){st(!0)},children:"\u66f4\u6539"})]}),Object(O.jsxs)("div",{className:"name phone",children:[Object(O.jsx)("div",{className:"lable",children:"\u624b\u673a\u53f7\uff1a"}),Object(O.jsx)(m.a,{className:"iteminput",value:null===M||void 0===M?void 0:M.mobile,disabled:!0}),Object(O.jsx)("span",{className:"changeTip",onClick:function(){ot(!0)},children:"\u66f4\u6539"})]}),Object(O.jsx)("div",{className:"btns",children:Object(O.jsx)(n.a,{type:"primary",className:"btn",onClick:Mt,children:"\u4fdd\u5b58"})})]})]}):1==ee?Object(O.jsxs)("div",{className:"right_box",children:[Object(O.jsxs)("div",{className:"integraltitle",children:[Object(O.jsx)("div",{className:"left_title",children:"\u79ef\u5206\u8bb0\u5f55"}),Object(O.jsxs)("div",{className:"current_title",children:["\u5f53\u5e74\u79ef\u5206\uff1a",null===z||void 0===z||null===(E=z.teacher)||void 0===E?void 0:E.points]})]}),Object(O.jsx)("div",{className:"integral_body",children:null===Se||void 0===Se||null===(P=Se.data)||void 0===P?void 0:P.map((function(e){return Object(O.jsxs)("div",{className:"integral_items ",children:[Object(O.jsxs)("div",{className:"left_integrals",children:[Object(O.jsx)("div",{className:"left_integrals_title",children:null===e||void 0===e?void 0:e.remark}),Object(O.jsxs)("div",{className:"left_integrals_info",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(C.g)(1e3*(null===e||void 0===e?void 0:e.add_time),!0)]})]}),Object(O.jsxs)("div",{className:"right_integrals",children:["+",null===e||void 0===e?void 0:e.point]})]},null===e||void 0===e?void 0:e.id)}))})]}):2==ee?Object(O.jsxs)("div",{className:"right_box",children:[Object(O.jsxs)("div",{className:"down_title",children:[Object(O.jsx)("div",{className:"down_left_text",children:"\u4e0b\u8f7d\u8bb0\u5f55"}),Object(O.jsxs)("div",{className:"down_right_box",children:[Object(O.jsxs)(h.a,{style:{width:"11.43rem"},onChange:function(e){at(e)},value:tt,children:[Object(O.jsx)(I,{value:"0",children:"\u5168\u90e8"}),Object(O.jsx)(I,{value:"1",children:"90\u5929\u5185"}),Object(O.jsx)(I,{value:"2",children:"\u534a\u5e74\u5185"}),Object(O.jsx)(I,{value:"3",children:"\u4e00\u5e74\u5185"})]}),Object(O.jsx)(n.a,{type:"primary",className:"down_btns",onClick:function(){var e=new Map([["0","0"],["1","90"],["2","180"],["3","365"]]),t=e.get(tt)&&e.get(tt);console.log(t),Tt(t)},children:"\u67e5\u8be2"})]})]}),Object(O.jsxs)("div",{className:"down_body",children:[Object(O.jsxs)("div",{className:"down_body_title",children:[Object(O.jsx)("div",{className:"name",children:"\u540d\u79f0"}),Object(O.jsx)("div",{className:"time",children:"\u4e0b\u8f7d\u65f6\u95f4"})]}),(null===We||void 0===We?void 0:We.data)?null===We||void 0===We||null===(U=We.data)||void 0===U?void 0:U.map((function(e){var t;return Object(O.jsxs)("div",{className:"down_body_table",children:[Object(O.jsx)("div",{className:"name",children:null===e||void 0===e||null===(t=e.get_teacher_exam)||void 0===t?void 0:t.title}),Object(O.jsx)("div",{className:"time",children:Object(C.g)(1e3*(null===e||void 0===e?void 0:e.update_time),!0)})]},null===e||void 0===e?void 0:e.id)})):Object(O.jsxs)("div",{className:"nodata_down",children:[Object(O.jsx)("img",{className:"nodata_down_img",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/nodata_down.png",alt:"nodata_down_img"}),Object(O.jsx)("div",{className:"nodata_down_title",children:"\u6682\u65e0\u4e0b\u8f7d\u8bb0\u5f55"})]})]})]}):Object(O.jsxs)("div",{className:"right_box",children:[Object(O.jsxs)("div",{className:"upload_title",children:[Object(O.jsx)("div",{className:"upload_left_text",children:"\u4e0a\u4f20\u8bd5\u5377\u5217\u8868"}),Ue?"":Object(O.jsx)(n.a,{type:"primary",className:"upload_btn",onClick:function(){Ae(!0)},children:"\u4e0a\u4f20\u8bd5\u5377"})]}),Ue?Object(O.jsxs)("div",{className:"content_box",children:[Object(O.jsxs)("div",{className:"paperName",children:[Object(O.jsx)("span",{children:"\u8bd5\u5377\u540d\u79f0"}),Object(O.jsx)(m.a,{className:"myInput",placeholder:"\u8bf7\u586b\u5199\u8bd5\u5377\u540d\u79f0",onChange:function(e){var t=e.target.value;Je(t)},value:ze})]}),Object(O.jsxs)("div",{className:"Remarks",children:[Object(O.jsx)("span",{children:"\u5907\u6ce8"}),Object(O.jsx)(L,{className:"myInput",placeholder:"\u8bf7\u586b\u5199\u5907\u6ce8",onChange:function(e){var t=e.target.value;Ke(t)},value:He})]}),qe.length?Object(O.jsxs)("div",{className:"upload_insert",children:[null===qe||void 0===qe?void 0:qe.map((function(e,t){return Object(O.jsxs)("div",{className:"iamge_warp",children:[Object(O.jsx)(c.a,{className:"itemImg",width:"11.43rem",height:"14.29rem",src:e}),Object(O.jsx)("img",{className:"image_delete_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/image_delete_icon.png",alt:"image_delete_icon",onClick:function(){return function(e){var t=Object(o.a)(qe);t.splice(e,1),Be(t)}(t)}})]},t)})),Object(O.jsxs)("div",{className:"listUpload",onClick:Et,children:[Object(O.jsx)("img",{className:"uploadlist",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/uploadlist.png",alt:"uploadlist"}),Object(O.jsx)("span",{children:"\u4e0a\u4f20\u56fe\u7247"})]})]}):Object(O.jsxs)("div",{className:"upload_box",onClick:Et,children:[Object(O.jsx)("img",{className:"upload_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/upload_icon.png",alt:"upload_icon"}),Object(O.jsx)("h1",{children:"\u70b9\u51fb\u4e0a\u4f20\u56fe\u7247"}),Object(O.jsx)("p",{children:"\u683c\u5f0f\uff1aJPG\u3001JPEG2000\u3001PNG"})]}),Object(O.jsx)(n.a,{type:"primary",className:"btns",onClick:Pt,children:"\u4fdd\u5b58"})]}):Object(O.jsxs)("div",{className:"upload_body",children:[Object(O.jsxs)("div",{className:"upload_body_title",children:[Object(O.jsx)("div",{className:"name",children:"\u540d\u79f0"}),Object(O.jsx)("div",{className:"time",children:"\u4e0a\u4f20\u65f6\u95f4"}),Object(O.jsx)("div",{className:"isreview",children:"\u5ba1\u6838\u72b6\u6001"})]}),(null===Ge||void 0===Ge?void 0:Ge.data)?null===Ge||void 0===Ge||null===(A=Ge.data)||void 0===A?void 0:A.map((function(e){return Object(O.jsxs)("div",{className:"down_body_table",children:[Object(O.jsx)("div",{className:"name",children:null===e||void 0===e?void 0:e.paper_name}),Object(O.jsx)("div",{className:"time",children:Object(C.g)(1e3*(null===e||void 0===e?void 0:e.add_time))}),Object(O.jsx)("div",{className:1==(null===e||void 0===e?void 0:e.status)?"isreview Pending":2==(null===e||void 0===e?void 0:e.status)?"isreview passed":"isreview notpass",children:1==(null===e||void 0===e?void 0:e.status)?"\u5f85\u5ba1\u6838":2==(null===e||void 0===e?void 0:e.status)?"\u5df2\u901a\u8fc7":"\u672a\u901a\u8fc7"})]},null===e||void 0===e?void 0:e.upload_id)})):Object(O.jsxs)("div",{className:"nodata_down",children:[Object(O.jsx)("img",{className:"nodata_down_img",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/nodata_down.png",alt:"nodata_down_img"}),Object(O.jsx)("div",{className:"nodata_down_title",children:"\u6682\u65e0\u4e0a\u4f20\u7684\u8bd5\u5377"})]})]})]})]}),Object(O.jsx)("input",{ref:St,id:"upload",type:"file",name:"file",hidden:!0}),Object(O.jsx)(G.a,{isOpen:it,title:"\u3010\u4fee\u6539\u90ae\u7bb1\u3011",closeClick:function(){st(!1)},width:"41.71rem",height:"19.93rem",children:Object(O.jsxs)("div",{id:"tmodelbox",children:[Object(O.jsxs)("div",{className:"title",children:["\u5f53\u524d\u7ed1\u5b9a\u7684\u90ae\u7bb1\u5730\u5740\uff1a",Object(O.jsx)("div",{className:"loadEmail",children:null===M||void 0===M?void 0:M.email})]}),Object(O.jsx)("div",{className:"body",children:Object(O.jsx)(m.a,{className:"emailData",value:vt,onChange:function(e){return bt(e.target.value)}})}),Object(O.jsx)(n.a,{type:"primary",className:"btn",onClick:Ft,children:"\u786e\u5b9a"})]})}),Object(O.jsx)(G.a,{isOpen:dt,title:"\u3010\u4fee\u6539\u7ed1\u5b9a\u624b\u673a\u53f7\u3011",closeClick:function(){ot(!1)},width:"41.71rem",height:"19.93rem",children:Object(O.jsxs)("div",{id:"tmodelbox",className:"phoneChange",children:[Object(O.jsxs)("div",{className:"bodys",children:[Object(O.jsxs)("div",{className:"phonenum",children:[Object(O.jsx)("div",{className:"text",children:"\u624b\u673a\u53f7"}),Object(O.jsx)(m.a,{className:"newPhone",value:Ot,disabled:wt,onChange:function(e){return pt(e.target.value)}})]}),Object(O.jsxs)("div",{className:"phonenum",children:[Object(O.jsx)("div",{className:"text",children:"\u9a8c\u8bc1\u7801"}),Object(O.jsx)(m.a,{className:"verification",value:gt,onChange:function(e){return Nt(e.target.value)}}),Object(O.jsx)(n.a,{type:"primary",className:"Codebtn",onClick:Bt,children:"\u53d1\u9001\u9a8c\u8bc1\u7801"})]})]}),Object(O.jsx)(n.a,{type:"primary",className:"btn",onClick:qt,children:"\u786e\u5b9a"})]})})]})}t.default=Object(T.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var a={type:E.c,value:t};e(a)}}}))(Object(p.memo)(P))}}]);