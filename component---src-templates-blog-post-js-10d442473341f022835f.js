(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{188:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return y});var n=a(9),r=a.n(n),l=a(0),i=a.n(l),c=a(203),o=a.n(c),u=a(204),s=a.n(u),m=a(200),d=a.n(m),p=a(197),f=a(218),E=a(242),g=a(244),h=a(224),v=a.n(h),_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=s()(this.props,"data.contentfulBlogPost"),a=s()(this.props,"data.site.siteMetadata.title");return i.a.createElement(p.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement(o.a,{title:t.title+" | "+a}),i.a.createElement("div",{className:v.a.hero},i.a.createElement(d.a,{className:v.a.heroImage,alt:t.title,fluid:t.heroImage.fluid})),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h1",{className:"section-headline"},t.title),i.a.createElement("p",{style:{display:"block"}},t.publishDate),i.a.createElement("div",null,t.bodyRich?Object(g.documentToReactComponents)(t.bodyRich.json,{renderNode:(e={},e[E.BLOCKS.EMBEDDED_ENTRY]=function(e){console.log(e);var t=e.data.target.fields;return t&&t.cardSlug?i.a.createElement(f.a,{slug:t.cardSlug["en-US"]}):i.a.createElement("h1",null,"WTF")},e)}):i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.body.childMarkdownRemark.html}})))))},t}(i.a.Component);t.default=_;var y="350629985"},193:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(12),i=a.n(l),c=a(66),o=a.n(c);a.d(t,"a",function(){return o.a});a(194),a(10).default.enqueue,r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},194:function(e,t,a){var n;e.exports=(n=a(196))&&n.default||n},196:function(e,t,a){"use strict";a.r(t);a(24);var n=a(0),r=a.n(n),l=a(12),i=a.n(l),c=a(97),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},197:function(e,t,a){"use strict";var n=a(9),r=a.n(n),l=a(0),i=a.n(l),c=a(193),o=(a(205),function(e){var t=e.children;return i.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},t)}),u=a(206),s=a.n(u),m=function(){return i.a.createElement("nav",{role:"navigation"},i.a.createElement("ul",{className:s.a.navigation},i.a.createElement("li",{className:s.a.navigationItem},i.a.createElement(c.a,{to:"/"},"Home")),i.a.createElement("li",{className:s.a.navigationItem},i.a.createElement(c.a,{to:"/articles/"},"Resources")),i.a.createElement("li",{className:s.a.navigationItem},i.a.createElement(c.a,{to:"/blog/"},"Credit Cards"))))},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/nova-www/",i.a.createElement(o,null,i.a.createElement(m,null),t)},t}(i.a.Component);t.a=d},218:function(e,t,a){"use strict";a(40);var n=a(231),r=a.n(n),l=a(0),i=a.n(l),c=a(222),o=a(208);function u(){var e=r()(['\n      {\n        nova {\n          creditCard(slug: "the-platinum-card-from-american-express") {\n            name\n\t\t\t\t\t\timage_url\n          }\n        }\n      }\n    ']);return u=function(){return e},e}var s=new o.a({uri:"http://localhost:8000/___graphql"});t.a=function(e){e.slug;return i.a.createElement(c.b,{client:s,query:Object(o.b)(u())},function(e){var t=e.loading,a=e.error,n=e.data;if(t)return i.a.createElement("p",null,"Loading...");if(a)return i.a.createElement("p",null,"Error :(");var r=n.nova.creditCard;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,r.name),i.a.createElement("img",{src:r.image_url,alt:r.name}))})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-10d442473341f022835f.js.map