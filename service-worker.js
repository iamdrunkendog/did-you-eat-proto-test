if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-2fdebd44"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/1.d86dcb64.png",revision:"f621b61a939b283fcf7e4ce4364443a0"},{url:"assets/2.83eb4fff.png",revision:"31709c82532f1644f8a4386871b02454"},{url:"assets/Framework7Icons-Regular.59a82bd9.woff",revision:"f95fa3fa73a2d4866c038124179ff649"},{url:"assets/Framework7Icons-Regular.f19b8090.woff2",revision:"cc68fd79e4340e4dabc7834c6f7f61fa"},{url:"assets/google.258d9e03.svg",revision:"63eb31530a0dafd3897e26e76513bb83"},{url:"assets/index.9ff7f710.css",revision:"16c5493786950594246bbfc4d0bd7eb0"},{url:"assets/index.aef1e68e.js",revision:"84eabd8df13b82d707cc44078063cced"},{url:"assets/man.b7fa4ead.png",revision:"b780361eb0c25490f0f5ade2df6d7dd3"},{url:"assets/material-icons.5a26885f.woff2",revision:"0946f68c6be4adad228907178fab8e87"},{url:"assets/material-icons.a4243731.woff",revision:"2a1494b179697e2788678dc0634efdad"},{url:"assets/together.9a4721e6.svg",revision:"f48e6e63cdd717f4cec819c826284706"},{url:"assets/vendor.63c88bc5.css",revision:"cea5acd111e734bb3464153e5e032aeb"},{url:"assets/vendor.e1203e7a.js",revision:"768c9ac211354a0ea9160d9494e5c800"},{url:"assets/woman.aca68e30.png",revision:"df887a53a99166ca9f6c58445b24009a"},{url:"icons/128x128.png",revision:"4e35a6dad5f1ab5b385f86dfe97579b8"},{url:"icons/144x144.png",revision:"47efa07843a29aff095e50015e084e85"},{url:"icons/152x152.png",revision:"ab189ff1c3604cbecd2ccc180b6f7c25"},{url:"icons/192x192.png",revision:"9ad7d46019f56396237834ced5038973"},{url:"icons/256x256.png",revision:"28969ffd71e59d0bb2ca642ac8bb0134"},{url:"icons/512x512.png",revision:"aa0c2f038e42624eb7ee396b272ee852"},{url:"icons/apple-touch-icon.png",revision:"4e94b1d1edaea36f052ec015c03ff26b"},{url:"icons/favicon.png",revision:"4e35a6dad5f1ab5b385f86dfe97579b8"},{url:"index.html",revision:"d37ce13ba12472523fed6fbaf89ea48f"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
