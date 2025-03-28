import{r as w,j as n}from"./react-vendor-BNYiOeAB.js";import{S as U,G as ge,C as be,X as xe}from"./icons-B_US4mWF.js";import{R as ne,V as he,C as ye,S as le,a as ve}from"./ui-vendor-Bn9eSCrC.js";const we="modulepreload",je=function(e,t){return new URL(e,t).href},te={},re=function(t,r,o){let i=Promise.resolve();if(r&&r.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),u=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(r.map(d=>{if(d=je(d,o),d in te)return;te[d]=!0;const f=d.endsWith(".css"),v=f?'[rel="stylesheet"]':"";if(!!o)for(let h=a.length-1;h>=0;h--){const g=a[h];if(g.href===d&&(!f||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${v}`))return;const x=document.createElement("link");if(x.rel=f?"stylesheet":we,f||(x.as="script"),x.crossOrigin="",x.href=d,u&&x.setAttribute("nonce",u),document.head.appendChild(x),f)return new Promise((h,g)=>{x.addEventListener("load",h),x.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function l(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return i.then(a=>{for(const s of a||[])s.status==="rejected"&&l(s.reason);return t().catch(l)})},ae=w.createContext(void 0),dt=({children:e})=>{const[t,r]=w.useState("en"),[o,i]=w.useState({});w.useEffect(()=>{(async()=>{try{const d=await re(()=>import("./en-vZ-G6-p3.js"),[],import.meta.url),f=await re(()=>import("./de-CDzRJ1M4.js"),[],import.meta.url);i({en:d.default,de:f.default})}catch(d){console.error("Error loading translations:",d)}})();const u=localStorage.getItem("language");u&&(u==="en"||u==="de")&&r(u)},[]);const l=s=>{r(s),localStorage.setItem("language",s),document.documentElement.lang=s},a=s=>o[t]&&o[t][s]||s;return n.jsx(ae.Provider,{value:{language:t,setLanguage:l,translate:a},children:e})},O=()=>{const e=w.useContext(ae);if(e===void 0)throw new Error("useLanguage must be used within a LanguageProvider");return e},ke=({onClick:e,children:t,className:r=""})=>{const[o,i]=w.useState(!1),l=()=>{i(!0),e(),setTimeout(()=>i(!1),300)};return n.jsxs("button",{className:`
        pixel-button rounded-md flex items-center justify-center
        gap-2 min-w-[200px] animate-float
        ${o?"animate-pixel-button-press":""}
        ${r}
      `,onClick:l,children:[n.jsx(U,{className:"w-5 h-5"}),n.jsx("span",{children:t})]})},Ne=()=>{const{language:e,setLanguage:t,translate:r}=O(),o=()=>{t(e==="en"?"de":"en")};return n.jsxs("button",{onClick:o,className:"flex items-center gap-1 text-retro-purple-400 hover:text-retro-accent transition-colors font-pixel-text text-xs",children:[n.jsx(ge,{className:"w-4 h-4"}),n.jsx("span",{children:r("language.switcher")})]})},ut=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"}));function ie(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=ie(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function Ce(){for(var e,t,r=0,o="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=ie(e))&&(o&&(o+=" "),o+=t);return o}const q="-",Se=e=>{const t=Ee(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:a=>{const s=a.split(q);return s[0]===""&&s.length!==1&&s.shift(),ce(s,t)||ze(a)},getConflictingClassGroupIds:(a,s)=>{const u=r[a]||[];return s&&o[a]?[...u,...o[a]]:u}}},ce=(e,t)=>{var a;if(e.length===0)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),i=o?ce(e.slice(1),o):void 0;if(i)return i;if(t.validators.length===0)return;const l=e.join(q);return(a=t.validators.find(({validator:s})=>s(l)))==null?void 0:a.classGroupId},oe=/^\[(.+)\]$/,ze=e=>{if(oe.test(e)){const t=oe.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Ee=e=>{const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return Pe(Object.entries(e.classGroups),r).forEach(([l,a])=>{H(a,o,l,t)}),o},H=(e,t,r,o)=>{e.forEach(i=>{if(typeof i=="string"){const l=i===""?t:se(t,i);l.classGroupId=r;return}if(typeof i=="function"){if(Ae(i)){H(i(o),t,r,o);return}t.validators.push({validator:i,classGroupId:r});return}Object.entries(i).forEach(([l,a])=>{H(a,se(t,l),r,o)})})},se=(e,t)=>{let r=e;return t.split(q).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},Ae=e=>e.isThemeGetter,Pe=(e,t)=>t?e.map(([r,o])=>{const i=o.map(l=>typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([a,s])=>[t+a,s])):l);return[r,i]}):e,Re=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;const i=(l,a)=>{r.set(l,a),t++,t>e&&(t=0,o=r,r=new Map)};return{get(l){let a=r.get(l);if(a!==void 0)return a;if((a=o.get(l))!==void 0)return i(l,a),a},set(l,a){r.has(l)?r.set(l,a):i(l,a)}}},de="!",Te=e=>{const{separator:t,experimentalParseClassName:r}=e,o=t.length===1,i=t[0],l=t.length,a=s=>{const u=[];let d=0,f=0,v;for(let b=0;b<s.length;b++){let y=s[b];if(d===0){if(y===i&&(o||s.slice(b,b+l)===t)){u.push(s.slice(f,b)),f=b+l;continue}if(y==="/"){v=b;continue}}y==="["?d++:y==="]"&&d--}const j=u.length===0?s:s.substring(f),x=j.startsWith(de),h=x?j.substring(1):j,g=v&&v>f?v-f:void 0;return{modifiers:u,hasImportantModifier:x,baseClassName:h,maybePostfixModifierPosition:g}};return r?s=>r({className:s,parseClassName:a}):a},Le=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(o=>{o[0]==="["?(t.push(...r.sort(),o),r=[]):r.push(o)}),t.push(...r.sort()),t},Ge=e=>({cache:Re(e.cacheSize),parseClassName:Te(e),...Se(e)}),Ie=/\s+/,_e=(e,t)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:i}=t,l=[],a=e.trim().split(Ie);let s="";for(let u=a.length-1;u>=0;u-=1){const d=a[u],{modifiers:f,hasImportantModifier:v,baseClassName:j,maybePostfixModifierPosition:x}=r(d);let h=!!x,g=o(h?j.substring(0,x):j);if(!g){if(!h){s=d+(s.length>0?" "+s:s);continue}if(g=o(j),!g){s=d+(s.length>0?" "+s:s);continue}h=!1}const b=Le(f).join(":"),y=v?b+de:b,k=y+g;if(l.includes(k))continue;l.push(k);const R=i(g,h);for(let E=0;E<R.length;++E){const I=R[E];l.push(y+I)}s=d+(s.length>0?" "+s:s)}return s};function Me(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=ue(t))&&(o&&(o+=" "),o+=r);return o}const ue=e=>{if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=ue(e[o]))&&(r&&(r+=" "),r+=t);return r};function Oe(e,...t){let r,o,i,l=a;function a(u){const d=t.reduce((f,v)=>v(f),e());return r=Ge(d),o=r.cache.get,i=r.cache.set,l=s,s(u)}function s(u){const d=o(u);if(d)return d;const f=_e(u,r);return i(u,f),f}return function(){return l(Me.apply(null,arguments))}}const p=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},pe=/^\[(?:([a-z-]+):)?(.+)\]$/i,$e=/^\d+\/\d+$/,Be=new Set(["px","full","screen"]),We=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ve=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Fe=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ue=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,He=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,C=e=>A(e)||Be.has(e)||$e.test(e),S=e=>P(e,"length",De),A=e=>!!e&&!Number.isNaN(Number(e)),F=e=>P(e,"number",A),L=e=>!!e&&Number.isInteger(Number(e)),qe=e=>e.endsWith("%")&&A(e.slice(0,-1)),c=e=>pe.test(e),z=e=>We.test(e),Ke=new Set(["length","size","percentage"]),Xe=e=>P(e,Ke,me),Je=e=>P(e,"position",me),Ze=new Set(["image","url"]),Qe=e=>P(e,Ze,tt),Ye=e=>P(e,"",et),G=()=>!0,P=(e,t,r)=>{const o=pe.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):r(o[2]):!1},De=e=>Ve.test(e)&&!Fe.test(e),me=()=>!1,et=e=>Ue.test(e),tt=e=>He.test(e),rt=()=>{const e=p("colors"),t=p("spacing"),r=p("blur"),o=p("brightness"),i=p("borderColor"),l=p("borderRadius"),a=p("borderSpacing"),s=p("borderWidth"),u=p("contrast"),d=p("grayscale"),f=p("hueRotate"),v=p("invert"),j=p("gap"),x=p("gradientColorStops"),h=p("gradientColorStopPositions"),g=p("inset"),b=p("margin"),y=p("opacity"),k=p("padding"),R=p("saturate"),E=p("scale"),I=p("sepia"),X=p("skew"),J=p("space"),Z=p("translate"),$=()=>["auto","contain","none"],B=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",c,t],m=()=>[c,t],Q=()=>["",C,S],_=()=>["auto",A,c],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],M=()=>["solid","dashed","dotted","double","none"],D=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],V=()=>["start","end","center","between","around","evenly","stretch"],T=()=>["","0",c],ee=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>[A,c];return{cacheSize:500,separator:":",theme:{colors:[G],spacing:[C,S],blur:["none","",z,c],brightness:N(),borderColor:[e],borderRadius:["none","","full",z,c],borderSpacing:m(),borderWidth:Q(),contrast:N(),grayscale:T(),hueRotate:N(),invert:T(),gap:m(),gradientColorStops:[e],gradientColorStopPositions:[qe,S],inset:W(),margin:W(),opacity:N(),padding:m(),saturate:N(),scale:N(),sepia:T(),skew:N(),space:m(),translate:m()},classGroups:{aspect:[{aspect:["auto","square","video",c]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":ee()}],"break-before":[{"break-before":ee()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),c]}],overflow:[{overflow:B()}],"overflow-x":[{"overflow-x":B()}],"overflow-y":[{"overflow-y":B()}],overscroll:[{overscroll:$()}],"overscroll-x":[{"overscroll-x":$()}],"overscroll-y":[{"overscroll-y":$()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",L,c]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",c]}],grow:[{grow:T()}],shrink:[{shrink:T()}],order:[{order:["first","last","none",L,c]}],"grid-cols":[{"grid-cols":[G]}],"col-start-end":[{col:["auto",{span:["full",L,c]},c]}],"col-start":[{"col-start":_()}],"col-end":[{"col-end":_()}],"grid-rows":[{"grid-rows":[G]}],"row-start-end":[{row:["auto",{span:[L,c]},c]}],"row-start":[{"row-start":_()}],"row-end":[{"row-end":_()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",c]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",c]}],gap:[{gap:[j]}],"gap-x":[{"gap-x":[j]}],"gap-y":[{"gap-y":[j]}],"justify-content":[{justify:["normal",...V()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...V(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...V(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[J]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[J]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",c,t]}],"min-w":[{"min-w":[c,t,"min","max","fit"]}],"max-w":[{"max-w":[c,t,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[c,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[c,t,"auto","min","max","fit"]}],"font-size":[{text:["base",z,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",F]}],"font-family":[{font:[G]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",c]}],"line-clamp":[{"line-clamp":["none",A,F]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C,c]}],"list-image":[{"list-image":["none",c]}],"list-style-type":[{list:["none","disc","decimal",c]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...M(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",C,S]}],"underline-offset":[{"underline-offset":["auto",C,c]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:m()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",c]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",c]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),Je]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Xe]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Qe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[h]}],"gradient-via-pos":[{via:[h]}],"gradient-to-pos":[{to:[h]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[...M(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:M()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...M()]}],"outline-offset":[{"outline-offset":[C,c]}],"outline-w":[{outline:[C,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[C,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,Ye]}],"shadow-color":[{shadow:[G]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":[...D(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",z,c]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[v]}],saturate:[{saturate:[R]}],sepia:[{sepia:[I]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[v]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[R]}],"backdrop-sepia":[{"backdrop-sepia":[I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",c]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",c]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",c]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[E]}],"scale-x":[{"scale-x":[E]}],"scale-y":[{"scale-y":[E]}],rotate:[{rotate:[L,c]}],"translate-x":[{"translate-x":[Z]}],"translate-y":[{"translate-y":[Z]}],"skew-x":[{"skew-x":[X]}],"skew-y":[{"skew-y":[X]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",c]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",c]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":m()}],"scroll-mx":[{"scroll-mx":m()}],"scroll-my":[{"scroll-my":m()}],"scroll-ms":[{"scroll-ms":m()}],"scroll-me":[{"scroll-me":m()}],"scroll-mt":[{"scroll-mt":m()}],"scroll-mr":[{"scroll-mr":m()}],"scroll-mb":[{"scroll-mb":m()}],"scroll-ml":[{"scroll-ml":m()}],"scroll-p":[{"scroll-p":m()}],"scroll-px":[{"scroll-px":m()}],"scroll-py":[{"scroll-py":m()}],"scroll-ps":[{"scroll-ps":m()}],"scroll-pe":[{"scroll-pe":m()}],"scroll-pt":[{"scroll-pt":m()}],"scroll-pr":[{"scroll-pr":m()}],"scroll-pb":[{"scroll-pb":m()}],"scroll-pl":[{"scroll-pl":m()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",c]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[C,S,F]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ot=Oe(rt);function K(...e){return ot(Ce(e))}function pt({className:e,...t}){return n.jsx("div",{className:K("animate-pulse rounded-md bg-muted",e),...t})}const mt=({onAccept:e,onClose:t})=>{const{translate:r}=O(),[o,i]=w.useState(!1);w.useEffect(()=>{const s=setTimeout(()=>{i(!0)},500);return()=>clearTimeout(s)},[]);const l=()=>{i(!1),setTimeout(()=>{e()},300)},a=()=>{i(!1),setTimeout(()=>{t()},300)};return n.jsx("div",{className:`fixed bottom-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ease-in-out ${o?"translate-y-0":"translate-y-full"}`,children:n.jsxs("div",{className:"max-w-4xl mx-auto scroll-paper border-4 border-retro-purple-700 p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-4",children:[n.jsx("div",{className:"flex-shrink-0 bg-retro-purple-700 p-2 rounded-full",children:n.jsx(be,{className:"w-6 h-6 text-retro-light"})}),n.jsxs("div",{className:"flex-grow text-left",children:[n.jsx("h3",{className:"font-pixel text-retro-purple-800 text-lg mb-1",children:r("cookies.title")||"Cookies & Privacy"}),n.jsx("p",{className:"font-pixel-text text-retro-purple-600 text-sm",children:r("cookies.description")||"This website uses cookies to ensure you get the best retro experience. By using our site, you acknowledge that you have read and understand our Cookie Policy and Privacy Policy."})]}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0",children:[n.jsx(ke,{onClick:l,className:"w-full sm:w-auto",children:r("cookies.accept")||"Accept"}),n.jsxs("button",{onClick:a,className:"text-retro-purple-600 hover:text-retro-purple-800 font-pixel text-xs p-2 flex items-center justify-center transition-colors","aria-label":"Close cookie notice",children:[n.jsx(xe,{className:"w-4 h-4 mr-1"}),n.jsx("span",{children:r("cookies.close")||"Close"})]})]})]})})},st=w.forwardRef(({className:e,children:t,...r},o)=>n.jsxs(ne,{ref:o,className:K("relative overflow-hidden",e),...r,children:[n.jsx(he,{className:"h-full w-full rounded-[inherit]",children:t}),n.jsx(fe,{}),n.jsx(ye,{})]}));st.displayName=ne.displayName;const fe=w.forwardRef(({className:e,orientation:t="vertical",...r},o)=>n.jsx(le,{ref:o,orientation:t,className:K("flex touch-none select-none transition-colors",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...r,children:n.jsx(ve,{className:"relative flex-1 rounded-full bg-border"})}));fe.displayName=le.displayName;const nt=({habit:e,isVisible:t})=>{const r=w.useRef(null),[o,i]=w.useState(0),{language:l}=O();if(w.useEffect(()=>{if(t&&r.current){const s=r.current.scrollHeight;document.documentElement.style.setProperty("--scroll-height",`${s}px`),i(s)}},[t,e]),!e)return null;const a=l;return n.jsx("div",{className:`
      w-full max-w-xl mx-auto mt-6 transform transition-all duration-500
      ${t?"opacity-100 translate-y-0":"opacity-0 -translate-y-10"}
    `,children:n.jsxs("div",{className:"pixel-scroll-container",children:[n.jsxs("div",{className:"pixel-scroll-handle pixel-scroll-handle-top",children:[n.jsx("div",{className:"pixel-scroll-knob"}),n.jsx("div",{className:"pixel-wooden-rod"}),n.jsx("div",{className:"pixel-scroll-knob"})]}),n.jsx("div",{className:"scroll-paper rounded-xl",children:n.jsxs("div",{ref:r,className:`
              pixel-scroll-content p-6 px-8 overflow-hidden
              ${t?"animate-scroll-unroll":"h-0 opacity-0"}
            `,style:{height:t?"auto":0},children:[n.jsx("h2",{className:"font-pixel text-amber-950 text-xl mb-4 text-center",children:e.title[a]}),n.jsx("p",{className:"font-pixel-text text-lg mb-4 text-amber-950",children:e.description[a]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"scroll-section",children:[n.jsx("h3",{className:"font-pixel text-amber-950 text-sm mb-2",children:a==="en"?"HOW TO GAIN":"WIE DU BEGINNST"}),n.jsx("p",{className:"font-pixel-text text-amber-950",children:e.howToGain[a]})]}),n.jsxs("div",{className:"scroll-section",children:[n.jsx("h3",{className:"font-pixel text-amber-950 text-sm mb-2",children:a==="en"?"PERFECT FOR":"PERFEKT FÜR"}),n.jsx("p",{className:"font-pixel-text text-amber-950",children:e.perfectFor[a]})]}),n.jsxs("div",{className:"scroll-section",children:[n.jsx("h3",{className:"font-pixel text-amber-950 text-sm mb-2",children:a==="en"?"BENEFITS":"VORTEILE"}),n.jsx("p",{className:"font-pixel-text text-amber-950",children:e.benefits[a]})]})]})]})}),n.jsxs("div",{className:"pixel-scroll-handle pixel-scroll-handle-bottom",children:[n.jsx("div",{className:"pixel-scroll-knob"}),n.jsx("div",{className:"pixel-wooden-rod"}),n.jsx("div",{className:"pixel-scroll-knob"})]})]})})},ft=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"})),lt=({onClick:e})=>{const{language:t}=O(),r=t==="de"?"Klicke, um eine Gewohnheit zu entdecken":"Click to discover a habit";return n.jsx("div",{className:"w-full max-w-md mx-auto cursor-pointer transition-transform hover:scale-105 duration-300 mt-6",onClick:e,children:n.jsxs("div",{className:"pixel-scroll-closed relative",children:[n.jsxs("div",{className:"pixel-scroll-handle pixel-scroll-handle-top",children:[n.jsx("div",{className:"pixel-scroll-knob"}),n.jsx("div",{className:"pixel-wooden-rod"}),n.jsx("div",{className:"pixel-scroll-knob"})]}),n.jsxs("div",{className:"scroll-paper scroll-closed-body flex items-center justify-center py-6 px-4 rounded-xl",children:[n.jsx(U,{className:"w-6 h-6 text-amber-800/80"}),n.jsx("span",{className:"font-pixel text-amber-950 text-sm px-3",children:r}),n.jsx(U,{className:"w-6 h-6 text-amber-800/80"})]}),n.jsxs("div",{className:"pixel-scroll-handle pixel-scroll-handle-bottom",children:[n.jsx("div",{className:"pixel-scroll-knob"}),n.jsx("div",{className:"pixel-wooden-rod"}),n.jsx("div",{className:"pixel-scroll-knob"})]})]})})},gt=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"}));export{mt as C,ft as H,Ne as L,ke as P,st as S,re as _,dt as a,pt as b,ut as c,gt as d,O as u};
