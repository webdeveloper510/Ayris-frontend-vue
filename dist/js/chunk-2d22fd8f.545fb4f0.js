(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22fd8f"],{ea85:function(e,t,o){"use strict";o.r(t);var a=o("7a23"),n=Object(a["createElementVNode"])("h1",null,"Register",-1);function r(e,t,o,r,s,c){var l=Object(a["E"])("RegisterComponent");return Object(a["x"])(),Object(a["createElementBlock"])(a["a"],null,[n,Object(a["k"])(l)],64)}var s={id:"login-form"},c={class:"form-group"},l={class:"form-group"},m=Object(a["createElementVNode"])("label",{for:"username"},"Username",-1),d=Object(a["createElementVNode"])("label",{for:"email"},"Email",-1),i={class:"form-group"},u=Object(a["createElementVNode"])("label",{for:"password"},"Password",-1),p={class:"form-group"},f=Object(a["createElementVNode"])("label",{for:"password2"},"Repeat Password",-1),b=Object(a["createElementVNode"])("div",{class:"form-group"},[Object(a["createElementVNode"])("button",{type:"submit"},"Login")],-1),g={class:"form-group",id:"message"};function O(e,t,o,n,r,O){return Object(a["x"])(),Object(a["createElementBlock"])("form",{onSubmit:t[4]||(t[4]=Object(a["O"])((function(){return O.handleRegister&&O.handleRegister.apply(O,arguments)}),["prevent"]))},[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",l,[m,Object(a["N"])(Object(a["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.form.username=e})},null,512),[[a["K"],r.form.username]])]),d,Object(a["N"])(Object(a["createElementVNode"])("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.form.email=e})},null,512),[[a["K"],r.form.email]])]),Object(a["createElementVNode"])("div",i,[u,Object(a["N"])(Object(a["createElementVNode"])("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.form.password=e})},null,512),[[a["K"],r.form.password]])]),Object(a["createElementVNode"])("div",p,[f,Object(a["N"])(Object(a["createElementVNode"])("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.form.password2=e})},null,512),[[a["K"],r.form.password2]])]),b,Object(a["createElementVNode"])("div",g,Object(a["H"])(r.message),1)])],32)}o("d3b7"),o("25f0");var j={name:"RegisterComponent",components:{},data:function(){var e={email:"aaa@aaa.com",username:"aaa",password:"aaa",password2:"aaa"};return{loading:!1,message:"",form:e}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},methods:{handleRegister:function(){var e=this;this.loading=!0,console.log(this.form),this.$store.dispatch("auth/register",this.form).then((function(t){console.log("response : ",t),console.log(t),e.message=t.email?t.email:t.data.email,e.message+=" Are Registered"}),(function(t){e.loading=!1,e.message=t.response&&t.response.data||t.message||t.toString()}))}}},V=o("d959"),E=o.n(V);const N=E()(j,[["render",O]]);var w=N,h={name:"LoginView",components:{RegisterComponent:w}};const v=E()(h,[["render",r]]);t["default"]=v}}]);
//# sourceMappingURL=chunk-2d22fd8f.545fb4f0.js.map