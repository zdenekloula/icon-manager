(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(n,e,t){n.exports=t(198)},118:function(n,e,t){},124:function(n,e){},126:function(n,e){},198:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(24),o=t.n(i),c=(t(118),t(12)),u=t(1),l=a.a.createContext({}),d=l.Provider,f=(l.Consumer,l),s={userColumnSize:55,columnMinWidth:50},h=t(3);function b(){var n=Object(h.a)(["\n  display: flex;\n"]);return b=function(){return n},n}var p=u.b.main(b()),m=function(n){return a.a.createElement(p,n,n.children)};function g(){var n=Object(h.a)(["\n  position: absolute;\n  left: -5px;\n  top: 0;\n  width: 10px;\n  height: 100%;\n  background: ",";\n  cursor: col-resize;\n  z-index: 100;\n"]);return g=function(){return n},n}function v(){var n=Object(h.a)(["\n  max-height: 100%;\n  overflow: auto;\n  &:focus {\n    outline: 0;\n  }\n"]);return v=function(){return n},n}function x(){var n=Object(h.a)(["\n  position: relative;\n  background-color: ",";\n  color: #fff;\n  box-sizing: border-box;\n  height: 100vh;\n  max-height: 100vh;\n  user-select: ",";\n  &:first-child {\n    padding: ",";\n  }\n  &:last-child {\n    //padding: 15px 15px 15px 15px;\n    padding: 0;\n  }\n  ","\n"]);return x=function(){return n},n}var j=u.b.div(x(),function(n){var e=n.isFixed,t=n.theme;return e?t.backgroundPrimary:t.backgroundSecondary},function(n){return n.isDragging&&"none"},function(n){return n.isFixed?0:"0"},function(n){return n.isFixed&&"\n      padding: 0;\n      width: 250px;\n  "}),E=u.b.div(v()),O=u.b.div(g(),function(n){return n.theme.handleColor}),w=a.a.forwardRef(function(n,e){return a.a.createElement(j,n,n.hasHandle&&a.a.createElement(O,{ref:e}),a.a.createElement(E,null,n.children))});function y(){var n=Object(h.a)(["\n  display: flex;\n  position: relative;\n  width: 100%;\n"]);return y=function(){return n},n}var k=u.b.div(y()),C=a.a.forwardRef(function(n,e){return a.a.createElement(k,Object.assign({},n,{ref:e}),n.children)}),S=t(11),z=t(73),L=t(15),M=t(75),D=function(n){return n.split(".").slice(0,-1).join(".")},P=function(n,e){var t=!1;for(var r in e){n===e[r].name&&(t=!0)}return t},T=function(n,e){var t,r=n.name,a=n.source,i=0;for(var o in e){var c=e[o];r===c.name||c.name.includes(r+"-")?(i++,t="".concat(r,"-").concat(i)):t="".concat(r,"-").concat(i)}return{filename:t+".svg",name:t,source:a}},A=function(n){return new Promise(function(e,t){var r=new FileReader;r.onload=function(){e(r.result)},r.onerror=t,r.readAsText(n)})},H=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then(function(n){return n.json()})};function _(){var n=Object(h.a)(["\n  display: block;\n  font-size: 14px;\n  text-align: center;\n  margin: 10px 0 0 0;\n  width: 100%;\n  text-overflow: ellipsis;\n  color: ",";\n  font-weight: 400;\n"]);return _=function(){return n},n}function N(){var n=Object(h.a)(["\n  width: 100%;\n  color: ",";\n  svg {\n    max-height: 28px;\n    fill: currentColor;\n  }\n"]);return N=function(){return n},n}function F(){var n=Object(h.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  border-radius: 5px;\n  background: ",";\n  max-width: 100%;\n  height: 100%;\n  overflow: hidden;\n  text-align: center;\n"]);return F=function(){return n},n}var B=u.b.div(F(),function(n){return n.theme.backgroundTertiary}),R=u.b.div(N(),function(n){return n.theme.fontColor}),I=u.b.h2(_(),function(n){return n.theme.fontColor}),J=function(n){var e=n.data,t=e.name,r=e.source;return a.a.createElement(B,n,a.a.createElement(R,{dangerouslySetInnerHTML:{__html:r}}),a.a.createElement(I,null,t))};function W(){var n=Object(h.a)(["\n  vertical-align: top;\n  text-align: left;\n  letter-spacing: normal;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: relative;\n  max-width: 350px;\n  box-sizing: border-box;\n  padding: 0 10px 20px 10px;\n"]);return W=function(){return n},n}var Z=u.b.div(W()),V=function(n){return a.a.createElement(Z,n,n.children)};function G(){var n=Object(h.a)(["\n  display: flex;\n  padding: 0;\n  margin-bottom: 20px;\n"]);return G=function(){return n},n}var X=u.b.div(G()),Y=function(n){return a.a.createElement(X,n,n.children)};function $(){var n=Object(h.a)(["\n  margin-top: 20px;\n  height: calc(100vh  - 180px);\n  overflow-x: hidden !important;\n  padding: 0 15px 0 10px;\n\n  .ReactVirtualized__List,\n  .ReactVirtualized__Grid__innerScrollContainer {\n    overflow-x: hidden !important;\n  }\n\n  .ReactVirtualized__List:focus {\n    outline: 0;\n  }\n\n  &:focus {\n    outline: 0;\n  }\n  * ::-webkit-scrollbar {\n    width: 8px;\n  }\n \n  * ::-webkit-scrollbar-thumb {\n    background: ",";\n    border-radius: 20px;\n  }\n\n  * ::-webkit-scrollbar-track {\n    background: transparent;\n    border-radius: 20px;\n  }\n"]);return $=function(){return n},n}var q=u.b.div($(),function(n){return n.theme.scrollbarBg});function K(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:e}).then(function(n){return n.json()})}var Q=function(n){var e=n.icons,t=Object(r.useContext)(f),i=t.projectsData,o=t.updateProjectsData,c=t.activeProject;return a.a.createElement(q,null,a.a.createElement(M.a,null,function(n){var t=n.height,r=n.width,u=Math.floor(r/130)>4?4:Math.floor(r/130)||1,l=Math.ceil(e.length/u);return a.a.createElement(M.b,{width:r,height:t,rowCount:l,rowHeight:130,overscanRowCount:0,rowRenderer:function(n){for(var t=n.index,r=n.key,l=n.style,d=[],f=t*u,s=Math.min(f+u,e.length),h=function(n){var t=e[n];d.push(a.a.createElement(V,{key:n},a.a.createElement(J,{data:t,onClick:function(n){return function(n){var e=Object(L.a)(i),t=e[c].icons,r=n.name;if(P(r,t)){var a=T(n,t);K("/api/append-icon",JSON.stringify({iconData:a,projectName:e[c].filename})).then(function(){return console.log("Ikona "+r+" pridana.")}).catch(function(n){return console.error(n)}),e[c].icons=[].concat(Object(L.a)(i[c].icons),[a]),o(e),console.log("vami zadana ikona jiz existuje")}else K("/api/append-icon",JSON.stringify({iconData:n,projectName:e[c].filename})).then(function(){return console.log("Ikona "+r+" pridana.")}).catch(function(n){return console.error(n)}),e[c].icons=[].concat(Object(L.a)(i[c].icons),[n]),o(e)}(t)}})))},b=f;b<s;b++)h(b);return a.a.createElement(Y,{key:r,style:l},d)}})}))};function U(){var n=Object(h.a)(["\n  width: 100%;\n  border-bottom: 1px solid ",";\npadding: ",";\n  background: ",";\n  z-index: 99;\n"]);return U=function(){return n},n}var nn=u.b.div(U(),function(n){return n.theme.borderColor},function(n){return n.columnProjects?"20px 35px 0 25px":"20px 35px 20px 20px"},function(n){return n.theme.backgroundSecondary}),en=function(n){return a.a.createElement(nn,n,n.children)};function tn(){var n=Object(h.a)(["\n  height: 100%;\n  font-weight: 700;\n  background: transparent;\n  border: 0;\n  border-radius: 5px;\n  font-size: 18px;\n  padding: 0 20px;\n  width: 100%;\n  color: ",";\n  height: 45px;\n  margin-top: 15px;\n  background: ",";\n\n  &::-webkit-input-placeholder {\n    color: ",";\n    opacity: 0.54;\n  }\n\n  &:focus {\n    outline: 0;\n  }\n"]);return tn=function(){return n},n}var rn=u.b.input(tn(),function(n){return n.theme.fontColor},function(n){return n.theme.backgroundTertiary},function(n){return n.theme.fontColor}),an=function(n){return a.a.createElement(rn,Object.assign({type:"text"},n,{placeholder:"Filter...",onChange:function(e){return function(e){return n.onChange(e)}(e)}}))};function on(){var n=Object(h.a)(["\n  font-size: ","px;\n  font-weight: ",";\n  color: ",";\n  margin: 0;\n"]);return on=function(){return n},n}var cn="h1",un="heading1",ln="heading2",dn="heading3",fn="heading4",sn="heading5",hn=function(n){return function(e){var t,r,a=e.type,i=e.theme;return{headingWeight:(t={},Object(S.a)(t,un,i.heading.weight.heading1),Object(S.a)(t,ln,i.heading.weight.heading2),Object(S.a)(t,dn,i.heading.weight.heading3),Object(S.a)(t,fn,i.heading.weight.heading4),Object(S.a)(t,sn,i.heading.weight.heading5),t),headingSize:(r={},Object(S.a)(r,un,i.heading.size.heading1),Object(S.a)(r,ln,i.heading.size.heading2),Object(S.a)(r,dn,i.heading.size.heading3),Object(S.a)(r,fn,i.heading.size.heading4),Object(S.a)(r,sn,i.heading.size.heading5),r)}[n][a]}},bn=Object(u.b)(function(n){var e=n.element,t=n.className,r=n.children,i=n.id;return a.a.createElement(e,{className:t,id:i},r)})(on(),hn("headingSize"),hn("headingWeight"),function(n){return n.theme.fontColor}),pn=function(n){var e=n.children,t=n.type,r=void 0===t?un:t,i=n.element,o=void 0===i?cn:i,c=n.id;return a.a.createElement(bn,{id:c,type:r,element:o},e)},mn=function(n){var e=Object(r.useContext)(f),t=e.librariesData[e.activeLibrary].icons,i=Object(r.useState)(null),o=Object(c.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)({}),s=Object(c.a)(d,2),h=s[0],b=s[1];Object(r.useEffect)(function(){var n,e;l((n=h.librarySearch,e=t,n?e.filter(function(e){return e.name.includes(n)}):e))},[t,h.librarySearch]);var p=Object(r.useCallback)(function(n){return t.filter(function(e){return e.name.includes(n)})},[t]);return a.a.createElement("div",null,a.a.createElement(en,null,a.a.createElement(pn,{element:"h1",type:"heading1"},"Library Icons"),a.a.createElement(an,{type:"text",placeholder:"Searching...",name:"librarySearch",onChange:function(n){n.persist();var e=n.target,r=e.name,a=e.value;a.length>0?(b(function(n){return Object(z.a)({},n,Object(S.a)({},r,a))}),l(p(a))):(b(function(n){return Object(z.a)({},n,Object(S.a)({},r,a))}),l(t))}})),a.a.createElement("div",null,u&&a.a.createElement(Q,{icons:u})))},gn=t(74),vn=t.n(gn),xn=t(110);function jn(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  text-align: center;\n  margin: 10px 0 0 0;\n  width: 100%;\n  text-overflow: ellipsis;\n  color: ",";\n  font-weight: 400;\n"]);return jn=function(){return n},n}function En(){var n=Object(h.a)(["\n  width: 100%;\n  color: ",";\n  svg {\n    max-height: 28px;\n    fill: currentColor;\n    width: 100%;\n  }\n"]);return En=function(){return n},n}function On(){var n=Object(h.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  border-radius: 5px;\n  background: ",";\n  max-width: 200px;\n  height: 100%;\n"]);return On=function(){return n},n}var wn=u.b.div(On(),function(n){return n.theme.backgroundTertiary}),yn=u.b.div(En(),function(n){return n.theme.fontColor}),kn=u.b.h2(jn(),function(n){return n.theme.fontColor}),Cn=function(n){var e=n.data,t=e.name,r=e.source;return a.a.createElement(wn,n,a.a.createElement(yn,{dangerouslySetInnerHTML:{__html:r}}),a.a.createElement(kn,null,t))};function Sn(){var n=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 5px;\n"]);return Sn=function(){return n},n}var zn=u.b.ul(Sn()),Ln=function(n){return a.a.createElement(zn,n,n.children)};function Mn(){var n=Object(h.a)(["\n  vertical-align: top;\n  text-align: left;\n  letter-spacing: normal;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 130px;\n  width: 100%;\n  position: relative;\n  border-left: 20px solid transparent;\n  margin-bottom: 15px;\n  max-width: 20%;\n  min-width: 130px;\n"]);return Mn=function(){return n},n}var Dn=u.b.li(Mn()),Pn=function(n){return a.a.createElement(Dn,n,n.children)};function Tn(){var n=Object(h.a)(["\n  &:first-child {\n    "," {\n      //border-top: 1px solid ",";\n    }\n  }\n"]);return Tn=function(){return n},n}function An(){var n=Object(h.a)(["\n  position: relative;\n  display: block;\n  padding: 16px 18px;\n  color: ",";\n  text-decoration: none;\n  ","\n"]);return An=function(){return n},n}function Hn(){var n=Object(h.a)(["\n  display: flex;\n  list-style-type: none;\n  padding: 0;\n  margin: 28px 0 0 0;\n  \n"]);return Hn=function(){return n},n}var _n=u.b.ul(Hn()),Nn=u.b.a(An(),function(n){return n.theme.fontColor},function(n){var e=n.isActive,t=n.theme;return e&&'\n    &:before {\n      content: "";\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      display: block;\n      background: '.concat(t.primary,";\n      border-top-right-radius: 5px;\n      border-top-left-radius: 5px;\n      width: 100%;\n      height: 4px;\n    }\n  ")}),Fn=u.b.li(Tn(),Nn,function(n){return n.theme.borderColor}),Bn=function(n){var e=Object(r.useContext)(f),t=e.projectsData,i=e.activeProject,o=e.setActiveProject,c=e.updateProjectsData,u=t[i].icons,l=function(){var n=Object(xn.a)(vn.a.mark(function n(e){var r,a,o,u,l,d,f,s,h,b,p;return vn.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r=Object(L.a)(t),a=[],o=e.target.files,u=r[i].icons,!(o.length>0)){n.next=22;break}l=0;case 6:if(!(l<o.length)){n.next=20;break}return d=o[l],f=d.name,s=D(f),(h={filename:"",name:"",source:""}).filename=f,h.name=s,n.next=15,A(d);case 15:h.source=n.sent,P(s,u)?(b=T(h,u),a.push(b)):a.push(h);case 17:l++,n.next=6;break;case 20:n.next=23;break;case 22:console.log("chyba uploadu");case 23:for(p=0;p<a.length;p++)r[i].icons=[].concat(Object(L.a)(t[i].icons),[a[p]]);c(r),H("/api/upload-icon",JSON.stringify({icons:a,projectName:r[i].filename})).then(function(){return console.log("Ikony pridany.")}).catch(function(n){return console.error(n)});case 26:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(en,{columnProjects:!0},a.a.createElement(pn,{element:"h2",type:"heading1"},"Your projects"),a.a.createElement(_n,null,t.map(function(n,e){return a.a.createElement(Fn,{key:e},a.a.createElement(Nn,{href:"#",onClick:function(){return o(e)},isActive:e===i},n.name))}))),a.a.createElement(Ln,null,u.map(function(n,e){return a.a.createElement(Pn,{key:e},a.a.createElement(Cn,{data:n,onClick:function(){return function(n){var e=Object(L.a)(t),r=n.name,a=e[i].icons.findIndex(function(e){return e.name===n.name}),o=[].concat(Object(L.a)(e[i].icons.slice(0,a)),Object(L.a)(e[i].icons.slice(a+1,e[i].icons.length)));e[i].icons=o,c(e),H("/api/remove-icon",JSON.stringify({iconData:n,projectName:e[i].filename})).then(function(n){console.log("Client: Ikona "+r+" odebrana.")}).catch(function(n){return console.error(n)})}(n)}}))})),a.a.createElement("div",null,a.a.createElement("label",null,"Path to final folder"),a.a.createElement("input",{type:"text"}),a.a.createElement("button",{onClick:function(){console.log("generate library")}},"Generovat"),a.a.createElement("br",null),a.a.createElement("input",{type:"file",name:"test",id:"test",onChange:function(n){return l(n)},multiple:!0})))};function Rn(){var n=Object(h.a)(["\n  z-index: 4;\n"]);return Rn=function(){return n},n}function In(){var n=Object(h.a)(["\n  opacity: 0;\n  width: 0;\n  height: 0;\n  &:checked {\n    & + label "," {\n      //background-color: #00ff00;\n    }\n    \n    & + label ",":before {\n      transform: translateX(24px);\n    }\n  }\n"]);return In=function(){return n},n}function Jn(){var n=Object(h.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 12.5px;\n  background-color: transparent;\n  z-index: 3;\n  pointer-events: none;\n  & > "," {\n    &:first-child {\n      left: 5px;\n      opacity: ",";\n    }\n    &:last-child {\n      right: 5px;\n      opacity: ",";\n    }\n  }\n"]);return Jn=function(){return n},n}function Wn(){var n=Object(h.a)(["\n  position: absolute;\n  display: block;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 14px;\n  height: 14px;\n  opacity: ",";\n  transition: 0.25s ease;\n  color: ",";\n  & > svg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    fill: currentColor;\n    pointer-events: none;\n    transform: translateZ(0);\n  }\n"]);return Wn=function(){return n},n}function Zn(){var n=Object(h.a)(["\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 12.5px;\n  overflow: hidden;\n  background-color: ",';\n  transition: .3s;\n  &:before {\n    position: absolute;\n    content: "";\n    height: 22px;\n    width: 22px;\n    left: 2px;\n    bottom: 2px;\n    border-radius: 50%;\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, .4);\n    background-color: white;\n    transition: .3s;\n    z-index: 4;\n  }\n']);return Zn=function(){return n},n}function Vn(){var n=Object(h.a)(["\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 26px;\n"]);return Vn=function(){return n},n}var Gn=u.b.div(Vn()),Xn=u.b.span(Zn(),function(n){return n.theme.handleColor}),Yn=u.b.div(Wn(),function(n){return n.active?"1":"0"},function(n){return n.theme.fontColor}),$n=u.b.div(Jn(),Yn,function(n){return n.active?"1":"0"},function(n){return n.active?"0":"1"}),qn=u.b.input(In(),Xn,Xn),Kn=u.b.label(Rn());var Qn=function(){var n=Object(r.useContext)(f),e=n.theme,t=n.switchTheme;return a.a.createElement(Gn,null,a.a.createElement(qn,{type:"checkbox",checked:"dark"===e.THEME_NAME,onChange:function(){}}),a.a.createElement(Kn,{onClick:function(){t()}},a.a.createElement(Xn,null),a.a.createElement($n,{active:"dark"===e.THEME_NAME},a.a.createElement(Yn,null,a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.a.createElement("path",{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}))),a.a.createElement(Yn,null,a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.a.createElement("path",{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}))))))};function Un(){var n=Object(h.a)(["\n  padding: 0 20px;\n  margin-bottom: 42px;\n"]);return Un=function(){return n},n}function ne(){var n=Object(h.a)(["\n  &:first-child {\n    "," {\n      border-top: 1px solid ",";\n    }\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(h.a)(["\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  border-bottom: 1px solid ",";\n  color: ",";\n  text-decoration: none;\n  background: ",";\n  transition: background 0.3s ease;\n  ","\n"]);return ee=function(){return n},n}function te(){var n=Object(h.a)(["\n  list-style-type: none;\n  padding: 0;\n"]);return te=function(){return n},n}function re(){var n=Object(h.a)(["\n  & > svg {\n    fill: ",";\n  }\n"]);return re=function(){return n},n}function ae(){var n=Object(h.a)(["\n  padding: 20px; \n  margin-bottom: 0;\n"]);return ae=function(){return n},n}var ie=u.b.div(ae()),oe=u.b.div(re(),function(n){return n.theme.primary}),ce=u.b.ul(te()),ue=u.b.a(ee(),function(n){return n.theme.borderColor},function(n){return n.theme.fontColor},function(n){var e=n.isActive,t=n.theme;return e?"linear-gradient(-45deg, ".concat(t.backgroundSecondary,", transparent)"):"transparent"},function(n){var e=n.isActive,t=n.theme;return e&&'\n    &:before {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block;\n      background: '.concat(t.primary,";\n      border-top-right-radius: 5px;\n      border-bottom-right-radius: 5px;\n      width: 4px;\n      height: 100%;\n    }\n  ")}),le=u.b.li(ne(),ue,function(n){return n.theme.borderColor}),de=u.b.div(Un()),fe=function(n){var e=Object(r.useContext)(f),t=e.librariesData,i=e.updateLibrariesData,o=e.activeLibrary,c=e.setActiveLibrary;return a.a.createElement("div",null,a.a.createElement(ie,null,a.a.createElement(oe,null,a.a.createElement("svg",{width:"30",height:"27",viewBox:"0 0 30 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M29.8505 25.8632L22.9883 13.5789H6.95575L0.0935752 25.8632C-0.0311917 26.0842 -0.0311917 26.3684 0.0935752 26.6211C0.218342 26.8737 0.467876 27 0.748601 27H29.1955C29.4762 27 29.6945 26.8737 29.8505 26.6211C29.9752 26.3684 29.9752 26.1158 29.8505 25.8632Z"}),a.a.createElement("path",{d:"M8.51534 12.8211H21.4287C21.7094 12.8211 21.9278 12.6947 22.0837 12.4421C22.2085 12.2211 22.2085 11.9368 22.0837 11.6842L15.6271 0.378947C15.4711 0.126316 15.2527 0 14.972 0C14.6913 0 14.473 0.126316 14.317 0.378947L7.86031 11.7158C7.73555 11.9368 7.73555 12.2211 7.86031 12.4737C7.98508 12.6947 8.23461 12.8211 8.51534 12.8211ZM12.5391 7.73684C12.5391 6.37895 13.6308 5.27368 14.972 5.27368C16.3133 5.27368 17.405 6.37895 17.405 7.73684C17.405 9.09474 16.3133 10.2 14.972 10.2C13.6308 10.2 12.5391 9.09474 12.5391 7.73684Z"})))),a.a.createElement(de,null,a.a.createElement(Qn,null)),a.a.createElement("div",null,a.a.createElement(ce,null,t.map(function(n,e){return a.a.createElement(le,{key:e},a.a.createElement(ue,{href:"#",onClick:function(){return c(e)},isActive:e===o},n.name))}))),a.a.createElement("button",{onClick:function(){i([].concat(Object(L.a)(t),[{name:"Test Library"}]))}},"Append Library"))};var se=function(n){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),i=Object(r.useState)(0),o=Object(c.a)(i,2),u=o[0],l=o[1],d=Object(r.useState)(0),f=Object(c.a)(d,2),h=f[0],b=(f[1],Object(r.useState)(!1)),p=Object(c.a)(b,2),g=p[0],v=p[1],x=Object(r.useState)({left:100-s.userColumnSize,right:s.userColumnSize}),j=Object(c.a)(x,2),E=j[0],O=j[1];return Object(r.useEffect)(function(){document.addEventListener("mousedown",function(n){n.target===e.current&&v(!0)});var n=function(n){if(!g)return!1;var e=t.current.offsetWidth,r=t.current.offsetLeft,a=n.clientX-r,i=Math.max(250,a)/e*100,o=Math.max(250,e-a)/e*100;O({left:function(){if(!(i+o>100))return i}(),right:function(){if(!(i+o>100))return o}()})};return document.addEventListener("mousemove",n),document.addEventListener("mouseup",function(){v(!1)}),function(){document.removeEventListener("mousemove",n)}},[g]),a.a.createElement(m,null,a.a.createElement(w,{isFixed:!0},a.a.createElement(fe,{data:n.appData,setLibrary:function(n){l(n)},activeLibrary:u})),a.a.createElement(C,{ref:t},a.a.createElement(w,{isDragging:g,style:{width:E.left+"%"},isLibraryColumn:!0},a.a.createElement(mn,{data:n.appData,activeLibrary:u})),a.a.createElement(w,{isDragging:g,style:{width:E.right+"%"},ref:e,hasHandle:!0},a.a.createElement(Bn,{data:n.appData,activeProject:h}))))},he={THEME_NAME:"light",primary:"#457BF4",backgroundPrimary:"#F8F8F8",backgroundSecondary:"#fff",backgroundTertiary:"#f2f2f2",handleColor:"#E5E5E5",borderColor:"rgba(0, 0, 0, 0.1)",scrollbarBg:"rgba(0, 0, 0, 0.4)",fontColor:"#000",columnHeaderHeight:60,heading:{weight:{heading1:700,heading2:500,heading3:400,heading4:400,heading5:400},size:{heading1:32,heading2:26,heading3:22,heading4:20,heading5:16}}},be={THEME_NAME:"dark",primary:"#457BF4",backgroundPrimary:"#14141C",backgroundSecondary:"#1C1C28",backgroundTertiary:"#242633",handleColor:"#30303F",borderColor:"rgba(255, 255, 255, 0.1)",scrollbarBg:"rgba(255, 255, 255, 0.4)",fontColor:"#fff",columnHeaderHeight:60,heading:{weight:{heading1:700,heading2:500,heading3:400,heading4:400,heading5:400},size:{heading1:32,heading2:26,heading3:22,heading4:20,heading5:16}}};var pe=function(){var n=Object(r.useState)(!0),e=Object(c.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(be),l=Object(c.a)(o,2),f=l[0],s=l[1],h=Object(r.useState)({}),b=Object(c.a)(h,2),p=b[0],m=b[1],g=Object(r.useState)(null),v=Object(c.a)(g,2),x=v[0],j=v[1],E=Object(r.useState)(0),O=Object(c.a)(E,2),w=O[0],y=O[1],k=Object(r.useState)(null),C=Object(c.a)(k,2),S=C[0],z=C[1],L=Object(r.useState)(0),M=Object(c.a)(L,2),D=M[0],P=M[1];return Object(r.useEffect)(function(){fetch("/api/init").then(function(n){return n.json()}).then(function(n){m(n),j(n.libraries),z(n.projects),i(!1)})},[]),a.a.createElement(d,{value:{theme:f,switchTheme:function(){s(f===be?he:be)},librariesData:x,updateLibrariesData:function(n){j(n)},activeLibrary:w,setActiveLibrary:y,projectsData:S,updateProjectsData:function(n){z(n)},activeProject:D,setActiveProject:P}},a.a.createElement(u.a,{theme:f},a.a.createElement("div",{className:"App"},!t&&a.a.createElement(se,{appData:p}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[113,1,2]]]);
//# sourceMappingURL=main.23cb98e3.chunk.js.map