(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return i(4694)}])},1022:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var n=i(5893);function s(e){return(0,n.jsx)("section",{className:"intro-section",children:(0,n.jsx)("div",{className:"container text-center",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xl-10 offset-xl-1",children:(0,n.jsxs)("div",{className:"section-title",children:[(0,n.jsx)("button",{type:"button",className:"btn btn-info btn-sm",children:e.posts.from}),"\xa0\xa0",(0,n.jsxs)("span",{children:[e.posts.hitokoto,(0,n.jsx)("i",{children:e.posts.from_who?"--"+e.posts.from_who:""})]})]})})})})})}i(7294)},2507:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(5893);i(7294);var s=i(1664),r=i.n(s);function a(){return(0,n.jsx)("header",{className:"header-section",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-4 col-md-3",children:(0,n.jsx)("div",{className:"logo",children:(0,n.jsx)("h2",{className:"site-logo",children:"Zjs-7579"})})}),(0,n.jsx)("div",{className:"col-lg-8 col-md-9",children:(0,n.jsx)("nav",{className:"main-menu",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(r(),{href:"/",children:"首页"})}),(0,n.jsx)("li",{children:(0,n.jsx)(r(),{href:"/about",children:"关于"})}),(0,n.jsx)("li",{children:(0,n.jsx)(r(),{href:"/work",children:"工作"})}),(0,n.jsx)("li",{children:(0,n.jsx)(r(),{href:"/contact",children:"联系"})})]})})})]})})})}function l(){return(0,n.jsx)("footer",{className:"footer-section text-center",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h2",{className:"section-title mb-5",children:"Let’s work together"}),(0,n.jsxs)("div",{className:"social-links",children:[(0,n.jsx)("a",{href:"",children:(0,n.jsx)("span",{className:"fa fa-pinterest"})}),(0,n.jsx)("a",{href:"",children:(0,n.jsx)("span",{className:"fa fa-linkedin"})}),(0,n.jsx)("a",{href:"",children:(0,n.jsx)("span",{className:"fa fa-instagram"})}),(0,n.jsx)("a",{href:"",children:(0,n.jsx)("span",{className:"fa fa-facebook"})}),(0,n.jsx)("a",{href:"",children:(0,n.jsx)("span",{className:"fa fa-twitter"})})]}),(0,n.jsxs)("div",{className:"copyright",children:["Copyright \xa9All rights reserved | This template is made with ",(0,n.jsx)("i",{className:"fa fa-heart-o","aria-hidden":"true"})," by ",(0,n.jsx)("a",{href:"http://www.github.com/Zjs-7579",target:"_blank",rel:"noreferrer",children:"Zjs-7579"})]})]})})}function o(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{}),t,(0,n.jsx)(l,{})]})}},9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(6495).Z,s=i(2648).Z,r=i(1598).Z,a=i(7273).Z,l=r(i(7294)),o=s(i(3121)),c=i(2675),d=i(139),u=i(8730);i(7238);var f=s(i(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function A(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,i,s,r,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&a(!0),null==s?void 0:s.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,o=!1;s.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{l=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let p=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:s,widthInt:r,qualityInt:o,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:h,placeholder:A,loading:g,srcString:p,config:x,unoptimized:j,loader:w,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:E,setShowAltText:y,onLoad:N,onError:C}=e,_=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},_,i,{width:r,height:s,decoding:"async","data-nimg":h?"fill":"1",className:c,loading:g,style:n({},d,u),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,p,A,v,b,E,j))},[p,A,v,b,E,C,j,t]),onLoad:e=>{let t=e.currentTarget;m(t,p,A,v,b,E,j)},onError:e=>{y(!0),"blur"===A&&E(!0),C&&C(e)}})))}),x=l.forwardRef((e,t)=>{let i,s;var r,{src:m,sizes:x,unoptimized:j=!1,priority:w=!1,loading:v,className:b,quality:E,width:y,height:N,fill:C,style:_,onLoad:S,onLoadingComplete:k,placeholder:B="empty",blurDataURL:I,layout:z,objectFit:P,objectPosition:R,lazyBoundary:D,lazyRoot:M}=e,Q=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let O=l.useContext(u.ImageConfigContext),F=l.useMemo(()=>{let e=h||O||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[O]),L=Q,Z=L.loader||f.default;delete L.loader;let G="__next_img_default"in Z;if(G){if("custom"===F.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let T=Z;Z=e=>{let{config:t}=e,i=a(e,["config"]);return T(i)}}if(z){"fill"===z&&(C=!0);let U={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];U&&(_=n({},_,U));let W={responsive:"100vw",fill:"100vw"}[z];W&&!x&&(x=W)}let q="",V=g(y),H=g(N);if("object"==typeof(r=m)&&(A(r)||void 0!==r.src)){let J=A(m)?m.default:m;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(!J.height||!J.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)));if(i=J.blurWidth,s=J.blurHeight,I=I||J.blurDataURL,q=J.src,!C){if(V||H){if(V&&!H){let K=V/J.width;H=Math.round(J.height*K)}else if(!V&&H){let Y=H/J.height;V=Math.round(J.width*Y)}}else V=J.width,H=J.height}}let X=!w&&("lazy"===v||void 0===v);((m="string"==typeof m?m:q).startsWith("data:")||m.startsWith("blob:"))&&(j=!0,X=!1),F.unoptimized&&(j=!0),G&&m.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(j=!0);let[$,ee]=l.useState(!1),[et,ei]=l.useState(!1),en=g(E),es=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:R}:{},et?{}:{color:"transparent"},_),er="blur"===B&&I&&!$?{backgroundSize:es.objectFit||"cover",backgroundPosition:es.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:H,blurWidth:i,blurHeight:s,blurDataURL:I}),'")')}:{},ea=function(e){let{config:t,src:i,unoptimized:n,width:s,quality:r,sizes:a,loader:l}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:s}=e;if(i){let r=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=r.exec(i);l)a.push(parseInt(l[2]));if(a.length){let o=.01*Math.min(...a);return{widths:s.filter(e=>e>=n[0]*o),kind:"w"}}return{widths:s,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>s.find(t=>t>=e)||s[s.length-1]))];return{widths:c,kind:"x"}}(t,s,a),d=o.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:o.map((e,n)=>"".concat(l({config:t,src:i,quality:r,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:i,quality:r,width:o[d]})}}({config:F,src:m,unoptimized:j,width:V,quality:en,sizes:x,loader:Z}),el=m,eo={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:L.crossOrigin},ec=l.useRef(S);l.useEffect(()=>{ec.current=S},[S]);let ed=l.useRef(k);l.useEffect(()=>{ed.current=k},[k]);let eu=n({isLazy:X,imgAttributes:ea,heightInt:H,widthInt:V,qualityInt:en,className:b,imgStyle:es,blurStyle:er,loading:v,config:F,fill:C,unoptimized:j,placeholder:B,loader:Z,srcString:el,onLoadRef:ec,onLoadingCompleteRef:ed,setBlurComplete:ee,setShowAltText:ei},L);return l.default.createElement(l.default.Fragment,null,l.default.createElement(p,Object.assign({},eu,{ref:t})),w?l.default.createElement(o.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},eo))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:s,blurDataURL:r}=e,a=n||t,l=s||i,o=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&s?"1":"20","'/%3E").concat(o,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(r,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:s}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(s||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},4694:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return f},default:function(){return h}});var n=i(5893);i(7294);var s=i(9008),r=i.n(s),a=i(1022),l=i(5675),o=i.n(l),c={src:"/_next/static/media/about.0fc3af71.jpg",height:525,width:386,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAALDn/8QAHBAAAgICAwAAAAAAAAAAAAAAAgQBAwAGEmFy/9oACAEBAAE/AGNicN6xldN0YuAZ4dec/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACEf/aAAgBAgEBPwCq5P/EABgRAAMBAQAAAAAAAAAAAAAAAAECMQAD/9oACAEDAQE/AOyqHlUGnf/Z",blurWidth:6,blurHeight:8};function d(){return(0,n.jsx)("section",{className:"page-section",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-lg-6",children:[(0,n.jsx)("p",{children:"新技术永远在源源不断的革新，但本质并没有太多变化，只是使用它解决问题的形式变的越来越多样化、多元化。"}),(0,n.jsx)("p",{children:"不要局限于一种编码语言，不要把自己定位在一个方向或岗位，一专永远不会耽误你的多能。"}),(0,n.jsx)("p",{children:"学习能力，永远是衡量程序员亘古不变的指标。"}),(0,n.jsx)("p",{children:"永远保持一个疑问：技术真正是什么？"})]}),(0,n.jsx)("div",{className:"col-lg-5 offset-lg-1",children:(0,n.jsx)("figure",{className:"pic-frame",children:(0,n.jsx)(o(),{src:c,alt:"about.jpg",style:{width:"auto",height:"auto"}})})})]})})})}var u=i(2507),f=!0;function h(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"About"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(a.Z,{posts:e.posts}),(0,n.jsx)(d,{})]})]})}},5675:function(e,t,i){e.exports=i(9749)}},function(e){e.O(0,[996,774,888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);