(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{301:function(o,t,n){var content=n(311);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(24).default)("197ae880",content,!0,{sourceMap:!1})},302:function(o,t,n){var content=n(313);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(24).default)("51e6d97c",content,!0,{sourceMap:!1})},303:function(o,t,n){var content=n(315);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(24).default)("7c740b1f",content,!0,{sourceMap:!1})},304:function(o,t,n){"use strict";n.r(t);var e={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},r=(n(310),n(46)),d=n(63),l=n.n(d),c=n(133),component=Object(r.a)(e,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"d-flex justify-space-between my-8"},[o.prev?[n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-2",attrs:{color:"primary"}},[o._v("mdi-arrow-left")]),o._v(" "),o.prev?n("a",{staticClass:"font-weight-bold hover-underline",attrs:{href:o.prev.path}},[o._v("\n        "+o._s(o.prev.title)+"\n      ")]):o._e()],1)]:n("span",[o._v(" ")]),o._v(" "),o.next?[n("div",{staticClass:"d-flex"},[o.next?n("a",{staticClass:"font-weight-bold hover-underline",attrs:{href:o.next.path}},[o._v("\n        "+o._s(o.next.title)+"\n      ")]):o._e(),o._v(" "),n("v-icon",{staticClass:"ml-2",attrs:{color:"primary"}},[o._v("mdi-arrow-right")])],1)]:n("span",[o._v(" ")])],2)}),[],!1,null,"e786ce7c",null);t.default=component.exports;l()(component,{VIcon:c.a})},305:function(o,t,n){"use strict";n.r(t);var e={props:{toc:{type:Array,default:function(){return null}}}},r=(n(312),n(46)),component=Object(r.a)(e,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("nav",[n("div",{staticClass:"px-2 font-weight-bold text-overline"},[o._v("\n    On this page\n  ")]),o._v(" "),n("scrollactive",{staticClass:"toc",attrs:{"highlight-first-item":"","active-class":"active-toc",offset:70,tag:"ul"}},o._l(o.toc,(function(link){return n("li",{key:link.id,class:{"body-1":2===link.depth,"ml-3 body-2":3===link.depth}},[n("NuxtLink",{staticClass:"scrollactive-item",staticStyle:{color:"grey"},attrs:{to:"#"+link.id}},[o._v("\n        "+o._s(link.text)+"\n      ")])],1)})),0)],1)}),[],!1,null,"26ce25a2",null);t.default=component.exports},307:function(o,t,n){"use strict";n(59);var e=n(17);t.a=function(){var o=Object(e.a)(regeneratorRuntime.mark((function o(t,section){var n,e,r,d,l,c,m,h;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=t.$content,e=t.params,r=t.error,d=e.slug||"index",o.next=4,n(section,d).fetch().catch((function(o){r({statusCode:404,message:"Page not found",err:o})}));case 4:if(l=o.sent,c=null,m=null,"index"===d){o.next=13;break}return o.next=10,n(section).only(["title","slug"]).sortBy("position").surround(d).fetch();case 10:h=o.sent,c=h[0],m=h[1];case 13:return o.abrupt("return",{page:l,prev:c,next:m});case 14:case"end":return o.stop()}}),o)})));return function(t,n){return o.apply(this,arguments)}}()},308:function(o,t,n){var content=n(309);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,n(24).default)("42b7fd90",content,!0,{sourceMap:!1})},309:function(o,t,n){(t=n(23)(!1)).push([o.i,'.markdown-body{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#333;overflow:hidden;line-height:1.6;word-wrap:break-word}.markdown-body a{background:transparent}.markdown-body a:active,.markdown-body a:hover{outline:0}.markdown-body strong{font-weight:700}.markdown-body h1{font-size:2em;margin:.67em 0}.markdown-body hr{box-sizing:content-box}.markdown-body pre{overflow:auto;white-space:pre;padding:1.25rem;margin:40px 0;border:1px solid #d8d8d8;-o-border-image:none;border-image:none;-o-border-image:initial;border-image:initial}.markdown-body code,.markdown-body kbd,.markdown-body pre{font-family:monospace,monospace;font-size:1em}.markdown-body input{color:inherit;font:inherit;margin:0}.markdown-body html input[disabled]{cursor:default}.markdown-body input{line-height:normal}.markdown-body input[type=checkbox]{box-sizing:border-box;padding:0}.markdown-body table{border-collapse:collapse;border-spacing:0}.markdown-body td,.markdown-body th{padding:0}.markdown-body *{box-sizing:border-box}.markdown-body input{font:13px/1.4 Helvetica,arial,freesans,clean,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"}.markdown-body a{color:#4183c4;text-decoration:none}.markdown-body a:active,.markdown-body a:focus,.markdown-body a:hover{text-decoration:underline}.markdown-body hr{height:0;margin:15px 0;overflow:hidden;background:transparent;border-bottom:1px solid #ccc}.markdown-body hr:after,.markdown-body hr:before{display:table;content:""}.markdown-body hr:after{clear:both}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:15px;margin-bottom:15px;line-height:1.1}.markdown-body h1{font-size:30px}.markdown-body h2{font-size:21px}.markdown-body h3{font-size:16px}.markdown-body h4{font-size:14px}.markdown-body h5{font-size:12px}.markdown-body h6{font-size:11px}.markdown-body blockquote{margin:0}.markdown-body ol,.markdown-body ul{padding:0;margin-top:0;margin-bottom:0}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body pre{margin-top:0;margin-bottom:0}.markdown-body kbd{background-color:#e7e7e7;background-image:linear-gradient(#fefefe,#e7e7e7);background-repeat:repeat-x;border-radius:2px;border:1px solid #cfcfcf;color:#000;padding:3px 5px;line-height:10px;font:11px Consolas,"Liberation Mono",Menlo,Courier,monospace;display:inline-block}.markdown-body>:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.markdown-body .anchor{position:absolute;top:0;bottom:0;left:0;display:block;padding-right:6px;padding-left:30px;margin-left:-30px}.markdown-body .anchor:focus{outline:none}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{position:relative;margin-top:1em;margin-bottom:16px;font-weight:700;line-height:1.4}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{display:none;color:#000;vertical-align:middle}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{height:1em;padding-left:8px;margin-left:-30px;line-height:1;text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{display:inline-block}.markdown-body h1{font-size:2.25em;line-height:1.2}.markdown-body h1,.markdown-body h2{padding-bottom:.3em;border-bottom:1px solid #ccc}.markdown-body h2{font-size:1.75em;line-height:1.225}.markdown-body h3{font-size:1.5em;line-height:1.43}.markdown-body h4{font-size:1.25em}.markdown-body h5{font-size:1em}.markdown-body h6{font-size:1em;color:#777}.markdown-body blockquote,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-top:0;margin-bottom:16px}.markdown-body hr{height:4px;padding:0;margin:16px 0;background-color:#e7e7e7;border:0}.markdown-body ol,.markdown-body ul{padding-left:2em}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:0;margin-bottom:0}.markdown-body li>p{margin-top:16px}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:700}.markdown-body dl dd{padding:0 16px;margin-bottom:16px}.markdown-body blockquote{padding:0 15px;color:#777;border-left:4px solid #ddd}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}.markdown-body table th{font-weight:700}.markdown-body table td,.markdown-body table th{padding:6px 13px;border:1px solid #ddd}.markdown-body table tr{background-color:#fff;border-top:1px solid #ccc}.markdown-body table tr:nth-child(2n){background-color:#f8f8f8}.markdown-body img{max-width:100%;box-sizing:border-box}.markdown-body .octicon{font:normal normal 16px octicons-anchor;line-height:1;display:inline-block;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.markdown-body .octicon-link:before{content:"\\f05c"}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item+.task-list-item{margin-top:3px}.markdown-body .task-list-item input{float:left;margin:.3em 0 .25em -1.6em;vertical-align:middle}',""]),o.exports=t},310:function(o,t,n){"use strict";var e=n(301);n.n(e).a},311:function(o,t,n){(t=n(23)(!1)).push([o.i,".hover-underline[data-v-e786ce7c]:link,.hover-underline[data-v-e786ce7c]:visited{text-decoration:none;font-size:1.1em!important}.hover-underline[data-v-e786ce7c]:active,.hover-underline[data-v-e786ce7c]:hover{text-decoration:underline}",""]),o.exports=t},312:function(o,t,n){"use strict";var e=n(302);n.n(e).a},313:function(o,t,n){(t=n(23)(!1)).push([o.i,".toc[data-v-26ce25a2]{list-style-type:none!important;margin:0;padding:1em 0 0;text-align:left;width:100%}.toc li[data-v-26ce25a2]{margin-bottom:8px;padding:0 24px 0 8px}.toc li a[data-v-26ce25a2]{text-decoration:none}.active-toc[data-v-26ce25a2]{color:#4c4c9d!important;caret-color:#4c4c9d!important;font-weight:700}",""]),o.exports=t},314:function(o,t,n){"use strict";var e=n(303);n.n(e).a},315:function(o,t,n){(t=n(23)(!1)).push([o.i,".v-application code{color:unset!important}.katex-display .accent,.math-inline .accent,.v-application code{background-color:unset!important}",""]),o.exports=t},316:function(o,t,n){"use strict";n.r(t);n(308);var e=n(304),r=n(305),d={components:{"prev-next":e.default,"table-of-contents":r.default},props:{page:{type:Object,default:function(){return null}},prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},head:function(){return{title:this.page.title,meta:[{hid:"description",name:"description",content:this.page.description},{hid:"og:description",name:"og:description",content:this.page.description}]}}},l=(n(314),n(46)),c=n(63),m=n.n(c),h=n(354),k=n(328),y=n(345),w=n(299),f=n(329),component=Object(l.a)(d,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("v-container",{staticClass:"pa-4"},[n("v-row",[n("v-col",{attrs:{md:o.page.toc.length?9:12,xs:12,sm:12}},[n("v-breadcrumbs",{staticClass:"pl-0",attrs:{items:o.page.nav}}),o._v(" "),n("div",{staticClass:"py-2 mb-3 d-md-none indigo lighten-5"},[n("table-of-contents",{attrs:{toc:o.page.toc}})],1),o._v(" "),n("div",{staticClass:"markdown-body my-2"},[n("h1",[o._v(o._s(o.page.title))]),o._v(" "),n("nuxt-content",{attrs:{document:o.page}})],1),o._v(" "),o.prev||o.next?n("prev-next",{attrs:{prev:o.prev,next:o.next}}):o._e()],1),o._v(" "),o.page.toc.length?n("v-col",{staticClass:"d-none d-md-block",attrs:{cols:3}},[n("v-navigation-drawer",{staticClass:"pt-16 mt-2",attrs:{right:"",fixed:"",clipped:"",permanent:""}},[n("table-of-contents",{attrs:{toc:o.page.toc}})],1)],1):o._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{TableOfContents:n(305).default,PrevNext:n(304).default}),m()(component,{VBreadcrumbs:h.a,VCol:k.a,VContainer:y.a,VNavigationDrawer:w.a,VRow:f.a})},351:function(o,t,n){"use strict";n.r(t);var e=n(307),r={asyncData:function(o){return Object(e.a)(o,"realtime-dashboard")}},d=n(46),component=Object(d.a)(r,(function(){var o=this.$createElement;return(this._self._c||o)("content-renderer",{attrs:{page:this.page,prev:this.prev,next:this.next}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContentRenderer:n(316).default})}}]);