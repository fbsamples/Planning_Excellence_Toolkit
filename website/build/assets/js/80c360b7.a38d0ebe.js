"use strict";(self.webpackChunkopti_mate=self.webpackChunkopti_mate||[]).push([[402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(g,s(s({ref:t},l),{},{components:n})):a.createElement(g,s({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},s="Use cases",o={unversionedId:"GettingStarted/Usage",id:"GettingStarted/Usage",title:"Use cases",description:"The following steps will guide you through the whole process so you can start using OptiMate from the scratch.",source:"@site/docs/GettingStarted/Usage.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/Usage",permalink:"/OptiMate/docs/GettingStarted/Usage",draft:!1,editUrl:"https://github.com/fbsamples/OptiMate/docs/GettingStarted/Usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/OptiMate/docs/GettingStarted/Prerequisites"},next:{title:"Main input Parameters",permalink:"/OptiMate/docs/GettingStarted/Input parameters"}},d={},c=[{value:"Branding campaigns",id:"branding-campaigns",level:3},{value:"Anticipating trade-offs between campaign parameters (Module 1, 2, 4, 5, 6)",id:"anticipating-trade-offs-between-campaign-parameters-module-1-2-4-5-6",level:3},{value:"Interest based audiences (Module 3)",id:"interest-based-audiences-module-3",level:3},{value:"Identify possible budget errors (Module 7)",id:"identify-possible-budget-errors-module-7",level:3},{value:"Upper-mid funnel obejctives (Module 8)",id:"upper-mid-funnel-obejctives-module-8",level:3},{value:"In Stream video campaigns (Module 9)",id:"in-stream-video-campaigns-module-9",level:3}],l={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,"The following steps will guide you through the whole process so you can start using OptiMate from the scratch."),(0,i.kt)("p",null,"OptiMate is a set of different codes/modules that aims to reproduce manual processes when planning and executing branding campaigns at Meta, so you can make it in a more automated way, driving efficiencies and identifying scenarios where you could improve results."),(0,i.kt)("h3",{id:"branding-campaigns"},"Branding campaigns"),(0,i.kt)("p",null,"OptiMate relies on the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://www.facebook.com/business/help/885674161555708?id=842420845959022"},"Meta Reach & Frequency buying type")),", which only considers the following campaign objectives: Reach, Brand Awareness, Engagement, Traffic and Video views that are commonly used for branding campaigns. Auction objectives are not considered in OptiMate nor Reach & Frequency predictions."),(0,i.kt)("h3",{id:"anticipating-trade-offs-between-campaign-parameters-module-1-2-4-5-6"},"Anticipating trade-offs between campaign parameters (Module 1, 2, 4, 5, 6)"),(0,i.kt)("p",null,"When running Reach & Frequency predictions different parameters drive different reach, frequency and CPM results even when using the same budget. These parameters are being tested in different modules: Objectives (Module 1), Audience (Module 2), Frequency caps (Module 4), Campaign duration (Module 5) and Module 6 (the most robust) tests all these parameters at once, generating hundreds of simulations by combining different parameters at different budget levels.\n",(0,i.kt)("img",{alt:"OptiMate Modules a",src:n(4891).Z,width:"6600",height:"3787"})),(0,i.kt)("h3",{id:"interest-based-audiences-module-3"},"Interest based audiences (Module 3)"),(0,i.kt)("p",null,"When implementing branding campaings it is common that we have different ad creatives for different audiences. When those audiences are built using interests or behaviors it's possible to identify a set of interests/behaviors that are building reach in the most efficient way so we don't need to add more interest or behaviors. As a reference, in most of the cases there is no need to use more than 10 interests to have great reach levels.\n",(0,i.kt)("img",{alt:"OptiMate Modules b",src:n(7098).Z,width:"6600",height:"3737"})),(0,i.kt)("h3",{id:"identify-possible-budget-errors-module-7"},"Identify possible budget errors (Module 7)"),(0,i.kt)("p",null,"This use case is not for planning campaigns but to track possible errors as soon as the campaign is being configured (no matter whether it is a Reach & Frequency or an Auction buying type). This module creates two dataframes, one for campaigns and one for adsets in order to identify budgets as outliers according to different confidence intervals.\n",(0,i.kt)("img",{alt:"OptiMate Modules c",src:n(2996).Z,width:"6600",height:"3737"})),(0,i.kt)("h3",{id:"upper-mid-funnel-obejctives-module-8"},"Upper-mid funnel obejctives (Module 8)"),(0,i.kt)("p",null,"When planning campaigns that will have a mix of upper (Reach, Brand Awareness) and mid funnel (Engagement, Traffic, Video views) objectives. This allows to identify the ideal mix of each objective to maximize reach/frequency or minimize CPMs.\n",(0,i.kt)("img",{alt:"OptiMate Modules d",src:n(482).Z,width:"1473",height:"708"})),(0,i.kt)("h3",{id:"in-stream-video-campaigns-module-9"},"In Stream video campaigns (Module 9)"),(0,i.kt)("p",null,"For those campaigns where the main ad is a video format and we are aiming to maximize the probability of completed views using a Video views objective and the single In-stream video placement.\n",(0,i.kt)("img",{alt:"OptiMate Modules e",src:n(9127).Z,width:"1437",height:"740"})))}p.isMDXComponent=!0},4891:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/OptiMate_Modules_a-459c1c214a5229da0e3d142869921988.png"},7098:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/OptiMate_Modules_b-1c79f88ad4804e0bafb3b88ba951291a.png"},2996:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/OptiMate_Modules_c-a753ad947066fc11c1c37f70c7bb3633.png"},482:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/OptiMate_Modules_d-2a86544d348dbede89d47b5c3435264a.png"},9127:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/OptiMate_Modules_e-035214668f4cc68950bc4b9fdc7cbf47.png"}}]);