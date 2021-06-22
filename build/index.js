/*!
 * 
 *   @hodgef/ts-library-boilerplate-basic v1.0.111
 *   https://github.com/hodgef/ts-library-boilerplate-basic
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MyLibrary=t():e.MyLibrary=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t,n,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.r(t),e.d(t,{default:()=>o});const o=function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=void 0,(n="vueEventHub")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,this.vueEventHub=window.parent.eventHub}var t,o,i,u,a;return t=e,(o=[{key:"connect",value:(u=regeneratorRuntime.mark((function e(t){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.vueEventHub){e.next=2;break}throw new Error("Not in Chain Bow Platform");case 2:return this.vueEventHub.$emit("connect",t),e.abrupt("return",new Promise((function(e,t){n.vueEventHub.$on("connected",(function(t){e(t)}))})));case 4:case"end":return e.stop()}}),e,this)})),a=function(){var e=this,t=arguments;return new Promise((function(r,o){var i=u.apply(e,t);function a(e){n(i,r,o,a,c,"next",e)}function c(e){n(i,r,o,a,c,"throw",e)}a(void 0)}))},function(e){return a.apply(this,arguments)})}])&&r(t.prototype,o),i&&r(t,i),e}();return t})()}));
//# sourceMappingURL=index.js.map