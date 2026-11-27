import{u as $i,A as Mf,D as Lf,m as Gi,l as Rn,s as oy,p as ay,a as jn,b as cy,r as Ff,n as uy,c as Uf,d as ly,e as Bf,f as hy,g as dy,t as fy}from"./index-DCVdoJwV.js";const my=()=>{};var ch={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},py=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let g=(c&15)<<2|h>>6,S=h&63;u||(S=64,o||(g=64)),r.push(t[f],t[m],t[g],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(jf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):py(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new gy;const g=s<<2|c>>4;if(r.push(g),h!==64){const S=c<<4&240|h>>2;if(r.push(S),m!==64){const C=h<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _y=function(n){const e=jf(n);return qf.encodeByteArray(e,!0)},zf=function(n){return _y(n).replace(/\./g,"")},$f=function(n){try{return qf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=()=>Gf().__FIREBASE_DEFAULTS__,Iy=()=>{if(typeof process>"u"||typeof ch>"u")return;const n=ch.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$f(n[1]);return e&&JSON.parse(e)},No=()=>{try{return my()||yy()||Iy()||vy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ey=n=>{var e,t;return(t=(e=No())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Kf=()=>{var n;return(n=No())===null||n===void 0?void 0:n.config},Wf=n=>{var e;return(e=No())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hf(n){return(await fetch(n,{credentials:"include"})).ok}const pi={};function wy(){const n={prod:[],emulator:[]};for(const e of Object.keys(pi))pi[e]?n.emulator.push(e):n.prod.push(e);return n}function Ay(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let uh=!1;function by(n,e){if(typeof window>"u"||typeof document>"u"||!Cr(window.location.host)||pi[n]===e||pi[n]||uh)return;pi[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=wy().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,S){g.setAttribute("width","24"),g.setAttribute("id",S),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{uh=!0,o()},g}function f(g,S){g.setAttribute("id",S),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=Ay(r),S=t("text"),C=document.getElementById(S)||document.createElement("span"),N=t("learnmore"),V=document.getElementById(N)||document.createElement("a"),$=t("preprendIcon"),B=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const F=g.element;c(F),f(V,N);const Q=h();u(B,$),F.append(B,C,V,Q),document.body.appendChild(F)}s?(C.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Qf(){var n;const e=(n=No())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ry(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Py(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Cy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dy(){const n=Ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Xf(){return!Qf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jf(){return!Qf()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Yf(){try{return typeof indexedDB=="object"}catch{return!1}}function Vy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky="FirebaseError";class Rt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ky,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ki.prototype.create)}}class Ki{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ny(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Rt(i,c,r)}}function Ny(n,e){return n.replace(Oy,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Oy=/\{\$([^}]+)}/g;function xy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(lh(s)&&lh(o)){if(!Tt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function lh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ci(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ui(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function My(n,e){const t=new Ly(n,e);return t.subscribe.bind(t)}class Ly{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Fy(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=xa),i.error===void 0&&(i.error=xa),i.complete===void 0&&(i.complete=xa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n){return n&&n._delegate?n._delegate:n}class Pn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ty;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jy(e))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mn){return this.instances.has(e)}getOptions(e=mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:By(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mn){return this.component?this.component.multipleInstances?e:mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function By(n){return n===mn?void 0:n}function jy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Uy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const zy={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},$y=X.INFO,Gy={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Ky=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Gy[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zc{constructor(e){this.name=e,this._logLevel=$y,this._logHandler=Ky,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Wy=(n,e)=>e.some(t=>n instanceof t);let hh,dh;function Hy(){return hh||(hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qy(){return dh||(dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zf=new WeakMap,nc=new WeakMap,em=new WeakMap,Ma=new WeakMap,$c=new WeakMap;function Xy(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Kt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Zf.set(t,n)}).catch(()=>{}),$c.set(e,n),e}function Jy(n){if(nc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});nc.set(n,e)}let rc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return nc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||em.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Yy(n){rc=n(rc)}function Zy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(La(this),e,...t);return em.set(r,e.sort?e.sort():[e]),Kt(r)}:Qy().includes(n)?function(...e){return n.apply(La(this),e),Kt(Zf.get(this))}:function(...e){return Kt(n.apply(La(this),e))}}function eI(n){return typeof n=="function"?Zy(n):(n instanceof IDBTransaction&&Jy(n),Wy(n,Hy())?new Proxy(n,rc):n)}function Kt(n){if(n instanceof IDBRequest)return Xy(n);if(Ma.has(n))return Ma.get(n);const e=eI(n);return e!==n&&(Ma.set(n,e),$c.set(e,n)),e}const La=n=>$c.get(n);function tI(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=Kt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Kt(o.result),u.oldVersion,u.newVersion,Kt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const nI=["get","getKey","getAll","getAllKeys","count"],rI=["put","add","delete","clear"],Fa=new Map;function fh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fa.get(e))return Fa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=rI.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nI.includes(t)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return Fa.set(e,s),s}Yy(n=>({...n,get:(e,t,r)=>fh(e,t)||n.get(e,t,r),has:(e,t)=>!!fh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sI(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function sI(n){const e=n.getComponent();return e?.type==="VERSION"}const ic="@firebase/app",mh="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new zc("@firebase/app"),oI="@firebase/app-compat",aI="@firebase/analytics-compat",cI="@firebase/analytics",uI="@firebase/app-check-compat",lI="@firebase/app-check",hI="@firebase/auth",dI="@firebase/auth-compat",fI="@firebase/database",mI="@firebase/data-connect",pI="@firebase/database-compat",gI="@firebase/functions",_I="@firebase/functions-compat",yI="@firebase/installations",II="@firebase/installations-compat",vI="@firebase/messaging",EI="@firebase/messaging-compat",TI="@firebase/performance",wI="@firebase/performance-compat",AI="@firebase/remote-config",bI="@firebase/remote-config-compat",SI="@firebase/storage",RI="@firebase/storage-compat",PI="@firebase/firestore",CI="@firebase/ai",DI="@firebase/firestore-compat",VI="firebase",kI="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="[DEFAULT]",NI={[ic]:"fire-core",[oI]:"fire-core-compat",[cI]:"fire-analytics",[aI]:"fire-analytics-compat",[lI]:"fire-app-check",[uI]:"fire-app-check-compat",[hI]:"fire-auth",[dI]:"fire-auth-compat",[fI]:"fire-rtdb",[mI]:"fire-data-connect",[pI]:"fire-rtdb-compat",[gI]:"fire-fn",[_I]:"fire-fn-compat",[yI]:"fire-iid",[II]:"fire-iid-compat",[vI]:"fire-fcm",[EI]:"fire-fcm-compat",[TI]:"fire-perf",[wI]:"fire-perf-compat",[AI]:"fire-rc",[bI]:"fire-rc-compat",[SI]:"fire-gcs",[RI]:"fire-gcs-compat",[PI]:"fire-fst",[DI]:"fire-fst-compat",[CI]:"fire-vertex","fire-js":"fire-js",[VI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new Map,OI=new Map,oc=new Map;function ph(n,e){try{n.container.addComponent(e)}catch(t){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function lr(n){const e=n.name;if(oc.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;oc.set(e,n);for(const t of ro.values())ph(t,n);for(const t of OI.values())ph(t,n);return!0}function Gc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ge(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new Ki("app","Firebase",xI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=kI;function tm(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sc,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(t||(t=Kf()),!t)throw Wt.create("no-options");const s=ro.get(i);if(s){if(Tt(t,s.options)&&Tt(r,s.config))return s;throw Wt.create("duplicate-app",{appName:i})}const o=new qy(i);for(const u of oc.values())o.addComponent(u);const c=new MI(t,r,o);return ro.set(i,c),c}function LI(n=sc){const e=ro.get(n);if(!e&&n===sc&&Kf())return tm();if(!e)throw Wt.create("no-app",{appName:n});return e}function Ht(n,e,t){var r;let i=(r=NI[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wt.warn(c.join(" "));return}lr(new Pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="firebase-heartbeat-database",UI=1,Si="firebase-heartbeat-store";let Ua=null;function nm(){return Ua||(Ua=tI(FI,UI,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Si)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),Ua}async function BI(n){try{const t=(await nm()).transaction(Si),r=await t.objectStore(Si).get(rm(n));return await t.done,r}catch(e){if(e instanceof Rt)wt.warn(e.message);else{const t=Wt.create("idb-get",{originalErrorMessage:e?.message});wt.warn(t.message)}}}async function gh(n,e){try{const r=(await nm()).transaction(Si,"readwrite");await r.objectStore(Si).put(e,rm(n)),await r.done}catch(t){if(t instanceof Rt)wt.warn(t.message);else{const r=Wt.create("idb-set",{originalErrorMessage:t?.message});wt.warn(r.message)}}}function rm(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=1024,qI=30;class zI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new GI(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_h();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>qI){const o=KI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_h(),{heartbeatsToSend:r,unsentEntries:i}=$I(this._heartbeatsCache.heartbeats),s=zf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return wt.warn(t),""}}}function _h(){return new Date().toISOString().substring(0,10)}function $I(n,e=jI){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),yh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class GI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yf()?Vy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await BI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return gh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return gh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function yh(n){return zf(JSON.stringify({version:2,heartbeats:n})).length}function KI(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(n){lr(new Pn("platform-logger",e=>new iI(e),"PRIVATE")),lr(new Pn("heartbeat",e=>new zI(e),"PRIVATE")),Ht(ic,mh,n),Ht(ic,mh,"esm2017"),Ht("fire-js","")}WI("");function Kc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function im(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HI=im,sm=new Ki("auth","Firebase",im());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new zc("@firebase/auth");function QI(n,...e){io.logLevel<=X.WARN&&io.warn(`Auth (${Dr}): ${n}`,...e)}function Fs(n,...e){io.logLevel<=X.ERROR&&io.error(`Auth (${Dr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,...e){throw Hc(n,...e)}function et(n,...e){return Hc(n,...e)}function Wc(n,e,t){const r=Object.assign(Object.assign({},HI()),{[e]:t});return new Ki("auth","Firebase",r).create(e,{appName:n.name})}function Et(n){return Wc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function XI(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xe(n,"argument-error"),Wc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return sm.create(n,...e)}function q(n,e,...t){if(!n)throw Hc(e,...t)}function yt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fs(e),new Error(e)}function At(n,e){n||yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function JI(){return Ih()==="http:"||Ih()==="https:"}function Ih(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JI()||Py()||"connection"in navigator)?navigator.onLine:!0}function ZI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.shortDelay=e,this.longDelay=t,At(t>e,"Short delay should be less than long delay!"),this.isMobile=Sy()||Cy()}get(){return YI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(n,e){At(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nv=new Hi(3e4,6e4);function Pt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function dt(n,e,t,r,i={}){return am(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=Wi(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},s);return Ry()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Cr(n.emulatorConfig.host)&&(h.credentials="include"),om.fetch()(await cm(n,n.config.apiHost,t,c),h)})}async function am(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ev),e);try{const i=new iv(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ds(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ds(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ds(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ds(n,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Wc(n,f,h);Xe(n,f)}}catch(i){if(i instanceof Rt)throw i;Xe(n,"network-request-failed",{message:String(i)})}}async function Qi(n,e,t,r,i={}){const s=await dt(n,e,t,r,i);return"mfaPendingCredential"in s&&Xe(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function cm(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Qc(n.config,i):`${n.config.apiScheme}://${i}`;return tv.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function rv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),nv.get())})}}function Ds(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=et(n,e,r);return i.customData._tokenResponse=t,i}function vh(n){return n!==void 0&&n.enterprise!==void 0}class sv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return rv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ov(n,e){return dt(n,"GET","/v2/recaptchaConfig",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function av(n,e){return dt(n,"POST","/v1/accounts:delete",e)}async function so(n,e){return dt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cv(n,e=!1){const t=pe(n),r=await t.getIdToken(e),i=Xc(r);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:gi(Ba(i.auth_time)),issuedAtTime:gi(Ba(i.iat)),expirationTime:gi(Ba(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Ba(n){return Number(n)*1e3}function Xc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fs("JWT malformed, contained fewer than 3 sections"),null;try{const i=$f(t);return i?JSON.parse(i):(Fs("Failed to decode base64 JWT payload"),null)}catch(i){return Fs("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Eh(n){const e=Xc(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Rt&&uv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(n){var e;const t=n.auth,r=await n.getIdToken(),i=await hr(n,so(t,{idToken:r}));q(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?um(s.providerUserInfo):[],c=dv(n.providerData,o),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!c?.length,f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new cc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function hv(n){const e=pe(n);await oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dv(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function um(n){return n.map(e=>{var{providerId:t}=e,r=Kc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv(n,e){const t=await am(n,{},async()=>{const r=Wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await cm(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Cr(n.emulatorConfig.host)&&(u.credentials="include"),om.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mv(n,e){return dt(n,"POST","/v2/accounts:revokeToken",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Eh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=Eh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await fv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new sr;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sr,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ze{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Kc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await hr(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cv(this,e)}reload(){return hv(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await oo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(Et(this.auth));const e=await this.getIdToken();return await hr(this,av(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,u,h,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(i=t.email)!==null&&i!==void 0?i:void 0,S=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=t.photoURL)!==null&&o!==void 0?o:void 0,N=(c=t.tenantId)!==null&&c!==void 0?c:void 0,V=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,$=(h=t.createdAt)!==null&&h!==void 0?h:void 0,B=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:Q,isAnonymous:te,providerData:H,stsTokenManager:v}=t;q(F&&v,e,"internal-error");const _=sr.fromJSON(this.name,v);q(typeof F=="string",e,"internal-error"),Lt(m,e.name),Lt(g,e.name),q(typeof Q=="boolean",e,"internal-error"),q(typeof te=="boolean",e,"internal-error"),Lt(S,e.name),Lt(C,e.name),Lt(N,e.name),Lt(V,e.name),Lt($,e.name),Lt(B,e.name);const I=new Ze({uid:F,auth:e,email:g,emailVerified:Q,displayName:m,isAnonymous:te,photoURL:C,phoneNumber:S,tenantId:N,stsTokenManager:_,createdAt:$,lastLoginAt:B});return H&&Array.isArray(H)&&(I.providerData=H.map(E=>Object.assign({},E))),V&&(I._redirectEventId=V),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new sr;i.updateFromServerResponse(t);const s=new Ze({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oo(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?um(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,c=new sr;c.updateFromIdToken(r);const u=new Ze({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new Map;function It(n){At(n instanceof Function,"Expected a class definition");let e=Th.get(n);return e?(At(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Th.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lm.type="NONE";const wh=lm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n,e,t){return`firebase:${n}:${e}:${t}`}class or{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Us(this.userKey,i.apiKey,s),this.fullPersistenceKey=Us("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await so(this.auth,{idToken:e}).catch(()=>{});return t?Ze._fromGetAccountInfoResponse(this.auth,t,e):null}return Ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new or(It(wh),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||It(wh);const o=Us(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const g=await so(e,{idToken:f}).catch(()=>{});if(!g)break;m=await Ze._fromGetAccountInfoResponse(e,g,f)}else m=Ze._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new or(s,e,r):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new or(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gm(e))return"Blackberry";if(_m(e))return"Webos";if(dm(e))return"Safari";if((e.includes("chrome/")||fm(e))&&!e.includes("edge/"))return"Chrome";if(pm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function hm(n=Ee()){return/firefox\//i.test(n)}function dm(n=Ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fm(n=Ee()){return/crios\//i.test(n)}function mm(n=Ee()){return/iemobile/i.test(n)}function pm(n=Ee()){return/android/i.test(n)}function gm(n=Ee()){return/blackberry/i.test(n)}function _m(n=Ee()){return/webos/i.test(n)}function Jc(n=Ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function pv(n=Ee()){var e;return Jc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gv(){return Dy()&&document.documentMode===10}function ym(n=Ee()){return Jc(n)||pm(n)||_m(n)||gm(n)||/windows phone/i.test(n)||mm(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,e=[]){let t;switch(n){case"Browser":t=Ah(Ee());break;case"Worker":t=`${Ah(Ee())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(n,e={}){return dt(n,"GET","/v2/passwordPolicy",Pt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=6;class vv{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Iv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bh(this),this.idTokenSubscription=new bh(this),this.beforeStateQueue=new _v(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=It(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await or.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await so(this,{idToken:e}),r=await Ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(Et(this));const t=e?pe(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(Et(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(Et(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(It(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yv(this),t=new vv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ki("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await mv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&It(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await or.create(this,[It(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Im(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&QI(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ct(n){return pe(n)}class bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=My(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tv(n){Oo=n}function vm(n){return Oo.loadJS(n)}function wv(){return Oo.recaptchaEnterpriseScript}function Av(){return Oo.gapiScript}function bv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Sv{constructor(){this.enterprise=new Rv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Rv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Pv="recaptcha-enterprise",Em="NO_RECAPTCHA";class Cv{constructor(e){this.type=Pv,this.auth=Ct(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{ov(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new sv(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){const u=window.grecaptcha;vh(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(Em)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Sv().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&vh(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=wv();u.length!==0&&(u+=c),vm(u).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Sh(n,e,t,r=!1,i=!1){const s=new Cv(n);let o;if(i)o=Em;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ao(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Sh(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Sh(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n,e){const t=Gc(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Tt(s,e??{}))return i;Xe(i,"already-initialized")}return t.initialize({options:e})}function Vv(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(It);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function kv(n,e,t){const r=Ct(n);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Tm(e),{host:o,port:c}=Nv(e),u=c===null?"":`:${c}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(Tt(h,r.config.emulator)&&Tt(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Cr(o)?(Hf(`${s}//${o}${u}`),by("Auth",!0)):Ov()}function Tm(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Nv(n){const e=Tm(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Rh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Rh(o)}}}function Rh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ov(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yt("not implemented")}_getIdTokenResponse(e){return yt("not implemented")}_linkToIdToken(e,t){return yt("not implemented")}_getReauthenticationResolver(e){return yt("not implemented")}}async function xv(n,e){return dt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mv(n,e){return Qi(n,"POST","/v1/accounts:signInWithPassword",Pt(n,e))}async function Lv(n,e){return dt(n,"POST","/v1/accounts:sendOobCode",Pt(n,e))}async function Fv(n,e){return Lv(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uv(n,e){return Qi(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}async function Bv(n,e){return Qi(n,"POST","/v1/accounts:signInWithEmailLink",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Yc{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ri(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ri(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ao(e,t,"signInWithPassword",Mv);case"emailLink":return Uv(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ao(e,r,"signUpPassword",xv);case"emailLink":return Bv(e,{idToken:t,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(n,e){return Qi(n,"POST","/v1/accounts:signInWithIdp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="http://localhost";class Cn extends Yc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Kc(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Cn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ar(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ar(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ar(e,t)}buildRequest(){const e={requestUri:jv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zv(n){const e=ci(ui(n)).link,t=e?ci(ui(e)).deep_link_id:null,r=ci(ui(n)).deep_link_id;return(r?ci(ui(r)).link:null)||r||t||e||n}class Zc{constructor(e){var t,r,i,s,o,c;const u=ci(ui(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=qv((i=u.mode)!==null&&i!==void 0?i:null);q(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=zv(e);try{return new Zc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.providerId=Vr.PROVIDER_ID}static credential(e,t){return Ri._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Zc.parseLink(t);return q(r,"argument-error"),Ri._fromEmailAndCode(e,r.code,r.tenantId)}}Vr.PROVIDER_ID="password";Vr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends eu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Xi{constructor(){super("facebook.com")}static credential(e){return Cn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cn._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return _t.credential(t,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Xi{constructor(){super("github.com")}static credential(e){return Cn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com";qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Xi{constructor(){super("twitter.com")}static credential(e,t){return Cn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return zt.credential(t,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(n,e){return Qi(n,"POST","/v1/accounts:signUp",Pt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ze._fromIdTokenResponse(e,r,i),o=Ph(r);return new Dn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ph(r);return new Dn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ph(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends Rt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,co.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new co(e,t,r,i)}}function wm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?co._fromErrorAndOperation(n,s,e,r):s})}async function Gv(n,e,t=!1){const r=await hr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Dn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kv(n,e,t=!1){const{auth:r}=n;if(Ge(r.app))return Promise.reject(Et(r));const i="reauthenticate";try{const s=await hr(n,wm(r,i,e,n),t);q(s.idToken,r,"internal-error");const o=Xc(s.idToken);q(o,r,"internal-error");const{sub:c}=o;return q(n.uid===c,r,"user-mismatch"),Dn._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Xe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(n,e,t=!1){if(Ge(n.app))return Promise.reject(Et(n));const r="signIn",i=await wm(n,r,e),s=await Dn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Wv(n,e){return Am(Ct(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm(n){const e=Ct(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Hv(n,e,t){const r=Ct(n);await ao(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Fv)}async function Qv(n,e,t){if(Ge(n.app))return Promise.reject(Et(n));const r=Ct(n),o=await ao(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$v).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&bm(n),u}),c=await Dn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Xv(n,e,t){return Ge(n.app)?Promise.reject(Et(n)):Wv(pe(n),Vr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bm(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(n,e){return dt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sm(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=pe(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await hr(r,Jv(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Yv(n,e,t,r){return pe(n).onIdTokenChanged(e,t,r)}function Zv(n,e,t){return pe(n).beforeAuthStateChanged(e,t)}function eE(n,e,t,r){return pe(n).onAuthStateChanged(e,t,r)}function tE(n){return pe(n).signOut()}const uo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uo,"1"),this.storage.removeItem(uo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=1e3,rE=10;class Pm extends Rm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ym(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rE):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},nE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pm.type="LOCAL";const iE=Pm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm extends Rm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cm.type="SESSION";const Dm=Cm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async h=>h(t.origin,s)),u=await sE(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const h=tu("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function aE(n){st().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function cE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uE(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function lE(){return Vm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="firebaseLocalStorageDb",hE=1,lo="firebaseLocalStorage",Nm="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mo(n,e){return n.transaction([lo],e?"readwrite":"readonly").objectStore(lo)}function dE(){const n=indexedDB.deleteDatabase(km);return new Ji(n).toPromise()}function uc(){const n=indexedDB.open(km,hE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(lo,{keyPath:Nm})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(lo)?e(r):(r.close(),await dE(),e(await uc()))})})}async function Ch(n,e,t){const r=Mo(n,!0).put({[Nm]:e,value:t});return new Ji(r).toPromise()}async function fE(n,e){const t=Mo(n,!1).get(e),r=await new Ji(t).toPromise();return r===void 0?null:r.value}function Dh(n,e){const t=Mo(n,!0).delete(e);return new Ji(t).toPromise()}const mE=800,pE=3;class Om{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>pE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xo._getInstance(lE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await cE(),!this.activeServiceWorker)return;this.sender=new oE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uc();return await Ch(e,uo,"1"),await Dh(e,uo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ch(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>fE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Mo(i,!1).getAll();return new Ji(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Om.type="LOCAL";const gE=Om;new Hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(n,e){return e?It(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends Yc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ar(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ar(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _E(n){return Am(n.auth,new nu(n),n.bypassAuthState)}function yE(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Kv(t,new nu(n),n.bypassAuthState)}async function IE(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Gv(t,new nu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _E;case"linkViaPopup":case"linkViaRedirect":return IE;case"reauthViaPopup":case"reauthViaRedirect":return yE;default:Xe(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=new Hi(2e3,1e4);async function EE(n,e,t){if(Ge(n.app))return Promise.reject(et(n,"operation-not-supported-in-this-environment"));const r=Ct(n);XI(n,e,eu);const i=xm(r,t);return new En(r,"signInViaPopup",e,i).executeNotNull()}class En extends Mm{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vE.get())};e()}}En.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="pendingRedirect",Bs=new Map;class wE extends Mm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Bs.get(this.auth._key());if(!e){try{const r=await AE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Bs.set(this.auth._key(),e)}return this.bypassAuthState||Bs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AE(n,e){const t=RE(e),r=SE(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function bE(n,e){Bs.set(n._key(),e)}function SE(n){return It(n._redirectPersistence)}function RE(n){return Us(TE,n.config.apiKey,n.name)}async function PE(n,e,t=!1){if(Ge(n.app))return Promise.reject(Et(n));const r=Ct(n),i=xm(r,e),o=await new wE(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=10*60*1e3;class DE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Lm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(et(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vh(e))}saveEventToCache(e){this.cachedEventUids.add(Vh(e)),this.lastProcessedEventTime=Date.now()}}function Vh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Lm({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function VE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lm(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(n,e={}){return dt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OE=/^https?/;async function xE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await kE(n);for(const t of e)try{if(ME(t))return}catch{}Xe(n,"unauthorized-domain")}function ME(n){const e=ac(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!OE.test(t))return!1;if(NE.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=new Hi(3e4,6e4);function kh(){const n=st().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function FE(n){return new Promise((e,t)=>{var r,i,s;function o(){kh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kh(),t(et(n,"network-request-failed"))},timeout:LE.get()})}if(!((i=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=st().gapi)===null||s===void 0)&&s.load)o();else{const c=bv("iframefcb");return st()[c]=()=>{gapi.load?o():t(et(n,"network-request-failed"))},vm(`${Av()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw js=null,e})}let js=null;function UE(n){return js=js||FE(n),js}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=new Hi(5e3,15e3),jE="__/auth/iframe",qE="emulator/auth/iframe",zE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$E=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GE(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qc(e,qE):`https://${n.config.authDomain}/${jE}`,r={apiKey:e.apiKey,appName:n.name,v:Dr},i=$E.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Wi(r).slice(1)}`}async function KE(n){const e=await UE(n),t=st().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:GE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=et(n,"network-request-failed"),c=st().setTimeout(()=>{s(o)},BE.get());function u(){st().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HE=500,QE=600,XE="_blank",JE="http://localhost";class Nh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YE(n,e,t,r=HE,i=QE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},WE),{width:r.toString(),height:i.toString(),top:s,left:o}),h=Ee().toLowerCase();t&&(c=fm(h)?XE:t),hm(h)&&(e=e||JE,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[S,C])=>`${g}${S}=${C},`,"");if(pv(h)&&c!=="_self")return ZE(e||"",c),new Nh(null);const m=window.open(e||"",c,f);q(m,n,"popup-blocked");try{m.focus()}catch{}return new Nh(m)}function ZE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="__/auth/handler",tT="emulator/auth/handler",nT=encodeURIComponent("fac");async function Oh(n,e,t,r,i,s){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Dr,eventId:i};if(e instanceof eu){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",xy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Xi){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await n._getAppCheckToken(),h=u?`#${nT}=${encodeURIComponent(u)}`:"";return`${rT(n)}?${Wi(c).slice(1)}${h}`}function rT({config:n}){return n.emulator?Qc(n,tT):`https://${n.authDomain}/${eT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="webStorageSupport";class iT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dm,this._completeRedirectFn=PE,this._overrideRedirectResult=bE}async _openPopup(e,t,r,i){var s;At((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Oh(e,t,r,ac(),i);return YE(e,o,tu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Oh(e,t,r,ac(),i);return aE(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(At(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await KE(e),r=new DE(e);return t.register("authEvent",i=>(q(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ja,{type:ja},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[ja];o!==void 0&&t(!!o),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ym()||dm()||Jc()}}const sT=iT;var xh="@firebase/auth",Mh="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cT(n){lr(new Pn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Im(n)},h=new Ev(r,i,s,u);return Vv(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),lr(new Pn("auth-internal",e=>{const t=Ct(e.getProvider("auth").getImmediate());return(r=>new oT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(xh,Mh,aT(n)),Ht(xh,Mh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=5*60,lT=Wf("authIdTokenMaxAge")||uT;let Lh=null;const hT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>lT)return;const i=t?.token;Lh!==i&&(Lh=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dT(n=LI()){const e=Gc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Dv(n,{popupRedirectResolver:sT,persistence:[gE,iE,Dm]}),r=Wf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=hT(s.toString());Zv(t,o,()=>o(t.currentUser)),Yv(t,c=>o(c))}}const i=Ey("auth");return i&&kv(t,`http://${i}`),t}function fT(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Tv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=et("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",fT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cT("Browser");var Fh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,Fm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function I(){}I.prototype=_.prototype,v.D=_.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(E,T,b){for(var y=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)y[mt-2]=arguments[mt];return _.prototype[T].apply(E,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,_,I){I||(I=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(T=0;16>T;++T)E[T]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=v.g[0],I=v.g[1],T=v.g[2];var b=v.g[3],y=_+(b^I&(T^b))+E[0]+3614090360&4294967295;_=I+(y<<7&4294967295|y>>>25),y=b+(T^_&(I^T))+E[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(I^b&(_^I))+E[2]+606105819&4294967295,T=b+(y<<17&4294967295|y>>>15),y=I+(_^T&(b^_))+E[3]+3250441966&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(b^I&(T^b))+E[4]+4118548399&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(T^_&(I^T))+E[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(I^b&(_^I))+E[6]+2821735955&4294967295,T=b+(y<<17&4294967295|y>>>15),y=I+(_^T&(b^_))+E[7]+4249261313&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(b^I&(T^b))+E[8]+1770035416&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(T^_&(I^T))+E[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(I^b&(_^I))+E[10]+4294925233&4294967295,T=b+(y<<17&4294967295|y>>>15),y=I+(_^T&(b^_))+E[11]+2304563134&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(b^I&(T^b))+E[12]+1804603682&4294967295,_=I+(y<<7&4294967295|y>>>25),y=b+(T^_&(I^T))+E[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=T+(I^b&(_^I))+E[14]+2792965006&4294967295,T=b+(y<<17&4294967295|y>>>15),y=I+(_^T&(b^_))+E[15]+1236535329&4294967295,I=T+(y<<22&4294967295|y>>>10),y=_+(T^b&(I^T))+E[1]+4129170786&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^T&(_^I))+E[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(b^_))+E[11]+643717713&4294967295,T=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(T^b))+E[0]+3921069994&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(I^T))+E[5]+3593408605&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^T&(_^I))+E[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(b^_))+E[15]+3634488961&4294967295,T=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(T^b))+E[4]+3889429448&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(I^T))+E[9]+568446438&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^T&(_^I))+E[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(b^_))+E[3]+4107603335&4294967295,T=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(T^b))+E[8]+1163531501&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(T^b&(I^T))+E[13]+2850285829&4294967295,_=I+(y<<5&4294967295|y>>>27),y=b+(I^T&(_^I))+E[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=T+(_^I&(b^_))+E[7]+1735328473&4294967295,T=b+(y<<14&4294967295|y>>>18),y=I+(b^_&(T^b))+E[12]+2368359562&4294967295,I=T+(y<<20&4294967295|y>>>12),y=_+(I^T^b)+E[5]+4294588738&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^T)+E[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^I)+E[11]+1839030562&4294967295,T=b+(y<<16&4294967295|y>>>16),y=I+(T^b^_)+E[14]+4259657740&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^b)+E[1]+2763975236&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^T)+E[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^I)+E[7]+4139469664&4294967295,T=b+(y<<16&4294967295|y>>>16),y=I+(T^b^_)+E[10]+3200236656&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^b)+E[13]+681279174&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^T)+E[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^I)+E[3]+3572445317&4294967295,T=b+(y<<16&4294967295|y>>>16),y=I+(T^b^_)+E[6]+76029189&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(I^T^b)+E[9]+3654602809&4294967295,_=I+(y<<4&4294967295|y>>>28),y=b+(_^I^T)+E[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=T+(b^_^I)+E[15]+530742520&4294967295,T=b+(y<<16&4294967295|y>>>16),y=I+(T^b^_)+E[2]+3299628645&4294967295,I=T+(y<<23&4294967295|y>>>9),y=_+(T^(I|~b))+E[0]+4096336452&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~T))+E[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~I))+E[14]+2878612391&4294967295,T=b+(y<<15&4294967295|y>>>17),y=I+(b^(T|~_))+E[5]+4237533241&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~b))+E[12]+1700485571&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~T))+E[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~I))+E[10]+4293915773&4294967295,T=b+(y<<15&4294967295|y>>>17),y=I+(b^(T|~_))+E[1]+2240044497&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~b))+E[8]+1873313359&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~T))+E[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~I))+E[6]+2734768916&4294967295,T=b+(y<<15&4294967295|y>>>17),y=I+(b^(T|~_))+E[13]+1309151649&4294967295,I=T+(y<<21&4294967295|y>>>11),y=_+(T^(I|~b))+E[4]+4149444226&4294967295,_=I+(y<<6&4294967295|y>>>26),y=b+(I^(_|~T))+E[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=T+(_^(b|~I))+E[2]+718787259&4294967295,T=b+(y<<15&4294967295|y>>>17),y=I+(b^(T|~_))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+b&4294967295}r.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var I=_-this.blockSize,E=this.B,T=this.h,b=0;b<_;){if(T==0)for(;b<=I;)i(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<_;)if(E[T++]=v.charCodeAt(b++),T==this.blockSize){i(this,E),T=0;break}}else for(;b<_;)if(E[T++]=v[b++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=_},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var I=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=I&255,I/=256;for(this.u(v),v=Array(16),_=I=0;4>_;++_)for(var E=0;32>E;E+=8)v[I++]=this.g[_]>>>E&255;return v};function s(v,_){var I=c;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=_(v)}function o(v,_){this.h=_;for(var I=[],E=!0,T=v.length-1;0<=T;T--){var b=v[T]|0;E&&b==_||(I[T]=b,E=!1)}this.g=I}var c={};function u(v){return-128<=v&&128>v?s(v,function(_){return new o([_|0],0>_?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(0>v)return V(h(-v));for(var _=[],I=1,E=0;v>=I;E++)_[E]=v/I|0,I*=4294967296;return new o(_,0)}function f(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return V(f(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(_,8)),E=m,T=0;T<v.length;T+=8){var b=Math.min(8,v.length-T),y=parseInt(v.substring(T,T+b),_);8>b?(b=h(Math.pow(_,b)),E=E.j(b).add(h(y))):(E=E.j(I),E=E.add(h(y)))}return E}var m=u(0),g=u(1),S=u(16777216);n=o.prototype,n.m=function(){if(N(this))return-V(this).m();for(var v=0,_=1,I=0;I<this.g.length;I++){var E=this.i(I);v+=(0<=E?E:4294967296+E)*_,_*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(N(this))return"-"+V(this).toString(v);for(var _=h(Math.pow(v,6)),I=this,E="";;){var T=Q(I,_).g;I=$(I,T.j(_));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=T,C(I))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function N(v){return v.h==-1}n.l=function(v){return v=$(this,v),N(v)?-1:C(v)?0:1};function V(v){for(var _=v.g.length,I=[],E=0;E<_;E++)I[E]=~v.g[E];return new o(I,~v.h).add(g)}n.abs=function(){return N(this)?V(this):this},n.add=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],E=0,T=0;T<=_;T++){var b=E+(this.i(T)&65535)+(v.i(T)&65535),y=(b>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);E=y>>>16,b&=65535,y&=65535,I[T]=y<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function $(v,_){return v.add(V(_))}n.j=function(v){if(C(this)||C(v))return m;if(N(this))return N(v)?V(this).j(V(v)):V(V(this).j(v));if(N(v))return V(this.j(V(v)));if(0>this.l(S)&&0>v.l(S))return h(this.m()*v.m());for(var _=this.g.length+v.g.length,I=[],E=0;E<2*_;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<v.g.length;T++){var b=this.i(E)>>>16,y=this.i(E)&65535,mt=v.i(T)>>>16,Br=v.i(T)&65535;I[2*E+2*T]+=y*Br,B(I,2*E+2*T),I[2*E+2*T+1]+=b*Br,B(I,2*E+2*T+1),I[2*E+2*T+1]+=y*mt,B(I,2*E+2*T+1),I[2*E+2*T+2]+=b*mt,B(I,2*E+2*T+2)}for(E=0;E<_;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=_;E<2*_;E++)I[E]=0;return new o(I,0)};function B(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function F(v,_){this.g=v,this.h=_}function Q(v,_){if(C(_))throw Error("division by zero");if(C(v))return new F(m,m);if(N(v))return _=Q(V(v),_),new F(V(_.g),V(_.h));if(N(_))return _=Q(v,V(_)),new F(V(_.g),_.h);if(30<v.g.length){if(N(v)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,E=_;0>=E.l(v);)I=te(I),E=te(E);var T=H(I,1),b=H(E,1);for(E=H(E,2),I=H(I,2);!C(E);){var y=b.add(E);0>=y.l(v)&&(T=T.add(I),b=y),E=H(E,1),I=H(I,1)}return _=$(v,T.j(_)),new F(T,_)}for(T=m;0<=v.l(_);){for(I=Math.max(1,Math.floor(v.m()/_.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=h(I),y=b.j(_);N(y)||0<y.l(v);)I-=E,b=h(I),y=b.j(_);C(b)&&(b=g),T=T.add(b),v=$(v,y)}return new F(T,v)}n.A=function(v){return Q(this,v).h},n.and=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)&v.i(E);return new o(I,this.h&v.h)},n.or=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)|v.i(E);return new o(I,this.h|v.h)},n.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],E=0;E<_;E++)I[E]=this.i(E)^v.i(E);return new o(I,this.h^v.h)};function te(v){for(var _=v.g.length+1,I=[],E=0;E<_;E++)I[E]=v.i(E)<<1|v.i(E-1)>>>31;return new o(I,v.h)}function H(v,_){var I=_>>5;_%=32;for(var E=v.g.length-I,T=[],b=0;b<E;b++)T[b]=0<_?v.i(b+I)>>>_|v.i(b+I+1)<<32-_:v.i(b+I);return new o(T,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Fm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Qt=o}).apply(typeof Fh<"u"?Fh:typeof self<"u"?self:typeof window<"u"?window:{});var Vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Um,li,Bm,qs,lc,jm,qm,zm;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,l,d){return a==Array.prototype||a==Object.prototype||(a[l]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vs=="object"&&Vs];for(var l=0;l<a.length;++l){var d=a[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(a,l){if(l)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var A=a[p];if(!(A in d))break e;d=d[A]}a=a[a.length-1],p=d[a],l=l(p),l!=p&&l!=null&&e(d,a,{configurable:!0,writable:!0,value:l})}}function s(a,l){a instanceof String&&(a+="");var d=0,p=!1,A={next:function(){if(!p&&d<a.length){var R=d++;return{value:l(R,a[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(a){return a||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var l=typeof a;return l=l!="object"?l:a?Array.isArray(a)?"array":l:"null",l=="array"||l=="object"&&typeof a.length=="number"}function h(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function f(a,l,d){return a.call.apply(a.bind,arguments)}function m(a,l,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),a.apply(l,A)}}return function(){return a.apply(l,arguments)}}function g(a,l,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function S(a,l){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function C(a,l){function d(){}d.prototype=l.prototype,a.aa=l.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,A,R){for(var O=Array(arguments.length-2),se=2;se<arguments.length;se++)O[se-2]=arguments[se];return l.prototype[A].apply(p,O)}}function N(a){const l=a.length;if(0<l){const d=Array(l);for(let p=0;p<l;p++)d[p]=a[p];return d}return[]}function V(a,l){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const A=a.length||0,R=p.length||0;a.length=A+R;for(let O=0;O<R;O++)a[A+O]=p[O]}else a.push(p)}}class ${constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var te=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function H(a,l,d){for(const p in a)l.call(d,a[p],p,a)}function v(a,l){for(const d in a)l.call(void 0,a[d],d,a)}function _(a){const l={};for(const d in a)l[d]=a[d];return l}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,l){let d,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(d in p)a[d]=p[d];for(let R=0;R<I.length;R++)d=I[R],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function T(a){var l=1;a=a.split(":");const d=[];for(;0<l&&a.length;)d.push(a.shift()),l--;return a.length&&d.push(a.join(":")),d}function b(a){c.setTimeout(()=>{throw a},0)}function y(){var a=ha;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class mt{constructor(){this.h=this.g=null}add(l,d){const p=Br.get();p.set(l,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Br=new $(()=>new b_,a=>a.reset());class b_{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let jr,qr=!1,ha=new mt,cl=()=>{const a=c.Promise.resolve(void 0);jr=()=>{a.then(S_)}};var S_=()=>{for(var a;a=y();){try{a.h.call(a.g)}catch(d){b(d)}var l=Br;l.j(a),100>l.h&&(l.h++,a.next=l.g,l.g=a)}qr=!1};function Nt(){this.s=this.s,this.C=this.C}Nt.prototype.s=!1,Nt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Nt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var R_=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return a}();function zr(a,l){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget){if(te){e:{try{Q(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=a.fromElement:d=="mouseout"&&(l=a.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:P_[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&zr.aa.h.call(this)}}C(zr,Re);var P_={2:"touch",3:"pen",4:"mouse"};zr.prototype.h=function(){zr.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var hs="closure_listenable_"+(1e6*Math.random()|0),C_=0;function D_(a,l,d,p,A){this.listener=a,this.proxy=null,this.src=l,this.type=d,this.capture=!!p,this.ha=A,this.key=++C_,this.da=this.fa=!1}function ds(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function fs(a){this.src=a,this.g={},this.h=0}fs.prototype.add=function(a,l,d,p,A){var R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);var O=fa(a,l,p,A);return-1<O?(l=a[O],d||(l.fa=!1)):(l=new D_(l,this.src,R,!!p,A),l.fa=d,a.push(l)),l};function da(a,l){var d=l.type;if(d in a.g){var p=a.g[d],A=Array.prototype.indexOf.call(p,l,void 0),R;(R=0<=A)&&Array.prototype.splice.call(p,A,1),R&&(ds(l),a.g[d].length==0&&(delete a.g[d],a.h--))}}function fa(a,l,d,p){for(var A=0;A<a.length;++A){var R=a[A];if(!R.da&&R.listener==l&&R.capture==!!d&&R.ha==p)return A}return-1}var ma="closure_lm_"+(1e6*Math.random()|0),pa={};function ul(a,l,d,p,A){if(Array.isArray(l)){for(var R=0;R<l.length;R++)ul(a,l[R],d,p,A);return null}return d=dl(d),a&&a[hs]?a.K(l,d,h(p)?!!p.capture:!1,A):V_(a,l,d,!1,p,A)}function V_(a,l,d,p,A,R){if(!l)throw Error("Invalid event type");var O=h(A)?!!A.capture:!!A,se=_a(a);if(se||(a[ma]=se=new fs(a)),d=se.add(l,d,p,O,R),d.proxy)return d;if(p=k_(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)R_||(A=O),A===void 0&&(A=!1),a.addEventListener(l.toString(),p,A);else if(a.attachEvent)a.attachEvent(hl(l.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function k_(){function a(d){return l.call(a.src,a.listener,d)}const l=N_;return a}function ll(a,l,d,p,A){if(Array.isArray(l))for(var R=0;R<l.length;R++)ll(a,l[R],d,p,A);else p=h(p)?!!p.capture:!!p,d=dl(d),a&&a[hs]?(a=a.i,l=String(l).toString(),l in a.g&&(R=a.g[l],d=fa(R,d,p,A),-1<d&&(ds(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete a.g[l],a.h--)))):a&&(a=_a(a))&&(l=a.g[l.toString()],a=-1,l&&(a=fa(l,d,p,A)),(d=-1<a?l[a]:null)&&ga(d))}function ga(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[hs])da(l.i,a);else{var d=a.type,p=a.proxy;l.removeEventListener?l.removeEventListener(d,p,a.capture):l.detachEvent?l.detachEvent(hl(d),p):l.addListener&&l.removeListener&&l.removeListener(p),(d=_a(l))?(da(d,a),d.h==0&&(d.src=null,l[ma]=null)):ds(a)}}}function hl(a){return a in pa?pa[a]:pa[a]="on"+a}function N_(a,l){if(a.da)a=!0;else{l=new zr(l,this);var d=a.listener,p=a.ha||a.src;a.fa&&ga(a),a=d.call(p,l)}return a}function _a(a){return a=a[ma],a instanceof fs?a:null}var ya="__closure_events_fn_"+(1e9*Math.random()>>>0);function dl(a){return typeof a=="function"?a:(a[ya]||(a[ya]=function(l){return a.handleEvent(l)}),a[ya])}function Pe(){Nt.call(this),this.i=new fs(this),this.M=this,this.F=null}C(Pe,Nt),Pe.prototype[hs]=!0,Pe.prototype.removeEventListener=function(a,l,d,p){ll(this,a,l,d,p)};function Me(a,l){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=l.type||l,typeof l=="string")l=new Re(l,a);else if(l instanceof Re)l.target=l.target||a;else{var A=l;l=new Re(p,a),E(l,A)}if(A=!0,d)for(var R=d.length-1;0<=R;R--){var O=l.g=d[R];A=ms(O,p,!0,l)&&A}if(O=l.g=a,A=ms(O,p,!0,l)&&A,A=ms(O,p,!1,l)&&A,d)for(R=0;R<d.length;R++)O=l.g=d[R],A=ms(O,p,!1,l)&&A}Pe.prototype.N=function(){if(Pe.aa.N.call(this),this.i){var a=this.i,l;for(l in a.g){for(var d=a.g[l],p=0;p<d.length;p++)ds(d[p]);delete a.g[l],a.h--}}this.F=null},Pe.prototype.K=function(a,l,d,p){return this.i.add(String(a),l,!1,d,p)},Pe.prototype.L=function(a,l,d,p){return this.i.add(String(a),l,!0,d,p)};function ms(a,l,d,p){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,R=0;R<l.length;++R){var O=l[R];if(O&&!O.da&&O.capture==d){var se=O.listener,be=O.ha||O.src;O.fa&&da(a.i,O),A=se.call(be,p)!==!1&&A}}return A&&!p.defaultPrevented}function fl(a,l,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(a,l||0)}function ml(a){a.g=fl(()=>{a.g=null,a.i&&(a.i=!1,ml(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class O_ extends Nt{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ml(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(a){Nt.call(this),this.h=a,this.g={}}C($r,Nt);var pl=[];function gl(a){H(a.g,function(l,d){this.g.hasOwnProperty(d)&&ga(l)},a),a.g={}}$r.prototype.N=function(){$r.aa.N.call(this),gl(this)},$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ia=c.JSON.stringify,x_=c.JSON.parse,M_=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function va(){}va.prototype.h=null;function _l(a){return a.h||(a.h=a.i())}function yl(){}var Gr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ea(){Re.call(this,"d")}C(Ea,Re);function Ta(){Re.call(this,"c")}C(Ta,Re);var un={},Il=null;function ps(){return Il=Il||new Pe}un.La="serverreachability";function vl(a){Re.call(this,un.La,a)}C(vl,Re);function Kr(a){const l=ps();Me(l,new vl(l))}un.STAT_EVENT="statevent";function El(a,l){Re.call(this,un.STAT_EVENT,a),this.stat=l}C(El,Re);function Le(a){const l=ps();Me(l,new El(l,a))}un.Ma="timingevent";function Tl(a,l){Re.call(this,un.Ma,a),this.size=l}C(Tl,Re);function Wr(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},l)}function Hr(){this.g=!0}Hr.prototype.xa=function(){this.g=!1};function L_(a,l,d,p,A,R){a.info(function(){if(a.g)if(R)for(var O="",se=R.split("&"),be=0;be<se.length;be++){var Z=se[be].split("=");if(1<Z.length){var Ce=Z[0];Z=Z[1];var De=Ce.split("_");O=2<=De.length&&De[1]=="type"?O+(Ce+"="+Z+"&"):O+(Ce+"=redacted&")}}else O=null;else O=R;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+d+`
`+O})}function F_(a,l,d,p,A,R,O){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+d+`
`+R+" "+O})}function $n(a,l,d,p){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+B_(a,d)+(p?" "+p:"")})}function U_(a,l){a.info(function(){return"TIMEOUT: "+l})}Hr.prototype.info=function(){};function B_(a,l){if(!a.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var O=1;O<A.length;O++)A[O]=""}}}}return Ia(d)}catch{return l}}var gs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wa;function _s(){}C(_s,va),_s.prototype.g=function(){return new XMLHttpRequest},_s.prototype.i=function(){return{}},wa=new _s;function Ot(a,l,d,p){this.j=a,this.i=l,this.l=d,this.R=p||1,this.U=new $r(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Al}function Al(){this.i=null,this.g="",this.h=!1}var bl={},Aa={};function ba(a,l,d){a.L=1,a.v=Es(pt(l)),a.m=d,a.P=!0,Sl(a,null)}function Sl(a,l){a.F=Date.now(),ys(a),a.A=pt(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Bl(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Al,a.g=ih(a.j,d?l:null,!a.m),0<a.O&&(a.M=new O_(g(a.Y,a,a.g),a.O)),l=a.U,d=a.g,p=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(pl[0]=A.toString()),A=pl);for(var R=0;R<A.length;R++){var O=ul(d,A[R],p||l.handleEvent,!1,l.h||l);if(!O)break;l.g[O.key]=O}l=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,l)):(a.u="GET",a.g.ea(a.A,a.u,null,l)),Kr(),L_(a.i,a.u,a.A,a.l,a.R,a.m)}Ot.prototype.ca=function(a){a=a.target;const l=this.M;l&&gt(a)==3?l.j():this.Y(a)},Ot.prototype.Y=function(a){try{if(a==this.g)e:{const De=gt(this.g);var l=this.g.Ba();const Wn=this.g.Z();if(!(3>De)&&(De!=3||this.g&&(this.h.h||this.g.oa()||Wl(this.g)))){this.J||De!=4||l==7||(l==8||0>=Wn?Kr(3):Kr(2)),Sa(this);var d=this.g.Z();this.X=d;t:if(Rl(this)){var p=Wl(this.g);a="";var A=p.length,R=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),Qr(this);var O="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,a+=this.h.i.decode(p[l],{stream:!(R&&l==A-1)});p.length=0,this.h.g+=a,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=d==200,F_(this.i,this.u,this.A,this.l,this.R,De,d),this.o){if(this.T&&!this.K){t:{if(this.g){var se,be=this.g;if((se=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(se)){var Z=se;break t}}Z=null}if(d=Z)$n(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ra(this,d);else{this.o=!1,this.s=3,Le(12),ln(this),Qr(this);break e}}if(this.P){d=!0;let Je;for(;!this.J&&this.C<O.length;)if(Je=j_(this,O),Je==Aa){De==4&&(this.s=4,Le(14),d=!1),$n(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==bl){this.s=4,Le(15),$n(this.i,this.l,O,"[Invalid Chunk]"),d=!1;break}else $n(this.i,this.l,Je,null),Ra(this,Je);if(Rl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),De!=4||O.length!=0||this.h.h||(this.s=1,Le(16),d=!1),this.o=this.o&&d,!d)$n(this.i,this.l,O,"[Invalid Chunked Response]"),ln(this),Qr(this);else if(0<O.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),Na(Ce),Ce.M=!0,Le(11))}}else $n(this.i,this.l,O,null),Ra(this,O);De==4&&ln(this),this.o&&!this.J&&(De==4?eh(this.j,this):(this.o=!1,ys(this)))}else iy(this.g),d==400&&0<O.indexOf("Unknown SID")?(this.s=3,Le(12)):(this.s=0,Le(13)),ln(this),Qr(this)}}}catch{}finally{}};function Rl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function j_(a,l){var d=a.C,p=l.indexOf(`
`,d);return p==-1?Aa:(d=Number(l.substring(d,p)),isNaN(d)?bl:(p+=1,p+d>l.length?Aa:(l=l.slice(p,p+d),a.C=p+d,l)))}Ot.prototype.cancel=function(){this.J=!0,ln(this)};function ys(a){a.S=Date.now()+a.I,Pl(a,a.I)}function Pl(a,l){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Wr(g(a.ba,a),l)}function Sa(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Ot.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(U_(this.i,this.A),this.L!=2&&(Kr(),Le(17)),ln(this),this.s=2,Qr(this)):Pl(this,this.S-a)};function Qr(a){a.j.G==0||a.J||eh(a.j,a)}function ln(a){Sa(a);var l=a.M;l&&typeof l.ma=="function"&&l.ma(),a.M=null,gl(a.U),a.g&&(l=a.g,a.g=null,l.abort(),l.ma())}function Ra(a,l){try{var d=a.j;if(d.G!=0&&(d.g==a||Pa(d.h,a))){if(!a.K&&Pa(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Rs(d),bs(d);else break e;ka(d),Le(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Wr(g(d.Za,d),6e3));if(1>=Vl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else dn(d,11)}else if((a.K||d.g==a)&&Rs(d),!B(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let Z=A[l];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const Ce=Z[3];Ce!=null&&(d.la=Ce,d.j.info("VER="+d.la));const De=Z[4];De!=null&&(d.Aa=De,d.j.info("SVER="+d.Aa));const Wn=Z[5];Wn!=null&&typeof Wn=="number"&&0<Wn&&(p=1.5*Wn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Je=a.g;if(Je){const Cs=Je.g?Je.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cs){var R=p.h;R.g||Cs.indexOf("spdy")==-1&&Cs.indexOf("quic")==-1&&Cs.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ca(R,R.h),R.h=null))}if(p.D){const Oa=Je.g?Je.g.getResponseHeader("X-HTTP-Session-Id"):null;Oa&&(p.ya=Oa,ae(p.I,p.D,Oa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var O=a;if(p.qa=rh(p,p.J?p.ia:null,p.W),O.K){kl(p.h,O);var se=O,be=p.L;be&&(se.I=be),se.B&&(Sa(se),ys(se)),p.g=O}else Yl(p);0<d.i.length&&Ss(d)}else Z[0]!="stop"&&Z[0]!="close"||dn(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?dn(d,7):Va(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}Kr(4)}catch{}}var q_=class{constructor(a,l){this.g=a,this.map=l}};function Cl(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vl(a){return a.h?1:a.g?a.g.size:0}function Pa(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Ca(a,l){a.g?a.g.add(l):a.h=l}function kl(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Cl.prototype.cancel=function(){if(this.i=Nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Nl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const d of a.g.values())l=l.concat(d.D);return l}return N(a.i)}function z_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var l=[],d=a.length,p=0;p<d;p++)l.push(a[p]);return l}l=[],d=0;for(p in a)l[d++]=a[p];return l}function $_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var l=[];a=a.length;for(var d=0;d<a;d++)l.push(d);return l}l=[],d=0;for(const p in a)l[d++]=p;return l}}}function Ol(a,l){if(a.forEach&&typeof a.forEach=="function")a.forEach(l,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,l,void 0);else for(var d=$_(a),p=z_(a),A=p.length,R=0;R<A;R++)l.call(void 0,p[R],d&&d[R],a)}var xl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function G_(a,l){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),A=null;if(0<=p){var R=a[d].substring(0,p);A=a[d].substring(p+1)}else R=a[d];l(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function hn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof hn){this.h=a.h,Is(this,a.j),this.o=a.o,this.g=a.g,vs(this,a.s),this.l=a.l;var l=a.i,d=new Yr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Ml(this,d),this.m=a.m}else a&&(l=String(a).match(xl))?(this.h=!1,Is(this,l[1]||"",!0),this.o=Xr(l[2]||""),this.g=Xr(l[3]||"",!0),vs(this,l[4]),this.l=Xr(l[5]||"",!0),Ml(this,l[6]||"",!0),this.m=Xr(l[7]||"")):(this.h=!1,this.i=new Yr(null,this.h))}hn.prototype.toString=function(){var a=[],l=this.j;l&&a.push(Jr(l,Ll,!0),":");var d=this.g;return(d||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Jr(l,Ll,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Jr(d,d.charAt(0)=="/"?H_:W_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Jr(d,X_)),a.join("")};function pt(a){return new hn(a)}function Is(a,l,d){a.j=d?Xr(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function vs(a,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);a.s=l}else a.s=null}function Ml(a,l,d){l instanceof Yr?(a.i=l,J_(a.i,a.h)):(d||(l=Jr(l,Q_)),a.i=new Yr(l,a.h))}function ae(a,l,d){a.i.set(l,d)}function Es(a){return ae(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Xr(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Jr(a,l,d){return typeof a=="string"?(a=encodeURI(a).replace(l,K_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function K_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ll=/[#\/\?@]/g,W_=/[#\?:]/g,H_=/[#\?]/g,Q_=/[#\?@]/g,X_=/#/g;function Yr(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function xt(a){a.g||(a.g=new Map,a.h=0,a.i&&G_(a.i,function(l,d){a.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Yr.prototype,n.add=function(a,l){xt(this),this.i=null,a=Gn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(l),this.h+=1,this};function Fl(a,l){xt(a),l=Gn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function Ul(a,l){return xt(a),l=Gn(a,l),a.g.has(l)}n.forEach=function(a,l){xt(this),this.g.forEach(function(d,p){d.forEach(function(A){a.call(l,A,p,this)},this)},this)},n.na=function(){xt(this);const a=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let p=0;p<l.length;p++){const A=a[p];for(let R=0;R<A.length;R++)d.push(l[p])}return d},n.V=function(a){xt(this);let l=[];if(typeof a=="string")Ul(this,a)&&(l=l.concat(this.g.get(Gn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)l=l.concat(a[d])}return l},n.set=function(a,l){return xt(this),this.i=null,a=Gn(this,a),Ul(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=this.V(a),0<a.length?String(a[0]):l):l};function Bl(a,l,d){Fl(a,l),0<d.length&&(a.i=null,a.g.set(Gn(a,l),N(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var p=l[d];const R=encodeURIComponent(String(p)),O=this.V(p);for(p=0;p<O.length;p++){var A=R;O[p]!==""&&(A+="="+encodeURIComponent(String(O[p]))),a.push(A)}}return this.i=a.join("&")};function Gn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function J_(a,l){l&&!a.j&&(xt(a),a.i=null,a.g.forEach(function(d,p){var A=p.toLowerCase();p!=A&&(Fl(this,p),Bl(this,A,d))},a)),a.j=l}function Y_(a,l){const d=new Hr;if(c.Image){const p=new Image;p.onload=S(Mt,d,"TestLoadImage: loaded",!0,l,p),p.onerror=S(Mt,d,"TestLoadImage: error",!1,l,p),p.onabort=S(Mt,d,"TestLoadImage: abort",!1,l,p),p.ontimeout=S(Mt,d,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else l(!1)}function Z_(a,l){const d=new Hr,p=new AbortController,A=setTimeout(()=>{p.abort(),Mt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:p.signal}).then(R=>{clearTimeout(A),R.ok?Mt(d,"TestPingServer: ok",!0,l):Mt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),Mt(d,"TestPingServer: error",!1,l)})}function Mt(a,l,d,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(d)}catch{}}function ey(){this.g=new M_}function ty(a,l,d){const p=d||"";try{Ol(a,function(A,R){let O=A;h(A)&&(O=Ia(A)),l.push(p+R+"="+encodeURIComponent(O))})}catch(A){throw l.push(p+"type="+encodeURIComponent("_badmap")),A}}function Ts(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Ts,va),Ts.prototype.g=function(){return new ws(this.l,this.j)},Ts.prototype.i=function(a){return function(){return a}}({});function ws(a,l){Pe.call(this),this.D=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ws,Pe),n=ws.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=l,this.readyState=1,ei(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(l.body=a),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function jl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?Zr(this):ei(this),this.readyState==3&&jl(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Zr(this))},n.Qa=function(a){this.g&&(this.response=a,Zr(this))},n.ga=function(){this.g&&Zr(this)};function Zr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ei(a)}n.setRequestHeader=function(a,l){this.u.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=l.next();return a.join(`\r
`)};function ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ws.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ql(a){let l="";return H(a,function(d,p){l+=p,l+=":",l+=d,l+=`\r
`}),l}function Da(a,l,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=ql(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ae(a,l,d))}function de(a){Pe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(de,Pe);var ny=/^https?$/i,ry=["POST","PUT"];n=de.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,l,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wa.g(),this.v=this.o?_l(this.o):_l(wa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(R){zl(this,R);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)d.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())d.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),A=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ry,l,void 0))||p||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,O]of d)this.g.setRequestHeader(R,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kl(this),this.u=!0,this.g.send(a),this.u=!1}catch(R){zl(this,R)}};function zl(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.m=5,$l(a),As(a)}function $l(a){a.A||(a.A=!0,Me(a,"complete"),Me(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Me(this,"complete"),Me(this,"abort"),As(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),As(this,!0)),de.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Gl(this):this.bb())},n.bb=function(){Gl(this)};function Gl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gt(a)!=4||a.Z()!=2)){if(a.u&&gt(a)==4)fl(a.Ea,0,a);else if(Me(a,"readystatechange"),gt(a)==4){a.h=!1;try{const O=a.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var p;if(p=O===0){var A=String(a.D).match(xl)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),p=!ny.test(A?A.toLowerCase():"")}d=p}if(d)Me(a,"complete"),Me(a,"success");else{a.m=6;try{var R=2<gt(a)?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.Z()+"]",$l(a)}}finally{As(a)}}}}function As(a,l){if(a.g){Kl(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,l||Me(a,"ready");try{d.onreadystatechange=p}catch{}}}function Kl(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function gt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),x_(l)}};function Wl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function iy(a){const l={};a=(a.g&&2<=gt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(B(a[p]))continue;var d=T(a[p]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=l[A]||[];l[A]=R,R.push(d)}v(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(a,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||l}function Hl(a){this.Aa=0,this.i=[],this.j=new Hr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ti("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ti("baseRetryDelayMs",5e3,a),this.cb=ti("retryDelaySeedMs",1e4,a),this.Wa=ti("forwardChannelMaxRetries",2,a),this.wa=ti("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Cl(a&&a.concurrentRequestLimit),this.Da=new ey,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Hl.prototype,n.la=8,n.G=1,n.connect=function(a,l,d,p){Le(0),this.W=a,this.H=l||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=rh(this,null,this.W),Ss(this)};function Va(a){if(Ql(a),a.G==3){var l=a.U++,d=pt(a.I);if(ae(d,"SID",a.K),ae(d,"RID",l),ae(d,"TYPE","terminate"),ni(a,d),l=new Ot(a,a.j,l),l.L=2,l.v=Es(pt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=ih(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ys(l)}nh(a)}function bs(a){a.g&&(Na(a),a.g.cancel(),a.g=null)}function Ql(a){bs(a),a.u&&(c.clearTimeout(a.u),a.u=null),Rs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ss(a){if(!Dl(a.h)&&!a.s){a.s=!0;var l=a.Ga;jr||cl(),qr||(jr(),qr=!0),ha.add(l,a),a.B=0}}function sy(a,l){return Vl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=l.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Wr(g(a.Ga,a,l),th(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new Ot(this,this.j,a);let R=this.o;if(this.S&&(R?(R=_(R),E(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Jl(this,A,l),d=pt(this.I),ae(d,"RID",a),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),ni(this,d),R&&(this.O?l="headers="+encodeURIComponent(String(ql(R)))+"&"+l:this.m&&Da(d,this.m,R)),Ca(this.h,A),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",l),ae(d,"SID","null"),A.T=!0,ba(A,d,null)):ba(A,d,l),this.G=2}}else this.G==3&&(a?Xl(this,a):this.i.length==0||Dl(this.h)||Xl(this))};function Xl(a,l){var d;l?d=l.l:d=a.U++;const p=pt(a.I);ae(p,"SID",a.K),ae(p,"RID",d),ae(p,"AID",a.T),ni(a,p),a.m&&a.o&&Da(p,a.m,a.o),d=new Ot(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),l&&(a.i=l.D.concat(a.i)),l=Jl(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ca(a.h,d),ba(d,p,l)}function ni(a,l){a.H&&H(a.H,function(d,p){ae(l,p,d)}),a.l&&Ol({},function(d,p){ae(l,p,d)})}function Jl(a,l,d){d=Math.min(a.i.length,d);var p=a.l?g(a.l.Na,a.l,a):null;e:{var A=a.i;let R=-1;for(;;){const O=["count="+d];R==-1?0<d?(R=A[0].g,O.push("ofs="+R)):R=0:O.push("ofs="+R);let se=!0;for(let be=0;be<d;be++){let Z=A[be].g;const Ce=A[be].map;if(Z-=R,0>Z)R=Math.max(0,A[be].g-100),se=!1;else try{ty(Ce,O,"req"+Z+"_")}catch{p&&p(Ce)}}if(se){p=O.join("&");break e}}}return a=a.i.splice(0,d),l.D=a,p}function Yl(a){if(!a.g&&!a.u){a.Y=1;var l=a.Fa;jr||cl(),qr||(jr(),qr=!0),ha.add(l,a),a.v=0}}function ka(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Wr(g(a.Fa,a),th(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Zl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Wr(g(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Le(10),bs(this),Zl(this))};function Na(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Zl(a){a.g=new Ot(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var l=pt(a.qa);ae(l,"RID","rpc"),ae(l,"SID",a.K),ae(l,"AID",a.T),ae(l,"CI",a.F?"0":"1"),!a.F&&a.ja&&ae(l,"TO",a.ja),ae(l,"TYPE","xmlhttp"),ni(a,l),a.m&&a.o&&Da(l,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Es(pt(l)),d.m=null,d.P=!0,Sl(d,a)}n.Za=function(){this.C!=null&&(this.C=null,bs(this),ka(this),Le(19))};function Rs(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function eh(a,l){var d=null;if(a.g==l){Rs(a),Na(a),a.g=null;var p=2}else if(Pa(a.h,l))d=l.D,kl(a.h,l),p=1;else return;if(a.G!=0){if(l.o)if(p==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=a.B;p=ps(),Me(p,new Tl(p,d)),Ss(a)}else Yl(a);else if(A=l.s,A==3||A==0&&0<l.X||!(p==1&&sy(a,l)||p==2&&ka(a)))switch(d&&0<d.length&&(l=a.h,l.i=l.i.concat(d)),A){case 1:dn(a,5);break;case 4:dn(a,10);break;case 3:dn(a,6);break;default:dn(a,2)}}}function th(a,l){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*l}function dn(a,l){if(a.j.info("Error code "+l),l==2){var d=g(a.fb,a),p=a.Xa;const A=!p;p=new hn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Is(p,"https"),Es(p),A?Y_(p.toString(),d):Z_(p.toString(),d)}else Le(2);a.G=0,a.l&&a.l.sa(l),nh(a),Ql(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function nh(a){if(a.G=0,a.ka=[],a.l){const l=Nl(a.h);(l.length!=0||a.i.length!=0)&&(V(a.ka,l),V(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function rh(a,l,d){var p=d instanceof hn?pt(d):new hn(d);if(p.g!="")l&&(p.g=l+"."+p.g),vs(p,p.s);else{var A=c.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var R=new hn(null);p&&Is(R,p),l&&(R.g=l),A&&vs(R,A),d&&(R.l=d),p=R}return d=a.D,l=a.ya,d&&l&&ae(p,d,l),ae(p,"VER",a.la),ni(a,p),p}function ih(a,l,d){if(l&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Ca&&!a.pa?new de(new Ts({eb:d})):new de(a.pa),l.Ha(a.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sh(){}n=sh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ps(){}Ps.prototype.g=function(a,l){return new ze(a,l)};function ze(a,l){Pe.call(this),this.g=new Hl(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(a?a["X-WebChannel-Client-Profile"]=l.va:a={"X-WebChannel-Client-Profile":l.va}),this.g.S=a,(a=l&&l.Sb)&&!B(a)&&(this.g.m=a),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!B(l)&&(this.g.D=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Kn(this)}C(ze,Pe),ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){Va(this.g)},ze.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ia(a),a=d);l.i.push(new q_(l.Ya++,a)),l.G==3&&Ss(l)},ze.prototype.N=function(){this.g.l=null,delete this.j,Va(this.g),delete this.g,ze.aa.N.call(this)};function oh(a){Ea.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const d in l){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}C(oh,Ea);function ah(){Ta.call(this),this.status=1}C(ah,Ta);function Kn(a){this.g=a}C(Kn,sh),Kn.prototype.ua=function(){Me(this.g,"a")},Kn.prototype.ta=function(a){Me(this.g,new oh(a))},Kn.prototype.sa=function(a){Me(this.g,new ah)},Kn.prototype.ra=function(){Me(this.g,"b")},Ps.prototype.createWebChannel=Ps.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,zm=function(){return new Ps},qm=function(){return ps()},jm=un,lc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gs.NO_ERROR=0,gs.TIMEOUT=8,gs.HTTP_ERROR=6,qs=gs,wl.COMPLETE="complete",Bm=wl,yl.EventType=Gr,Gr.OPEN="a",Gr.CLOSE="b",Gr.ERROR="c",Gr.MESSAGE="d",Pe.prototype.listen=Pe.prototype.K,li=yl,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha,Um=de}).apply(typeof Vs<"u"?Vs:typeof self<"u"?self:typeof window<"u"?window:{});const Uh="@firebase/firestore",Bh="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new zc("@firebase/firestore");function er(){return Vn.logLevel}function D(n,...e){if(Vn.logLevel<=X.DEBUG){const t=e.map(ru);Vn.debug(`Firestore (${kr}): ${n}`,...t)}}function ge(n,...e){if(Vn.logLevel<=X.ERROR){const t=e.map(ru);Vn.error(`Firestore (${kr}): ${n}`,...t)}}function Zt(n,...e){if(Vn.logLevel<=X.WARN){const t=e.map(ru);Vn.warn(`Firestore (${kr}): ${n}`,...t)}}function ru(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,$m(n,r,t)}function $m(n,e,t){let r=`FIRESTORE (${kr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ge(r),new Error(r)}function U(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||$m(e,i,r)}function L(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ke.UNAUTHENTICATED))}shutdown(){}}class gT{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){U(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new ot;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ot,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ot)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string",31837,{l:r}),new mT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string",2055,{h:e}),new ke(e)}}class _T{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class yT{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new _T(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ge(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){U(this.o===void 0,3512);const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new jh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(U(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new jh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=vT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function z(n,e){return n<e?-1:n>e?1:0}function hc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return z(r,i);{const s=Gm(),o=ET(s.encode(qh(n,t)),s.encode(qh(e,t)));return o!==0?o:z(r,i)}}t+=r>65535?2:1}return z(n.length,e.length)}function qh(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function ET(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return z(n[t],e[t]);return z(n.length,e.length)}function dr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}function Km(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="__name__";class tt{constructor(e,t,r){t===void 0?t=0:t>e.length&&M(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&M(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return tt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=tt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return z(e.length,t.length)}static compareSegments(e,t){const r=tt.isNumericId(e),i=tt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?tt.extractNumericId(e).compare(tt.extractNumericId(t)):hc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qt.fromString(e.substring(4,e.length-2))}}class ee extends tt{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ee(t)}static emptyPath(){return new ee([])}}const TT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends tt{construct(e,t,r){return new he(e,t,r)}static isValidIdentifier(e){return TT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zh}static keyField(){return new he([zh])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new k(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new k(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new k(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new he(t)}static emptyPath(){return new he([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(ee.fromString(e))}static fromName(e){return new x(ee.fromString(e).popFirst(5))}static empty(){return new x(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n,e,t){if(!t)throw new k(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wT(n,e,t,r){if(e===!0&&r===!0)throw new k(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $h(n){if(!x.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gh(n){if(x.isDocumentKey(n))throw new k(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hm(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Lo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Fe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new k(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lo(n);throw new k(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n,e){const t={typeString:n};return e&&(t.value=e),t}function Yi(n,e){if(!Hm(n))throw new k(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new k(P.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh=-62135596800,Wh=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Wh);return new ne(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Kh)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wh}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Yi(e,ne._jsonSchema))return new ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Kh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:Ie("string",ne._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromTimestamp(e){return new j(e)}static min(){return new j(new ne(0,0))}static max(){return new j(new ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=-1;class ho{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function dc(n){return n.fields.find(e=>e.kind===2)}function pn(n){return n.fields.filter(e=>e.kind!==2)}ho.UNKNOWN_ID=-1;class zs{constructor(e,t){this.fieldPath=e,this.kind=t}}class Pi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Pi(0,He.min())}}function Qm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new ne(t+1,0):new ne(t,r));return new He(i,x.empty(),e)}function Xm(n){return new He(n.readTime,n.key,fr)}class He{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new He(j.min(),x.empty(),fr)}static max(){return new He(j.max(),x.empty(),fr)}}function su(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ym{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Jm)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof w?t:w.resolve(t)}catch(t){return w.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):w.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):w.reject(t)}static resolve(e){return new w((t,r)=>{t(e)})}static reject(e){return new w((t,r)=>{r(e)})}static waitFor(e){return new w((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},u=>r(u))}),o=!0,s===i&&t()})}static or(e){let t=w.resolve(!1);for(const r of e)t=t.next(i=>i?w.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new w((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{o[h]=f,++c,c===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new w((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="SimpleDb";class Fo{static open(e,t,r,i){try{return new Fo(t,e.transaction(i,r))}catch(s){throw new _i(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new ot,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new _i(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=ou(r.target.error);this.S.reject(new _i(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(D($e,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new bT(t)}}class Xt{static delete(e){return D($e,"Removing database:",e),_n(Gf().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Yf())return!1;if(Xt.F())return!0;const e=Ee(),t=Xt.M(e),r=0<t&&t<10,i=Zm(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,Xt.M(Ee())===12.2&&ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(D($e,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new _i(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new k(P.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new k(P.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new _i(e,o))},i.onupgradeneeded=s=>{D($e,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;if(this.L!==null&&this.L!==s.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${s.oldVersion}, event.newVersion=${s.newVersion}, db.version=${o.version}`);this.B.q(o,i.transaction,s.oldVersion,this.version).next(()=>{D($e,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const r=t.target;this.L=r.version},{passive:!0})),this.db.addEventListener("versionchange",t=>{var r;t.newVersion===null&&(Zt('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(r=this.databaseDeletedListener)===null||r===void 0||r.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,r,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const c=Fo.open(this.db,e,s?"readonly":"readwrite",r),u=i(c).next(h=>(c.v(),h)).catch(h=>(c.abort(h),w.reject(h))).toPromise();return u.catch(()=>{}),await c.D,u}catch(c){const u=c,h=u.name!=="FirebaseError"&&o<3;if(D($e,"Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Zm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class AT{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return _n(this.$.delete())}}class _i extends k{constructor(e,t){super(P.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function on(n){return n.name==="IndexedDbTransactionError"}class bT{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(D($e,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(D($e,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),_n(r)}add(e){return D($e,"ADD",this.store.name,e,e),_n(this.store.add(e))}get(e){return _n(this.store.get(e)).next(t=>(t===void 0&&(t=null),D($e,"GET",this.store.name,e,t),t))}delete(e){return D($e,"DELETE",this.store.name,e),_n(this.store.delete(e))}count(){return D($e,"COUNT",this.store.name),_n(this.store.count())}j(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new w((o,c)=>{s.onerror=u=>{c(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.J(s,(c,u)=>{o.push(u)}).next(()=>o)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,t){D($e,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Z=!1;const i=this.cursor(r);return this.J(i,(s,o,c)=>c.delete())}X(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.J(i,t)}ee(e){const t=this.cursor({});return new w((r,i)=>{t.onerror=s=>{const o=ou(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():r()}):r()}})}J(e,t){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const u=new AT(c),h=t(c.primaryKey,c.value,u);if(h instanceof w){const f=h.catch(m=>(u.done(),w.reject(m)));r.push(f)}u.isDone?i():u.W===null?c.continue():c.continue(u.W)}}).next(()=>w.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function _n(n){return new w((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=ou(r.target.error);t(i)}})}let Hh=!1;function ou(n){const e=Xt.M(Ee());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Hh||(Hh=!0,setTimeout(()=>{throw r},0)),r}}return n}const yi="IndexBackfiller";class ST{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){D(yi,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.te.re();D(yi,`Documents written: ${t}`)}catch(t){on(t)?D(yi,"Ignoring IndexedDB error during index backfill: ",t):await sn(t)}await this.ne(6e4)})}}class RT{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){const r=new Set;let i=t,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return D(yi,`Processing collection: ${o}`),this.se(e,o,i).next(c=>{i-=c,r.add(o)});s=!1})).next(()=>t-i)}se(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.oe(i,s)).next(c=>(D(yi,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}oe(e,t){let r=e;return t.changes.forEach((i,s)=>{const o=Xm(s);su(o,r)>0&&(r=o)}),new He(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Be.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=-1;function Uo(n){return n==null}function Ci(n){return n===0&&1/n==-1/0}function ep(n){return typeof n=="number"&&Number.isInteger(n)&&!Ci(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="";function xe(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Qh(e)),e=PT(n.get(t),e);return Qh(e)}function PT(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case fo:t+="";break;default:t+=s}}return t}function Qh(n){return n+fo+""}function rt(n){const e=n.length;if(U(e>=2,64408,{path:n}),e===2)return U(n.charAt(0)===fo&&n.charAt(1)==="",56145,{path:n}),ee.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf(fo,s);switch((o<0||o>t)&&M(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(s,o);let u;i.length===0?u=c:(i+=c,u=i,i=""),r.push(u);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:M(61167,{path:n})}s=o+2}return new ee(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="remoteDocuments",Zi="owner",Hn="owner",Di="mutationQueues",CT="userId",Ye="mutations",Xh="batchId",Tn="userMutationsIndex",Jh=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(n,e){return[n,xe(e)]}function tp(n,e,t){return[n,xe(e),t]}const DT={},mr="documentMutations",mo="remoteDocumentsV14",VT=["prefixPath","collectionGroup","readTime","documentId"],Gs="documentKeyIndex",kT=["prefixPath","collectionGroup","documentId"],np="collectionGroupIndex",NT=["collectionGroup","readTime","prefixPath","documentId"],Vi="remoteDocumentGlobal",fc="remoteDocumentGlobalKey",pr="targets",rp="queryTargetsIndex",OT=["canonicalId","targetId"],gr="targetDocuments",xT=["targetId","path"],au="documentTargetsIndex",MT=["path","targetId"],po="targetGlobalKey",An="targetGlobal",ki="collectionParents",LT=["collectionId","parent"],_r="clientMetadata",FT="clientId",Bo="bundles",UT="bundleId",jo="namedQueries",BT="name",cu="indexConfiguration",jT="indexId",mc="collectionGroupIndex",qT="collectionGroup",Ii="indexState",zT=["indexId","uid"],ip="sequenceNumberIndex",$T=["uid","sequenceNumber"],vi="indexEntries",GT=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],sp="documentKeyIndex",KT=["indexId","uid","orderedDocumentKey"],qo="documentOverlays",WT=["userId","collectionPath","documentId"],pc="collectionPathOverlayIndex",HT=["userId","collectionPath","largestBatchId"],op="collectionGroupOverlayIndex",QT=["userId","collectionGroup","largestBatchId"],uu="globals",XT="name",ap=[Di,Ye,mr,gn,pr,Zi,An,gr,_r,Vi,ki,Bo,jo],JT=[...ap,qo],cp=[Di,Ye,mr,mo,pr,Zi,An,gr,_r,Vi,ki,Bo,jo,qo],up=cp,lu=[...up,cu,Ii,vi],YT=lu,lp=[...lu,uu],ZT=lp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends Ym{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function Te(n,e){const t=L(n);return Xt.N(t.ce,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function an(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.comparator=e,this.root=t||Se.EMPTY}insert(e,t){return new oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ks(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ks(this.root,e,this.comparator,!1)}getReverseIterator(){return new ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ks(this.root,e,this.comparator,!0)}}class ks{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Se.RED,this.left=i??Se.EMPTY,this.right=s??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Se(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Se.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw M(27949);return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zh(this.data.getIterator())}getIteratorFrom(e){return new Zh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ie(this.comparator);return t.data=e,t}}class Zh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Qn(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.fields=e,e.sort(he.comparator)}static empty(){return new je([])}unionWith(e){let t=new ie(he.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return dr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dp("Invalid base64 string: "+s):s}}(e);return new _e(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const ew=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bt(n){if(U(!!n,39018),typeof n=="string"){let e=0;const t=ew.exec(n);if(U(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function St(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="server_timestamp",mp="__type__",pp="__previous_value__",gp="__local_write_time__";function hu(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[mp])===null||t===void 0?void 0:t.stringValue)===fp}function zo(n){const e=n.mapValue.fields[pp];return hu(e)?zo(e):e}function Ni(n){const e=bt(n.mapValue.fields[gp].timestampValue);return new ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t,r,i,s,o,c,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const go="(default)";class kn{constructor(e,t){this.projectId=e,this.database=t||go}static empty(){return new kn("","")}get isDefaultDatabase(){return this.database===go}isEqual(e){return e instanceof kn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="__type__",_p="__max__",Gt={mapValue:{fields:{__type__:{stringValue:_p}}}},fu="__vector__",yr="value",Ks={nullValue:"NULL_VALUE"};function en(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hu(n)?4:yp(n)?9007199254740991:$o(n)?10:11:M(28295,{value:n})}function ut(n,e){if(n===e)return!0;const t=en(n);if(t!==en(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ni(n).isEqual(Ni(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=bt(i.timestampValue),c=bt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return St(i.bytesValue).isEqual(St(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ce(i.geoPointValue.latitude)===ce(s.geoPointValue.latitude)&&ce(i.geoPointValue.longitude)===ce(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ce(i.integerValue)===ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ce(i.doubleValue),c=ce(s.doubleValue);return o===c?Ci(o)===Ci(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return dr(n.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Yh(o)!==Yh(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!ut(o[u],c[u])))return!1;return!0}(n,e);default:return M(52216,{left:n})}}function Oi(n,e){return(n.values||[]).find(t=>ut(t,e))!==void 0}function tn(n,e){if(n===e)return 0;const t=en(n),r=en(e);if(t!==r)return z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,e.booleanValue);case 2:return function(s,o){const c=ce(s.integerValue||s.doubleValue),u=ce(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return ed(n.timestampValue,e.timestampValue);case 4:return ed(Ni(n),Ni(e));case 5:return hc(n.stringValue,e.stringValue);case 6:return function(s,o){const c=St(s),u=St(o);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const f=z(c[h],u[h]);if(f!==0)return f}return z(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const c=z(ce(s.latitude),ce(o.latitude));return c!==0?c:z(ce(s.longitude),ce(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return td(n.arrayValue,e.arrayValue);case 10:return function(s,o){var c,u,h,f;const m=s.fields||{},g=o.fields||{},S=(c=m[yr])===null||c===void 0?void 0:c.arrayValue,C=(u=g[yr])===null||u===void 0?void 0:u.arrayValue,N=z(((h=S?.values)===null||h===void 0?void 0:h.length)||0,((f=C?.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:td(S,C)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===Gt.mapValue&&o===Gt.mapValue)return 0;if(s===Gt.mapValue)return 1;if(o===Gt.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=hc(u[m],f[m]);if(g!==0)return g;const S=tn(c[u[m]],h[f[m]]);if(S!==0)return S}return z(u.length,f.length)}(n.mapValue,e.mapValue);default:throw M(23264,{le:t})}}function ed(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return z(n,e);const t=bt(n),r=bt(e),i=z(t.seconds,r.seconds);return i!==0?i:z(t.nanos,r.nanos)}function td(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=tn(t[i],r[i]);if(s)return s}return z(t.length,r.length)}function Ir(n){return _c(n)}function _c(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=bt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return St(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return x.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=_c(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${_c(t.fields[o])}`;return i+"}"}(n.mapValue):M(61005,{value:n})}function Ws(n){switch(en(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zo(n);return e?16+Ws(e):16;case 5:return 2*n.stringValue.length;case 6:return St(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ws(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return an(r.fields,(s,o)=>{i+=s.length+Ws(o)}),i}(n.mapValue);default:throw M(13486,{value:n})}}function xi(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function yc(n){return!!n&&"integerValue"in n}function Mi(n){return!!n&&"arrayValue"in n}function nd(n){return!!n&&"nullValue"in n}function rd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hs(n){return!!n&&"mapValue"in n}function $o(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[du])===null||t===void 0?void 0:t.stringValue)===fu}function Ei(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return an(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ei(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ei(n.arrayValue.values[t]);return e}return Object.assign({},n)}function yp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_p}const Ip={mapValue:{fields:{[du]:{stringValue:fu},[yr]:{arrayValue:{}}}}};function nw(n){return"nullValue"in n?Ks:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?xi(kn.empty(),x.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?$o(n)?Ip:{mapValue:{}}:M(35942,{value:n})}function rw(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?xi(kn.empty(),x.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Ip:"mapValue"in n?$o(n)?{mapValue:{}}:Gt:M(61959,{value:n})}function id(n,e){const t=tn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function sd(n,e){const t=tn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Hs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ei(t)}setAll(e){let t=he.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Ei(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Hs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Hs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){an(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Oe(Ei(this.value))}}function vp(n){const e=[];return an(n.fields,(t,r)=>{const i=new he([t]);if(Hs(r)){const s=vp(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new fe(e,0,j.min(),j.min(),j.min(),Oe.empty(),0)}static newFoundDocument(e,t,r,i){return new fe(e,1,t,j.min(),r,i,0)}static newNoDocument(e,t){return new fe(e,2,t,j.min(),j.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new fe(e,3,t,j.min(),j.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t){this.position=e,this.inclusive=t}}function od(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),t.key):r=tn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ad(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ut(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t="asc"){this.field=e,this.dir=t}}function iw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{}class J extends Ep{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new sw(e,t,r):t==="array-contains"?new cw(e,r):t==="in"?new Rp(e,r):t==="not-in"?new uw(e,r):t==="array-contains-any"?new lw(e,r):new J(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ow(e,r):new aw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(tn(t,this.value)):t!==null&&en(this.value)===en(t)&&this.matchesComparison(tn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends Ep{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new re(e,t)}matches(e){return Er(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Er(n){return n.op==="and"}function Ic(n){return n.op==="or"}function mu(n){return Tp(n)&&Er(n)}function Tp(n){for(const e of n.filters)if(e instanceof re)return!1;return!0}function vc(n){if(n instanceof J)return n.field.canonicalString()+n.op.toString()+Ir(n.value);if(mu(n))return n.filters.map(e=>vc(e)).join(",");{const e=n.filters.map(t=>vc(t)).join(",");return`${n.op}(${e})`}}function wp(n,e){return n instanceof J?function(r,i){return i instanceof J&&r.op===i.op&&r.field.isEqual(i.field)&&ut(r.value,i.value)}(n,e):n instanceof re?function(r,i){return i instanceof re&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&wp(o,i.filters[c]),!0):!1}(n,e):void M(19439)}function Ap(n,e){const t=n.filters.concat(e);return re.create(t,n.op)}function bp(n){return n instanceof J?function(t){return`${t.field.canonicalString()} ${t.op} ${Ir(t.value)}`}(n):n instanceof re?function(t){return t.op.toString()+" {"+t.getFilters().map(bp).join(" ,")+"}"}(n):"Filter"}class sw extends J{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class ow extends J{constructor(e,t){super(e,"in",t),this.keys=Sp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class aw extends J{constructor(e,t){super(e,"not-in",t),this.keys=Sp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Sp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>x.fromName(r.referenceValue))}class cw extends J{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mi(t)&&Oi(t.arrayValue,this.value)}}class Rp extends J{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Oi(this.value.arrayValue,t)}}class uw extends J{constructor(e,t){super(e,"not-in",t)}matches(e){if(Oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Oi(this.value.arrayValue,t)}}class lw extends J{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Oi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Pe=null}}function Ec(n,e=null,t=[],r=[],i=null,s=null,o=null){return new hw(n,e,t,r,i,s,o)}function Nn(n){const e=L(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>vc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Uo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ir(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ir(r)).join(",")),e.Pe=t}return e.Pe}function es(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!iw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!wp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ad(n.startAt,e.startAt)&&ad(n.endAt,e.endAt)}function _o(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function yo(n,e){return n.filters.filter(t=>t instanceof J&&t.field.isEqual(e))}function cd(n,e,t){let r=Ks,i=!0;for(const s of yo(n,e)){let o=Ks,c=!0;switch(s.op){case"<":case"<=":o=nw(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=Ks}id({value:r,inclusive:i},{value:o,inclusive:c})<0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];id({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function ud(n,e,t){let r=Gt,i=!0;for(const s of yo(n,e)){let o=Gt,c=!0;switch(s.op){case">=":case">":o=rw(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=Gt}sd({value:r,inclusive:i},{value:o,inclusive:c})>0&&(r=o,i=c)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];sd({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Pp(n,e,t,r,i,s,o,c){return new Nr(n,e,t,r,i,s,o,c)}function ts(n){return new Nr(n)}function ld(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Cp(n){return n.collectionGroup!==null}function Ti(n){const e=L(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ie(he.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Li(s,r))}),t.has(he.keyField().canonicalString())||e.Te.push(new Li(he.keyField(),r))}return e.Te}function We(n){const e=L(n);return e.Ie||(e.Ie=dw(e,Ti(n))),e.Ie}function dw(n,e){if(n.limitType==="F")return Ec(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Li(i.field,s)});const t=n.endAt?new vr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new vr(n.startAt.position,n.startAt.inclusive):null;return Ec(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Tc(n,e){const t=n.filters.concat([e]);return new Nr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Io(n,e,t){return new Nr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Go(n,e){return es(We(n),We(e))&&n.limitType===e.limitType}function Dp(n){return`${Nn(We(n))}|lt:${n.limitType}`}function tr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>bp(i)).join(", ")}]`),Uo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Ir(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Ir(i)).join(",")),`Target(${r})`}(We(n))}; limitType=${n.limitType})`}function ns(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):x.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Ti(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,u){const h=od(o,c,u);return o.inclusive?h<=0:h<0}(r.startAt,Ti(r),i)||r.endAt&&!function(o,c,u){const h=od(o,c,u);return o.inclusive?h>=0:h>0}(r.endAt,Ti(r),i))}(n,e)}function Vp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kp(n){return(e,t)=>{let r=!1;for(const i of Ti(n)){const s=fw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fw(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):function(s,o,c){const u=o.data.field(s),h=c.data.field(s);return u!==null&&h!==null?tn(u,h):M(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){an(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=new oe(x.comparator);function Ke(){return mw}const Np=new oe(x.comparator);function hi(...n){let e=Np;for(const t of n)e=e.insert(t.key,t);return e}function Op(n){let e=Np;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function it(){return wi()}function xp(){return wi()}function wi(){return new Dt(n=>n.toString(),(n,e)=>n.isEqual(e))}const pw=new oe(x.comparator),gw=new ie(x.comparator);function W(...n){let e=gw;for(const t of n)e=e.add(t);return e}const _w=new ie(z);function pu(){return _w}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ci(e)?"-0":e}}function Mp(n){return{integerValue:""+n}}function yw(n,e){return ep(e)?Mp(e):gu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this._=void 0}}function Iw(n,e,t){return n instanceof Fi?function(i,s){const o={fields:{[mp]:{stringValue:fp},[gp]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hu(s)&&(s=zo(s)),s&&(o.fields[pp]=s),{mapValue:o}}(t,e):n instanceof On?Fp(n,e):n instanceof xn?Up(n,e):function(i,s){const o=Lp(i,s),c=hd(o)+hd(i.Ee);return yc(o)&&yc(i.Ee)?Mp(c):gu(i.serializer,c)}(n,e)}function vw(n,e,t){return n instanceof On?Fp(n,e):n instanceof xn?Up(n,e):t}function Lp(n,e){return n instanceof Ui?function(r){return yc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Fi extends Ko{}class On extends Ko{constructor(e){super(),this.elements=e}}function Fp(n,e){const t=Bp(e);for(const r of n.elements)t.some(i=>ut(i,r))||t.push(r);return{arrayValue:{values:t}}}class xn extends Ko{constructor(e){super(),this.elements=e}}function Up(n,e){let t=Bp(e);for(const r of n.elements)t=t.filter(i=>!ut(i,r));return{arrayValue:{values:t}}}class Ui extends Ko{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function hd(n){return ce(n.integerValue||n.doubleValue)}function Bp(n){return Mi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t){this.field=e,this.transform=t}}function Ew(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof On&&i instanceof On||r instanceof xn&&i instanceof xn?dr(r.elements,i.elements,ut):r instanceof Ui&&i instanceof Ui?ut(r.Ee,i.Ee):r instanceof Fi&&i instanceof Fi}(n.transform,e.transform)}class Tw{constructor(e,t){this.version=e,this.transformResults=t}}class Ae{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ae}static exists(e){return new Ae(void 0,e)}static updateTime(e){return new Ae(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Wo{}function jp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new rs(n.key,Ae.none()):new Or(n.key,n.data,Ae.none());{const t=n.data,r=Oe.empty();let i=new ie(he.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Vt(n.key,r,new je(i.toArray()),Ae.none())}}function ww(n,e,t){n instanceof Or?function(i,s,o){const c=i.value.clone(),u=fd(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Vt?function(i,s,o){if(!Qs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=fd(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(qp(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ai(n,e,t,r){return n instanceof Or?function(s,o,c,u){if(!Qs(s.precondition,o))return c;const h=s.value.clone(),f=md(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Vt?function(s,o,c,u){if(!Qs(s.precondition,o))return c;const h=md(s.fieldTransforms,u,o),f=o.data;return f.setAll(qp(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,o,c){return Qs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function Aw(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Lp(r.transform,i||null);s!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,s))}return t||null}function dd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&dr(r,i,(s,o)=>Ew(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Or extends Wo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vt extends Wo{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function fd(n,e,t){const r=new Map;U(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,vw(o,c,t[i]))}return r}function md(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,Iw(s,o,e))}return r}class rs extends Wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zp extends Wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ww(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ai(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ai(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=xp();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const u=jp(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),W())}isEqual(e){return this.batchId===e.batchId&&dr(this.mutations,e.mutations,(t,r)=>dd(t,r))&&dr(this.baseMutations,e.baseMutations,(t,r)=>dd(t,r))}}class Iu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){U(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return pw}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Iu(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,Y;function Sw(n){switch(n){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function $p(n){if(n===void 0)return ge("GRPC error has no .code"),P.UNKNOWN;switch(n){case ye.OK:return P.OK;case ye.CANCELLED:return P.CANCELLED;case ye.UNKNOWN:return P.UNKNOWN;case ye.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ye.INTERNAL:return P.INTERNAL;case ye.UNAVAILABLE:return P.UNAVAILABLE;case ye.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ye.NOT_FOUND:return P.NOT_FOUND;case ye.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ye.ABORTED:return P.ABORTED;case ye.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ye.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:n})}}(Y=ye||(ye={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new Qt([4294967295,4294967295],0);function pd(n){const e=Gm().encode(n),t=new Fm;return t.update(e),new Uint8Array(t.digest())}function gd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qt([t,r],0),new Qt([i,s],0)]}class Eu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new di(`Invalid padding: ${t}`);if(r<0)throw new di(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new di(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new di(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Qt.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Qt.fromNumber(r)));return i.compare(Rw)===1&&(i=new Qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=pd(e),[r,i]=gd(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Eu(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.fe===0)return;const t=pd(e),[r,i]=gd(t);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ss.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new is(j.min(),i,new oe(z),Ke(),W())}}class ss{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ss(r,t,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class Gp{constructor(e,t){this.targetId=e,this.De=t}}class Kp{constructor(e,t,r=_e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class _d{constructor(){this.ve=0,this.Ce=yd(),this.Fe=_e.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=W(),t=W(),r=W();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:M(38017,{changeType:s})}}),new ss(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=yd()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,U(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Pw{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ke(),this.je=Ns(),this.Je=Ns(),this.He=new oe(z)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:M(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if(_o(s))if(r===0){const o=new x(s.path);this.Xe(t,o,fe.newNoDocument(o,j.min()))}else U(r===1,20013,{expectedCount:r});else{const o=this.ot(t);if(o!==r){const c=this._t(e),u=c?this.ut(c,e,o):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=St(r).toUint8Array()}catch(u){if(u instanceof dp)return Zt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Eu(o,i,s)}catch(u){return Zt(u instanceof di?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,s,null),i++)}),i}Pt(e){const t=new Map;this.Ge.forEach((s,o)=>{const c=this.st(o);if(c){if(s.current&&_o(c.target)){const u=new x(c.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,fe.newNoDocument(u,e))}s.Ne&&(t.set(o,s.Le()),s.ke())}});let r=W();this.Je.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new is(e,t,this.He,this.ze,r);return this.ze=Ke(),this.je=Ns(),this.Je=Ns(),this.He=new oe(z),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new _d,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ie(z),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ie(z),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new _d),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ns(){return new oe(x.comparator)}function yd(){return new oe(x.comparator)}const Cw={asc:"ASCENDING",desc:"DESCENDING"},Dw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vw={and:"AND",or:"OR"};class kw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wc(n,e){return n.useProto3Json||Uo(e)?e:{value:e}}function Tr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Nw(n,e){return Tr(n,e.toTimestamp())}function Ue(n){return U(!!n,49232),j.fromTimestamp(function(t){const r=bt(t);return new ne(r.seconds,r.nanos)}(n))}function Tu(n,e){return Ac(n,e).canonicalString()}function Ac(n,e){const t=function(i){return new ee(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Hp(n){const e=ee.fromString(n);return U(rg(e),10190,{key:e.toString()}),e}function vo(n,e){return Tu(n.databaseId,e.path)}function bn(n,e){const t=Hp(e);if(t.get(1)!==n.databaseId.projectId)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new k(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(Jp(t))}function Qp(n,e){return Tu(n.databaseId,e)}function Xp(n){const e=Hp(n);return e.length===4?ee.emptyPath():Jp(e)}function bc(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jp(n){return U(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Id(n,e,t){return{name:vo(n,e),fields:t.value.mapValue.fields}}function Ow(n,e,t){const r=bn(n,e.name),i=Ue(e.updateTime),s=e.createTime?Ue(e.createTime):j.min(),o=new Oe({mapValue:{fields:e.fields}}),c=fe.newFoundDocument(r,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function xw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:M(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(U(f===void 0||typeof f=="string",58123),_e.fromBase64String(f||"")):(U(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),_e.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?P.UNKNOWN:$p(h.code);return new k(f,h.message||"")}(o);t=new Kp(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=bn(n,r.document.name),s=Ue(r.document.updateTime),o=r.document.createTime?Ue(r.document.createTime):j.min(),c=new Oe({mapValue:{fields:r.document.fields}}),u=fe.newFoundDocument(i,s,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Xs(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=bn(n,r.document),s=r.readTime?Ue(r.readTime):j.min(),o=fe.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Xs([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=bn(n,r.document),s=r.removedTargetIds||[];t=new Xs([],s,i,null)}else{if(!("filter"in e))return M(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new bw(i,s),c=r.targetId;t=new Gp(c,o)}}return t}function Eo(n,e){let t;if(e instanceof Or)t={update:Id(n,e.key,e.value)};else if(e instanceof rs)t={delete:vo(n,e.key)};else if(e instanceof Vt)t={update:Id(n,e.key,e.data),updateMask:jw(e.fieldMask)};else{if(!(e instanceof zp))return M(16599,{Rt:e.type});t={verify:vo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const c=o.transform;if(c instanceof Fi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof On)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof xn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ui)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw M(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Nw(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:M(27497)}(n,e.precondition)),t}function Sc(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Ae.updateTime(Ue(s.updateTime)):s.exists!==void 0?Ae.exists(s.exists):Ae.none()}(e.currentDocument):Ae.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let u=null;if("setToServerValue"in c)U(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),u=new Fi;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];u=new On(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];u=new xn(f)}else"increment"in c?u=new Ui(o,c.increment):M(16584,{proto:c});const h=he.fromServerFormat(c.fieldPath);return new _u(h,u)}(n,i)):[];if(e.update){e.update.name;const i=bn(n,e.update.name),s=new Oe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const h=u.fieldPaths||[];return new je(h.map(f=>he.fromServerFormat(f)))}(e.updateMask);return new Vt(i,s,o,t,r)}return new Or(i,s,t,r)}if(e.delete){const i=bn(n,e.delete);return new rs(i,t)}if(e.verify){const i=bn(n,e.verify);return new zp(i,t)}return M(1463,{proto:e})}function Mw(n,e){return n&&n.length>0?(U(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?Ue(i.updateTime):Ue(s);return o.isEqual(j.min())&&(o=Ue(s)),new Tw(o,i.transformResults||[])}(t,e))):[]}function Yp(n,e){return{documents:[Qp(n,e.path)]}}function Zp(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Qp(n,i);const s=function(h){if(h.length!==0)return ng(re.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:nr(g.field),direction:Fw(g.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=wc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:t,parent:i}}function eg(n){let e=Xp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){U(r===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const g=tg(m);return g instanceof re&&mu(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(g=>function(C){return new Li(rr(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(m){let g;return g=typeof m=="object"?m.value:m,Uo(g)?null:g}(t.limit));let u=null;t.startAt&&(u=function(m){const g=!!m.before,S=m.values||[];return new vr(S,g)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const g=!m.before,S=m.values||[];return new vr(S,g)}(t.endAt)),Pp(e,i,o,s,c,"F",u,h)}function Lw(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tg(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=rr(t.unaryFilter.field);return J.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=rr(t.unaryFilter.field);return J.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=rr(t.unaryFilter.field);return J.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=rr(t.unaryFilter.field);return J.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(t){return J.create(rr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return re.create(t.compositeFilter.filters.map(r=>tg(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(t.compositeFilter.op))}(n):M(30097,{filter:n})}function Fw(n){return Cw[n]}function Uw(n){return Dw[n]}function Bw(n){return Vw[n]}function nr(n){return{fieldPath:n.canonicalString()}}function rr(n){return he.fromServerFormat(n.fieldPath)}function ng(n){return n instanceof J?function(t){if(t.op==="=="){if(rd(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NAN"}};if(nd(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rd(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NOT_NAN"}};if(nd(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nr(t.field),op:Uw(t.op),value:t.value}}}(n):n instanceof re?function(t){const r=t.getFilters().map(i=>ng(i));return r.length===1?r[0]:{compositeFilter:{op:Bw(t.op),filters:r}}}(n):M(54877,{filter:n})}function jw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function rg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t,r,i,s=j.min(),o=j.min(),c=_e.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new vt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.gt=e}}function qw(n,e){let t;if(e.document)t=Ow(n.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=x.fromSegments(e.noDocument.path),i=Ln(e.noDocument.readTime);t=fe.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return M(56709);{const r=x.fromSegments(e.unknownDocument.path),i=Ln(e.unknownDocument.version);t=fe.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime(function(i){const s=new ne(i[0],i[1]);return j.fromTimestamp(s)}(e.readTime)),t}function vd(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:To(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:vo(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Tr(s,o.version.toTimestamp()),createTime:Tr(s,o.createTime.toTimestamp())}}(n.gt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Mn(e.version)};else{if(!e.isUnknownDocument())return M(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:Mn(e.version)}}return r}function To(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Mn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ln(n){const e=new ne(n.seconds,n.nanoseconds);return j.fromTimestamp(e)}function yn(n,e){const t=(e.baseMutations||[]).map(s=>Sc(n.gt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Sc(n.gt,s)),i=ne.fromMillis(e.localWriteTimeMs);return new yu(e.batchId,i,t,r)}function fi(n){const e=Ln(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ln(n.lastLimboFreeSnapshotVersion):j.min();let r;return r=function(s){return s.documents!==void 0}(n.query)?function(s){const o=s.documents.length;return U(o===1,1966,{count:o}),We(ts(Xp(s.documents[0])))}(n.query):function(s){return We(eg(s))}(n.query),new vt(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,_e.fromBase64String(n.resumeToken))}function sg(n,e){const t=Mn(e.snapshotVersion),r=Mn(e.lastLimboFreeSnapshotVersion);let i;i=_o(e.target)?Yp(n.gt,e.target):Zp(n.gt,e.target).Vt;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Nn(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function og(n){const e=eg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Io(e,e.limit,"L"):e}function qa(n,e){return new vu(e.largestBatchId,Sc(n.gt,e.overlayMutation))}function Ed(n,e){const t=e.path.lastSegment();return[n,xe(e.path.popLast()),t]}function Td(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:Mn(r.readTime),documentKey:xe(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{getBundleMetadata(e,t){return wd(e).get(t).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ln(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,t){return wd(e).put(function(i){return{bundleId:i.id,createTime:Mn(Ue(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Ad(e).get(t).next(r=>{if(r)return function(s){return{name:s.name,query:og(s.bundledQuery),readTime:Ln(s.readTime)}}(r)})}saveNamedQuery(e,t){return Ad(e).put(function(i){return{name:i.name,readTime:Mn(Ue(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function wd(n){return Te(n,Bo)}function Ad(n){return Te(n,jo)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const r=t.uid||"";return new Ho(e,r)}getOverlay(e,t){return ri(e).get(Ed(this.userId,t)).next(r=>r?qa(this.serializer,r):null)}getOverlays(e,t){const r=it();return w.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){const i=[];return r.forEach((s,o)=>{const c=new vu(t,o);i.push(this.wt(e,c))}),w.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach(o=>i.add(xe(o.getCollectionPath())));const s=[];return i.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ri(e).Y(pc,c))}),w.waitFor(s)}getOverlaysForCollection(e,t,r){const i=it(),s=xe(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ri(e).j(pc,o).next(c=>{for(const u of c){const h=qa(this.serializer,u);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,r,i){const s=it();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ri(e).X({index:op,range:c},(u,h,f)=>{const m=qa(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}wt(e,t){return ri(e).put(function(i,s,o){const[c,u,h]=Ed(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Eo(i.gt,o.mutation)}}(this.serializer,this.userId,t))}}function ri(n){return Te(n,qo)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{St(e){return Te(e,uu)}getSessionToken(e){return this.St(e).get("sessionToken").next(t=>{const r=t?.value;return r?_e.fromUint8Array(r):_e.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(ce(e.integerValue));else if("doubleValue"in e){const r=ce(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),Ci(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=bt(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(St(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?yp(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):$o(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):M(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const r=e.fields||{};this.Ct(t,55);for(const i of Object.keys(r))this.xt(i,t),this.Dt(r[i],t)}Lt(e,t){var r,i;const s=e.fields||{};this.Ct(t,53);const o=yr,c=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.Ct(t,15),t.Ft(ce(c)),this.xt(o,t),this.Dt(s[o],t)}qt(e,t){const r=e.values||[];this.Ct(t,50);for(const i of r)this.Dt(i,t)}Bt(e,t){this.Ct(t,37),x.fromName(e).path.forEach(r=>{this.Ct(t,60),this.$t(r,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}In.Ut=new In;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=255;function Gw(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function bd(n){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=Gw(255&r[s]);if(i+=o,o!==8)break}return i}(n);return Math.ceil(e/8)}class Kw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Wt(r.value),r=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.jt(r.value),r=t.next();this.Jt()}Ht(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Wt(r);else if(r<2048)this.Wt(960|r>>>6),this.Wt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|r>>>12),this.Wt(128|63&r>>>6),this.Wt(128|63&r);else{const i=t.codePointAt(0);this.Wt(240|i>>>18),this.Wt(128|63&i>>>12),this.Wt(128|63&i>>>6),this.Wt(128|63&i)}}this.Gt()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.jt(r);else if(r<2048)this.jt(960|r>>>6),this.jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|r>>>12),this.jt(128|63&r>>>6),this.jt(128|63&r);else{const i=t.codePointAt(0);this.jt(240|i>>>18),this.jt(128|63&i>>>12),this.jt(128|63&i>>>6),this.jt(128|63&i)}}this.Jt()}Zt(e){const t=this.Xt(e),r=bd(t);this.en(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}tn(e){const t=this.Xt(e),r=bd(t);this.en(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}nn(){this.rn(Xn),this.rn(255)}sn(){this._n(Xn),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===Xn?(this.rn(Xn),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===Xn?(this._n(Xn),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class Ww{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class Hw{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class ii{constructor(){this.un=new Kw,this.cn=new Ww(this.un),this.ln=new Hw(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,r,i){this.Pn=e,this.Tn=t,this.In=r,this.dn=i}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new vn(this.Pn,this.Tn,this.In,r)}An(e,t,r){return{indexId:this.Pn,uid:e,arrayValue:Js(this.In),directionalValue:Js(this.dn),orderedDocumentKey:Js(t),documentKey:r.path.toArray()}}Rn(e,t,r){const i=this.An(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Ft(n,e){let t=n.Pn-e.Pn;return t!==0?t:(t=Sd(n.In,e.In),t!==0?t:(t=Sd(n.dn,e.dn),t!==0?t:x.comparator(n.Tn,e.Tn)))}function Sd(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Js(n){return Jf()?function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r}(n):n}function Rd(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(n)}class Pd{constructor(e){this.Vn=new ie((t,r)=>he.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.fn.push(r)}}get gn(){return this.Vn.size>1}pn(e){if(U(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=dc(e);if(t!==void 0&&!this.yn(t))return!1;const r=pn(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.yn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!i.has(c.field.canonicalString())){const u=r[s];if(!this.wn(c,u)||!this.Sn(this.mn[o++],u))return!1}++s}for(;s<r.length;++s){const c=r[s];if(o>=this.mn.length||!this.Sn(this.mn[o++],c))return!1}return!0}bn(){if(this.gn)return null;let e=new ie(he.comparator);const t=[];for(const r of this.fn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new zs(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new zs(r.field,0))}for(const r of this.mn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new zs(r.field,r.dir==="asc"?0:1)));return new ho(ho.UNKNOWN_ID,this.collectionId,t,Pi.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(n){var e,t;if(U(n instanceof J||n instanceof re,20012),n instanceof J){if(n instanceof Rp){const i=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>J.create(n.field,"==",s)))||[];return re.create(i,"or")}return n}const r=n.filters.map(i=>ag(i));return re.create(r,n.op)}function Qw(n){if(n.getFilters().length===0)return[];const e=Cc(ag(n));return U(cg(e),7391),Rc(e)||Pc(e)?[e]:e.getFilters()}function Rc(n){return n instanceof J}function Pc(n){return n instanceof re&&mu(n)}function cg(n){return Rc(n)||Pc(n)||function(t){if(t instanceof re&&Ic(t)){for(const r of t.getFilters())if(!Rc(r)&&!Pc(r))return!1;return!0}return!1}(n)}function Cc(n){if(U(n instanceof J||n instanceof re,34018),n instanceof J)return n;if(n.filters.length===1)return Cc(n.filters[0]);const e=n.filters.map(r=>Cc(r));let t=re.create(e,n.op);return t=wo(t),cg(t)?t:(U(t instanceof re,64498),U(Er(t),40251),U(t.filters.length>1,57927),t.filters.reduce((r,i)=>wu(r,i)))}function wu(n,e){let t;return U(n instanceof J||n instanceof re,38388),U(e instanceof J||e instanceof re,25473),t=n instanceof J?e instanceof J?function(i,s){return re.create([i,s],"and")}(n,e):Cd(n,e):e instanceof J?Cd(e,n):function(i,s){if(U(i.filters.length>0&&s.filters.length>0,48005),Er(i)&&Er(s))return Ap(i,s.getFilters());const o=Ic(i)?i:s,c=Ic(i)?s:i,u=o.filters.map(h=>wu(h,c));return re.create(u,"or")}(n,e),wo(t)}function Cd(n,e){if(Er(e))return Ap(e,n.getFilters());{const t=e.filters.map(r=>wu(n,r));return re.create(t,"or")}}function wo(n){if(U(n instanceof J||n instanceof re,11850),n instanceof J)return n;const e=n.getFilters();if(e.length===1)return wo(e[0]);if(Tp(n))return n;const t=e.map(i=>wo(i)),r=[];return t.forEach(i=>{i instanceof J?r.push(i):i instanceof re&&(i.op===n.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:re.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.Dn=new Au}addToCollectionParentIndex(e,t){return this.Dn.add(t),w.resolve()}getCollectionParents(e,t){return w.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return w.resolve()}deleteFieldIndex(e,t){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,t){return w.resolve()}getDocumentsMatchingTarget(e,t){return w.resolve(null)}getIndexType(e,t){return w.resolve(0)}getFieldIndexes(e,t){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,t){return w.resolve(He.min())}getMinOffsetFromCollectionGroup(e,t){return w.resolve(He.min())}updateCollectionGroup(e,t,r){return w.resolve()}updateIndexEntries(e,t){return w.resolve()}}class Au{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ie(ee.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ie(ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="IndexedDbIndexManager",Os=new Uint8Array(0);class Jw{constructor(e,t){this.databaseId=t,this.vn=new Au,this.Cn=new Dt(r=>Nn(r),(r,i)=>es(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});const s={collectionId:r,parent:xe(i)};return Vd(e).put(s)}return w.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[Km(t),""],!1,!0);return Vd(e).j(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;r.push(rt(o.parent))}return r})}addFieldIndex(e,t){const r=si(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=Yn(e);return s.next(c=>{o.put(Td(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const r=si(e),i=Yn(e),s=Jn(e);return r.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=si(e),r=Jn(e),i=Yn(e);return t.Y().next(()=>r.Y()).next(()=>i.Y())}createTargetIndexes(e,t){return w.forEach(this.Fn(t),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Pd(r).bn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const r=Jn(e);let i=!0;const s=new Map;return w.forEach(this.Fn(t),o=>this.Mn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=W();const c=[];return w.forEach(s,(u,h)=>{D(Dd,`Using index ${function(F){return`id=${F.indexId}|cg=${F.collectionGroup}|f=${F.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(u)} to execute ${Nn(t)}`);const f=function(F,Q){const te=dc(Q);if(te===void 0)return null;for(const H of yo(F,te.fieldPath))switch(H.op){case"array-contains-any":return H.value.arrayValue.values||[];case"array-contains":return[H.value]}return null}(h,u),m=function(F,Q){const te=new Map;for(const H of pn(Q))for(const v of yo(F,H.fieldPath))switch(v.op){case"==":case"in":te.set(H.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return te.set(H.fieldPath.canonicalString(),v.value),Array.from(te.values())}return null}(h,u),g=function(F,Q){const te=[];let H=!0;for(const v of pn(Q)){const _=v.kind===0?cd(F,v.fieldPath,F.startAt):ud(F,v.fieldPath,F.startAt);te.push(_.value),H&&(H=_.inclusive)}return new vr(te,H)}(h,u),S=function(F,Q){const te=[];let H=!0;for(const v of pn(Q)){const _=v.kind===0?ud(F,v.fieldPath,F.endAt):cd(F,v.fieldPath,F.endAt);te.push(_.value),H&&(H=_.inclusive)}return new vr(te,H)}(h,u),C=this.xn(u,h,g),N=this.xn(u,h,S),V=this.On(u,h,m),$=this.Nn(u.indexId,f,C,g.inclusive,N,S.inclusive,V);return w.forEach($,B=>r.H(B,t.limit).next(F=>{F.forEach(Q=>{const te=x.fromSegments(Q.documentKey);o.has(te)||(o=o.add(te),c.push(te))})}))}).next(()=>c)}return w.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=Qw(re.create(e.filters,"and")).map(r=>Ec(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}Nn(e,t,r,i,s,o,c){const u=(t!=null?t.length:1)*Math.max(r.length,s.length),h=u/(t!=null?t.length:1),f=[];for(let m=0;m<u;++m){const g=t?this.Bn(t[m/h]):Os,S=this.Ln(e,g,r[m%h],i),C=this.kn(e,g,s[m%h],o),N=c.map(V=>this.Ln(e,g,V,!0));f.push(...this.createRange(S,C,N))}return f}Ln(e,t,r,i){const s=new vn(e,x.empty(),t,r);return i?s:s.En()}kn(e,t,r,i){const s=new vn(e,x.empty(),t,r);return i?s.En():s}Mn(e,t){const r=new Pd(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const c of s)r.pn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let r=2;const i=this.Fn(t);return w.forEach(i,s=>this.Mn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let h=new ie(he.comparator),f=!1;for(const m of u.filters)for(const g of m.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:h=h.add(g.field));for(const m of u.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&r===2?1:r)}qn(e,t){const r=new ii;for(const i of pn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.hn(i.kind);In.Ut.bt(s,o)}return r.an()}Bn(e){const t=new ii;return In.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const r=new ii;return In.Ut.bt(xi(this.databaseId,t),r.hn(function(s){const o=pn(s);return o.length===0?0:o[o.length-1].kind}(e))),r.an()}On(e,t,r){if(r===null)return[];let i=[];i.push(new ii);let s=0;for(const o of pn(e)){const c=r[s++];for(const u of i)if(this.$n(t,o.fieldPath)&&Mi(c))i=this.Un(i,o,c);else{const h=u.hn(o.kind);In.Ut.bt(c,h)}}return this.Kn(i)}xn(e,t,r){return this.On(e,t,r.position)}Kn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].an();return t}Un(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const c of i){const u=new ii;u.seed(c.an()),In.Ut.bt(o,u.hn(t.kind)),s.push(u)}return s}$n(e,t){return!!e.filters.find(r=>r instanceof J&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=si(e),i=Yn(e);return(t?r.j(mc,IDBKeyRange.bound(t,t)):r.j()).next(s=>{const o=[];return w.forEach(s,c=>i.get([c.indexId,this.uid]).next(u=>{o.push(function(f,m){const g=m?new Pi(m.sequenceNumber,new He(Ln(m.readTime),new x(rt(m.documentKey)),m.largestBatchId)):Pi.empty(),S=f.fields.map(([C,N])=>new zs(he.fromServerFormat(C),N));return new ho(f.indexId,f.collectionGroup,S,g)}(c,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:z(r.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const i=si(e),s=Yn(e);return this.Wn(e).next(o=>i.j(mc,IDBKeyRange.bound(t,t)).next(c=>w.forEach(c,u=>s.put(Td(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return w.forEach(t,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(r.set(i.collectionGroup,c),w.forEach(c,u=>this.Gn(e,i,u).next(h=>{const f=this.zn(s,u);return h.isEqual(f)?w.resolve():this.jn(e,s,u,h,f)}))))})}Jn(e,t,r,i){return Jn(e).put(i.An(this.uid,this.Qn(r,t.key),t.key))}Hn(e,t,r,i){return Jn(e).delete(i.Rn(this.uid,this.Qn(r,t.key),t.key))}Gn(e,t,r){const i=Jn(e);let s=new ie(Ft);return i.X({index:sp,range:IDBKeyRange.only([r.indexId,this.uid,Js(this.Qn(r,t))])},(o,c)=>{s=s.add(new vn(r.indexId,t,Rd(c.arrayValue),Rd(c.directionalValue)))}).next(()=>s)}zn(e,t){let r=new ie(Ft);const i=this.qn(t,e);if(i==null)return r;const s=dc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Mi(o))for(const c of o.arrayValue.values||[])r=r.add(new vn(t.indexId,e.key,this.Bn(c),i))}else r=r.add(new vn(t.indexId,e.key,Os,i));return r}jn(e,t,r,i,s){D(Dd,"Updating index entries for document '%s'",t.key);const o=[];return function(u,h,f,m,g){const S=u.getIterator(),C=h.getIterator();let N=Qn(S),V=Qn(C);for(;N||V;){let $=!1,B=!1;if(N&&V){const F=f(N,V);F<0?B=!0:F>0&&($=!0)}else N!=null?B=!0:$=!0;$?(m(V),V=Qn(C)):B?(g(N),N=Qn(S)):(N=Qn(S),V=Qn(C))}}(i,s,Ft,c=>{o.push(this.Jn(e,t,r,c))},c=>{o.push(this.Hn(e,t,r,c))}),w.waitFor(o)}Wn(e){let t=1;return Yn(e).X({index:ip,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,c)=>Ft(o,c)).filter((o,c,u)=>!c||Ft(o,u[c-1])!==0);const i=[];i.push(e);for(const o of r){const c=Ft(o,e),u=Ft(o,t);if(c===0)i[0]=e.En();else if(c>0&&u<0)i.push(o),i.push(o.En());else if(u>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Yn(i[o],i[o+1]))return[];const c=i[o].Rn(this.uid,Os,x.empty()),u=i[o+1].Rn(this.uid,Os,x.empty());s.push(IDBKeyRange.bound(c,u))}return s}Yn(e,t){return Ft(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(kd)}getMinOffset(e,t){return w.mapArray(this.Fn(t),r=>this.Mn(e,r).next(i=>i||M(44426))).next(kd)}}function Vd(n){return Te(n,ki)}function Jn(n){return Te(n,vi)}function si(n){return Te(n,cu)}function Yn(n){return Te(n,Ii)}function kd(n){U(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;su(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new He(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ug=41943040;class Ne{static withCacheSize(e){return new Ne(e,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(n,e,t){const r=n.store(Ye),i=n.store(mr),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const u=r.X({range:o},(f,m,g)=>(c++,g.delete()));s.push(u.next(()=>{U(c===1,47070,{batchId:t.batchId})}));const h=[];for(const f of t.mutations){const m=tp(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return w.waitFor(s).next(()=>h)}function Ao(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw M(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne.DEFAULT_COLLECTION_PERCENTILE=10,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ne.DEFAULT=new Ne(ug,Ne.DEFAULT_COLLECTION_PERCENTILE,Ne.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ne.DISABLED=new Ne(-1,0,0);class Qo{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Zn={}}static yt(e,t,r,i){U(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new Qo(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ut(e).X({index:Tn,range:r},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,i){const s=ir(e),o=Ut(e);return o.add({}).next(c=>{U(typeof c=="number",49019);const u=new yu(c,t,r,i),h=function(S,C,N){const V=N.baseMutations.map(B=>Eo(S.gt,B)),$=N.mutations.map(B=>Eo(S.gt,B));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:V,mutations:$}}(this.serializer,this.userId,u),f=[];let m=new ie((g,S)=>z(g.canonicalString(),S.canonicalString()));for(const g of i){const S=tp(this.userId,g.key.path,c);m=m.add(g.key.path.popLast()),f.push(o.put(h)),f.push(s.put(S,DT))}return m.forEach(g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Zn[c]=u.keys()}),w.waitFor(f).next(()=>u)})}lookupMutationBatch(e,t){return Ut(e).get(t).next(r=>r?(U(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),yn(this.serializer,r)):null)}Xn(e,t){return this.Zn[t]?w.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const i=r.keys();return this.Zn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Ut(e).X({index:Tn,range:i},(o,c,u)=>{c.userId===this.userId&&(U(c.batchId>=r,47524,{er:r}),s=yn(this.serializer,c)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=wn;return Ut(e).X({index:Tn,range:t,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,wn],[this.userId,Number.POSITIVE_INFINITY]);return Ut(e).j(Tn,t).next(r=>r.map(i=>yn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=$s(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return ir(e).X({range:i},(o,c,u)=>{const[h,f,m]=o,g=rt(f);if(h===this.userId&&t.path.isEqual(g))return Ut(e).get(m).next(S=>{if(!S)throw M(61480,{tr:o,batchId:m});U(S.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:S.userId,batchId:m}),s.push(yn(this.serializer,S))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ie(z);const i=[];return t.forEach(s=>{const o=$s(this.userId,s.path),c=IDBKeyRange.lowerBound(o),u=ir(e).X({range:c},(h,f,m)=>{const[g,S,C]=h,N=rt(S);g===this.userId&&s.path.isEqual(N)?r=r.add(C):m.done()});i.push(u)}),w.waitFor(i).next(()=>this.nr(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=$s(this.userId,r),o=IDBKeyRange.lowerBound(s);let c=new ie(z);return ir(e).X({range:o},(u,h,f)=>{const[m,g,S]=u,C=rt(g);m===this.userId&&r.isPrefixOf(C)?C.length===i&&(c=c.add(S)):f.done()}).next(()=>this.nr(e,c))}nr(e,t){const r=[],i=[];return t.forEach(s=>{i.push(Ut(e).get(s).next(o=>{if(o===null)throw M(35274,{batchId:s});U(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(yn(this.serializer,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,t){return lg(e.ce,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return w.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ir(e).X({range:r},(s,o,c)=>{if(s[0]===this.userId){const u=rt(s[1]);i.push(u)}else c.done()}).next(()=>{U(i.length===0,56720,{ir:i.map(s=>s.canonicalString())})})})}containsKey(e,t){return hg(e,this.userId,t)}sr(e){return dg(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:wn,lastStreamToken:""})}}function hg(n,e,t){const r=$s(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ir(n).X({range:s,Z:!0},(c,u,h)=>{const[f,m,g]=c;f===e&&m===i&&(o=!0),h.done()}).next(()=>o)}function Ut(n){return Te(n,Ye)}function ir(n){return Te(n,mr)}function dg(n){return Te(n,Di)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Fn(0)}static ur(){return new Fn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{const r=new Fn(t.highestTargetId);return t.highestTargetId=r.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(t=>j.fromTimestamp(new ne(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.cr(e).next(i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.lr(e,i)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(r=>(r.targetCount+=1,this.Pr(t,r),this.lr(e,r))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Zn(e).delete(t.targetId)).next(()=>this.cr(e)).next(r=>(U(r.targetCount>0,8065),r.targetCount-=1,this.lr(e,r)))}removeTargets(e,t,r){let i=0;const s=[];return Zn(e).X((o,c)=>{const u=fi(c);u.sequenceNumber<=t&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Zn(e).X((r,i)=>{const s=fi(i);t(s)})}cr(e){return Od(e).get(po).next(t=>(U(t!==null,2888),t))}lr(e,t){return Od(e).put(po,t)}hr(e,t){return Zn(e).put(sg(this.serializer,t))}Pr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.cr(e).next(t=>t.targetCount)}getTargetData(e,t){const r=Nn(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Zn(e).X({range:i,index:rp},(o,c,u)=>{const h=fi(c);es(t,h.target)&&(s=h,u.done())}).next(()=>s)}addMatchingKeys(e,t,r){const i=[],s=$t(e);return t.forEach(o=>{const c=xe(o.path);i.push(s.put({targetId:r,path:c})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,t,r){const i=$t(e);return w.forEach(t,s=>{const o=xe(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,t){const r=$t(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=$t(e);let s=W();return i.X({range:r,Z:!0},(o,c,u)=>{const h=rt(o[1]),f=new x(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const r=xe(t.path),i=IDBKeyRange.bound([r],[Km(r)],!1,!0);let s=0;return $t(e).X({index:au,Z:!0,range:i},([o,c],u,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}Et(e,t){return Zn(e).get(t).next(r=>r?fi(r):null)}}function Zn(n){return Te(n,pr)}function Od(n){return Te(n,An)}function $t(n){return Te(n,gr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="LruGarbageCollector",fg=1048576;function Md([n,e],[t,r]){const i=z(n,t);return i===0?z(e,r):i}class Zw{constructor(e){this.Tr=e,this.buffer=new ie(Md),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Md(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class mg{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){D(xd,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){on(t)?D(xd,"Ignoring IndexedDB error during garbage collection: ",t):await sn(t)}await this.Rr(3e5)})}}class eA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return w.resolve(Be.ue);const r=new Zw(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Nd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nd):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,o,c,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),er()<=X.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function pg(n,e){return new eA(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,t){this.db=e,this.garbageCollector=pg(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(r,i)=>t(i))}addReference(e,t,r){return xs(e,r)}removeReference(e,t,r){return xs(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return xs(e,t)}Sr(e,t){return function(i,s){let o=!1;return dg(i).ee(c=>hg(i,c,s).next(u=>(u&&(o=!0),w.resolve(!u)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.wr(e,(o,c)=>{if(c<=t){const u=this.Sr(e,o).next(h=>{if(!h)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,j.min()),$t(e).delete(function(m){return[0,xe(m.path)]}(o))))});i.push(u)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return xs(e,t)}wr(e,t){const r=$t(e);let i,s=Be.ue;return r.X({index:au},([o,c],{path:u,sequenceNumber:h})=>{o===0?(s!==Be.ue&&t(new x(rt(i)),s),s=h,i=u):s=Be.ue}).next(()=>{s!==Be.ue&&t(new x(rt(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function xs(n,e){return $t(n).put(function(r,i){return{targetId:0,path:xe(r.path),sequenceNumber:i}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.changes=new Dt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?w.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return fn(e).put(r)}removeEntry(e,t,r){return fn(e).delete(function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],To(o),c[c.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.br(e,r)))}getEntry(e,t){let r=fe.newInvalidDocument(t);return fn(e).X({index:Gs,range:IDBKeyRange.only(oi(t))},(i,s)=>{r=this.Dr(t,s)}).next(()=>r)}vr(e,t){let r={size:0,document:fe.newInvalidDocument(t)};return fn(e).X({index:Gs,range:IDBKeyRange.only(oi(t))},(i,s)=>{r={document:this.Dr(t,s),size:Ao(s)}}).next(()=>r)}getEntries(e,t){let r=Ke();return this.Cr(e,t,(i,s)=>{const o=this.Dr(i,s);r=r.insert(i,o)}).next(()=>r)}Fr(e,t){let r=Ke(),i=new oe(x.comparator);return this.Cr(e,t,(s,o)=>{const c=this.Dr(s,o);r=r.insert(s,c),i=i.insert(s,Ao(o))}).next(()=>({documents:r,Mr:i}))}Cr(e,t,r){if(t.isEmpty())return w.resolve();let i=new ie(Ud);t.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(oi(i.first()),oi(i.last())),o=i.getIterator();let c=o.getNext();return fn(e).X({index:Gs,range:s},(u,h,f)=>{const m=x.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Ud(c,m)<0;)r(c,null),c=o.getNext();c&&c.isEqual(m)&&(r(c,h),c=o.hasNext()?o.getNext():null),c?f.G(oi(c)):f.done()}).next(()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),To(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return fn(e).j(IDBKeyRange.bound(c,u,!0)).next(h=>{s?.incrementDocumentReadCount(h.length);let f=Ke();for(const m of h){const g=this.Dr(x.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);g.isFoundDocument()&&(ns(t,g)||i.has(g.key))&&(f=f.insert(g.key,g))}return f})}getAllFromCollectionGroup(e,t,r,i){let s=Ke();const o=Fd(t,r),c=Fd(t,He.max());return fn(e).X({index:np,range:IDBKeyRange.bound(o,c,!0)},(u,h,f)=>{const m=this.Dr(x.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new rA(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Ld(e).get(fc).next(t=>(U(!!t,20021),t))}br(e,t){return Ld(e).put(fc,t)}Dr(e,t){if(t){const r=qw(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(j.min())))return r}return fe.newInvalidDocument(e)}}function _g(n){return new nA(n)}class rA extends gg{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new Dt(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const t=[];let r=0,i=new ie((s,o)=>z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const c=this.Nr.get(s);if(t.push(this.Or.removeEntry(e,s,c.readTime)),o.isValidDocument()){const u=vd(this.Or.serializer,o);i=i.add(s.path.popLast());const h=Ao(u);r+=h-c.size,t.push(this.Or.addEntry(e,s,u))}else if(r-=c.size,this.trackRemovals){const u=vd(this.Or.serializer,o.convertToNoDocument(j.min()));t.push(this.Or.addEntry(e,s,u))}}),i.forEach(s=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.Or.updateMetadata(e,r)),w.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(r=>(this.Nr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:r,Mr:i})=>(i.forEach((s,o)=>{this.Nr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Ld(n){return Te(n,Vi)}function fn(n){return Te(n,mo)}function oi(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Fd(n,e){const t=e.documentKey.path.toArray();return[n,To(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Ud(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=z(t[s],r[s]),i)return i;return i=z(t.length,r.length),i||(i=z(t[t.length-2],r[r.length-2]),i||z(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ai(r.mutation,i,je.empty(),ne.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,t,r=W()){const i=it();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=hi();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=it();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,W()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=Ke();const o=wi(),c=function(){return wi()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Vt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ai(f.mutation,h,f.mutation.getFieldMask(),ne.now())):o.set(h.key,je.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new iA(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const r=wi();let i=new oe((o,c)=>o-c),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||je.empty();f=c.applyToLocalView(h,f),r.set(u,f);const m=(i.get(c.batchId)||W()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=xp();f.forEach(g=>{if(!s.has(g)){const S=jp(t.get(g),r.get(g));S!==null&&m.set(g,S),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return x.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Cp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):w.resolve(it());let c=fr,u=s;return o.next(h=>w.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?w.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,W())).next(f=>({batchId:c,changes:Op(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next(r=>{let i=hi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=hi();return this.indexManager.getCollectionParents(e,s).next(c=>w.forEach(c,u=>{const h=function(m,g){return new Nr(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,fe.newInvalidDocument(f)))});let c=hi();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Ai(f.mutation,h,je.empty(),ne.now()),ns(t,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return w.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ue(i.createTime)}}(t)),w.resolve()}getNamedQuery(e,t){return w.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:og(i.bundledQuery),readTime:Ue(i.readTime)}}(t)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.overlays=new oe(x.comparator),this.kr=new Map}getOverlay(e,t){return w.resolve(this.overlays.get(t))}getOverlays(e,t){const r=it();return w.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),w.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),w.resolve()}getOverlaysForCollection(e,t,r){const i=it(),s=t.length+1,o=new x(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return w.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new oe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=it(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=it(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return w.resolve(c)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vu(t,r));let s=this.kr.get(t);s===void 0&&(s=W(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return w.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this.qr=new ie(we.Qr),this.$r=new ie(we.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new we(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new we(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new x(new ee([])),r=new we(t,e),i=new we(t,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new x(new ee([])),r=new we(t,e),i=new we(t,e+1);let s=W();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new we(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class we{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return x.comparator(e.key,t.key)||z(e.Hr,t.Hr)}static Ur(e,t){return z(e.Hr,t.Hr)||x.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ie(we.Qr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yu(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.Yr=this.Yr.add(new we(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,t){return w.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?wn:this.er-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new we(t,0),i=new we(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const c=this.Zr(o.Hr);s.push(c)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ie(z);return t.forEach(i=>{const s=new we(i,0),o=new we(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],c=>{r=r.add(c.Hr)})}),w.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;x.isDocumentKey(s)||(s=s.child(""));const o=new we(new x(s),0);let c=new ie(z);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.Hr)),!0)},o),w.resolve(this.ei(c))}ei(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){U(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return w.forEach(t.mutations,i=>{const s=new we(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new we(t,0),i=this.Yr.firstAfterOrEqual(r);return w.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.ni=e,this.docs=function(){return new oe(x.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return w.resolve(r?r.document.mutableCopy():fe.newInvalidDocument(t))}getEntries(e,t){let r=Ke();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():fe.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ke();const o=t.path,c=new x(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||su(Xm(f),r)<=0||(i.has(f.key)||ns(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,t,r,i){M(9500)}ri(e,t){return w.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new lA(this)}getSize(e){return w.resolve(this.size)}}class lA extends gg{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),w.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.persistence=e,this.ii=new Dt(t=>Nn(t),es),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.si=0,this.oi=new bu,this.targetCount=0,this._i=Fn.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),w.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Fn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,w.resolve()}updateTargetData(e,t){return this.hr(t),w.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return w.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),w.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),w.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return w.resolve(r)}containsKey(e,t){return w.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t){this.ai={},this.overlays={},this.ui=new Be(0),this.ci=!1,this.ci=!0,this.li=new aA,this.referenceDelegate=e(this),this.hi=new hA(this),this.indexManager=new Xw,this.remoteDocumentCache=function(i){return new uA(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new ig(t),this.Ti=new sA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new cA(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const i=new dA(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return w.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class dA extends Ym{constructor(e){super(),this.currentSequenceNumber=e}}class Xo{constructor(e){this.persistence=e,this.Ai=new bu,this.Ri=null}static Vi(e){return new Xo(e)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),w.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),w.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.mi,r=>{const i=x.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,j.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return w.or([()=>w.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class bo{constructor(e,t){this.persistence=e,this.gi=new Dt(r=>xe(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=pg(this,t)}static Vi(e,t){return new bo(e,t)}Ii(){}di(e){return w.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return w.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?w.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,t).next(c=>{c||(r++,s.removeEntry(o,j.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),w.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),w.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),w.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),w.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ws(e.data.value)),t}Sr(e,t,r){return w.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return w.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e){this.serializer=e}q(e,t,r,i){const s=new Fo("createOrUpgrade",t);r<1&&i>=1&&(function(u){u.createObjectStore(Zi)}(e),function(u){u.createObjectStore(Di,{keyPath:CT}),u.createObjectStore(Ye,{keyPath:Xh,autoIncrement:!0}).createIndex(Tn,Jh,{unique:!0}),u.createObjectStore(mr)}(e),Bd(e),function(u){u.createObjectStore(gn)}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore(gr),u.deleteObjectStore(pr),u.deleteObjectStore(An)}(e),Bd(e)),o=o.next(()=>function(u){const h=u.store(An),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:j.min().toTimestamp(),targetCount:0};return h.put(po,f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,h){return h.store(Ye).j().next(m=>{u.deleteObjectStore(Ye),u.createObjectStore(Ye,{keyPath:Xh,autoIncrement:!0}).createIndex(Tn,Jh,{unique:!0});const g=h.store(Ye),S=m.map(C=>g.put(C));return w.waitFor(S)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore(_r,{keyPath:FT})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.pi(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore(Vi)}(e),this.yi(s)))),r<7&&i>=7&&(o=o.next(()=>this.wi(s))),r<8&&i>=8&&(o=o.next(()=>this.Si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.bi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore(Bo,{keyPath:UT})})(e),function(u){u.createObjectStore(jo,{keyPath:BT})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const h=u.createObjectStore(qo,{keyPath:WT});h.createIndex(pc,HT,{unique:!1}),h.createIndex(op,QT,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const h=u.createObjectStore(mo,{keyPath:VT});h.createIndex(Gs,kT),h.createIndex(np,NT)}(e)).next(()=>this.Di(e,s)).next(()=>e.deleteObjectStore(gn))),r<14&&i>=14&&(o=o.next(()=>this.Ci(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore(cu,{keyPath:jT,autoIncrement:!0}).createIndex(mc,qT,{unique:!1}),u.createObjectStore(Ii,{keyPath:zT}).createIndex(ip,$T,{unique:!1}),u.createObjectStore(vi,{keyPath:GT}).createIndex(sp,KT,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{t.objectStore(Ii).clear()}).next(()=>{t.objectStore(vi).clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore(uu,{keyPath:XT})})(e)})),r<18&&i>=18&&Jf()&&(o=o.next(()=>{t.objectStore(Ii).clear()}).next(()=>{t.objectStore(vi).clear()})),o}yi(e){let t=0;return e.store(gn).X((r,i)=>{t+=Ao(i)}).next(()=>{const r={byteSize:t};return e.store(Vi).put(fc,r)})}pi(e){const t=e.store(Di),r=e.store(Ye);return t.j().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,wn],[s.userId,s.lastAcknowledgedBatchId]);return r.j(Tn,o).next(c=>w.forEach(c,u=>{U(u.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const h=yn(this.serializer,u);return lg(e,s.userId,h).next(()=>{})}))}))}wi(e){const t=e.store(gr),r=e.store(gn);return e.store(An).get(po).next(i=>{const s=[];return r.X((o,c)=>{const u=new ee(o),h=function(m){return[0,xe(m)]}(u);s.push(t.get(h).next(f=>f?w.resolve():(m=>t.put({targetId:0,path:xe(m),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>w.waitFor(s))})}Si(e,t){e.createObjectStore(ki,{keyPath:LT});const r=t.store(ki),i=new Au,s=o=>{if(i.add(o)){const c=o.lastSegment(),u=o.popLast();return r.put({collectionId:c,parent:xe(u)})}};return t.store(gn).X({Z:!0},(o,c)=>{const u=new ee(o);return s(u.popLast())}).next(()=>t.store(mr).X({Z:!0},([o,c,u],h)=>{const f=rt(c);return s(f.popLast())}))}bi(e){const t=e.store(pr);return t.X((r,i)=>{const s=fi(i),o=sg(this.serializer,s);return t.put(o)})}Di(e,t){const r=t.store(gn),i=[];return r.X((s,o)=>{const c=t.store(mo),u=function(m){return m.document?new x(ee.fromString(m.document.name).popFirst(5)):m.noDocument?x.fromSegments(m.noDocument.path):m.unknownDocument?x.fromSegments(m.unknownDocument.path):M(36783)}(o).path.toArray(),h={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>w.waitFor(i))}Ci(e,t){const r=t.store(Ye),i=_g(this.serializer),s=new Su(Xo.Vi,this.serializer.gt);return r.j().next(o=>{const c=new Map;return o.forEach(u=>{var h;let f=(h=c.get(u.userId))!==null&&h!==void 0?h:W();yn(this.serializer,u).keys().forEach(m=>f=f.add(m)),c.set(u.userId,f)}),w.forEach(c,(u,h)=>{const f=new ke(h),m=Ho.yt(this.serializer,f),g=s.getIndexManager(f),S=Qo.yt(f,this.serializer,g,s.referenceDelegate);return new yg(i,S,m,g).recalculateAndSaveOverlaysForDocumentKeys(new gc(t,Be.ue),u).next()})})}}function Bd(n){n.createObjectStore(gr,{keyPath:xT}).createIndex(au,MT,{unique:!0}),n.createObjectStore(pr,{keyPath:"targetId"}).createIndex(rp,OT,{unique:!0}),n.createObjectStore(An)}const Bt="IndexedDbPersistence",za=18e5,$a=5e3,Ga="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",mA="main";class Ru{constructor(e,t,r,i,s,o,c,u,h,f,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Fi=s,this.window=o,this.document=c,this.Mi=h,this.xi=f,this.Oi=m,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=g=>Promise.resolve(),!Ru.C())throw new k(P.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new tA(this,i),this.Qi=t+mA,this.serializer=new ig(u),this.$i=new Xt(this.Qi,this.Oi,new fA(this.serializer)),this.li=new $w,this.hi=new Yw(this.referenceDelegate,this.serializer),this.remoteDocumentCache=_g(this.serializer),this.Ti=new zw,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,f===!1&&ge(Bt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(P.FAILED_PRECONDITION,Ga);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new Be(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ms(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(on(e))return D(Bt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return D(Bt,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return ai(e).get(Hn).next(t=>w.resolve(this.Xi(t)))}es(e){return Ms(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,za)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=Te(t,_r);return r.j().next(i=>{const s=this.rs(i,za),o=i.filter(c=>s.indexOf(c)===-1);return w.forEach(o,c=>r.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?w.resolve(!0):ai(e).get(Hn).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,$a)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new k(P.FAILED_PRECONDITION,Ga);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ms(e).j().next(r=>this.rs(r,$a).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&D(Bt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[Zi,_r],e=>{const t=new gc(e,Be.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(r=>this.ns(r.updateTimeMs,t)&&!this._s(r.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>Ms(e).j().next(t=>this.rs(t,za).map(r=>r.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return Qo.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Jw(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return Ho.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,r){D(Bt,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(u){return u===18?ZT:u===17?lp:u===16?YT:u===15?lu:u===14?up:u===13?cp:u===12?JT:u===11?ap:void M(60245)}(this.Oi);let o;return this.$i.runTransaction(e,i,s,c=>(o=new gc(c,this.ui?this.ui.next():Be.ue),t==="readwrite-primary"?this.Ji(o).next(u=>!!u||this.Hi(o)).next(u=>{if(!u)throw ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new k(P.FAILED_PRECONDITION,Jm);return r(o)}).next(u=>this.Zi(o).next(()=>u)):this.Ts(o).next(()=>r(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ts(e){return ai(e).get(Hn).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,$a)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new k(P.FAILED_PRECONDITION,Ga)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ai(e).put(Hn,t)}static C(){return Xt.C()}Yi(e){const t=ai(e);return t.get(Hn).next(r=>this.Xi(r)?(D(Bt,"Releasing primary lease."),t.delete(Hn)):w.resolve())}ns(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(ge(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;Xf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const r=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return D(Bt,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ge(Bt,"Failed to get zombied client id.",r),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){ge("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ai(n){return Te(n,Zi)}function Ms(n){return Te(n,_r)}function Ig(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=W(),i=W();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Pu(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Xf()?8:Zm(Ee())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new pA;return this.ws(e,t,o).next(c=>{if(s.result=c,this.Rs)return this.Ss(e,t,o,c.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(er()<=X.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",tr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),w.resolve()):(er()<=X.DEBUG&&D("QueryEngine","Query:",tr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(er()<=X.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",tr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,We(t))):w.resolve())}ps(e,t){if(ld(t))return w.resolve(null);let r=We(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Io(t,null,"F"),r=We(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.gs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(t,c);return this.Ds(t,h,o,u.readTime)?this.ps(e,Io(t,null,"F")):this.vs(e,h,t,u)}))})))}ys(e,t,r,i){return ld(t)||i.isEqual(j.min())?w.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(t,s);return this.Ds(t,o,r,i)?w.resolve(null):(er()<=X.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),tr(t)),this.vs(e,o,t,Qm(i,fr)).next(c=>c))})}bs(e,t){let r=new ie(kp(e));return t.forEach((i,s)=>{ns(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return er()<=X.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",tr(t)),this.gs.getDocumentsMatchingQuery(e,t,He.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="LocalStore",gA=3e8;class _A{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new oe(z),this.Ms=new Dt(s=>Nn(s),es),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yg(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Eg(n,e,t,r){return new _A(n,e,t,r)}async function Tg(n,e){const t=L(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let u=W();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:c}))})})}function yA(n,e){const t=L(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,u,h,f){const m=h.batch,g=m.keys();let S=w.resolve();return g.forEach(C=>{S=S.next(()=>f.getEntry(u,C)).next(N=>{const V=h.docVersions.get(C);U(V!==null,48541),N.version.compareTo(V)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=W();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function wg(n){const e=L(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function IA(n,e){const t=L(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const c=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;c.push(t.hi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.hi.addMatchingKeys(s,f.addedDocuments,m)));let S=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?S=S.withResumeToken(_e.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(m,S),function(N,V,$){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=gA?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,S,f)&&c.push(t.hi.updateTargetData(s,S))});let u=Ke(),h=W();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(vA(s,o,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!r.isEqual(j.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next(m=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return w.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.Fs=i,s))}function vA(n,e,t){let r=W(),i=W();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ke();return t.forEach((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(j.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):D(Cu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function EA(n,e){const t=L(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=wn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function So(n,e){const t=L(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):t.hi.allocateTargetId(r).next(o=>(i=new vt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function wr(n,e,t){const r=L(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!on(o))throw o;D(Cu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Dc(n,e,t){const r=L(n);let i=j.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=L(u),g=m.Ms.get(f);return g!==void 0?w.resolve(m.Fs.get(g)):m.hi.getTargetData(h,f)}(r,o,We(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:j.min(),t?s:W())).next(c=>(Sg(r,Vp(e),c),{documents:c,qs:s})))}function Ag(n,e){const t=L(n),r=L(t.hi),i=t.Fs.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>r.Et(s,e).next(o=>o?o.target:null))}function bg(n,e){const t=L(n),r=t.xs.get(e)||j.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.Os.getAllFromCollectionGroup(i,e,Qm(r,fr),Number.MAX_SAFE_INTEGER)).then(i=>(Sg(t,e,i),i))}function Sg(n,e,t){let r=n.xs.get(e)||j.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="firestore_clients";function jd(n,e){return`${Rg}_${n}_${e}`}const Pg="firestore_mutations";function qd(n,e,t){let r=`${Pg}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const Cg="firestore_targets";function Ka(n,e){return`${Cg}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="SharedClientState";class Ro{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Ks(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new k(i.error.code,i.error.message))),o?new Ro(e,t,i.state,s):(ge(nt,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class bi{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ks(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new k(r.error.code,r.error.message))),s?new bi(e,r.state,i):(ge(nt,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Po{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=pu();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=ep(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Po(e,s):(ge(nt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Du{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Du(t.clientId,t.onlineState):(ge(nt,`Failed to parse online state: ${e}`),null)}}class Vc{constructor(){this.activeTargetIds=pu()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Wa{constructor(e,t,r,i,s){this.window=e,this.Fi=t,this.persistenceKey=r,this.js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new oe(z),this.started=!1,this.Zs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=jd(this.persistenceKey,this.js),this.eo=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new Vc),this.no=new RegExp(`^${Rg}_${o}_([^_]*)$`),this.ro=new RegExp(`^${Pg}_${o}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${Cg}_${o}_(\\d+)$`),this.so=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.oo=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ps();for(const r of e){if(r===this.js)continue;const i=this.getItem(jd(this.persistenceKey,r));if(i){const s=Po.Ks(r,i);s&&(this.Ys=this.Ys.insert(s.clientId,s))}}this._o();const t=this.storage.getItem(this.so);if(t){const r=this.ao(t);r&&this.uo(r)}for(const r of this.Zs)this.Hs(r);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,r){this.lo(e,t,r),this.ho(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Ka(this.persistenceKey,e));if(i){const s=bi.Ks(e,i);s&&(r=s.state)}}return t&&this.Po.Gs(e),this._o(),r}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ka(this.persistenceKey,e))}updateQueryState(e,t,r){this.To(e,t,r)}handleUserChange(e,t,r){t.forEach(i=>{this.ho(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return D(nt,"READ",e,t),t}setItem(e,t){D(nt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){D(nt,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const t=e;if(t.storageArea===this.storage){if(D(nt,"EVENT",t.key,t.newValue),t.key===this.Xs)return void ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.no.test(t.key)){if(t.newValue==null){const r=this.Ao(t.key);return this.Ro(r,null)}{const r=this.Vo(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const r=this.mo(t.key,t.newValue);if(r)return this.fo(r)}}else if(this.io.test(t.key)){if(t.newValue!==null){const r=this.po(t.key,t.newValue);if(r)return this.yo(r)}}else if(t.key===this.so){if(t.newValue!==null){const r=this.ao(t.newValue);if(r)return this.uo(r)}}else if(t.key===this.eo){const r=function(s){let o=Be.ue;if(s!=null)try{const c=JSON.parse(s);U(typeof c=="number",30636,{wo:s}),o=c}catch(c){ge(nt,"Failed to read sequence number from WebStorage",c)}return o}(t.newValue);r!==Be.ue&&this.sequenceNumberHandler(r)}else if(t.key===this.oo){const r=this.So(t.newValue);await Promise.all(r.map(i=>this.syncEngine.bo(i)))}}}else this.Zs.push(t)})}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,r){const i=new Ro(this.currentUser,e,t,r),s=qd(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ws())}ho(e){const t=qd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){const t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,r){const i=Ka(this.persistenceKey,e),s=new bi(e,t,r);this.setItem(i,s.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){const t=this.no.exec(e);return t?t[1]:null}Vo(e,t){const r=this.Ao(e);return Po.Ks(r,t)}mo(e,t){const r=this.ro.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Ro.Ks(new ke(s),i,t)}po(e,t){const r=this.io.exec(e),i=Number(r[1]);return bi.Ks(i,t)}ao(e){return Du.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);D(nt,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){const r=t?this.Ys.insert(e,t):this.Ys.remove(e),i=this.co(this.Ys),s=this.co(r),o=[],c=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||c.push(u)}),this.syncEngine.Co(o,c).then(()=>{this.Ys=r})}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=pu();return e.forEach((r,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class Dg{constructor(){this.Fo=new Vc,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Vc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="ConnectivityMonitor";class $d{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){D(zd,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){D(zd,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls=null;function kc(){return Ls===null?Ls=function(){return 268435456+Math.round(2147483648*Math.random())}():Ls++,"0x"+Ls.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="RestConnection",wA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===go?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=kc(),c=this.Go(e,t.toUriEncodedString());D(Ha,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(c),f=Cr(h);return this.jo(e,c,u,r,f).then(m=>(D(Ha,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Zt(Ha,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m})}Jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){const r=wA[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="WebChannelConnection";class SA extends AA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const o=kc();return new Promise((c,u)=>{const h=new Um;h.setWithCredentials(!0),h.listenOnce(Bm.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case qs.NO_ERROR:const m=h.getResponseJson();D(Ve,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case qs.TIMEOUT:D(Ve,`RPC '${e}' ${o} timed out`),u(new k(P.DEADLINE_EXCEEDED,"Request time out"));break;case qs.HTTP_ERROR:const g=h.getStatus();if(D(Ve,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S?.error;if(C&&C.status&&C.message){const N=function($){const B=$.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN}(C.status);u(new k(N,C.message))}else u(new k(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new k(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{D(Ve,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);D(Ve,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,r,15)})}P_(e,t,r){const i=kc(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zm(),c=qm(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");D(Ve,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);this.T_(m);let g=!1,S=!1;const C=new bA({Ho:V=>{S?D(Ve,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(g||(D(Ve,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),D(Ve,`RPC '${e}' stream ${i} sending:`,V),m.send(V))},Yo:()=>m.close()}),N=(V,$,B)=>{V.listen($,F=>{try{B(F)}catch(Q){setTimeout(()=>{throw Q},0)}})};return N(m,li.EventType.OPEN,()=>{S||(D(Ve,`RPC '${e}' stream ${i} transport opened.`),C.s_())}),N(m,li.EventType.CLOSE,()=>{S||(S=!0,D(Ve,`RPC '${e}' stream ${i} transport closed`),C.__(),this.I_(m))}),N(m,li.EventType.ERROR,V=>{S||(S=!0,Zt(Ve,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),C.__(new k(P.UNAVAILABLE,"The operation could not be completed")))}),N(m,li.EventType.MESSAGE,V=>{var $;if(!S){const B=V.data[0];U(!!B,16349);const F=B,Q=F?.error||(($=F[0])===null||$===void 0?void 0:$.error);if(Q){D(Ve,`RPC '${e}' stream ${i} received error:`,Q);const te=Q.status;let H=function(I){const E=ye[I];if(E!==void 0)return $p(E)}(te),v=Q.message;H===void 0&&(H=P.INTERNAL,v="Unknown error status: "+te+" with message "+Q.message),S=!0,C.__(new k(H,v)),m.close()}else D(Ve,`RPC '${e}' stream ${i} received:`,B),C.a_(B)}}),N(c,jm.STAT_EVENT,V=>{V.stat===lc.PROXY?D(Ve,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===lc.NOPROXY&&D(Ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){return typeof window<"u"?window:null}function Ys(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(n){return new kw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="PersistentStream";class Ng{constructor(e,t,r,i,s,o,c,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new kg(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(ge(t.toString()),ge("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{const i=new k(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return D(Gd,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(D(Gd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class RA extends Ng{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=xw(this.serializer,e),r=function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?Ue(o.readTime):j.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=bc(this.serializer),t.addTarget=function(s,o){let c;const u=o.target;if(c=_o(u)?{documents:Yp(s,u)}:{query:Zp(s,u).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Wp(s,o.resumeToken);const h=wc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(j.min())>0){c.readTime=Tr(s,o.snapshotVersion.toTimestamp());const h=wc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Lw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=bc(this.serializer),t.removeTarget=e,this.k_(t)}}class PA extends Ng{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return U(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,U(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){U(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Mw(e.writeResults,e.commitTime),r=Ue(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=bc(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Eo(this.serializer,r))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{}class DA extends CA{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Ac(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new k(P.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Jo(e,Ac(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(P.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class VA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ge(t),this._a=!1):D("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="RemoteStore";class kA{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{qn(this)&&(D(Un,"Restarting streams for network reachability change."),await async function(u){const h=L(u);h.Ia.add(4),await os(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Yo(h)}(this))})}),this.Aa=new VA(r,i)}}async function Yo(n){if(qn(n))for(const e of n.da)await e(!0)}async function os(n){for(const e of n.da)await e(!1)}function Zo(n,e){const t=L(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Nu(t)?ku(t):Mr(t).x_()&&Vu(t,e))}function Ar(n,e){const t=L(n),r=Mr(t);t.Ta.delete(e),r.x_()&&Og(t,e),t.Ta.size===0&&(r.x_()?r.B_():qn(t)&&t.Aa.set("Unknown"))}function Vu(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Mr(n).H_(e)}function Og(n,e){n.Ra.$e(e),Mr(n).Y_(e)}function ku(n){n.Ra=new Pw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Mr(n).start(),n.Aa.aa()}function Nu(n){return qn(n)&&!Mr(n).M_()&&n.Ta.size>0}function qn(n){return L(n).Ia.size===0}function xg(n){n.Ra=void 0}async function NA(n){n.Aa.set("Online")}async function OA(n){n.Ta.forEach((e,t)=>{Vu(n,e)})}async function xA(n,e){xg(n),Nu(n)?(n.Aa.la(e),ku(n)):n.Aa.set("Unknown")}async function MA(n,e,t){if(n.Aa.set("Online"),e instanceof Kp&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ta.delete(c),i.Ra.removeTarget(c))}(n,e)}catch(r){D(Un,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Co(n,r)}else if(e instanceof Xs?n.Ra.Ye(e):e instanceof Gp?n.Ra.it(e):n.Ra.et(e),!t.isEqual(j.min()))try{const r=await wg(n.localStore);t.compareTo(r)>=0&&await function(s,o){const c=s.Ra.Pt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(_e.EMPTY_BYTE_STRING,f.snapshotVersion)),Og(s,u);const m=new vt(f.target,u,h,f.sequenceNumber);Vu(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){D(Un,"Failed to raise snapshot:",r),await Co(n,r)}}async function Co(n,e,t){if(!on(e))throw e;n.Ia.add(1),await os(n),n.Aa.set("Offline"),t||(t=()=>wg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D(Un,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Yo(n)})}function Mg(n,e){return e().catch(t=>Co(n,t,e))}async function xr(n){const e=L(n),t=nn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:wn;for(;LA(e);)try{const i=await EA(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,FA(e,i)}catch(i){await Co(e,i)}Lg(e)&&Fg(e)}function LA(n){return qn(n)&&n.Pa.length<10}function FA(n,e){n.Pa.push(e);const t=nn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Lg(n){return qn(n)&&!nn(n).M_()&&n.Pa.length>0}function Fg(n){nn(n).start()}async function UA(n){nn(n).na()}async function BA(n){const e=nn(n);for(const t of n.Pa)e.X_(t.mutations)}async function jA(n,e,t){const r=n.Pa.shift(),i=Iu.from(r,e,t);await Mg(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await xr(n)}async function qA(n,e){e&&nn(n).Z_&&await async function(r,i){if(function(o){return Sw(o)&&o!==P.ABORTED}(i.code)){const s=r.Pa.shift();nn(r).N_(),await Mg(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xr(r)}}(n,e),Lg(n)&&Fg(n)}async function Kd(n,e){const t=L(n);t.asyncQueue.verifyOperationInProgress(),D(Un,"RemoteStore received new credentials");const r=qn(t);t.Ia.add(3),await os(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Yo(t)}async function Nc(n,e){const t=L(n);e?(t.Ia.delete(2),await Yo(t)):e||(t.Ia.add(2),await os(t),t.Aa.set("Unknown"))}function Mr(n){return n.Va||(n.Va=function(t,r,i){const s=L(t);return s.ia(),new RA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:NA.bind(null,n),e_:OA.bind(null,n),n_:xA.bind(null,n),J_:MA.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Nu(n)?ku(n):n.Aa.set("Unknown")):(await n.Va.stop(),xg(n))})),n.Va}function nn(n){return n.ma||(n.ma=function(t,r,i){const s=L(t);return s.ia(),new PA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:UA.bind(null,n),n_:qA.bind(null,n),ea:BA.bind(null,n),ta:jA.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await xr(n)):(await n.ma.stop(),n.Pa.length>0&&(D(Un,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new Ou(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xu(n,e){if(ge("AsyncQueue",`${e}: ${n}`),on(n))return new k(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{static emptySet(e){return new cr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=hi(),this.sortedSet=new oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new cr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.fa=new oe(x.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):M(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class br{constructor(e,t,r,i,s,o,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new br(e,t,cr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class $A{constructor(){this.queries=Hd(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=L(t),s=i.queries;i.queries=Hd(),s.forEach((o,c)=>{for(const u of c.wa)u.onError(r)})})(this,new k(P.ABORTED,"Firestore shutting down"))}}function Hd(){return new Dt(n=>Dp(n),Go)}async function Mu(n,e){const t=L(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new zA,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=xu(o,`Initialization of query '${tr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&Fu(t)}async function Lu(n,e){const t=L(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function GA(n,e){const t=L(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.wa)c.Ca(i)&&(r=!0);o.ya=i}}r&&Fu(t)}function KA(n,e,t){const r=L(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function Fu(n){n.Da.forEach(e=>{e.next()})}var Oc,Qd;(Qd=Oc||(Oc={})).Fa="default",Qd.Cache="cache";class Uu{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new br(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=br.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Oc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.key=e}}class Bg{constructor(e){this.key=e}}class WA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=W(),this.mutatedKeys=W(),this.Xa=kp(e),this.eu=new cr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Wd,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),S=ns(this.query,m)?m:null,C=!!g&&this.mutatedKeys.has(g.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;g&&S?g.data.isEqual(S.data)?C!==N&&(r.track({type:3,doc:S}),V=!0):this.iu(g,S)||(r.track({type:2,doc:S}),V=!0,(u&&this.Xa(S,u)>0||h&&this.Xa(S,h)<0)&&(c=!0)):!g&&S?(r.track({type:0,doc:S}),V=!0):g&&!S&&(r.track({type:1,doc:g}),V=!0,(u||h)&&(c=!0)),V&&(S?(o=o.add(S),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:c,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,m)=>function(S,C){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:V})}};return N(S)-N(C)}(f.type,m.type)||this.Xa(f.doc,m.doc)),this.su(r),i=i!=null&&i;const c=t&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new br(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Wd,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=W(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new Bg(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new Ug(r))}),t}uu(e){this.Ha=e.qs,this.Za=W();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return br.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Lr="SyncEngine";class HA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class QA{constructor(e){this.key=e,this.lu=!1}}class XA{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Dt(c=>Dp(c),Go),this.Tu=new Map,this.Iu=new Set,this.du=new oe(x.comparator),this.Eu=new Map,this.Au=new bu,this.Ru={},this.Vu=new Map,this.mu=Fn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function JA(n,e,t=!0){const r=ea(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await jg(r,e,t,!0),i}async function YA(n,e){const t=ea(n);await jg(t,e,!0,!1)}async function jg(n,e,t,r){const i=await So(n.localStore,We(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await Bu(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Zo(n.remoteStore,i),c}async function Bu(n,e,t,r,i){n.gu=(m,g,S)=>async function(N,V,$,B){let F=V.view.nu($);F.Ds&&(F=await Dc(N.localStore,V.query,!1).then(({documents:v})=>V.view.nu(v,F)));const Q=B&&B.targetChanges.get(V.targetId),te=B&&B.targetMismatches.get(V.targetId)!=null,H=V.view.applyChanges(F,N.isPrimaryClient,Q,te);return xc(N,V.targetId,H._u),H.snapshot}(n,m,g,S);const s=await Dc(n.localStore,e,!0),o=new WA(e,s.qs),c=o.nu(s.documents),u=ss.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=o.applyChanges(c,n.isPrimaryClient,u);xc(n,t,h._u);const f=new HA(e,t,o);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function ZA(n,e,t){const r=L(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!Go(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wr(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Ar(r.remoteStore,i.targetId),Sr(r,i.targetId)}).catch(sn)):(Sr(r,i.targetId),await wr(r.localStore,i.targetId,!0))}async function eb(n,e){const t=L(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ar(t.remoteStore,r.targetId))}async function tb(n,e,t){const r=$u(n);try{const i=await function(o,c){const u=L(o),h=ne.now(),f=c.reduce((S,C)=>S.add(C.key),W());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=Ke(),N=W();return u.Os.getEntries(S,f).next(V=>{C=V,C.forEach(($,B)=>{B.isValidDocument()||(N=N.add($))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(V=>{m=V;const $=[];for(const B of c){const F=Aw(B,m.get(B.key).overlayedDocument);F!=null&&$.push(new Vt(B.key,F,vp(F.value.mapValue),Ae.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,$,c)}).next(V=>{g=V;const $=V.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(S,V.batchId,$)})}).then(()=>({batchId:g.batchId,changes:Op(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new oe(z)),h=h.insert(c,u),o.Ru[o.currentUser.toKey()]=h}(r,i.batchId,t),await cn(r,i.changes),await xr(r.remoteStore)}catch(i){const s=xu(i,"Failed to persist write");t.reject(s)}}async function qg(n,e){const t=L(n);try{const r=await IA(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Eu.get(s);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?U(o.lu,14607):i.removedDocuments.size>0&&(U(o.lu,42227),o.lu=!1))}),await cn(t,r,e)}catch(r){await sn(r)}}function Xd(n,e,t){const r=L(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach((s,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const u=L(o);u.onlineState=c;let h=!1;u.queries.forEach((f,m)=>{for(const g of m.wa)g.va(c)&&(h=!0)}),h&&Fu(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nb(n,e,t){const r=L(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new oe(x.comparator);o=o.insert(s,fe.newNoDocument(s,j.min()));const c=W().add(s),u=new is(j.min(),new Map,new oe(z),o,c);await qg(r,u),r.du=r.du.remove(s),r.Eu.delete(e),zu(r)}else await wr(r.localStore,e,!1).then(()=>Sr(r,e,t)).catch(sn)}async function rb(n,e){const t=L(n),r=e.batch.batchId;try{const i=await yA(t.localStore,e);qu(t,r,null),ju(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await cn(t,i)}catch(i){await sn(i)}}async function ib(n,e,t){const r=L(n);try{const i=await function(o,c){const u=L(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,c).next(m=>(U(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);qu(r,e,t),ju(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await cn(r,i)}catch(i){await sn(i)}}function ju(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function qu(n,e,t){const r=L(n);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Sr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||zg(n,r)})}function zg(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ar(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),zu(n))}function xc(n,e,t){for(const r of t)r instanceof Ug?(n.Au.addReference(r.key,e),sb(n,r)):r instanceof Bg?(D(Lr,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||zg(n,r.key)):M(19791,{yu:r})}function sb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(D(Lr,"New document in limbo: "+t),n.Iu.add(r),zu(n))}function zu(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new x(ee.fromString(e)),r=n.mu.next();n.Eu.set(r,new QA(t)),n.du=n.du.insert(t,r),Zo(n.remoteStore,new vt(We(ts(t.path)),r,"TargetPurposeLimboResolution",Be.ue))}}async function cn(n,e,t){const r=L(n),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((c,u)=>{o.push(r.gu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t?.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Pu.Es(u.targetId,h);s.push(m)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,h){const f=L(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>w.forEach(h,g=>w.forEach(g.Is,S=>f.persistence.referenceDelegate.addReference(m,g.targetId,S)).next(()=>w.forEach(g.ds,S=>f.persistence.referenceDelegate.removeReference(m,g.targetId,S)))))}catch(m){if(!on(m))throw m;D(Cu,"Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const S=f.Fs.get(g),C=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(g,N)}}}(r.localStore,s))}async function ob(n,e){const t=L(n);if(!t.currentUser.isEqual(e)){D(Lr,"User change. New user:",e.toKey());const r=await Tg(t.localStore,e);t.currentUser=e,function(s,o){s.Vu.forEach(c=>{c.forEach(u=>{u.reject(new k(P.CANCELLED,o))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await cn(t,r.Bs)}}function ab(n,e){const t=L(n),r=t.Eu.get(e);if(r&&r.lu)return W().add(r.key);{let i=W();const s=t.Tu.get(e);if(!s)return i;for(const o of s){const c=t.Pu.get(o);i=i.unionWith(c.view.tu)}return i}}async function cb(n,e){const t=L(n),r=await Dc(t.localStore,e.query,!0),i=e.view.uu(r);return t.isPrimaryClient&&xc(t,e.targetId,i._u),i}async function ub(n,e){const t=L(n);return bg(t.localStore,e).then(r=>cn(t,r))}async function lb(n,e,t,r){const i=L(n),s=await function(c,u){const h=L(c),f=L(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Xn(m,u).next(g=>g?h.localDocuments.getDocuments(m,g):w.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await xr(i.remoteStore):t==="acknowledged"||t==="rejected"?(qu(i,e,r||null),ju(i,e),function(c,u){L(L(c).mutationQueue).rr(u)}(i.localStore,e)):M(6720,"Unknown batchState",{wu:t}),await cn(i,s)):D(Lr,"Cannot apply mutation batch with id: "+e)}async function hb(n,e){const t=L(n);if(ea(t),$u(t),e===!0&&t.fu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=await Jd(t,r.toArray());t.fu=!0,await Nc(t.remoteStore,!0);for(const s of i)Zo(t.remoteStore,s)}else if(e===!1&&t.fu!==!1){const r=[];let i=Promise.resolve();t.Tu.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Sr(t,o),wr(t.localStore,o,!0))),Ar(t.remoteStore,o)}),await i,await Jd(t,r),function(o){const c=L(o);c.Eu.forEach((u,h)=>{Ar(c.remoteStore,h)}),c.Au.jr(),c.Eu=new Map,c.du=new oe(x.comparator)}(t),t.fu=!1,await Nc(t.remoteStore,!1)}}async function Jd(n,e,t){const r=L(n),i=[],s=[];for(const o of e){let c;const u=r.Tu.get(o);if(u&&u.length!==0){c=await So(r.localStore,We(u[0]));for(const h of u){const f=r.Pu.get(h),m=await cb(r,f);m.snapshot&&s.push(m.snapshot)}}else{const h=await Ag(r.localStore,o);c=await So(r.localStore,h),await Bu(r,$g(h),o,!1,c.resumeToken)}i.push(c)}return r.hu.J_(s),i}function $g(n){return Pp(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function db(n){return function(t){return L(L(t).persistence).Ps()}(L(n).localStore)}async function fb(n,e,t,r){const i=L(n);if(i.fu)return void D(Lr,"Ignoring unexpected query state notification.");const s=i.Tu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await bg(i.localStore,Vp(s[0])),c=is.createSynthesizedRemoteEventForCurrentChange(e,t==="current",_e.EMPTY_BYTE_STRING);await cn(i,o,c);break}case"rejected":await wr(i.localStore,e,!0),Sr(i,e,r);break;default:M(64155,t)}}async function mb(n,e,t){const r=ea(n);if(r.fu){for(const i of e){if(r.Tu.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){D(Lr,"Adding an already active target "+i);continue}const s=await Ag(r.localStore,i),o=await So(r.localStore,s);await Bu(r,$g(s),o.targetId,!1,o.resumeToken),Zo(r.remoteStore,o)}for(const i of t)r.Tu.has(i)&&await wr(r.localStore,i,!1).then(()=>{Ar(r.remoteStore,i),Sr(r,i)}).catch(sn)}}function ea(n){const e=L(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ab.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nb.bind(null,e),e.hu.J_=GA.bind(null,e.eventManager),e.hu.pu=KA.bind(null,e.eventManager),e}function $u(n){const e=L(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ib.bind(null,e),e}class Bi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jo(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Eg(this.persistence,new vg,e.initialUser,this.serializer)}Du(e){return new Su(Xo.Vi,this.serializer)}bu(e){return new Dg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bi.provider={build:()=>new Bi};class pb extends Bi{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){U(this.persistence.referenceDelegate instanceof bo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new mg(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new Su(r=>bo.Vi(r,t),this.serializer)}}class Gg extends Bi{constructor(e,t,r){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await $u(this.Mu.syncEngine),await xr(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return Eg(this.persistence,new vg,e.initialUser,this.serializer)}Cu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new mg(r,e.asyncQueue,t)}Fu(e,t){const r=new RT(t,this.persistence);return new ST(e.asyncQueue,r)}Du(e){const t=Ig(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ne.withCacheSize(this.cacheSizeBytes):Ne.DEFAULT;return new Ru(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Vg(),Ys(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new Dg}}class gb extends Gg{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Mu.syncEngine;this.sharedClientState instanceof Wa&&(this.sharedClientState.syncEngine={Do:lb.bind(null,t),vo:fb.bind(null,t),Co:mb.bind(null,t),Ps:db.bind(null,t),bo:ub.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji(async r=>{await hb(this.Mu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}bu(e){const t=Vg();if(!Wa.C(t))throw new k(P.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Ig(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Wa(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class ji{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ob.bind(null,this.syncEngine),await Nc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $A}()}createDatastore(e){const t=Jo(e.databaseInfo.databaseId),r=function(s){return new SA(s)}(e.databaseInfo);return function(s,o,c,u){return new DA(s,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new kA(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Xd(this.syncEngine,t,0),function(){return $d.C()?new $d:new TA}())}createSyncEngine(e,t){return function(i,s,o,c,u,h,f){const m=new XA(i,s,o,c,u,h);return f&&(m.fu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=L(i);D(Un,"RemoteStore shutting down."),s.Ia.add(5),await os(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ji.provider={build:()=>new ji};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ge("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="FirestoreClient";class _b{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ke.UNAUTHENTICATED,this.clientId=iu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{D(rn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(D(rn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=xu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qa(n,e){n.asyncQueue.verifyOperationInProgress(),D(rn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Tg(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{Zt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{D("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{Zt("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e}async function Yd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await yb(n);D(rn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Kd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Kd(e.remoteStore,i)),n._onlineComponents=e}async function yb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(rn,"Using user provided OfflineComponentProvider");try{await Qa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Zt("Error using user provided cache. Falling back to memory cache: "+t),await Qa(n,new Bi)}}else D(rn,"Using default OfflineComponentProvider"),await Qa(n,new pb(void 0));return n._offlineComponents}async function Kg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(rn,"Using user provided OnlineComponentProvider"),await Yd(n,n._uninitializedComponentsProvider._online)):(D(rn,"Using default OnlineComponentProvider"),await Yd(n,new ji))),n._onlineComponents}function Ib(n){return Kg(n).then(e=>e.syncEngine)}async function Do(n){const e=await Kg(n),t=e.eventManager;return t.onListen=JA.bind(null,e.syncEngine),t.onUnlisten=ZA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=YA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=eb.bind(null,e.syncEngine),t}function vb(n,e,t={}){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,u,h){const f=new Gu({next:g=>{f.Ou(),o.enqueueAndForget(()=>Lu(s,m));const S=g.docs.has(c);!S&&g.fromCache?h.reject(new k(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&u&&u.source==="server"?h.reject(new k(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new Uu(ts(c.path),f,{includeMetadataChanges:!0,ka:!0});return Mu(s,m)}(await Do(n),n.asyncQueue,e,t,r)),r.promise}function Wg(n,e,t={}){const r=new ot;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,u,h){const f=new Gu({next:g=>{f.Ou(),o.enqueueAndForget(()=>Lu(s,m)),g.fromCache&&u.source==="server"?h.reject(new k(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new Uu(c,f,{includeMetadataChanges:!0,ka:!0});return Mu(s,m)}(await Do(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="firestore.googleapis.com",ef=!0;class tf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new k(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Eb,this.ssl=ef}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ef;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ug;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fg)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new k(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ku{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new k(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pT;switch(r.type){case"firstParty":return new yT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Zd.get(t);r&&(D("ComponentProvider","Removing Datastore"),Zd.delete(t),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ft(this.firestore,e,this._query)}}class me{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}toJSON(){return{type:me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Yi(t,me._jsonSchema))return new me(e,r||null,new x(ee.fromString(t.referencePath)))}}me._jsonSchemaVersion="firestore/documentReference/1.0",me._jsonSchema={type:Ie("string",me._jsonSchemaVersion),referencePath:Ie("string")};class Jt extends ft{constructor(e,t,r){super(e,t,ts(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new x(e))}withConverter(e){return new Jt(this.firestore,e,this._path)}}function lt(n,e,...t){if(n=pe(n),Wm("collection","path",e),n instanceof Ku){const r=ee.fromString(e,...t);return Gh(r),new Jt(n,null,r)}{if(!(n instanceof me||n instanceof Jt))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return Gh(r),new Jt(n.firestore,null,r)}}function ve(n,e,...t){if(n=pe(n),arguments.length===1&&(e=iu.newId()),Wm("doc","path",e),n instanceof Ku){const r=ee.fromString(e,...t);return $h(r),new me(n,null,new x(r))}{if(!(n instanceof me||n instanceof Jt))throw new k(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return $h(r),new me(n.firestore,n instanceof Jt?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="AsyncQueue";class rf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new kg(this,"async_queue_retry"),this.oc=()=>{const r=Ys();r&&D(nf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Ys();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ys();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new ot;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!on(e))throw e;D(nf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,ge("INTERNAL UNHANDLED ERROR: ",sf(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=Ou.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&M(47125,{hc:sf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function sf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class ht extends Ku{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new rf,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rf(e),this._firestoreClient=void 0,await e}}}function af(n,e,t){t||(t=go);const r=Gc(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(Tt(s,e))return i;throw new k(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new k(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fg)throw new k(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Cr(e.host)&&Hf(e.host),r.initialize({options:e,instanceIdentifier:t})}function Fr(n){if(n._terminated)throw new k(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Tb(n),n._firestoreClient}function Tb(n){var e,t,r;const i=n._freezeSettings(),s=function(c,u,h,f){return new tw(c,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Hg(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new _b(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(c){const u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qe(_e.fromBase64String(e))}catch(t){throw new k(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qe(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Yi(e,Qe._jsonSchema))return Qe.fromBase64String(e.bytes)}}Qe._jsonSchemaVersion="firestore/bytes/1.0",Qe._jsonSchema={type:Ie("string",Qe._jsonSchemaVersion),bytes:Ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new k(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:at._jsonSchemaVersion}}static fromJSON(e){if(Yi(e,at._jsonSchema))return new at(e.latitude,e.longitude)}}at._jsonSchemaVersion="firestore/geoPoint/1.0",at._jsonSchema={type:Ie("string",at._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Yi(e,ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ct(e.vectorValues);throw new k(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ct._jsonSchemaVersion="firestore/vectorValue/1.0",ct._jsonSchema={type:Ie("string",ct._jsonSchemaVersion),vectorValues:Ie("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=/^__.*__$/;class Ab{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Vt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Or(e,this.data,t,this.fieldTransforms)}}class Qg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Vt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:n})}}class ta{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ta(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Vo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Xg(this.Ec)&&wb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class bb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Jo(e)}Dc(e,t,r,i=!1){return new ta({Ec:e,methodName:t,bc:r,path:he.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function na(n){const e=n._freezeSettings(),t=Jo(n._databaseId);return new bb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Jg(n,e,t,r,i,s={}){const o=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);Qu("Data must be an object, but it was:",o,r);const c=t_(r,o);let u,h;if(s.merge)u=new je(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=Mc(e,m,t);if(!o.contains(g))throw new k(P.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);r_(f,g)||f.push(g)}u=new je(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new Ab(new Oe(c),u,h)}class us extends cs{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof us}}function Yg(n,e,t){return new ta({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Wu extends cs{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Yg(this,e,!0),r=this.vc.map(s=>zn(s,t)),i=new On(r);return new _u(e.path,i)}isEqual(e){return e instanceof Wu&&Tt(this.vc,e.vc)}}class Hu extends cs{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Yg(this,e,!0),r=this.vc.map(s=>zn(s,t)),i=new xn(r);return new _u(e.path,i)}isEqual(e){return e instanceof Hu&&Tt(this.vc,e.vc)}}function Zg(n,e,t,r){const i=n.Dc(1,e,t);Qu("Data must be an object, but it was:",i,r);const s=[],o=Oe.empty();an(r,(u,h)=>{const f=Xu(e,u,t);h=pe(h);const m=i.gc(f);if(h instanceof us)s.push(f);else{const g=zn(h,m);g!=null&&(s.push(f),o.set(f,g))}});const c=new je(s);return new Qg(o,c,i.fieldTransforms)}function e_(n,e,t,r,i,s){const o=n.Dc(1,e,t),c=[Mc(e,r,t)],u=[i];if(s.length%2!=0)throw new k(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)c.push(Mc(e,s[g])),u.push(s[g+1]);const h=[],f=Oe.empty();for(let g=c.length-1;g>=0;--g)if(!r_(h,c[g])){const S=c[g];let C=u[g];C=pe(C);const N=o.gc(S);if(C instanceof us)h.push(S);else{const V=zn(C,N);V!=null&&(h.push(S),f.set(S,V))}}const m=new je(h);return new Qg(f,m,o.fieldTransforms)}function Sb(n,e,t,r=!1){return zn(t,n.Dc(r?4:3,e))}function zn(n,e){if(n_(n=pe(n)))return Qu("Unsupported field value:",e,n),t_(n,e);if(n instanceof cs)return function(r,i){if(!Xg(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const c of r){let u=zn(c,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=pe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ne.fromDate(r);return{timestampValue:Tr(i.serializer,s)}}if(r instanceof ne){const s=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tr(i.serializer,s)}}if(r instanceof at)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qe)return{bytesValue:Wp(i.serializer,r._byteString)};if(r instanceof me){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Tu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ct)return function(o,c){return{mapValue:{fields:{[du]:{stringValue:fu},[yr]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return gu(c.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${Lo(r)}`)}(n,e)}function t_(n,e){const t={};return hp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):an(n,(r,i)=>{const s=zn(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function n_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof at||n instanceof Qe||n instanceof me||n instanceof cs||n instanceof ct)}function Qu(n,e,t){if(!n_(t)||!Hm(t)){const r=Lo(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Mc(n,e,t){if((e=pe(e))instanceof as)return e._internalPath;if(typeof e=="string")return Xu(n,e);throw Vo("Field path arguments must be of type string or ",n,!1,void 0,t)}const Rb=new RegExp("[~\\*/\\[\\]]");function Xu(n,e,t){if(e.search(Rb)>=0)throw Vo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new as(...e.split("."))._internalPath}catch{throw Vo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vo(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new k(P.INVALID_ARGUMENT,c+n+u)}function r_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Pb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ra("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Pb extends i_{data(){return super.data()}}function ra(n,e){return typeof e=="string"?Xu(n,e):e instanceof as?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ju{}class Yu extends Ju{}function Rr(n,e,...t){let r=[];e instanceof Ju&&r.push(e),r=r.concat(t),function(s){const o=s.filter(u=>u instanceof el).length,c=s.filter(u=>u instanceof ia).length;if(o>1||o>0&&c>0)throw new k(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ia extends Yu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ia(e,t,r)}_apply(e){const t=this._parse(e);return o_(e._query,t),new ft(e.firestore,e.converter,Tc(e._query,t))}_parse(e){const t=na(e.firestore);return function(s,o,c,u,h,f,m){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new k(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){lf(m,f);const C=[];for(const N of m)C.push(uf(u,s,N));g={arrayValue:{values:C}}}else g=uf(u,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||lf(m,f),g=Sb(c,o,m,f==="in"||f==="not-in");return J.create(h,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Zu(n,e,t){const r=e,i=ra("where",n);return ia._create(i,r,t)}class el extends Ju{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new el(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:re.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)o_(o,u),o=Tc(o,u)}(e._query,t),new ft(e.firestore,e.converter,Tc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tl extends Yu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new tl(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new k(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new k(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Li(s,o)}(e._query,this._field,this._direction);return new ft(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Nr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Cb(n,e="asc"){const t=e,r=ra("orderBy",n);return tl._create(r,t)}class nl extends Yu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new nl(e,t,r)}_apply(e){return new ft(e.firestore,e.converter,Io(e._query,this._limit,this._limitType))}}function cf(n){return nl._create("limit",n,"F")}function uf(n,e,t){if(typeof(t=pe(t))=="string"){if(t==="")throw new k(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cp(e)&&t.indexOf("/")!==-1)throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!x.isDocumentKey(r))throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return xi(n,new x(r))}if(t instanceof me)return xi(n,t._key);throw new k(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lo(t)}.`)}function lf(n,e){if(!Array.isArray(n)||n.length===0)throw new k(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function o_(n,e){const t=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new k(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Db{convertValue(e,t="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(St(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw M(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return an(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[yr].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ce(o.doubleValue));return new ct(s)}convertGeoPoint(e){return new at(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=zo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const t=bt(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);U(rg(r),9688,{name:e});const i=new kn(r.get(1),r.get(3)),s=new x(r.popFirst(5));return i.isEqual(t)||ge(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class mi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sn extends i_{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ra("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Sn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Sn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Sn._jsonSchema={type:Ie("string",Sn._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Zs extends Sn{data(e={}){return super.data(e)}}class Yt{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new mi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Zs(this._firestore,this._userDataWriter,r.key,r,new mi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const u=new Zs(i._firestore,i._userDataWriter,c.doc.key,c.doc,new mi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new Zs(i._firestore,i._userDataWriter,c.doc.key,c.doc,new mi(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:Vb(c.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=iu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Vb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n){n=Fe(n,me);const e=Fe(n.firestore,ht);return vb(Fr(e),n._key).then(t=>u_(e,n,t))}Yt._jsonSchemaVersion="firestore/querySnapshot/1.0",Yt._jsonSchema={type:Ie("string",Yt._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class sa extends Db{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,t)}}function c_(n){n=Fe(n,ft);const e=Fe(n.firestore,ht),t=Fr(e),r=new sa(e);return s_(n._query),Wg(t,n._query).then(i=>new Yt(e,r,n,i))}function Lc(n){n=Fe(n,ft);const e=Fe(n.firestore,ht),t=Fr(e),r=new sa(e);return Wg(t,n._query,{source:"server"}).then(i=>new Yt(e,r,n,i))}function Bn(n,e,t){n=Fe(n,me);const r=Fe(n.firestore,ht),i=a_(n.converter,e,t);return oa(r,[Jg(na(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ae.none())])}function rl(n,e,t,...r){n=Fe(n,me);const i=Fe(n.firestore,ht),s=na(i);let o;return o=typeof(e=pe(e))=="string"||e instanceof as?e_(s,"updateDoc",n._key,e,t,r):Zg(s,"updateDoc",n._key,e),oa(i,[o.toMutation(n._key,Ae.exists(!0))])}function kb(n){return oa(Fe(n.firestore,ht),[new rs(n._key,Ae.none())])}function ur(n,...e){var t,r,i;n=pe(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||of(e[o])||(s=e[o++]);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(of(e[o])){const m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(n instanceof me)h=Fe(n.firestore,ht),f=ts(n._key.path),u={next:m=>{e[o]&&e[o](u_(h,n,m))},error:e[o+1],complete:e[o+2]};else{const m=Fe(n,ft);h=Fe(m.firestore,ht),f=m._query;const g=new sa(h);u={next:S=>{e[o]&&e[o](new Yt(h,g,m,S))},error:e[o+1],complete:e[o+2]},s_(n._query)}return function(g,S,C,N){const V=new Gu(N),$=new Uu(S,V,C);return g.asyncQueue.enqueueAndForget(async()=>Mu(await Do(g),$)),()=>{V.Ou(),g.asyncQueue.enqueueAndForget(async()=>Lu(await Do(g),$))}}(Fr(h),f,c,u)}function oa(n,e){return function(r,i){const s=new ot;return r.asyncQueue.enqueueAndForget(async()=>tb(await Ib(r),i,s)),s.promise}(Fr(n),e)}function u_(n,e,t){const r=t.docs.get(e._key),i=new sa(n);return new Sn(n,i,e._key,r,new mi(t.hasPendingWrites,t.fromCache),e.converter)}class Nb{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Lb(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Ob(n){return new Nb(n)}class xb{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ji.provider,this._offlineComponentProvider={build:t=>new Gg(t,e?.cacheSizeBytes,this.forceOwnership)}}}class Mb{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ji.provider,this._offlineComponentProvider={build:t=>new gb(t,e?.cacheSizeBytes)}}}function Lb(n){return new xb(void 0)}function Fb(){return new Mb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=na(e)}set(e,t,r){this._verifyNotCommitted();const i=Xa(e,this._firestore),s=a_(i.converter,t,r),o=Jg(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ae.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=Xa(e,this._firestore);let o;return o=typeof(t=pe(t))=="string"||t instanceof as?e_(this._dataReader,"WriteBatch.update",s._key,t,r,i):Zg(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Ae.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Xa(e,this._firestore);return this._mutations=this._mutations.concat(new rs(t._key,Ae.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Xa(n,e){if((n=pe(n)).firestore!==e)throw new k(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(){return new us("deleteField")}function jb(...n){return new Wu("arrayUnion",n)}function qb(...n){return new Hu("arrayRemove",n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n){return Fr(n=Fe(n,ht)),new Ub(n,e=>oa(n,e))}(function(e,t=!0){(function(i){kr=i})(Dr),lr(new Pn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new ht(new gT(r.getProvider("auth-internal")),new IT(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new k(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kn(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ht(Uh,Bh,e),Ht(Uh,Bh,"esm2017")})();var zb="firebase",$b="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(zb,$b,"app");const Gb={apiKey:"AIzaSyAX05BjbgMPWMAZKaZWH87BDgvktsn0ZzI",authDomain:"sete-vidas.firebaseapp.com",projectId:"sete-vidas",storageBucket:"sete-vidas.firebasestorage.app",messagingSenderId:"531919892634",appId:"1:531919892634:web:20b6195f479f544122af23"},Fc=tm(Gb),kt=dT(Fc),le=(()=>{try{return af(Fc,{localCache:Ob({tabManager:Fb()})})}catch{return af(Fc,{})}})(),aa=["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"],K=(n,e)=>typeof n[e]=="string"?n[e]:null,G=(n,e)=>typeof n[e]=="number"&&Number.isFinite(n[e])?n[e]:null,eo=(n,e)=>n[e]===!0,df=(n,e)=>Array.isArray(n[e])?n[e].filter(t=>!!t&&typeof t=="object"):[],Ja=(n,e)=>n[e]&&typeof n[e]=="object"&&!Array.isArray(n[e])?n[e]:{},ff=(n,e)=>K(n,e)?.slice(0,5)??null;function ue(n,e){if(n==null)throw new Error(`campo ${e} ausente`);return n}function Uc(n){return n==null?"null":Array.isArray(n)?`[${n.map(Uc).join(",")}]`:typeof n=="object"?`{${Object.keys(n).sort().map(e=>`${JSON.stringify(e)}:${Uc(n[e])}`).join(",")}}`:typeof n=="number"?String(n):JSON.stringify(n)}function to(n){const e=Uc(n);let t=3735928559,r=1103547991;for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);t=Math.imul(t^s,2654435761),r=Math.imul(r^s,1597334677)}return t=Math.imul(t^t>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),r=Math.imul(r^r>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),(4294967296*(2097151&r)+(t>>>0)).toString(36)+":"+e.length}function l_(n){return{tipoRecorrencia:n.tipo,diasDaSemana:n.tipo==="DIAS_DA_SEMANA"?[...n.dias].sort().map(e=>aa[e-1]).join(","):null,intervaloQuantidade:n.tipo==="A_CADA"?n.quantidade:null,intervaloUnidade:n.tipo==="A_CADA"?n.unidade:null,primeiraData:n.tipo==="A_CADA"?n.primeiraData:null,meta:n.tipo==="CONTADOR_DIARIO"?n.meta:null,dataLimite:n.tipo==="PRAZO_UNICO"?n.data:null}}function h_(n,e){switch(K(n,"tipoRecorrencia")){case"VARIAS_VEZES_POR_DIA":return{tipo:"VARIAS_VEZES_POR_DIA"};case"DIAS_DA_SEMANA":return{tipo:"DIAS_DA_SEMANA",dias:(K(n,"diasDaSemana")??"").split(",").filter(Boolean).map(t=>aa.indexOf(t.trim())+1).filter(t=>t>0)};case"A_CADA":return{tipo:"A_CADA",quantidade:G(n,"intervaloQuantidade")??1,unidade:K(n,"intervaloUnidade")==="SEMANAS"?"SEMANAS":"DIAS",primeiraData:K(n,"primeiraData")??e};case"CONTADOR_DIARIO":return{tipo:"CONTADOR_DIARIO",meta:G(n,"meta")??1};case"PRAZO_UNICO":return{tipo:"PRAZO_UNICO",data:K(n,"dataLimite")??e};default:return{tipo:"DIARIA"}}}function mf(n){return{id:n.id,nome:n.nome,dificuldade:n.dificuldade,area:n.area,...l_(n.recorrencia),lembrete:n.lembrete,antecedenciaMin:n.antecedenciaMin,criadaEm:n.criadaEm,editadaEm:n.editadaEm??null,arquivadaEm:n.arquivadaEm??null,acumula:n.acumula,permiteParcial:n.permiteParcial,tipoTarefa:n.tipoTarefa,passo:n.passo,unidade:n.unidade,dose:n.dose,janelas:n.janelas.map((e,t)=>({id:e.id,atalho:e.atalho??null,inicio:e.atalho?null:e.inicio??null,fim:e.atalho?null:e.fim??null,ordem:t})),pausas:[...n.pausas].sort((e,t)=>e.inicio-t.inicio).map((e,t)=>({id:e.id??d_(n.id,t),inicio:e.inicio,fim:e.fim??null}))}}const d_=(n,e)=>$i(`${n}|pausa|${e}`);function pf(n,e,t){const r=df(e,"janelas").map((s,o)=>({j:s,ordem:G(s,"ordem")??o,i:o})).sort((s,o)=>s.ordem-o.ordem).map(({j:s,i:o})=>{const c=K(s,"atalho");return{id:K(s,"id")??$i(`${n}|janela|${o}`),atalho:c,inicio:c?null:ff(s,"inicio"),fim:c?null:ff(s,"fim")}}),i=df(e,"pausas").flatMap((s,o)=>{const c=G(s,"inicio");return c==null?[]:[{id:K(s,"id")??d_(n,o),inicio:c,fim:G(s,"fim")}]});return{id:n,nome:ue(K(e,"nome"),"nome"),dificuldade:K(e,"dificuldade")??"MEDIA",area:K(e,"area")??"OUTROS",recorrencia:h_(e,t),janelas:r,pausas:i,criadaEm:G(e,"criadaEm")??0,editadaEm:G(e,"editadaEm"),arquivadaEm:G(e,"arquivadaEm"),acumula:eo(e,"acumula"),permiteParcial:eo(e,"permiteParcial"),tipoTarefa:K(e,"tipoTarefa")??"HABITO",passo:G(e,"passo")??1,unidade:K(e,"unidade"),dose:K(e,"dose"),lembrete:eo(e,"lembrete"),antecedenciaMin:G(e,"antecedenciaMin")??30}}const gf=n=>({id:n.id,tarefaId:n.tarefaId,janelaId:n.janelaId,dia:n.dia,inicio:n.inicio,fim:n.fim,dificuldade:n.dificuldade,meta:n.meta,prazoUnico:n.prazoUnico,estado:n.estado,prazoAdiado:n.prazoAdiado,feitaEm:n.feitaEm,progresso:n.progresso,acumulada:n.acumulada}),_f=(n,e)=>({id:n,tarefaId:ue(K(e,"tarefaId"),"tarefaId"),janelaId:K(e,"janelaId"),dia:ue(K(e,"dia"),"dia"),inicio:ue(G(e,"inicio"),"inicio"),fim:ue(G(e,"fim"),"fim"),dificuldade:ue(K(e,"dificuldade"),"dificuldade"),meta:G(e,"meta"),prazoUnico:eo(e,"prazoUnico"),estado:ue(K(e,"estado"),"estado"),prazoAdiado:G(e,"prazoAdiado"),feitaEm:G(e,"feitaEm"),progresso:G(e,"progresso")??0,acumulada:G(e,"acumulada")??0}),yf=n=>({id:n.id,ocorrenciaId:n.ocorrenciaId,modo:n.modo,feitoEm:n.feitoEm,latitude:n.latitude,longitude:n.longitude,anexo:n.anexo,desfeitoEm:n.desfeitoEm}),If=(n,e)=>({id:n,ocorrenciaId:ue(K(e,"ocorrenciaId"),"ocorrenciaId"),modo:K(e,"modo")??"LIVRE",feitoEm:ue(G(e,"feitoEm"),"feitoEm"),latitude:G(e,"latitude"),longitude:G(e,"longitude"),anexo:K(e,"anexo"),desfeitoEm:G(e,"desfeitoEm")}),vf=n=>({id:n.id,ocorrenciaId:n.ocorrenciaId,tarefaId:n.tarefaId,lado:n.lado,valor:n.valor,motivo:n.motivo,instante:n.instante,dia:n.dia,semana:n.semana,registradoEm:n.registradoEm});function Ef(n,e,t){const r=ue(G(e,"instante"),"instante");return{id:n,ocorrenciaId:ue(K(e,"ocorrenciaId"),"ocorrenciaId"),tarefaId:ue(K(e,"tarefaId"),"tarefaId"),lado:ue(K(e,"lado"),"lado"),valor:ue(G(e,"valor"),"valor"),motivo:ue(K(e,"motivo"),"motivo"),instante:r,dia:K(e,"dia")??t(r),semana:ue(K(e,"semana"),"semana"),registradoEm:G(e,"registradoEm")??r}}const Tf=n=>({data:n.data,semana:n.semana,pontosAnjo:n.pontosAnjo,pontosCapeta:n.pontosCapeta,vencedor:n.vencedor??"NENHUM",fechado:!0});function wf(n){if(n.fechado===!1)return null;const e=K(n,"vencedor");return{data:ue(K(n,"data"),"data"),semana:ue(K(n,"semana"),"semana"),pontosAnjo:G(n,"pontosAnjo")??0,pontosCapeta:G(n,"pontosCapeta")??0,vencedor:e==="ANJO"||e==="CAPETA"?e:null}}const Af=n=>({fechamento:n.fechamento,inicio:n.inicio,fim:n.fim,pontosAnjo:n.pontosAnjo,pontosCapeta:n.pontosCapeta,vidasAnjo:n.vidasAnjo,vidasCapeta:n.vidasCapeta,vencedor:n.vencedor,tarefasMaisFalhadas:n.tarefasMaisFalhadas.map(e=>`${e.tarefaId}:${e.falhas}`).join(","),melhorSequenciaTarefaId:n.melhorSequencia?.tarefaId??null,melhorSequenciaDias:n.melhorSequencia?.dias??null,fechada:!0});function bf(n){if(n.fechada===!1)return null;const e=K(n,"melhorSequenciaTarefaId"),t=G(n,"melhorSequenciaDias");return{fechamento:ue(K(n,"fechamento"),"fechamento"),inicio:ue(G(n,"inicio"),"inicio"),fim:ue(G(n,"fim"),"fim"),pontosAnjo:G(n,"pontosAnjo")??0,pontosCapeta:G(n,"pontosCapeta")??0,vidasAnjo:G(n,"vidasAnjo")??0,vidasCapeta:G(n,"vidasCapeta")??0,vencedor:ue(K(n,"vencedor"),"vencedor"),tarefasMaisFalhadas:(K(n,"tarefasMaisFalhadas")??"").split(",").filter(r=>r.includes(":")).map(r=>{const i=r.lastIndexOf(":");return{tarefaId:r.slice(0,i),falhas:Number(r.slice(i+1))||0}}),melhorSequencia:e!=null&&t!=null?{tarefaId:e,dias:t}:null}}const Sf=n=>({grupoId:n.grupoId,tarefaDoGrupoId:n.tarefaDoGrupoId,vinculadaEm:n.vinculadaEm}),Rf=(n,e)=>({tarefaId:n,grupoId:ue(K(e,"grupoId"),"grupoId"),tarefaDoGrupoId:ue(K(e,"tarefaDoGrupoId"),"tarefaDoGrupoId"),vinculadaEm:G(e,"vinculadaEm")??0}),Pf=n=>({ultimoProcessamento:n.ultimoProcessamento,faseAnjo:n.faseAnjo,faseCapeta:n.faseCapeta}),Cf=n=>({ultimoProcessamento:G(n,"ultimoProcessamento"),faseAnjo:G(n,"faseAnjo")??1,faseCapeta:G(n,"faseCapeta")??1}),Ya=n=>n?Number(n.slice(0,2))*60+Number(n.slice(3,5)):null,Za=n=>n==null?null:`${String(Math.floor(n/60)%24).padStart(2,"0")}:${String(n%60).padStart(2,"0")}`;function Df(n){const e=n.regras;return{nomeAnjo:n.nomeAnjo,nomeCapeta:n.nomeCapeta,pesoFalha:e.pesoFalha,percentualAtraso:e.percentualAtraso,bonusFalhaComAtraso:e.bonusFalhaComAtraso,fimDoDiaMin:Ya(e.viradaDoDia),diaDoFechamento:aa[e.diaDoFechamento-1],pontos:Object.fromEntries(Lf.map(t=>[t,e.pontosPorDificuldade[t]])),atalhos:Object.fromEntries(Mf.map(t=>[t,{inicioMin:Ya(e.atalhos[t]?.inicio),fimMin:Ya(e.atalhos[t]?.fim)}]))}}function Vf(n,e){const t=e.regras,r=Ja(n,"pontos"),i=Ja(n,"atalhos"),s=aa.indexOf(K(n,"diaDoFechamento")??"")+1,o={...t,pesoFalha:G(n,"pesoFalha")??t.pesoFalha,percentualAtraso:G(n,"percentualAtraso")??t.percentualAtraso,bonusFalhaComAtraso:G(n,"bonusFalhaComAtraso")??t.bonusFalhaComAtraso,viradaDoDia:Za(G(n,"fimDoDiaMin"))??t.viradaDoDia,diaDoFechamento:s>0?s:t.diaDoFechamento,pontosPorDificuldade:Object.fromEntries(Lf.map(c=>[c,G(r,c)??t.pontosPorDificuldade[c]])),atalhos:Object.fromEntries(Mf.map(c=>{if(!(c in i))return[c,t.atalhos[c]];const u=Ja(i,c);return[c,{inicio:Za(G(u,"inicioMin")),fim:Za(G(u,"fimMin"))}]}))};return{...e,nomeAnjo:K(n,"nomeAnjo")?.trim()||e.nomeAnjo,nomeCapeta:K(n,"nomeCapeta")?.trim()||e.nomeCapeta,regras:o}}const f_=(n,e,t)=>$i(`${n}|${e}|${t}`),m_="sete-vidas-nuvem";function Kb(){try{const n=localStorage.getItem(m_);if(n)return{uid:null,base:{},...JSON.parse(n)}}catch{}return{uid:null,base:{}}}let ls=Kb();function ca(){try{localStorage.setItem(m_,JSON.stringify(ls))}catch{}}const p_=n=>{var e;return(e=ls.base)[n]??(e[n]={})},kf=()=>jn().hoje(),Nf=n=>cy(n,Ff.zona()).data,ec=(n,e,t)=>{const r=n.findIndex(e);r>=0?n[r]=t:n.push(t)},tc="motor",no="configuracoes",il=[{nome:"tarefas",mesclar:!0,locais:n=>new Map(n.tarefas.map(e=>[e.id,mf(e)])),normalizar:(n,e)=>mf(pf(n,e,kf())),aplicar:(n,e,t)=>ec(n.tarefas,r=>r.id===e,pf(e,t,kf()))},{nome:"ocorrencias",removivel:!0,locais:n=>new Map(Object.values(n.ocorrencias).map(e=>[e.id,gf(e)])),normalizar:(n,e)=>gf(_f(n,e)),aplicar:(n,e,t)=>{n.ocorrencias[e]=_f(e,t)},remover:(n,e)=>{delete n.ocorrencias[e]}},{nome:"checkins",locais:n=>new Map(n.checkins.map(e=>[e.id,yf(e)])),normalizar:(n,e)=>yf(If(n,e)),aplicar:(n,e,t)=>ec(n.checkins,r=>r.id===e,If(e,t))},{nome:"lancamentos",soCria:!0,locais:n=>new Map(n.lancamentos.map(e=>[e.id,vf(e)])),normalizar:(n,e)=>vf(Ef(n,e,Nf)),aplicar:(n,e,t)=>{n.lancamentos.some(r=>r.id===e)||n.lancamentos.push(Ef(e,t,Nf))}},{nome:"dias",locais:n=>new Map(n.dias.map(e=>[e.data,Tf(e)])),normalizar:(n,e)=>{const t=wf(e);if(!t)throw new Error("dia aberto");return Tf(t)},aplicar:(n,e,t)=>{const r=wf(t);n.dias=n.dias.filter(i=>i.data!==r.data),n.dias.push(r)}},{nome:"semanas",locais:n=>new Map(n.semanas.map(e=>[e.fechamento,Af(e)])),normalizar:(n,e)=>{const t=bf(e);if(!t)throw new Error("semana aberta");return Af(t)},aplicar:(n,e,t)=>{const r=bf(t);n.semanas=n.semanas.filter(i=>i.fechamento!==r.fechamento),n.semanas.push(r)}},{nome:"vinculosGrupo",removivel:!0,locais:n=>new Map(n.vinculos.map(e=>[e.tarefaId,Sf(e)])),normalizar:(n,e)=>Sf(Rf(n,e)),aplicar:(n,e,t)=>ec(n.vinculos,r=>r.tarefaId===e,Rf(e,t)),remover:(n,e)=>{n.vinculos=n.vinculos.filter(t=>t.tarefaId!==e)}},{nome:"estado",mesclar:!0,locais:n=>new Map([[tc,Pf({ultimoProcessamento:n.ultimoProcessamento,faseAnjo:n.fases.anjo,faseCapeta:n.fases.capeta})],[no,Df(n.config)]]),normalizar:(n,e)=>{if(n===tc)return Pf(Cf(e));if(n===no)return Df(Vf(e,Rn().config));throw new Error("desconhecido")},aplicar:(n,e,t)=>{if(e===tc){const r=Cf(t);n.ultimoProcessamento=r.ultimoProcessamento,n.fases={anjo:r.faseAnjo,capeta:r.faseCapeta}}else e===no&&(n.config=Vf(t,n.config))}}];let Pr=null;const Bc=new Set;function Wb(n){return Bc.add(n),n(Pr),()=>{Bc.delete(n)}}function sl(n){Pr=n,Bc.forEach(e=>e(n))}const zi=n=>ve(le,"usuarios",n);let ko=null,jc=[];async function Hb(n){if(!n){ua();return}ls.uid===n?__(n):await Jb(n)}function g_(){ua(),ls={uid:null,base:{}},ca(),sl(null)}async function Qb(){const n=Pr;n&&(Gi(e=>{e.tarefas=[],e.ocorrencias={},e.lancamentos=[],e.dias=[],e.semanas=[],e.vinculos=[],e.checkins=[],e.ultimoProcessamento=null,e.fases={anjo:1,capeta:1}}),await ol(n))}async function Xb(){Pr&&await ol(Pr)}async function Jb(n){if(Pr===n)return;let e;try{const t=zi(n);e=!(await Lc(Rr(lt(t,"tarefas"),cf(1)))).empty||!(await Lc(Rr(lt(t,"lancamentos"),cf(1)))).empty}catch{return}e&&Rn().tarefas.length>0?sl(n):await ol(n)}async function ol(n){ua(),ls={uid:n,base:{}},ca(),sl(null);try{for(const e of il){const t=await Lc(lt(zi(n),e.nome));y_(e,t.docs.map(r=>({id:r.id,removido:!1,dados:r.data()})))}}catch{}__(n)}function __(n){if(ko===n){qc();return}ua(),ko=n,jc=il.map(e=>ur(lt(zi(n),e.nome),t=>{const r=t.docChanges().filter(i=>!i.doc.metadata.hasPendingWrites);r.length&&y_(e,r.map(i=>({id:i.doc.id,removido:i.type==="removed",dados:i.doc.data()})))},()=>{})),qc()}function ua(){jc.forEach(n=>n()),jc=[],ko=null}function qc(){const n=ko;if(!n)return;const e=Rn();let t=hf(le),r=0;const i=()=>{r&&t.commit().catch(()=>{}),t=hf(le),r=0};for(const s of il){const o=p_(s.nome),c=s.locais(e);for(const[u,h]of c){const f=to(h);if(o[u]===f||s.soCria&&u in o)continue;const m=ve(zi(n),s.nome,u),g=JSON.parse(JSON.stringify(h));s.mesclar?t.set(m,g,{merge:!0}):t.set(m,g),o[u]=f,++r>=400&&i()}if(s.removivel)for(const u of Object.keys(o))c.has(u)||(t.delete(ve(zi(n),s.nome,u)),delete o[u],++r>=400&&i())}i(),ca()}function y_(n,e){const t=p_(n.nome),r=n.locais(Rn());let i=!1,s=!1;Gi(o=>{for(const c of e){const u=r.get(c.id);if(c.removido){u&&n.removivel&&n.remover&&to(u)===t[c.id]&&(n.remover(o,c.id),i=!0),delete t[c.id];continue}let h;try{h=n.normalizar(c.id,c.dados)}catch{continue}const f=to(h);if((u?to(u):null)===f)t[c.id]=f;else if(t[c.id]!==f){try{n.aplicar(o,c.id,c.dados)}catch{continue}t[c.id]=f,n.nome==="estado"&&c.id===no?s=!0:i=!0}}}),ca(),s?oy(Rn().config):i&&ay()}const oS=Object.freeze(Object.defineProperty({__proto__:null,aoMudarConta:Hb,desligar:g_,juntar:Xb,ouvirEscolha:Wb,subir:qc,usarDadosDaConta:Qb},Symbol.toStringTag,{value:"Module"})),I_=n=>n?{uid:n.uid,nome:(n.displayName||n.email?.split("@")[0]||"").trim(),email:n.email}:null,qe=()=>I_(kt.currentUser);function aS(n){return eE(kt,e=>n(I_(e)))}const cS=()=>kt.authStateReady();function la(n){const e=n.code??"";return e.includes("weak-password")?"Senha fraca. Use pelo menos 6 caracteres.":e.includes("email-already-in-use")?"Já existe uma conta com esse e-mail. Tenta entrar.":e.includes("user-not-found")?"Não achei conta com esse e-mail.":e.includes("invalid-credential")||e.includes("wrong-password")?"E-mail ou senha não conferem.":e.includes("invalid-email")?"Esse e-mail não parece certo.":e.includes("too-many-requests")?"Muitas tentativas. Espera um pouco e tenta de novo.":e.includes("popup-blocked")?"A janela do Google não abriu. Tenta de novo ou entre com e-mail e senha.":e.includes("account-exists-with-different-credential")?"Esse e-mail já tem conta com senha. Entre com e-mail e senha.":e.includes("unauthorized-domain")||e.includes("operation-not-allowed")?"O login com Google ainda não está liberado. Use e-mail e senha.":e.includes("network")?"Sem conexão? Não deu para falar com o servidor.":e?`Não deu para entrar (${e.replace("auth/","")}).`:"Sem conexão? Não deu para falar com o servidor."}async function al(n){n.nome&&await Bn(ve(le,"usuarios",n.uid),{nome:n.nome},{merge:!0}).catch(()=>{})}async function uS(n,e){try{return await Xv(kt,n.trim(),e),await al(qe()),A_(),null}catch(t){return la(t)}}async function lS(){const n=new _t;n.setCustomParameters({prompt:"select_account"});try{return await EE(kt,n),await al(qe()),A_(),null}catch(e){const t=e.code??"";return t.includes("popup-closed-by-user")||t.includes("cancelled-popup-request")?null:la(e)}}async function hS(n,e,t){try{const r=await Qv(kt,e.trim(),t),i=n.trim().slice(0,30);return i&&await Sm(r.user,{displayName:i}),await al(qe()),null}catch(r){return la(r)}}async function dS(n){try{return await Hv(kt,n.trim()),null}catch(e){return la(e)}}async function fS(n){const e=kt.currentUser,t=n.trim().slice(0,30);!e||!t||(await Sm(e,{displayName:t}),await Bn(ve(le,"usuarios",e.uid),{nome:t},{merge:!0}))}const mS=()=>(g_(),tE(kt)),pS=(n,e)=>n.nomes[e]?.trim()||"Alguém";function Ur(n,e){return!e||typeof e.nome!="string"||typeof e.inicio!="string"?null:{id:n,nome:e.nome,objetivo:typeof e.objetivo=="string"?e.objetivo:"",capa:typeof e.capa=="string"&&e.capa.startsWith("data:image/")?e.capa:null,codigo:e.codigo??"",criadorUid:e.criadorUid??"",membros:Array.isArray(e.membros)?e.membros:[],nomes:e.nomes??{},inicio:e.inicio,fim:e.fim}}function Yb(n,e){return typeof e.membroId!="string"||typeof e.dia!="string"?null:{id:n,membroId:e.membroId,tarefaDoGrupoId:e.tarefaDoGrupoId,lado:e.lado,valor:Number(e.valor),motivo:e.motivo,dia:e.dia,instante:Number(e.instante)}}const v_=(n,e)=>typeof e.nome=="string"?{id:n,nome:e.nome,area:e.area??"OUTROS",dificuldade:e.dificuldade??"MEDIA",dados:e}:null;function Zb(n){const e=n.recorrencia;return{nome:n.nome,dificuldade:n.dificuldade,area:n.area,...l_(e),lembrete:n.lembrete,antecedenciaMin:n.antecedenciaMin,acumula:n.acumula,permiteParcial:n.permiteParcial,tipoTarefa:n.tipoTarefa,passo:n.passo,unidade:n.unidade,dose:n.dose,janelas:n.janelas.map((t,r)=>({atalho:t.atalho??null,inicio:t.atalho?null:t.inicio??null,fim:t.atalho?null:t.fim??null,ordem:r}))}}function eS(n,e){const t=n.dados,r=c=>typeof t[c]=="string"?t[c]:null,i=c=>typeof t[c]=="number"?t[c]:null,s=h_(t,jn().hoje()),o=(Array.isArray(t.janelas)?t.janelas:[]).sort((c,u)=>(c.ordem??0)-(u.ordem??0)).map((c,u)=>({id:$i(`${e}|janela|${u}`),atalho:c.atalho??null,inicio:c.inicio?.slice(0,5)??null,fim:c.fim?.slice(0,5)??null}));return{id:e,nome:n.nome,dificuldade:n.dificuldade,area:n.area,recorrencia:s,janelas:o,editadaEm:null,arquivadaEm:null,acumula:t.acumula===!0,permiteParcial:t.permiteParcial===!0,tipoTarefa:r("tipoTarefa")??"HABITO",passo:i("passo")??1,unidade:r("unidade"),dose:r("dose"),lembrete:t.lembrete===!0,antecedenciaMin:i("antecedenciaMin")??30}}function gS(n){const e=qe();return e?ur(Rr(lt(le,"grupos"),Zu("membros","array-contains",e.uid)),t=>n(t.docs.map(r=>Ur(r.id,r.data())).filter(r=>!!r).sort((r,i)=>r.inicio<i.inicio?1:-1)),()=>n([])):(n([]),()=>{})}function _S(n,e){const t=ve(le,"grupos",n);let r,i,s;const o=()=>{if(r===null)return e(null);if(!r||!i||!s)return;const f=s.map(m=>({membroId:m.membroId,lancamento:{id:m.id,ocorrenciaId:"",tarefaId:m.tarefaDoGrupoId,lado:m.lado,valor:m.valor,motivo:m.motivo,instante:m.instante,dia:m.dia,semana:r.fim,registradoEm:m.instante}}));e({grupo:r,tarefas:[...i].sort((m,g)=>m.nome.localeCompare(g.nome,"pt-BR")),duelo:dy(r.inicio,r.fim,jn().hoje(),f,r.membros),recentes:s.slice(0,30)})},c=ur(t,f=>{r=Ur(f.id,f.data()),o()},()=>e(null)),u=ur(lt(t,"tarefas"),f=>{i=f.docs.map(m=>v_(m.id,m.data())).filter(m=>!!m),o()},()=>{i=[],o()}),h=ur(Rr(lt(t,"lancamentos"),Cb("instante","desc")),f=>{s=f.docs.map(m=>Yb(m.id,m.data())).filter(m=>!!m),o()},()=>{s=[],o()});return()=>{c(),u(),h()}}function yS(n){const e=qe()?.email?.toLowerCase();return e?ur(Rr(lt(le,"convitesEmail"),Zu("email","==",e)),t=>n(t.docs.map(r=>({id:r.id,grupoId:r.data().grupoId,grupoNome:r.data().grupoNome??"",deNome:r.data().deNome??""})).filter(r=>!!r.grupoId)),()=>n([])):(n([]),()=>{})}const E_=(n,e,t)=>Gi(r=>{r.vinculos.push({tarefaId:n,grupoId:e,tarefaDoGrupoId:t,vinculadaEm:Ff.agora()})});async function tS(){for(let n=0;n<10;n++){const e=hy(t=>crypto.getRandomValues(new Uint32Array(1))[0]%t);if(!(await qi(ve(le,"convites",e))).exists())return e}throw new Error("sem código livre")}async function IS(n,e,t,r){const i=qe();if(!i)return{ok:!1,erro:"Entre na sua conta primeiro."};if(!n.trim())return{ok:!1,erro:"Dá um nome pro grupo."};try{const s=await tS(),o=jn().hoje(),c=Uf(),u={nome:n.trim().slice(0,40),objetivo:e.trim().slice(0,140),...t?{capa:t}:{},codigo:s,criadorUid:i.uid,membros:[i.uid],nomes:{[i.uid]:i.nome},inicio:o,fim:ly(o,r*7-1),criadoEm:Date.now()};return await Bn(ve(le,"grupos",c),u),await Bn(ve(le,"convites",s),{grupoId:c,criadorUid:i.uid}),{ok:!0,grupo:Ur(c,u)}}catch{return{ok:!1,erro:"Sem conexão? Não deu para criar o grupo agora."}}}async function vS(n,e,t,r){if(!e.trim())return!1;const i={nome:e.trim().slice(0,40),objetivo:t.trim().slice(0,140)};r===""?i.capa=Bb():r&&(i.capa=r);try{return await rl(ve(le,"grupos",n),i),!0}catch{return!1}}function ES(n,e){const t=qe();if(!t)throw new Error("Entre na sua conta primeiro.");const r=Uf(),i=f_(t.uid,n,r),s=Bf({...e,id:i,janelas:e.janelas.map((o,c)=>({...o,id:$i(`${i}|janela|${c}`)}))});return Bn(ve(le,"grupos",n,"tarefas",r),{...Zb(s),criadorUid:t.uid,criadoEm:Date.now()}).catch(()=>{}),E_(s.id,n,r),s}async function TS(n){try{const e=await qi(ve(le,"grupos",n));return typeof e.data()?.nome=="string"?e.data().nome:null}catch{return null}}async function wS(n){if(!qe())return{ok:!1,erro:"Entre na sua conta primeiro."};const e=uy(n);if(!e)return{ok:!1,erro:"O código tem 6 letras e números."};try{const r=(await qi(ve(le,"convites",e))).data()?.grupoId;if(typeof r!="string")return{ok:!1,erro:"Não achei grupo com esse código."};const i=await qi(ve(le,"grupos",r)),s=Ur(i.id,i.data());return s?{ok:!0,grupo:s}:{ok:!1,erro:"Não achei grupo com esse código."}}catch{return{ok:!1,erro:"Sem conexão? Não deu para procurar o código."}}}async function nS(n){const e=qe();if(!e)return{ok:!1,erro:"Entre na sua conta primeiro."};if(jn().hoje()>n.fim)return{ok:!1,erro:"Esse grupo já terminou."};try{return await rl(ve(le,"grupos",n.id),{membros:jb(e.uid),[`nomes.${e.uid}`]:e.nome}),await w_(n.id),{ok:!0,grupo:n}}catch{return{ok:!1,erro:"Sem conexão? Não deu para entrar no grupo agora."}}}async function AS(n){const e=qe();if(!e)return!1;try{return await rl(ve(le,"grupos",n),{membros:qb(e.uid)}),Gi(t=>{t.vinculos=t.vinculos.filter(r=>r.grupoId!==n)}),!0}catch{return!1}}async function bS(n,e){const t=qe();if(!t)return"Entre na sua conta primeiro.";const r=e.trim().toLowerCase();if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(r))return"Esse e-mail não parece certo.";if(r===t.email?.toLowerCase())return"Esse é o seu e-mail.";try{return await Bn(ve(le,"convitesEmail",`${n.id}_${r}`),{grupoId:n.id,grupoNome:n.nome,email:r,deUid:t.uid,deNome:t.nome,criadoEm:Date.now()}),null}catch{return"Não deu para mandar o convite (talvez já tenha sido convidado)."}}async function SS(n){let e;try{const r=await qi(ve(le,"grupos",n.grupoId));e=Ur(r.id,r.data())}catch{return{ok:!1,erro:"Sem conexão? Não deu para abrir o convite."}}if(!e)return await Of(n),{ok:!1,erro:"Esse grupo não existe mais."};const t=await nS(e);return(t.ok||jn().hoje()>e.fim)&&await Of(n),t}async function Of(n){await kb(ve(le,"convitesEmail",n.id)).catch(()=>{})}let xf=Promise.resolve();const T_=n=>{const e=xf.then(n);return xf=e.then(()=>{},()=>{}),e},w_=n=>T_(async()=>{const e=qe();if(!e)return;const t=new Set(Rn().vinculos.filter(i=>i.grupoId===n).map(i=>i.tarefaDoGrupoId)),r=await c_(lt(le,"grupos",n,"tarefas"));for(const i of r.docs){const s=v_(i.id,i.data());if(!s||t.has(s.id))continue;const o=f_(e.uid,n,s.id);fy(o)||Bf(eS(s,o)),E_(o,n,s.id)}}),rS=()=>T_(async()=>{const n=qe();if(!n)return;const e=Rn(),t=new Map(e.vinculos.map(s=>[s.tarefaId,s])),r=new Set(e.enviados),i=[];for(const s of e.lancamentos){if(r.has(s.id))continue;const o=t.get(s.tarefaId);o&&(i.push(s.id),!(s.registradoEm<o.vinculadaEm)&&Bn(ve(le,"grupos",o.grupoId,"lancamentos",`${n.uid}_${s.id}`),{membroId:n.uid,tarefaDoGrupoId:o.tarefaDoGrupoId,lado:s.lado,valor:s.valor,motivo:s.motivo,dia:s.dia,instante:s.instante}).catch(()=>{}))}i.length&&Gi(s=>{s.enviados.push(...i)})});async function A_(){const n=qe();if(n){try{const e=await c_(Rr(lt(le,"grupos"),Zu("membros","array-contains",n.uid))),t=jn().hoje();for(const r of e.docs){const i=Ur(r.id,r.data());i&&t<=i.fim&&await w_(i.id).catch(()=>{})}}catch{}await rS()}}export{SS as aceitarConvite,wS as buscarConvite,qe as contaAtual,cS as contaPronta,bS as convidarPorEmail,hS as criarConta,IS as criarGrupo,ES as criarTarefaNoGrupo,vS as editarGrupo,uS as entrar,lS as entrarComGoogle,nS as entrarNoGrupo,rS as enviarPendentes,dS as esqueciSenha,fS as mudarNome,pS as nomeDe,TS as nomeDoGrupo,aS as observarConta,yS as observarConvitesParaMim,gS as observarMeusGrupos,_S as observarPainel,oS as pessoal,Of as recusarConvite,mS as sair,AS as sairDoGrupo,A_ as sincronizar,w_ as sincronizarTarefas};
