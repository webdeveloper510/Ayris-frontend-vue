(function(e){function t(t){for(var n,c,s=t[0],l=t[1],i=t[2],u=0,d=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);h&&h(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==a[s]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},c={app:0},a={app:0},r=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-06aaeb17":"314f00fc","chunk-2d0a3545":"36eaf92e","chunk-2d0de3d1":"e2c492cd","chunk-2d0e17f3":"f6846751","chunk-2d0e66a5":"cdc0cfec","chunk-2d237895":"03cf741f","chunk-4565bcdb":"72debf8b","chunk-882c19e0":"f01d677f"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.e=function(e){var t=[],o={"chunk-06aaeb17":1,"chunk-4565bcdb":1,"chunk-882c19e0":1};c[e]?t.push(c[e]):0!==c[e]&&o[e]&&t.push(c[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-06aaeb17":"9bdd56bd","chunk-2d0a3545":"31d6cfe0","chunk-2d0de3d1":"31d6cfe0","chunk-2d0e17f3":"31d6cfe0","chunk-2d0e66a5":"31d6cfe0","chunk-2d237895":"31d6cfe0","chunk-4565bcdb":"c5bdea5d","chunk-882c19e0":"3510c7fd"}[e]+".css",a=l.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===n||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],u=i.getAttribute("data-href");if(u===n||u===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete c[e],h.parentNode.removeChild(h),o(r)},h.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(h)})).then((function(){c[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(h);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",d.name="ChunkLoadError",d.type=n,d.request=c,o[1](d)}a[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var h=u;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"13fd":function(e,t,o){},1722:function(e,t,o){},"2c00":function(e,t,o){"use strict";o("42a5")},"42a5":function(e,t,o){},"4ca6":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function c(e,t,o,c,a,r){return Object(n["x"])(),Object(n["e"])(Object(n["F"])(a.layout))}const a={id:"cleanlayout"};function r(e,t){const o=Object(n["E"])("router-view");return Object(n["x"])(),Object(n["g"])("div",a,[Object(n["k"])(o)])}var s=o("6b0d"),l=o.n(s);const i={},u=l()(i,[["render",r]]);var d=u;const h={id:"container"},g={class:"menu menu-left"},b={class:"text-left"},m={class:"content"},j={class:"menu menu-right"},O={class:"text-right"};function p(e,t,o,c,a,r){const s=Object(n["E"])("HeaderComponent"),l=Object(n["E"])("router-link"),i=Object(n["E"])("CategoryMenuComponent"),u=Object(n["E"])("DynamicContentComponent"),d=Object(n["E"])("FooterComponent"),p=Object(n["E"])("DynamicExtraContent");return Object(n["x"])(),Object(n["g"])("div",{id:"dashboard",class:Object(n["s"])([r.checkFullSize?"fullSize":""])},[Object(n["k"])(s),Object(n["h"])("div",h,[Object(n["h"])("div",g,[Object(n["h"])("div",b,[Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Year")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Era/Style")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Location")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Medium")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Mythology")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Empresses")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Philosophy")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Dream Engine")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Etherith")]),_:1})])]),Object(n["k"])(i,{categories:this.getMenu(!0)},null,8,["categories"])]),Object(n["h"])("div",m,[Object(n["k"])(u)]),Object(n["h"])("div",j,[Object(n["h"])("div",O,[Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Banners")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Heaven")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Music")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Library")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Court")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Empire")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Army")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Market")]),_:1})]),Object(n["h"])("p",null,[Object(n["k"])(l,{to:""},{default:Object(n["M"])(()=>[Object(n["j"])("Treasury")]),_:1})])]),Object(n["k"])(i,{categories:this.getMenu(!1)},null,8,["categories"])])]),Object(n["k"])(d),Object(n["k"])(p,{currentPath:r.getCurrentPath},null,8,["currentPath"])],2)}const f={id:"nav"},v={class:"header-img"},C={class:"header"},I={class:"header-menu"},y={class:"text-header left"},k=Object(n["h"])("p",null,"Gate",-1),S={class:"header-mid-left"},P={class:"text-mid-left-right text-left"},M=Object(n["h"])("div",{class:"header-mid-center"},[Object(n["h"])("div",{class:"text-mid-center"},[Object(n["h"])("p",null,"Ayris Beauty Machine Temple"),Object(n["h"])("p",null,"Earth Esthetic and Ecologic Restoration Machine"),Object(n["h"])("p",null,"Ayris Academy of Decorative Art")])],-1),x={class:"header-mid-right"},$={class:"text-mid-left-right text-right"},w={class:"header-menu"},E={class:"text-header right"};function _(e,t,o,c,a,r){const s=Object(n["E"])("router-link");return Object(n["x"])(),Object(n["g"])("div",f,[Object(n["h"])("div",v,[Object(n["h"])("div",C,[Object(n["h"])("div",I,[Object(n["h"])("div",y,[Object(n["h"])("p",null,[Object(n["k"])(s,{to:"/home"},{default:Object(n["M"])(()=>[Object(n["j"])("Temple")]),_:1})]),k])]),Object(n["h"])("div",S,[Object(n["h"])("div",P,[Object(n["h"])("p",null,[Object(n["k"])(s,{to:"/build"},{default:Object(n["M"])(()=>[Object(n["j"])("Build")]),_:1})])])]),M,Object(n["h"])("div",x,[Object(n["h"])("div",$,[Object(n["h"])("p",null,[Object(n["k"])(s,{to:"/test"},{default:Object(n["M"])(()=>[Object(n["j"])("Search")]),_:1})])])]),Object(n["h"])("div",w,[Object(n["h"])("div",E,[Object(n["h"])("p",null,[r.currentUser?Object(n["f"])("",!0):(Object(n["x"])(),Object(n["e"])(s,{key:0,to:"/login"},{default:Object(n["M"])(()=>[Object(n["j"])("Login ")]),_:1}))]),Object(n["h"])("p",null,[r.currentUser?Object(n["f"])("",!0):(Object(n["x"])(),Object(n["e"])(s,{key:0,to:"/register"},{default:Object(n["M"])(()=>[Object(n["j"])("Register")]),_:1})),r.currentUser&&r.loggedIn?(Object(n["x"])(),Object(n["g"])("a",{key:1,onClick:t[0]||(t[0]=Object(n["O"])((...e)=>r.logOut&&r.logOut(...e),["prevent"]))},"LogOut")):Object(n["f"])("",!0)])])])])])])}o("14d9");var A={name:"HeaderComponent",props:{title:String},computed:{loggedIn(){return console.log("loggedIn"),console.log(this.$store.state.auth.status.loggedIn),this.$store.state.auth.status.loggedIn},currentUser(){return console.log("currentUser"),console.log(this.$store.state.data.user),this.$store.state.data.user?this.$store.state.data.user[0]:null}},methods:{logOut(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}};o("f29e");const H=l()(A,[["render",_]]);var L=H;const F={id:"nav-footer"},N=Object(n["h"])("div",{class:"footer-ext"},[Object(n["h"])("div",{class:"footer-ext-elem left"},[Object(n["h"])("p",null,[Object(n["h"])("a",{href:"#"},"Manifesto")]),Object(n["h"])("p",null,[Object(n["h"])("a",{href:"#"},"Manual")])])],-1),D={class:"footer-center"},T=Object(n["i"])('<div class="footer-center-elem"><div class="footer-center-text ext-left"><p><a href="#">Edit Profile</a></p></div></div><div class="footer-center-elem"><div class="footer-center-text mid-text mid-text-left"><p><a href="#">Live</a></p></div></div><div class="footer-center-elem center"><div class="footer-center-text mid-text-center"><p><a href="#">Intro</a></p></div></div>',3),U={class:"footer-center-elem"},B={class:"footer-center-text mid-text mid-text-right"},J=Object(n["h"])("div",{class:"footer-center-elem"},[Object(n["h"])("div",{class:"footer-center-text ext-right"},[Object(n["h"])("p",null,[Object(n["h"])("a",{href:"#"},"Edit Category")])])],-1),W=Object(n["h"])("div",{class:"footer-ext"},[Object(n["h"])("div",{class:"footer-ext-elem right"},[Object(n["h"])("p",null,[Object(n["h"])("a",{href:"#"},"3D")]),Object(n["h"])("p",null,[Object(n["h"])("a",{href:"#"},"Entrance")])])],-1);function R(e,t,o,c,a,r){const s=Object(n["E"])("router-link");return Object(n["x"])(),Object(n["g"])("div",F,[N,Object(n["h"])("div",D,[T,Object(n["h"])("div",U,[Object(n["h"])("div",B,[Object(n["h"])("p",null,[Object(n["k"])(s,{to:"/home"},{default:Object(n["M"])(()=>[Object(n["j"])("Home")]),_:1})])])]),J]),W])}var z={name:"FooterComponent",computed:{loggedIn(){return console.log("loggedIn"),console.log(this.$store.state.auth.status.loggedIn),this.$store.state.auth.status.loggedIn},currentUser(){return console.log("currentUser"),console.log(this.$store.state.data.user),this.$store.state.data.user?this.$store.state.data.user[0]:null}}};o("99f2");const q=l()(z,[["render",R]]);var V=q;const G={key:0,class:"cat-menu"},K=["id","onClick"];function X(e,t,o,c,a,r){const s=Object(n["E"])("router-link");return o.categories&&o.categories.menu?(Object(n["x"])(),Object(n["g"])("div",G,[(Object(n["x"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(o.categories.menu,e=>(Object(n["x"])(),Object(n["g"])("div",{class:"cat-links",id:e.cat_id,key:e.cat_id,onClick:t=>r.setSelectedCatId(e.cat_id)},[Object(n["k"])(s,{to:{name:"Category",params:{slug:e.cat_slug}}},{default:Object(n["M"])(()=>[Object(n["j"])(Object(n["H"])(e.cat_name),1)]),_:2},1032,["to"])],8,K))),128))])):Object(n["f"])("",!0)}var Y={name:"CategoryMenuComponent",components:{},data(){return{catId:null,cat:null}},props:{slug:String,categories:Object},mounted(){console.log("MOUNTERD"),this.catId=this.$store.state.data.selectedCatId,console.log("this.catId :",this.catId)},methods:{setSelectedCatId(e){console.log("setCatId"),console.log("catId :",e),console.log("this.getSelectedCatId() :",this.getSelectedCatId()),this.getSelectedCatId()!==e?(console.log("Different"),this.$store.dispatch("data/changeSelectedCatId",e),this.catId=e,this.getAllCatOrById()):console.log("SAME")},getSelectedCatId(){return console.log("getCatId"),console.log(" this.$store.state.data.selectedCatId :",this.$store.state.data.selectedCatId),this.$store.state.data.selectedCatId},getAllCatOrById(){console.warn("getAllCatOrById : "),console.log("this.$store.state.data.selectedCatId :",this.$store.state.data.selectedCatId),console.log("this.catId :",this.catId),console.warn("=============================="),this.$store.dispatch("data/getAllCategories",this.catId).then(e=>{console.log("response : ",e),this.cat=e},e=>{console.log(e),this.message=e.response&&e.response.data||e.message||e.toString()})}}};o("ff0e");const Q=l()(Y,[["render",X],["__scopeId","data-v-050b149a"]]);var Z=Q;function ee(e,t,o,c,a,r){return Object(n["x"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("h1",null,"current Page : "+Object(n["H"])(r.currentPage),1),Object(n["h"])("h5",null,Object(n["H"])(c.path),1),(Object(n["x"])(),Object(n["e"])(n["b"],null,[(Object(n["x"])(),Object(n["e"])(Object(n["F"])(c.activeComponent),Object(n["t"])(Object(n["o"])(r.currentProperties)),null,16))],1024))],64)}var te=o("6605"),oe={name:"DynamicContentComponent",components:{HomeComponent:Object(n["l"])(()=>Promise.resolve().then(o.bind(null,"aeb3"))),CategoryComponent:Object(n["l"])(()=>o.e("chunk-2d0e66a5").then(o.bind(null,"993b"))),LoginComponent:Object(n["l"])(()=>o.e("chunk-06aaeb17").then(o.bind(null,"1c92"))),RegisterComponent:Object(n["l"])(()=>o.e("chunk-882c19e0").then(o.bind(null,"ea85"))),BuildComponent:Object(n["l"])(()=>o.e("chunk-2d0e17f3").then(o.bind(null,"7b4f")))},data(){return{currentComponent:null,currentPath:"null"}},setup(){const e=Object(te["c"])(),t=Object(n["c"])(()=>e.path),o=Object(n["c"])(()=>t.value.split("/")[1]),c=Object(n["c"])(()=>"home"===o.value?"HomeComponent":"login"===o.value?"LoginComponent":"register"===o.value?"RegisterComponent":"page"===o.value?"CategoryComponent":"NULLLL");return{path:t,activeComponent:c}},created(){this.$store.dispatch("data/setCurrentPath",this.$route.path),this.getComponent()},updated(){this.$store.dispatch("data/setCurrentPath",this.$route.path)},computed:{currentProperties(){return null},currentPage(){return this.$store.getters["data/getCurrentPage"]}},methods:{getComponent(){console.log(this.currentPage)}}};const ne=l()(oe,[["render",ee]]);var ce=ne;function ae(e,t,o,c,a,r){return Object(n["x"])(),Object(n["e"])(n["b"],null,[(Object(n["x"])(),Object(n["e"])(Object(n["F"])(a.currentComponent),Object(n["t"])(Object(n["o"])(r.currentProperties)),null,16))],1024)}var re={name:"DynamicExtraContentComponent",components:{CategoryListComponent:Object(n["l"])(()=>o.e("chunk-4565bcdb").then(o.bind(null,"f26e")))},props:{currentPath:String},data(){return{currentComponent:null,currentPage:null}},created(){this.currentPage=this.getActivePage(),this.currentComponent=this.getActiveComponent(this.currentPage)},computed:{currentProperties(){let e=this.$store.getters["data/getCurrentPage"];return"page"===e?{categories:{cat:this.$store.state.data.categories}}:null}},updated(){this.currentPage=this.getActivePage(),this.currentComponent=this.getActiveComponent(this.currentPage)},methods:{getActivePage(){return this.$store.getters["data/getCurrentPage"]},getActiveComponent(e){return this.currentComponent="page"===e?"CategoryListComponent":"None",this.currentComponent}}};const se=l()(re,[["render",ae]]);var le=se,ie={name:"DashboardLayoutComponent",data(){return{menu:null,catId:null,cat:null,isFullSize:!1}},components:{FooterComponent:V,HeaderComponent:L,CategoryMenuComponent:Z,DynamicContentComponent:ce,DynamicExtraContent:le},created(){this.getMachine(),this.catId=this.$store.state.data.selectedCatId,this.cat=this.$store.state.data.categories},updated(){console.warn("updated"),this.cat=this.$store.state.data.categories,this.getSize()},computed:{getCurrentPath(){return this.$route.path},loggedIn(){return console.warn("loggedIn"),this.$store.state.auth.status.loggedIn},getcatId(){return this.$store.state.data.selectedCatId},getCat(){return this.$store.state.data.categories},checkFullSize(){return this.$store.state.data.categories&&this.$store.state.data.categories.children.length>0?!this.isFullSize:this.isFullSize}},methods:{getSize(){let e=window,t=document,o=t.documentElement,n=t.getElementsByTagName("body")[0],c=e.innerWidth||o.clientWidth||n.clientWidth,a=e.innerHeight||o.clientHeight||n.clientHeight;console.log("win.innerWidth :",e.innerWidth),console.log("win.innerHeight :",e.innerHeight),console.log("body.clientWidth :",n.clientWidth),console.log("body.clientHeight :",n.clientHeight),console.log("docElem.clientWidth :",o.clientWidth),console.log("docElem.clientHeight :",o.clientHeight),console.log(" resolution :"+c+" x "+a),console.log("header-img :",n.querySelector(".header-img")),console.log("======================")},convertPXToVW(e){return e*(100/document.documentElement.clientWidth)},getMachine(){console.log("getMachine"),console.log("this.$store.state.data.machine :",this.$store.state.data.machine),console.warn("LOAD MACHINE DATA API"),this.$store.dispatch("data/getHome").then(e=>{console.log("response : ",e)},e=>{console.log(e)})},getMenu(e){if(console.warn("getMenu"),this.$store.state.data.machine){let t=this.$store.state.data.machine[0].menu,o=t.length/2;if(t){let n={menu:e?t.slice(0,o):t.slice(o)};return n}console.log("NO MACHINE DATA")}}}};o("2c00"),o("d3a6");const ue=l()(ie,[["render",p],["__scopeId","data-v-67dcddb3"]]);var de=ue,he={components:{CleanLayout:d,DashboardLayout:de},data(){return{layout:null}},watch:{$route(e){void 0!==e.meta.layout?(console.log(" to.meta.layout :",e.meta.layout),this.layout=e.meta.layout):this.layout="DashboardLayout"}}};o("e794"),o("f73b");const ge=l()(he,[["render",c]]);var be=ge,me=o("aeb3");const je=[{path:"/",name:"Index",component:()=>o.e("chunk-2d0de3d1").then(o.bind(null,"8597")),meta:{layout:"CleanLayout"}},{path:"/home",name:"Home",component:me["default"]},{path:"/login",name:"Login",component:()=>o.e("chunk-06aaeb17").then(o.bind(null,"1c92"))},{path:"/register",name:"Register",component:()=>o.e("chunk-882c19e0").then(o.bind(null,"ea85"))},{path:"/reset",name:"ResetPass",component:()=>o.e("chunk-2d237895").then(o.bind(null,"fc13"))},{path:"/profile",name:"Profile",component:()=>o.e("chunk-2d0a3545").then(o.bind(null,"025b"))},{path:"/build",name:"Build",component:()=>o.e("chunk-2d0e17f3").then(o.bind(null,"7b4f"))},{path:"/page/:slug",name:"Category",component:()=>o.e("chunk-2d0e66a5").then(o.bind(null,"993b"))}],Oe=Object(te["a"])({history:Object(te["b"])("/"),routes:je,linkActiveClass:"active"});var pe=Oe,fe=o("5502"),ve=o("bc3a"),Ce=o.n(ve);const Ie="http://54.167.85.36:8000/",ye=Ce.a.create({baseURL:Ie,headers:{Accept:"application/json","Content-Type":"application/json"},withCredentials:!0});var ke=ye;class Se{login(e){return ke.post("api/login/",{email:e.email,password:e.password}).then(e=>(console.log(e.data),console.log(e.data.access),e.data.data.access&&(localStorage.setItem("conf",JSON.stringify(e.data.data)),console.log(localStorage)),e.data))}logout(){return ke.post("logout/",{}).then(e=>{console.log(e),localStorage.getItem("conf"),localStorage.getItem("user"),localStorage.getItem("machine"),localStorage.getItem("auth"),localStorage.removeItem("conf"),localStorage.removeItem("user"),localStorage.removeItem("auth"),localStorage.removeItem("machine")})}register(e){return ke.post("api/register/",{username:e.username,email:e.email,password:e.password,password2:e.password2}).then(e=>(console.log(e),console.log(e.data),e))}}var Pe=new Se;const Me=JSON.parse(localStorage.getItem("conf")),xe=Me?{status:{loggedIn:!0},conf:Me}:{status:{loggedIn:!1},conf:null},$e={namespaced:!0,state:xe,actions:{login({commit:e},t){return Pe.login(t).then(t=>(e("loginSuccess",t),Promise.resolve(t)),t=>(e("loginFailure"),Promise.reject(t)))},logout({commit:e}){console.log("this.state.auth.status.loggedIn :",this.state.auth.status.loggedIn),Pe.logout(),e("logout")},register({commit:e},t){return Pe.register(t).then(t=>(e("registerSuccess"),Promise.resolve(t.data)),t=>(e("registerFailure"),Promise.reject(t)))}},mutations:{loginSuccess(e,t){e.status.loggedIn=!0,e.conf=t,console.log("user : ",e)},loginFailure(e){e.status.loggedIn=!1,e.conf=null},logout(e){this.state.data.user=null,e.status.loggedIn=!1,e.conf=null},registerSuccess(e){e.status.loggedIn=!1},registerFailure(e){e.status.loggedIn=!1}}};class we{getHome(){return ke.get("api/v1/machine/").then(e=>(console.log(e.data),e.data))}getProfile(){return ke.get("api/v1/profile/").then(e=>(console.log(e.data),e.data))}getAllCategories(e){console.warn(e);let t="api/v1/categories/";return e&&(t+=e),ke.get(t).then(e=>(console.log(e.data),e.data))}getBuild(){return ke.get("api/v1/builds/").then(e=>(console.log(e.data),e.data))}}var Ee=new we;const _e=JSON.parse(localStorage.getItem("user")),Ae=JSON.parse(localStorage.getItem("machine")),He=JSON.parse(localStorage.getItem("catId")),Le=JSON.parse(localStorage.getItem("categories")),Fe=JSON.parse(localStorage.getItem("categories")),Ne={machine:Ae||null,user:_e||null,categories:Le||null,selectedCatId:He||null,currentPath:Fe||null},De={namespaced:!0,state:Ne,getters:{getCurrentPage:e=>e.currentPath?e.currentPath.split("/")[1]:null},actions:{setCurrentPath({commit:e},t){console.warn("µµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµµ"),console.warn("payload :",t),e("CurrentPath",t)},getHome({commit:e}){return console.log("from data-store -> getHome()"),Ee.getHome().then(t=>(console.log(t),console.log("-----------"),e("MachineSuccess",t),Promise.resolve(t)),t=>(e("MachineFailure"),console.log(t),Promise.reject(t)))},getProfile({commit:e}){return console.log("from data-store -> getProfile()"),Ee.getProfile().then(t=>(console.log(t),console.log("-----------"),localStorage.setItem("user",JSON.stringify(t)),e("UserProfileSuccess",t),Promise.resolve(t)),t=>(e("UserProfileFailure"),console.log(t),Promise.reject(t)))},getAllCategories({commit:e},t){return console.warn("getAllCategories()"),console.warn("payload :",t),Ee.getAllCategories(t).then(o=>(console.log(o),console.log(t),console.warn("==================================="),e("CategoriesSuccess",o),Promise.resolve(o)),t=>(e("CategoriesFailure"),console.log(t),Promise.reject(t)))},changeSelectedCatId({commit:e},t){console.log("FROM changeSelectedCatId"),console.log("payload :",t),localStorage.setItem("catId",JSON.stringify(t)),e("setSelectedCatId",t)}},mutations:{CurrentPath(e,t){e.currentPath=t},setSelectedCatId(e,t){console.log("FROM setSelectedCatId"),console.log("payload :",t),e.selectedCatId=t,console.log("state.selectedCatId :",e.selectedCatId)},MachineSuccess(e,t){console.log("MachineSuccess : "),console.log("machine : ",t),console.log("this.state.user :",this.state),console.warn(this.state.auth.status.loggedIn),localStorage.setItem("machine",JSON.stringify(t)),e.machine=t},MachineFailure(e){e.machine=null},UserProfileSuccess(e,t){console.log("user : ",t),e.user=t},UserProfileFailure(e){e.user=null},CategoriesSuccess(e,t){localStorage.setItem("categories",JSON.stringify(t)),e.categories=t},CategoriesFailure(e){e.categories=null}}},Te=Object(fe["a"])({modules:{auth:$e,data:De}});var Ue=Te;Object(n["d"])(be).use(Ue).use(pe).mount("#app")},"99f2":function(e,t,o){"use strict";o("e573")},aeb3:function(e,t,o){"use strict";o.r(t);var n=o("7a23");function c(e,t,o,c,a,r){const s=Object(n["E"])("HomeComponent");return Object(n["x"])(),Object(n["e"])(s)}function a(e,t,o,c,a,r){return Object(n["x"])(),Object(n["g"])("h1",null,"Home")}var r={name:"HomeComponent",components:{},data(){return{isMenuUser:!1,username:"matt"}},computed:{loggedIn(){return console.log("loggedIn"),console.log(this.$store.state.auth.status.loggedIn),this.$store.state.auth.status.loggedIn}},methods:{}},s=o("6b0d"),l=o.n(s);const i=l()(r,[["render",a]]);var u=i,d={name:"HomeView",components:{HomeComponent:u}};const h=l()(d,[["render",c]]);t["default"]=h},c468:function(e,t,o){},cbe9:function(e,t,o){},d3a6:function(e,t,o){"use strict";o("c468")},e573:function(e,t,o){},e794:function(e,t,o){"use strict";o("4ca6")},f29e:function(e,t,o){"use strict";o("1722")},f73b:function(e,t,o){"use strict";o("13fd")},ff0e:function(e,t,o){"use strict";o("cbe9")}});
//# sourceMappingURL=app.f0539183.js.map