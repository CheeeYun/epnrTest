import{ae as G,V as Q,m as se,O as q,af as ae,r as V,o as R,ag as U,M as ie,N as le,L as E,I as Z,H as B,c as M,F as ue,ah as ce,_ as fe,u as de,i as C,t as pe,Z as me,A as w,z as y,x as J,B as H,y as K}from"./entry.DaWHevvh.js";import{h as he,f as ye,m as ge,g as _e}from"./index.DsI4h3fR.js";const we="$s";function P(...e){const n=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(n);const[t,r]=e;if(!t||typeof t!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+t);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const o=we+t,a=se(),l=G(a.payload.state,o);if(l.value===void 0&&r){const i=r();if(Q(i))return a.payload.state[o]=i,i;l.value=i}return l}function X(e){return ie()?(le(e),!0):!1}function z(e){return typeof e=="function"?e():E(e)}const ve=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Se=Object.prototype.toString,be=e=>Se.call(e)==="[object Object]",Y=()=>{};function ke(e,n){function t(...r){return new Promise((o,a)=>{Promise.resolve(e(()=>n.apply(this,r),{fn:n,thisArg:this,args:r})).then(o).catch(a)})}return t}const ee=e=>e();function Ce(e=ee){const n=V(!0);function t(){n.value=!1}function r(){n.value=!0}const o=(...a)=>{n.value&&e(...a)};return{isActive:q(n),pause:t,resume:r,eventFilter:o}}function Ae(e){return e||Z()}function xe(...e){if(e.length!==1)return G(...e);const n=e[0];return typeof n=="function"?q(ae(()=>({get:n,set:Y}))):V(n)}function Ee(e,n,t={}){const{eventFilter:r=ee,...o}=t;return B(e,ke(r,n),o)}function Le(e,n,t={}){const{eventFilter:r,...o}=t,{eventFilter:a,pause:l,resume:i,isActive:u}=Ce(r);return{stop:Ee(e,n,{...o,eventFilter:a}),pause:l,resume:i,isActive:u}}function te(e,n=!0,t){Ae()?R(e,t):n?e():U(e)}function ne(e){var n;const t=z(e);return(n=t==null?void 0:t.$el)!=null?n:t}const D=ve?window:void 0;function I(...e){let n,t,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,r,o]=e,n=D):[n,t,r,o]=e,!n)return Y;Array.isArray(t)||(t=[t]),Array.isArray(r)||(r=[r]);const a=[],l=()=>{a.forEach(d=>d()),a.length=0},i=(d,f,v,g)=>(d.addEventListener(f,v,g),()=>d.removeEventListener(f,v,g)),u=B(()=>[ne(n),z(o)],([d,f])=>{if(l(),!d)return;const v=be(f)?{...f}:f;a.push(...t.flatMap(g=>r.map(_=>i(d,g,_,v))))},{immediate:!0,flush:"post"}),c=()=>{u(),l()};return X(c),c}function Me(){const e=V(!1),n=Z();return n&&R(()=>{e.value=!0},n),e}function Ne(e){const n=Me();return M(()=>(n.value,!!e()))}function Oe(e,n={}){const{window:t=D}=n,r=Ne(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let o;const a=V(!1),l=c=>{a.value=c.matches},i=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",l):o.removeListener(l))},u=ue(()=>{r.value&&(i(),o=t.matchMedia(z(e)),"addEventListener"in o?o.addEventListener("change",l):o.addListener(l),a.value=o.matches)});return X(()=>{u(),i(),o=void 0}),a}const j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W="__vueuse_ssr_handlers__",De=Ve();function Ve(){return W in j||(j[W]=j[W]||{}),j[W]}function oe(e,n){return De[e]||n}function Te(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Fe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},$="vueuse-storage";function je(e,n,t,r={}){var o;const{flush:a="pre",deep:l=!0,listenToStorageChanges:i=!0,writeDefaults:u=!0,mergeDefaults:c=!1,shallow:d,window:f=D,eventFilter:v,onError:g=s=>{console.error(s)},initOnMounted:_}=r,h=(d?ce:V)(typeof n=="function"?n():n);if(!t)try{t=oe("getDefaultStorage",()=>{var s;return(s=D)==null?void 0:s.localStorage})()}catch(s){g(s)}if(!t)return h;const S=z(n),L=Te(S),b=(o=r.serializer)!=null?o:Fe[L],{pause:N,resume:p}=Le(h,()=>T(h.value),{flush:a,deep:l,eventFilter:v});f&&i&&te(()=>{I(f,"storage",k),I(f,$,F),_&&k()}),_||k();function A(s,m){f&&f.dispatchEvent(new CustomEvent($,{detail:{key:e,oldValue:s,newValue:m,storageArea:t}}))}function T(s){try{const m=t.getItem(e);if(s==null)A(m,null),t.removeItem(e);else{const x=b.write(s);m!==x&&(t.setItem(e,x),A(m,x))}}catch(m){g(m)}}function O(s){const m=s?s.newValue:t.getItem(e);if(m==null)return u&&S!=null&&t.setItem(e,b.write(S)),S;if(!s&&c){const x=b.read(m);return typeof c=="function"?c(x,S):L==="object"&&!Array.isArray(x)?{...S,...x}:x}else return typeof m!="string"?m:b.read(m)}function k(s){if(!(s&&s.storageArea!==t)){if(s&&s.key==null){h.value=S;return}if(!(s&&s.key!==e)){N();try{(s==null?void 0:s.newValue)!==b.write(h.value)&&(h.value=O(s))}catch(m){g(m)}finally{s?U(p):p()}}}}function F(s){k(s.detail)}return h}function re(e){return Oe("(prefers-color-scheme: dark)",e)}function We(e={}){const{selector:n="html",attribute:t="class",initialValue:r="auto",window:o=D,storage:a,storageKey:l="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:u,emitAuto:c,disableTransition:d=!0}=e,f={auto:"",light:"light",dark:"dark",...e.modes||{}},v=re({window:o}),g=M(()=>v.value?"dark":"light"),_=u||(l==null?xe(r):je(l,r,a,{window:o,listenToStorageChanges:i})),h=M(()=>_.value==="auto"?g.value:_.value),S=oe("updateHTMLAttrs",(p,A,T)=>{const O=typeof p=="string"?o==null?void 0:o.document.querySelector(p):ne(p);if(!O)return;let k;if(d&&(k=o.document.createElement("style"),k.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),o.document.head.appendChild(k)),A==="class"){const F=T.split(/\s/g);Object.values(f).flatMap(s=>(s||"").split(/\s/g)).filter(Boolean).forEach(s=>{F.includes(s)?O.classList.add(s):O.classList.remove(s)})}else O.setAttribute(A,T);d&&(o.getComputedStyle(k).opacity,document.head.removeChild(k))});function L(p){var A;S(n,t,(A=f[p])!=null?A:p)}function b(p){e.onChanged?e.onChanged(p,L):L(p)}B(h,b,{flush:"post",immediate:!0}),te(()=>b(h.value));const N=M({get(){return c?_.value:h.value},set(p){_.value=p}});try{return Object.assign(N,{store:_,system:g,state:h})}catch{return N}}function ze(e={}){const{valueDark:n="dark",valueLight:t="",window:r=D}=e,o=We({...e,onChanged:(i,u)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,i==="dark",u,i):u(i)},modes:{dark:n,light:t}}),a=M(()=>o.system?o.system.value:re({window:r}).value?"dark":"light");return M({get(){return o.value==="dark"},set(i){const u=i?"dark":"light";a.value===u?o.value="auto":o.value=u}})}const Re={class:"mt-5"},Be={class:"el-dropdown-link"},Je={__name:"MyHeader",setup(e){const n=de(),t=ze(),r=()=>{n.push("/")},o=P("user"),a=M(()=>o.value||{xxx:"user"}),l=P("keycloak"),i=()=>{const u=l.value;u?u.logout().then(()=>{console.log("Logged out successfully.")}).catch(c=>{console.error("Logout failed:",c)}):console.error("Keycloak instance not found.")};return R(()=>{}),(u,c)=>{const d=C("el-icon"),f=C("el-col"),v=C("el-text"),g=C("el-dropdown-item"),_=C("el-dropdown-menu"),h=C("el-dropdown"),S=C("el-switch"),L=C("el-row"),b=C("el-header");return pe(),me(b,null,{default:w(()=>[y(L,null,{default:w(()=>[y(f,{span:1,class:"mt-5"},{default:w(()=>[y(d,{onClick:r,color:"white",size:20},{default:w(()=>[y(E(he))]),_:1})]),_:1}),y(f,{id:"main",span:20}),y(f,{span:3},{default:w(()=>[J("div",Re,[y(d,{color:"white",class:"mr-5"},{default:w(()=>[y(E(ye))]),_:1}),y(h,{size:"large"},{dropdown:w(()=>[y(_,{class:"logout"},{default:w(()=>[y(g,{onClick:i},{default:w(()=>[y(v,{class:"logout1"},{default:w(()=>[H("Logout")]),_:1})]),_:1})]),_:1})]),default:w(()=>[J("span",Be,[y(v,{class:"admin"},{default:w(()=>[H(K(E(a).firstName)+" "+K(E(a).lastName),1)]),_:1})])]),_:1}),y(S,{modelValue:E(t),"onUpdate:modelValue":c[0]||(c[0]=N=>Q(t)?t.value=N:null),style:{"margin-left":"30px"},"inline-prompt":"","active-icon":E(ge),"inactive-icon":E(_e)},null,8,["modelValue","active-icon","inactive-icon"])])]),_:1})]),_:1})]),_:1})}}},Pe=fe(Je,[["__scopeId","data-v-c073e430"]]);export{Pe as _,P as u};
