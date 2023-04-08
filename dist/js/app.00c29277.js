(function(){"use strict";var t={5091:function(t,e,n){var r=n(9242),o=n(3396),i=n(7139),u=n(4870),a=n(9433);const c=t=>((0,o.dD)("data-v-07fd7f98"),t=t(),(0,o.Cn)(),t),s={class:"header"},f={class:"header__container"},d={class:"header__menu"},l=c((()=>(0,o._)("img",{src:"/icon/cart.svg",class:"cart__image",alt:""},null,-1))),p={class:"cart__count"};var h=(0,o.aZ)({__name:"App",setup(t){const e=(0,a.x)();return(t,n)=>{const r=(0,o.up)("router-link"),a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",s,[(0,o._)("div",f,[(0,o._)("div",d,[(0,o.Wm)(r,{to:"/",class:"header__logo"},{default:(0,o.w5)((()=>[(0,o.Uk)("Shop")])),_:1}),(0,o.Wm)(r,{to:"/cart",class:"header__cart cart"},{default:(0,o.w5)((()=>[l,(0,o._)("div",p,(0,i.zw)((0,u.SU)(e).totalQuantity),1)])),_:1})])])]),(0,o.Wm)(a)],64)}}}),v=n(89);const m=(0,v.Z)(h,[["__scopeId","data-v-07fd7f98"]]);var g=m,y=n(2483);const b=[{path:"/",name:"home",component:()=>n.e(849).then(n.bind(n,3849))},{path:"/cart",name:"cart",component:()=>n.e(836).then(n.bind(n,5836))}],_=(0,y.p7)({history:(0,y.PO)("/"),routes:b});var w=_,O=n(1020);const k=(0,O.WB)();k.use((({store:t})=>{t.$router=(0,u.Xl)(w)}));n(2166);(0,r.ri)(g).use(k).use(w).mount("#app")},9433:function(t,e,n){n.d(e,{x:function(){return o}});n(7658);var r=n(1020);const o=(0,r.Q_)({id:"cart",state:()=>({products:JSON.parse(localStorage.getItem("cart")||"[]")}),actions:{addProduct(t){localStorage.setItem("cart",JSON.stringify(this.products));const e=this.products.findIndex((e=>e.id===t));-1!==e?this.products[e].quantity++:this.products.push({id:t,quantity:1})}},getters:{totalQuantity(){return this.products.reduce(((t,e)=>t+e.quantity),0)}}})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var u=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],i=t[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){t.splice(f--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{836:"1ca863cb",849:"1eaddf8c"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{836:"1608a1a0",849:"57b298ca"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="frontend-test:";n.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[o];var l=function(e,n){a.onerror=a.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(e(u,a))return o();t(r,a,null,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={836:1,849:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(e),a=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],s=0;if(u.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var f=c(n)}for(e&&e(r);s<u.length;s++)i=u[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},r=self["webpackChunkfrontend_test"]=self["webpackChunkfrontend_test"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5091)}));r=n.O(r)})();
//# sourceMappingURL=app.00c29277.js.map