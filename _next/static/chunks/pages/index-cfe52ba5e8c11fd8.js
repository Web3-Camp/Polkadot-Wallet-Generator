(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2051)}])},2051:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return K}});var t=r(5893),i=r(9008),o=r(7379),a=r(682),c=r(545),s=r(1608),l=r(1555),u=r(7294);function d(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function f(){var n=d(["\n box-shadow: 0 0 5px #ccc;\n padding:45px 0;\n"]);return f=function(){return n},n}function p(){var n=d(['\n  font-family: "din_bold";\n  font-size: 32px;\n  text-transform: uppercase;\n']);return p=function(){return n},n}var x=o.ZP.div.withConfig({componentId:"sc-2e009b45-0"})(f()),h=(0,o.ZP)(l.Z).withConfig({componentId:"sc-2e009b45-1"})(p());function v(){return(0,t.jsx)(x,{children:(0,t.jsx)(a.Z,{children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(h,{xs:8,children:"Polkadot Wallet Generator"}),(0,t.jsx)(l.Z,{xs:4,children:"---"})]})})})}var m=r(4051),b=r.n(m),j=r(4119),w=r(1358),y=r(3680),g=r(6968),Z=r(5711),k=r(9247),P=r(5261),C=r(8607),I=r(1664);function _(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function N(n){var e;if("function"===typeof Symbol){if(Symbol.asyncIterator&&null!=(e=n[Symbol.asyncIterator]))return e.call(n);if(Symbol.iterator&&null!=(e=n[Symbol.iterator]))return e.call(n)}throw new TypeError("Object is not async iterable")}function O(n,e,r,t,i,o,a){try{var c=n[o](a),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(t,i)}function S(n){return function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function a(n){O(o,t,i,a,c,"next",n)}function c(n){O(o,t,i,a,c,"throw",n)}a(void 0)}))}}function A(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function z(n){return function(n){if(Array.isArray(n))return _(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return _(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(){var n=A(['\n  margin-top: 20px;\n  li{\n    background: #f8f8f8;\n    padding: 0 20px;\n    margin-bottom:20px;\n    user-select: none;\n    &>div{\n      padding: 20px 0;\n      border-bottom:1px solid #ddd;\n      display: flex;\n      word-break: break-all;\n      &:last-child{\n        border-bottom: 0;\n      }\n    }\n    .title{\n      min-width: 130px;\n      display: flex;\n      .titleMain{\n        white-space: nowrap;\n      }\n      .iconbox{\n         margin-right: 10px;\n      }\n      span{\n        color: purple;\n         font-family: "din_bold";\n      }\n    }\n  }\n']);return E=function(){return n},n}function M(){var n=A(["\n  display: flex;\n  button{\n    margin-right: 20px;\n  }\n"]);return M=function(){return n},n}function T(){var n=A(['\n  font-family: "din_bold";\n  color: purple;\n  margin-top: 20px;\n  background: #f8f8f8;\n  padding: 20px;\n  span{\n    margin-right: 10px;\n    color:#666;\n  }\n']);return T=function(){return n},n}function U(){var n=A(["\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  margin: 50px 0;\n  span{\n  margin-left: 20px;\n  }\n"]);return U=function(){return n},n}var W=o.ZP.ul.withConfig({componentId:"sc-9f458bed-0"})(E()),X=o.ZP.div.withConfig({componentId:"sc-9f458bed-1"})(M()),B=o.ZP.div.withConfig({componentId:"sc-9f458bed-2"})(T()),D=o.ZP.div.withConfig({componentId:"sc-9f458bed-3"})(U());function F(){var n,e=(0,u.useState)(!1),r=e[0],i=e[1],o=(0,u.useState)([]),a=o[0],c=o[1],s=(0,u.useState)(""),l=s[0],d=s[1],f=function(){var n=S(b().mark((function n(){var e,r,t,i;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new I.Y({type:"sr25519"}),r=(0,C._)(),n.next=4,e.addFromUri("".concat(r),{name:"new keypair"});case 4:return t=n.sent,console.log(t),i=t.address,n.abrupt("return",{address:i,mnemonic:r});case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=S(b().mark((function n(){var e,r,t,o,a,s,u,d,p;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i(!0),e=z(Array(l)),r=[],t=!1,o=!1,n.prev=4,s=N(e);case 6:return n.next=8,s.next();case 8:if(!(t=!(u=n.sent).done)){n.next=18;break}return d=u.value,d,n.next=13,f();case 13:p=n.sent,r.push(p);case 15:t=!1,n.next=6;break;case 18:n.next=24;break;case 20:n.prev=20,n.t0=n.catch(4),o=!0,a=n.t0;case 24:if(n.prev=24,n.prev=25,!t||null==s.return){n.next=29;break}return n.next=29,a.return();case 29:if(n.prev=29,!o){n.next=32;break}throw a;case 32:return n.finish(29);case 33:return n.finish(24);case 34:i(!1),c(r);case 36:case"end":return n.stop()}}),n,null,[[4,20,24,34],[25,,29,33]])})));return function(){return n.apply(this,arguments)}}();return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:(0,t.jsx)(j.Z,{controlId:"floatingInput",label:"Number of wallets created",className:"mb-3",children:(0,t.jsx)(w.Z.Control,{type:"text",placeholder:"Number of wallets created",value:l,onChange:function(n){return function(n){var e=n.target;d(parseInt(e.value))}(n)}})})}),(0,t.jsxs)(X,{children:[(0,t.jsx)(y.Z,{variant:"flat",onClick:function(){return p()},children:"Batch Create Polkadot Address"}),!!a.length&&(0,t.jsxs)(P.Z,{datas:a,filename:"myWallets_".concat(null===(n=a[0])||void 0===n?void 0:n.address),extension:".csv",children:[" ",(0,t.jsxs)(y.Z,{variant:"dark",children:[" ",(0,t.jsx)(Z.Z,{})," Download"]})]})]}),(0,t.jsxs)(B,{children:[(0,t.jsx)("span",{children:" Created:"}),null===a||void 0===a?void 0:a.length]}),(0,t.jsxs)(W,{children:[r&&(0,t.jsxs)(D,{children:[(0,t.jsx)(g.Z,{animation:"border",variant:"dark"})," ",(0,t.jsx)("span",{children:"Loading..."})]}),null===a||void 0===a?void 0:a.map((function(n,e){return(0,t.jsxs)("li",{children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"title",children:[(0,t.jsx)("div",{className:"iconbox",children:(0,t.jsx)(k.Z,{color:"purple"})}),(0,t.jsx)("div",{className:"titleMain",children:"address"}),(0,t.jsx)("span",{children:e+1})]}),(0,t.jsx)("div",{children:n.address})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"title",children:[(0,t.jsx)("div",{className:"iconbox",children:(0,t.jsx)(k.Z,{color:"purple"})}),(0,t.jsx)("div",{className:"titleMain",children:"mnemonic"})]}),(0,t.jsx)("div",{children:n.mnemonic})]})]},n.address)}))]})]})}function G(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function L(){var n=G(["\n    display: flex;\n"]);return L=function(){return n},n}function Y(){var n=G(["\n  margin-top: 30px;\n"]);return Y=function(){return n},n}function $(){var n=G(["\n  border:0;\n  box-shadow: 0 0 5px #ccc;\n  border-radius: 6px;\n"]);return $=function(){return n},n}var q=o.ZP.div.withConfig({componentId:"sc-f61c9235-0"})(L()),H=(0,o.ZP)(a.Z).withConfig({componentId:"sc-f61c9235-1"})(Y()),J=(0,o.ZP)(c.Z).withConfig({componentId:"sc-f61c9235-2"})($()),K=function(){return(0,t.jsxs)("div",{children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"Polkadot wallet generator"}),(0,t.jsx)("meta",{name:"description",content:"Polkadot wallet generator"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("main",{children:[(0,t.jsx)(v,{}),(0,t.jsx)(q,{children:(0,t.jsx)(H,{children:(0,t.jsx)(s.Z,{children:(0,t.jsx)(l.Z,{md:12,xs:12,children:(0,t.jsx)(J,{body:!0,children:(0,t.jsx)(F,{})})})})})})]})]})}},5856:function(){},6601:function(){},5024:function(){}},function(n){n.O(0,[845,124,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);