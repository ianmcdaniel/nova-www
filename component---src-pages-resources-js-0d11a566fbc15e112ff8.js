(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{242:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var n=a(31),r=a.n(n),l=a(2),i=a.n(l),c=(a(245),a(254)),s=a.n(c),o=a(253),u=a.n(o),m=(a(320),a(248)),p=a(261),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.allContentfulArticle.edges");return i.a.createElement(m.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement(u.a,{title:e}),i.a.createElement("div",{className:"main-hero"},i.a.createElement("h1",null,"Articles, Tips and Tricks for Newcomers"),i.a.createElement("p",null,"Tips and guides to help you better integrate into your new community")),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h2",{className:"section-headline"},"All articles"),i.a.createElement("ul",{className:"article-list"},t.map(function(e){var t=e.node;return i.a.createElement("li",{key:t.slug},i.a.createElement(p.a,{article:t}))})))))},t}(i.a.Component);t.default=d;var f="183684543"},245:function(e,t,a){"use strict";var n=a(2),r=a.n(n),l=a(4),i=a.n(l),c=a(103),s=a.n(c);a.d(t,"a",function(){return s.a});a(246),a(33).default.enqueue,r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},246:function(e,t,a){var n;e.exports=(n=a(247))&&n.default||n},247:function(e,t,a){"use strict";a.r(t);a(41);var n=a(2),r=a.n(n),l=a(4),i=a.n(l),c=a(131),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},248:function(e,t,a){"use strict";var n=a(31),r=a.n(n),l=a(2),i=a.n(l),c=a(245),s=(a(259),function(e){var t=e.children;return i.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)}),o=a(260),u=a.n(o),m=function(){return i.a.createElement("nav",{role:"navigation"},i.a.createElement("ul",{className:u.a.navigation},i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/"},"Home")),i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/resources/"},"Resources"))))},p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/nova-www/",i.a.createElement(s,null,i.a.createElement(m,null),t)},t}(i.a.Component);t.a=p},261:function(e,t,a){"use strict";var n=a(2),r=a.n(n),l=a(245),i=a(252),c=a.n(i),s=a(268),o=a.n(s);t.a=function(e){var t=e.article;return r.a.createElement("div",{className:o.a.preview},r.a.createElement(l.a,{to:"/resources/"+t.slug},r.a.createElement(c.a,{alt:"",fluid:t.thumbnailImage.fluid})),r.a.createElement("h3",{className:o.a.previewTitle},r.a.createElement(l.a,{to:"/resources/"+t.slug},t.title)),r.a.createElement("small",null,t.updatedAt),r.a.createElement("p",null,t.summary))}}}]);
//# sourceMappingURL=component---src-pages-resources-js-0d11a566fbc15e112ff8.js.map