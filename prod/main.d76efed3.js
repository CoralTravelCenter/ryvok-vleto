!function(e,t,r,n,o){var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof u[n]&&u[n],a=i.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function f(t,r){if(!a[t]){if(!e[t]){var o="function"==typeof u[n]&&u[n];if(!r&&o)return o(t,!0);if(i)return i(t,!0);if(c&&"string"==typeof t)return c(t);var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}d.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},d.cache={};var s=a[t]=new f.Module(t);e[t][0].call(s.exports,d,s,s.exports,this)}return a[t].exports;function d(e){var t=d.resolve(e);return!1===t?{}:f(t)}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=a,f.parent=i,f.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(f,"root",{get:function(){return u[n]}}),u[n]=f;for(var l=0;l<t.length;l++)f(t[l]);if(r){var s=f(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=s:"function"==typeof define&&define.amd&&define((function(){return s}))}}({THn4h:[function(e,t,r){var n=e("/site/common/js/utils.coffee");(0,n.fixLayout)(),(0,n.autoplayVimeo)()},{"/site/common/js/utils.coffee":"91zHa"}],"91zHa":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"ASAP",(function(){return c})),n.export(r,"preload",(function(){return f})),n.export(r,"queryParam",(function(){return l})),n.export(r,"arrayOfNodesWith",(function(){return s})),n.export(r,"debounce",(function(){return d})),n.export(r,"responsiveHandler",(function(){return p})),n.export(r,"autoplayVimeo",(function(){return h})),n.export(r,"watchIntersection",(function(){return m})),n.export(r,"fixLayout",(function(){return y}));var o,u,i=e("@swc/helpers/src/_object_spread.mjs"),a=n.interopDefault(i),c=(u=[],o=function(){var e,t;for(t=[];e=u.shift();)t.push(e());return t},document.addEventListener?(document.addEventListener("DOMContentLoaded",o,!1),window.addEventListener("load",o,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",o),window.attachEvent("onload",o)),function(e){if(u.push(e),"complete"===document.readyState)return o()}),f=function(e,t){return c((function(){var r;return Array.isArray(e)||(e=[e]),$.when.apply($,function(){var t,n,o;for(o=[],t=0,n=e.length;t<n;t++)r=e[t],o.push($.ajax(r,{dataType:"script",cache:!0}));return o}()).done((function(){return"function"==typeof t?t():void 0}))}))},l=function(e,t){var r,n,o;if(o=location.search.substr(1).split("&"),n={},o.forEach((function(e){var t;return t=e.split("="),n[t[0]]=t[1]||""})),e){if(t){for(r in n)if(r.toUpperCase()===e.toUpperCase())return decodeURIComponent(n[r]);return}return decodeURIComponent(n[e])}return n},s=function(e){var t;if(e.jquery)t=e.toArray();else if(e instanceof Array)t=Array.from(e);else if(e instanceof Node)t=[e];else if(e instanceof NodeList)t=Array.from(e);else{if("string"!=typeof e)throw"*** arrayOfNodesWith: Got something unusable as 'what' param";t=Array.from(document.querySelectorAll(e))}return t},d=function(e,t,r){var n;return n=null,function(){for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];var a,c;return c=this,a=function(){return r||e.apply(c,u),n=null},n?clearTimeout(n):r&&e.apply(c,u),n=setTimeout(a,t||40)}},p=function(e,t,r){var n;return(n=matchMedia(e)).addEventListener("change",(function(e){return e.matches?t():r()})),n.matches?t():r(),n},h=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".vimeo-video-box [data-vimeo-vid]",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data-vimeo-vid",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if((e=document.querySelectorAll(t)).length)return f("https://player.vimeo.com/api/player.js",(function(){var t,o,u,i,c;for(o=new IntersectionObserver((function(e,t){var n,o,u,i,a,c;for(a=[],o=0,u=e.length;o<u;o++)c=(i=(n=e[o]).target)["vimeo-player"],n.isIntersecting?c?a.push(c.play()):(c=new Vimeo.Player(i,{id:i.getAttribute(r),background:1,playsinline:1,autopause:0,title:0,byline:0,portrait:0}),i["vimeo-player"]=c,a.push(c.on("play",(function(){return this.element.parentElement.classList.add("playback")})))):a.push(null!=c?c.pause():void 0);return a}),(0,a.default)({threshold:.33},n)),i=[],t=0,u=e.length;t<u;t++)c=e[t],i.push(o.observe(c));return i}))},m=function(e,t,r,n){var o,u,i,c,f;for(u=new IntersectionObserver((function(e,t){var o,u,i,a;for(a=[],u=0,i=e.length;u<i;u++)(o=e[u]).isIntersecting?a.push(null!=r?r.call(o.target):void 0):a.push(null!=n?n.call(o.target):void 0);return a}),(0,a.default)({threshold:1},t)),o=0,i=(c=s(e)).length;o<i;o++)f=c[o],u.observe(f);return u},y=function(){return document.querySelector("section.underbrow")&&document.body.classList.add("underbrow"),c((function(){return document.querySelectorAll("section.hero").forEach((function(e){var t;return(t=e.closest(".widgetcontainer").classList).add("hero"),t.remove("oti-content-typography")}))}))}},{"@swc/helpers/src/_object_spread.mjs":"7lpuS","@parcel/transformer-js/src/esmodule-helpers.js":"bxLZB"}],"7lpuS":[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r);var o=e("./_define_property.mjs"),u=n.interopDefault(o);r.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){(0,u.default)(e,t,r[t])}))}return e}},{"./_define_property.mjs":"eN5Nt","@parcel/transformer-js/src/esmodule-helpers.js":"bxLZB"}],eN5Nt:[function(e,t,r){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(r),r.default=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},{"@parcel/transformer-js/src/esmodule-helpers.js":"bxLZB"}],bxLZB:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach((function(r){"default"===r||"__esModule"===r||t.hasOwnProperty(r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})})),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}]},["THn4h"],"THn4h","parcelRequire94c2");