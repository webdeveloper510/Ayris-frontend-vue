(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22fd8f"],{ea85:function(e,t,s){"use strict";s.r(t);var o=s("7a23");const a=Object(o["h"])("h1",null,"Register",-1);function r(e,t,s,r,n,l){const i=Object(o["E"])("RegisterComponent");return Object(o["x"])(),Object(o["g"])(o["a"],null,[a,Object(o["k"])(i)],64)}const n={id:"login-form"},l={class:"form-group"},i={class:"form-group"},m=Object(o["h"])("label",{for:"username"},"Username",-1),c=Object(o["h"])("label",{for:"email"},"Email",-1),d={class:"form-group"},p=Object(o["h"])("label",{for:"password"},"Password",-1),u={class:"form-group"},b=Object(o["h"])("label",{for:"password2"},"Repeat Password",-1),g=Object(o["h"])("div",{class:"form-group"},[Object(o["h"])("button",{type:"submit"},"Login")],-1),h={class:"form-group",id:"message"};function O(e,t,s,a,r,O){return Object(o["x"])(),Object(o["g"])("form",{onSubmit:t[4]||(t[4]=Object(o["O"])((...e)=>O.handleRegister&&O.handleRegister(...e),["prevent"]))},[Object(o["h"])("div",n,[Object(o["h"])("div",l,[Object(o["h"])("div",i,[m,Object(o["N"])(Object(o["h"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.form.username=e)},null,512),[[o["K"],r.form.username]])]),c,Object(o["N"])(Object(o["h"])("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=e=>r.form.email=e)},null,512),[[o["K"],r.form.email]])]),Object(o["h"])("div",d,[p,Object(o["N"])(Object(o["h"])("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>r.form.password=e)},null,512),[[o["K"],r.form.password]])]),Object(o["h"])("div",u,[b,Object(o["N"])(Object(o["h"])("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>r.form.password2=e)},null,512),[[o["K"],r.form.password2]])]),g,Object(o["h"])("div",h,Object(o["H"])(r.message),1)])],32)}var f={name:"RegisterComponent",components:{},data(){let e={email:"aaa@aaa.com",username:"aaa",password:"aaa",password2:"aaa"};return{loading:!1,message:"",form:e}},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn}},methods:{handleRegister(){this.loading=!0,console.log(this.form),this.$store.dispatch("auth/register",this.form).then(e=>{console.log("response : ",e),console.log(e),this.message=e.email?e.email:e.data.email,this.message+=" Are Registered"},e=>{this.loading=!1,this.message=e.response&&e.response.data||e.message||e.toString()})}}},j=s("6b0d"),w=s.n(j);const v=w()(f,[["render",O]]);var R=v,y={name:"LoginView",components:{RegisterComponent:R}};const U=w()(y,[["render",r]]);t["default"]=U}}]);
//# sourceMappingURL=chunk-2d22fd8f.71c719a2.js.map