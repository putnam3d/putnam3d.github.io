import{r as i}from"./index.Dy6lLLXr.js";var u={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function y(){if(x)return d;x=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function a(o,s,n){var l=null;if(n!==void 0&&(l=""+n),s.key!==void 0&&(l=""+s.key),"key"in s){n={};for(var c in s)c!=="key"&&(n[c]=s[c])}else n=s;return s=n.ref,{$$typeof:r,type:o,key:l,ref:s!==void 0?s:null,props:n}}return d.Fragment=t,d.jsx=a,d.jsxs=a,d}var h;function k(){return h||(h=1,u.exports=y()),u.exports}var e=k();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m=(...r)=>r.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=i.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:o,className:s="",children:n,iconNode:l,...c},f)=>i.createElement("svg",{ref:f,...b,width:t,height:t,stroke:r,strokeWidth:o?Number(a)*24/Number(t):a,className:m("lucide",s),...c},[...l.map(([p,j])=>i.createElement(p,j)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(r,t)=>{const a=i.forwardRef(({className:o,...s},n)=>i.createElement(R,{ref:n,iconNode:t,className:m(`lucide-${N(r)}`,o),...s}));return a.displayName=`${r}`,a};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],E=v("Menu",w);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],C=v("X",_),g=()=>{const[r,t]=i.useState(!1);return e.jsxs("header",{className:"bg-navbar-primary text-navbar-secondary p-4 shadow-md",children:[e.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[e.jsx("a",{href:"/",className:"text-2xl font-bold",children:e.jsx("img",{src:"/assets/identity/UniteByte_Logo.jpg",width:"50%"})}),e.jsxs("nav",{className:"hidden md:flex gap-6",children:[e.jsx("a",{href:"/",className:"hover:underline",children:"Home"}),e.jsx("a",{href:"/services",className:"hover:underline",children:"Services"}),e.jsx("a",{href:"/about",className:"hover:underline",children:"About"}),e.jsx("a",{href:"/contact",className:"hover:underline",children:"Contact"})]}),e.jsx("button",{className:"md:hidden",onClick:()=>t(!r),children:r?e.jsx(C,{size:24}):e.jsx(E,{size:24})})]}),r&&e.jsxs("nav",{className:"md:hidden mt-2 flex flex-col bg-blue-700 p-4",children:[e.jsx("a",{href:"/",className:"py-2 hover:underline",children:"Home"}),e.jsx("a",{href:"/services",className:"py-2 hover:underline",children:"Services"}),e.jsx("a",{href:"/about",className:"py-2 hover:underline",children:"About"}),e.jsx("a",{href:"/contact",className:"py-2 hover:underline",children:"Contact"})]})]})};export{g as default};
