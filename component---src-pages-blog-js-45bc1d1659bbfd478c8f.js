(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{191:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return v});var n=t(9),r=t.n(n),l=t(0),i=t.n(l),c=(t(193),t(204)),s=t.n(c),o=t(203),u=t.n(o),m=t(241),p=t.n(m),d=t(197),f=t(207),E=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),a=s()(this,"props.data.allContentfulBlogPost.edges");return i.a.createElement(d.a,{location:this.props.location},i.a.createElement("div",{style:{background:"#fff"}},i.a.createElement(u.a,{title:e}),i.a.createElement("div",{className:p.a.hero},"Blog"),i.a.createElement("div",{className:"wrapper"},i.a.createElement("h2",{className:"section-headline"},"Recent articles"),i.a.createElement("ul",{className:"article-list"},a.map(function(e){var a=e.node;return i.a.createElement("li",{key:a.slug},i.a.createElement(f.a,{article:a}))})))))},a}(i.a.Component);a.default=E;var v="1833322291"},193:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(12),i=t.n(l),c=t(66),s=t.n(c);t.d(a,"a",function(){return s.a});t(194),t(10).default.enqueue,r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},194:function(e,a,t){var n;e.exports=(n=t(196))&&n.default||n},196:function(e,a,t){"use strict";t.r(a);t(24);var n=t(0),r=t.n(n),l=t(12),i=t.n(l),c=t(97),s=function(e){var a=e.location,t=e.pageResources;return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=s},197:function(e,a,t){"use strict";var n=t(9),r=t.n(n),l=t(0),i=t.n(l),c=t(193),s=(t(205),function(e){var a=e.children;return i.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto"}},a)}),o=t(206),u=t.n(o),m=function(){return i.a.createElement("nav",{role:"navigation"},i.a.createElement("ul",{className:u.a.navigation},i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/"},"Home")),i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/articles/"},"Resources")),i.a.createElement("li",{className:u.a.navigationItem},i.a.createElement(c.a,{to:"/blog/"},"Credit Cards"))))},p=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props,a=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/nova-www/",i.a.createElement(s,null,i.a.createElement(m,null),a)},a}(i.a.Component);a.a=p},207:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(193),i=t(200),c=t.n(i),s=t(223),o=t.n(s);a.a=function(e){var a=e.article;return r.a.createElement("div",{className:o.a.preview},r.a.createElement(l.a,{to:"/articles/"+a.slug},r.a.createElement(c.a,{alt:"",fluid:a.thumbnailImage.fluid})),r.a.createElement("h3",{className:o.a.previewTitle},r.a.createElement(l.a,{to:"/articles/"+a.slug},a.title)),r.a.createElement("small",null,a.updatedAt),r.a.createElement("p",null,a.summary))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-45bc1d1659bbfd478c8f.js.map