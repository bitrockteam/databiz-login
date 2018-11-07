!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=8)}([function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(i),r=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[t].concat(r).concat([o]).join("\n")}return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&i[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="("+s[2]+") and ("+t+")"),n.push(s))}},n}},function(e){e.exports={name:"@databiz/login",version:"2.0.0",main:"src/components/databiz.login.js",displayName:"databiz-login",config:{themeColor:"#e74e0f"},description:"Web Component to simplify authentication using Google oAuth for Databiz group domains.",repository:"git@github.com:bitrockteam/databiz-login.git",author:"Salvatore Laisa <salvatore.laisa@bitrock.it>",license:"MIT",scripts:{start:"NODE_ENV=development webpack-dev-server --hot --config ./webpack.demo.js",build:"NODE_ENV=production webpack",demo:"NODE_ENV=production webpack --config ./webpack.demo.js",deploy:"NODE_ENV=production npm run demo && gh-pages -d dist","test:unit":"NODE_ENV=test ava ./test/index.js --verbose",test:"npm run test:unit"},devDependencies:{"@types/node":"10.12.2",ava:"0.25.0","css-loader":"1.0.1",cypress:"3.1.1","dotenv-webpack":"1.5.7",esm:"3.0.84","favicons-webpack-plugin":"0.0.9","gh-pages":"2.0.1","html-webpack-plugin":"3.2.0",jsdom:"11.11.0","lit-html":"0.12.0","normalize.css":"8.0.0","style-loader":"0.23.1","ts-loader":"5.3.0","ts-node":"7.0.1","typebase.css":"0.5.0",typescript:"3.1.6","typescript-require":"0.2.10",webpack:"4.25.1","webpack-cli":"3.1.2","webpack-dev-server":"3.1.10"},dependencies:{},ava:{require:["esm"]}}},function(e,n,t){var i=t(3);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(6)(i,o);i.locals&&(e.exports=i.locals)},function(e,n,t){(n=e.exports=t(0)(!1)).i(t(4),""),n.i(t(5),""),n.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);",""]),n.push([e.i,"body {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  /* background-color: #eee; */\n  padding-bottom: 80px;\n}\n\n.container {\n  margin: 0 auto;\n  width: 85%;\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 3em;\n  text-align: center;\n}\n\np {\n  margin: 20px 0;\n  text-align: center;\n}\n\ndatabiz-login {\n  display: block;\n  width: 240px;\n  margin: 0 auto;\n}\n\npre {\n  box-shadow: inset 0px 0px 20px rgba(0,0,0,0.3);\n  padding: 20px;\n  background: #fefefe;\n  overflow-x: auto;\n}\n\nbutton {\n  display: block;\n  margin: 0 auto;\n  padding: 10px 40px;\n  cursor: pointer;\n}",""])},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,'/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""])},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"/*! Typebase.less v0.1.0 | MIT License */\n/* Setup */\nhtml {\n  /* Change default typefaces here */\n  font-family: serif;\n  font-size: 137.5%;\n  -webkit-font-smoothing: antialiased;\n}\n/* Copy & Lists */\np {\n  line-height: 1.5rem;\n  margin-top: 1.5rem;\n  margin-bottom: 0;\n}\nul,\nol {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\nul li,\nol li {\n  line-height: 1.5rem;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\nblockquote {\n  line-height: 1.5rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n/* Headings */\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  /* Change heading typefaces here */\n  font-family: sans-serif;\n  margin-top: 1.5rem;\n  margin-bottom: 0;\n  line-height: 1.5rem;\n}\nh1 {\n  font-size: 4.242rem;\n  line-height: 4.5rem;\n  margin-top: 3rem;\n}\nh2 {\n  font-size: 2.828rem;\n  line-height: 3rem;\n  margin-top: 3rem;\n}\nh3 {\n  font-size: 1.414rem;\n}\nh4 {\n  font-size: 0.707rem;\n}\nh5 {\n  font-size: 0.4713333333333333rem;\n}\nh6 {\n  font-size: 0.3535rem;\n}\n/* Tables */\ntable {\n  margin-top: 1.5rem;\n  border-spacing: 0px;\n  border-collapse: collapse;\n}\ntable td,\ntable th {\n  padding: 0;\n  line-height: 33px;\n}\n/* Code blocks */\ncode {\n  vertical-align: bottom;\n}\n/* Leading paragraph text */\n.lead {\n  font-size: 1.414rem;\n}\n/* Hug the block above you */\n.hug {\n  margin-top: 0;\n}\n",""])},function(e,n,t){var i={},o=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),r=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var i=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}n[e]=i}return n[e]}}(),s=null,a=0,l=[],c=t(7);function d(e,n){for(var t=0;t<e.length;t++){var o=e[t],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(g(o.parts[s],n))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(g(o.parts[s],n));i[o.id]={id:o.id,refs:1,parts:a}}}}function u(e,n){for(var t=[],i={},o=0;o<e.length;o++){var r=e[o],s=n.base?r[0]+n.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[s]?i[s].parts.push(a):t.push(i[s]={id:s,parts:[a]})}return t}function h(e,n){var t=r(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===e.insertAt)i?i.nextSibling?t.insertBefore(n,i.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),l.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=r(e.insertAt.before,t);t.insertBefore(n,o)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=l.indexOf(e);n>=0&&l.splice(n,1)}function m(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return t.nc}();i&&(e.attrs.nonce=i)}return f(n,e.attrs),h(e,n),n}function f(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function g(e,n){var t,i,o,r;if(n.transform&&e.css){if(!(r="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=r}if(n.singleton){var l=a++;t=s||(s=m(n)),i=v.bind(null,t,l,!1),o=v.bind(null,t,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",f(n,e.attrs),h(e,n),n}(n),i=function(e,n,t){var i=t.css,o=t.sourceMap,r=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||r)&&(i=c(i));o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,t,n),o=function(){p(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),i=function(e,n){var t=n.css,i=n.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){p(t)});return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=u(e,n);return d(t,n),function(e){for(var o=[],r=0;r<t.length;r++){var s=t[r];(a=i[s.id]).refs--,o.push(a)}e&&d(u(e,n),n);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var b=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function v(e,n,t,i){var o=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(n,o);else{var r=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(r,s[n]):e.appendChild(r)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,i=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,r=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n,t){"use strict";t.r(n);t(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const i=new WeakMap,o=e=>"function"==typeof e&&i.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,n,t=null)=>{let i=n;for(;i!==t;){const n=i.nextSibling;e.removeChild(i),i=n}},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,d=new RegExp(`${l}|${c}`),u=(()=>{const e=document.createElement("div");return e.setAttribute("style","{{bad value}}"),"{{bad value}}"!==e.getAttribute("style")})();class h{constructor(e,n){this.parts=[],this.element=n;let t=-1,i=0;const o=[],r=n=>{const s=n.content,a=document.createTreeWalker(s,133,null,!1);let c,h;for(;a.nextNode();){t++,c=h;const n=h=a.currentNode;if(1===n.nodeType){if(n.hasAttributes()){const o=n.attributes;let r=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(l)>=0&&r++;for(;r-- >0;){const o=e.strings[i],r=f.exec(o)[2],s=u&&"style"===r?"style$":/^[a-zA-Z-]*$/.test(r)?r:r.toLowerCase(),a=n.getAttribute(s).split(d);this.parts.push({type:"attribute",index:t,name:r,strings:a}),n.removeAttribute(s),i+=a.length-1}}"TEMPLATE"===n.tagName&&r(n)}else if(3===n.nodeType){const e=n.nodeValue;if(e.indexOf(l)<0)continue;const r=n.parentNode,s=e.split(d),a=s.length-1;i+=a;for(let e=0;e<a;e++)r.insertBefore(""===s[e]?m():document.createTextNode(s[e]),n),this.parts.push({type:"node",index:t++});r.insertBefore(""===s[a]?m():document.createTextNode(s[a]),n),o.push(n)}else if(8===n.nodeType)if(n.nodeValue===l){const e=n.parentNode,r=n.previousSibling;null===r||r!==c||r.nodeType!==Node.TEXT_NODE?e.insertBefore(m(),n):t--,this.parts.push({type:"node",index:t++}),o.push(n),null===n.nextSibling?e.insertBefore(m(),n):t--,h=c,i++}else{let e=-1;for(;-1!==(e=n.nodeValue.indexOf(l,e+1));)this.parts.push({type:"node",index:-1})}}};r(n);for(const e of o)e.parentNode.removeChild(e)}}const p=e=>-1!==e.index,m=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(e,n,t){this._parts=[],this.template=e,this.processor=n,this.options=t}update(e){let n=0;for(const t of this._parts)void 0!==t&&t.setValue(e[n]),n++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=this.template.parts;let t=0,i=0;const o=e=>{const r=document.createTreeWalker(e,133,null,!1);let s=r.nextNode();for(;t<n.length&&null!==s;){const e=n[t];if(p(e))if(i===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));t++}else i++,"TEMPLATE"===s.nodeName&&o(s.content),s=r.nextNode();else this._parts.push(void 0),t++}};return o(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class b{constructor(e,n,t,i){this.strings=e,this.values=n,this.type=t,this.processor=i}getHTML(){const e=this.strings.length-1;let n="",t=!0;for(let i=0;i<e;i++){const e=this.strings[i];n+=e;const o=e.lastIndexOf(">");!(t=(o>-1||t)&&-1===e.indexOf("<",o+1))&&u&&(n=n.replace(f,(e,n,t,i)=>"style"===t?`${n}style$${i}`:e)),n+=t?c:l}return n+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class y{constructor(e,n,t){this.dirty=!0,this.element=e,this.name=n,this.strings=t,this.parts=[];for(let e=0;e<t.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new x(this)}_getValue(){const e=this.strings,n=e.length-1;let t="";for(let i=0;i<n;i++){t+=e[i];const n=this.parts[i];if(void 0!==n){const e=n.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const n of e)t+="string"==typeof n?n:String(n);else t+="string"==typeof e?e:String(e)}}return t+=e[n]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,o(e)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class w{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=m()),e._insert(this.endNode=m())}insertAfterPart(e){e._insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;o(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof b?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):void 0!==e.then?this._commitPromise(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const n=this.startNode.nextSibling;e=null==e?"":e,n===this.endNode.previousSibling&&n.nodeType===Node.TEXT_NODE?n.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const n=this.options.templateFactory(e);if(this.value&&this.value.template===n)this.value.update(e.values);else{const t=new g(n,e.processor,this.options),i=t._clone();t.update(e.values),this._commitNode(i),this.value=t}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const n=this.value;let t,i=0;for(const o of e)void 0===(t=n[i])&&(t=new w(this.options),n.push(t),0===i?t.appendIntoPart(this):t.insertAfterPart(n[i-1])),t.setValue(o),t.commit(),i++;i<n.length&&(n.length=i,this.clear(t&&t.endNode))}_commitPromise(e){this.value=e,e.then(n=>{this.value===e&&(this.setValue(n),this.commit())})}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class _{constructor(e,n,t){if(this.value=void 0,this._pendingValue=void 0,2!==t.length||""!==t[0]||""!==t[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=n,this.strings=t}setValue(e){this._pendingValue=e}commit(){for(;o(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class E extends y{constructor(e,n,t){super(e,n,t),this.single=2===t.length&&""===t[0]&&""===t[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends x{}let k=!1;try{const e={get capture(){return k=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class S{constructor(e,n,t){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=n,this.eventContext=t}setValue(e){this._pendingValue=e}commit(){for(;o(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,n=this.value,t=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),i=null!=e&&(null==n||t);t&&this.element.removeEventListener(this.eventName,this,this._options),this._options=C(e),i&&this.element.addEventListener(this.eventName,this,this._options),this.value=e,this._pendingValue=a}handleEvent(e){("function"==typeof this.value?this.value:"function"==typeof this.value.handleEvent?this.value.handleEvent:()=>null).call(this.eventContext||this.element,e)}}const C=e=>e&&(k?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const A=new class{handleAttributeExpressions(e,n,t,i){const o=n[0];return"."===o?new E(e,n.slice(1),t).parts:"@"===o?[new S(e,n.slice(1),i.eventContext)]:"?"===o?[new _(e,n.slice(1),t)]:new y(e,n,t).parts}handleTextExpression(e){return new w(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function T(e){let n=z.get(e.type);void 0===n&&(n=new Map,z.set(e.type,n));let t=n.get(e.strings);return void 0===t&&(t=new h(e,e.getTemplateElement()),n.set(e.strings,t)),t}const z=new Map,O=new WeakMap,j=(e,n,t)=>{let i=O.get(n);void 0===i&&(s(n,n.firstChild),O.set(n,i=new w(Object.assign({templateFactory:T},t))),i.appendInto(n)),i.setValue(e),i.commit()},V=(e,...n)=>new b(e,n,"html",A);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var I=t(1);const L=(e,n)=>new CustomEvent(e,{detail:n,bubbles:!0});customElements.define("databiz-login",class extends HTMLElement{connectedCallback(){const e=this.getAttribute("client-id")||"";this.innerHTML='\n      <div id="signin2"></div>\n    ',this._addScript(e)}_addScript(e){const n=Object.assign(document.createElement("script"),{src:"https://apis.google.com/js/platform.js",onload:()=>this._renderButton(e)});document.head.appendChild(n)}_renderButton(e){const n=new Promise(e=>gapi.load("auth2",()=>e()));n.then(()=>gapi.auth2.init({client_id:e})),n.then(()=>gapi.signin2.render("signin2",{client_id:e,scope:"profile email",width:240,height:50,longtitle:!0,onsuccess:this._onSuccess.bind(this),onfailure:this._onFailure.bind(this),ux_mode:"popup"}))}_onFailure(e){new Promise(e=>e()).then(()=>({error:e})).then(e=>L("signin-error",e)).then(e=>this.dispatchEvent(e))}_approve(e){new Promise(e=>e()).then(()=>e.getBasicProfile()).then(e=>({profile:e})).then(n=>Object.assign(n,{token:e.getAuthResponse().id_token})).then(e=>L("signin-success",e)).then(e=>this.dispatchEvent(e))}_reject(){gapi.auth2.getAuthInstance().signOut().then(()=>"Not a valid domain").then(e=>({message:e,domain:!1})).then(e=>L("signin-error",e)).then(e=>this.dispatchEvent(e))}_onSuccess(e){const n=e.getHostedDomain();["bitrock.it","databiz.it","radicalbit.io"].filter(e=>n===e).length?this._approve(e):this._reject()}});const R=document.querySelector("#root");console.log("75156113691-20jkr6h6oc8kmj0eird9pptk1to81r8g.apps.googleusercontent.com");const M={data:void 0,empty:!0},P=e=>{M.data=e.detail,M.empty=!1,j($(M),R)},U=e=>{gapi.auth2.getAuthInstance().signOut().then(()=>{M.data=void 0,M.empty=!0,j($(M),R)})},$=e=>V`
  <main class="container">
    <h1>${I.name}</h1>
    <section>
      <p>Test it now!</p>
      <databiz-login
        @signin-success=${e=>P(e)}
        @signin-error=${e=>P(e)}
        client-id=${"75156113691-20jkr6h6oc8kmj0eird9pptk1to81r8g.apps.googleusercontent.com"}
      ></databiz-login>
    </section>
    ${(e=>e.empty?"":V`
  <section id="result">
    <pre>${JSON.stringify(e.data,null,2)}</pre>
    <button
      @click=${e=>U()}
    >Logout</button>
  </section>
`)(e)}
  </main>
`;j($(M),R),console.log("Project started..."),document.querySelector(".js-warning").style.display="none"}]);
//# sourceMappingURL=main.37ee6e359882ee97daee.js.map