const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Index-CzwYx-86.js","./components-maleUTBJ.js","./react-vendor-BNYiOeAB.js","./icons-B_US4mWF.js","./ui-vendor-Bn9eSCrC.js","./pages-DD_nam9L.js"])))=>i.map(i=>d[i]);
import{_ as o,a as p}from"./components-maleUTBJ.js";import{r as a,j as e,H as c,a as u,b as n,c as _}from"./react-vendor-BNYiOeAB.js";import{N as f}from"./pages-DD_nam9L.js";import"./icons-B_US4mWF.js";import"./ui-vendor-Bn9eSCrC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function d(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function m(r){if(r.ep)return;r.ep=!0;const i=d(r);fetch(r.href,i)}})();const h=a.lazy(()=>o(()=>import("./Index-CzwYx-86.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),w=a.lazy(()=>o(()=>import("./pages-DD_nam9L.js").then(t=>t.L),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),x=a.lazy(()=>o(()=>import("./pages-DD_nam9L.js").then(t=>t.a),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),E=a.lazy(()=>o(()=>import("./pages-DD_nam9L.js").then(t=>t.b),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),j=a.lazy(()=>o(()=>import("./pages-DD_nam9L.js").then(t=>t.I),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),y=a.lazy(()=>o(()=>import("./pages-DD_nam9L.js").then(t=>t.D),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),L=a.lazy(()=>o(()=>import("./pages-DD_nam9L.js").then(t=>t.c),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),g=a.lazy(()=>o(()=>import("./pages-DD_nam9L.js").then(t=>t.B),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),v=a.lazy(()=>o(()=>import("./pages-DD_nam9L.js").then(t=>t.A),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),P=a.lazy(()=>o(()=>import("./pages-DD_nam9L.js").then(t=>t.V),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),b=a.lazy(()=>o(()=>import("./pages-DD_nam9L.js").then(t=>t.K),__vite__mapDeps([5,2,1,3,4]),import.meta.url)),O=()=>e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-retro-dark",children:e.jsx("div",{className:"text-retro-purple-200 font-pixel text-xl animate-pulse",children:"Loading..."})});function I(){return e.jsx(p,{children:e.jsx(c,{children:e.jsx(a.Suspense,{fallback:e.jsx(O,{}),children:e.jsxs(u,{children:[e.jsx(n,{path:"/",element:e.jsx(h,{})}),e.jsx(n,{path:"/learn-who-you-are",element:e.jsx(w,{})}),e.jsx(n,{path:"/learn-about-habits",element:e.jsx(x,{})}),e.jsx(n,{path:"/learn-how-to-track",element:e.jsx(E,{})}),e.jsx(n,{path:"/impressum",element:e.jsx(j,{})}),e.jsx(n,{path:"/datenschutz",element:e.jsx(y,{})}),e.jsx(n,{path:"/deploy",element:e.jsx(L,{})}),e.jsx(n,{path:"/bookworms",element:e.jsx(g,{})}),e.jsx(n,{path:"/audiophiles",element:e.jsx(v,{})}),e.jsx(n,{path:"/visual-learners",element:e.jsx(P,{})}),e.jsx(n,{path:"/knowledge-seekers",element:e.jsx(b,{})}),e.jsx(n,{path:"*",element:e.jsx(f,{})})]})})})})}if(typeof window<"u"&&"performance"in window&&(window.performance.mark("app-init"),"PerformanceObserver"in window))try{new PerformanceObserver(s=>{for(const d of s.getEntries())d.duration>50&&console.debug("Long task detected:",d)}).observe({entryTypes:["longtask"]})}catch{console.debug("PerformanceObserver for longtask not supported")}const A=()=>{"requestIdleCallback"in window&&window.requestIdleCallback(()=>{o(()=>import("./pages-DD_nam9L.js").then(t=>t.L),__vite__mapDeps([5,2,1,3,4]),import.meta.url),o(()=>import("./pages-DD_nam9L.js").then(t=>t.a),__vite__mapDeps([5,2,1,3,4]),import.meta.url),o(()=>import("./pages-DD_nam9L.js").then(t=>t.b),__vite__mapDeps([5,2,1,3,4]),import.meta.url)})};_(document.getElementById("root")).render(e.jsx(I,{}));typeof window<"u"&&"performance"in window&&(window.performance.mark("app-rendered"),window.performance.measure("app-render-time","app-init","app-rendered"),A());window.addEventListener("DOMContentLoaded",()=>{window.performance.mark("dom-content-loaded"),window.performance.measure("dom-load-time","app-init","dom-content-loaded")});window.addEventListener("load",()=>{window.performance.mark("page-load-complete"),window.performance.measure("total-page-load","app-init","page-load-complete");const t=window.performance.getEntriesByName("total-page-load")[0];t&&console.debug(`Page fully loaded in: ${Math.round(t.duration)}ms`)});
