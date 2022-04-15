"use strict";(self.webpackChunklmmmc_landing=self.webpackChunklmmmc_landing||[]).push([[601],{2265:function(e,n,t){t.d(n,{Z:function(){return _}});var r=t(1413),a=t(885),u=t(5987),o=t(9007),c=t(2791);var i=function(e,n){var t=(0,c.useRef)(!0);(0,c.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},l=t(7904),s=t(5746),d=t(1683),f=Math.pow(2,31)-1;function v(e,n,t){var r=t-Date.now();e.current=r<=f?setTimeout(n,r):setTimeout((function(){return v(e,n,t)}),f)}function m(){var e=(0,s.Z)(),n=(0,c.useRef)();return(0,d.Z)((function(){return clearTimeout(n.current)})),(0,c.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(t(),a<=f?n.current=setTimeout(r,a):v(n,r,Date.now()+a))},clear:t}}),[])}var h=t(6445),p=t(1694),b=t.n(p),x=t(239),y=(0,t(6543).Z)("carousel-caption"),C=t(162),N=t(184),Z=["as","bsPrefix","className"],j=c.forwardRef((function(e,n){var t=e.as,a=void 0===t?"div":t,o=e.bsPrefix,c=e.className,i=(0,u.Z)(e,Z),l=b()(c,(0,C.vE)(o,"carousel-item"));return(0,N.jsx)(a,(0,r.Z)((0,r.Z)({ref:n},i),{},{className:l}))}));j.displayName="CarouselItem";var E=j,g=t(1701),S=t(933),k=t(7202),w=t(4083),T=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"],I={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,N.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,N.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var M=c.forwardRef((function(e,n){var t=(0,x.Ch)(e,{activeIndex:"onSelect"}),s=t.as,d=void 0===s?"div":s,f=t.bsPrefix,v=t.slide,p=t.fade,y=t.controls,Z=t.indicators,j=t.indicatorLabels,E=t.activeIndex,I=t.onSelect,M=t.onSlide,_=t.onSlid,O=t.interval,P=t.keyboard,L=t.onKeyDown,D=t.pause,R=t.onMouseOver,A=t.onMouseOut,K=t.wrap,U=t.touch,V=t.onTouchStart,X=t.onTouchMove,B=t.onTouchEnd,F=t.prevIcon,H=t.prevLabel,W=t.nextIcon,Y=t.nextLabel,q=t.variant,z=t.className,G=t.children,J=(0,u.Z)(t,T),Q=(0,C.vE)(f,"carousel"),$=(0,C.SC)(),ee=(0,c.useRef)(null),ne=(0,c.useState)("next"),te=(0,a.Z)(ne,2),re=te[0],ae=te[1],ue=(0,c.useState)(!1),oe=(0,a.Z)(ue,2),ce=oe[0],ie=oe[1],le=(0,c.useState)(!1),se=(0,a.Z)(le,2),de=se[0],fe=se[1],ve=(0,c.useState)(E||0),me=(0,a.Z)(ve,2),he=me[0],pe=me[1];de||E===he||(ee.current?ae(ee.current):ae((E||0)>he?"next":"prev"),v&&fe(!0),pe(E||0)),(0,c.useEffect)((function(){ee.current&&(ee.current=null)}));var be,xe=0;(0,g.Ed)(G,(function(e,n){++xe,n===E&&(be=e.props.interval)}));var ye=(0,l.Z)(be),Ce=(0,c.useCallback)((function(e){if(!de){var n=he-1;if(n<0){if(!K)return;n=xe-1}ee.current="prev",null==I||I(n,e)}}),[de,he,I,K,xe]),Ne=(0,o.Z)((function(e){if(!de){var n=he+1;if(n>=xe){if(!K)return;n=0}ee.current="next",null==I||I(n,e)}})),Ze=(0,c.useRef)();(0,c.useImperativeHandle)(n,(function(){return{element:Ze.current,prev:Ce,next:Ne}}));var je=(0,o.Z)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(Ze.current)&&($?Ce():Ne())})),Ee="next"===re?"start":"end";i((function(){v||(null==M||M(he,Ee),null==_||_(he,Ee))}),[he]);var ge="".concat(Q,"-item-").concat(re),Se="".concat(Q,"-item-").concat(Ee),ke=(0,c.useCallback)((function(e){(0,k.Z)(e),null==M||M(he,Ee)}),[M,he,Ee]),we=(0,c.useCallback)((function(){fe(!1),null==_||_(he,Ee)}),[_,he,Ee]),Te=(0,c.useCallback)((function(e){if(P&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?Ne(e):Ce(e));case"ArrowRight":return e.preventDefault(),void($?Ce(e):Ne(e))}null==L||L(e)}),[P,L,Ce,Ne,$]),Ie=(0,c.useCallback)((function(e){"hover"===D&&ie(!0),null==R||R(e)}),[D,R]),Me=(0,c.useCallback)((function(e){ie(!1),null==A||A(e)}),[A]),_e=(0,c.useRef)(0),Oe=(0,c.useRef)(0),Pe=m(),Le=(0,c.useCallback)((function(e){_e.current=e.touches[0].clientX,Oe.current=0,"hover"===D&&ie(!0),null==V||V(e)}),[D,V]),De=(0,c.useCallback)((function(e){e.touches&&e.touches.length>1?Oe.current=0:Oe.current=e.touches[0].clientX-_e.current,null==X||X(e)}),[X]),Re=(0,c.useCallback)((function(e){if(U){var n=Oe.current;Math.abs(n)>40&&(n>0?Ce(e):Ne(e))}"hover"===D&&Pe.set((function(){ie(!1)}),O||void 0),null==B||B(e)}),[U,D,Ce,Ne,Pe,O,B]),Ae=null!=O&&!ce&&!de,Ke=(0,c.useRef)();(0,c.useEffect)((function(){var e,n;if(Ae){var t=$?Ce:Ne;return Ke.current=window.setInterval(document.visibilityState?je:t,null!=(e=null!=(n=ye.current)?n:O)?e:void 0),function(){null!==Ke.current&&clearInterval(Ke.current)}}}),[Ae,Ce,Ne,ye,O,je,$]);var Ue=(0,c.useMemo)((function(){return Z&&Array.from({length:xe},(function(e,n){return function(e){null==I||I(n,e)}}))}),[Z,xe,I]);return(0,N.jsxs)(d,(0,r.Z)((0,r.Z)({ref:Ze},J),{},{onKeyDown:Te,onMouseOver:Ie,onMouseOut:Me,onTouchStart:Le,onTouchMove:De,onTouchEnd:Re,className:b()(z,Q,v&&"slide",p&&"".concat(Q,"-fade"),q&&"".concat(Q,"-").concat(q)),children:[Z&&(0,N.jsx)("div",{className:"".concat(Q,"-indicators"),children:(0,g.UI)(G,(function(e,n){return(0,N.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=j&&j.length?j[n]:"Slide ".concat(n+1),className:n===he?"active":void 0,onClick:Ue?Ue[n]:void 0,"aria-current":n===he},n)}))}),(0,N.jsx)("div",{className:"".concat(Q,"-inner"),children:(0,g.UI)(G,(function(e,n){var t=n===he;return v?(0,N.jsx)(w.Z,{in:t,onEnter:t?ke:void 0,onEntered:t?we:void 0,addEndListener:S.Z,children:function(n,a){return c.cloneElement(e,(0,r.Z)((0,r.Z)({},a),{},{className:b()(e.props.className,t&&"entered"!==n&&ge,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&Se)}))}}):c.cloneElement(e,{className:b()(e.props.className,t&&"active")})}))}),y&&(0,N.jsxs)(N.Fragment,{children:[(K||0!==E)&&(0,N.jsxs)(h.Z,{className:"".concat(Q,"-control-prev"),onClick:Ce,children:[F,H&&(0,N.jsx)("span",{className:"visually-hidden",children:H})]}),(K||E!==xe-1)&&(0,N.jsxs)(h.Z,{className:"".concat(Q,"-control-next"),onClick:Ne,children:[W,Y&&(0,N.jsx)("span",{className:"visually-hidden",children:Y})]})]})]}))}));M.displayName="Carousel",M.defaultProps=I;var _=Object.assign(M,{Caption:y,Item:E})},1701:function(e,n,t){t.d(n,{UI:function(){return a},Ed:function(){return u},XW:function(){return o}});var r=t(2791);function a(e,n){var t=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?n(e,t++):e}))}function u(e,n){var t=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&n(e,t++)}))}function o(e,n){return r.Children.toArray(e).some((function(e){return r.isValidElement(e)&&e.type===n}))}},2704:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return a(n,e),n};Object.defineProperty(n,"__esModule",{value:!0});var o=u(t(2791));n.default=function(e){var n=o.useState(0),t=n[0],r=n[1],a=e.transitionDuration||400,u=e.delay||50,c=e.wrapperTag||"div",i=e.childTag||"div",l="undefined"===typeof e.visible||e.visible;return o.useEffect((function(){var n=o.default.Children.count(e.children);if(l||(n=0),n==t){var c=setTimeout((function(){e.onComplete&&e.onComplete()}),a);return function(){return clearTimeout(c)}}var i=n>t?1:-1,s=setTimeout((function(){r(t+i)}),u);return function(){return clearTimeout(s)}}),[o.default.Children.count(e.children),u,t,l,a]),o.default.createElement(c,{className:e.className},o.default.Children.map(e.children,(function(n,r){return o.default.createElement(i,{className:e.childClassName,style:{transition:"opacity "+a+"ms, transform "+a+"ms",transform:t>r?"none":"translateY(20px)",opacity:t>r?1:0}},n)})))}},7350:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(2704);Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r(a).default}})}}]);
//# sourceMappingURL=601.200da3c7.chunk.js.map