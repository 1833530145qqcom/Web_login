import{o as v,P as V,u as k,b as m,af as u,c as x,a as d,W as l,Q as f,V as h,U as L,av as I,aw as O,ar as R}from"./@vue.d8b45234.js";import{R as A,u as C,c as N,a as E}from"./vue-router.18fbd1b2.js";import{i as H}from"./element-plus.92c511f3.js";import"./lodash-es.a286bec7.js";import"./@vueuse.5706733b.js";import"./@element-plus.0f94806a.js";import"./@popperjs.36402333.js";import"./@ctrl.82a509e0.js";import"./dayjs.46f97078.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.f14f28ca.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y=(a,r)=>{const o=a.__vccOpts||a;for(const[n,e]of r)o[n]=e;return o};const S={__name:"App",setup(a){return(r,o)=>(v(),V(k(A)))}},B=y(S,[["__scopeId","data-v-084aaced"]]);const g=a=>(I("data-v-2dd7bd90"),a=a(),O(),a),M={id:"background"},T=g(()=>d("div",{id:"logo"},"Mysystem",-1)),W={id:"login"},$={id:"form"},j={id:"clock"},D={id:"time"},P={id:"date"},U=g(()=>d("div",{id:"copyright"},"Copyright \xA9 2022 Ranger_C-137 .All Right Reserved.",-1)),q={data(){return{time:"",data:""}},mounted(){this.$nextTick(()=>{setInterval(this.update_clock,1e3)})},methods:{update_clock:function(a){var r=new Date,o=r.getFullYear();o<10&&(o="0"+o);var n=r.getMonth()+1;n<10&&(n="0"+n);var e=r.getDay();e<10&&(e="0"+e);var t=r.getHours();t<10&&(t="0"+t);var s=r.getMinutes();s<10&&(s="0"+s),this.time=t+":"+s,this.date=o+"/"+n+"/"+e}}},F=Object.assign(q,{__name:"Login",setup(a){const r=C(),o=m(""),n=m(""),e="https://db-api.amarea.cn";function t(){const s=new Headers;s.append("Content-Type","application/json");let c={method:"GET",headers:s,redirect:"follow"};fetch(`${e}/users/${o.value}`,c).then(i=>i.json()).then(i=>{if(i.id!==o.value)throw new Error("\u7528\u6237\u540D\u4E0D\u5B58\u5728");if(i.password===n.value)r.push({name:"home",params:{id:i.id}});else throw new Error("\u5BC6\u7801\u9519\u8BEF")}).catch(i=>alert(i))}return(s,c)=>{const i=u("el-input"),b=u("el-button"),w=u("el-card");return v(),x("div",M,[T,d("div",W,[l(w,{class:"box-card"},{default:f(()=>[d("div",$,[l(i,{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=p=>o.value=p),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"]),l(i,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",modelValue:n.value,"onUpdate:modelValue":c[1]||(c[1]=p=>n.value=p),"show-password":""},null,8,["modelValue"]),l(b,{type:"primary",onClick:t},{default:f(()=>[L("\u767B\u5F55")]),_:1})])]),_:1})]),d("div",j,[d("div",D,h(s.time),1),d("div",P,h(s.date),1)]),U])}}}),G=y(F,[["__scopeId","data-v-2dd7bd90"]]),K=N({history:E("./"),routes:[{path:"/",name:"Login",component:G}]});const _=R(B);_.use(H);_.use(K);_.mount("#app");
