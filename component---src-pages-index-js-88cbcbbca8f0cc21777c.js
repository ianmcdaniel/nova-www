(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{246:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return v});var r=a(33),i=a.n(r),n=a(2),s=a.n(n),l=a(249),o=a(256),d=a.n(o),c=a(255),u=a.n(c),f=a(252),p=a(266),g=a(134),m=a(133),h=new g.a({uri:"http://localhost:8002/___graphql"}),b=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=d()(this,"props.data.site.siteMetadata.title"),t=d()(this,"props.data.allContentfulArticle.edges");return s.a.createElement(m.a,{client:h},s.a.createElement(f.a,{location:this.props.location},s.a.createElement("div",{style:{background:"#fff"}},s.a.createElement(u.a,{title:e}),s.a.createElement("div",{className:"main-hero"},s.a.createElement("h1",null,"Nova Credit creates a world beyond borders"),s.a.createElement("p",null,"Moving to a new country is hard. On top of that, basic tasks like renting an apartment or getting a credit card can be almost impossible without a US credit history. Nova Credit lets you arrive and thrive."),s.a.createElement(l.a,{to:"cards/",className:"button"},"Find Credit Cards")),s.a.createElement("div",{className:"wrapper"},s.a.createElement("h2",{className:"section-headline"},"Recent Articles"),s.a.createElement("ul",{className:"article-list"},t.map(function(e){var t=e.node;return s.a.createElement("li",{key:t.slug},s.a.createElement(p.a,{article:t}))}))))))},t}(s.a.Component);t.default=b;var v="1204308714"},249:function(e,t,a){"use strict";var r=a(2),i=a.n(r),n=a(4),s=a.n(n),l=a(104),o=a.n(l);a.d(t,"a",function(){return o.a});a(250),a(35).default.enqueue,i.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},250:function(e,t,a){var r;e.exports=(r=a(251))&&r.default||r},251:function(e,t,a){"use strict";a.r(t);a(42);var r=a(2),i=a.n(r),n=a(4),s=a.n(n),l=a(132),o=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},252:function(e,t,a){"use strict";var r=a(33),i=a.n(r),n=a(2),s=a.n(n),l=a(249),o=(a(260),function(e){var t=e.children;return s.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)}),d=function(){return s.a.createElement("nav",{role:"navigation"},s.a.createElement("ul",{className:"navigation"},s.a.createElement("li",{className:"navigationItem"},s.a.createElement(l.a,{to:"/"},"Home")),s.a.createElement("li",{className:"navigationItem"},s.a.createElement(l.a,{to:"/resources/"},"Resources")),s.a.createElement("li",{className:"navigationItem"},s.a.createElement(l.a,{to:"/cards/"},"Credit Cards"))))},c=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/nova-www/",s.a.createElement(o,null,s.a.createElement(d,null),t)},t}(s.a.Component);t.a=c},253:function(e,t,a){"use strict";a(7),a(8),a(5),a(45),a(85),a(254);var r=a(46);t.__esModule=!0,t.default=void 0;var i,n=r(a(33)),s=r(a(106)),l=r(a(179)),o=r(a(180)),d=r(a(2)),c=r(a(4)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)}).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(N,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},N=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});N.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,L=e.loading,I=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,o.default)({opacity:C?1:0,transition:V?"opacity "+b+"ms":"none"},l),_="boolean"==typeof h?"lightgray":h,T={transitionDelay:b+"ms"},k=(0,o.default)({opacity:this.state.imgLoaded?0:1},V&&T,l,f),P={title:t,alt:this.state.isVisible?"":a,style:k,className:p};if(g){var j=g,q=j[0];return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),_&&d.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&T)}),q.base64&&d.default.createElement(O,{src:q.base64,spreadProps:P,imageVariants:j,generateSources:w}),q.tracedSVG&&d.default.createElement(O,{src:q.tracedSVG,spreadProps:P,imageVariants:j,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(j),d.default.createElement(N,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:L},q,{imageVariants:j}))}}))}if(m){var x=m,M=x[0],W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},_&&d.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:_,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},V&&T)}),M.base64&&d.default.createElement(O,{src:M.base64,spreadProps:P,imageVariants:x,generateSources:w}),M.tracedSVG&&d.default.createElement(O,{src:M.tracedSVG,spreadProps:P,imageVariants:x,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(x),d.default.createElement(N,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:L},M,{imageVariants:x}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});C.propTypes={resolutions:V,sizes:z,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var _=C;t.default=_},254:function(e,t,a){"use strict";a(178)("fixed",function(e){return function(){return e(this,"tt","","")}})},266:function(e,t,a){"use strict";var r=a(2),i=a.n(r),n=a(249),s=a(253),l=a.n(s);t.a=function(e){var t=e.article;return i.a.createElement("div",{className:"preview"},i.a.createElement(n.a,{to:"/resources/"+t.slug},i.a.createElement(l.a,{alt:"",fluid:t.thumbnailImage.fluid})),i.a.createElement("h3",{className:"previewTitle"},i.a.createElement(n.a,{to:"/resources/"+t.slug},t.title)),i.a.createElement("small",null,t.updatedAt),i.a.createElement("p",null,t.summary))}}}]);
//# sourceMappingURL=component---src-pages-index-js-88cbcbbca8f0cc21777c.js.map