(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{245:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});var n=a(33),r=a.n(n),i=a(2),l=a.n(i),c=a(256),o=a.n(c),s=a(255),u=a.n(s),m=a(251),d=a(263),p=a(135),f=a(134),E=new p.a({uri:"http://localhost:8002/___graphql"}),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=o()(this,"props.data.site.siteMetadata.title"),t=o()(this,"props.data.allContentfulArticle.edges");return l.a.createElement(f.a,{client:E},l.a.createElement(m.a,{location:this.props.location},l.a.createElement("div",{style:{background:"#fff"}},l.a.createElement(u.a,{title:e}),l.a.createElement("div",{className:"main-hero"},l.a.createElement("h1",null,"Nova Credit creates a world beyond borders"),l.a.createElement("p",null,"Moving to a new country is hard. On top of that, basic tasks like renting an apartment or getting a credit card can be almost impossible without a US credit history. Nova Credit lets you arrive and thrive."),l.a.createElement("button",null,"Find Credit Cards")),l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",{className:"section-headline"},"Recent Articles"),l.a.createElement("ul",{className:"article-list"},t.map(function(e){var t=e.node;return l.a.createElement("li",{key:t.slug},l.a.createElement(d.a,{article:t}))}))))))},t}(l.a.Component);t.default=v;var h="1204308714"},248:function(e,t,a){"use strict";var n=a(2),r=a.n(n),i=a(4),l=a.n(i),c=a(104),o=a.n(c);a.d(t,"a",function(){return o.a});a(249),a(35).default.enqueue,r.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},249:function(e,t,a){var n;e.exports=(n=a(250))&&n.default||n},250:function(e,t,a){"use strict";a.r(t);a(42);var n=a(2),r=a.n(n),i=a(4),l=a.n(i),c=a(132),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},251:function(e,t,a){"use strict";var n=a(33),r=a.n(n),i=a(2),l=a.n(i),c=a(248),o=(a(262),function(e){var t=e.children;return l.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)}),s=function(){return l.a.createElement("nav",{role:"navigation"},l.a.createElement("ul",{className:"navigation"},l.a.createElement("li",{className:"navigationItem"},l.a.createElement(c.a,{to:"/"},"Home")),l.a.createElement("li",{className:"navigationItem"},l.a.createElement(c.a,{to:"/resources/"},"Resources"))))},u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/nova-www/",l.a.createElement(o,null,l.a.createElement(s,null),t)},t}(l.a.Component);t.a=u},263:function(e,t,a){"use strict";var n=a(2),r=a.n(n),i=a(248),l=a(261),c=a.n(l);t.a=function(e){var t=e.article;return r.a.createElement("div",{className:"preview"},r.a.createElement(i.a,{to:"/resources/"+t.slug},r.a.createElement(c.a,{alt:"",fluid:t.thumbnailImage.fluid})),r.a.createElement("h3",{className:"previewTitle"},r.a.createElement(i.a,{to:"/resources/"+t.slug},t.title)),r.a.createElement("small",null,t.updatedAt),r.a.createElement("p",null,t.summary))}}}]);
//# sourceMappingURL=component---src-pages-index-js-835f59cd6efef80ef068.js.map