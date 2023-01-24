"use strict";(self.webpackChunkpaymenterdocs=self.webpackChunkpaymenterdocs||[]).push([[704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,b=s["".concat(l,".").concat(u)]||s[u]||c[u]||p;return n?a.createElement(b,o(o({ref:t},h),{},{components:n})):a.createElement(b,o({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<p;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const p={},o="A theme",i={unversionedId:"how-to/create-a-thing/create-a-theme",id:"how-to/create-a-thing/create-a-theme",title:"A theme",description:"Creating a theme is really easy. We will show you how to create a theme in this guide.",source:"@site/docs/how-to/create-a-thing/create-a-theme.md",sourceDirName:"how-to/create-a-thing",slug:"/how-to/create-a-thing/create-a-theme",permalink:"/docs/how-to/create-a-thing/create-a-theme",draft:!1,editUrl:"https://github.com/Paymenter/docs/edit/main/docs/how-to/create-a-thing/create-a-theme.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"A extension (WIP)",permalink:"/docs/how-to/create-a-thing/create-a-extensions"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a theme",id:"create-a-theme",level:2},{value:"Step 1: Create a new folder",id:"step-1-create-a-new-folder",level:3},{value:"Step 2: Edit the files you want to edit",id:"step-2-edit-the-files-you-want-to-edit",level:3},{value:"Folder structure",id:"folder-structure",level:2}],h={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a-theme"},"A theme"),(0,r.kt)("p",null,"Creating a theme is really easy. We will show you how to create a theme in this guide."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A working Paymenter installation"),(0,r.kt)("li",{parentName:"ul"},"Knowledge of HTML, CSS ")),(0,r.kt)("h2",{id:"create-a-theme"},"Create a theme"),(0,r.kt)("h3",{id:"step-1-create-a-new-folder"},"Step 1: Create a new folder"),(0,r.kt)("p",null,"Create a new folder in the ",(0,r.kt)("inlineCode",{parentName:"p"},"themes")," folder. The name of the folder will be the name of your theme."),(0,r.kt)("h3",{id:"step-2-edit-the-files-you-want-to-edit"},"Step 2: Edit the files you want to edit"),(0,r.kt)("p",null,"Check below for the folder structure of a theme."),(0,r.kt)("h2",{id:"folder-structure"},"Folder structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"themes\n\u2514\u2500\u2500\u2500my-theme\n    \u2502\n    \u2514\u2500\u2500\u2500views\n        \u251c\u2500\u2500 welcome.blade.php\n        \u251c\u2500\u2500 product.blade.php \n        \u251c\u2500\u2500 layouts\n        \u2502    \u251c\u2500\u2500 app.blade.php \n        \u2502    \u251c\u2500\u2500 navigation.blade.php\n        \u2502    \u251c\u2500\u2500 sidenavigation.blade.php\n        \u2502    \u251c\u2500\u2500 guest.blade.php \n        \u2502    \u251c\u2500\u2500 admin.blade.php\n        \u2502    \u251c\u2500\u2500 adminnavigation.blade.php\n        \u2502    \u2514\u2500\u2500 adminsideavigation.blade.php \n        \u251c\u2500\u2500 components\n        \u2502    \u251c\u2500\u2500 success.blade.php\n        \u2502    \u251c\u2500\u2500 sidebar-navigation-item.blade.php\n        \u2502    \u251c\u2500\u2500 application-logo.blade.php\n        \u2502    \u2514\u2500\u2500 auth-validation-errors.blade.php\n        \u251c\u2500\u2500 clients \n        \u2502    \u251c\u2500\u2500 home.blade.php\n        \u2502    \u251c\u2500\u2500 profile.blade.php\n        \u2502    \u251c\u2500\u2500 tickets\n        \u2502    \u2502    \u251c\u2500\u2500 index.blade.php\n        \u2502    \u2502    \u251c\u2500\u2500 create.blade.php\n        \u2502    \u2502    \u2514\u2500\u2500 show.blade.php\n        \u2502    \u251c\u2500\u2500 invoice\n        \u2502    \u2502    \u2514\u2500\u2500 show.blade.php\n        \u2502    \u2514\u2500\u2500 products\n        \u2502         \u2514\u2500\u2500 view.blade.php\n        \u251c\u2500\u2500 checkout\n        \u2502    \u251c\u2500\u2500 index.blade.php\n        \u2502    \u2514\u2500\u2500 config.blade.php\n        \u251c\u2500\u2500 admin\n        \u2502    \u251c\u2500\u2500 index.blade.php\n        \u2502    \u251c\u2500\u2500 products\n        \u2502    \u2502    \u251c\u2500\u2500 index.blade.php\n        \u2502    \u2502    \u251c\u2500\u2500 create.blade.php\n        \u2502    \u2502    \u251c\u2500\u2500 edit.blade.php\n        \u2502    \u2502    \u2514\u2500\u2500 extension.blade.php\n        \u2502    \u251c\u2500\u2500 clients\n        \u2502    \u2502    \u251c\u2500\u2500 index.blade.php\n        \u2502    \u2502    \u251c\u2500\u2500 create.blade.php\n        \u2502    \u2502    \u2514\u2500\u2500 edit.blade.php\n        \u2502    \u251c\u2500\u2500 tickets\n        \u2502    \u2502    \u251c\u2500\u2500 index.blade.php\n        \u2502    \u2502    \u251c\u2500\u2500 create.blade.php\n        \u2502    \u2502    \u2514\u2500\u2500 show.blade.php\n        \u2502    \u251c\u2500\u2500 orders\n        \u2502    \u2502    \u2514\u2500\u2500 index.blade.php\n        \u2502    \u251c\u2500\u2500 extensions\n        \u2502    \u2502    \u251c\u2500\u2500 index.blade.php\n        \u2502    \u2502    \u2514\u2500\u2500 edit.blade.php\n        \u2502    \u251c\u2500\u2500 settings\n        \u2502    \u2502    \u251c\u2500\u2500 index.blade.php\n        \u2502    \u2502    \u2514\u2500\u2500 settings\n        \u2502    \u2502         \u251c\u2500\u2500 general.blade.php\n        \u2502    \u2502         \u251c\u2500\u2500 login.blade.php\n        \u2502    \u2502         \u251c\u2500\u2500 security.blade.php\n        \u2502    \u2502         \u2514\u2500\u2500 mail.blade.php\n        \u2502    \u2514\u2500\u2500 categories\n        \u2502         \u251c\u2500\u2500 index.blade.php\n        \u2502         \u251c\u2500\u2500 create.blade.php\n        \u2502         \u2514\u2500\u2500 edit.blade.php\n        \u2514\u2500\u2500 auth\n             \u251c\u2500\u2500 login.blade.php\n             \u251c\u2500\u2500 register.blade.php\n             \u251c\u2500\u2500 verify-email.blade.php\n             \u2514\u2500\u2500 passwords\n                  \u251c\u2500\u2500 change-password.blade.php\n                  \u251c\u2500\u2500 confirm.blade.php\n                  \u251c\u2500\u2500 forgot.blade.php\n                  \u2514\u2500\u2500 reset.blade.php\n\n")))}c.isMDXComponent=!0}}]);