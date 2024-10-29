(()=>{"use strict";var e={116:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(601),o=r.n(n),i=r(314),a=r.n(i)()(o());a.push([e.id,"body{font-size:1rem;font-family:'Roboto', sans-serif;color:#000}a{color:#000;text-decoration:none}img{max-width:100%;max-height:100%}ul{list-style:none;padding:0;margin:0}.flex{display:flex}.justify-align--center{justify-content:center}.justify-align--between{justify-content:space-between}.align-items--center{align-items:center}.text-align--center{text-align:center}.font-weight--extra-bold{font-weight:bolder}.font-size--extra-large{font-size:2.5rem}.fonts-size--x-small{font-size:0.875rem}.fonts-size--xx-small{font-size:0.75rem}.width--100{width:100%}.line-height--normal{line-height:21px}.product__navigation{padding:1.85rem 0.625rem 0.625rem 0.625rem}.product__search{position:relative;margin-bottom:0.625rem}.product__colors-section{padding-top:0.625rem}.product__colors-section li img.selected{border:1px solid red}.product__colors-section li{margin-right:5px}.product__colors-section img{border-radius:5px;border:1px solid transparent;cursor:pointer}.product__search--control{padding:0.625rem;color:#ccc;border-radius:5px;border:1px solid #ccc}.product__search--button{border:0 none;position:absolute;right:1rem;top:50%;transform:translate(-50%, -50%);padding:0}.product__image{margin-top:1.875rem}.product__details{padding-left:1.25rem;padding-right:1.25rem}.product__colors{padding-top:1.25rem}.product__description{padding-top:1rem}.product__seemore--gallary li{padding-right:0.5rem}.product__seemore--gallary li:last-child{padding-right:0}@media only screen and (min-width: 1024px){body{width:768px;margin:0 auto}}\n",""]);const c=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=n.base?s[0]+n.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=r(i[a]);t[c].references--}for(var s=n(e,o),d=0;d<i.length;d++){var l=r(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var n=r(72),o=r.n(n),i=r(825),a=r.n(i),c=r(659),s=r.n(c),d=r(56),l=r.n(d),p=r(540),u=r.n(p),f=r(113),m=r.n(f),g=r(116),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),o()(g.A,h),g.A&&g.A.locals&&g.A.locals;var v=[{img:"./images/1.png",title:"Twon headd",price:"AED: 300",sizes:"Available Sizes: S M",desc:"Calendula Herbal Extract Alcohol-Free Toner"},{img:"./images/6.png",title:"Bangalore tshirt",price:"AED: 400",sizes:"Available Sizes: L XL",desc:"-Moisten a sterile cotton pad with facial toner, and apply to skin in areas where needed, avoiding the eye area"},{img:"./images/2.png",title:"Candian tshirt",price:"AED: 500",sizes:"Available Sizes: S M XL XXL",desc:"Contains no alcohol or harsh synthetic drying agent"},{img:"./images/4.png",title:"Leather Hoodie",price:"AED: 600",sizes:"Available Sizes: L XL",desc:"The calendula petals in our unique formula are still inserted by hand in the Kiehl’s apothecary tradition"}],y={},b=function(e){y.productImage.attr("src",e.img),y.productTitle.text(e.title),y.productPrice.text(e.price),y.productAvailableSize.text(e.sizes),y.productDesc.text(e.desc)};$(document).ready((function(){y.document=$(document),y.color=$(".product__colors-section li"),y.swatchImage=y.color.find("img"),y.productDetails=$(".product__details"),y.productImage=$(".product__image img"),y.productTitle=y.productDetails.find(".product__title"),y.productPrice=y.productDetails.find(".price"),y.productAvailableSize=y.productDetails.find(".product__availability"),y.productDesc=y.productDetails.find(".product__description--content"),y.swatchImage.on("click",(function(e){e.preventDefault();var t=$(e.target).data("source");y.swatchImage.removeClass("selected"),$(e.target).addClass("selected"),t&&function(e){var t=v.find((function(t){return t.img===e}));t&&b(t)}(t)}))}))})();