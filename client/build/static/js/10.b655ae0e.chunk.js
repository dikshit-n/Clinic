(this["webpackJsonpez-walking"]=this["webpackJsonpez-walking"]||[]).push([[10],{109:function(e,a,t){"use strict";var n=t(3),l=t(0),r=t.n(l),c=t(837);t(143);a.a=function(e){var a=["my-card",e.className?e.className:""];return r.a.createElement("div",{className:a.join(" "),style:e.style},e.title?r.a.createElement(l.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("h4",{className:"card-title-responsive",style:Object(n.a)(Object(n.a)({},e.titleStyle),{},{textAlign:e.titleCenter?"center":"left"})},e.title))):null,e.children)}},110:function(e,a,t){e.exports=t.p+"static/media/Default-Profile.9acfe78b.png"},123:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(832),c=t(833),o=t(834),i=t(835),s=t(435),u=t(836),d=t(184),m=t.n(d),f=t(10),p=t(186),b=t.n(p),g=(t(142),t(185),function(e){var a=Object(n.useState)(e.value),t=Object(f.a)(a,2),r=t[0],c=t[1];return l.a.createElement(n.Fragment,null,l.a.createElement("br",null),l.a.createElement(b.a,Object.assign({},e,{placeholderText:e.placeholder,className:"date",dateFormat:"dd-MM-yyyy",selected:r,onChange:function(a){c(a),e.onChange({target:{value:a,name:e.name}})}})))}),E=t(113),v=t(3),h=t(213),y=function(e){return l.a.createElement(h.a,{className:"react-select",classNamePrefix:"react-select",placeholder:e.placeholder,ref:e.ref,value:void 0!==e.value&&null!==e.value?0===e.value.length?null:{value:e.value,label:e.value}:null,onChange:function(a){return e.onChange(null!==a&&void 0!==a?a.label:null,e.name)},name:e.name,styles:{control:function(a){return Object(v.a)(Object(v.a)({background:"rgba(230, 230, 230, 0.823)"},a),e.style)}},options:null===e.options?[]:Object(E.a)(e.options.map((function(e){return{value:e,label:e}})))})};a.a=function(e){var a=m()();return function(){switch(e.type){case"text":return l.a.createElement(r.a,{style:{textAlign:"left"}},l.a.createElement(c.a,{for:a},e.displayName),e.addon?l.a.createElement(o.a,null,l.a.createElement(i.a,{addonType:e.addon.type},l.a.createElement(s.a,null,e.addon.text)),l.a.createElement(u.a,Object.assign({disabled:e.disabled,type:e.type,id:a,name:e.name,value:e.value,onChange:function(a){e.onChange(a)},placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e))):l.a.createElement(u.a,Object.assign({disabled:e.disabled,type:e.type,id:a,name:e.name,value:e.value,onChange:function(a){e.onChange(a)},placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e)));case"textarea":return l.a.createElement(r.a,{style:{textAlign:"left"}},l.a.createElement(c.a,{for:a},e.displayName),e.addon?l.a.createElement(o.a,null,l.a.createElement(i.a,{addonType:e.addon.type},l.a.createElement(s.a,null,e.addon.text)),l.a.createElement(u.a,Object.assign({disabled:e.disabled,type:e.type,id:a,value:e.value,onChange:function(a){e.onChange(a)},name:e.name,placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e))):l.a.createElement(u.a,Object.assign({disabled:e.disabled,type:e.type,id:a,value:e.value,onChange:function(a){e.onChange(a)},name:e.name,placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e)));case"select":return l.a.createElement(r.a,{style:{textAlign:"left"}},l.a.createElement(c.a,{for:a},e.displayName),e.addon?l.a.createElement(o.a,null,l.a.createElement(i.a,{addonType:e.addon.type},l.a.createElement(s.a,null,e.addon.text)),l.a.createElement(y,Object.assign({style:{background:"#fafafa"},name:e.name,value:e.value,onChange:function(a,t){e.onChange(a,t)},options:e.options},e))):l.a.createElement(y,Object.assign({style:{background:"#fafafa"},name:e.name,value:e.value,onChange:function(a,t){e.onChange(a,t)},options:e.options},e)));case"number":return l.a.createElement(r.a,{style:{textAlign:"left"}},l.a.createElement(c.a,{for:a},e.displayName),e.addon?l.a.createElement(o.a,null,l.a.createElement(i.a,{addonType:e.addon.type},l.a.createElement(s.a,null,e.addon.text)),l.a.createElement(u.a,Object.assign({disabled:e.disabled,type:e.type,id:a,value:e.value,onChange:function(a){e.onChange(a)},name:e.name,placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e))):l.a.createElement(u.a,Object.assign({disabled:e.disabled,type:e.type,id:a,value:e.value,onChange:function(a){e.onChange(a)},name:e.name,placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e)));case"date":return l.a.createElement(r.a,{style:{textAlign:"left"}},l.a.createElement(c.a,{for:a},e.displayName),e.addon?l.a.createElement(o.a,null,l.a.createElement(i.a,{addonType:e.addon.type},l.a.createElement(s.a,null,e.addon.text)),l.a.createElement(g,Object.assign({disabled:e.disabled,type:e.type,id:a,value:e.value,onChange:function(a){e.onChange(a)},name:e.name,placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e))):l.a.createElement(g,Object.assign({disabled:e.disabled,type:e.type,id:a,value:e.value,onChange:function(a){e.onChange(a)},name:e.name,placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e)));default:return l.a.createElement(r.a,{style:{textAlign:"left"}},l.a.createElement(c.a,{for:a},e.displayName),e.addon?l.a.createElement(o.a,null,l.a.createElement(i.a,{addonType:e.addon.type},l.a.createElement(s.a,null,e.addon.text)),l.a.createElement(u.a,Object.assign({disabled:e.disabled,type:e.type,id:a,name:e.name,value:e.value,onChange:function(a){e.onChange(a)},placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e))):l.a.createElement(u.a,Object.assign({disabled:e.disabled,type:e.type,id:a,name:e.name,value:e.value,onChange:function(a){e.onChange(a)},placeholder:e.placeholder,required:e.required,readOnly:e.readOnly},e)))}}()}},126:function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(144);a.a=function(e){var a=["info",e.className?e.className:""];return l.a.createElement("div",{className:a.join(" ")},l.a.createElement("p",{className:"small text-center remove-para-margin",style:{color:e.color?e.color:"coral"}},e.info))}},139:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(155),l=t.n(n),r=function(){var e,a,t,n,r;if(!((a=l()(".resize")).length<0)){for(r=[],t=0,n=a.length;t<n;t++)e=a[t],r.push(function(e){var a,t;for(a=function(){var a;return a=parseInt(l()(e).css("font-size").slice(0,-2))-1+"px",l()(e).css("font-size",a)},t=[];e.scrollHeight>e.offsetHeight;)t.push(a());return t}(e));return r}}},142:function(e,a,t){},143:function(e,a,t){},144:function(e,a,t){},167:function(e,a,t){"use strict";var n=t(10),l=t(0),r=t.n(l),c=(t(168),t(1)),o=t(155),i=t.n(o);a.a=Object(c.g)((function(e){var a=Object(l.useState)(!1),t=Object(n.a)(a,2),c=t[0],o=t[1],s=Object(l.useState)(e.location.pathname),u=Object(n.a)(s,2);u[0],u[1];Object(l.useEffect)((function(){window.onscroll=function(){null!==document.getElementById("navbar")&&void 0!==document.getElementById("navbar")&&(document.body.scrollTop>10||document.documentElement.scrollTop>10?(document.getElementById("navbar").style.padding="0px 20px",document.getElementById("navbar").style.width="100vw"):(document.getElementById("navbar").style.padding="10px 20px",document.getElementById("navbar").style.width="95vw"))},i()(document).ready((function(){i()(".nav .dropdown-menu").prev("a").on("click",(function(e){e.preventDefault(),i()(this).parent().find(".dropdown-menu").slideToggle()}))})),i()(document).ready((function(){function e(){var e=i()(".active-route a"),a=i()(e).width()+parseFloat(i()(e).css("padding-left"))+parseFloat(i()(e).css("padding-right")),t=function(){var e,a,t,n,l=0;return i()(".nav-links li").each((function(r,c){if(i()(c).hasClass("active-route"))return!1;e=i()(c).find("a"),a=e.width(),t=parseFloat(e.css("padding-left")),n=parseFloat(e.css("padding-right")),l+=a+t+n})),l}(),n=i()(".active-marker");i()(".active-route a").hasClass(".hide-marker")?(i()(n).css("display","none"),i()(n).css("left",t+40)):(i()(n).css("display","block"),i()(n).css("width",a),i()(n).css("left",t+40))}e(),i()(".nav-links a").click((function(a){a.preventDefault(),i()(".nav-links li").removeClass("active-route"),i()(this).parents("li").addClass("active-route"),e()}))}))}),[window.location.href]);var d=function(a,t){a.preventDefault(),e.history.push(t),m()},m=function(){o((function(e){return!e}))};return r.a.createElement(l.Fragment,null,r.a.createElement("nav",{className:"navbar blurred-nav",id:"navbar"},r.a.createElement("div",{className:"nav-container"},r.a.createElement("div",{className:"nav-header"},r.a.createElement("div",{className:"logo"},e.heading)),r.a.createElement("input",{type:"checkbox",checked:c,id:"menu-toggle",onClick:m}),e.showOnMobile?r.a.createElement("div",{className:"show-on-mobile"},e.showOnMobile):null,r.a.createElement("label",{htmlFor:"menu-toggle",className:"menu-show"},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("div",{className:"nav"},r.a.createElement("ul",{className:"nav-links"},e.routes.map((function(e,a){return e.dropdown?r.a.createElement("li",{className:"nav-item has-dropdown indicate-active drop"+(e.dropdown.options.some((function(e){return window.location.href.includes(e.to)}))?" active-route":""),key:a},r.a.createElement("a",{href:"#",className:"nav-link"},e.dropdown.heading),r.a.createElement("ul",{className:"dropdown-menu"},e.dropdown.options.map((function(e,a){return r.a.createElement("li",{className:"nav-item",key:a},r.a.createElement("a",{className:"nav-link font",href:"#",onClick:function(a){return d(a,e.to)}},e.name))})))):e.component?r.a.createElement("li",{className:"nav-item nav-component indicate-active"+(window.location.href.includes(e.to)?" active-route":""),key:a,onClick:function(a){return d(a,e.to)}},r.a.createElement("a",{style:{visibility:"hidden"},className:"hide-marker"}),e.component):r.a.createElement("li",{className:"nav-item indicate-active"+(window.location.href.includes(e.to)?" active-route":""),key:a},r.a.createElement("a",{href:"#",onClick:function(a){return d(a,e.to)},className:"nav-link font"},e.name))})),r.a.createElement("label",{htmlFor:"menu-toggle",className:"menu-hide"},r.a.createElement("i",{className:"fa fa-times"}))),r.a.createElement("i",{className:"active-marker drop"})))),r.a.createElement("div",{className:"dummy-div"}))}))},168:function(e,a,t){},172:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(18),l=t.n(n),r=t(113),c=t(23),o=new(t(173)),i=function(){var e=Object(c.a)(l.a.mark((function e(a,t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.compress(a,{size:t.size?t.size:2,quality:t.quality?t.quality:.75,maxWidth:1920,maxHeight:1920,resize:void 0!==t.resize&&t.resize}).then((function(e){n(Object(r.a)(e))}));case 1:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}()},174:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(e){return e.endsWith(".jpg")||e.endsWith(".jpeg")||e.endsWith(".png")||e.endsWith(".JPG")||e.endsWith(".JPEG")||e.endsWith(".PNG")||e.endsWith(".JFIF")||e.endsWith(".jfif")||e.endsWith(".webp")||e.endsWith(".WEBP")}},175:function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(226);a.a=function(e){return l.a.createElement("div",{class:"spinner"},l.a.createElement("div",{class:"bounce1"}),l.a.createElement("div",{class:"bounce2"}),l.a.createElement("div",{class:"bounce3"}))}},224:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(838),c=t(109);t(225);a.a=function(e){return l.a.createElement(c.a,{className:"flex-center wrap reverse-at-mobile"},l.a.createElement(r.a,{lg:"6",md:"6",sm:"12"},l.a.createElement("div",{className:"profile-edit-button-loader skeleton-box"}),l.a.createElement("br",null),l.a.createElement("div",{className:"form"},l.a.createElement("br",null),l.a.createElement("div",{className:"skeleton-box field-label-loader"}),l.a.createElement("div",{className:"profile-field-loader skeleton-box"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"skeleton-box field-label-loader"}),l.a.createElement("div",{className:"profile-field-loader skeleton-box"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"skeleton-box field-label-loader"}),l.a.createElement("div",{className:"profile-field-loader skeleton-box"}),l.a.createElement("br",null))),l.a.createElement(r.a,{lg:"6",md:"6",sm:"12",className:"flex-center adjust-onwrap flex-column"},l.a.createElement("div",{className:"profile"},l.a.createElement("div",{className:"profile-page-logo skeleton-box"}))))}},225:function(e,a,t){},226:function(e,a,t){},227:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(838),c=t(109);t(228);a.a=function(e){return l.a.createElement("div",{className:"view-store-loader-container flex-row flex-wrap"},l.a.createElement(r.a,{md:"6",lg:"6",sm:"12",className:"each-view-loader"},l.a.createElement(c.a,{className:"flex-column"},l.a.createElement("div",{className:"profile-round skeleton-box"}),l.a.createElement("br",null),l.a.createElement("div",{className:"store-name-loader skeleton-box"}))),l.a.createElement(r.a,{md:"6",lg:"6",sm:"12",className:"each-view-loader"},l.a.createElement(c.a,{className:"flex-column"},l.a.createElement("div",{className:"profile-round skeleton-box"}),l.a.createElement("br",null),l.a.createElement("div",{className:"store-name-loader skeleton-box"}))),l.a.createElement(r.a,{md:"6",lg:"6",sm:"12",className:"each-view-loader"},l.a.createElement(c.a,{className:"flex-column"},l.a.createElement("div",{className:"profile-round skeleton-box"}),l.a.createElement("br",null),l.a.createElement("div",{className:"store-name-loader skeleton-box"}))),l.a.createElement(r.a,{md:"6",lg:"6",sm:"12",className:"each-view-loader"},l.a.createElement(c.a,{className:"flex-column"},l.a.createElement("div",{className:"profile-round skeleton-box"}),l.a.createElement("br",null),l.a.createElement("div",{className:"store-name-loader skeleton-box"}))))}},228:function(e,a,t){},436:function(e,a,t){},441:function(e,a,t){},442:function(e,a,t){},443:function(e,a,t){},844:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t(1),o=t(35),i=t(167),s=t(113),u=t(32),d=t(3),m=t(10),f=t(123),p=(t(436),t(109)),b=t(13),g=t(31),E=t(33),v=t(437),h=t.n(v),y=function(e){var a=Object(n.useState)({name:"",address:"",country:"",email:"",contactPerson:"",contactNumber:"",latitude:"",longitude:""}),t=Object(m.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(m.a)(o,2),v=i[0],y=i[1],O=Object(n.useState)(""),j=Object(m.a)(O,2),N=j[0],k=j[1],x=Object(n.useState)("success"),w=Object(m.a)(x,2),C=w[0],S=w[1],q=Object(n.useState)(!1),A=Object(m.a)(q,2),P=A[0],T=A[1],z=function(e){var a=e.target,t=a.name,n=a.value;c((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t,n))}))},W=[{name:"name",displayName:"Name",placeholder:"Enter Name",type:"text",value:r.name,onChange:z,required:!0},{name:"address",displayName:"Address",placeholder:"Enter Address",type:"textarea",value:r.address,onChange:z,required:!0},{name:"country",displayName:"Country",placeholder:"Enter Country",type:"select",value:r.country,onChange:function(e,a){c((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(u.a)({},a,e))}))},options:Object(s.a)(h.a.getAllCountries().map((function(e){return e.name}))),required:!0},{name:"email",displayName:"Email",placeholder:"Enter Email",type:"email",value:r.email,onChange:z,required:!0},{name:"contactPerson",displayName:"Contact Person",placeholder:"Enter Contact Person",type:"text",value:r.contactPerson,onChange:z,required:!0},{name:"contactNumber",displayName:"Contact Number",placeholder:"Enter Contact Number",type:"number",value:r.contactNumber,onChange:z,required:!0},{name:"latitude",type:"number",displayName:"Latitude",placeholder:"Enter Latitude",value:r.latitude,onChange:z,required:!0},{name:"longitude",type:"number",displayName:"Longitude",placeholder:"Enter Longitude",value:r.longitude,onChange:z,required:!0}];return console.log(navigator.geolocation),l.a.createElement(p.a,{title:"ADD NEW PARTNER"},l.a.createElement(E.a,{type:C,message:N,hideAlert:function(){y(!1),"error"!==C&&c({name:"",address:"",country:"",email:"",contactPerson:"",contactNumber:"",latitude:"",longitude:""})},show:v}),l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),T(!0),b.a.post("/signup/partner",r).then((function(e){T(!1),y(!0),k("Success"),S("success")})).catch((function(e){T(!1),y(!0),k("Error"),S("error")}))}},W.map((function(e,a){return l.a.createElement(f.a,Object.assign({key:a},e))})),l.a.createElement(g.a,{loading:P,disabled:!Object(s.a)(Object.values(r)).every((function(e){return""!==e.trim()})),className:"bg-green lg",type:"submit"},"Create")))},O=t(18),j=t.n(O),N=t(23),k=t(838),x=t(126),w=t(172),C=t(174),S=t(224),q=(t(441),function(e){var a=Object(n.useState)({name:"",email:"",address:"",logo:t(110)}),r=Object(m.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)({name:"",email:"",address:"",logo:t(110)}),s=Object(m.a)(i,2),v=s[0],h=s[1],y=Object(n.useRef)(),O=Object(n.useState)(!1),q=Object(m.a)(O,2),A=q[0],P=q[1],T=Object(n.useState)(!1),z=Object(m.a)(T,2),W=z[0],I=z[1],F=Object(n.useState)(!1),D=Object(m.a)(F,2),R=D[0],B=D[1],M=Object(n.useState)(""),L=Object(m.a)(M,2),J=L[0],G=L[1],U=Object(n.useState)("success"),H=Object(m.a)(U,2),V=H[0],Y=H[1],K=Object(n.useState)(!1),Q=Object(m.a)(K,2),X=Q[0],Z=Q[1],$=Object(n.useState)(!1),_=Object(m.a)($,2),ee=_[0],ae=_[1],te=Object(n.useState)(!1),ne=Object(m.a)(te,2),le=ne[0],re=ne[1],ce=Object(n.useState)(!1),oe=Object(m.a)(ce,2),ie=oe[0],se=oe[1],ue=Object(n.useState)(!1),de=Object(m.a)(ue,2),me=(de[0],de[1]),fe=Object(n.useState)(" "),pe=Object(m.a)(fe,2),be=pe[0],ge=pe[1],Ee=Object(n.useState)("coral"),ve=Object(m.a)(Ee,2),he=ve[0],ye=ve[1],Oe=function(e){var a=e.target,t=a.name,n=a.value;o((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},t,n))}))},je=[{name:"name",displayName:"Name",placeholder:A?"Enter Name":"",type:"text",value:c.name,onChange:Oe,required:!0,spellCheck:!1},{name:"email",displayName:"Email",placeholder:A?"Enter Email":"",type:"email",value:c.email,disabled:!0,onChange:Oe,required:!0,spellCheck:!1},{name:"address",displayName:"Address",placeholder:A?"Enter Address":"",type:"textarea",value:c.address,onChange:Oe,spellCheck:!1}];Object(n.useEffect)((function(){Ne()}),[]);var Ne=function(){Z(!0),b.a.post("/adminprofile").then((function(e){Z(!1),200===e.status?(o((function(a){return Object(d.a)(Object(d.a)({},a),e.data)})),h((function(a){return Object(d.a)(Object(d.a)({},a),e.data)}))):(o((function(e){return Object(d.a)(Object(d.a)({},e),{},{name:"",email:"",address:"",logo:t(110)})})),h((function(e){return Object(d.a)(Object(d.a)({},e),{},{name:"",email:"",address:"",logo:t(110)})}))),console.log(e)})).catch((function(e){Z(!1),o((function(e){return Object(d.a)(Object(d.a)({},e),{},{name:"",email:"",address:"",logo:t(110)})})),h((function(e){return Object(d.a)(Object(d.a)({},e),{},{name:"",email:"",address:"",logo:t(110)})}))}))},ke=function(){var e=Object(N.a)(j.a.mark((function e(a){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(se(!0),ge(" "),void 0===a.target.files[0]){e.next=27;break}if(me(!0),re(Object(C.a)(a.target.files[0].name)),Object(C.a)(a.target.files[0].name)){e.next=12;break}return ge("Choose only .jpeg / .jpg / .png / .jfif / .webp"),re(!1),o((function(e){return Object(d.a)({},e)})),e.abrupt("return");case 12:if(!(a.target.files[0].size>2e6)){e.next=19;break}return ge("Size should be within 2MB"),re(!1),o((function(e){return Object(d.a)({},e)})),e.abrupt("return");case 19:return I(!0),ye("green"),ge("Your image is being processed..."),t=function(e){var a=e[0].prefix+e[0].data;o((function(e){return Object(d.a)(Object(d.a)({},e),{},{logo:a})})),me(!1),xe(a)},e.next=25,Object(w.a)([a.target.files[0]],{size:.5},t);case 25:e.next=30;break;case 27:re(!1),ge("No file Choosen"),o((function(e){return Object(d.a)({},e)}));case 30:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),xe=function(e){ge("Uploading..."),b.a.post("/updateadminprofile",Object(d.a)(Object(d.a)({},v),{},{logo:e})).then((function(e){ge(" "),console.log(e.data),I(!1),200===e.status&&(G("Profile updated !"),B(!0),Y("success"))})).catch((function(e){o((function(e){return Object(d.a)(Object(d.a)({},e),{},{logo:v.logo})})),I(!1),ge("Something went Wrong !"),G("Profile Not updated !"),B(!0),Y("error")}))},we=function(){y.current.click()};return l.a.createElement("div",null,X?l.a.createElement(S.a,null):0===c.length?l.a.createElement("h4",{className:"margin-auto text-center"},l.a.createElement("br",null),l.a.createElement("br",null),"Something went Wrong !"):l.a.createElement(p.a,{className:"flex-center wrap reverse-at-mobile"},l.a.createElement(k.a,{lg:"6",md:"6",sm:"12"},l.a.createElement(g.a,{className:"lg"+(A?" bg-red":" bg-green"),type:"button",onClick:function(){y&&o((function(e){return Object(d.a)(Object(d.a)({},v),{},{logo:e.logo})})),P((function(e){return!e}))}},A?"Cancel":"Edit"),l.a.createElement("br",null),l.a.createElement(E.a,{type:V,message:J,hideAlert:function(){B(!1),P(!1),ge(" "),ye("coral"),"error"!==V&&Ne()},show:R}),A?l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),ae(!0),b.a.post("/updateadminprofile",c).then((function(e){console.log(e.data),ae(!1),200===e.status&&(G("Profile updated !"),B(!0),Y("success"))})).catch((function(e){ae(!1),G("Profile Not updated !"),B(!0),Y("error")}))}},je.map((function(e,a){return l.a.createElement(f.a,Object.assign({key:a},e))})),l.a.createElement(g.a,{loading:ee,disabled:![c.name,c.email].every((function(e){return""!==e.trim()})),className:"bg-green lg",type:"submit"},"Update")):l.a.createElement("div",{className:"form"},je.map((function(e,a){return l.a.createElement(f.a,Object.assign({key:a},e,{disabled:!0}))})),l.a.createElement(g.a,{loading:ee,disabled:!0,type:"button",style:{visibility:"hidden"}},"Update"))),l.a.createElement(k.a,{lg:"6",md:"6",sm:"12",className:"flex-center adjust-onwrap flex-column"},l.a.createElement("div",{className:"profile"},l.a.createElement("input",{ref:y,type:"file",style:{position:"absolute",visibility:"hidden"},onChange:ke}),null===c.logo||!le&&ie?l.a.createElement("div",{style:{backgroundImage:"url("+t(110)+")"},alt:" ",className:"profile-page-logo ".concat(W?"skeleton-loading":"")},l.a.createElement("div",{onClick:W?function(){}:function(){return we()}},l.a.createElement("p",null,"Edit"))):l.a.createElement("div",{style:{backgroundImage:"url("+c.logo+")"},alt:" ",className:"profile-page-logo ".concat(W?"skeleton-loading":"")},l.a.createElement("div",{onClick:W?function(){}:function(){return we()}},l.a.createElement("p",null,"Edit")))),l.a.createElement(x.a,{info:be,color:he}))))}),A=(t(442),t(443),t(139)),P=t(175),T=t(227),z=0,W=function(e){var a=Object(n.useState)([]),r=Object(m.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(!1),u=Object(m.a)(i,2),d=u[0],f=u[1],E=Object(n.useState)(!1),v=Object(m.a)(E,2),h=v[0],y=v[1],O=Object(n.useState)(!1),x=Object(m.a)(O,2),w=x[0],C=x[1];Object(n.useEffect)((function(){return Object(A.a)(),S(!0),function(){return z=0}}),[]);var S=function(e){e?f(!0):y(!0),b.a.post("/viewpartner",{skip:z}).then((function(a){console.log(a.data),f(!1),y(!1),a.data.length>=0&&a.data.length<6&&C(!0),e?200===a.status&&o((function(e){var t=Object(s.a)(e);return a.data.map((function(e){t.push(e)})),t})):setTimeout((function(){200===a.status&&o((function(e){var t=Object(s.a)(e);return a.data.map((function(e){t.push(e)})),t}))}),500)})).catch((function(e){f(!1),y(!1),o((function(e){return Object(s.a)(e)})),console.log(e)}))},q=function(){var e=Object(N.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z+=6,S();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(h),l.a.createElement("div",null,d?l.a.createElement(T.a,null):0===c.length?l.a.createElement("div",{className:"flex-center flex-column"},l.a.createElement("br",null),l.a.createElement("h4",null,"No Partners !"),l.a.createElement("br",null),l.a.createElement(g.a,{onClick:function(){return e.history.replace("/add")}},"Add New Partner")):l.a.createElement("div",{className:"stores-container",id:"container"},c.map((function(e,a){return l.a.createElement(k.a,{key:a,md:"6",lg:"6",sm:"12"},l.a.createElement(p.a,{className:"margin-5 hover-shrink relative pointer each-store"},l.a.createElement("div",{className:"flex-center flex-column"},l.a.createElement("div",{className:"partner-logo",style:{backgroundImage:"url("+(e.logo?e.logo:t(110))+")"}}),l.a.createElement("h3",{className:"resize adjust break-word flex-column flex-center"},l.a.createElement("h4",{style:{marginTop:10}},e.name),l.a.createElement("div",{className:"flex-center flex-row",style:{marginLeft:-20,marginTop:5}},l.a.createElement("i",{className:"material-icons",style:{fontSize:25,marginTop:-9,color:"red"}},"\ue0c8"),l.a.createElement("h4",{className:"break-word"},e.country))))))})),l.a.createElement("div",{className:"margin-auto ease"},l.a.createElement("br",null),h?l.a.createElement(P.a,null):l.a.createElement("button",{onClick:q,disabled:w,className:"margin-auto ease bg-green"},"Show More..."))))};a.default=Object(r.b)((function(e){return{auth:null!==e.login.token,logo:e.login.logo}}))((function(e){var a=[{dropdown:{heading:"PARTNERS",options:[{name:"ADD PARTNER",to:"/add"},{name:"VIEW PARTNER",to:"/view",initialActive:!0}]}},{name:"LOGOUT",to:"/logout"},{component:l.a.createElement("div",{className:"nav-logo",style:{backgroundImage:"url("+(null!==e.logo?e.logo:t(110))+")"}}),to:"/profile"}];return l.a.createElement("div",null,l.a.createElement(i.a,{style:{background:"transparent"},showOnMobile:l.a.createElement("div",{className:"nav-logo-mobile",onClick:function(){return e.history.push("/profile")},style:{backgroundImage:"url("+(null!==e.logo?e.logo:t(110))+")"}}),routes:a,heading:l.a.createElement("img",{src:t(55),alt:"logo"})}),l.a.createElement("br",null),l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"/profile",component:Object(o.a)(q)}),l.a.createElement(c.b,{path:"/add",component:Object(o.a)(y)}),l.a.createElement(c.b,{path:"/view",component:Object(o.a)(W)}),l.a.createElement(c.a,{to:e.auth?"/view":"/auth"})))}))}}]);
//# sourceMappingURL=10.b655ae0e.chunk.js.map