"use strict";(self.webpackChunkfake_programmer=self.webpackChunkfake_programmer||[]).push([[190],{9790:function(e,t,n){var r=n(7294),a=n(6642),l=n(2338),i=n(2757),o=n(2675),s=n(3200);t.Z=e=>{let{tabName:t,description:n,children:c}=e;return r.createElement(a.Z,null,r.createElement(s.Z,{title:t,description:n,url:"/"+t.toLowerCase()}),r.createElement(l.W,{pt:"50px",centerContent:!0},r.createElement(i.X,{as:"h2"},t),n&&r.createElement(o.x,null,n)),r.createElement(l.W,{w:"100vw",centerContent:!0},c))}},1710:function(e,t,n){n.r(t);var r=n(5785),a=n(7294),l=n(1883),i=n(9790),o=n(7747),s=n(7710),c=n(8371),d=n(2675),u=n(9289),m=n(3717),p=n(3854),f=n(4515);t.default=e=>{var t;let{data:n}=e;const{0:g,1:x}=(0,a.useState)(new Map);(0,a.useEffect)((()=>{const e=new Map;for(const d of n.allMdx.edges){var t,r,a;const n=null===(t=d.node.frontmatter)||void 0===t?void 0:t.date;let u="";if(""!==n){const e=new Date(n);u=(0,f.r)(e)}if(((null===(r=d.node.frontmatter)||void 0===r||null===(a=r.tags)||void 0===a?void 0:a.length)||0)>0)for(const t of(null===(l=d.node.frontmatter)||void 0===l?void 0:l.tags)||[]){var l,i,o;if(null===t)continue;e.has(t)||e.set(t,[]);const n=e.get(t);null==n||n.push({title:(null===(i=d.node.frontmatter)||void 0===i?void 0:i.title)||"",slug:(null===(o=d.node.frontmatter)||void 0===o?void 0:o.slug)||"",date:u})}else{var s,c;e.has("No Tags")||e.set("No Tags",[]);const t=e.get("No Tags");null==t||t.push({title:(null===(s=d.node.frontmatter)||void 0===s?void 0:s.title)||"",slug:(null===(c=d.node.frontmatter)||void 0===c?void 0:c.slug)||"",date:u})}}x(e)}),[]);const{0:h,1:v}=(0,a.useState)("");return a.createElement(i.Z,{tabName:"Tags",description:""},a.createElement(o.xu,{mt:"70px"},a.createElement(s.E,null,(0,r.Z)(g.keys()).map(((e,t)=>{var n;return a.createElement(s.U,{key:t,onClick:()=>v(e)},a.createElement(c.Vp,{size:"lg",key:t,variant:e===h?"solid":"outline",colorScheme:"red"},a.createElement(c.AD,{as:p.Ohp}),a.createElement(c.Sn,{ml:"-4px"},e),a.createElement(d.x,{ml:"2px",mr:"-1px"}," - "+(null===(n=g.get(e))||void 0===n?void 0:n.length))))})))),a.createElement(u.i,{mt:"20px",borderWidth:"2px",borderColor:"red"}),a.createElement(o.xu,{w:"100%"},null===(t=g.get(h))||void 0===t?void 0:t.map(((e,t)=>a.createElement(o.xu,{mt:"20px",key:t},a.createElement(l.Link,{to:"/post/"+e.slug},a.createElement(m.k,{justifyContent:"space-between"},a.createElement(d.x,{size:"17px"},e.title),a.createElement(d.x,null,e.date))))))))}},4515:function(e,t,n){n.d(t,{r:function(){return r}});const r=e=>["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+e.getDate().toString()+", "+e.getFullYear()},7710:function(e,t,n){n.d(t,{E:function(){return s},U:function(){return c}});var r=n(5432),a=n(6554),l=n(8702),i=n(7294),o=n(5893),s=(0,a.G)((function(e,t){const{spacing:n="0.5rem",spacingX:a,spacingY:s,children:d,justify:u,direction:m,align:p,className:f,shouldWrapChildren:g,...x}=e,h=(0,i.useMemo)((()=>g?i.Children.map(d,((e,t)=>(0,o.jsx)(c,{children:e},t))):d),[d,g]);return(0,o.jsx)(l.m.div,{ref:t,className:(0,r.cx)("chakra-wrap",f),...x,children:(0,o.jsx)(l.m.ul,{className:"chakra-wrap__list",__css:{display:"flex",flexWrap:"wrap",justifyContent:u,alignItems:p,flexDirection:m,listStyleType:"none",gap:n,columnGap:a,rowGap:s,padding:"0"},children:h})})}));s.displayName="Wrap";var c=(0,a.G)((function(e,t){const{className:n,...a}=e;return(0,o.jsx)(l.m.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,r.cx)("chakra-wrap__listitem",n),...a})}));c.displayName="WrapItem"},3717:function(e,t,n){n.d(t,{k:function(){return i}});var r=n(6554),a=n(8702),l=n(5893),i=(0,r.G)((function(e,t){const{direction:n,align:r,justify:i,wrap:o,basis:s,grow:c,shrink:d,...u}=e,m={display:"flex",flexDirection:n,alignItems:r,justifyContent:i,flexWrap:o,flexBasis:s,flexGrow:c,flexShrink:d};return(0,l.jsx)(a.m.div,{ref:t,__css:m,...u})}));i.displayName="Flex"},9289:function(e,t,n){n.d(t,{i:function(){return c}});var r=n(6554),a=n(9228),l=n(3179),i=n(8702),o=n(5432),s=n(5893),c=(0,r.G)((function(e,t){const{borderLeftWidth:n,borderBottomWidth:r,borderTopWidth:c,borderRightWidth:d,borderWidth:u,borderStyle:m,borderColor:p,...f}=(0,a.mq)("Divider",e),{className:g,orientation:x="horizontal",__css:h,...v}=(0,l.Lr)(e),y={vertical:{borderLeftWidth:n||d||u||"1px",height:"100%"},horizontal:{borderBottomWidth:r||c||u||"1px",width:"100%"}};return(0,s.jsx)(i.m.hr,{ref:t,"aria-orientation":x,...v,__css:{...f,border:"0",borderColor:p,borderStyle:m,...y[x],...h},className:(0,o.cx)("chakra-divider",g)})}));c.displayName="Divider"},8371:function(e,t,n){n.d(t,{AD:function(){return f},Sn:function(){return p},Vp:function(){return m}});var r=n(6948),a=n(5227),l=n(6554),i=n(9228),o=n(3179),s=n(8702),c=n(5893),[d,u]=(0,a.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),m=(0,l.G)(((e,t)=>{const n=(0,i.jC)("Tag",e),r=(0,o.Lr)(e),a={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...n.container};return(0,c.jsx)(d,{value:n,children:(0,c.jsx)(s.m.span,{ref:t,...r,__css:a})})}));m.displayName="Tag";var p=(0,l.G)(((e,t)=>{const n=u();return(0,c.jsx)(s.m.span,{ref:t,noOfLines:1,...e,__css:n.label})}));p.displayName="TagLabel";var f=(0,l.G)(((e,t)=>(0,c.jsx)(r.J,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e})));f.displayName="TagLeftIcon",(0,l.G)(((e,t)=>(0,c.jsx)(r.J,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e}))).displayName="TagRightIcon";var g=e=>(0,c.jsx)(r.J,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:(0,c.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});g.displayName="TagCloseIcon",(0,l.G)(((e,t)=>{const{isDisabled:n,children:r,...a}=e,l={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...u().closeButton};return(0,c.jsx)(s.m.button,{ref:t,"aria-label":"close",...a,type:"button",disabled:n,__css:l,children:r||(0,c.jsx)(g,{})})})).displayName="TagCloseButton"}}]);
//# sourceMappingURL=component---src-pages-tags-tsx-86dad683d8b96539ee5b.js.map