(function(e){function t(t){for(var o,c,l=t[0],s=t[1],i=t[2],u=0,d=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);h&&h(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},c={app:0},a={app:0},r=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-175a633a":"bc897b2b","chunk-25b5d1dc":"b1edd86c","chunk-2d0e66a5":"723d4c14","chunk-2d237895":"21bf6bc3","chunk-4565bcdb":"e866b752","chunk-54ac37b1":"e32300e1","chunk-7a9d82b4":"54e4d2fd","chunk-7ffb9658":"bdf4d4b2","chunk-92b612f8":"77dd8980","chunk-add72ee6":"8d1e2351","chunk-cdeffae8":"83aaf202","chunk-e065ca72":"516be641","chunk-f49a7708":"55f1cd8a"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-175a633a":1,"chunk-25b5d1dc":1,"chunk-4565bcdb":1,"chunk-54ac37b1":1,"chunk-7a9d82b4":1,"chunk-7ffb9658":1,"chunk-92b612f8":1,"chunk-add72ee6":1,"chunk-cdeffae8":1,"chunk-e065ca72":1,"chunk-f49a7708":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-175a633a":"0593ee04","chunk-25b5d1dc":"f7bbcc7a","chunk-2d0e66a5":"31d6cfe0","chunk-2d237895":"31d6cfe0","chunk-4565bcdb":"c5bdea5d","chunk-54ac37b1":"3322c49b","chunk-7a9d82b4":"304bfbb7","chunk-7ffb9658":"7eb03bdd","chunk-92b612f8":"60a4f3b3","chunk-add72ee6":"bb0dd358","chunk-cdeffae8":"e7f86042","chunk-e065ca72":"75c84ecc","chunk-f49a7708":"0593ee04"}[e]+".css",a=s.p+o,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var i=r[l],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===o||u===a))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){i=d[l],u=i.getAttribute("data-href");if(u===o||u===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete c[e],h.parentNode.removeChild(h),n(r)},h.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(h)})).then((function(){c[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=l(e);var d=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",d.name="ChunkLoadError",d.type=o,d.request=c,n[1](d)}a[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var h=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"10d4":function(e,t,n){},"13fd":function(e,t,n){},"23f5":function(e,t,n){"use strict";n("c490")},3857:function(e,t,n){},"3c94":function(e,t,n){"use strict";var o=n("7a23");const c={id:"nav-footer"},a={class:"footer-ext"},r={class:"footer-ext-elem left"},l={class:"footer-center"},s=Object(o["j"])('<div class="footer-center-elem"><div class="footer-center-text ext-left"><p><a href="#">Edit Profile</a></p></div></div><div class="footer-center-elem"><div class="footer-center-text mid-text mid-text-left"><p><a href="#">Live</a></p></div></div><div class="footer-center-elem center"><div class="footer-center-text mid-text-center"><p><a href="#">Intro</a></p></div></div>',3),i={class:"footer-center-elem"},u={class:"footer-center-text mid-text mid-text-right"},d=Object(o["i"])("div",{class:"footer-center-elem"},[Object(o["i"])("div",{class:"footer-center-text ext-right"},[Object(o["i"])("p",null,[Object(o["i"])("a",{href:"#"},"Edit Category")])])],-1),h=Object(o["i"])("div",{class:"footer-ext"},[Object(o["i"])("div",{class:"footer-ext-elem right"},[Object(o["i"])("p",null,[Object(o["i"])("a",{href:"#"},"3D")]),Object(o["i"])("p",null,[Object(o["i"])("a",{href:"#"},"Entrance")])])],-1);function g(e,t,n,g,b,m){const p=Object(o["G"])("router-link");return Object(o["z"])(),Object(o["h"])("div",c,[Object(o["i"])("div",a,[Object(o["i"])("div",r,[Object(o["i"])("p",null,[Object(o["l"])(p,{to:"/manifesto"},{default:Object(o["N"])(()=>[Object(o["k"])("Manifesto")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(p,{to:"/manual"},{default:Object(o["N"])(()=>[Object(o["k"])("Manual")]),_:1})])])]),Object(o["i"])("div",l,[s,Object(o["i"])("div",i,[Object(o["i"])("div",u,[Object(o["i"])("p",null,[Object(o["l"])(p,{to:"/home"},{default:Object(o["N"])(()=>[Object(o["k"])("Home")]),_:1})])])]),d]),h])}var b={name:"FooterComponent",computed:{loggedIn(){return console.log("loggedIn"),console.log(this.$store.state.auth.status.loggedIn),this.$store.state.auth.status.loggedIn},currentUser(){return console.log("currentUser"),console.log(this.$store.state.data.user),this.$store.state.data.user?this.$store.state.data.user[0]:null}}},m=(n("9398"),n("6b0d")),p=n.n(m);const f=p()(b,[["render",g]]);t["a"]=f},"4ae5":function(e,t,n){"use strict";n("3857")},"4ca6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("7a23");function c(e,t,n,c,a,r){return Object(o["z"])(),Object(o["f"])(Object(o["H"])(a.layout))}const a={id:"cleanlayout"};function r(e,t){const n=Object(o["G"])("router-view");return Object(o["z"])(),Object(o["h"])("div",a,[Object(o["l"])(n)])}var l=n("6b0d"),s=n.n(l);const i={},u=s()(i,[["render",r]]);var d=u;const h={id:"container"},g={class:"content"};function b(e,t,n,c,a,r){const l=Object(o["G"])("DynamicContentComponent"),s=Object(o["G"])("DynamicExtraContent");return Object(o["z"])(),Object(o["h"])("div",{id:"dashboard",class:Object(o["t"])([r.checkFullSize?"fullSize":""])},[Object(o["i"])("div",h,[Object(o["i"])("div",g,[Object(o["l"])(l)])]),Object(o["l"])(s,{currentPath:r.getCurrentPath},null,8,["currentPath"])],2)}function m(e,t,n,c,a,r){return Object(o["z"])(),Object(o["f"])(o["b"],null,[(Object(o["z"])(),Object(o["f"])(Object(o["H"])(c.activeComponent),Object(o["u"])(Object(o["p"])(r.currentProperties)),null,16))],1024)}var p=n("6605"),f={name:"DynamicContentComponent",components:{HomeComponent:Object(o["m"])(()=>Promise.resolve().then(n.bind(null,"aeb3"))),CategoryComponent:Object(o["m"])(()=>n.e("chunk-2d0e66a5").then(n.bind(null,"993b"))),LoginComponent:Object(o["m"])(()=>n.e("chunk-92b612f8").then(n.bind(null,"1c92"))),ProfileComponent:Object(o["m"])(()=>n.e("chunk-cdeffae8").then(n.bind(null,"025b"))),RegisterComponent:Object(o["m"])(()=>n.e("chunk-7ffb9658").then(n.bind(null,"ea85"))),BuildComponent:Object(o["m"])(()=>n.e("chunk-25b5d1dc").then(n.bind(null,"7b4f"))),MythologyComponent:Object(o["m"])(()=>n.e("chunk-add72ee6").then(n.bind(null,"79ec"))),MusicComponent:Object(o["m"])(()=>n.e("chunk-7a9d82b4").then(n.bind(null,"c3de"))),SearchComponent:Object(o["m"])(()=>n.e("chunk-f49a7708").then(n.bind(null,"2a3e"))),ManifestoComponent:Object(o["m"])(()=>n.e("chunk-175a633a").then(n.bind(null,"e41b"))),ManualComponent:Object(o["m"])(()=>n.e("chunk-e065ca72").then(n.bind(null,"f9a0")))},data(){return{currentComponent:null,currentPath:"null"}},setup(){const e=Object(p["c"])(),t=Object(o["d"])(()=>e.path),n=Object(o["d"])(()=>t.value.split("/")[1]),c=Object(o["d"])(()=>"home"===n.value?"HomeComponent":"login"===n.value?"LoginComponent":"register"===n.value?"RegisterComponent":"page"===n.value?"CategoryComponent":"build"===n.value?"BuildComponent":"mythology"===n.value?"MythologyComponent":"music"===n.value?"MusicComponent":"profile"===n.value?"ProfileComponent":"search"===n.value?"SearchComponent":"manifesto"===n.value?"ManifestoComponent":"manual"===n.value?"ManualComponent":"NULLLL");return{path:t,activeComponent:c}},created(){this.$store.dispatch("data/setCurrentPath",this.$route.path),this.getComponent()},updated(){this.$store.dispatch("data/setCurrentPath",this.$route.path)},computed:{currentProperties(){return null},currentPage(){return this.$store.getters["data/getCurrentPage"]}},methods:{getComponent(){console.log(this.currentPage)}}};const O=s()(f,[["render",m]]);var j=O;function v(e,t,n,c,a,r){return Object(o["z"])(),Object(o["f"])(o["b"],null,[(Object(o["z"])(),Object(o["f"])(Object(o["H"])(a.currentComponent),Object(o["u"])(Object(o["p"])(r.currentProperties)),null,16))],1024)}var C={name:"DynamicExtraContentComponent",components:{CategoryListComponent:Object(o["m"])(()=>n.e("chunk-4565bcdb").then(n.bind(null,"f26e")))},props:{currentPath:String},data(){return{currentComponent:null,currentPage:null}},created(){this.currentPage=this.getActivePage(),this.currentComponent=this.getActiveComponent(this.currentPage)},computed:{currentProperties(){let e=this.$store.getters["data/getCurrentPage"];return"page"===e?{categories:{cat:this.$store.state.data.categories}}:null}},updated(){this.currentPage=this.getActivePage(),this.currentComponent=this.getActiveComponent(this.currentPage)},methods:{getActivePage(){return this.$store.getters["data/getCurrentPage"]},getActiveComponent(e){return this.currentComponent="page"===e?"CategoryListComponent":"register"===e?"RegisterComponent":"None",this.currentComponent}}};const k=s()(C,[["render",v]]);var y=k,S={name:"DashboardLayoutComponent",data(){return{menu:null,catId:null,cat:null,isFullSize:!1}},components:{DynamicContentComponent:j,DynamicExtraContent:y},created(){this.getMachine(),this.catId=this.$store.state.data.selectedCatId,this.cat=this.$store.state.data.categories},updated(){console.warn("updated"),this.cat=this.$store.state.data.categories,this.getSize()},computed:{getCurrentPath(){return this.$route.path},loggedIn(){return console.warn("loggedIn"),this.$store.state.auth.status.loggedIn},getcatId(){return this.$store.state.data.selectedCatId},getCat(){return this.$store.state.data.categories},checkFullSize(){return this.$store.state.data.categories&&this.$store.state.data.categories.children.length>0?!this.isFullSize:this.isFullSize}},methods:{getSize(){let e=window,t=document,n=t.documentElement,o=t.getElementsByTagName("body")[0],c=e.innerWidth||n.clientWidth||o.clientWidth,a=e.innerHeight||n.clientHeight||o.clientHeight;console.log("win.innerWidth :",e.innerWidth),console.log("win.innerHeight :",e.innerHeight),console.log("body.clientWidth :",o.clientWidth),console.log("body.clientHeight :",o.clientHeight),console.log("docElem.clientWidth :",n.clientWidth),console.log("docElem.clientHeight :",n.clientHeight),console.log(" resolution :"+c+" x "+a),console.log("header-img :",o.querySelector(".header-img")),console.log("======================")},convertPXToVW(e){return e*(100/document.documentElement.clientWidth)},getMachine(){console.log("getMachine"),console.log("this.$store.state.data.machine :",this.$store.state.data.machine),console.warn("LOAD MACHINE DATA API"),this.$store.dispatch("data/getHome").then(e=>{console.log("response : ",e)},e=>{console.log(e)})},getMenu(e){if(console.warn("getMenu"),this.$store.state.data.machine){let t=this.$store.state.data.machine[0].menu,n=t.length/2;if(t){let o={menu:e?t.slice(0,n):t.slice(n)};return o}console.log("NO MACHINE DATA")}}}};n("4ae5"),n("23f5");const P=s()(S,[["render",b],["__scopeId","data-v-2b8209fc"]]);var I=P,N={components:{CleanLayout:d,DashboardLayout:I},data(){return{layout:null}},watch:{$route(e){void 0!==e.meta.layout?(console.log(" to.meta.layout :",e.meta.layout),this.layout=e.meta.layout):this.layout="DashboardLayout"}}};n("e794"),n("f73b");const w=s()(N,[["render",c]]);var x=w,M=n("aeb3");const $=[{path:"/",name:"Index",component:()=>n.e("chunk-54ac37b1").then(n.bind(null,"8597")),meta:{layout:"CleanLayout"}},{path:"/home",name:"Home",component:M["default"]},{path:"/login",name:"Login",component:()=>n.e("chunk-92b612f8").then(n.bind(null,"1c92"))},{path:"/register",name:"Register",component:()=>n.e("chunk-7ffb9658").then(n.bind(null,"ea85"))},{path:"/reset",name:"ResetPass",component:()=>n.e("chunk-2d237895").then(n.bind(null,"fc13"))},{path:"/profile",name:"Profile",component:()=>n.e("chunk-cdeffae8").then(n.bind(null,"025b"))},{path:"/build",name:"Build",component:()=>n.e("chunk-25b5d1dc").then(n.bind(null,"7b4f"))},{path:"/mythology",name:"Mythology",component:()=>n.e("chunk-add72ee6").then(n.bind(null,"79ec"))},{path:"/page/:slug",name:"Category",component:()=>n.e("chunk-2d0e66a5").then(n.bind(null,"993b"))},{path:"/search",name:"Search",component:()=>n.e("chunk-f49a7708").then(n.bind(null,"2a3e"))},{path:"/manifesto",name:"Manifesto",component:()=>n.e("chunk-175a633a").then(n.bind(null,"e41b"))}],_=Object(p["a"])({history:Object(p["b"])("/"),routes:$,linkActiveClass:"active"});var H=_,A=n("5502"),E=n("bc3a"),L=n.n(E);const z="http://54.167.85.36:8000/",F=L.a.create({baseURL:z,headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:!0});var D=F;class T{login(e){return D.post("api/login/",{email:e.email,password:e.password}).then(e=>(console.log(e.data),console.log(e.data.access),e.data.data.access&&(localStorage.setItem("conf",JSON.stringify(e.data.data)),console.log(localStorage)),e.data))}logout(){return D.post("logout/",{}).then(e=>{console.log(e),localStorage.getItem("conf"),localStorage.getItem("user"),localStorage.getItem("machine"),localStorage.getItem("auth"),localStorage.removeItem("conf"),localStorage.removeItem("user"),localStorage.removeItem("auth"),localStorage.removeItem("machine")})}register(e){return D.post("api/register/",{username:e.username,email:e.email,password:e.password,password2:e.password2}).then(e=>(console.log(e),console.log(e.data),e))}}var U=new T;const J=JSON.parse(localStorage.getItem("conf")),B=J?{status:{loggedIn:!0},conf:J}:{status:{loggedIn:!1},conf:null},W={namespaced:!0,state:B,actions:{login({commit:e},t){return U.login(t).then(t=>(e("loginSuccess",t),Promise.resolve(t)),t=>(e("loginFailure"),Promise.reject(t)))},logout({commit:e}){console.log("this.state.auth.status.loggedIn :",this.state.auth.status.loggedIn),U.logout(),e("logout")},register({commit:e},t){return U.register(t).then(t=>(e("registerSuccess"),Promise.resolve(t.data)),t=>(e("registerFailure"),Promise.reject(t)))}},mutations:{loginSuccess(e,t){e.status.loggedIn=!0,e.conf=t,console.log("user : ",e)},loginFailure(e){e.status.loggedIn=!1,e.conf=null},logout(e){this.state.data.user=null,e.status.loggedIn=!1,e.conf=null},registerSuccess(e){e.status.loggedIn=!1},registerFailure(e){e.status.loggedIn=!1}}};class G{getHome(){return D.get("api/v1/machine/").then(e=>(console.log(e.data),e.data))}getProfile(){return D.get("api/v1/profile/").then(e=>(console.log(e.data),e.data))}getAllCategories(e){console.warn(e);let t="api/v1/categories/";return e&&(t+=e),D.get(t).then(e=>(console.log(e.data),e.data))}getBuild(){return D.get("api/v1/builds/").then(e=>(console.log(e.data),e.data))}}var R=new G;const q=JSON.parse(localStorage.getItem("user")),V=JSON.parse(localStorage.getItem("machine")),K=JSON.parse(localStorage.getItem("catId")),X=JSON.parse(localStorage.getItem("categories")),Y=JSON.parse(localStorage.getItem("categories")),Q={machine:V||null,user:q||null,categories:X||null,selectedCatId:K||null,currentPath:Y||null},Z={namespaced:!0,state:Q,getters:{getCurrentPage:e=>e.currentPath?e.currentPath.split("/")[1]:null},actions:{setCurrentPath({commit:e},t){console.warn("µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ"),console.warn("payload :",t),e("CurrentPath",t)},getHome({commit:e}){return console.log("from data-store -> getHome()"),R.getHome().then(t=>(console.log(t),console.log("-----------"),e("MachineSuccess",t),Promise.resolve(t)),t=>(e("MachineFailure"),console.log(t),Promise.reject(t)))},getProfile({commit:e}){return console.log("from data-store -> getProfile()"),R.getProfile().then(t=>(console.log(t),console.log("-----------"),localStorage.setItem("user",JSON.stringify(t)),e("UserProfileSuccess",t),Promise.resolve(t)),t=>(e("UserProfileFailure"),console.log(t),Promise.reject(t)))},getAllCategories({commit:e},t){return console.warn("getAllCategories()"),console.warn("payload :",t),R.getAllCategories(t).then(n=>(console.log(n),console.log(t),console.warn("==================================="),e("CategoriesSuccess",n),Promise.resolve(n)),t=>(e("CategoriesFailure"),console.log(t),Promise.reject(t)))},changeSelectedCatId({commit:e},t){console.log("FROM changeSelectedCatId"),console.log("payload :",t),localStorage.setItem("catId",JSON.stringify(t)),e("setSelectedCatId",t)}},mutations:{CurrentPath(e,t){e.currentPath=t},setSelectedCatId(e,t){console.log("FROM setSelectedCatId"),console.log("payload :",t),e.selectedCatId=t,console.log("state.selectedCatId :",e.selectedCatId)},MachineSuccess(e,t){console.log("MachineSuccess : "),console.log("machine : ",t),console.log("this.state.user :",this.state),console.warn(this.state.auth.status.loggedIn),localStorage.setItem("machine",JSON.stringify(t)),e.machine=t},MachineFailure(e){e.machine=null},UserProfileSuccess(e,t){console.log("user : ",t),e.user=t},UserProfileFailure(e){e.user=null},CategoriesSuccess(e,t){localStorage.setItem("categories",JSON.stringify(t)),e.categories=t},CategoriesFailure(e){e.categories=null}}},ee=Object(A["a"])({modules:{auth:W,data:Z}});var te=ee;Object(o["e"])(x).use(te).use(H).mount("#app")},7273:function(e,t,n){e.exports=n.p+"img/home-img.b2d7c9d7.gif"},"80f7":function(e,t,n){"use strict";var o=n("7a23");const c={id:"nav"},a={class:"header-img"},r={class:"header"},l={class:"header-menu"},s={class:"text-header left"},i=Object(o["i"])("p",null,"Gate",-1),u={class:"header-mid-left"},d={class:"text-mid-left-right text-left"},h=Object(o["i"])("div",{class:"header-mid-center"},[Object(o["i"])("div",{class:"text-mid-center"},[Object(o["i"])("p",null,"Ayris Beauty Machine Temple"),Object(o["i"])("p",null,"Earth Esthetic and Ecologic Restoration Machine"),Object(o["i"])("p",null,"Ayris Academy of Decorative Art")])],-1),g={class:"header-mid-right"},b={class:"text-mid-left-right text-right"},m={class:"header-menu"},p={class:"text-header right"};function f(e,t,n,f,O,j){const v=Object(o["G"])("router-link");return Object(o["z"])(),Object(o["h"])("div",c,[Object(o["i"])("div",a,[Object(o["i"])("div",r,[Object(o["i"])("div",l,[Object(o["i"])("div",s,[Object(o["i"])("p",null,[Object(o["l"])(v,{to:"/home"},{default:Object(o["N"])(()=>[Object(o["k"])("Temple")]),_:1})]),i])]),Object(o["i"])("div",u,[Object(o["i"])("div",d,[Object(o["i"])("p",null,[Object(o["l"])(v,{to:"/build"},{default:Object(o["N"])(()=>[Object(o["k"])("Build")]),_:1})])])]),h,Object(o["i"])("div",g,[Object(o["i"])("div",b,[Object(o["i"])("p",null,[Object(o["l"])(v,{to:"/search"},{default:Object(o["N"])(()=>[Object(o["k"])("Search")]),_:1})])])]),Object(o["i"])("div",m,[Object(o["i"])("div",p,[Object(o["i"])("p",null,[j.currentUser?Object(o["g"])("",!0):(Object(o["z"])(),Object(o["f"])(v,{key:0,to:"/login"},{default:Object(o["N"])(()=>[Object(o["k"])("Login ")]),_:1}))]),Object(o["i"])("p",null,[j.currentUser?Object(o["g"])("",!0):(Object(o["z"])(),Object(o["f"])(v,{key:0,to:"/register"},{default:Object(o["N"])(()=>[Object(o["k"])("Register")]),_:1})),j.currentUser&&j.loggedIn?(Object(o["z"])(),Object(o["h"])("a",{key:1,onClick:t[0]||(t[0]=Object(o["P"])((...e)=>j.logOut&&j.logOut(...e),["prevent"]))},"LogOut")):Object(o["g"])("",!0)])])])])])])}n("14d9");var O={name:"HeaderComponent",props:{title:String},computed:{loggedIn(){return console.log("loggedIn"),console.log(this.$store.state.auth.status.loggedIn),this.$store.state.auth.status.loggedIn},currentUser(){return console.log("currentUser"),console.log(this.$store.state.data.user),this.$store.state.data.user?this.$store.state.data.user[0]:null}},methods:{logOut(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},j=(n("f6e2"),n("6b0d")),v=n.n(j);const C=v()(O,[["render",f]]);t["a"]=C},9398:function(e,t,n){"use strict";n("10d4")},aeb3:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function c(e,t,n,c,a,r){const l=Object(o["G"])("HomeComponent");return Object(o["z"])(),Object(o["f"])(l)}var a=n("7273"),r=n.n(a);const l={class:"home"},s={class:"menu menu-left"},i={class:"text-left"},u=Object(o["i"])("div",{class:"content"},[Object(o["i"])("div",{class:"home-page"},[Object(o["i"])("span",null,[Object(o["i"])("img",{src:r.a,alt:"home-img"})])])],-1),d={class:"menu menu-right"},h={class:"text-right"};function g(e,t,n,c,a,r){const g=Object(o["G"])("HeaderComponent"),b=Object(o["G"])("router-link"),m=Object(o["G"])("FooterComponent");return Object(o["z"])(),Object(o["h"])(o["a"],null,[Object(o["l"])(g),Object(o["i"])("div",l,[Object(o["i"])("div",s,[Object(o["i"])("div",i,[Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Year")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Era/Style")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Location")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Medium")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:"/mythology"},{default:Object(o["N"])(()=>[Object(o["k"])("Mythology")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Empresses")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Philosophy")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Dream Engine")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Etherith")]),_:1})])])]),u,Object(o["i"])("div",d,[Object(o["i"])("div",h,[Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Banners")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Heaven")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:"/music"},{default:Object(o["N"])(()=>[Object(o["k"])("Music")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Library")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Court")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Empire")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Army")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Market")]),_:1})]),Object(o["i"])("p",null,[Object(o["l"])(b,{to:""},{default:Object(o["N"])(()=>[Object(o["k"])("Treasury")]),_:1})])])])]),Object(o["l"])(m)],64)}var b=n("80f7"),m=n("3c94"),p={name:"HomeComponent",data(){return{isMenuUser:!1,username:"matt"}},components:{FooterComponent:m["a"],HeaderComponent:b["a"]},computed:{loggedIn(){return console.log("loggedIn"),console.log(this.$store.state.auth.status.loggedIn),this.$store.state.auth.status.loggedIn}},methods:{}},f=(n("dac9"),n("6b0d")),O=n.n(f);const j=O()(p,[["render",g]]);var v=j,C={name:"HomeView",components:{HomeComponent:v}};const k=O()(C,[["render",c]]);t["default"]=k},c490:function(e,t,n){},dac9:function(e,t,n){"use strict";n("fe85")},e794:function(e,t,n){"use strict";n("4ca6")},f144:function(e,t,n){},f6e2:function(e,t,n){"use strict";n("f144")},f73b:function(e,t,n){"use strict";n("13fd")},fe85:function(e,t,n){}});
//# sourceMappingURL=app.b6e04fbf.js.map