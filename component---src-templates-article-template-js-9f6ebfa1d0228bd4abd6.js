(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f})),n.d(t,"pageQuery",(function(){return m}));var i=n(0),r=n.n(i),o=n(232),a=n(231),s=n(274),d=n.n(s),c=n(233),u=n.n(c),l=n(234);function f(e){var t=e.data.markdownRemark;return r.a.createElement(o.a,null,r.a.createElement(a.a,{title:t.frontmatter.title,description:t.frontmatter.description,author:t.frontmatter.author,keywords:t.frontmatter.tags?t.frontmatter.tags.join(", "):null,type:"article"}),r.a.createElement(l.a,{title:t.frontmatter.title,type:"h3"}),r.a.createElement("div",{className:"row mx-0 my-4"},r.a.createElement("div",{className:"col-md-9 order-2 order-md-1"},r.a.createElement("div",{className:"card p-4 content-text-size",dangerouslySetInnerHTML:{__html:t.html}})),r.a.createElement("div",{className:"col-md-3 order-1 mb-4 order-md-2"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"w-100 cover",src:t.frontmatter.cover?t.frontmatter.cover.publicURL:u.a,alt:t.frontmatter.slug+"'s image"}),r.a.createElement("div",{className:"m-4"},r.a.createElement("h6",null,"@",t.frontmatter.author),r.a.createElement("div",null,t.frontmatter.categories.map((function(e,t){return r.a.createElement("div",{key:t,className:"tag mt-4 "+e},e)}))),r.a.createElement("div",null,r.a.createElement("h6",null,"Tags"),t.frontmatter.tags.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))))),r.a.createElement("div",{className:"p-2"},r.a.createElement(d.a,{identifier:t.frontmatter.id,title:t.frontmatter.title})))}var m="979980920"},263:function(e,t,n){"use strict";t.__esModule=!0,t.insertScript=function(e,t,n){var i=window.document.createElement("script");return i.async=!0,i.src=e,i.id=t,n.appendChild(i),i},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var i;return function(){var r=this,o=arguments,a=function(){i=null,n||e.apply(r,o)},s=n&&!i;window.clearTimeout(i),i=setTimeout(a,t),s&&e.apply(r,o)}}},274:function(e,t,n){"use strict";var i=n(16);t.__esModule=!0,t.default=void 0;var r=i(n(275));t.Disqus=r.default;var o=i(n(277));t.CommentCount=o.default;var a=r.default;t.default=a},275:function(e,t,n){"use strict";var i=n(16);t.__esModule=!0,t.default=void 0;var r=i(n(109)),o=i(n(165)),a=i(n(79)),s=i(n(0)),d=i(n(48)),c=n(263);n(276);var u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="amfoss",t.config?n.config=t.config:n.config={identifier:t.identifier,url:t.url,title:t.title},n}(0,a.default)(t,e);var n=t.prototype;return n.componentWillReceiveProps=function(e){this.setState(e)},n.componentWillMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance()},n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){if(this.shortname!==e.shortname)return!0;var t=this.config,n=e.config;return t.url!==n.url||t.identifier!==n.identifier},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url},(0,c.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,c.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},n.render=function(){var e=this.props,t=(e.config,(0,o.default)(e,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},t,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86},__self:this}))},t}(s.default.Component);t.default=u,u.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),identifier:d.default.string,title:d.default.string,url:d.default.string}},277:function(e,t,n){"use strict";var i=n(16);t.__esModule=!0,t.default=void 0;var r=i(n(109)),o=i(n(165)),a=i(n(79)),s=i(n(0)),d=i(n(48)),c=n(263),u=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="amfoss",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){var t=this.props.config,n=e.config;return t.url!==n.url||t.identifier!==n.identifier},n.componentWillReceiveProps=function(e){this.setState(e)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,i=(0,o.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},i,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:55},__self:this}),n)},t}(s.default.Component);t.default=l,l.defaultProps={placeholder:"..."},l.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),placeholder:d.default.string}}}]);
//# sourceMappingURL=component---src-templates-article-template-js-9f6ebfa1d0228bd4abd6.js.map