import{_ as s,c as n,o as a,d as l}from"./app.37b7e8eb.js";const d=JSON.parse('{"title":"Git 常用指令","description":"","frontmatter":{},"headers":[],"relativePath":"git/git常用指令.md"}'),p={name:"git/git常用指令.md"},o=l(`<h1 id="git-常用指令" tabindex="-1">Git 常用指令 <a class="header-anchor" href="#git-常用指令" aria-hidden="true">#</a></h1><blockquote><p>常用的不多 写习惯了就好 也可以用可视化的软件</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">git remote </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v   </span><span style="color:#676E95;font-style:italic;">//查看连接的远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">a  </span><span style="color:#676E95;font-style:italic;">//查看所有的本地和远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">r </span><span style="color:#676E95;font-style:italic;">//查看所有远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git </span><span style="color:#82AAFF;">checkout</span><span style="color:#A6ACCD;"> (分支名字)  </span><span style="color:#676E95;font-style:italic;">//切换分支名字</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;">d</span><span style="color:#A6ACCD;"> (分支名字) </span><span style="color:#676E95;font-style:italic;">//删除分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git merge   </span><span style="color:#676E95;font-style:italic;">//合并分支</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//提交代码</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//添加所有文件 </span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#89DDFF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//提交缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">提交</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//提交到远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">u origin main</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//取消关联远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote remove origin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//本地git仓库关联Github仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin git地址</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 把人家的代码库提交到自己的仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">rm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">r </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">git  </span><span style="color:#676E95;font-style:italic;">//删除项目里所有的git文件 然后一直回车就可以</span></span>
<span class="line"><span style="color:#A6ACCD;">git init   </span><span style="color:#676E95;font-style:italic;">//初始化仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin 远程库地址 </span><span style="color:#676E95;font-style:italic;">//关联远程仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//添加文件 . 目录所有文件</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">备注信息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">//提交缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">set</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">upstream origin master  </span><span style="color:#676E95;font-style:italic;">//提交代码</span></span>
<span class="line"><span style="color:#A6ACCD;">(提交失败的话可以试试)</span></span>
<span class="line"><span style="color:#A6ACCD;">git push </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">f origin master </span><span style="color:#676E95;font-style:italic;">//强制push就成功了 少用 因为-f意味着强制push，会覆盖掉远程的所有代码！</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//拉取远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git fetch origin develop（develop为远程仓库的分支名）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//在本地创建分支dev并切换到该分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">b </span><span style="color:#82AAFF;">dev</span><span style="color:#A6ACCD;">(本地分支名称) origin</span><span style="color:#89DDFF;">/</span><span style="color:#82AAFF;">develop</span><span style="color:#A6ACCD;">(远程分支名称)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//把远程分支上的内容都拉取到本地</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull origin </span><span style="color:#82AAFF;">develop</span><span style="color:#A6ACCD;">(远程分支名称)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//提交本地分支代码到远程分支(注意：该命令应该在本地分支下执行)</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin </span><span style="color:#82AAFF;">develop</span><span style="color:#A6ACCD;">(远程分支名称</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">和本地分支名称一样)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,7),t=[o];function e(c,i,r,y,A,C){return a(),n("div",null,t)}const g=s(p,[["render",e]]);export{d as __pageData,g as default};
