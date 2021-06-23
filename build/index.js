/*!
 * 
 *   chainbowpay v0.5.2
 *   https://github.com/GHChrisSu/chainbowpay
 *
 *   Copyright (c) HAO SU (https://github.com/GHChrisSu) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MyLibrary=t():e.MyLibrary=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.r(t),e.d(t,{default:()=>o});const o=function(){function e(){var t,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=void 0,(n="vueEventHub")in(t=this)?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,this.vueEventHub=window.parent.eventHub}var t,o,r;return t=e,(o=[{key:"isChainBowPlatform",value:function(){return void 0!==this.vueEventHub}},{key:"connect",value:function(e){var t=this;if(!this.vueEventHub)throw new Error("Not in Chain Bow Platform");return this.vueEventHub.$emit("connect",e),new Promise((function(e,n){t.vueEventHub.$once("connected",(function(t){var n=t.split("||"),o={name:n[0],address:n[1]};e(o)}))}))}},{key:"disconnect",value:function(){if(!this.vueEventHub)throw new Error("Not in Chain Bow Platform");this.vueEventHub.$emit("disconnect")}},{key:"getBalance",value:function(){var e=this;if(!this.vueEventHub)throw new Error("Not in Chain Bow Platform");return this.vueEventHub.$emit("getBalance"),new Promise((function(t,n){e.vueEventHub.$once("getBalanceDone",(function(e){t(e)}))}))}},{key:"payment",value:function(e){if(!this.vueEventHub)throw new Error("Not in Chain Bow Platform");this.vueEventHub.$emit("payment",e)}}])&&n(t.prototype,o),r&&n(t,r),e}();return t})()}));
//# sourceMappingURL=index.js.map