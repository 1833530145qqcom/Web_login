import{o as v,c as g,a,V as f,av as y,aw as b,U as u,W as d,Q as _,u as m,F as R,b as k,af as h,ar as H}from"./@vue.d8b45234.js";import{R as $,a as S,u as A,c as O,b as j}from"./vue-router.d8fa1ebc.js";import{i as C}from"./element-plus.92c511f3.js";import"./lodash-es.a286bec7.js";import"./@vueuse.5706733b.js";import"./@element-plus.0f94806a.js";import"./@popperjs.36402333.js";import"./@ctrl.82a509e0.js";import"./dayjs.46f97078.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.f14f28ca.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const N=""+new URL("logo.da9b9095.svg",import.meta.url).href;const w=(t,r)=>{const s=t.__vccOpts||t;for(const[i,e]of r)s[i]=e;return s},W=t=>(y("data-v-3ba3ab19"),t=t(),b(),t),E={class:"greetings"},F={class:"green"},M=W(()=>a("h3",null,[u(" You\u2019ve successfully created a project with "),a("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite"),u(" + "),a("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),u(". ")],-1)),T={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(r,s)=>(v(),g("div",E,[a("h1",F,f(t.msg),1),M]))}},U=w(T,[["__scopeId","data-v-3ba3ab19"]]);const q=t=>(y("data-v-c8a57aec"),t=t(),b(),t),B=q(()=>a("img",{alt:"Vue logo",class:"logo",src:N,width:"125",height:"125"},null,-1)),D={class:"wrapper"},Y={__name:"App",setup(t){return(r,s)=>(v(),g(R,null,[a("header",null,[B,a("div",D,[d(U,{msg:"You did it!"}),a("nav",null,[d(m($),{to:"/"},{default:_(()=>[u("Home")]),_:1}),d(m($),{to:"/about"},{default:_(()=>[u("About")]),_:1})])])]),d(m(S))],64))}},P=w(Y,[["__scopeId","data-v-c8a57aec"]]);const I=t=>(y("data-v-2dd7bd90"),t=t(),b(),t),G={id:"background"},K=I(()=>a("div",{id:"logo"},"Mysystem",-1)),Q={id:"login"},z={id:"form"},J={id:"clock"},X={id:"time"},Z={id:"date"},ee=I(()=>a("div",{id:"copyright"},"Copyright \xA9 2022 Ranger_C-137 .All Right Reserved.",-1)),te={data(){return{time:"",data:""}},mounted(){this.$nextTick(()=>{setInterval(this.update_clock,1e3)})},methods:{update_clock:function(t){var r=new Date,s=r.getFullYear();s<10&&(s="0"+s);var i=r.getMonth()+1;i<10&&(i="0"+i);var e=r.getDay();e<10&&(e="0"+e);var o=r.getHours();o<10&&(o="0"+o);var n=r.getMinutes();n<10&&(n="0"+n),this.time=o+":"+n,this.date=s+"/"+i+"/"+e}}},oe=Object.assign(te,{__name:"Login",setup(t){const r=A(),s=k(""),i=k(""),e="https://db-api.amarea.cn";function o(){const n=new Headers;n.append("Content-Type","application/json");let l={method:"GET",headers:n,redirect:"follow"};fetch(`${e}/users/${s.value}`,l).then(c=>c.json()).then(c=>{if(c.id!==s.value)throw new Error("\u7528\u6237\u540D\u4E0D\u5B58\u5728");if(c.password===i.value)r.push({name:"home",params:{id:c.id}});else throw new Error("\u5BC6\u7801\u9519\u8BEF")}).catch(c=>alert(c))}return(n,l)=>{const c=h("el-input"),L=h("el-button"),x=h("el-card");return v(),g("div",G,[K,a("div",Q,[d(x,{class:"box-card"},{default:_(()=>[a("div",z,[d(c,{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=p=>s.value=p),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"]),d(c,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=p=>i.value=p),"show-password":""},null,8,["modelValue"]),d(L,{type:"primary",onClick:o},{default:_(()=>[u("\u767B\u5F55")]),_:1})])]),_:1})]),a("div",J,[a("div",X,f(n.time),1),a("div",Z,f(n.date),1)]),ee])}}}),se=w(oe,[["__scopeId","data-v-2dd7bd90"]]),re=O({history:j("./"),routes:[{path:"/",name:"Login",component:se}]});const V=H(P);V.use(C);V.use(re);V.mount("#app");