"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4116],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={},s="1.2 Disk\u6a21\u5f0f",c={unversionedId:"middleware-sources/aggregation-disk",id:"middleware-sources/aggregation-disk",title:"1.2 Disk\u6a21\u5f0f",description:"\u66f4\u52a0\u8be6\u7ec6\u7684\u5b9e\u6218demo\u8bf7\u53c2\u8003\u57fa\u4e8eDisk\u6a21\u5f0f\u805a\u5408OpenAPI",source:"@site/docs/middleware-sources/aggregation-disk.md",sourceDirName:"middleware-sources",slug:"/middleware-sources/aggregation-disk",permalink:"/docs/middleware-sources/aggregation-disk",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1672149817,formattedLastUpdatedAt:"2022\u5e7412\u670827\u65e5",frontMatter:{},sidebar:"middleware-sources",previous:{title:"1.1 \u4ecb\u7ecd",permalink:"/docs/middleware-sources/aggregation-introduction"},next:{title:"1.3 Cloud\u6a21\u5f0f",permalink:"/docs/middleware-sources/aggregation-cloud"}},u={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"12-disk\u6a21\u5f0f"},"1.2 Disk\u6a21\u5f0f"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u66f4\u52a0\u8be6\u7ec6\u7684\u5b9e\u6218demo\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/action/aggregation-disk",target:null,rel:null},"\u57fa\u4e8eDisk\u6a21\u5f0f\u805a\u5408OpenAPI"))),(0,o.kt)("p",null,"Disk\u6a21\u5f0f\u5373\u4ee3\u8868\u4f60\u62e5\u6709OpenAPI\u89c4\u8303\u7684\u9759\u6001JSON\u6587\u4ef6,\u90a3\u4e48\u53ef\u4ee5\u8003\u8651\u4f7f\u7528Knife4jAggregation\u7ec4\u4ef6\u8fdb\u884c\u805a\u5408\u5c55\u793a,\u76ee\u524d\u53ea\u652f\u6301JSON\u6587\u4ef6\u7684\u683c\u5f0f"),(0,o.kt)("p",null,"Disk\u6a21\u5f0f\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  enable-aggregation: true\n  disk:\n    enable: true\n    routes:\n      - name: \u7528\u6237\n        location: classpath:openapi/user.json\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.disk.enable"),":\u5c06\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3atrue\uff0c\u5219\u4ee3\u8868\u542f\u7528Disk\u6a21\u5f0f"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.disk.routes"),":\u9700\u8981\u805a\u5408\u7684\u670d\u52a1\u96c6\u5408\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.disk.routes.name"),":\u670d\u52a1\u540d\u79f0(\u663e\u793a\u540d\u79f0\uff0c\u6700\u7ec8\u5728Ui\u7684\u5de6\u4e0a\u89d2\u4e0b\u62c9\u6846\u8fdb\u884c\u663e\u793a)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"knife4j.disk.routes.location"),":\u672c\u5730Disk\u6a21\u5f0f\u805a\u5408\u7684OpenAPI\u89c4\u8303JSON\u6587\u4ef6,\u53ef\u4ee5\u662fV2\u4e5f\u53ef\u4ee5\u662fV3\u7248\u672c")))}m.isMDXComponent=!0}}]);