(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e0e03d6"],{"993b":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),o={id:"category"},c=Object(a["createElementVNode"])("h1",null,"Category Page",-1);function r(t,e,n,r,s,u){var l=Object(a["E"])("CategoryShowComponent");return Object(a["x"])(),Object(a["createElementBlock"])("div",o,[c,Object(a["k"])(l,Object(a["normalizeProps"])(Object(a["guardReactiveProps"])(u.getSlug)),null,16)])}n("b0c0");var s=Object(a["createElementVNode"])("h3",null,"Cat Show",-1),u={key:0},l=Object(a["j"])(" cat Id : "),i={key:1},d=Object(a["createElementVNode"])("br",null,null,-1),g={key:2};function b(t,e,n,o,c,r){return Object(a["x"])(),Object(a["createElementBlock"])(a["a"],null,[s,n.slug?(Object(a["x"])(),Object(a["createElementBlock"])("div",u,"this slug : "+Object(a["H"])(n.slug),1)):Object(a["f"])("",!0),l,r.getCatId?(Object(a["x"])(),Object(a["createElementBlock"])("div",i,Object(a["H"])(r.getCatId),1)):Object(a["f"])("",!0),d,r.getCat?(Object(a["x"])(),Object(a["createElementBlock"])("div",g,[Object(a["createElementVNode"])("h5",null,Object(a["H"])(r.getCat.name),1),Object(a["j"])(" Counter : "+Object(a["H"])(r.getCat.counter),1)])):Object(a["f"])("",!0)],64)}var h={name:"CategoryShowComponent",components:{},data:function(){return{catId:null,cat:null}},props:{slug:String},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn},getCatId:function(){return console.warn("GET CAT ID"),console.warn("this.catId :",this.catId),console.log("this.$store.state.data.selectedCatId : ",this.$store.state.data.selectedCatId),this.$store.state.data.selectedCatId},getCat:function(){return console.warn("getCat ---------------"),console.log("this.cat :",this.cat),console.log(this.$store.state.data.categories),this.$store.state.data.categories}},created:function(){this.setCat()},updated:function(){this.setCat()},methods:{setCat:function(){this.cat=this.getCat}}},j=n("d959"),m=n.n(j);const O=m()(h,[["render",b]]);var C=O,f={name:"CategoryView",components:{CategoryShowComponent:C},created:function(){var t=this;console.log("$route.params.slug :",this.$route.params.slug),this.$watch((function(){return t.$route.params}),(function(t,e){console.warn("toParams :",t),console.warn("previousParams :",e)}))},computed:{getSlug:function(){return{slug:this.$route.params.slug}}}};const p=m()(f,[["render",r]]);e["default"]=p},b0c0:function(t,e,n){var a=n("83ab"),o=n("5e77").EXISTS,c=n("e330"),r=n("9bf2").f,s=Function.prototype,u=c(s.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,i=c(l.exec),d="name";a&&!o&&r(s,d,{configurable:!0,get:function(){try{return i(l,u(this))[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-0e0e03d6.0efe7909.js.map