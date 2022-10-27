import{_ as s,c as a,o as n,d as l}from"./app.601079c5.js";const y=JSON.parse('{"title":"fs\u6A21\u5757","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5BFC\u5165fs\u6A21\u5757","slug":"\u5BFC\u5165fs\u6A21\u5757","link":"#\u5BFC\u5165fs\u6A21\u5757","children":[]},{"level":2,"title":"\u8BFB\u53D6\u6587\u4EF6  fs.readFile","slug":"\u8BFB\u53D6\u6587\u4EF6-fs-readfile","link":"#\u8BFB\u53D6\u6587\u4EF6-fs-readfile","children":[]},{"level":2,"title":"\u5199\u5165\u6587\u4EF6  fs.writeFile","slug":"\u5199\u5165\u6587\u4EF6-fs-writefile","link":"#\u5199\u5165\u6587\u4EF6-fs-writefile","children":[]},{"level":2,"title":"\u83B7\u53D6\u6587\u4EF6\u5927\u5C0F\uFF08\u4E0D\u5E38\u7528\uFF09  fs.stat","slug":"\u83B7\u53D6\u6587\u4EF6\u5927\u5C0F\uFF08\u4E0D\u5E38\u7528\uFF09-fs-stat","link":"#\u83B7\u53D6\u6587\u4EF6\u5927\u5C0F\uFF08\u4E0D\u5E38\u7528\uFF09-fs-stat","children":[]}],"relativePath":"nodeJs/fs.md"}'),e={name:"nodeJs/fs.md"},p=l(`<h1 id="fs\u6A21\u5757" tabindex="-1">fs\u6A21\u5757 <a class="header-anchor" href="#fs\u6A21\u5757" aria-hidden="true">#</a></h1><h2 id="\u5BFC\u5165fs\u6A21\u5757" tabindex="-1">\u5BFC\u5165fs\u6A21\u5757 <a class="header-anchor" href="#\u5BFC\u5165fs\u6A21\u5757" aria-hidden="true">#</a></h2><blockquote><p>Node.js\u5185\u7F6E\u7684fs\u6A21\u5757\u5C31\u662F\u6587\u4EF6\u7CFB\u7EDF\u6A21\u5757\uFF0C\u8D1F\u8D23\u8BFB\u5199\u6587\u4EF6 \u8DEF\u5F84\u63A8\u8350\u4F7F\u7528<code>path.join(__dirname,&quot;./src&quot;,&quot;./index.html&quot;)</code>\u8FD9\u6837\u7684\u5199\u6CD5</p></blockquote><h2 id="\u8BFB\u53D6\u6587\u4EF6-fs-readfile" tabindex="-1">\u8BFB\u53D6\u6587\u4EF6 fs.readFile <a class="header-anchor" href="#\u8BFB\u53D6\u6587\u4EF6-fs-readfile" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const fs  = require(&quot;fs&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">// fs\u8BFB\u53D6\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">fs.readFile(&quot;\u8DEF\u5F84&quot;,&quot;\u7F16\u7801\u683C\u5F0F&quot;,(err,data)=&gt;{\u56DE\u8C03\u51FD\u6570})</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u63A8\u8350\u5199\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">fs.readFile(__dirname+&quot;./xxx.txt&quot;,&quot;utf-8&quot;,(err,data)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(err){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return console.log(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(data) //\u6570\u636E\u5C31\u5728data\u91CC\u9762</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>\u5F53\u8BFB\u53D6\u4E8C\u8FDB\u5236\u6587\u4EF6\u65F6\uFF0C\u4E0D\u4F20\u5165\u6587\u4EF6\u7F16\u7801\u65F6\uFF0C\u56DE\u8C03\u51FD\u6570\u7684data\u53C2\u6570\u5C06\u8FD4\u56DE\u4E00\u4E2ABuffer\u5BF9\u8C61\u3002\u5728Node.js\u4E2D\uFF0CBuffer\u5BF9\u8C61\u5C31\u662F\u4E00\u4E2A\u5305\u542B\u96F6\u4E2A\u6216\u4EFB\u610F\u4E2A\u5B57\u8282\u7684\u6570\u7EC4\uFF08\u6CE8\u610F\u548CArray\u4E0D\u540C\uFF09\u3002 Buffer\u5BF9\u8C61\u53EF\u4EE5\u548CString\u4F5C\u8F6C\u6362\uFF0C\u4F8B\u5982\uFF0C\u628A\u4E00\u4E2ABuffer\u5BF9\u8C61\u8F6C\u6362\u6210String\uFF1A</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">fs.readFile(&#39;sample.png&#39;, function (err, data) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return console.log(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(data.length + &#39; bytes&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let txt = data.toString(&#39;utf-8&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(text);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5199\u5165\u6587\u4EF6-fs-writefile" tabindex="-1">\u5199\u5165\u6587\u4EF6 fs.writeFile <a class="header-anchor" href="#\u5199\u5165\u6587\u4EF6-fs-writefile" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const fs  = require(&quot;fs&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">let data = &#39;\u6211\u662F\u5927\u5E05\u903C&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">fs.writeFile(&#39;./index.html&#39;, data, err =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(err){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return console.log(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;\u5199\u5165\u6210\u529F&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">});</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u83B7\u53D6\u6587\u4EF6\u5927\u5C0F\uFF08\u4E0D\u5E38\u7528\uFF09-fs-stat" tabindex="-1">\u83B7\u53D6\u6587\u4EF6\u5927\u5C0F\uFF08\u4E0D\u5E38\u7528\uFF09 fs.stat <a class="header-anchor" href="#\u83B7\u53D6\u6587\u4EF6\u5927\u5C0F\uFF08\u4E0D\u5E38\u7528\uFF09-fs-stat" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">const fs  = require(&quot;fs&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">fs.stat(&#39;./indedx.html&#39;,(err,data)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(err){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return console.log(err)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u662F\u5426\u662F\u6587\u4EF6:</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;isFile: &#39; + stat.isFile())</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u662F\u5426\u662F\u76EE\u5F55:</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;isDirectory: &#39; + stat.isDirectory())</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (stat.isFile()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u6587\u4EF6\u5927\u5C0F:</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;size: &#39; + stat.size);</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u521B\u5EFA\u65F6\u95F4, Date\u5BF9\u8C61:</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;birth time: &#39; + stat.birthtime);</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u4FEE\u6539\u65F6\u95F4, Date\u5BF9\u8C61:</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;modified time: &#39; + stat.mtime);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,11),o=[p];function t(c,r,i,C,A,d){return n(),a("div",null,o)}const u=s(e,[["render",t]]);export{y as __pageData,u as default};
