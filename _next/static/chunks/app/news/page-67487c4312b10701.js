(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[324],{1944:(e,a,t)=>{Promise.resolve().then(t.bind(t,7299))},5565:(e,a,t)=>{"use strict";t.d(a,{default:()=>n.a});var i=t(4146),n=t.n(i)},4146:(e,a,t)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),function(e,a){for(var t in a)Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}(a,{default:function(){return l},getImageProps:function(){return o}});let i=t(306),n=t(666),r=t(7970),s=i._(t(5514));function o(e){let{props:a}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/kspss/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,t]of Object.entries(a))void 0===t&&delete a[e];return{props:a}}let l=r.Image},7299:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>m});var i=t(5155);t(2115);var n=t(6179),r=t(5565),s=t(8173),o=t.n(s);let l=e=>{let{id:a,title:t,description:n,image:s,date:l,category:d}=e;return(0,i.jsx)(o(),{href:"/news/".concat(a),children:(0,i.jsxs)("div",{className:"card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300    hover:scale-[1.02] hover:-translate-y-1 backdrop-blur-sm bg-white/90",children:[(0,i.jsxs)("figure",{className:"relative h-48 overflow-hidden",children:[(0,i.jsx)(r.default,{src:s,alt:t,fill:!0,className:"object-cover transition-transform duration-300 hover:scale-110"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"})]}),(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,i.jsx)("span",{className:"badge badge-primary badge-outline font-medium",children:d}),(0,i.jsx)("span",{className:"text-sm text-gray-500 font-medium",children:l})]}),(0,i.jsx)("h2",{className:"card-title font-bold hover:text-primary transition-colors",children:t}),(0,i.jsx)("p",{className:"text-gray-600 line-clamp-2",children:n})]})]})})},d=e=>"/kspss/images".concat(e.replace("/images","")),c={news:[{id:"1",title:"New Environmental Initiative Launched",description:"A groundbreaking environmental project kicks off in Sentosa.",content:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",image:d("/images/bank.jpg"),date:"2024-01-15",category:"Environment"},{id:"2",title:"New Banking Regulations 2024",description:"Latest updates on banking regulations and their impact on financial services.",content:"",image:d("/images/bank.jpg"),date:"2024-01-15",category:"Regulations"},{id:"3",title:"Digital Banking Transformation",description:"How digital transformation is reshaping the banking industry.",content:"",image:d("/images/big-bank.jpg"),date:"2024-01-10",category:"Technology"},{id:"4",title:"Sustainable Finance Initiative",description:"New sustainable finance programs and their environmental impact.",content:"",image:d("/images/suitedman.jpg"),date:"2024-01-05",category:"Sustainability"}]},m=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.default,{}),(0,i.jsx)("div",{className:"min-h-screen bg-gradient-to-b from-base-200/50 to-transparent",children:(0,i.jsxs)("div",{className:"container mx-auto px-4 pt-24",children:[(0,i.jsxs)("div",{className:"text-center mb-12 motion-safe:animate-fade-up",children:[(0,i.jsx)("h1",{className:"text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",children:"Latest News"}),(0,i.jsx)("div",{className:"w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"})]}),(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16",children:c.news.map((e,a)=>(0,i.jsx)("div",{className:"motion-safe:animate-fade-up",style:{animationDelay:"".concat(.1*a,"s")},children:(0,i.jsx)(l,{...e})},e.id))})]})})]})},6179:(e,a,t)=>{"use strict";t.d(a,{default:()=>l});var i=t(5155),n=t(2115),r=t(8173),s=t.n(r),o=t(6658);let l=()=>{let e=(0,o.usePathname)(),[a,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,i.jsxs)("div",{className:"navbar fixed top-0 z-50 w-full transition-all duration-300 ".concat(a?"bg-gradient-to-r from-base-200/95 to-base-200/90 backdrop-blur-sm border-b border-base-300 shadow-lg":"bg-transparent"),children:[(0,i.jsx)("div",{className:"navbar-start"}),(0,i.jsx)("div",{className:"navbar-center",children:(0,i.jsx)("div",{role:"tablist",className:"tabs tabs-border gap-6",children:[{name:"Home",href:"/"},{name:"News",href:"/news"},{name:"Donate",href:"/donate"}].map(t=>(0,i.jsx)(s(),{href:t.href,role:"tab",className:"tab tab-bordered transition-all duration-300 hover:text-primary ".concat(a?"":"text-white hover:text-white/80"," ").concat(e===t.href?"tab-active font-medium border-primary":"hover:border-primary/50"),children:t.name},t.name))})}),(0,i.jsx)("div",{className:"navbar-end"})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[970,173,441,517,358],()=>a(1944)),_N_E=e.O()}]);