(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3545"],{"025b":function(e,t,o){"use strict";o.r(t);var n=o("7a23");const s=Object(n["i"])("h1",null,"Profile",-1);function r(e,t,o,r,l,i){const c=Object(n["G"])("Profile",!0);return Object(n["z"])(),Object(n["h"])(n["a"],null,[s,Object(n["l"])(c)],64)}const l=Object(n["i"])("h3",null,"edit profile",-1),i=Object(n["i"])("div",{id:"links"},[Object(n["i"])("pre",null,[Object(n["k"])("      "),Object(n["i"])("a",{href:"/build"},"Build Page"),Object(n["k"])("\n      "),Object(n["i"])("a",{href:"/category"},"Edit Category"),Object(n["k"])("\n      "),Object(n["i"])("br"),Object(n["k"])("\n      "),Object(n["i"])("a",{href:"",class:"todo"},"Change password"),Object(n["k"])("\n    ")])],-1),c={key:0};function a(e,t,o,s,r,a){return Object(n["z"])(),Object(n["h"])(n["a"],null,[l,i,r.userProfile?(Object(n["z"])(),Object(n["h"])("div",c,Object(n["J"])(r.userProfile),1)):Object(n["g"])("",!0)],64)}var d={name:"ProfileComponent",components:{},data(){return{loading:!1,message:"",userProfile:null}},computed:{loggedIn(){return console.log("loggedIn"),this.$store.state.auth.status.loggedIn}},created(){this.loggedIn&&(console.log("coucou profile"),this.handleProfile())},methods:{handleProfile(){console.log("handleProfile"),console.warn(this.$store.state.data.user),console.warn("LOAD DATA API"),this.$store.dispatch("data/getProfile").then(e=>{console.log("response : ",e),this.loading=!0,this.userProfile=e},e=>{this.loading=!1,this.message=e.response&&e.response.data||e.message||e.toString()})}}},b=o("6b0d"),u=o.n(b);const h=u()(d,[["render",a]]);var g=h,O={name:"ProfileView",components:{Profile:g}};const j=u()(O,[["render",r]]);t["default"]=j}}]);
//# sourceMappingURL=chunk-2d0a3545.b0d1c5e3.js.map