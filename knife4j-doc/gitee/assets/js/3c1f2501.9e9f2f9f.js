"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3051],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return r?t.createElement(f,i(i({ref:n},s),{},{components:r})):t.createElement(f,i({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44346:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>g});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={},l="Spring MVC\u4e0d\u663e\u793a\u63a5\u53e3\u6587\u6863",c={unversionedId:"faq/springmvc-notshow",id:"faq/springmvc-notshow",title:"Spring MVC\u4e0d\u663e\u793a\u63a5\u53e3\u6587\u6863",description:"\u5f88\u591a\u670b\u53cb\u5728\u4f7f\u7528Spring MVC\u65f6,\u4f1a\u78b0\u5230\u63a5\u53e3\u6587\u6863\u6ca1\u6709\u7684\u60c5\u51b5,\u5728\u6b64\u5904\u505a\u4e00\u4e2a\u8bf4\u660e",source:"@site/docs/faq/springmvc-notshow.md",sourceDirName:"faq",slug:"/faq/springmvc-notshow",permalink:"/docs/faq/springmvc-notshow",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u8096\u7389\u660e",lastUpdatedAt:1604638019,formattedLastUpdatedAt:"2020\u5e7411\u67086\u65e5",frontMatter:{},sidebar:"faq",previous:{title:"SpringMvc\u8bbf\u95ee\u9875\u9762404",permalink:"/docs/faq/springmvc-404"},next:{title:"Swagger\u5b57\u6bb5\u5c5e\u6027\u8bf4\u660e\u4e0d\u663e\u793a",permalink:"/docs/faq/swagger-des-not-found"}},s={},g=[],u={toc:g};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spring-mvc\u4e0d\u663e\u793a\u63a5\u53e3\u6587\u6863"},"Spring MVC\u4e0d\u663e\u793a\u63a5\u53e3\u6587\u6863"),(0,o.kt)("p",null,"\u5f88\u591a\u670b\u53cb\u5728\u4f7f\u7528Spring MVC\u65f6,\u4f1a\u78b0\u5230\u63a5\u53e3\u6587\u6863\u6ca1\u6709\u7684\u60c5\u51b5,\u5728\u6b64\u5904\u505a\u4e00\u4e2a\u8bf4\u660e"),(0,o.kt)("p",null,"1\u3001\u9996\u5148\u4fdd\u8bc1SwaggerConfig\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u6b63\u786e\u7684Docket\u5bf9\u8c61(\u5373\u9ed8\u8ba4\u626b\u63cf\u7684\u5305\u8def\u5f84\u6216\u8005\u57fa\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"@ApiOperation"),"\u6ce8\u89e3)"),(0,o.kt)("p",null,"2\u3001\u5176\u6b21,\u533a\u522b\u4e8eSpringBoot\u7684\u6ce8\u5165,\u4e0d\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"@Configuration"),"\u6ce8\u89e3\u6ce8\u5165\u5230Spring\u7684IOC\u5bb9\u5668\u4e2d,\u91c7\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"<bean>"),"XML\u6ce8\u5165\u7684\u65b9\u5f0f\u6ce8\u5165\u5230Spring\u7684\u5bb9\u5668\u4e2d,\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id="SwaggerConfig" class="com.xiaominfo.swagger.config.SwaggerConfiguration"></bean>\n')),(0,o.kt)("p",null,"3\u3001\u9700\u4fdd\u8bc1\u6ce8\u5165\u7684SwaggerConfig\u7684bean\u5728Spring\u7684MVC\u7684\u5bb9\u5668\u4e2d,\u56e0\u4e3aSpring MVC\u5b58\u5728\u7236\u5b50\u5bb9\u5668\u7684\u5173\u7cfb,\u5982\u679c\u4e0d\u5c06\u8be5Bean\u6ce8\u5165\u5230Spring MVC\u5bb9\u5668\u4e2d\u7684\u8bdd,Swagger\u5c31\u4f1a\u626b\u63cf\u4e0d\u5230Controller\u5c42\u7684\u63a5\u53e3\uff0c\u81ea\u7136\u4e5f\u5c31\u4e0d\u4f1a\u663e\u793a\u6587\u6863"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<servlet>\n    <servlet-name>swaggerDemoMvc</servlet-name>\n    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n    <init-param>\n      <param-name>contextConfigLocation</param-name>\n        \x3c!--\u5728\u7b2c\u4e8c\u6b65\u4e2d\u6ce8\u5165\u7684SwaggerConfig\u7684bean\u9700\u5199\u5728spring.xml\u6587\u4ef6\u4e2d--\x3e\n      <param-value>classpath:config/spring.xml</param-value>\n    </init-param>\n    <load-on-startup>1</load-on-startup>\n  </servlet>\n")))}m.isMDXComponent=!0}}]);