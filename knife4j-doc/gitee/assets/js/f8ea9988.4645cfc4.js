"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),d=a,m=g["".concat(p,".").concat(d)]||g[d]||s[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},75891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},p="1.1 \u4ecb\u7ecd",u={unversionedId:"middleware-sources/aggregation-introduction",id:"middleware-sources/aggregation-introduction",title:"1.1 \u4ecb\u7ecd",description:"1\u3001Knife4jAggregation\u662f\u57fa\u4e8eServlet\u4f53\u7cfb\u7684Filter\u62e6\u622a\u6280\u672f\u5b9e\u73b0\u7684\u805a\u5408\u4e0eHTTP\u8bf7\u6c42\u8f6c\u53d1\u670d\u52a1,\u65e2\u80fd\u9884\u89c8\u4e5f\u80fd\u72ec\u7acb\u8c03\u8bd5",source:"@site/docs/middleware-sources/aggregation-introduction.md",sourceDirName:"middleware-sources",slug:"/middleware-sources/aggregation-introduction",permalink:"/docs/middleware-sources/aggregation-introduction",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1672149817,formattedLastUpdatedAt:"2022\u5e7412\u670827\u65e5",frontMatter:{},sidebar:"middleware-sources",previous:{title:"\u4e2d\u95f4\u4ef6\u4ecb\u7ecd",permalink:"/docs/middleware-sources/"},next:{title:"1.1 \u4ecb\u7ecd",permalink:"/docs/middleware-sources/aggregation-introduction"}},c={},s=[],g={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"11-\u4ecb\u7ecd"},"1.1 \u4ecb\u7ecd"),(0,o.kt)("admonition",{title:"\u6e29\u99a8\u63d0\u793a",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"1\u3001Knife4jAggregation\u662f\u57fa\u4e8eServlet\u4f53\u7cfb\u7684Filter\u62e6\u622a\u6280\u672f\u5b9e\u73b0\u7684\u805a\u5408\u4e0eHTTP\u8bf7\u6c42\u8f6c\u53d1\u670d\u52a1,\u65e2\u80fd\u9884\u89c8\u4e5f\u80fd\u72ec\u7acb\u8c03\u8bd5"),(0,o.kt)("p",{parentName:"admonition"},"2\u3001\u4e0d\u80fd\u548cSpring Cloud Gateway\u6df7\u5408\u4f7f\u7528(\u56e0\u4e3aGateway\u5e95\u5c42\u662f\u57fa\u4e8eNetty\u6784\u5efa\u7684)"),(0,o.kt)("p",{parentName:"admonition"},"3\u3001Knife4jAggregation\u662f\u7ed9Spring Boot\u7684web\u7cfb\u7edf\u8d4b\u80fd,\u62e5\u6709\u805a\u5408OpenAPI\u6587\u6863\u7684\u80fd\u529b")),(0,o.kt)("p",null,"Knife4j\u4e00\u76f4\u81f4\u529b\u4e8e\u5c06\u76ee\u524d\u7684Ui\u63d0\u4f9b\u7ed9\u66f4\u591a\u7684\u5e73\u53f0\u6216\u8005\u522b\u7684\u8bed\u8a00\u4f7f\u7528\u800c\u52aa\u529b\uff0c\u7ecf\u8fc7\u8fd9\u4e48\u957f\u65f6\u95f4\u7684\u53d1\u5c55\uff0cKnife4j\u63d0\u4f9b\u7684\u8f7b\u91cf\u7ea7\u805a\u5408\u4e2d\u95f4\u4ef6\u7ec8\u4e8e\u8bde\u751f\u4e86\uff0c\u81ea",(0,o.kt)("inlineCode",{parentName:"p"},"2.0.8"),"\u7248\u672c\u5f00\u59cb\uff0cKnife4j\n\u63d0\u4f9b\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"knife4j-aggregation-spring-boot-starter"),"\u7ec4\u4ef6\uff0c\u8be5\u7ec4\u4ef6\u662f\u4e00\u4e2a\u57fa\u4e8eSpring Boot\u7cfb\u7edf\u7684starter\uff0c\u4ed6\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u51e0\u79cd\u80fd\u529b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6700\u8f7b\u91cf\u7ea7\u3001\u6700\u7b80\u5355\u3001\u6700\u65b9\u4fbf\u7684\u805a\u5408OpenApi\u89c4\u8303\u7684\u4e2d\u95f4\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u8ba9\u6240\u6709\u7684\u57fa\u4e8eSpring Boot\u7684Web\u4f53\u7cfb\u62e5\u6709\u4e86\u8f7b\u677e\u805a\u5408OpenApi\u7684\u80fd\u529b"),(0,o.kt)("li",{parentName:"ul"},"\u63d0\u4f9b4\u79cd\u6a21\u5f0f\u4f9b\u5f00\u53d1\u8005\u9009\u62e9",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u672c\u5730\u9759\u6001JSON\u6587\u4ef6\u7684\u65b9\u5f0f\u805a\u5408OpenAPI"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4e91\u7aefHTTP\u63a5\u53e3\u7684\u65b9\u5f0f\u805a\u5408"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8eEureka\u6ce8\u518c\u4e2d\u5fc3\u7684\u65b9\u5f0f\u805a\u5408"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8eNacos\u6ce8\u518c\u4e2d\u5fc3\u7684\u65b9\u5f0f\u805a\u5408"))),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u8be5starter\u53d1\u5e03\u4e86Docker\u955c\u50cf\uff0c\u8de8\u5e73\u53f0\u4e0e\u8bed\u8a00\u8ba9\u5f00\u53d1\u8005\u57fa\u4e8e\u6b64Docker\u955c\u50cf\u8f7b\u677e\u8fdb\u884c\u805a\u5408OpenAPI\u89c4\u8303 "),(0,o.kt)("li",{parentName:"ul"},"\u5b8c\u7f8e\u517c\u5bb9\u6240\u6709Spring Boot\u7248\u672c\uff0c\u6ca1\u6709\u517c\u5bb9\u6027\u95ee\u9898"),(0,o.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u5f7b\u5e95\u653e\u5f03\u57fa\u4e8eZuul\u3001Spring Cloud Gateway\u7b49\u590d\u6742\u7684\u805a\u5408\u65b9\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u517c\u5bb9OpenAPI2\u89c4\u8303\u4ee5\u53caOpenAPI3\u89c4\u8303")),(0,o.kt)("p",null,"\u57fa\u4e8eSpring Boot\u5f15\u5165\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n    <groupId>com.github.xiaoymin</groupId>\n    <artifactId>knife4j-aggregation-spring-boot-starter</artifactId>\n    \x3c!--\u5728\u5f15\u7528\u65f6\u8bf7\u5728maven\u4e2d\u592e\u4ed3\u5e93\u641c\u7d22aggregation\u6700\u65b0\u7248\u672c\u53f7--\x3e\n    <version>4.0.0</version>\n</dependency>\n")),(0,o.kt)("p",null,"\u76ee\u524dKnife4jAggregation\u4e3b\u8981\u63d0\u4f9b\u4e86\u56db\u79cd\u65b9\u5f0f\u8fdb\u884cOpenAPI\u6587\u6863\u7684\u805a\u5408\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8eOpenAPI\u7684\u9759\u6001JSON\u6587\u4ef6\u65b9\u5f0f,",(0,o.kt)("a",{parentName:"li",href:"aggregation-disk",target:null,rel:null},"Disk\u6a21\u5f0f")),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8eHTTP\u63a5\u53e3\u7684\u65b9\u5f0f\u83b7\u53d6OpenAPI,",(0,o.kt)("a",{parentName:"li",href:"aggregation-cloud",target:null,rel:null},"Cloud\u6a21\u5f0f")),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8eEureka\u6ce8\u518c\u4e2d\u5fc3\u83b7\u53d6OpenAPI,",(0,o.kt)("a",{parentName:"li",href:"aggregation-eureka",target:null,rel:null},"Eureka\u6a21\u5f0f")),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8eNacos\u6ce8\u518c\u4e2d\u5fc3\u83b7\u53d6OpenAPI,",(0,o.kt)("a",{parentName:"li",href:"aggregation-nacos",target:null,rel:null},"Nacos\u6a21\u5f0f"))),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Disk\u3001Cloud\u3001Eureka\u3001Nacos\u8fd9\u56db\u79cd\u6a21\u5f0f\u53ea\u80fd\u4f7f\u7528\u5176\u4e2d1\u79cd\uff0c\u4e0d\u80fd\u6df7\u5408\u4e00\u8d77\u4f7f\u7528(\u5373\u53ea\u80fd\u914d\u7f6e\u8fd94\u4e2d\u6a21\u5f0f\u4e2d\u7684\u4e00\u79cd\u5c5e\u6027\uff0c\u7136\u540e\u5c06\u5176",(0,o.kt)("inlineCode",{parentName:"p"},"enable"),"\u5c5e\u6027\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"true"),",\u5176\u4ed6\u4e09\u79cd\u7684enable\u5219\u5fc5\u987b\u8bbe\u7f6e\u4e3afalse)"),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6709\u6df7\u5408\u4f7f\u7528\u7684\u9700\u6c42,\u4f60\u5e94\u8be5\u8003\u8651",(0,o.kt)("a",{parentName:"p",href:"desktop-introduction",target:null,rel:null},"Knife4jAggregationDesktop"))),(0,o.kt)("p",null,"\u5728Spring Boot\u6846\u67b6\u4e2d\uff0c\u4f7f\u7528Knife4jAggregation\u7ec4\u4ef6\uff0c\u9700\u8981\u5728yml\u6216\u8005properties\u914d\u7f6e\u6587\u4ef6\u4e2d\u8fdb\u884c\u76f8\u5173\u7684\u914d\u7f6e\uff0c\u5b8c\u6574\u7684\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  enable-aggregation: true\n  cloud:\n    enable: true\n    routes:\n      - name: \u7528\u6237\u4f53\u7cfb\n        uri: 192.168.0.152:8999\n        location: /v2/api-docs?group=2.X\u7248\u672c\n  eureka:\n    enable: false\n    service-url: http://localhost:10000/eureka/\n    routes:\n      - name: \u8ba2\u5355\u670d\u52a1\n        service-name: service-order\n        location: /v2/api-docs?group=default\n  nacos:\n    enable: false\n    service-url: http://localhost:8848/nacos/\n    routes:\n      - name: \u8ba2\u5355\u670d\u52a1\n        service-name: service-order\n        location: /v2/api-docs?group=default\n  disk:\n    enable: false\n    routes:\n      - name: \u7528\u6237\n        location: classpath:openapi/user.json\n")))}d.isMDXComponent=!0}}]);