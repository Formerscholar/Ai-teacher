(this.webpackJsonpteacher_admin=this.webpackJsonpteacher_admin||[]).push([[29],{389:function(e,t,a){},461:function(e,t,a){"use strict";a.r(t);a(383);var c=a(437),n=(a(184),a(183)),i=(a(385),a(439)),s=(a(444),a(436)),l=(a(226),a(224)),r=(a(185),a(186)),d=(a(197),a(70)),o=a(440),u=a(194),j=a.n(u),v=a(195),b=a(196),m=(a(208),a(212)),h=(a(220),a(216)),p=a(9),O=a(0),x=(a(389),a(188)),g=a(221),f=a.n(g);function _(e){return Object(x.a)({url:"/getUploadImage",method:"POST",data:e})}function N(e){return Object(x.a)({url:"/getOrganizingPapersLog",method:"GET",params:e})}var y=a(462),w=a(463),S=a(206),k=a(190),C=a(67),T=a(37),E=h.a.Option,I=m.a.TextArea;function G(e){var t,a,u,g,C,T,G,L,U,P=e.history,R=e.location,A=e.homeInfo,D=Object(O.useState)({}),J=Object(b.a)(D,2),F=J[0],z=J[1],M=Object(O.useState)(!1),q=Object(b.a)(M,2),B=q[0],H=q[1],K=Object(O.useState)(""),Q=Object(b.a)(K,2),V=Q[0],W=Q[1],X=Object(O.useState)(0),Y=Object(b.a)(X,2),Z=Y[0],$=Y[1],ee=Object(O.useState)([]),te=Object(b.a)(ee,2),ae=te[0],ce=te[1],ne=Object(O.useState)("1"),ie=Object(b.a)(ne,2),se=ie[0],le=ie[1],re=Object(O.useState)([]),de=Object(b.a)(re,2),oe=(de[0],de[1]),ue=Object(O.useState)([]),je=Object(b.a)(ue,2),ve=je[0],be=je[1],me=Object(O.useState)([]),he=Object(b.a)(me,2),pe=he[0],Oe=he[1],xe=Object(O.useState)(0),ge=Object(b.a)(xe,2),fe=ge[0],_e=ge[1],Ne=Object(O.useState)({}),ye=Object(b.a)(Ne,2),we=ye[0],Se=ye[1],ke=Object(O.useState)([]),Ce=Object(b.a)(ke,2),Te=Ce[0],Ee=Ce[1],Ie=Object(O.useState)(!1),Ge=Object(b.a)(Ie,2),Le=Ge[0],Ue=Ge[1],Pe=Object(O.useState)(""),Re=Object(b.a)(Pe,2),Ae=Re[0],De=Re[1],Je=Object(O.useState)([]),Fe=Object(b.a)(Je,2),ze=Fe[0],Me=Fe[1],qe=Object(O.useState)(""),Be=Object(b.a)(qe,2),He=Be[0],Ke=Be[1],Qe=Object(O.useState)({}),Ve=Object(b.a)(Qe,2),We=Ve[0],Xe=Ve[1],Ye=Object(O.useState)("0"),Ze=Object(b.a)(Ye,2),$e=Ze[0],et=Ze[1],tt=Object(O.useRef)(null);Object(O.useEffect)((function(){var e;return lt(),at(1*(null===(e=Object(k.h)(null===R||void 0===R?void 0:R.search))||void 0===e?void 0:e.type)),function(){}}),[]),Object(O.useEffect)((function(){var e;$(null===(e=Object(k.h)(null===R||void 0===R?void 0:R.search))||void 0===e?void 0:e.type)}));var at=function(e){var t=new Map([[0,jt],[1,st],[2,ct],[3,it]]);t.get(e)&&t.get(e)()},ct=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c,n,i=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:0,e.next=3,N({day:t});case 3:a=e.sent,c=a.code,n=a.data,200===c&&Xe(null===n||void 0===n?void 0:n.log);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),nt=function(){tt.current.click(),tt.current.addEventListener("change",dt)},it=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=void 0,Object(x.a)({url:"/getUploadList",method:"GET",params:n});case 2:t=e.sent,a=t.code,c=t.data,200===a&&Ee(null===c||void 0===c?void 0:c.teacherUploadList);case 6:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}(),st=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)({url:"/pointLog",method:"GET"});case 2:t=e.sent,a=t.code,c=t.data,200===a&&Se(null===c||void 0===c?void 0:c.pointLog);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),lt=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)({url:"/getAllArea",method:"GET"});case 2:t=e.sent,a=t.code,c=t.data,200===a&&(ce(ut(c)),oe(c));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),rt=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n={image_urls:ze,remark:He,paper_name:Ae},Object(x.a)({url:"/addTeacherUpload",method:"POST",data:f.a.stringify(n)});case 2:t=e.sent,a=t.code,c=t.msg,200===a?(d.b.success(c),Ue(!1),Me([]),De(""),Ke(""),it()):d.b.error(c);case 6:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}(),dt=function(){var e=Object(v.a)(j.a.mark((function e(t){var a,c,n,i,s,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("\u6267\u884caddEventListener",t),(a=t.target.files).length){e.next=4;break}return e.abrupt("return");case 4:return(c=new FormData).append("img_url",a[0],a[0].name),c.append("file_path","wx_xcx/paper/"),e.next=9,_(c);case 9:n=e.sent,i=n.code,s=n.data,l=n.msg,200===i?(Me([].concat(Object(o.a)(ze),[s.img])),d.b.success(l)):d.b.error(l),tt.current.removeEventListener("change",dt),tt.current.value="";case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ot=function(){var e=Object(v.a)(j.a.mark((function e(t,a,c){var n,i,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l={province_id:t,city_id:a,area_id:c},Object(x.a)({url:"/getSchools",method:"GET",params:l});case 2:n=e.sent,i=n.code,s=n.data,200===i&&Oe(s);case 6:case"end":return e.stop()}var l}),e)})));return function(t,a,c){return e.apply(this,arguments)}}(),ut=function e(t){return null===t||void 0===t?void 0:t.map((function(t){var a={};return a.value=null===t||void 0===t?void 0:t.id,a.label=null===t||void 0===t?void 0:t.name,(null===t||void 0===t?void 0:t.children)&&(a.children=e(null===t||void 0===t?void 0:t.children)),a}))},jt=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c,n,i,s,l,r,o,u,v,b,m,h;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)({url:"/information",method:"GET"});case 2:t=e.sent,a=t.code,c=t.data,n=t.msg,200===a?(z(null===c||void 0===c?void 0:c.teacher),le(null===c||void 0===c||null===(i=c.teacher)||void 0===i?void 0:i.gender),W(null===c||void 0===c||null===(s=c.teacher)||void 0===s?void 0:s.avatar_file),be([null===c||void 0===c||null===(l=c.teacher)||void 0===l?void 0:l.province_id,null===c||void 0===c||null===(r=c.teacher)||void 0===r?void 0:r.city_id,null===c||void 0===c||null===(o=c.teacher)||void 0===o?void 0:o.area_id]),ot(null===c||void 0===c||null===(u=c.teacher)||void 0===u?void 0:u.province_id,null===c||void 0===c||null===(v=c.teacher)||void 0===v?void 0:v.city_id,null===c||void 0===c||null===(b=c.teacher)||void 0===b?void 0:b.area_id),_e(null===c||void 0===c||null===(m=c.teacher)||void 0===m||null===(h=m.get_school)||void 0===h?void 0:h.id)):d.b.error(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),vt=Object(p.jsxs)("div",{children:[B?Object(p.jsx)(y.a,{}):Object(p.jsx)(w.a,{}),Object(p.jsx)("div",{style:{marginTop:8},children:"\u4e0a\u4f20\u5934\u50cf"})]});var bt=function(){var e=Object(v.a)(j.a.mark((function e(t){var a,c,n,i,s,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.file,console.log("customRequest",a),(c=new FormData).append("img_url",a,a.name),c.append("file_path","wx_xcx/avatar/"),e.next=7,_(c);case 7:n=e.sent,i=n.code,s=n.data,l=n.msg,200===i?W(null===s||void 0===s?void 0:s.img):d.b.error(l);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var mt=function(){var e=Object(v.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n={name:null===F||void 0===F?void 0:F.true_name,sex:se,img:V,school_id:fe,email:null===F||void 0===F?void 0:F.email,mobile:null===F||void 0===F?void 0:F.mobile},Object(x.a)({url:"/editInformation",method:"POST",data:f.a.stringify(n)});case 2:t=e.sent,a=t.code,c=t.msg,200===a?d.b.success(c):d.b.error(c);case 6:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{id:"User",children:[Object(p.jsxs)(r.a,{separator:Object(p.jsx)("img",{src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/right_icon.png",style:{width:"0.57rem",height:"0.79rem"}}),children:[Object(p.jsxs)(r.a.Item,{onClick:function(e){e.preventDefault(),localStorage.setItem("menuIndex",0),P.push("/main/index")},style:{cursor:"pointer",color:"#222"},children:[Object(p.jsx)("img",{className:"position",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/position.png",alt:"position",style:{width:"0.86rem",height:"1.14rem",marginRight:"1rem"}}),"\u9996\u9875"]}),Object(p.jsx)(r.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u4e2a\u4eba\u4e2d\u5fc3"}),Object(p.jsx)(r.a.Item,{className:"breaditem",style:{cursor:"pointer",color:"#222"},children:"\u4e2a\u4eba\u8d44\u6599"})]}),Object(p.jsxs)("div",{className:"body_warp",children:[Object(p.jsxs)("div",{className:"left_box",children:[Object(p.jsxs)("div",{className:"top_info",children:[Object(p.jsxs)("div",{className:"perpo",children:[Object(p.jsx)(l.a,{className:"Avatar",size:79,icon:Object(p.jsx)("img",{style:{width:"5.64rem",height:"5.64rem"},src:null===A||void 0===A||null===(t=A.teacher)||void 0===t?void 0:t.avatar_file,alt:"avatar"})}),Object(p.jsx)("div",{className:"name",children:null===A||void 0===A||null===(a=A.teacher)||void 0===a?void 0:a.true_name})]}),Object(p.jsxs)("div",{className:"info",children:[Object(p.jsxs)("div",{className:"subject",children:[Object(p.jsx)("img",{className:"subject_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/subject_icon.png",alt:"subject_icon"}),Object(p.jsx)("span",{children:null===A||void 0===A||null===(u=A.teacher)||void 0===u||null===(g=u.get_subject)||void 0===g?void 0:g.title})]}),Object(p.jsxs)("div",{className:"integral",children:[Object(p.jsx)("img",{className:"integral_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/integral_icon.png",alt:"integral_icon"}),Object(p.jsxs)("span",{children:["\u79ef\u5206\uff1a",null===A||void 0===A||null===(C=A.teacher)||void 0===C?void 0:C.points]})]})]})]}),Object(p.jsx)("div",{className:"bot_menu",children:null===S.f||void 0===S.f?void 0:S.f.map((function(e,t){return Object(p.jsxs)("div",{className:Z==t?"items current_bg":"items",onClick:function(){return function(e){P.push("/main/user?type=".concat(e)),at(e)}(t)},children:[Object(p.jsx)("img",{className:"pic_icon",src:e.img,alt:"icon_small"}),Object(p.jsx)("span",{className:"text",children:e.text})]},t)}))})]}),0==Z?Object(p.jsxs)("div",{className:"right_box",children:[Object(p.jsx)("div",{className:"title",children:"\u57fa\u672c\u4fe1\u606f"}),Object(p.jsxs)("div",{className:"body_box",children:[Object(p.jsxs)("div",{className:"name",children:[Object(p.jsx)("div",{className:"lable",children:"\u59d3\u540d\uff1a"}),Object(p.jsx)(m.a,{className:"iteminput",value:null===F||void 0===F?void 0:F.true_name,disabled:!0})]}),Object(p.jsxs)("div",{className:"sex",children:[Object(p.jsx)("div",{className:"lable",children:"\u6027\u522b\uff1a"}),Object(p.jsxs)(h.a,{className:"itemSelect",value:se.toString(),style:{width:"38.07rem"},onChange:function(e,t){le(e)},children:[Object(p.jsx)(E,{value:"1",children:"\u7537"}),Object(p.jsx)(E,{value:"2",children:"\u5973"})]})]}),Object(p.jsxs)("div",{className:"avatarBox",children:[Object(p.jsx)("div",{className:"lable",children:"\u5934\u50cf\uff1a"}),Object(p.jsxs)("div",{className:"Upload_warp",children:[Object(p.jsx)(s.a,{name:"avatar",listType:"picture-card",className:"avatar-uploader",showUploadList:!1,beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||d.b.error("\u4ec5\u652f\u6301 JPG/PNG \u6587\u4ef6!");var a=e.size/1024/1024<2;return a||d.b.error("\u56fe\u7247\u5927\u5c0f\u5927\u4e8e 2MB!"),console.log(e),t&&a},onChange:function(e){H(!0),function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}(e.file.originFileObj,(function(e){H(!1)}))},customRequest:bt,children:V?Object(p.jsx)("img",{src:V,alt:"avatar",style:{width:"100%"}}):vt}),Object(p.jsx)("div",{className:"Upload_tip",children:"\u652f\u6301.jpg/png/ \u683c\u5f0f"})]})]}),Object(p.jsxs)("div",{className:"sex",children:[Object(p.jsx)("div",{className:"lable",children:"\u5730\u533a\uff1a"}),Object(p.jsx)(i.a,{className:"itemSelect",options:ae,onChange:function(e){be(e),ot(e[0],e[1],e[2]),_e(null)},placeholder:"\u8bf7\u9009\u62e9\u7701/\u5e02/\u533a",value:ve})]}),Object(p.jsxs)("div",{className:"sex",children:[Object(p.jsx)("div",{className:"lable",children:"\u5b66\u6821\uff1a"}),Object(p.jsx)(h.a,{className:"itemSelect",style:{width:"38.07rem"},value:fe,onChange:function(e,t){_e(e)},children:null===pe||void 0===pe?void 0:pe.map((function(e){return Object(p.jsx)(E,{value:null===e||void 0===e?void 0:e.id,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.id)}))})]}),Object(p.jsxs)("div",{className:"name email",children:[Object(p.jsx)("div",{className:"lable",children:"\u90ae\u7bb1\uff1a"}),Object(p.jsx)(m.a,{className:"iteminput",value:null===F||void 0===F?void 0:F.email,disabled:!0}),Object(p.jsx)("span",{className:"changeTip",children:"\u66f4\u6539"})]}),Object(p.jsxs)("div",{className:"name phone",children:[Object(p.jsx)("div",{className:"lable",children:"\u624b\u673a\u53f7\uff1a"}),Object(p.jsx)(m.a,{className:"iteminput",value:null===F||void 0===F?void 0:F.mobile,disabled:!0}),Object(p.jsx)("span",{className:"changeTip",children:"\u66f4\u6539"})]}),Object(p.jsx)("div",{className:"btns",children:Object(p.jsx)(n.a,{type:"primary",className:"btn",onClick:mt,children:"\u4fdd\u5b58"})})]})]}):1==Z?Object(p.jsxs)("div",{className:"right_box",children:[Object(p.jsxs)("div",{className:"integraltitle",children:[Object(p.jsx)("div",{className:"left_title",children:"\u79ef\u5206\u8bb0\u5f55"}),Object(p.jsxs)("div",{className:"current_title",children:["\u5f53\u5e74\u79ef\u5206\uff1a",null===A||void 0===A||null===(T=A.teacher)||void 0===T?void 0:T.points]})]}),Object(p.jsx)("div",{className:"integral_body",children:null===we||void 0===we||null===(G=we.data)||void 0===G?void 0:G.map((function(e){return Object(p.jsxs)("div",{className:"integral_items ",children:[Object(p.jsxs)("div",{className:"left_integrals",children:[Object(p.jsx)("div",{className:"left_integrals_title",children:null===e||void 0===e?void 0:e.remark}),Object(p.jsxs)("div",{className:"left_integrals_info",children:["\u66f4\u65b0\u65f6\u95f4\uff1a",Object(k.g)(1e3*(null===e||void 0===e?void 0:e.add_time),!0)]})]}),Object(p.jsxs)("div",{className:"right_integrals",children:["+",null===e||void 0===e?void 0:e.point]})]},null===e||void 0===e?void 0:e.id)}))})]}):2==Z?Object(p.jsxs)("div",{className:"right_box",children:[Object(p.jsxs)("div",{className:"down_title",children:[Object(p.jsx)("div",{className:"down_left_text",children:"\u4e0b\u8f7d\u8bb0\u5f55"}),Object(p.jsxs)("div",{className:"down_right_box",children:[Object(p.jsxs)(h.a,{style:{width:"11.43rem"},onChange:function(e){et(e)},value:$e,children:[Object(p.jsx)(E,{value:"0",children:"\u5168\u90e8"}),Object(p.jsx)(E,{value:"1",children:"90\u5929\u5185"}),Object(p.jsx)(E,{value:"2",children:"\u534a\u5e74\u5185"}),Object(p.jsx)(E,{value:"3",children:"\u4e00\u5e74\u5185"})]}),Object(p.jsx)(n.a,{type:"primary",className:"down_btns",onClick:function(){var e=new Map([["0","0"],["1","90"],["2","180"],["3","365"]]),t=e.get($e)&&e.get($e);console.log(t),ct(t)},children:"\u67e5\u8be2"})]})]}),Object(p.jsxs)("div",{className:"down_body",children:[Object(p.jsxs)("div",{className:"down_body_title",children:[Object(p.jsx)("div",{className:"name",children:"\u540d\u79f0"}),Object(p.jsx)("div",{className:"time",children:"\u4e0b\u8f7d\u65f6\u95f4"})]}),(null===We||void 0===We?void 0:We.data)?null===We||void 0===We||null===(L=We.data)||void 0===L?void 0:L.map((function(e){var t;return Object(p.jsxs)("div",{className:"down_body_table",children:[Object(p.jsx)("div",{className:"name",children:null===e||void 0===e||null===(t=e.get_teacher_exam)||void 0===t?void 0:t.title}),Object(p.jsx)("div",{className:"time",children:Object(k.g)(1e3*(null===e||void 0===e?void 0:e.update_time),!0)})]},null===e||void 0===e?void 0:e.id)})):Object(p.jsxs)("div",{className:"nodata_down",children:[Object(p.jsx)("img",{className:"nodata_down_img",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/nodata_down.png",alt:"nodata_down_img"}),Object(p.jsx)("div",{className:"nodata_down_title",children:"\u6682\u65e0\u4e0b\u8f7d\u8bb0\u5f55"})]})]})]}):Object(p.jsxs)("div",{className:"right_box",children:[Object(p.jsxs)("div",{className:"upload_title",children:[Object(p.jsx)("div",{className:"upload_left_text",children:"\u4e0a\u4f20\u7684\u8bd5\u5377"}),Le?"":Object(p.jsxs)(n.a,{type:"primary",className:"upload_btn",onClick:function(){Ue(!0)},children:[Object(p.jsx)("img",{className:"btn_plus",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/btn_plus.png",alt:"btn_plus"}),"\u4e0a\u4f20\u7684\u8bd5\u5377"]})]}),Le?Object(p.jsxs)("div",{className:"content_box",children:[Object(p.jsxs)("div",{className:"paperName",children:[Object(p.jsx)("span",{children:"\u8bd5\u5377\u540d\u79f0"}),Object(p.jsx)(m.a,{className:"myInput",placeholder:"\u8bf7\u586b\u5199\u8bd5\u5377\u540d\u79f0",onChange:function(e){var t=e.target.value;De(t)},value:Ae})]}),Object(p.jsxs)("div",{className:"Remarks",children:[Object(p.jsx)("span",{children:"\u5907\u6ce8"}),Object(p.jsx)(I,{className:"myInput",placeholder:"\u8bf7\u586b\u5199\u5907\u6ce8",onChange:function(e){var t=e.target.value;Ke(t)},value:He})]}),ze.length?Object(p.jsxs)("div",{className:"upload_insert",children:[null===ze||void 0===ze?void 0:ze.map((function(e,t){return Object(p.jsxs)("div",{className:"iamge_warp",children:[Object(p.jsx)(c.a,{className:"itemImg",width:"11.43rem",height:"14.29rem",src:e}),Object(p.jsx)("img",{className:"image_delete_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/image_delete_icon.png",alt:"image_delete_icon",onClick:function(){return function(e){var t=Object(o.a)(ze);t.splice(e,1),Me(t)}(t)}})]},t)})),Object(p.jsxs)("div",{className:"listUpload",onClick:nt,children:[Object(p.jsx)("img",{className:"uploadlist",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/uploadlist.png",alt:"uploadlist"}),Object(p.jsx)("span",{children:"\u4e0a\u4f20\u56fe\u7247"})]})]}):Object(p.jsxs)("div",{className:"upload_box",onClick:nt,children:[Object(p.jsx)("img",{className:"upload_icon",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/upload_icon.png",alt:"upload_icon"}),Object(p.jsx)("h1",{children:"\u70b9\u51fb\u4e0a\u4f20\u56fe\u7247"}),Object(p.jsx)("p",{children:"\u683c\u5f0f\uff1aJPG\u3001JPEG2000\u3001PNG"})]}),Object(p.jsx)(n.a,{type:"primary",className:"btns",onClick:rt,children:"\u4fdd\u5b58"})]}):Object(p.jsxs)("div",{className:"upload_body",children:[Object(p.jsxs)("div",{className:"upload_body_title",children:[Object(p.jsx)("div",{className:"name",children:"\u540d\u79f0"}),Object(p.jsx)("div",{className:"time",children:"\u4e0a\u4f20\u65f6\u95f4"}),Object(p.jsx)("div",{className:"isreview",children:"\u5ba1\u6838\u72b6\u6001"})]}),(null===Te||void 0===Te?void 0:Te.data)?null===Te||void 0===Te||null===(U=Te.data)||void 0===U?void 0:U.map((function(e){return Object(p.jsxs)("div",{className:"down_body_table",children:[Object(p.jsx)("div",{className:"name",children:null===e||void 0===e?void 0:e.paper_name}),Object(p.jsx)("div",{className:"time",children:Object(k.g)(1e3*(null===e||void 0===e?void 0:e.add_time))}),Object(p.jsx)("div",{className:1==(null===e||void 0===e?void 0:e.status)?"isreview Pending":2==(null===e||void 0===e?void 0:e.status)?"isreview passed":"isreview notpass",children:1==(null===e||void 0===e?void 0:e.status)?"\u5f85\u5ba1\u6838":2==(null===e||void 0===e?void 0:e.status)?"\u5df2\u901a\u8fc7":"\u672a\u901a\u8fc7"})]},null===e||void 0===e?void 0:e.upload_id)})):Object(p.jsxs)("div",{className:"nodata_down",children:[Object(p.jsx)("img",{className:"nodata_down_img",src:"https://aictb.oss-cn-shanghai.aliyuncs.com/teacher/nodata_down.png",alt:"nodata_down_img"}),Object(p.jsx)("div",{className:"nodata_down_title",children:"\u6682\u65e0\u4e0a\u4f20\u7684\u8bd5\u5377"})]})]})]})]}),Object(p.jsx)("input",{ref:tt,id:"upload",type:"file",name:"file",hidden:!0})]})}t.default=Object(C.b)((function(e){return{homeInfo:e.homeInfo}}),(function(e){return{setData:function(t){var a={type:T.c,value:t};e(a)}}}))(Object(O.memo)(G))}}]);