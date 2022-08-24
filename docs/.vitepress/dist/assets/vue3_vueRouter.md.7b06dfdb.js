import{_ as s,c as a,o as n,d as e}from"./app.6f4bf460.js";const y=JSON.parse('{"title":"Vue3 \u914D\u7F6E\u8DEF\u7531","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u914D\u7F6ERouter","slug":"\u914D\u7F6Erouter"}],"relativePath":"vue3/vueRouter.md"}'),l={name:"vue3/vueRouter.md"},p=e(`<h1 id="vue3-\u914D\u7F6E\u8DEF\u7531" tabindex="-1">Vue3 \u914D\u7F6E\u8DEF\u7531 <a class="header-anchor" href="#vue3-\u914D\u7F6E\u8DEF\u7531" aria-hidden="true">#</a></h1><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><ol><li>npm</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install vue-router@4 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>yarn</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add vue-router@4 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u914D\u7F6Erouter" tabindex="-1">\u914D\u7F6ERouter <a class="header-anchor" href="#\u914D\u7F6Erouter" aria-hidden="true">#</a></h2><ol><li>\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939, \u540D\u5B57\u53EBrouter</li><li>\u521B\u5EFA\u4E00\u4E2Aindex.ts</li><li>\u914D\u7F6Erouter</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u4E3E\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">import {createRouter, createWebHistory, createWebHashHistory} from &#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { defineAsyncComponent } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const router = createRouter({ </span></span>
<span class="line"><span style="color:#A6ACCD;">  // history: createWebHashHistory(),  // hash \u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  history: createWebHistory(),  // history \u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  routes: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      path: &#39;/&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name: &#39;home&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      component: defineAsyncComponent(() =&gt; import(\`../components/HelloWorld.vue\`)),</span></span>
<span class="line"><span style="color:#A6ACCD;">      meta: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title: &#39;\u9996\u9875&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default router</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="4"><li>\u6302\u8F7D\u5230Vue\u4E0A\u53BB</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">//\u4E3E\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;./style.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">createApp(App).use(router).mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="5"><li>\u5C06\u8DEF\u7531\u7684\u63D2\u69FD\u653E\u5230\u9996\u9875</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;router-view/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,13),o=[p];function t(r,c,i,A,C,u){return n(),a("div",null,o)}var D=s(l,[["render",t]]);export{y as __pageData,D as default};
