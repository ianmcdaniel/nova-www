(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{242:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return _});var n=a(31),r=a.n(n),l=a(2),i=a.n(l),c=a(252),o=a.n(c),u=a(253),s=a.n(u),m=a(251),d=a.n(m),p=a(250),f=a(264),E=a(272),g=a(274),v=a(265),h=a.n(v),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=s()(this.props,"data.contentfulBlogPost"),a=s()(this.props,"data.site.siteMetadata.title");return i.a.createElement(p.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement(o.a,{title:t.title+" | "+a}),i.a.createElement("div",{className:h.a.hero},i.a.createElement(d.a,{className:h.a.heroImage,alt:t.title,fluid:t.heroImage.fluid})),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:"section-headline"},t.title),i.a.createElement("p",{style:{display:"block"}},t.publishDate),i.a.createElement("div",null,t.bodyRich?Object(g.documentToReactComponents)(t.bodyRich.json,{renderNode:(e={},e[E.BLOCKS.EMBEDDED_ENTRY]=function(e){console.log(e);var t=e.data.target.fields;return t&&t.cardSlug?i.a.createElement(f.a,{slug:t.cardSlug["en-US"]}):i.a.createElement("h1",null,"WTF")},e)}):i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.body.childMarkdownRemark.html}})))))},t}(i.a.Component);t.default=y;var _="350629985"},247:function(e,t,a){"use strict";var n=a(2),r=a.n(n),l=a(4),i=a.n(l),c=a(103),o=a.n(c);a.d(t,"a",function(){return o.a});a(248),a(33).default.enqueue,r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},248:function(e,t,a){var n;e.exports=(n=a(249))&&n.default||n},249:function(e,t,a){"use strict";a.r(t);a(41);var n=a(2),r=a.n(n),l=a(4),i=a.n(l),c=a(131),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},250:function(e,t,a){"use strict";var n=a(31),r=a.n(n),l=a(2),i=a.n(l),c=a(247),o=(a(254),function(e){var t=e.children;return i.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)}),u=a(255),s=a.n(u),m=function(){return i.a.createElement("nav",{role:"navigation"},i.a.createElement("ul",{className:s.a.navigation},i.a.createElement("li",{className:s.a.navigationItem},i.a.createElement(c.a,{to:"/"},"Home")),i.a.createElement("li",{className:s.a.navigationItem},i.a.createElement(c.a,{to:"/articles/"},"Resources")),i.a.createElement("li",{className:s.a.navigationItem},i.a.createElement(c.a,{to:"/blog/"},"Credit Cards"))))},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/nova-www/",i.a.createElement(o,null,i.a.createElement(m,null),t)},t}(i.a.Component);t.a=d},264:function(e,t,a){"use strict";a(9);var n=a(271),r=a.n(n),l=a(2),i=a.n(l),c=a(132),o=a(133);function u(){var e=r()(['\n      {\n        nova {\n          creditCard(slug: "the-platinum-card-from-american-express") {\n            name\n\t\t\t\t\t\timage_url\n          }\n        }\n      }\n    ']);return u=function(){return e},e}t.a=function(e){e.slug;return i.a.createElement(c.b,{query:Object(o.b)(u())},function(e){var t=e.loading,a=e.error,n=e.data;if(t)return i.a.createElement("p",null,"Loading...");if(a)return i.a.createElement("p",null,"Error :(");var r=n.nova.creditCard;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,r.name),i.a.createElement("p",null,r.image_url),"xx",i.a.createElement("img",{src:r.image_url,alt:r.name}),"xx")})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b4103c2f0830bc560178.js.map