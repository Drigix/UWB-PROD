(()=>{"use strict";var e,v={},m={};function a(e){var n=m[e];if(void 0!==n)return n.exports;var r=m[e]={id:e,loaded:!1,exports:{}};return v[e].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=v,e=[],a.O=(n,r,i,d)=>{if(!r){var t=1/0;for(f=0;f<e.length;f++){for(var[r,i,d]=e[f],u=!0,c=0;c<r.length;c++)(!1&d||t>=d)&&Object.keys(a.O).every(p=>a.O[p](r[c]))?r.splice(c--,1):(u=!1,d<t&&(t=d));if(u){e.splice(f--,1);var l=i();void 0!==l&&(n=l)}}return n}d=d||0;for(var f=e.length;f>0&&e[f-1][2]>d;f--)e[f]=e[f-1];e[f]=[r,i,d]},a.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return a.d(n,{a:n}),n},a.d=(e,n)=>{for(var r in n)a.o(n,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((n,r)=>(a.f[r](e,n),n),[])),a.u=e=>(592===e?"common":e)+"."+{10:"245277073fb9e2e5",48:"125647f06e8dc50d",62:"458c5b8a1b84f140",112:"da20f05360a5819e",119:"cfd872d441c9a1ef",205:"5d7330553128bece",231:"b518748f55d41c1f",251:"54aaa7e71c4444f3",252:"1fcc98dcbe08b242",432:"1512f52c6f095995",494:"a3b4bc7f94e695e0",518:"b87bfcc95176ad20",521:"ab6e15f750c53f65",592:"6e1043dcfdfac4c0",632:"07ac001178d57320",730:"5e2960691674e9b5",753:"673d155f8a2a6089",779:"9b70e93f3ce13b23",879:"10940e58a33ea3a4"}[e]+".js",a.miniCssF=e=>{},a.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="uwb-client-app:";a.l=(r,i,d,f)=>{if(e[r])e[r].push(i);else{var t,u;if(void 0!==d)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var o=c[l];if(o.getAttribute("src")==r||o.getAttribute("data-webpack")==n+d){t=o;break}}t||(u=!0,(t=document.createElement("script")).type="module",t.charset="utf-8",t.timeout=120,a.nc&&t.setAttribute("nonce",a.nc),t.setAttribute("data-webpack",n+d),t.src=a.tu(r)),e[r]=[i];var s=(_,p)=>{t.onerror=t.onload=null,clearTimeout(b);var g=e[r];if(delete e[r],t.parentNode&&t.parentNode.removeChild(t),g&&g.forEach(h=>h(p)),_)return _(p)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),u&&document.head.appendChild(t)}}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={666:0};a.f.j=(i,d)=>{var f=a.o(e,i)?e[i]:void 0;if(0!==f)if(f)d.push(f[2]);else if(666!=i){var t=new Promise((o,s)=>f=e[i]=[o,s]);d.push(f[2]=t);var u=a.p+a.u(i),c=new Error;a.l(u,o=>{if(a.o(e,i)&&(0!==(f=e[i])&&(e[i]=void 0),f)){var s=o&&("load"===o.type?"missing":o.type),b=o&&o.target&&o.target.src;c.message="Loading chunk "+i+" failed.\n("+s+": "+b+")",c.name="ChunkLoadError",c.type=s,c.request=b,f[1](c)}},"chunk-"+i,i)}else e[i]=0},a.O.j=i=>0===e[i];var n=(i,d)=>{var c,l,[f,t,u]=d,o=0;if(f.some(b=>0!==e[b])){for(c in t)a.o(t,c)&&(a.m[c]=t[c]);if(u)var s=u(a)}for(i&&i(d);o<f.length;o++)a.o(e,l=f[o])&&e[l]&&e[l][0](),e[l]=0;return a.O(s)},r=self.webpackChunkuwb_client_app=self.webpackChunkuwb_client_app||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})()})();