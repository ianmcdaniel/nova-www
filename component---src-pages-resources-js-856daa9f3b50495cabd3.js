(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{246:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var n=a(33),r=a.n(n),l=a(2),i=a.n(l),c=(a(248),a(256)),s=a.n(c),o=a(255),u=a.n(o),m=a(251),p=a(263),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.allContentfulArticle.edges");return i.a.createElement(m.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement(u.a,{title:e}),i.a.createElement("div",{className:"main-hero"},i.a.createElement("h1",null,"Articles, Tips and Tricks for Newcomers"),i.a.createElement("p",null,"Tips and guides to help you better integrate into your new community")),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h2",{className:"section-headline"},"All articles"),i.a.createElement("ul",{className:"article-list"},t.map(function(e){var t=e.node;return i.a.createElement("li",{key:t.slug},i.a.createElement(p.a,{article:t}))})))))},t}(i.a.Component);t.default=d;var f="183684543"},248:function(e,t,a){"use strict";var n=a(2),r=a.n(n),l=a(4),i=a.n(l),c=a(104),s=a.n(c);a.d(t,"a",function(){return s.a});a(249),a(35).default.enqueue,r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},249:function(e,t,a){var n;e.exports=(n=a(250))&&n.default||n},250:function(e,t,a){"use strict";a.r(t);a(42);var n=a(2),r=a.n(n),l=a(4),i=a.n(l),c=a(132),s=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},251:function(e,t,a){"use strict";var n=a(33),r=a.n(n),l=a(2),i=a.n(l),c=a(248),s=(a(262),function(e){var t=e.children;return i.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)}),o=function(){return i.a.createElement("nav",{role:"navigation"},i.a.createElement("ul",{className:"navigation"},i.a.createElement("li",{className:"navigationItem"},i.a.createElement(c.a,{to:"/"},"Home")),i.a.createElement("li",{className:"navigationItem"},i.a.createElement(c.a,{to:"/resources/"},"Resources"))))},u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/nova-www/",i.a.createElement(s,null,i.a.createElement(o,null),t)},t}(i.a.Component);t.a=u},263:function(e,t,a){"use strict";var n=a(2),r=a.n(n),l=a(248),i=a(261),c=a.n(i);t.a=function(e){var t=e.article;return r.a.createElement("div",{className:"preview"},r.a.createElement(l.a,{to:"/resources/"+t.slug},r.a.createElement(c.a,{alt:"",fluid:t.thumbnailImage.fluid})),r.a.createElement("h3",{className:"previewTitle"},r.a.createElement(l.a,{to:"/resources/"+t.slug},t.title)),r.a.createElement("small",null,t.updatedAt),r.a.createElement("p",null,t.summary))}}}]);
//# sourceMappingURL=component---src-pages-resources-js-856daa9f3b50495cabd3.js.map