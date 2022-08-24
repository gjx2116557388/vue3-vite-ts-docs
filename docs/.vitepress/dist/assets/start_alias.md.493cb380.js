import{_ as s,c as a,o as n,d as p}from"./app.6f4bf460.js";const u=JSON.parse('{"title":"\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u522B\u540D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5982\u679C\u9879\u76EE\u662FTypeScript\u7F16\u5199\uFF0C\u8FD8\u9700\u8981\u4FEE\u6539\u4E00\u4E0BTypeScript\u7684\u914D\u7F6E\uFF1A","slug":"\u5982\u679C\u9879\u76EE\u662Ftypescript\u7F16\u5199\uFF0C\u8FD8\u9700\u8981\u4FEE\u6539\u4E00\u4E0Btypescript\u7684\u914D\u7F6E\uFF1A"},{"level":2,"title":"\u5982\u679C\u4F60\u662F\u521A\u521B\u5EFA\u7684TypeScript\u9879\u76EE\uFF0C\u6709\u53EF\u80FD\u4F1A\u9047\u5230\u627E\u4E0D\u5230\u6A21\u5757\u201Cpath\u201D\u6216\u5176\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E\u7684\u9519\u8BEF\u63D0\u793A\uFF0C\u5B89\u88C5@types/node\u5373\u53EF","slug":"\u5982\u679C\u4F60\u662F\u521A\u521B\u5EFA\u7684typescript\u9879\u76EE\uFF0C\u6709\u53EF\u80FD\u4F1A\u9047\u5230\u627E\u4E0D\u5230\u6A21\u5757\u201Cpath\u201D\u6216\u5176\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E\u7684\u9519\u8BEF\u63D0\u793A\uFF0C\u5B89\u88C5-types-node\u5373\u53EF"}],"relativePath":"start/alias.md"}'),e={name:"start/alias.md"},l=p(`<h1 id="\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u522B\u540D" tabindex="-1">\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u522B\u540D <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u522B\u540D" aria-hidden="true">#</a></h1><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">// \u4E3E\u5217</span></span>
<span class="line"><span style="color:#A6ACCD;">// vite.config.js/ts</span></span>
<span class="line"><span style="color:#A6ACCD;">import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { serve } from &#39;esbuild&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { join } from &#39;path&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [vue()],</span></span>
<span class="line"><span style="color:#A6ACCD;">  resolve: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    alias: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;@&#39;: join(__dirname, &quot;src&quot;),</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5982\u679C\u9879\u76EE\u662Ftypescript\u7F16\u5199\uFF0C\u8FD8\u9700\u8981\u4FEE\u6539\u4E00\u4E0Btypescript\u7684\u914D\u7F6E\uFF1A" tabindex="-1">\u5982\u679C\u9879\u76EE\u662FTypeScript\u7F16\u5199\uFF0C\u8FD8\u9700\u8981\u4FEE\u6539\u4E00\u4E0BTypeScript\u7684\u914D\u7F6E\uFF1A <a class="header-anchor" href="#\u5982\u679C\u9879\u76EE\u662Ftypescript\u7F16\u5199\uFF0C\u8FD8\u9700\u8981\u4FEE\u6539\u4E00\u4E0Btypescript\u7684\u914D\u7F6E\uFF1A" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...\u5176\u4ED6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;baseUrl&quot;: &quot;.&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;paths&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;@/*&quot;: [&quot;src/*&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5982\u679C\u4F60\u662F\u521A\u521B\u5EFA\u7684typescript\u9879\u76EE\uFF0C\u6709\u53EF\u80FD\u4F1A\u9047\u5230\u627E\u4E0D\u5230\u6A21\u5757\u201Cpath\u201D\u6216\u5176\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E\u7684\u9519\u8BEF\u63D0\u793A\uFF0C\u5B89\u88C5-types-node\u5373\u53EF" tabindex="-1">\u5982\u679C\u4F60\u662F\u521A\u521B\u5EFA\u7684TypeScript\u9879\u76EE\uFF0C\u6709\u53EF\u80FD\u4F1A\u9047\u5230\u627E\u4E0D\u5230\u6A21\u5757\u201Cpath\u201D\u6216\u5176\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E\u7684\u9519\u8BEF\u63D0\u793A\uFF0C\u5B89\u88C5@types/node\u5373\u53EF <a class="header-anchor" href="#\u5982\u679C\u4F60\u662F\u521A\u521B\u5EFA\u7684typescript\u9879\u76EE\uFF0C\u6709\u53EF\u80FD\u4F1A\u9047\u5230\u627E\u4E0D\u5230\u6A21\u5757\u201Cpath\u201D\u6216\u5176\u76F8\u5E94\u7684\u7C7B\u578B\u58F0\u660E\u7684\u9519\u8BEF\u63D0\u793A\uFF0C\u5B89\u88C5-types-node\u5373\u53EF" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install @types/node --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),t=[l];function o(c,i,r,C,A,y){return n(),a("div",null,t)}var D=s(e,[["render",o]]);export{u as __pageData,D as default};
