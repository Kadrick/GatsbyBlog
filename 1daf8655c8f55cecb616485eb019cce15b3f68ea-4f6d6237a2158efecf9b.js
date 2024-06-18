"use strict";(self.webpackChunkfake_programmer=self.webpackChunkfake_programmer||[]).push([[685],{4852:function(t){t.exports=Object.assign},6642:function(t,e,n){n.d(e,{Z:function(){return b}});var r=n(7294),o=n(7747),i=n(2338),a=n(5494),c=n(1883),u=n(7239),s=n(6948),l=n(2675),f=n(6893),p=n(1451);const d=t=>{let{icon:e,link:n,text:o}=t;return r.createElement(c.Link,{to:n},r.createElement(u.M,{ml:"5px",mr:"5px"},r.createElement(s.J,{as:e,m:"2px"}),r.createElement(l.x,{fontSize:"17px"},o)))};var m=()=>r.createElement(u.M,{w:"100vw",h:"50px"},r.createElement(d,{icon:f.m6D,text:"Home",link:"/"}),r.createElement(d,{icon:p.xbj,text:"CV",link:"/cv"}),r.createElement(d,{icon:f.xqv,text:"Works",link:"/works"}),r.createElement(d,{icon:f.yK7,text:"Archive",link:"/archive"}),r.createElement(d,{icon:f.E25,text:"Tags",link:"/tags"})),h=n(2883);var y=()=>r.createElement(u.M,{w:"100vw",h:"100px"},r.createElement(l.x,{color:"gray",fontSize:"15px",textAlign:"center"},"Inspired by"," ",r.createElement(h.r,{fontWeight:"bold",href:"https://github.com/526avijitgupta/gokarna",target:"_blank"},"Gokarna")," ","& CSS by"," ",r.createElement(h.r,{fontWeight:"bold",href:"https://github.com/kasterra",target:"_blank"},"Kasterra"),r.createElement("br",null),"©"," ",r.createElement(h.r,{fontWeight:"bold",href:"https://github.com/Kadrick",target:"_blank"},"BoGwon Kang")," ","2023, Built with"," ",r.createElement(h.r,{fontWeight:"bold",href:"https://www.gatsbyjs.com",target:"_blank"},"Gatsby")));const v={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};var b=t=>{let{children:e}=t;return r.createElement(o.xu,{w:"100vw"},r.createElement(m,null),r.createElement(a.E.div,{initial:"hidden",animate:"enter",exit:"exit",variants:v,transition:{duration:.4,type:"easeInOut"},style:{width:"100vw"}},r.createElement(i.W,{minH:"calc(100vh - 150px)",centerContent:!0,maxWidth:"none"},e)),r.createElement(y,null))}},3200:function(t,e,n){n.d(e,{Z:function(){return mt}});var r,o,i,a,c=n(7294),u=n(5697),s=n.n(u),l=n(3524),f=n.n(l),p=n(9590),d=n.n(p),m=n(4852),h=n.n(m),y="bodyAttributes",v="htmlAttributes",b="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(t){return g[t]})),"charset"),w="cssText",E="href",x="http-equiv",C="innerHTML",k="itemprop",A="name",O="property",S="rel",j="src",L="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",_="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",H=Object.keys(N).reduce((function(t,e){return t[N[e]]=e,t}),{}),q=[g.NOSCRIPT,g.SCRIPT,g.STYLE],W="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Y=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},G=function(t){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(t){var e=J(t,g.TITLE),n=J(t,R);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=J(t,P);return e||r||void 0},K=function(t){return J(t,M)||function(){}},U=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return D({},t,e)}),{})},V=function(t,e){return e.filter((function(t){return void 0!==t[g.BASE]})).map((function(t){return t[g.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},Z=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&et("Helmet: "+t+' should be of type "Array". Instead found type "'+z(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||n===S&&"canonical"===t[n].toLowerCase()||u===S&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==C&&c!==w&&c!==k||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=h()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},J=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},X=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){X(t)}),0)}),Q=function(t){return clearTimeout(t)},$="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,tt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Q:n.g.cancelAnimationFrame||Q,et=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},nt=null,rt=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;at(g.BODY,r),at(g.HTML,o),it(f,p);var d={baseTag:ct(g.BASE,n),linkTags:ct(g.LINK,i),metaTags:ct(g.META,a),noscriptTags:ct(g.NOSCRIPT,c),scriptTags:ct(g.SCRIPT,s),styleTags:ct(g.STYLE,l)},m={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(m[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,m,h)},ot=function(t){return Array.isArray(t)?t.join(""):t},it=function(t,e){void 0!==t&&document.title!==t&&(document.title=ot(t)),at(g.TITLE,e)},at=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(W),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(W):n.getAttribute(W)!==a.join(",")&&n.setAttribute(W,a.join(","))}},ct=function(t,e){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(t+"["+W+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===C)n.innerHTML=e.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(W,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},ut=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},st=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[N[n]||n]=t[n],e}),e)},lt=function(t,e,n){switch(t){case g.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[W]=!0,o=st(n,r),[c.createElement(g.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=ut(n),i=ot(e);return o?"<"+t+" "+W+'="true" '+o+">"+G(i,r)+"</"+t+">":"<"+t+" "+W+'="true">'+G(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case y:case v:return{toComponent:function(){return st(e)},toString:function(){return ut(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[W]=!0,r);return Object.keys(e).forEach((function(t){var n=N[t]||t;if(n===C||n===w){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),c.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===C||t===w)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+G(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===q.indexOf(t);return e+"<"+t+" "+W+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},ft=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:lt(g.BASE,e,r),bodyAttributes:lt(y,n,r),htmlAttributes:lt(v,o,r),link:lt(g.LINK,i,r),meta:lt(g.META,a,r),noscript:lt(g.NOSCRIPT,c,r),script:lt(g.SCRIPT,u,r),style:lt(g.STYLE,s,r),title:lt(g.TITLE,{title:f,titleAttributes:p},r)}},pt=f()((function(t){return{baseTag:V([E,L],t),bodyAttributes:U(y,t),defer:J(t,I),encode:J(t,_),htmlAttributes:U(v,t),linkTags:Z(g.LINK,[S,E],t),metaTags:Z(g.META,[A,T,x,O,k],t),noscriptTags:Z(g.NOSCRIPT,[C],t),onChangeClientState:K(t),scriptTags:Z(g.SCRIPT,[j,C],t),styleTags:Z(g.STYLE,[w],t),title:F(t),titleAttributes:U(b,t)}}),(function(t){nt&&tt(nt),t.defer?nt=$((function(){rt(t,(function(){nt=null}))})):(rt(t),nt=null)}),ft)((function(){return null})),dt=(o=pt,a=i=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:e};case g.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return D({},r,((e={})[n.type]=[].concat(r[n.type]||[],[D({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case g.TITLE:return D({},o,((e={})[r.type]=a,e.titleAttributes=D({},i),e));case g.BODY:return D({},o,{bodyAttributes:D({},i)});case g.HTML:return D({},o,{htmlAttributes:D({},i)})}return D({},o,((n={})[r.type]=D({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=D({},e);return Object.keys(t).forEach((function(e){var r;n=D({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return c.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[H[n]||n]=t[n],e}),e)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=Y(t,["children"]),r=D({},n);return e&&(r=this.mapChildrenToProps(e,r)),c.createElement(o,r)},B(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=ft({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);dt.renderStatic=dt.rewind;var mt=t=>{let{title:e,description:n,url:r}=t;return c.createElement(dt,null,c.createElement("title",null,e),c.createElement("meta",{property:"og:title",content:e}),c.createElement("meta",{property:"og:url",content:r}),c.createElement("meta",{property:"og:description",content:n}),c.createElement("meta",{name:"description",content:n}),c.createElement("meta",{name:"google-site-verification",content:"4kzehFruQ9r8bMn9IElnTZRWWR4SaPsJSfdGwVhlYVI"}))}},6893:function(t,e,n){n.d(e,{E25:function(){return u},m6D:function(){return c},uOf:function(){return a},xqv:function(){return i},yK7:function(){return o}});var r=n(4405);function o(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}},{tag:"path",attr:{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"}}]})(t)}function i(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"}},{tag:"polyline",attr:{points:"8 6 2 12 8 18"}}]})(t)}function a(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(t)}function c(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"}}]})(t)}function u(t){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"}}]})(t)}},4405:function(t,e,n){n.d(e,{w_:function(){return s}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function u(t){return t&&t.map((function(t,e){return r.createElement(t.tag,a({key:e},t.attr),u(t.child))}))}function s(t){return function(e){return r.createElement(l,a({attr:a({},t.attr)},e),u(t.child))}}function l(t){var e=function(e){var n,o=t.attr,i=t.size,u=t.title,s=c(t,["attr","size","title"]),l=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,s,{className:n,style:a(a({color:t.color||e.color},e.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}},3524:function(t,e,n){var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2675:function(t,e,n){n.d(e,{x:function(){return s}});var r=n(6554),o=n(9228),i=n(3179),a=n(8702),c=n(5432);var u=n(5893),s=(0,r.G)((function(t,e){const n=(0,o.mq)("Text",t),{className:r,align:s,decoration:l,casing:f,...p}=(0,i.Lr)(t),d=function(t){const e=Object.assign({},t);for(let n in e)void 0===e[n]&&delete e[n];return e}({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return(0,u.jsx)(a.m.p,{ref:e,className:(0,c.cx)("chakra-text",t.className),...d,...p,__css:n})}));s.displayName="Text"},2338:function(t,e,n){n.d(e,{W:function(){return s}});var r=n(6554),o=n(3179),i=n(9228),a=n(8702),c=n(5432),u=n(5893),s=(0,r.G)((function(t,e){const{className:n,centerContent:r,...s}=(0,o.Lr)(t),l=(0,i.mq)("Container",t);return(0,u.jsx)(a.m.div,{ref:e,className:(0,c.cx)("chakra-container",n),...s,__css:{...l,...r&&{display:"flex",flexDirection:"column",alignItems:"center"}}})}));s.displayName="Container"},2757:function(t,e,n){n.d(e,{X:function(){return s}});var r=n(6554),o=n(9228),i=n(3179),a=n(8702),c=n(5432),u=n(5893),s=(0,r.G)((function(t,e){const n=(0,o.mq)("Heading",t),{className:r,...s}=(0,i.Lr)(t);return(0,u.jsx)(a.m.h2,{ref:e,className:(0,c.cx)("chakra-heading",t.className),...s,__css:n})}));s.displayName="Heading"},7239:function(t,e,n){n.d(e,{M:function(){return a}});var r=n(8702),o=n(6554),i=n(5893),a=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});a.displayName="Center";var c={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,o.G)((function(t,e){const{axis:n="both",...o}=t;return(0,i.jsx)(r.m.div,{ref:e,__css:c[n],...o,position:"absolute"})}))},2883:function(t,e,n){n.d(e,{r:function(){return s}});var r=n(6554),o=n(9228),i=n(3179),a=n(8702),c=n(5432),u=n(5893),s=(0,r.G)((function(t,e){const n=(0,o.mq)("Link",t),{className:r,isExternal:s,...l}=(0,i.Lr)(t);return(0,u.jsx)(a.m.a,{target:s?"_blank":void 0,rel:s?"noopener":void 0,ref:e,className:(0,c.cx)("chakra-link",r),...l,__css:n})}));s.displayName="Link"},7747:function(t,e,n){n.d(e,{xu:function(){return a}});var r=n(8702),o=n(6554),i=n(5893),a=(0,r.m)("div");a.displayName="Box";var c=(0,o.G)((function(t,e){const{size:n,centerContent:r=!0,...o}=t,c=r?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,i.jsx)(a,{ref:e,boxSize:n,__css:{...c,flexShrink:0,flexGrow:0},...o})}));c.displayName="Square",(0,o.G)((function(t,e){const{size:n,...r}=t;return(0,i.jsx)(c,{size:n,ref:e,borderRadius:"9999px",...r})})).displayName="Circle"}}]);
//# sourceMappingURL=1daf8655c8f55cecb616485eb019cce15b3f68ea-4f6d6237a2158efecf9b.js.map