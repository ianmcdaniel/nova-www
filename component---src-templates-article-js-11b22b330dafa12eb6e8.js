(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{243:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return y});var n=a(31),r=a.n(n),l=a(2),c=a.n(l),i=a(252),o=a.n(i),u=a(253),s=a.n(u),m=a(251),d=a.n(m),p=a(247),E=a(250),f=a(264),v=a(272),g=a(274),h=a(265),_=a.n(h),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=s()(this.props,"data.contentfulArticle"),a=s()(this.props,"data.site.siteMetadata.title");return c.a.createElement(E.a,{location:this.props.location},c.a.createElement("div",null,c.a.createElement(o.a,{title:t.title+" | "+a}),c.a.createElement("div",{className:"main-hero"},c.a.createElement(p.a,{to:"/articles"},"← Back to Resources"),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("h1",{className:"section-headline"},t.title),c.a.createElement(d.a,{className:_.a.heroImage,alt:t.title,fluid:t.mainImage.fluid})),c.a.createElement("div",{className:"wrapper"},c.a.createElement("p",null,t.updatedAt),c.a.createElement("div",{className:"article-body"},Object(g.documentToReactComponents)(t.body.json,{renderNode:(e={},e[v.BLOCKS.EMBEDDED_ENTRY]=function(e){var t=e.data.target.fields;return t&&t.cardSlug?c.a.createElement(f.a,{slug:t.cardSlug["en-US"]}):c.a.createElement("h1",null,"WTF")},e)})))))},t}(c.a.Component);t.default=b;var y="481035854"},247:function(e,t,a){"use strict";var n=a(2),r=a.n(n),l=a(4),c=a.n(l),i=a(103),o=a.n(i);a.d(t,"a",function(){return o.a});a(248),a(33).default.enqueue,r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},248:function(e,t,a){var n;e.exports=(n=a(249))&&n.default||n},249:function(e,t,a){"use strict";a.r(t);a(41);var n=a(2),r=a.n(n),l=a(4),c=a.n(l),i=a(131),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},250:function(e,t,a){"use strict";var n=a(31),r=a.n(n),l=a(2),c=a.n(l),i=a(247),o=(a(254),function(e){var t=e.children;return c.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)}),u=a(255),s=a.n(u),m=function(){return c.a.createElement("nav",{role:"navigation"},c.a.createElement("ul",{className:s.a.navigation},c.a.createElement("li",{className:s.a.navigationItem},c.a.createElement(i.a,{to:"/"},"Home")),c.a.createElement("li",{className:s.a.navigationItem},c.a.createElement(i.a,{to:"/articles/"},"Resources")),c.a.createElement("li",{className:s.a.navigationItem},c.a.createElement(i.a,{to:"/blog/"},"Credit Cards"))))},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/nova-www/",c.a.createElement(o,null,c.a.createElement(m,null),t)},t}(c.a.Component);t.a=d},264:function(e,t,a){"use strict";a(9);var n=a(271),r=a.n(n),l=a(2),c=a.n(l),i=a(132),o=a(133);function u(){var e=r()(['\n      {\n        nova {\n          creditCard(slug: "the-platinum-card-from-american-express") {\n            name\n\t\t\t\t\t\timage_url\n          }\n        }\n      }\n    ']);return u=function(){return e},e}t.a=function(e){e.slug;return c.a.createElement(i.b,{query:Object(o.b)(u())},function(e){var t=e.loading,a=e.error,n=e.data;if(t)return c.a.createElement("p",null,"Loading...");if(a)return c.a.createElement("p",null,"Error :(");var r=n.nova.creditCard;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,r.name),c.a.createElement("p",null,r.image_url),"xx",c.a.createElement("img",{src:r.image_url,alt:r.name}),"xx")})}}}]);
//# sourceMappingURL=component---src-templates-article-js-11b22b330dafa12eb6e8.js.map