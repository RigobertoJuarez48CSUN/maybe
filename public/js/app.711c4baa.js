(function(e){function t(t){for(var n,a,u=t[0],s=t[1],i=t[2],l=0,b=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==c[u]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},c={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0fb11daf":"e9cc4003","chunk-23a45120":"52b985bb","chunk-2d22d746":"89d91558","chunk-816fb110":"da201afd","chunk-b244f7a2":"2ce2997b","chunk-ba71b1ca":"2902623a","chunk-cfa4f192":"b14dc76c"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-0fb11daf":1,"chunk-23a45120":1,"chunk-816fb110":1,"chunk-ba71b1ca":1,"chunk-cfa4f192":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-0fb11daf":"5986f55e","chunk-23a45120":"58547b27","chunk-2d22d746":"31d6cfe0","chunk-816fb110":"17a02b6e","chunk-b244f7a2":"31d6cfe0","chunk-ba71b1ca":"17a02b6e","chunk-cfa4f192":"51ccef80"}[e]+".css",c=s.p+n,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===c))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){i=b[u],l=i.getAttribute("data-href");if(l===n||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],f.parentNode.removeChild(f),r(o)},f.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var b=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",b.name="ChunkLoadError",b.type=n,b.request=a,r[1](b)}c[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"05e0":function(e,t,r){"use strict";r("067a")},"067a":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={id:"app"},c=Object(n["g"])("br",null,null,-1),o=Object(n["g"])("br",null,null,-1),u={class:"contianer"};function s(e,t,r,s,i,l){var b=Object(n["w"])("Navbar"),f=Object(n["w"])("Errors"),d=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])("div",a,[Object(n["g"])(b),c,o,Object(n["g"])("div",u,[e.error?(Object(n["p"])(),Object(n["d"])(f,{key:0,msg:e.error},null,8,["msg"])):Object(n["e"])("",!0),Object(n["g"])(d)])])}var i=r("5530"),l=r("5502"),b={class:"navbar navbar-expand-lg navbar-dark bg-dark"},f=Object(n["f"])("Car Rental Service"),d=Object(n["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["g"])("span",{class:"navbar-toggler-icon"})],-1),p={class:"collapse navbar-collapse",id:"navbarSupportedContent"},g={class:"navbar-nav mr-auto"},m={class:"nav-item active"},h=Object(n["f"])("Home "),O=Object(n["g"])("span",{class:"sr-only"},"(current)",-1),j={key:0,class:"nav-item"},v=Object(n["f"])("add car"),k={key:1,class:"nav-item"},y=Object(n["f"])("Car Inventory"),_={key:2,class:"nav-item"},w=Object(n["f"])("Car Rentals"),A={key:3,class:"nav-item"},q=Object(n["f"])("Car Add Rental"),S={key:4,class:"nav-item"},x=Object(n["f"])("Login"),C={key:5,class:"nav-item"},I=Object(n["f"])("Register"),L={key:6,class:"nav-item"},P=Object(n["f"])("Profile"),E={key:7,class:"nav-item"};function R(e,t,r,a,c,o){var u=Object(n["w"])("router-link");return Object(n["p"])(),Object(n["d"])("nav",b,[Object(n["g"])(u,{to:"/",class:"navbar-brand"},{default:Object(n["D"])((function(){return[f]})),_:1}),d,Object(n["g"])("div",p,[Object(n["g"])("ul",g,[Object(n["g"])("li",m,[Object(n["g"])(u,{to:"/",class:"nav-link"},{default:Object(n["D"])((function(){return[h,O]})),_:1})]),"Admin"==e.user.roll?(Object(n["p"])(),Object(n["d"])("li",j,[Object(n["g"])(u,{to:"/addcar",class:"nav-link"},{default:Object(n["D"])((function(){return[v]})),_:1})])):Object(n["e"])("",!0),"Admin"==e.user.roll?(Object(n["p"])(),Object(n["d"])("li",k,[Object(n["g"])(u,{to:"/cars",class:"nav-link"},{default:Object(n["D"])((function(){return[y]})),_:1})])):Object(n["e"])("",!0),"Basic"==e.user.roll?(Object(n["p"])(),Object(n["d"])("li",_,[Object(n["g"])(u,{to:"/rentals",class:"nav-link"},{default:Object(n["D"])((function(){return[w]})),_:1})])):Object(n["e"])("",!0),"Basic"==e.user.roll?(Object(n["p"])(),Object(n["d"])("li",A,[Object(n["g"])(u,{to:"/addrental",class:"nav-link"},{default:Object(n["D"])((function(){return[q]})),_:1})])):Object(n["e"])("",!0),e.isLoggedIn?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("li",S,[Object(n["g"])(u,{to:"/login",class:"nav-link"},{default:Object(n["D"])((function(){return[x]})),_:1})])),e.isLoggedIn?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("li",C,[Object(n["g"])(u,{to:"/register",class:"nav-link"},{default:Object(n["D"])((function(){return[I]})),_:1})])),e.isLoggedIn?(Object(n["p"])(),Object(n["d"])("li",L,[Object(n["g"])(u,{to:"/profile",class:"nav-link"},{default:Object(n["D"])((function(){return[P]})),_:1})])):Object(n["e"])("",!0),e.isLoggedIn?(Object(n["p"])(),Object(n["d"])("li",E,[Object(n["g"])("a",{to:"/logout",class:"nav-link",onClick:t[1]||(t[1]=Object(n["F"])((function(){return o.logoutUser&&o.logoutUser.apply(o,arguments)}),["prevent"]))},"Logout")])):Object(n["e"])("",!0)])])])}var D={computed:Object(i["a"])(Object(i["a"])({},Object(l["c"])(["isLoggedIn"])),Object(l["c"])(["user"])),methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(l["b"])(["logout"])),{},{logoutUser:function(){this.logout()}},Object(l["b"])(["getprofile"])),{},{getProfile:function(){this.getprofile()}})};D.render=R;var T=D,N=Object(n["G"])("data-v-f25c3266");Object(n["s"])("data-v-f25c3266");var B={class:"alert alert-danger"};Object(n["q"])();var G=N((function(e,t,r,a,c,o){return Object(n["p"])(),Object(n["d"])("div",B,Object(n["y"])(r.msg),1)})),H={props:["msg"]};r("05e0");H.render=G,H.__scopeId="data-v-f25c3266";var M=H,U={components:{Navbar:T,Errors:M},computed:Object(i["a"])({},Object(l["c"])(["error"]))};U.render=s;var z=U,F=(r("d3b7"),r("3ca3"),r("ddb0"),r("6c02")),J={class:"home"};function K(e,t,r,a,c,o){return Object(n["p"])(),Object(n["d"])("div",J)}var $={name:"Home",components:{}};$.render=K;var Q=$,V=r("1da1"),W=(r("96cf"),r("bc3a")),X=r.n(W),Y={token:localStorage.getItem("token")||"",user:{},status:"",error:null,roll:null},Z={isLoggedIn:function(e){return!!e.token},authState:function(e){return e.status},user:function(e){return e.user},error:function(e){return e.error},roll:function(e){return e.roll}},ee={login:function(e,t){return Object(V["a"])(regeneratorRuntime.mark((function r(){var n,a,c,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("auth_request"),r.prev=2,r.next=5,X.a.post("/api/users/login",t);case 5:return a=r.sent,a.data.success&&(c=a.data.token,o=a.data.user,localStorage.setItem("token",c),X.a.defaults.headers.common["Authorization"]=c,n("auth_success",c,o)),r.abrupt("return",a);case 10:r.prev=10,r.t0=r["catch"](2),n("auth_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},register:function(e,t){return Object(V["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("register_request"),r.prev=2,r.next=5,X.a.post("/api/users/register",t);case 5:return a=r.sent,void 0!==a.data.success&&n("register_success"),r.abrupt("return",a);case 10:r.prev=10,r.t0=r["catch"](2),n("register_error",r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},getProfile:function(e){return Object(V["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("profile_request"),t.next=4,X.a.get("/api/users/profile");case 4:return n=t.sent,r("user_profile",n.data.user),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))()},logout:function(e){return Object(V["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,localStorage.removeItem("token");case 3:return r("logout"),delete X.a.defaults.headers.common["Authorization"],oe.push("/login"),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})))()}},te={auth_request:function(e){e.error=null,e.status="loading"},auth_success:function(e,t,r){e.token=t,e.user=r,e.status="success",e.error=null},auth_error:function(e,t){e.error=t.response.data.msg},register_request:function(e){e.status="loading",e.error=null},register_success:function(e){e.error=null,e.status="success"},register_error:function(e,t){e.error=t.response.data.msg},logout:function(e){e.status="",e.token="",e.user="",e.error=null},profile_request:function(e){e.status="loading"},user_profile:function(e,t){e.user=t}},re={state:Y,actions:ee,mutations:te,getters:Z},ne=Object(l["a"])({state:{},mutations:{},actions:{},modules:{Auth:re}}),ae=[{path:"/",name:"Home",component:Q},{path:"/about",name:"About",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))},meta:{requiresAuth:!0}},{path:"/login",name:"login",component:function(){return r.e("chunk-ba71b1ca").then(r.bind(null,"a55b"))},meta:{requiresGuest:!0}},{path:"/register",name:"register",component:function(){return r.e("chunk-816fb110").then(r.bind(null,"73cf"))},meta:{requiresGuest:!0}},{path:"/profile",name:"profile",component:function(){return r.e("chunk-b244f7a2").then(r.bind(null,"c66d"))},meta:{requiresAuth:!0}},{path:"/addcar",name:"addcar",component:function(){return r.e("chunk-cfa4f192").then(r.bind(null,"5347"))},meta:{requiresAuth:!0}},{path:"/cars",name:"cars",component:function(){return r.e("chunk-23a45120").then(r.bind(null,"519f"))},meta:{requiresAuth:!0}},{path:"/addrental",name:"addrental",component:function(){return r.e("chunk-0fb11daf").then(r.bind(null,"40cc"))},meta:{requiresAuth:!0}}],ce=Object(F["a"])({history:Object(F["b"])("/"),routes:ae});ce.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))?ne.getters.isLoggedIn?r():r("/login"):e.matched.some((function(e){return e.meta.requiresGuest}))&&ne.getters.isLoggedIn?r("/profile"):r()}));var oe=ce,ue=Object(n["c"])(z).use(ne).use(oe);ue.config.globalProperties.$http=X.a,ue.mount("#app");var se=localStorage.getItem("token");se&&(X.a.defaults.headers.common["Authorization"]=se)}});
//# sourceMappingURL=app.711c4baa.js.map