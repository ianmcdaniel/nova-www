(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{245:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});var n=a(33),r=a.n(n),l=a(2),i=a.n(l),s=a(256),c=a.n(s),o=a(255),u=a.n(o),m=a(251),d=a(263),p=a(135),f=a(134),E=new p.a({uri:"http://localhost:8002/___graphql"}),v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=c()(this,"props.data.site.siteMetadata.title"),t=c()(this,"props.data.allContentfulArticle.edges");return i.a.createElement(f.a,{client:E},i.a.createElement(m.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement(u.a,{title:e}),i.a.createElement("div",{className:"main-hero"},i.a.createElement("h1",null,"Nova Credit creates a world beyond borders"),i.a.createElement("p",null,"Moving to a new country is hard. On top of that, basic tasks like renting an apartment or getting a credit card can be almost impossible without a US credit history. Nova Credit lets you arrive and thrive."),i.a.createElement("button",null,"Find Credit Cards")),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h2",{className:"section-headline"},"Recent Articles"),i.a.createElement("ul",{className:"article-list"},t.map(function(e){var t=e.node;return i.a.createElement("li",{key:t.slug},i.a.createElement(d.a,{article:t}))}))))))},t}(i.a.Component);t.default=v;var h="1204308714"},248:function(e,t,a){"use strict";var n=a(2),r=a.n(n),l=a(4),i=a.n(l),s=a(104),c=a.n(s);a.d(t,"a",function(){return c.a});a(249),a(35).default.enqueue,r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},249:function(e,t,a){var n;e.exports=(n=a(250))&&n.default||n},250:function(e,t,a){"use strict";a.r(t);a(42);var n=a(2),r=a.n(n),l=a(4),i=a.n(l),s=a(132),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},251:function(e,t,a){"use strict";var n=a(33),r=a.n(n),l=a(2),i=a.n(l),s=a(248),c=(a(262),function(e){var t=e.children;return i.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)}),o=function(){return i.a.createElement("nav",{role:"navigation"},i.a.createElement("ul",{className:styles.navigation},i.a.createElement("li",{className:styles.navigationItem},i.a.createElement(s.a,{to:"/"},"Home")),i.a.createElement("li",{className:styles.navigationItem},i.a.createElement(s.a,{to:"/resources/"},"Resources"))))},u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/nova-www/",i.a.createElement(c,null,i.a.createElement(o,null),t)},t}(i.a.Component);t.a=u},263:function(e,t,a){"use strict";var n=a(2),r=a.n(n),l=a(248),i=a(261),s=a.n(i);t.a=function(e){var t=e.article;return r.a.createElement("div",{className:styles.preview},r.a.createElement(l.a,{to:"/resources/"+t.slug},r.a.createElement(s.a,{alt:"",fluid:t.thumbnailImage.fluid})),r.a.createElement("h3",{className:styles.previewTitle},r.a.createElement(l.a,{to:"/resources/"+t.slug},t.title)),r.a.createElement("small",null,t.updatedAt),r.a.createElement("p",null,t.summary))}}}]);
//# sourceMappingURL=component---src-pages-index-js-9160a1d06e4892fcec50.js.map