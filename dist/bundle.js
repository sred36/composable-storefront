/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={116:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(354),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([t.id,"body{font-size:1rem;font-family:'Roboto', sans-serif;color:#000}a{color:#000;text-decoration:none}img{max-width:100%;max-height:100%}ul{list-style:none;padding:0;margin:0}.flex{display:flex}.justify-align--center{justify-content:center}.justify-align--between{justify-content:space-between}.align-items--center{align-items:center}.text-align--center{text-align:center}.font-weight--extra-bold{font-weight:bolder}.font-size--extra-large{font-size:2.5rem}.fonts-size--x-small{font-size:0.875rem}.fonts-size--xx-small{font-size:0.75rem}.width--100{width:100%}.line-height--normal{line-height:21px}.product__navigation{padding:1.85rem 0.625rem 0.625rem 0.625rem}.product__search{position:relative;margin-bottom:0.625rem}.product__colors-section{padding-top:0.625rem}.product__colors-section li img.selected{border:1px solid red}.product__colors-section li{margin-right:5px}.product__colors-section img{border-radius:5px;border:1px solid transparent;cursor:pointer}.product__search--control{padding:0.625rem;color:#ccc;border-radius:5px;border:1px solid #ccc}.product__search--button{border:0 none;position:absolute;right:1rem;top:50%;transform:translate(-50%, -50%);padding:0}.product__image{margin-top:1.875rem}.product__details{padding-left:1.25rem;padding-right:1.25rem}.product__colors{padding-top:1.25rem}.product__description{padding-top:1rem}.product__seemore--gallary li{padding-right:0.5rem}.product__seemore--gallary li:last-child{padding-right:0}@media only screen and (min-width: 1024px){body{width:768px;margin:0 auto}}\n","",{version:3,sources:["webpack://./src/scss/global.scss"],names:[],mappings:"AAGG,KACK,cAAe,CACf,gCAAiC,CACjC,UANW,CAOd,EAEG,UATW,CAUX,oBAAqB,CACxB,IAEG,cAAe,CACf,eAAgB,CACnB,GAEG,eAAgB,CAChB,SAAU,CACV,QAAS,CACZ,MAEG,YAAa,CAChB,uBAEG,sBAAuB,CAC1B,wBAEG,6BAA8B,CACjC,qBAEG,kBAAmB,CACtB,oBAEG,iBAAkB,CACrB,yBAEG,kBAAmB,CACtB,wBAGG,gBAAiB,CACpB,qBAGG,kBAAmB,CACtB,sBAGG,iBAAkB,CACrB,YAEG,UACJ,CAAC,qBAEG,gBAAiB,CACpB,qBAGO,0CAA2C,CAC9C,iBAEG,iBAAkB,CAClB,sBAAuB,CAC1B,yBAEG,oBAAqB,CADxB,yCAGO,oBAnEH,CAgEJ,4BAMO,gBAAiB,CANxB,6BASO,iBAAkB,CAClB,4BAA6B,CAC7B,cAAe,CAClB,0BAGD,gBAAiB,CACjB,UA/ES,CAgFT,iBAAkB,CAClB,qBAjFS,CAkFZ,yBAEG,aAAc,CACd,iBAAkB,CAClB,UAAW,CACX,OAAQ,CACR,+BAA+B,CAC/B,SAAU,CACb,gBAEG,mBAAoB,CACvB,kBAEG,oBAAqB,CACrB,qBAAsB,CACzB,iBAEG,mBAAoB,CACvB,sBAEG,gBAAiB,CACpB,8BAGO,oBAAqB,CAF5B,yCAKO,eAAgB,CACnB,2CAKT,KACI,WAAY,CACZ,aAAc,CACjB",sourcesContent:["    $black: #000000;\n    $red: red;\n    $whiteace:#cccccc;\n   body {\n        font-size: 1rem;\n        font-family: 'Roboto', sans-serif;\n        color: $black;\n    }\n    a {\n        color: $black;\n        text-decoration: none;\n    }\n    img {\n        max-width: 100%;\n        max-height: 100%;\n    }\n    ul {\n        list-style: none;\n        padding: 0;\n        margin: 0; \n    }\n    .flex {\n        display: flex;\n    }\n    .justify-align--center {\n        justify-content: center;\n    }\n    .justify-align--between {\n        justify-content: space-between;\n    }\n    .align-items--center {\n        align-items: center;\n    }\n    .text-align--center {\n        text-align: center;\n    }\n    .font-weight--extra-bold {\n        font-weight: bolder;\n    }\n    \n    .font-size--extra-large {\n        font-size: 2.5rem;\n    }\n    \n    .fonts-size--x-small {\n        font-size: 0.875rem;\n    }\n    \n    .fonts-size--xx-small {\n        font-size: 0.75rem;\n    }\n    .width--100 {\n        width: 100%\n    }\n    .line-height--normal {\n        line-height: 21px;\n    }\n    .product {\n        &__navigation {\n            padding: 1.85rem 0.625rem 0.625rem 0.625rem; \n        }\n        &__search {\n            position: relative;\n            margin-bottom: 0.625rem;\n        }\n        &__colors-section {\n            padding-top: 0.625rem; \n            li img.selected {\n                border: 1px solid $red;\n            }\n            li {\n                margin-right: 5px;\n            }\n            img {\n                border-radius: 5px;\n                border: 1px solid transparent;\n                cursor: pointer;\n            }\n        }\n        &__search--control {\n            padding: 0.625rem;\n            color: $whiteace;\n            border-radius: 5px;\n            border: 1px solid $whiteace;\n        }\n        &__search--button {\n            border: 0 none;\n            position: absolute;\n            right: 1rem;\n            top: 50%;\n            transform: translate(-50%,-50%);\n            padding: 0;\n        }\n        &__image {\n            margin-top: 1.875rem;\n        }\n        &__details {\n            padding-left: 1.25rem;\n            padding-right: 1.25rem;\n        }\n        &__colors {\n            padding-top: 1.25rem;\n        }\n        &__description {\n            padding-top: 1rem;\n        }\n        &__seemore--gallary {\n            li {\n                padding-right: 0.5rem;\n            }\n            li:last-child {\n                padding-right: 0;\n            }\n        } \n    }\n\n@media only screen and (min-width: 1024px) {\n    body {\n        width: 768px;\n        margin: 0 auto;\n    }\n}"],sourceRoot:""}]);const c=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},354:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=r(t,o),u=0;u<i.length;u++){var l=n(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r=n(72),o=n.n(r),i=n(825),a=n.n(i),c=n(659),s=n.n(c),u=n(56),l=n.n(u),d=n(540),p=n.n(d),f=n(113),h=n.n(f),m=n(116),A={};function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function y(){y=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new S(r||[]);return o(a,"_invoke",{value:j(t,n,c)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",f="suspendedYield",h="executing",m="completed",A={};function v(){}function C(){}function B(){}var b={};u(b,a,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(T([])));w&&w!==n&&r.call(w,a)&&(b=w);var _=B.prototype=v.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function G(t,e){function n(o,i,a,c){var s=d(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==g(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function j(e,n,r){var o=p;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=L(c,r);if(s){if(s===A)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var u=d(e,n,r);if("normal"===u.type){if(o=r.done?m:f,u.arg===A)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=m,r.method="throw",r.arg=u.arg)}}}function L(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),A;var i=d(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,A;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,A):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,A)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(g(e)+" is not iterable")}return C.prototype=B,o(_,"constructor",{value:B,configurable:!0}),o(B,"constructor",{value:C,configurable:!0}),C.displayName=u(B,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,B):(t.__proto__=B,u(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(G.prototype),u(G.prototype,c,(function(){return this})),e.AsyncIterator=G,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new G(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(_),u(_,s,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=T,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,A):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),A},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),A}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),A}},e}function v(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}A.styleTagTransform=h(),A.setAttributes=l(),A.insert=s().bind(null,"head"),A.domAPI=a(),A.insertStyleElement=p(),o()(m.A,A),m.A&&m.A.locals&&m.A.locals;var C=[],B={},b=function(t){B.productImage.attr("src",t.img),B.productTitle.text(t.title),B.productPrice.text(t.price),B.productAvailableSize.text(t.sizes),B.productDesc.text(t.desc)},x=function(){var t,e=(t=y().mark((function t(){var e,n;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://raw.githubusercontent.com/sred36/composable-storefront/master/products.json");case 3:if((e=t.sent).ok){t.next=6;break}throw new Error("HTTP error! status: ".concat(e.status));case 6:return t.next=8,e.json();case 8:n=t.sent,C=n.products,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error("Error fetching product data:",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){v(i,r,o,a,c,"next",t)}function c(t){v(i,r,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();$(document).ready((function(){x(),B.document=$(document),B.color=$(".product__colors-section li"),B.swatchImage=B.color.find("img"),B.productDetails=$(".product__details"),B.productImage=$(".product__image img"),B.productTitle=B.productDetails.find(".product__title"),B.productPrice=B.productDetails.find(".price"),B.productAvailableSize=B.productDetails.find(".product__availability"),B.productDesc=B.productDetails.find(".product__description--content"),B.swatchImage.on("click",(function(t){t.preventDefault();var e=$(t.target).data("source");B.swatchImage.removeClass("selected"),$(t.target).addClass("selected"),e&&function(t){var e=C.find((function(e){return e.img===t}));e&&b(e)}(e)}))}))})();
//# sourceMappingURL=bundle.js.map