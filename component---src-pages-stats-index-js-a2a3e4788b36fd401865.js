(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return o});var a=n(0),r=n.n(a),u=n(154),i=n(156);t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement("br",null),r.a.createElement("div",{className:"markdown-body"},r.a.createElement("h1",null,"Statistics and Probability"),r.a.createElement("p",null,t.allMarkdownRemark.edges.map(function(e,t){var n=e.node;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.Link,{to:n.fields.slug},t+1,". ",n.frontmatter.title),r.a.createElement("br",null))}))))};var o="2172968032"},148:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(161)),u=a(n(162)),i=a(n(7)),o=a(n(52)),M=a(n(53)),c=a(n(4)),s=a(n(0)),l=n(23),j=n(154);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var y={activeClassName:c.default.string,activeStyle:c.default.object},N=function(e){function t(t){var n;n=e.call(this,t)||this,(0,M.default)((0,o.default)((0,o.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,u.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,j.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,j.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,j.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,o=t.onClick,M=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),y=t.replace,N=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var p=d(n);return s.default.createElement(l.Link,(0,u.default)({to:p,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){M&&M(e),___loader.hovering((0,j.parsePath)(n).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:c,replace:y})),!0}},N))},t}(s.default.Component);N.propTypes=(0,u.default)({},y,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var p=s.default.forwardRef(function(e,t){return s.default.createElement(N,(0,u.default)({innerRef:t},e))});t.default=p;var g=function(e,t){window.___navigate(d(e),t)};t.navigate=g;var f=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=f;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),f(e)}},151:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViIGljb248L3RpdGxlPjxwYXRoIGQ9Ik0xMiAuMjk3Yy02LjYzIDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMyAzLjQzOCA5LjggOC4yMDUgMTEuMzg1LjYuMTEzLjgyLS4yNTguODItLjU3NyAwLS4yODUtLjAxLTEuMDQtLjAxNS0yLjA0LTMuMzM4LjcyNC00LjA0Mi0xLjYxLTQuMDQyLTEuNjFDNC40MjIgMTguMDcgMy42MzMgMTcuNyAzLjYzMyAxNy43Yy0xLjA4Ny0uNzQ0LjA4NC0uNzI5LjA4NC0uNzI5IDEuMjA1LjA4NCAxLjgzOCAxLjIzNiAxLjgzOCAxLjIzNiAxLjA3IDEuODM1IDIuODA5IDEuMzA1IDMuNDk1Ljk5OC4xMDgtLjc3Ni40MTctMS4zMDUuNzYtMS42MDUtMi42NjUtLjMtNS40NjYtMS4zMzItNS40NjYtNS45MyAwLTEuMzEuNDY1LTIuMzggMS4yMzUtMy4yMi0uMTM1LS4zMDMtLjU0LTEuNTIzLjEwNS0zLjE3NiAwIDAgMS4wMDUtLjMyMiAzLjMgMS4yMy45Ni0uMjY3IDEuOTgtLjM5OSAzLS40MDUgMS4wMi4wMDYgMi4wNC4xMzggMyAuNDA1IDIuMjgtMS41NTIgMy4yODUtMS4yMyAzLjI4NS0xLjIzLjY0NSAxLjY1My4yNCAyLjg3My4xMiAzLjE3Ni43NjUuODQgMS4yMyAxLjkxIDEuMjMgMy4yMiAwIDQuNjEtMi44MDUgNS42MjUtNS40NzUgNS45Mi40Mi4zNi44MSAxLjA5Ni44MSAyLjIyIDAgMS42MDYtLjAxNSAyLjg5Ni0uMDE1IDMuMjg2IDAgLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTIiLz48L3N2Zz4="},152:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TGlua2VkSW4gaWNvbjwvdGl0bGU+PHBhdGggZD0iTTIwLjQ0NyAyMC40NTJoLTMuNTU0di01LjU2OWMwLTEuMzI4LS4wMjctMy4wMzctMS44NTItMy4wMzctMS44NTMgMC0yLjEzNiAxLjQ0NS0yLjEzNiAyLjkzOXY1LjY2N0g5LjM1MVY5aDMuNDE0djEuNTYxaC4wNDZjLjQ3Ny0uOSAxLjYzNy0xLjg1IDMuMzctMS44NSAzLjYwMSAwIDQuMjY3IDIuMzcgNC4yNjcgNS40NTV2Ni4yODZ6TTUuMzM3IDcuNDMzYy0xLjE0NCAwLTIuMDYzLS45MjYtMi4wNjMtMi4wNjUgMC0xLjEzOC45Mi0yLjA2MyAyLjA2My0yLjA2MyAxLjE0IDAgMi4wNjQuOTI1IDIuMDY0IDIuMDYzIDAgMS4xMzktLjkyNSAyLjA2NS0yLjA2NCAyLjA2NXptMS43ODIgMTMuMDE5SDMuNTU1VjloMy41NjR2MTEuNDUyek0yMi4yMjUgMEgxLjc3MUMuNzkyIDAgMCAuNzc0IDAgMS43Mjl2MjAuNTQyQzAgMjMuMjI3Ljc5MiAyNCAxLjc3MSAyNGgyMC40NTFDMjMuMiAyNCAyNCAyMy4yMjcgMjQgMjIuMjcxVjEuNzI5QzI0IC43NzQgMjMuMiAwIDIyLjIyMiAwaC4wMDN6Ii8+PC9zdmc+"},153:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48cGF0aCBkPSJNMjMuOTU0IDQuNTY5Yy0uODg1LjM4OS0xLjgzLjY1NC0yLjgyNS43NzUgMS4wMTQtLjYxMSAxLjc5NC0xLjU3NCAyLjE2My0yLjcyMy0uOTUxLjU1NS0yLjAwNS45NTktMy4xMjcgMS4xODQtLjg5Ni0uOTU5LTIuMTczLTEuNTU5LTMuNTkxLTEuNTU5LTIuNzE3IDAtNC45MiAyLjIwMy00LjkyIDQuOTE3IDAgLjM5LjA0NS43NjUuMTI3IDEuMTI0QzcuNjkxIDguMDk0IDQuMDY2IDYuMTMgMS42NCAzLjE2MWMtLjQyNy43MjItLjY2NiAxLjU2MS0uNjY2IDIuNDc1IDAgMS43MS44NyAzLjIxMyAyLjE4OCA0LjA5Ni0uODA3LS4wMjYtMS41NjYtLjI0OC0yLjIyOC0uNjE2di4wNjFjMCAyLjM4NSAxLjY5MyA0LjM3NCAzLjk0NiA0LjgyNy0uNDEzLjExMS0uODQ5LjE3MS0xLjI5Ni4xNzEtLjMxNCAwLS42MTUtLjAzLS45MTYtLjA4Ni42MzEgMS45NTMgMi40NDUgMy4zNzcgNC42MDQgMy40MTctMS42OCAxLjMxOS0zLjgwOSAyLjEwNS02LjEwMiAyLjEwNS0uMzkgMC0uNzc5LS4wMjMtMS4xNy0uMDY3IDIuMTg5IDEuMzk0IDQuNzY4IDIuMjA5IDcuNTU3IDIuMjA5IDkuMDU0IDAgMTMuOTk5LTcuNDk2IDEzLjk5OS0xMy45ODYgMC0uMjA5IDAtLjQyLS4wMTUtLjYzLjk2MS0uNjg5IDEuOC0xLjU2IDIuNDYtMi41NDhsLS4wNDctLjAyeiIvPjwvc3ZnPg=="},154:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return N}),n.d(t,"StaticQueryContext",function(){return j}),n.d(t,"StaticQuery",function(){return d}),n.d(t,"useStaticQuery",function(){return y});var a=n(0),r=n.n(a),u=n(4),i=n.n(u),o=n(148),M=n.n(o);n.d(t,"Link",function(){return M.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var c=n(155),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var l=n(34);n.d(t,"parsePath",function(){return l.a});var j=r.a.createContext({}),d=function(e){return r.a.createElement(j.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},y=function(e){r.a.useContext;var t=r.a.useContext(j);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function N(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(e,t,n){var a;e.exports=(a=n(163))&&a.default||a},156:function(e,t,n){"use strict";var a=n(7),r=n.n(a),u=n(149),i=n.n(u),o=n(0),M=n.n(o),c=n(159),s=n(150),l=(n(157),n(151)),j=n.n(l),d=n(152),y=n.n(d),N=n(153),p=n.n(N);function g(){var e=i()(["\n  width: 1.4em;\n  height: 1.6em;\n  padding: 0 0.4em;\n"]);return g=function(){return e},e}function f(){var e=i()(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n"]);return f=function(){return e},e}function L(){var e=i()(["\n  font-size: 2.45rem;\n  margin: 0;\n  padding: 0.1em 0;\n  font-weight: 400;\n  text-align: center;\n"]);return L=function(){return e},e}function A(){var e=i()(["\n  height: 6em;\n  background: #ffffff;\n  color: #000000;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"]);return A=function(){return e},e}var I=s.a.header(A()),h=s.a.h1(L()),D=s.a.div(f()),m=s.a.img(g()),S=function(e){var t=e.src,n=e.link;return M.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},M.a.createElement(m,{src:t}))},w=function(){return M.a.createElement(I,null,M.a.createElement(h,null,"~ nowke ~"),M.a.createElement(D,null,M.a.createElement(S,{src:j.a,link:"https://github.com/nowke"}),M.a.createElement(S,{src:y.a,link:"https://www.linkedin.com/in/nowke/"}),M.a.createElement(S,{src:p.a,link:"https://twitter.com/inowke"})))};n(160),n(32),n(141);function x(){var e=i()(["\n  margin: 0 auto;\n  width: 80%;\n  max-width: 80rem;\n"]);return x=function(){return e},e}n.d(t,"a",function(){return T});var v=s.a.div(x()),T=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e,t;(e="MathJax",void 0===t&&(t=300),new Promise(function(n,a){var r=0;!function u(i){setTimeout(function(){return r+=i,void 0!==window[e]?n():r>=1e3*t?a({message:"Timeout"}):void u(2*i)},i)}(30)})).then(function(){top.MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["[","]"]],processEscapes:!0,processEnvironments:!0,skipTags:["script","noscript","style","textarea","pre"],TeX:{equationNumbers:{autoNumber:"AMS"},extensions:["AMSmath.js","AMSsymbols.js"]}}})}),null!=top.MathJax&&top.MathJax.Hub.Queue(["Typeset",top.MathJax.Hub])},n.componentDidUpdate=function(){null!=top.MathJax&&top.MathJax.Hub.Queue(["Typeset",top.MathJax.Hub])},n.render=function(){var e=this.props.children;return M.a.createElement(M.a.Fragment,null,M.a.createElement(c.Helmet,{htmlAttributes:{lang:"en"}},M.a.createElement("title",null,"nowke | Navaneesh Kumar"),M.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Noto+Serif:400,700",rel:"stylesheet"}),M.a.createElement("script",{type:"text/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS-MML_HTMLorMML",async:!0})),M.a.createElement(w,null),M.a.createElement(v,null,e))},t}(M.a.Component)},161:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},162:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},163:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),u=n(4),i=n.n(u),o=n(55),M=n(2),c=function(e){var t=e.location,n=M.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-stats-index-js-a2a3e4788b36fd401865.js.map