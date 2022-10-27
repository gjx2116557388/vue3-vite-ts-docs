import{_ as s,c as n,o as a,d as p}from"./app.601079c5.js";const D=JSON.parse('{"title":"\u5F15\u5165Axios","description":"","frontmatter":{},"headers":[],"relativePath":"vue3/axios.md"}'),e={name:"vue3/axios.md"},l=p(`<h1 id="\u5F15\u5165axios" tabindex="-1">\u5F15\u5165Axios <a class="header-anchor" href="#\u5F15\u5165axios" aria-hidden="true">#</a></h1><p><code>npm i vue-axios</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">import VueAxios from &#39;vue-axios&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// baseUrl</span></span>
<span class="line"><span style="color:#A6ACCD;">const baseUrl = &#39;https://api.lovelilin.com/&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">axios.defaults.baseURL = baseUrl;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u8BF7\u6C42\u5934</span></span>
<span class="line"><span style="color:#A6ACCD;">axios.interceptors.request.use(</span></span>
<span class="line"><span style="color:#A6ACCD;">    config =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (localStorage.getItem(&quot;token&quot;) != null &amp;&amp;  localStorage.getItem(&quot;token&quot;) != &quot;&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u8BF7\u6C42\u5934\u7684 Authorization \u52A0\u4E0A token \u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">            config.headers.Authorization = localStorage.getItem(&quot;token&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }else {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;no token&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return config;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    error =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;error in request&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Promise.reject(error);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// \u5BFC\u5165vue\u5B9E\u4F8B\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(VueAxios,axios)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[l];function t(c,r,i,A,C,u){return a(),n("div",null,o)}const d=s(e,[["render",t]]);export{D as __pageData,d as default};
