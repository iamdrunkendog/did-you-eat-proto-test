if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-2fdebd44"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/1.d86dcb64.png",revision:"f621b61a939b283fcf7e4ce4364443a0"},{url:"assets/8.ec95ac59.png",revision:"0d3a97cda864b9ce04f08597f55030cc"},{url:"assets/apple.6ae72817.svg",revision:"d26cc692bf5bc793d0dead7da4e205b1"},{url:"assets/Framework7Icons-Regular.59a82bd9.woff",revision:"f95fa3fa73a2d4866c038124179ff649"},{url:"assets/Framework7Icons-Regular.f19b8090.woff2",revision:"cc68fd79e4340e4dabc7834c6f7f61fa"},{url:"assets/google.258d9e03.svg",revision:"63eb31530a0dafd3897e26e76513bb83"},{url:"assets/index.effec47a.css",revision:"8a5ddd52afb35afc83dfdf88cddac0d3"},{url:"assets/index.fbddc8dc.js",revision:"1c74c80ddbcb7cdebfb5c2e5b8d23fb3"},{url:"assets/man.b7fa4ead.png",revision:"b780361eb0c25490f0f5ade2df6d7dd3"},{url:"assets/material-icons.5a26885f.woff2",revision:"0946f68c6be4adad228907178fab8e87"},{url:"assets/material-icons.a4243731.woff",revision:"2a1494b179697e2788678dc0634efdad"},{url:"assets/together.9a4721e6.svg",revision:"f48e6e63cdd717f4cec819c826284706"},{url:"assets/vendor.31c1396a.js",revision:"dffa0d2b032767051e865daed627d0ca"},{url:"assets/vendor.63c88bc5.css",revision:"cea5acd111e734bb3464153e5e032aeb"},{url:"assets/woman.aca68e30.png",revision:"df887a53a99166ca9f6c58445b24009a"},{url:"icons/128x128.png",revision:"8d912a8eef03ff47d8445af8352ae7b6"},{url:"icons/144x144.png",revision:"b8b4fc97460d9003015f81bf310ca970"},{url:"icons/152x152.png",revision:"60dc9f5a055573a92261dde6aa9d961c"},{url:"icons/192x192.png",revision:"bba4caa6d45c5d03180483dde6383561"},{url:"icons/256x256.png",revision:"58d5a68a0ee8290c6920890b452e3e29"},{url:"icons/512x512.png",revision:"04fe50549959ed5eb3a613c318c61732"},{url:"icons/apple-touch-icon.png",revision:"9ef69baf1bad44cfc94d40837fc64ccf"},{url:"icons/favicon.png",revision:"8d912a8eef03ff47d8445af8352ae7b6"},{url:"index.html",revision:"d7367e25d8d9870c9a3b3193ed731a7e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
