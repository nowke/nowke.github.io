(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(n,t,e){"use strict";e.r(t),e.d(t,"query",function(){return u});var a=e(0),i=e.n(a),r=e(156);t.default=function(n){var t=n.data.markdownRemark;return i.a.createElement(r.a,null,i.a.createElement("br",null),i.a.createElement("div",{className:"markdown-body"},i.a.createElement("h1",null,t.frontmatter.title),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null))};var u="861893041"},145:function(n,t,e){"use strict";e.r(t),e.d(t,"graphql",function(){return g}),e.d(t,"StaticQueryContext",function(){return y}),e.d(t,"StaticQuery",function(){return s}),e.d(t,"useStaticQuery",function(){return N});var a=e(0),i=e.n(a),r=e(4),u=e.n(r),M=e(143),o=e.n(M);e.d(t,"Link",function(){return o.a}),e.d(t,"withPrefix",function(){return M.withPrefix}),e.d(t,"navigate",function(){return M.navigate}),e.d(t,"push",function(){return M.push}),e.d(t,"replace",function(){return M.replace}),e.d(t,"navigateTo",function(){return M.navigateTo});var c=e(146),j=e.n(c);e.d(t,"PageRenderer",function(){return j.a});var l=e(34);e.d(t,"parsePath",function(){return l.a});var y=i.a.createContext({}),s=function(n){return i.a.createElement(y.Consumer,null,function(t){return n.data||t[n.query]&&t[n.query].data?(n.render||n.children)(n.data?n.data.data:t[n.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})},N=function(n){i.a.useContext;var t=i.a.useContext(y);if(t[n]&&t[n].data)return t[n].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}s.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},146:function(n,t,e){var a;n.exports=(a=e(150))&&a.default||a},150:function(n,t,e){"use strict";e.r(t);e(32);var a=e(0),i=e.n(a),r=e(4),u=e.n(r),M=e(55),o=e(2),c=function(n){var t=n.location,e=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(M.a,Object.assign({location:t,pageResources:e},e.json))};c.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=c},151:function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAuMjk3Yy02LjYzIDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMyAzLjQzOCA5LjggOC4yMDUgMTEuMzg1LjYuMTEzLjgyLS4yNTguODItLjU3NyAwLS4yODUtLjAxLTEuMDQtLjAxNS0yLjA0LTMuMzM4LjcyNC00LjA0Mi0xLjYxLTQuMDQyLTEuNjFDNC40MjIgMTguMDcgMy42MzMgMTcuNyAzLjYzMyAxNy43Yy0xLjA4Ny0uNzQ0LjA4NC0uNzI5LjA4NC0uNzI5IDEuMjA1LjA4NCAxLjgzOCAxLjIzNiAxLjgzOCAxLjIzNiAxLjA3IDEuODM1IDIuODA5IDEuMzA1IDMuNDk1Ljk5OC4xMDgtLjc3Ni40MTctMS4zMDUuNzYtMS42MDUtMi42NjUtLjMtNS40NjYtMS4zMzItNS40NjYtNS45MyAwLTEuMzEuNDY1LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5Ni0uMDE1IDMuMjg2IDAgLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTIiLz48L3N2Zz4="},152:function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TGlua2VkSW4gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIwLjQ0NyAyMC40NTJoLTMuNTU0di01LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzctMS44NTMgMC0yLjEzNiAxLjQ0NS0yLjEzNiAyLjkzOXY1LjY2N0g5LjM1MVY5aDMuNDE0djEuNTYxaC4wNDZjLjQ3Ny0uOSAxLjYzNy0xLjg1IDMuMzctMS44NSAzLjYwMSAwIDQuMjY3IDIuMzcgNC4yNjcgNS40NTV2Ni4yODZ6TTUuMzM3IDcuNDMzYy0xLjE0NCAwLTIuMDYzLS45MjYtMi4wNjMtMi4wNjUgMC0xLjEzOC45Mi0yLjA2MyAyLjA2My0yLjA2MyAxLjE0IDAgMi4wNjQuOTI1IDIuMDY0IDIuMDYzIDAgMS4xMzktLjkyNSAyLjA2NS0yLjA2NCAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAyNCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyMiAwaC4wMDN6Ii8+PC9zdmc+"},153:function(n,t){n.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="},156:function(n,t,e){"use strict";var a=e(7),i=e.n(a),r=e(144),u=e.n(r),M=e(0),o=e.n(M),c=e(157),j=e(147),l=(e(149),e(145)),y=e(151),s=e.n(y),N=e(152),g=e.n(N),d=e(153),L=e.n(d);function m(){var n=u()(["\n  width: 1.4em;\n  height: 1.6em;\n  padding: 0 0.7em;\n  box-sizing: content-box;\n"]);return m=function(){return n},n}function x(){var n=u()(["\n  font-size: 0.9rem;\n"]);return x=function(){return n},n}function p(){var n=u()(["\n  display: flex;\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style: none;\n  margin-left: auto !important;\n  flex-direction: row;\n"]);return p=function(){return n},n}function A(){var n=u()(["\n  align-items: center;\n  flex-grow: 1;\n  flex-basis: auto;\n  display: flex;\n"]);return A=function(){return n},n}function I(){var n=u()(['\n  font-family: "Noto Serif", serif;\n  font-size: 1.9rem;\n  margin: 0;\n  padding: 0.1em 0;\n  font-weight: 400;\n  text-align: left;\n']);return I=function(){return n},n}function f(){var n=u()(["\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (min-width: 576px) {\n    max-width: 540px;\n  }\n\n  @media (min-width: 768px) {\n    max-width: 720px;\n  }\n\n  @media (min-width: 992px) {\n    flex-wrap: nowrap;\n    max-width: 960px;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n\n"]);return f=function(){return n},n}function D(){var n=u()(["\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  background-color: #ffffff;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 0;\n  z-index: 100;\n  box-shadow: rgba(0, 0, 0, 0.06) 0px 6px 20px;\n  background: rgba(255, 255, 255, 0.98);\n\n  @media (min-width: 992px) {\n    flex-flow: row nowrap;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n  }\n"]);return D=function(){return n},n}var h=j.a.nav(D()),w=j.a.div(f()),S=j.a.h1(I()),z=function(n){var t=n.children;return o.a.createElement(l.Link,{to:"/",style:{textDecoration:"none",color:"unset"}},o.a.createElement(S,null,t))},T=j.a.div(A()),E=j.a.ul(p()),b=j.a.li(x()),C=j.a.img(m()),v=function(n){var t=n.src,e=n.link;return o.a.createElement(b,null,o.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(C,{src:t,width:"1.4em",height:"1.6em"})))},k=function(){return o.a.createElement(h,null,o.a.createElement(w,null,o.a.createElement(z,null,"nowke"),o.a.createElement(T,null,o.a.createElement(E,null,o.a.createElement(v,{src:s.a,link:"https://github.com/nowke"}),o.a.createElement(v,{src:g.a,link:"https://www.linkedin.com/in/nowke/"}),o.a.createElement(v,{src:L.a,link:"https://twitter.com/inowke"})))))};e(159),e(33),e(160),e(161);function Y(){var n=u()(["\n  margin: 0 auto;\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  @media (min-width: 576px) {\n    max-width: 540px;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  @media (min-width: 768px) {\n    max-width: 720px;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 960px;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n"]);return Y=function(){return n},n}function U(){var n=u()(["\n  min-height: 60vh;\n  padding-top: 1.5rem;\n  margin-top: 70px;\n"]);return U=function(){return n},n}e.d(t,"a",function(){return G});var O=j.a.div(U()),Q=j.a.div(Y()),G=function(n){function t(){return n.apply(this,arguments)||this}i()(t,n);var e=t.prototype;return e.componentDidMount=function(){var n,t;(n="MathJax",void 0===t&&(t=300),new Promise(function(e,a){var i=0;!function r(u){setTimeout(function(){return i+=u,void 0!==window[n]?e():i>=1e3*t?a({message:"Timeout"}):void r(2*u)},u)}(30)})).then(function(){top.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["[","]"]],processEscapes:!0,processEnvironments:!0,skipTags:["script","noscript","style","textarea","pre"],TeX:{equationNumbers:{autoNumber:"AMS"},extensions:["AMSmath.js","AMSsymbols.js"]}}})}),null!=top.MathJax&&top.MathJax.Hub.Queue(["Typeset",top.MathJax.Hub])},e.componentDidUpdate=function(){null!=top.MathJax&&top.MathJax.Hub.Queue(["Typeset",top.MathJax.Hub])},e.render=function(){var n=this.props.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.Helmet,{htmlAttributes:{lang:"en"}},o.a.createElement("title",null,"nowke | Navaneesh Kumar"),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Noto+Serif:400",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:400,600",rel:"stylesheet"}),o.a.createElement("script",{type:"text/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_HTMLorMML",async:!0})),o.a.createElement(k,null),o.a.createElement(O,null,o.a.createElement(Q,null,n)))},t}(o.a.Component)}}]);
//# sourceMappingURL=component---src-templates-notebook-js-620838fc2895bff581c0.js.map