"use strict";(self.webpackChunkpersonal_blog_template=self.webpackChunkpersonal_blog_template||[]).push([[6103],{324:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(7294),l=n(6010),r=n(9488),o=n(3702),i=n(9107),c=n(2506),s=n(8949),m=n(7462),d=n(7325),u=n(3672);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:l,date:o,tags:c,authors:s,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return a.createElement(r.d,{title:n,description:l,keywords:d,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var v=n(7086);function h(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:h}=d;return a.createElement(c.Z,{sidebar:t,toc:!u&&r.length>0?a.createElement(v.Z,{toc:r,minHeadingLevel:f,maxHeadingLevel:h}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function p(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(f,null),a.createElement(h,{sidebar:e.sidebar},a.createElement(t,null))))}},7086:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),o=n(2728);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(i.tableOfContents,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:c,linkActiveClassName:s})))}},2728:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),l=n(7294),r=n(107);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=l.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const v=(0,r.L)(),h=m??v.tableOfContents.minHeadingLevel,p=u??v.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:p});return d((0,l.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:h,maxHeadingLevel:p}}),[c,s,h,p])),l.createElement(g,(0,a.Z)({toc:E,className:n,linkClassName:c},f))}},8949:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7294),l=n(9107),r=n(1116),o=n(9861),i=n(9200),c=n(9962);function s(){const{colorMode:e}=(0,i.I)(),{siteConfig:{customFields:t}}=(0,c.Z)();return a.createElement(o.Z,{repo:t.GITHUB_REPO,repoId:t.GITHUB_REPO_ID,category:"General",categoryId:t.GITHUB_CATEGORY_ID,mapping:"title",term:"Discussion",strict:"1",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"vi",loading:"lazy",id:"giscus"})}var m=n(1048);const d={shareSocialMedia:"shareSocialMedia_GbU1",shareHeading:"shareHeading_NURz",shareButtons:"shareButtons_xgwB"};var u=n(6010),g=n(6573),f=n(5720),v=n(6616),h=n(3597),p=n(5341),E=n(1020),b=n(3945),L=n(7385),Z=n(7332),_=n(431),H=n(7325);function C(e){let{isBrowser:t,title:n,...l}=e;return a.createElement("div",{className:(0,u.Z)(d.shareSocialMedia)},a.createElement("h4",{className:(0,u.Z)(d.shareHeading)},a.createElement(H.Z,{id:"share.section.title"},"Share this page")),a.createElement("div",{className:(0,u.Z)(d.shareButtons)},a.createElement(g.Z,{url:t?window.location.href:"",quote:n},a.createElement(E.Z,{size:48,round:!0})),a.createElement(f.Z,{url:t?window.location.href:"",quote:n},a.createElement(b.Z,{size:48,round:!0})),a.createElement(v.Z,{url:t?window.location.href:"",title:n},a.createElement(L.Z,{size:48,round:!0})),a.createElement(h.Z,{url:t?window.location.href:"",title:n},a.createElement(Z.Z,{size:48,round:!0})),a.createElement(p.Z,{url:t?window.location.href:"",title:n},a.createElement(_.Z,{size:48,round:!0}))))}function N(e){const{metadata:t,isBlogPostPage:n}=(0,l.C)(),o=(0,m.Z)(),{frontMatter:i,slug:c,title:g}=t,{enableComments:f}=i;return a.createElement("div",{className:(0,u.Z)(d.main)},a.createElement(r.Z,e),f&&n&&a.createElement(a.Fragment,null,a.createElement(C,{isBrowser:o,title:g}),a.createElement(s,null)))}},8263:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const l={React:a,...a}}}]);