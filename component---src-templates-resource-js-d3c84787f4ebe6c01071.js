(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{247:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a.n(n),l=a(2),c=a.n(l),i=a(256),u=a.n(i),o=a(257),s=a.n(o),m=a(255),d=a.n(m),p=a(248),E=a(251),f=(a(9),a(319)),g=a.n(f),v=a(134),h=a(135);function _(){var e=g()(['\n      {\n        creditCard(slug: "the-platinum-card-from-american-express") {\n          name\n\t\t\t\t\timage_url\n        }\n      }\n    ']);return _=function(){return e},e}var b=function(e){e.slug;return c.a.createElement(v.b,{query:Object(h.b)(_())},function(e){var t=e.loading,a=e.error,n=e.data;if(t)return c.a.createElement("p",null,"Loading...");if(a)return c.a.createElement("p",null,"Error :(");var r=n.creditCard;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,r.name),c.a.createElement("p",null,r.image_url),"xx",c.a.createElement("img",{src:r.image_url,alt:r.name}),"xx")})},y=a(320),R=a(322),w=a(270),N=a.n(w);a.d(t,"pageQuery",function(){return C});var x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=s()(this.props,"data.contentfulArticle"),a=s()(this.props,"data.site.siteMetadata.title");return c.a.createElement(E.a,{location:this.props.location},c.a.createElement("div",null,c.a.createElement(u.a,{title:t.title+" | "+a}),c.a.createElement("div",{className:"main-hero"},c.a.createElement(p.a,{to:"/resources"},"← Back to Resources"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",{className:"section-headline"},t.title),c.a.createElement(d.a,{className:N.a.heroImage,alt:t.title,fluid:t.mainImage.fluid})),c.a.createElement("div",{className:"wrapper"},c.a.createElement("p",null,t.updatedAt),c.a.createElement("div",{className:"article-body"},Object(R.documentToReactComponents)(t.body.json,{renderNode:(e={},e[y.BLOCKS.EMBEDDED_ENTRY]=function(e){var t=e.data.target.fields;return t&&t.cardSlug?c.a.createElement(b,{slug:t.cardSlug["en-US"]}):c.a.createElement("h1",null,"WTF")},e)})))))},t}(c.a.Component),C=(t.default=x,"481035854")},248:function(e,t,a){"use strict";var n=a(2),r=a.n(n),l=a(4),c=a.n(l),i=a(104),u=a.n(i);a.d(t,"a",function(){return u.a});a(249),a(35).default.enqueue,r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},249:function(e,t,a){var n;e.exports=(n=a(250))&&n.default||n},250:function(e,t,a){"use strict";a.r(t);a(42);var n=a(2),r=a.n(n),l=a(4),c=a.n(l),i=a(132),u=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},251:function(e,t,a){"use strict";var n=a(33),r=a.n(n),l=a(2),c=a.n(l),i=a(248),u=(a(262),function(e){var t=e.children;return c.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)}),o=a(263),s=a.n(o),m=function(){return c.a.createElement("nav",{role:"navigation"},c.a.createElement("ul",{className:s.a.navigation},c.a.createElement("li",{className:s.a.navigationItem},c.a.createElement(i.a,{to:"/"},"Home")),c.a.createElement("li",{className:s.a.navigationItem},c.a.createElement(i.a,{to:"/resources/"},"Resources"))))},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/nova-www/",c.a.createElement(u,null,c.a.createElement(m,null),t)},t}(c.a.Component);t.a=d}}]);
//# sourceMappingURL=component---src-templates-resource-js-d3c84787f4ebe6c01071.js.map