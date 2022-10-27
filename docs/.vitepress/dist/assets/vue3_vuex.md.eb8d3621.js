import{_ as s,c as a,o as n,d as e}from"./app.601079c5.js";const y=JSON.parse('{"title":"Vuex\u7684\u914D\u7F6E\u53CA\u4F7F\u7528\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6EVueX","slug":"\u914D\u7F6Evuex","link":"#\u914D\u7F6Evuex","children":[]},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528","link":"#\u4F7F\u7528","children":[]}],"relativePath":"vue3/vuex.md"}'),l={name:"vue3/vuex.md"},p=e(`<h1 id="vuex\u7684\u914D\u7F6E\u53CA\u4F7F\u7528\u65B9\u6CD5" tabindex="-1">Vuex\u7684\u914D\u7F6E\u53CA\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#vuex\u7684\u914D\u7F6E\u53CA\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u914D\u7F6Evuex" tabindex="-1">\u914D\u7F6EVueX <a class="header-anchor" href="#\u914D\u7F6Evuex" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn add vuex@4.*</span></span>
<span class="line"><span style="color:#A6ACCD;">//npm</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -save vuex@4.*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>\u521B\u5EFAstore.ts\u5E76\u4E14\u914D\u7F6E</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">//store.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">import {createStore} from &#39;vuex&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default createStore({</span></span>
<span class="line"><span style="color:#A6ACCD;">    state: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    mutations: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    actions: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    modules: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;./style.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import createStore from &#39;./vuex/store&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(createStore)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u5F00\u53D1\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),o=[p];function t(c,r,i,A,C,d){return n(),a("div",null,o)}const D=s(l,[["render",t]]);export{y as __pageData,D as default};
