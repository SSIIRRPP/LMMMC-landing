"use strict";(self.webpackChunklmmmc_landing=self.webpackChunklmmmc_landing||[]).push([[434],{9515:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(885),i=n(2791),r=n(544),o=n(184),s=function(e){var t=e.children,n=e.className,s=e.childRef,l=e.style,c=void 0===l?{}:l,d=e.options,u=void 0===d?{ratio:.2,threshold:[.2,.4,.6,.8]}:d,f=e.onShow,m=e.active,v=e.id,h=(0,i.useRef)(null),x=(0,i.useState)(!1),p=(0,a.Z)(x,2),Z=p[0],b=p[1],y=(0,i.useState)(!0),g=(0,a.Z)(y,2),j=g[0],N=g[1],C=(0,r.Z)({childRef:s||h,options:u||void 0,active:"boolean"===typeof m?m:j}).isVisible;return(0,i.useEffect)((function(){C&&(b(!0),N(!1),"function"===typeof f&&f())}),[C,f]),(0,o.jsx)("div",{ref:s||h,className:"FadeInComp ".concat(Z?"show":"hide").concat(n?" ".concat(n):""),style:c,id:v||void 0,children:t})}},8598:function(e,t,n){n.d(t,{O:function(){return d}});var a=n(1413),i=n(885),r=n(2791),o=n(8616),s=n(8516),l=n(9515),c=n(184),d=function(e){var t=e.children,n=e.width,d=e.containerClass,u=e.containerStyle,f=void 0===u?{}:u,m=e.includeWidthContainer,v=e.updateParallaxControllerOnResultUpdate,h=void 0!==v&&v,x=e.heightModifier,p=e.widthSwitch,Z=e.fadeIn,b=void 0!==Z&&Z,y=(0,r.useRef)(null),g=(0,r.useContext)(s.Z),j=g.sizes.width,N=g.fontSizeTransform,C=(0,o.JG)(),w=(0,r.useState)(800),k=(0,i.Z)(w,2),S=k[0],F=k[1],I=(0,r.useMemo)((function(){return n||j}),[n,j]),P=(0,r.useMemo)((function(){var e=m?(0,a.Z)((0,a.Z)({},p(I)),{},{width:I})||{height:800,width:I}:p(I)||{height:800};return(0,a.Z)((0,a.Z)({},e),{},{height:e.height*N})}),[I,p,m,N]),_=(0,r.useMemo)((function(){return"function"===typeof t?t({result:P,ref:y}):t}),[t,P]);return(0,r.useEffect)((function(){null!==P&&void 0!==P&&P.height?F("function"===typeof x?x(null===P||void 0===P?void 0:P.height):null===P||void 0===P?void 0:P.height):F(800)}),[x,null===P||void 0===P?void 0:P.height]),(0,r.useEffect)((function(){h&&C.update()}),[P,h,C]),(0,r.useMemo)((function(){return(0,c.jsx)(c.Fragment,{children:I?(0,c.jsx)("div",{ref:y,className:d||"",style:null!==P&&void 0!==P&&P.constainerStyle?(0,a.Z)((0,a.Z)((0,a.Z)({},f),null===P||void 0===P?void 0:P.constainerStyle),{},{minHeight:S,width:m?I:void 0}):(0,a.Z)((0,a.Z)({},f),{},{minHeight:S,width:m?I:void 0}),children:b?(0,c.jsx)(l.Z,{children:_}):(0,c.jsx)(c.Fragment,{children:_})}):null})}),[d,f,m,b,_,P,S,I])};t.Z=function(e){var t=e.children,n=e.className,i=e.style,r=void 0===i?{}:i,s=e.layers,l=void 0===s?[]:s;return(0,c.jsx)(d,(0,a.Z)((0,a.Z)({},e),{},{children:function(e){var i=e.result,s=e.ref;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.UG,{className:n||"",layers:"function"===typeof l?l(i,s):l,style:null!==i&&void 0!==i&&i.style?(0,a.Z)((0,a.Z)((0,a.Z)({},r),i.style),{},{height:(null===i||void 0===i?void 0:i.height)||800}):(0,a.Z)((0,a.Z)({},r),{},{height:(null===i||void 0===i?void 0:i.height)||800})}),t||null]})}}))}},3117:function(e,t,n){var a=n(4942),i=n(1413),r=n(2791),o=n(9403),s=n(8516),l=n(184),c={x:.002,y:.005};t.Z=function(e){var t=e.children,n=e.width,d=e.height,u=e.factor,f=void 0===u?c:u,m=e.containerStyles,v=void 0===m?{}:m,h=e.updateStyles,x=void 0===h?function(){return{}}:h,p=f.x,Z=void 0===p?.002:p,b=f.y,y=void 0===b?.005:b,g=(0,r.useContext)(s.Z).touch,j=(0,r.useMemo)((function(){return function(e,t){var n={},r=function(e,t){e&&(n=(0,i.Z)((0,i.Z)({},n),{},(0,a.Z)({},t,e)))};return r(e,"height"),r(t,"width"),0===Object.keys(n).length&&console.warn("No height or width provided"),n}(d,n)}),[d,n]);return(0,l.jsx)(o.W7,{enabled:!g,useWindowMouseEvents:!0,containerStyles:(0,i.Z)((0,i.Z)({},j),v),children:(0,l.jsx)(o.JV,{factorX:Z,factorY:y,updateStyles:function(e){return"function"===typeof x?(0,i.Z)((0,i.Z)({},j),x(e)):"object"===typeof x?(0,i.Z)((0,i.Z)({},j),x):j},children:t})})}},3888:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1413),i=n(2791),r=n(8616),o=n(919),s=n(184),l=function(e){var t=e.lines,n=void 0===t?[]:t,l=e.style,c=e.height,d=(0,i.useContext)(o.Z).theme,u=(0,i.useMemo)((function(){return n.map((function(e,t){var n=e.scale,a=void 0===n?{}:n,i=e.startScroll,o=void 0===i?.7*c:i,l=e.style,u=void 0===l?{}:l,f=e.rotated,m=void 0!==f&&f,v=e.toLeft,h=void 0!==v&&v,x=a.x,p=a.y;return(0,s.jsx)(r.VS,{scaleY:p||void 0,scaleX:x||void 0,startScroll:o,shouldAlwaysCompleteAnimation:!0,style:u,children:(0,s.jsx)("div",{className:"ParallaxBCKLines__item".concat(m?" rotated":""," ").concat(h?"toleft":"toright"," ParallaxBCKLines__item").concat("dark"===d.name?"-dark":"-light")})},"ParallaxBCKLines-".concat(t,"-").concat(Date.now()/t))}))}),[null===d||void 0===d?void 0:d.name,n,c]);return(0,s.jsx)("div",{className:"ParallaxBCKLines",style:(0,a.Z)((0,a.Z)({},l),{},{height:c}),children:u})}},3708:function(e,t,n){n.d(t,{Nc:function(){return a},iq:function(){return i},ok:function(){return r},td:function(){return o}});var a=function(e){return encodeURI("".concat("https://wa.me/34675886560","?text=").concat(e))},i="6LdOkDMfAAAAAPR5kZzRomd_qBwfPn1U5sxa6yuc",r=["Alquiler velero con patr\xf3n","Alquiler lanchas","Consigue tu licencia de navegacion en un d\xeda","Cursos PNB/PER"],o="https://api.lamangamarmenorcharter.com/"},544:function(e,t,n){var a=n(885),i=n(2791),r=n(763).throttle;t.Z=function(e){var t=e.active,n=void 0===t||t,o=e.retrieveEntry,s=void 0!==o&&o,l=e.fatherRef,c=e.childRef,d=e.options,u=void 0===d?{}:d,f=(0,i.useState)(!1),m=(0,a.Z)(f,2),v=m[0],h=m[1],x=(0,i.useState)(null),p=(0,a.Z)(x,2),Z=p[0],b=p[1],y=(0,i.useState)(null),g=(0,a.Z)(y,2),j=g[0],N=g[1],C=(0,i.useState)({}),w=(0,a.Z)(C,2),k=w[0],S=w[1],F=(0,i.useState)(!1),I=(0,a.Z)(F,2),P=I[0],_=I[1],E=(0,i.useCallback)((function(e){e[0].intersectionRatio>(u.ratio?u.ratio:.5)?v||(s&&S(e[0]),h(!0)):v&&(h(!1),S(null))}),[u.ratio,s,v]),R=(0,i.useCallback)((function(){if(Z&&j&&v){var e=Z.getBoundingClientRect().top,t=null===j||void 0===j?void 0:j.getBoundingClientRect(),n=t.bottom,a=t.top;_(!(e-a>(n-a)/2))}}),[Z,j,v]);return(0,i.useEffect)((function(){null!==c&&void 0!==c&&c.current?b(c.current):b(null)}),[c]),(0,i.useEffect)((function(){null!==l&&void 0!==l&&l.current?N(l.current):N(null)}),[l]),(0,i.useEffect)((function(){if(R(),j&&n){var e=j,t=r(R,300);return null===e||void 0===e||e.addEventListener("scroll",t),function(){return null===e||void 0===e?void 0:e.removeEventListener("scroll",t)}}}),[j,n,R]),(0,i.useEffect)((function(){if(n&&Z){var e={root:j||null,rootMargin:u.rootMargin?u.rootMargin:"0px 0px 0px",threshold:u.threshold?u.threshold:[.95,.15]},t=new IntersectionObserver(E,e);return t.observe(Z),function(){return t.disconnect()}}}),[j,Z,u,n,E]),{isVisible:v,entry:k,isInTopHalf:P}}},3434:function(e,t,n){n.r(t),n.d(t,{default:function(){return Se}});var a=n(1413),i=n(2791),r=n(4942),o=n(885),s=n(5987),l=n(1694),c=n.n(l),d=n(2007),u=n.n(d),f=n(184),m=["as","className","type","tooltip"],v={type:u().string,tooltip:u().bool,as:u().elementType},h=i.forwardRef((function(e,t){var n=e.as,i=void 0===n?"div":n,r=e.className,o=e.type,l=void 0===o?"valid":o,d=e.tooltip,u=void 0!==d&&d,v=(0,s.Z)(e,m);return(0,f.jsx)(i,(0,a.Z)((0,a.Z)({},v),{},{ref:t,className:c()(r,"".concat(l,"-").concat(u?"tooltip":"feedback"))}))}));h.displayName="Feedback",h.propTypes=v;var x=h,p=i.createContext({}),Z=n(162),b=["id","bsPrefix","className","type","isValid","isInvalid","as"],y=i.forwardRef((function(e,t){var n=e.id,r=e.bsPrefix,o=e.className,l=e.type,d=void 0===l?"checkbox":l,u=e.isValid,m=void 0!==u&&u,v=e.isInvalid,h=void 0!==v&&v,x=e.as,y=void 0===x?"input":x,g=(0,s.Z)(e,b),j=(0,i.useContext)(p).controlId;return r=(0,Z.vE)(r,"form-check-input"),(0,f.jsx)(y,(0,a.Z)((0,a.Z)({},g),{},{ref:t,type:d,id:n||j,className:c()(o,r,m&&"is-valid",h&&"is-invalid")}))}));y.displayName="FormCheckInput";var g=y,j=["bsPrefix","className","htmlFor"],N=i.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.htmlFor,l=(0,s.Z)(e,j),d=(0,i.useContext)(p).controlId;return n=(0,Z.vE)(n,"form-check-label"),(0,f.jsx)("label",(0,a.Z)((0,a.Z)({},l),{},{ref:t,htmlFor:o||d,className:c()(r,n)}))}));N.displayName="FormCheckLabel";var C=N,w=n(1701),k=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],S=i.forwardRef((function(e,t){var n=e.id,r=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,d=void 0!==l&&l,u=e.disabled,m=void 0!==u&&u,v=e.isValid,h=void 0!==v&&v,b=e.isInvalid,y=void 0!==b&&b,j=e.feedbackTooltip,N=void 0!==j&&j,S=e.feedback,F=e.feedbackType,I=e.className,P=e.style,_=e.title,E=void 0===_?"":_,R=e.type,L=void 0===R?"checkbox":R,z=e.label,O=e.children,M=e.as,V=void 0===M?"input":M,T=(0,s.Z)(e,k);r=(0,Z.vE)(r,"form-check"),o=(0,Z.vE)(o,"form-switch");var q=(0,i.useContext)(p).controlId,A=(0,i.useMemo)((function(){return{controlId:n||q}}),[q,n]),G=!O&&null!=z&&!1!==z||(0,w.XW)(O,C),B=(0,f.jsx)(g,(0,a.Z)((0,a.Z)({},T),{},{type:"switch"===L?"checkbox":L,ref:t,isValid:h,isInvalid:y,disabled:m,as:V}));return(0,f.jsx)(p.Provider,{value:A,children:(0,f.jsx)("div",{style:P,className:c()(I,G&&r,d&&"".concat(r,"-inline"),"switch"===L&&o),children:O||(0,f.jsxs)(f.Fragment,{children:[B,G&&(0,f.jsx)(C,{title:E,children:z}),S&&(0,f.jsx)(x,{type:F,tooltip:N,children:S})]})})})}));S.displayName="FormCheck";var F=Object.assign(S,{Input:g,Label:C}),I=(n(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),P=i.forwardRef((function(e,t){var n,o,l=e.bsPrefix,d=e.type,u=e.size,m=e.htmlSize,v=e.id,h=e.className,x=e.isValid,b=void 0!==x&&x,y=e.isInvalid,g=void 0!==y&&y,j=e.plaintext,N=e.readOnly,C=e.as,w=void 0===C?"input":C,k=(0,s.Z)(e,I),S=(0,i.useContext)(p).controlId;(l=(0,Z.vE)(l,"form-control"),j)?n=(0,r.Z)({},"".concat(l,"-plaintext"),!0):(o={},(0,r.Z)(o,l,!0),(0,r.Z)(o,"".concat(l,"-").concat(u),u),n=o);return(0,f.jsx)(w,(0,a.Z)((0,a.Z)({},k),{},{type:d,size:m,ref:t,readOnly:N,id:v||S,className:c()(h,n,b&&"is-valid",g&&"is-invalid","color"===d&&"".concat(l,"-color"))}))}));P.displayName="FormControl";var _=Object.assign(P,{Feedback:x}),E=(0,n(6543).Z)("form-floating"),R=["controlId","as"],L=i.forwardRef((function(e,t){var n=e.controlId,r=e.as,o=void 0===r?"div":r,l=(0,s.Z)(e,R),c=(0,i.useMemo)((function(){return{controlId:n}}),[n]);return(0,f.jsx)(p.Provider,{value:c,children:(0,f.jsx)(o,(0,a.Z)((0,a.Z)({},l),{},{ref:t}))})}));L.displayName="FormGroup";var z=L,O=["as","bsPrefix","className"],M=["className"],V=["xxl","xl","lg","md","sm","xs"];var T=i.forwardRef((function(e,t){var n=function(e){var t=e.as,n=e.bsPrefix,i=e.className,r=(0,s.Z)(e,O);n=(0,Z.vE)(n,"col");var o=[],l=[];return V.forEach((function(e){var t,a,i,s=r[e];delete r[e],"object"===typeof s&&null!=s?(t=s.span,a=s.offset,i=s.order):t=s;var c="xs"!==e?"-".concat(e):"";t&&o.push(!0===t?"".concat(n).concat(c):"".concat(n).concat(c,"-").concat(t)),null!=i&&l.push("order".concat(c,"-").concat(i)),null!=a&&l.push("offset".concat(c,"-").concat(a))})),[(0,a.Z)((0,a.Z)({},r),{},{className:c().apply(void 0,[i].concat(o,l))}),{as:t,bsPrefix:n,spans:o}]}(e),i=(0,o.Z)(n,2),r=i[0],l=r.className,d=(0,s.Z)(r,M),u=i[1],m=u.as,v=void 0===m?"div":m,h=u.bsPrefix,x=u.spans;return(0,f.jsx)(v,(0,a.Z)((0,a.Z)({},d),{},{ref:t,className:c()(l,!x.length&&h)}))}));T.displayName="Col";var q=T,A=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],G=i.forwardRef((function(e,t){var n=e.as,r=void 0===n?"label":n,o=e.bsPrefix,l=e.column,d=e.visuallyHidden,u=e.className,m=e.htmlFor,v=(0,s.Z)(e,A),h=(0,i.useContext)(p).controlId;o=(0,Z.vE)(o,"form-label");var x="col-form-label";"string"===typeof l&&(x="".concat(x," ").concat(x,"-").concat(l));var b=c()(u,o,d&&"visually-hidden",l&&x);return m=m||h,l?(0,f.jsx)(q,(0,a.Z)({ref:t,as:"label",className:b,htmlFor:m},v)):(0,f.jsx)(r,(0,a.Z)({ref:t,className:b,htmlFor:m},v))}));G.displayName="FormLabel",G.defaultProps={column:!1,visuallyHidden:!1};var B=G,H=["bsPrefix","className","id"],U=i.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.id,l=(0,s.Z)(e,H),d=(0,i.useContext)(p).controlId;return n=(0,Z.vE)(n,"form-range"),(0,f.jsx)("input",(0,a.Z)((0,a.Z)({},l),{},{type:"range",ref:t,className:c()(r,n),id:o||d}))}));U.displayName="FormRange";var W=U,D=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],K=i.forwardRef((function(e,t){var n=e.bsPrefix,r=e.size,o=e.htmlSize,l=e.className,d=e.isValid,u=void 0!==d&&d,m=e.isInvalid,v=void 0!==m&&m,h=e.id,x=(0,s.Z)(e,D),b=(0,i.useContext)(p).controlId;return n=(0,Z.vE)(n,"form-select"),(0,f.jsx)("select",(0,a.Z)((0,a.Z)({},x),{},{size:o,ref:t,className:c()(l,n,r&&"".concat(n,"-").concat(r),u&&"is-valid",v&&"is-invalid"),id:h||b}))}));K.displayName="FormSelect";var X=K,J=["bsPrefix","className","as","muted"],Y=i.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,r=e.as,o=void 0===r?"small":r,l=e.muted,d=(0,s.Z)(e,J);return n=(0,Z.vE)(n,"form-text"),(0,f.jsx)(o,(0,a.Z)((0,a.Z)({},d),{},{ref:t,className:c()(i,n,l&&"text-muted")}))}));Y.displayName="FormText";var $=Y,Q=i.forwardRef((function(e,t){return(0,f.jsx)(F,(0,a.Z)((0,a.Z)({},e),{},{ref:t,type:"switch"}))}));Q.displayName="Switch";var ee=Object.assign(Q,{Input:F.Input,Label:F.Label}),te=["bsPrefix","className","children","controlId","label"],ne=i.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,r=e.children,o=e.controlId,l=e.label,d=(0,s.Z)(e,te);return n=(0,Z.vE)(n,"form-floating"),(0,f.jsxs)(z,(0,a.Z)((0,a.Z)({ref:t,className:c()(i,n),controlId:o},d),{},{children:[r,(0,f.jsx)("label",{htmlFor:o,children:l})]}))}));ne.displayName="FloatingLabel";var ae=ne,ie=["className","validated","as"],re={_ref:u().any,validated:u().bool,as:u().elementType},oe=i.forwardRef((function(e,t){var n=e.className,i=e.validated,r=e.as,o=void 0===r?"form":r,l=(0,s.Z)(e,ie);return(0,f.jsx)(o,(0,a.Z)((0,a.Z)({},l),{},{ref:t,className:c()(n,i&&"was-validated")}))}));oe.displayName="Form",oe.propTypes=re;var se=Object.assign(oe,{Group:z,Control:_,Floating:E,Check:F,Switch:ee,Label:B,Text:$,Range:W,Select:X,FloatingLabel:ae}),le=n(3360),ce=n(4849),de=n(7022),ue=n(3504),fe=n(3708),me={email:function(e,t){var n=(0,a.Z)({},e);return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?n.email&&delete n.email:n.email="Introduce un email v\xe1lido",n},name:function(e,t){var n=(0,a.Z)({},e);return t.length>0?n.name&&delete n.name:n.name="Campo requerido",n},subject:function(e,t){var n=(0,a.Z)({},e);return fe.ok.includes(t)?n.subject&&delete n.subject:n.subject="Selecciona un asunto",n},content:function(e,t){var n=(0,a.Z)({},e);return t.length>0?n.content&&delete n.content:n.content="Campo requerido",n},agreement:function(e,t){var n=(0,a.Z)({},e);return t?n.agreement&&delete n.agreement:n.agreement=!0,n}},ve=function(e){var t={};return Object.entries(e).forEach((function(e){t=(0,a.Z)((0,a.Z)({},t),me[e[0]](t,e[1]))})),console.log("a: ",t),t},he=n(3814),xe={name:"",email:"",subject:"",content:"",agreement:!1},pe={name:null,email:null,subject:null,content:null,agreement:null},Ze=function(e){var t=e.state,n=e.errors,a=e.setChange,r=e.handleSubmit,o=e.sending,s=e.sendSuccess,l=e.sendError,c=(0,i.useContext)(he.Z).text.Contact.Form,d=c.name,u=c.email,m=c.subject,v=c.message,h=c.subjectPlaceholder,x=c.subjectOptions,p=c.checkLabel,Z=c.checkLink,b=c.button,y=c.feedback,g=y.success,j=y.error;return(0,f.jsxs)(se,{className:"ContactForm__form",onSubmit:r,children:[(0,f.jsxs)(se.Group,{className:"ContactForm__item",children:[(0,f.jsx)(se.Label,{children:d}),(0,f.jsx)(se.Control,{required:!0,value:t.name,isInvalid:n.name,name:"name",onChange:a,type:"text"}),(0,f.jsx)(_.Feedback,{type:"invalid",children:n.name})]}),(0,f.jsxs)(se.Group,{className:"ContactForm__item",children:[(0,f.jsx)(se.Label,{children:u}),(0,f.jsx)(se.Control,{required:!0,value:t.email,isInvalid:n.email,name:"email",onChange:a,type:"email"}),(0,f.jsx)(_.Feedback,{type:"invalid",children:n.email})]}),(0,f.jsxs)(se.Group,{className:"ContactForm__item",children:[(0,f.jsxs)(se.Label,{children:[m,": "]}),(0,f.jsxs)(se.Select,{required:!0,value:t.subject,name:"subject",isInvalid:n.subject,onChange:a,type:"select",children:[(0,f.jsx)("option",{value:"none",children:h}),fe.ok.map((function(e){return(0,f.jsx)("option",{value:e,children:x[e]},'subject-"'.concat(e,'"'))}))]}),(0,f.jsx)(_.Feedback,{type:"invalid",children:n.subject})]}),(0,f.jsxs)(se.Group,{className:"ContactForm__item",children:[(0,f.jsxs)(se.Label,{children:[v,": "]}),(0,f.jsx)(se.Control,{required:!0,className:"ContactForm__form--textarea",value:t.content,isInvalid:n.content,name:"content",onChange:a,as:"textarea"}),(0,f.jsx)(_.Feedback,{type:"invalid",children:n.content})]}),s?(0,f.jsx)("p",{className:"ContactForm__footer--feedback success",children:g}):null,l?(0,f.jsx)("p",{className:"ContactForm__footer--feedback error",children:j}):null,(0,f.jsxs)(se.Group,{className:"ContactForm__footer",children:[(0,f.jsx)(se.Check,{required:!0,value:t.agreement,name:"agreement",onChange:a,isInvalid:n.agreement,label:(0,f.jsxs)(f.Fragment,{children:[p," ",(0,f.jsx)(ue.Link,{to:"/aviso-legal",children:Z}),"."]})}),(0,f.jsxs)(le.Z,{disabled:s,className:"ContactForm__footer--button",type:"submit",children:[o?(0,f.jsx)(ce.Z,{className:"ContactForm__footer--loader",size:"sm",animation:"border"}):null,b]})]})]})},be=function(){var e=(0,i.useState)(xe),t=(0,o.Z)(e,2),n=t[0],s=t[1],l=(0,i.useState)(pe),c=(0,o.Z)(l,2),d=c[0],u=c[1],m=(0,i.useState)(!1),v=(0,o.Z)(m,2),h=v[0],x=v[1],p=(0,i.useState)(!1),Z=(0,o.Z)(p,2),b=Z[0],y=Z[1],g=(0,i.useState)(null),j=(0,o.Z)(g,2),N=j[0],C=j[1],w=(0,i.useCallback)((function(e){var t=e.target,n=t.value,i=t.name,o=t.checked;s("agreement"!==i?function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},i,n))}:function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},i,o))}),d[i]&&u((function(e){return me[i](e,n)}))}),[d]),k=(0,i.useCallback)((function(e){e.preventDefault();var t=ve(n,d);C(null),u(t),Object.values(t).find((function(e){return!!e}))?console.log("incorrect: ",t):(console.log("correct: ",t),x(!0),window.grecaptcha.enterprise.execute(fe.iq).then((function(e){console.log(e),window.grecaptcha.enterprise.reset(fe.iq),fetch("".concat(fe.td,"public/contact/email"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify((0,a.Z)((0,a.Z)({},n),{},{captcha:e}))}).then((function(e){console.log("form response: ",e),200===e.status||204===e.status?y(!0):C(e)})).catch((function(e){C(e)})).finally((function(){x(!1)}))})))}),[n,d]);return(0,f.jsx)(de.Z,{className:"ContactForm",children:(0,f.jsx)(Ze,{state:n,errors:d,sending:h,sendSuccess:b,sendError:N,setChange:w,handleSubmit:k})})},ye=n(8598),ge=n(3117),je=n(3888),Ne=n(9587),Ce=function(e){var t=e.height,n=e.width;return(0,f.jsx)(ge.Z,(0,a.Z)((0,a.Z)({},e),{},{factor:{x:.002,y:.005},children:(0,f.jsx)("div",{className:"Contact__background",style:{height:t,width:n,backgroundImage:"url(".concat(Ne,")")}})}))},we=function(e){var t=e.height,n=(0,i.useMemo)((function(){return{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}),[]),a=(0,i.useMemo)((function(){return[{scale:{x:[1.1,1],y:[1.2,1.1]},startScroll:.7*t,style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},rotated:!0},{scale:{x:[1.2,1.1],y:[1.1,1]},startScroll:.7*t,style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},toLeft:!0}]}),[t]);return(0,f.jsx)(je.Z,{lines:a,style:n,height:t})},ke=function(){return(0,f.jsx)("div",{className:"Contact__body",children:(0,f.jsx)(be,{})})},Se=function(){var e=(0,i.useCallback)((function(e){var t=e.height;return[{scale:[1.25,1.1],speed:-4,opacity:[.8,.9],children:(0,f.jsx)(Ce,(0,a.Z)({},e))},{children:(0,f.jsx)(we,(0,a.Z)({},e)),style:{height:t,zIndex:5}},{children:(0,f.jsx)(ke,(0,a.Z)({},e)),style:{height:t,zIndex:10}}]}),[]),t=(0,i.useCallback)((function(e){return{height:900}}),[]);return(0,f.jsx)(ye.Z,{layers:e,widthSwitch:t})}},1701:function(e,t,n){n.d(t,{UI:function(){return i},Ed:function(){return r},XW:function(){return o}});var a=n(2791);function i(e,t){var n=0;return a.Children.map(e,(function(e){return a.isValidElement(e)?t(e,n++):e}))}function r(e,t){var n=0;a.Children.forEach(e,(function(e){a.isValidElement(e)&&t(e,n++)}))}function o(e,t){return a.Children.toArray(e).some((function(e){return a.isValidElement(e)&&e.type===t}))}},9587:function(e,t,n){e.exports=n.p+"static/media/contact-background.028ded39070d4feee7b1.jpg"}}]);
//# sourceMappingURL=434.4310190d.chunk.js.map