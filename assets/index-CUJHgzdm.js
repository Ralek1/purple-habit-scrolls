const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./App-CZ-3QUGd.js","./react-vendor-CtpGforg.js","./icons-B6S_TQI7.js","./App-C0w4iK_t.css"])))=>i.map(i=>d[i]);
import{c as w,j as y}from"./react-vendor-CtpGforg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const g="modulepreload",E=function(a,o){return new URL(a,o).href},p={},v=function(o,c,l){let e=Promise.resolve();if(c&&c.length>0){const n=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),m=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.allSettled(c.map(s=>{if(s=E(s,l),s in p)return;p[s]=!0;const d=s.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!l)for(let u=n.length-1;u>=0;u--){const f=n[u];if(f.href===s&&(!d||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${h}`))return;const i=document.createElement("link");if(i.rel=d?"stylesheet":g,d||(i.as="script"),i.crossOrigin="",i.href=s,m&&i.setAttribute("nonce",m),document.head.appendChild(i),d)return new Promise((u,f)=>{i.addEventListener("load",u),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})}))}function t(n){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=n,window.dispatchEvent(r),!r.defaultPrevented)throw n}return e.then(n=>{for(const r of n||[])r.status==="rejected"&&t(r.reason);return o().catch(t)})},L=async()=>{const{default:a}=await v(async()=>{const{default:o}=await import("./App-CZ-3QUGd.js").then(c=>c.A);return{default:o}},__vite__mapDeps([0,1,2,3]),import.meta.url);w(document.getElementById("root")).render(y.jsx(a,{}))};L();typeof window<"u"&&"performance"in window&&(window.performance.mark("app-started"),window.addEventListener("DOMContentLoaded",()=>{window.performance.mark("dom-content-loaded"),window.performance.measure("app-load-time","app-started","dom-content-loaded")}));export{v as _};
