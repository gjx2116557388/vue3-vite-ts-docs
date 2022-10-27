import{_ as s,c as n,o as a,d as l}from"./app.601079c5.js";const D=JSON.parse('{"title":"\u8DEF\u7531\u5B88\u536B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5168\u5C40\u524D\u7F6E\u8DEF\u7531\u5B88\u536B","slug":"\u5168\u5C40\u524D\u7F6E\u8DEF\u7531\u5B88\u536B","link":"#\u5168\u5C40\u524D\u7F6E\u8DEF\u7531\u5B88\u536B","children":[]},{"level":2,"title":"\u5168\u5C40\u89E3\u6790\u5B88\u536B","slug":"\u5168\u5C40\u89E3\u6790\u5B88\u536B","link":"#\u5168\u5C40\u89E3\u6790\u5B88\u536B","children":[]},{"level":2,"title":"\u5168\u5C40\u540E\u7F6E\u94A9\u5B50","slug":"\u5168\u5C40\u540E\u7F6E\u94A9\u5B50","link":"#\u5168\u5C40\u540E\u7F6E\u94A9\u5B50","children":[]},{"level":2,"title":"\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B","slug":"\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B","link":"#\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B","children":[]},{"level":2,"title":"\u7EC4\u4EF6\u5185\u7684\u5B88\u536B","slug":"\u7EC4\u4EF6\u5185\u7684\u5B88\u536B","link":"#\u7EC4\u4EF6\u5185\u7684\u5B88\u536B","children":[]}],"relativePath":"vue3/routerGuards.md"}'),e={name:"vue3/routerGuards.md"},p=l(`<h1 id="\u8DEF\u7531\u5B88\u536B" tabindex="-1">\u8DEF\u7531\u5B88\u536B <a class="header-anchor" href="#\u8DEF\u7531\u5B88\u536B" aria-hidden="true">#</a></h1><h2 id="\u5168\u5C40\u524D\u7F6E\u8DEF\u7531\u5B88\u536B" tabindex="-1">\u5168\u5C40\u524D\u7F6E\u8DEF\u7531\u5B88\u536B <a class="header-anchor" href="#\u5168\u5C40\u524D\u7F6E\u8DEF\u7531\u5B88\u536B" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// \u5168\u5C40\u524D\u7F6E\u8DEF\u7531\u5B88\u536B</span></span>
<span class="line"><span style="color:#A6ACCD;">  router.beforeEach((to, from, next) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (to.path === &quot;/login&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      next();</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">      const token = localStorage.getItem(&quot;token&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (token) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        next();</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // router.push({</span></span>
<span class="line"><span style="color:#A6ACCD;">        //   name: &quot;login&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        // });</span></span>
<span class="line"><span style="color:#A6ACCD;">        next({</span></span>
<span class="line"><span style="color:#A6ACCD;">          path:&quot;/login&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          query:{redirect: to.fullPath}</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5168\u5C40\u89E3\u6790\u5B88\u536B" tabindex="-1">\u5168\u5C40\u89E3\u6790\u5B88\u536B <a class="header-anchor" href="#\u5168\u5C40\u89E3\u6790\u5B88\u536B" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">router.beforeResolve(async to =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (to.meta.requiresCamera) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    try {</span></span>
<span class="line"><span style="color:#A6ACCD;">      await askForCameraPermission()</span></span>
<span class="line"><span style="color:#A6ACCD;">    } catch (error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (error instanceof NotAllowedError) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // ... \u5904\u7406\u9519\u8BEF\uFF0C\u7136\u540E\u53D6\u6D88\u5BFC\u822A</span></span>
<span class="line"><span style="color:#A6ACCD;">        return false</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u610F\u6599\u4E4B\u5916\u7684\u9519\u8BEF\uFF0C\u53D6\u6D88\u5BFC\u822A\u5E76\u628A\u9519\u8BEF\u4F20\u7ED9\u5168\u5C40\u5904\u7406\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">        throw error</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5168\u5C40\u540E\u7F6E\u94A9\u5B50" tabindex="-1">\u5168\u5C40\u540E\u7F6E\u94A9\u5B50 <a class="header-anchor" href="#\u5168\u5C40\u540E\u7F6E\u94A9\u5B50" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">router.afterEach((to, from) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  sendToAnalytics(to.fullPath)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">router.afterEach((to, from, failure) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (!failure) sendToAnalytics(to.fullPath)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B" tabindex="-1">\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B <a class="header-anchor" href="#\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const routes = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    path: &#39;/users/:id&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    component: UserDetails,</span></span>
<span class="line"><span style="color:#A6ACCD;">    beforeEnter: (to, from) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // reject the navigation</span></span>
<span class="line"><span style="color:#A6ACCD;">      return false</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7EC4\u4EF6\u5185\u7684\u5B88\u536B" tabindex="-1">\u7EC4\u4EF6\u5185\u7684\u5B88\u536B <a class="header-anchor" href="#\u7EC4\u4EF6\u5185\u7684\u5B88\u536B" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const UserDetails = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  template: \`...\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeRouteEnter(to, from) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5728\u6E32\u67D3\u8BE5\u7EC4\u4EF6\u7684\u5BF9\u5E94\u8DEF\u7531\u88AB\u9A8C\u8BC1\u524D\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0D\u80FD\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B \`this\` \uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u56E0\u4E3A\u5F53\u5B88\u536B\u6267\u884C\u65F6\uFF0C\u7EC4\u4EF6\u5B9E\u4F8B\u8FD8\u6CA1\u88AB\u521B\u5EFA\uFF01</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeRouteUpdate(to, from) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5728\u5F53\u524D\u8DEF\u7531\u6539\u53D8\uFF0C\u4F46\u662F\u8BE5\u7EC4\u4EF6\u88AB\u590D\u7528\u65F6\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E3E\u4F8B\u6765\u8BF4\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u5E26\u6709\u52A8\u6001\u53C2\u6570\u7684\u8DEF\u5F84 \`/users/:id\`\uFF0C\u5728 \`/users/1\` \u548C \`/users/2\` \u4E4B\u95F4\u8DF3\u8F6C\u7684\u65F6\u5019\uFF0C</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u7531\u4E8E\u4F1A\u6E32\u67D3\u540C\u6837\u7684 \`UserDetails\` \u7EC4\u4EF6\uFF0C\u56E0\u6B64\u7EC4\u4EF6\u5B9E\u4F8B\u4F1A\u88AB\u590D\u7528\u3002\u800C\u8FD9\u4E2A\u94A9\u5B50\u5C31\u4F1A\u5728\u8FD9\u4E2A\u60C5\u51B5\u4E0B\u88AB\u8C03\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u56E0\u4E3A\u5728\u8FD9\u79CD\u60C5\u51B5\u53D1\u751F\u7684\u65F6\u5019\uFF0C\u7EC4\u4EF6\u5DF2\u7ECF\u6302\u8F7D\u597D\u4E86\uFF0C\u5BFC\u822A\u5B88\u536B\u53EF\u4EE5\u8BBF\u95EE\u7EC4\u4EF6\u5B9E\u4F8B \`this\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  beforeRouteLeave(to, from) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5728\u5BFC\u822A\u79BB\u5F00\u6E32\u67D3\u8BE5\u7EC4\u4EF6\u7684\u5BF9\u5E94\u8DEF\u7531\u65F6\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u4E0E \`beforeRouteUpdate\` \u4E00\u6837\uFF0C\u5B83\u53EF\u4EE5\u8BBF\u95EE\u7EC4\u4EF6\u5B9E\u4F8B \`this\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),o=[p];function t(c,r,i,C,A,y){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{D as __pageData,u as default};
