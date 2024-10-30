/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={116:(t,r,e)=>{e.d(r,{A:()=>c});var n=e(354),o=e.n(n),i=e(314),a=e.n(i)()(o());a.push([t.id,"body{font-size:1rem;font-family:'Roboto', sans-serif;color:#000}a{color:#000;text-decoration:none}img{max-width:100%;max-height:100%}ul{list-style:none;padding:0;margin:0}.flex{display:flex}.justify-align--center{justify-content:center}.justify-align--between{justify-content:space-between}.align-items--center{align-items:center}.text-align--center{text-align:center}.font-weight--extra-bold{font-weight:bolder}.font-size--extra-large{font-size:2.5rem}.fonts-size--x-small{font-size:0.875rem}.fonts-size--xx-small{font-size:0.75rem}.width--100{width:100%}.line-height--normal{line-height:21px}.product__navigation{padding:1.85rem 0.625rem 0.625rem 0.625rem}.product__search{position:relative;margin-bottom:0.625rem}.product__colors-section{padding-top:0.625rem}.product__colors-section li img.selected{border:1px solid red}.product__colors-section li{margin-right:5px}.product__colors-section img{border-radius:5px;border:1px solid transparent;cursor:pointer}.product__search--control{padding:0.625rem;color:#ccc;border-radius:5px;border:1px solid #ccc}.product__search--button{border:0 none;position:absolute;right:1rem;top:50%;transform:translate(-50%, -50%);padding:0}.product__image{margin-top:1.875rem}.product__details{padding-left:1.25rem;padding-right:1.25rem}.product__colors{padding-top:1.25rem}.product__description{padding-top:1rem}.product__seemore--gallary li{padding-right:0.5rem}.product__seemore--gallary li:last-child{padding-right:0}@media only screen and (min-width: 1024px){body{width:768px;margin:0 auto}}\n","",{version:3,sources:["webpack://./src/scss/global.scss"],names:[],mappings:"AAGG,KACK,cAAe,CACf,gCAAiC,CACjC,UANW,CAOd,EAEG,UATW,CAUX,oBAAqB,CACxB,IAEG,cAAe,CACf,eAAgB,CACnB,GAEG,eAAgB,CAChB,SAAU,CACV,QAAS,CACZ,MAEG,YAAa,CAChB,uBAEG,sBAAuB,CAC1B,wBAEG,6BAA8B,CACjC,qBAEG,kBAAmB,CACtB,oBAEG,iBAAkB,CACrB,yBAEG,kBAAmB,CACtB,wBAGG,gBAAiB,CACpB,qBAGG,kBAAmB,CACtB,sBAGG,iBAAkB,CACrB,YAEG,UACJ,CAAC,qBAEG,gBAAiB,CACpB,qBAGO,0CAA2C,CAC9C,iBAEG,iBAAkB,CAClB,sBAAuB,CAC1B,yBAEG,oBAAqB,CADxB,yCAGO,oBAnEH,CAgEJ,4BAMO,gBAAiB,CANxB,6BASO,iBAAkB,CAClB,4BAA6B,CAC7B,cAAe,CAClB,0BAGD,gBAAiB,CACjB,UA/ES,CAgFT,iBAAkB,CAClB,qBAjFS,CAkFZ,yBAEG,aAAc,CACd,iBAAkB,CAClB,UAAW,CACX,OAAQ,CACR,+BAA+B,CAC/B,SAAU,CACb,gBAEG,mBAAoB,CACvB,kBAEG,oBAAqB,CACrB,qBAAsB,CACzB,iBAEG,mBAAoB,CACvB,sBAEG,gBAAiB,CACpB,8BAGO,oBAAqB,CAF5B,yCAKO,eAAgB,CACnB,2CAKT,KACI,WAAY,CACZ,aAAc,CACjB",sourcesContent:["    $black: #000000;\r\n    $red: red;\r\n    $whiteace:#cccccc;\r\n   body {\r\n        font-size: 1rem;\r\n        font-family: 'Roboto', sans-serif;\r\n        color: $black;\r\n    }\r\n    a {\r\n        color: $black;\r\n        text-decoration: none;\r\n    }\r\n    img {\r\n        max-width: 100%;\r\n        max-height: 100%;\r\n    }\r\n    ul {\r\n        list-style: none;\r\n        padding: 0;\r\n        margin: 0; \r\n    }\r\n    .flex {\r\n        display: flex;\r\n    }\r\n    .justify-align--center {\r\n        justify-content: center;\r\n    }\r\n    .justify-align--between {\r\n        justify-content: space-between;\r\n    }\r\n    .align-items--center {\r\n        align-items: center;\r\n    }\r\n    .text-align--center {\r\n        text-align: center;\r\n    }\r\n    .font-weight--extra-bold {\r\n        font-weight: bolder;\r\n    }\r\n    \r\n    .font-size--extra-large {\r\n        font-size: 2.5rem;\r\n    }\r\n    \r\n    .fonts-size--x-small {\r\n        font-size: 0.875rem;\r\n    }\r\n    \r\n    .fonts-size--xx-small {\r\n        font-size: 0.75rem;\r\n    }\r\n    .width--100 {\r\n        width: 100%\r\n    }\r\n    .line-height--normal {\r\n        line-height: 21px;\r\n    }\r\n    .product {\r\n        &__navigation {\r\n            padding: 1.85rem 0.625rem 0.625rem 0.625rem; \r\n        }\r\n        &__search {\r\n            position: relative;\r\n            margin-bottom: 0.625rem;\r\n        }\r\n        &__colors-section {\r\n            padding-top: 0.625rem; \r\n            li img.selected {\r\n                border: 1px solid $red;\r\n            }\r\n            li {\r\n                margin-right: 5px;\r\n            }\r\n            img {\r\n                border-radius: 5px;\r\n                border: 1px solid transparent;\r\n                cursor: pointer;\r\n            }\r\n        }\r\n        &__search--control {\r\n            padding: 0.625rem;\r\n            color: $whiteace;\r\n            border-radius: 5px;\r\n            border: 1px solid $whiteace;\r\n        }\r\n        &__search--button {\r\n            border: 0 none;\r\n            position: absolute;\r\n            right: 1rem;\r\n            top: 50%;\r\n            transform: translate(-50%,-50%);\r\n            padding: 0;\r\n        }\r\n        &__image {\r\n            margin-top: 1.875rem;\r\n        }\r\n        &__details {\r\n            padding-left: 1.25rem;\r\n            padding-right: 1.25rem;\r\n        }\r\n        &__colors {\r\n            padding-top: 1.25rem;\r\n        }\r\n        &__description {\r\n            padding-top: 1rem;\r\n        }\r\n        &__seemore--gallary {\r\n            li {\r\n                padding-right: 0.5rem;\r\n            }\r\n            li:last-child {\r\n                padding-right: 0;\r\n            }\r\n        } \r\n    }\r\n\r\n@media only screen and (min-width: 1024px) {\r\n    body {\r\n        width: 768px;\r\n        margin: 0 auto;\r\n    }\r\n}"],sourceRoot:""}]);const c=a},314:t=>{t.exports=function(t){var r=[];return r.toString=function(){return this.map((function(r){var e="",n=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),n&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=t(r),n&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(t,e,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},354:t=>{t.exports=function(t){var r=t[1],e=t[3];if(!e)return r;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},72:t=>{var r=[];function e(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function n(t,n){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],u=n.base?s[0]+n.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var h=o(f,n);n.byIndex=c,r.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(t,r){var e=r.domAPI(r);return e.update(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap&&r.supports===t.supports&&r.layer===t.layer)return;e.update(t=r)}else e.remove()}}t.exports=function(t,o){var i=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=n(t,o),u=0;u<i.length;u++){var l=e(i[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=s}}},659:t=>{var r={};t.exports=function(t,e){var n=function(t){if(void 0===r[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}r[t]=e}return r[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(e)}},540:t=>{t.exports=function(t){var r=document.createElement("style");return t.setAttributes(r,t.attributes),t.insert(r,t.options),r}},56:(t,r,e)=>{t.exports=function(t){var r=e.nc;r&&t.setAttribute("nonce",r)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=t.insertStyleElement(t);return{update:function(e){!function(t,r,e){var n="";e.supports&&(n+="@supports (".concat(e.supports,") {")),e.media&&(n+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(n+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),n+=e.css,o&&(n+="}"),e.media&&(n+="}"),e.supports&&(n+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(n,t,r.options)}(r,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)}}}},113:t=>{t.exports=function(t,r){if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={id:n,exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.nc=void 0;var n=e(72),o=e.n(n),i=e(825),a=e.n(i),c=e(659),s=e.n(c),u=e(56),l=e.n(u),d=e(540),p=e.n(d),f=e(113),h=e.n(f),m=e(116),A={};function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function y(){y=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof v?r:v,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:j(t,e,c)}),a}function d(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",f="suspendedYield",h="executing",m="completed",A={};function v(){}function C(){}function B(){}var b={};u(b,a,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(T([])));w&&w!==e&&n.call(w,a)&&(b=w);var _=B.prototype=v.prototype=Object.create(b);function E(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function G(t,r){function e(o,i,a,c){var s=d(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==g(l)&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function j(r,e,n){var o=p;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=L(c,n);if(s){if(s===A)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var u=d(r,e,n);if("normal"===u.type){if(o=n.done?m:f,u.arg===A)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function L(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,L(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),A;var i=d(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,A;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,A):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,A)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function T(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(g(r)+" is not iterable")}return C.prototype=B,o(_,"constructor",{value:B,configurable:!0}),o(B,"constructor",{value:C,configurable:!0}),C.displayName=u(B,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===C||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,B):(t.__proto__=B,u(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},r.awrap=function(t){return{__await:t}},E(G.prototype),u(G.prototype,c,(function(){return this})),r.AsyncIterator=G,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new G(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(_),u(_,s,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=T,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,A):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),A},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),A}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:T(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),A}},r}function v(t,r,e,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?r(s):Promise.resolve(s).then(n,o)}A.styleTagTransform=h(),A.setAttributes=l(),A.insert=s().bind(null,"head"),A.domAPI=a(),A.insertStyleElement=p(),o()(m.A,A),m.A&&m.A.locals&&m.A.locals;var C=[],B={},b=function(t){B.productImage.attr("src",t.img),B.productTitle.text(t.title),B.productPrice.text(t.price),B.productAvailableSize.text(t.sizes),B.productDesc.text(t.desc)},x=function(){var t,r=(t=y().mark((function t(){var r,e;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://raw.githubusercontent.com/sred36/composable-storefront/master/products.json");case 3:if((r=t.sent).ok){t.next=6;break}throw new Error("HTTP error! status: ".concat(r.status));case 6:return t.next=8,r.json();case 8:e=t.sent,C=e.products,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.error("Error fetching product data:",t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})),function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return r.apply(this,arguments)}}();$(document).ready((function(){x(),B.document=$(document),B.color=$(".product__colors-section li"),B.swatchImage=B.color.find("img"),B.productDetails=$(".product__details"),B.productImage=$(".product__image img"),B.productTitle=B.productDetails.find(".product__title"),B.productPrice=B.productDetails.find(".price"),B.productAvailableSize=B.productDetails.find(".product__availability"),B.productDesc=B.productDetails.find(".product__description--content"),B.swatchImage.on("click",(function(t){t.preventDefault();var r=$(t.target).data("source");B.swatchImage.removeClass("selected"),$(t.target).addClass("selected"),r&&function(t){var r=C.find((function(r){return r.img===t}));r&&b(r)}(r)}))}))})();
//# sourceMappingURL=bundle.js.map