(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(n,e,t){n.exports=t(199)},120:function(n,e,t){},126:function(n,e){},128:function(n,e){},199:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(22),o=t.n(i),c=(t(120),t(18)),u="#14141C",l="#1C1C28",f="#242633",d="#30303F",s="#fff",p=60,h={userColumnSize:55,columnMinWidth:50},m=t(7),v=t(8);function b(){var n=Object(m.a)(["\n  display: flex;\n"]);return b=function(){return n},n}var x=v.a.main(b()),g=function(n){return a.a.createElement(x,n,n.children)};function w(){var n=Object(m.a)(["\n  position: absolute;\n  left: -5px;\n  top: 0;\n  width: 10px;\n  height: 100%;\n  background: ",";\n  cursor: col-resize;\n  z-index: 100;\n"]);return w=function(){return n},n}function j(){var n=Object(m.a)(["\n  max-height: 100%;\n  overflow: auto;\n  &:focus {\n    outline: 0;\n  }\n"]);return j=function(){return n},n}function E(){var n=Object(m.a)(["\n  position: relative;\n  background-color: ",";\n  color: #fff;\n  box-sizing: border-box;\n  height: 100vh;\n  max-height: 100vh;\n  user-select: ",";\n  &:first-child {\n    padding: ",";\n  }\n  &:last-child {\n    padding: 15px 15px 15px 15px;\n  }\n  ","\n"]);return E=function(){return n},n}var O=v.a.div(E(),function(n){return n.isFixed?u:l},function(n){return n.isDragging&&"none"},function(n){return n.isFixed?0:"25px 15px 25px 10px"},function(n){return n.isFixed&&"\n      padding: 0;\n      width: 250px;\n  "}),y=v.a.div(j()),k=v.a.div(w(),d),C=a.a.forwardRef(function(n,e){return a.a.createElement(O,n,n.hasHandle&&a.a.createElement(k,{ref:e}),a.a.createElement(y,null,n.children))});function z(){var n=Object(m.a)(["\n  display: flex;\n  position: relative;\n  width: 100%;\n"]);return z=function(){return n},n}var S=v.a.div(z()),_=a.a.forwardRef(function(n,e){return a.a.createElement(S,Object.assign({},n,{ref:e}),n.children)}),L=t(39),M=t(72),R=t(103),F=t(104),D=t(111),H=t(105),W=t(114),I=t(73);function V(){var n=Object(m.a)(["\n  display: block;\n  font-size: 14px;\n  text-align: center;\n  margin: 10px 0 0 0;\n  width: 100%;\n  text-overflow: ellipsis;\n"]);return V=function(){return n},n}function B(){var n=Object(m.a)(["\n  width: 100%;\n  color: ",";\n  svg {\n    max-height: 28px;\n    fill: currentColor;\n  }\n"]);return B=function(){return n},n}function J(){var n=Object(m.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  border-radius: 5px;\n  background: ",";\n  max-width: 100%;\n  height: 100%;\n  overflow: hidden;\n  text-align: center;\n"]);return J=function(){return n},n}var T=v.a.div(J(),f),A=v.a.div(B(),s),G=v.a.h2(V()),N=function(n){var e=n.data,t=e.name,r=e.source;return a.a.createElement(T,n,a.a.createElement(A,{dangerouslySetInnerHTML:{__html:r}}),a.a.createElement(G,null,t))};function X(){var n=Object(m.a)(["\n  vertical-align: top;\n  text-align: left;\n  letter-spacing: normal;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n  max-width: 350px;\n  box-sizing: border-box;\n  padding: 0 10px 20px 10px;\n"]);return X=function(){return n},n}var $=v.a.div(X()),q=function(n){return a.a.createElement($,n,n.children)};function K(){var n=Object(m.a)(["\n  display: flex;\n  padding: 0;\n  margin-bottom: 20px;\n"]);return K=function(){return n},n}var P=v.a.div(K()),Q=function(n){return a.a.createElement(P,n,n.children)};function U(){var n=Object(m.a)(["\n  margin-top: ","px;\n  height: calc(100vh  - 105px);\n  overflow-x: hidden !important;\n\n  .ReactVirtualized__List,\n  .ReactVirtualized__Grid__innerScrollContainer {\n    overflow-x: hidden !important;\n  }\n\n  .ReactVirtualized__List:focus {\n    outline: 0;\n  }\n\n  &:focus {\n    outline: 0;\n  }\n  * ::-webkit-scrollbar {\n    width: 8px;\n  }\n \n  * ::-webkit-scrollbar-thumb {\n    background: rgba(255,255,255,0.4);\n    border-radius: 20px;\n  }\n\n  * ::-webkit-scrollbar-track {\n    background: transparent;\n    border-radius: 20px;\n  }\n"]);return U=function(){return n},n}var Y=v.a.div(U(),p-5),Z=function(n){function e(){return Object(R.a)(this,e),Object(D.a)(this,Object(H.a)(e).apply(this,arguments))}return Object(W.a)(e,n),Object(F.a)(e,[{key:"test",value:function(n){console.log(n)}},{key:"render",value:function(){var n=this,e=this.props.icons;return a.a.createElement(Y,null,a.a.createElement(I.a,null,function(t){var r=t.height,i=t.width,o=Math.floor(i/130)>4?4:Math.floor(i/130)||1,c=Math.ceil(e.length/o);return a.a.createElement(I.b,{width:i,height:r,rowCount:c,rowHeight:130,overscanRowCount:0,rowRenderer:function(t){for(var r=t.index,i=t.key,c=t.style,u=[],l=r*o,f=Math.min(l+o,e.length),d=function(t){var r=e[t];u.push(a.a.createElement(q,{key:t,onClick:function(e){return n.test(r.name)}},a.a.createElement(N,{data:r})))},s=l;s<f;s++)d(s);return a.a.createElement(Q,{key:i,style:c},u)}})}))}}]),e}(r.Component);function nn(){var n=Object(m.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: ","px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  background: ",";\n  z-index: 99;\n"]);return nn=function(){return n},n}var en=v.a.div(nn(),p,l),tn=function(n){return a.a.createElement(en,n,n.children)};function rn(){var n=Object(m.a)(["\n  height: 100%;\n  font-weight: 700;\n  background: transparent;\n  border: 0;\n  font-size: 18px;\n  padding: 0 20px;\n  width: 100%;\n  color: #fff;\n\n  &::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.54);\n  }\n\n  &:focus {\n    outline: 0;\n  }\n"]);return rn=function(){return n},n}var an=v.a.input(rn()),on=function(n){return a.a.createElement(an,Object.assign({type:"text"},n,{placeholder:"Filter...",onChange:function(e){return function(e){return n.onChange(e)}(e)}}))},cn=function(n){var e=n.data.libraries[0].icons,t=Object(r.useState)(e),i=Object(c.a)(t,2),o=i[0],u=i[1],l=Object(r.useState)({}),f=Object(c.a)(l,2),d=(f[0],f[1]),s=Object(r.useCallback)(function(n){return e.filter(function(e){return e.name.includes(n)})},[e]);return a.a.createElement("div",n,a.a.createElement(tn,null,a.a.createElement(on,{type:"text",placeholder:"Searching...",name:"librarySearch",onChange:function(e){e.persist();var t=e.target,r=t.name,a=t.value;a.length>0?(d(function(n){return Object(M.a)({},n,Object(L.a)({},r,a))}),u(s(a))):(d(function(n){return Object(M.a)({},n,Object(L.a)({},r,a))}),u(n.data.libraries[0].icons))}})),a.a.createElement("div",null,o&&a.a.createElement(Z,{icons:o})))};function un(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  text-align: center;\n  margin: 10px 0 0 0;\n  width: 100%;\n  text-overflow: ellipsis;\n"]);return un=function(){return n},n}function ln(){var n=Object(m.a)(["\n  width: 100%;\n  color: ",";\n  svg {\n    max-height: 28px;\n    fill: currentColor;\n  }\n"]);return ln=function(){return n},n}function fn(){var n=Object(m.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  border-radius: 5px;\n  background: ",";\n  max-width: 200px;\n"]);return fn=function(){return n},n}var dn=v.a.div(fn(),f),sn=v.a.div(ln(),s),pn=v.a.h2(un()),hn=function(n){var e=n.data,t=e.name,r=e.source;return a.a.createElement(dn,n,a.a.createElement(sn,{dangerouslySetInnerHTML:{__html:r}}),a.a.createElement(pn,null,t))};function mn(){var n=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n"]);return mn=function(){return n},n}var vn=v.a.ul(mn()),bn=function(n){return a.a.createElement(vn,n,n.children)};function xn(){var n=Object(m.a)(["\n  vertical-align: top;\n  text-align: left;\n  letter-spacing: normal;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 130px;\n  width: 100%;\n  position: relative;\n  border-left: 15px solid transparent;\n  margin-bottom: 15px;\n  max-width: 20%;\n  min-width: 130px;\n"]);return xn=function(){return n},n}var gn=v.a.li(xn()),wn=function(n){return a.a.createElement(gn,n,n.children)},jn=function(n){var e=n.data&&n.data.projects[0].icons;return a.a.createElement("div",n,a.a.createElement(bn,null,n.data&&e.map(function(n,e){return a.a.createElement(wn,{key:e},a.a.createElement(hn,{data:n}))})))};var En=function(n){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),i=Object(r.useState)(!1),o=Object(c.a)(i,2),u=o[0],l=o[1],f=Object(r.useState)({left:100-h.userColumnSize,right:h.userColumnSize}),d=Object(c.a)(f,2),s=d[0],p=d[1];return Object(r.useEffect)(function(){document.addEventListener("mousedown",function(n){n.target===e.current&&l(!0)});var n=function(n){if(!u)return!1;var e=t.current.offsetWidth,r=t.current.offsetLeft,a=n.clientX-r,i=Math.max(250,a)/e*100,o=Math.max(250,e-a)/e*100;p({left:function(){if(!(i+o>100))return i}(),right:function(){if(!(i+o>100))return o}()})};return document.addEventListener("mousemove",n),document.addEventListener("mouseup",function(n){l(!1)}),function(){document.removeEventListener("mousemove",n)}},[u]),a.a.createElement(g,null,a.a.createElement(C,{isFixed:!0},"Fixed Column"),a.a.createElement(_,{ref:t},a.a.createElement(C,{isDragging:u,style:{width:s.left+"%"},isLibraryColumn:!0},a.a.createElement(cn,{data:n.appData})),a.a.createElement(C,{isDragging:u,style:{width:s.right+"%"},ref:e,hasHandle:!0},a.a.createElement(jn,{data:n.appData}))))};var On=function(){var n=Object(r.useState)(!0),e=Object(c.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(null),u=Object(c.a)(o,2),l=u[0],f=u[1];return Object(r.useEffect)(function(){fetch("/api/init").then(function(n){return n.json()}).then(function(n){f(n),i(!1)})},[]),a.a.createElement("div",{className:"App"},!t&&a.a.createElement(En,{appData:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(On,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[115,1,2]]]);
//# sourceMappingURL=main.4b9e9f15.chunk.js.map