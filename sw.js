if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const o=e=>n(e,c),f={module:{uri:c},exports:r,require:o};i[c]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(a(...e),r)))}}define(["./workbox-5c23bb42"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-1325a157.js",revision:null},{url:"assets/index-a4163ee8.css",revision:null},{url:"index.html",revision:"06c09b33539786203a93361f5201f36a"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"android-chrome-192x192.png",revision:"3a3f3b6cc5be8c0b8eab45560ae70299"},{url:"android-chrome-512x512.png",revision:"a904f0f11c7e71eec6fa08f54eb40ab7"},{url:"apple-touch-icon.png",revision:"fb6be6423a72deba5b243e6babd8d5df"},{url:"favicon-32x32.png",revision:"16cd26f1abc8ead5a385f8f013f4c6af"},{url:"favicon.ico",revision:"b5929e1751204f3f2010a54c8ec7c6c8"},{url:"robots.txt",revision:"50d8a018e8ae96732c8a2ba663c61d4e"},{url:"whatsapp.png",revision:"60d623e8ce18ea2b25e468f725ff8827"},{url:"public/Davids_logo.png",revision:"16640547881a2778e028d89331213da5"},{url:"public/Email.png",revision:"6966069c2bb70980e5744aba9070a5ba"},{url:"public/Facebook.png",revision:"01765fcf6e48d7209c85f6d82f4fd798"},{url:"public/phone.png",revision:"0436b20ca904dc8cccdbabdbbb6eeeae"},{url:"public/place.png",revision:"4a04d8fe96426f76a4f18fb9cd455625"},{url:"public/whatsapp.png",revision:"60d623e8ce18ea2b25e468f725ff8827"},{url:"manifest.webmanifest",revision:"b91cef4a03fae5990b0f0af9adf0101a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:css|js|html)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[]}),"GET")}));