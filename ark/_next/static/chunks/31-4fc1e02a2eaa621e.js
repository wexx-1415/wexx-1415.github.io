(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31],{5924:function(e,t,r){"use strict";t.Z=function(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,i,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(i=e(t[r]))&&(o&&(o+=" "),o+=i);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(i&&(i+=" "),i+=t);return i}},6916:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(5321).Z,o=r(1322).Z,n=r(6687).Z,a=r(6239).Z,l=n(r(959)),s=o(r(8363)),c=r(3536),u=r(1691),d=r(9385);r(3704);var f=o(r(3405));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/ark/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,o,n,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;o.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{l=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:n,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:g,placeholder:h,loading:p,srcString:v,config:w,unoptimized:b,loader:y,onLoadRef:E,onLoadingCompleteRef:S,setBlurComplete:C,setShowAltText:_,onLoad:j,onError:z}=e,x=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},x,r,{width:n,height:o,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:p,style:i({},u,d),ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(z&&(e.src=e.src),e.complete&&m(e,v,h,E,S,C,b))},[v,h,E,S,C,z,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,E,S,C,b)},onError:e=>{_(!0),"blur"===h&&C(!0),z&&z(e)}})))}),w=l.forwardRef((e,t)=>{let r,o;var n,{src:m,sizes:w,unoptimized:b=!1,priority:y=!1,loading:E,className:S,quality:C,width:_,height:j,fill:z,style:x,onLoad:k,onLoadingComplete:R,placeholder:O="empty",blurDataURL:I,layout:P,objectFit:A,objectPosition:N,lazyBoundary:L,lazyRoot:M}=e,B=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=l.useContext(d.ImageConfigContext),W=l.useMemo(()=>{let e=g||D||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[D]),F=B,T=F.loader||f.default;delete F.loader;let Z="__next_img_default"in T;if(Z){if("custom"===W.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let q=T;T=e=>{let{config:t}=e,r=a(e,["config"]);return q(r)}}if(P){"fill"===P&&(z=!0);let G={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];G&&(x=i({},x,G));let U={responsive:"100vw",fill:"100vw"}[P];U&&!w&&(w=U)}let V="",J=p(_),H=p(j);if("object"==typeof(n=m)&&(h(n)||void 0!==n.src)){let $=h(m)?m.default:m;if(!$.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify($)));if(!$.height||!$.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify($)));if(r=$.blurWidth,o=$.blurHeight,I=I||$.blurDataURL,V=$.src,!z){if(J||H){if(J&&!H){let K=J/$.width;H=Math.round($.height*K)}else if(!J&&H){let Q=H/$.height;J=Math.round($.width*Q)}}else J=$.width,H=$.height}}let X=!y&&("lazy"===E||void 0===E);((m="string"==typeof m?m:V).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,X=!1),W.unoptimized&&(b=!0),Z&&m.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(b=!0);let[Y,ee]=l.useState(!1),[et,er]=l.useState(!1),ei=p(C),eo=Object.assign(z?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:N}:{},et?{}:{color:"transparent"},x),en="blur"===O&&I&&!Y?{backgroundSize:eo.objectFit||"cover",backgroundPosition:eo.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:J,heightInt:H,blurWidth:r,blurHeight:o,blurDataURL:I}),'")')}:{},ea=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let n=/(^|\s)(1?\d?\d)vw/g,a=[];for(let l;l=n.exec(r);l)a.push(parseInt(l[2]));if(a.length){let s=.01*Math.min(...a);return{widths:o.filter(e=>e>=i[0]*s),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let c=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:c,kind:"x"}}(t,o,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:r,quality:n,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:r,quality:n,width:s[u]})}}({config:W,src:m,unoptimized:b,width:J,quality:ei,sizes:w,loader:T}),el=m,es={imageSrcSet:ea.srcSet,imageSizes:ea.sizes,crossOrigin:F.crossOrigin},ec=l.useRef(k);l.useEffect(()=>{ec.current=k},[k]);let eu=l.useRef(R);l.useEffect(()=>{eu.current=R},[R]);let ed=i({isLazy:X,imgAttributes:ea,heightInt:H,widthInt:J,qualityInt:ei,className:S,imgStyle:eo,blurStyle:en,loading:E,config:W,fill:z,unoptimized:b,placeholder:O,loader:T,srcString:el,onLoadRef:ec,onLoadingCompleteRef:eu,setBlurComplete:ee,setShowAltText:er},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},ed,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ea.src+ea.srcSet+ea.sizes,rel:"preload",as:"image",href:ea.srcSet?void 0:ea.src},es))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3536:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n}=e,a=i||t,l=o||r,s=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&o?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(n,"'/%3E%3C/svg%3E")}},3405:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},3930:function(e,t,r){e.exports=r(6916)}}]);