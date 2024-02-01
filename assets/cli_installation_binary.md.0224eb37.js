import{_ as a,o as e,c as l,M as t}from"./chunks/framework.37cd2f1b.js";const m=JSON.parse('{"title":"Binary Releases","description":"","frontmatter":{},"headers":[],"relativePath":"cli/installation/binary.md","filePath":"cli/installation/binary.md","lastUpdated":1684527449000}'),s={name:"cli/installation/binary.md"},o=t(`<h1 id="binary-releases" tabindex="-1">Binary Releases <a class="header-anchor" href="#binary-releases" aria-label="Permalink to &quot;Binary Releases&quot;">​</a></h1><p>We pre-compile each release for all major operating systems, these releases can be found on <a href="https://github.com/tamasfe/taplo/releases" target="_blank" rel="noreferrer">GitHub</a>.</p><h2 id="variations" tabindex="-1">Variations <a class="header-anchor" href="#variations" aria-label="Permalink to &quot;Variations&quot;">​</a></h2><p>Taplo offers features — such as the language server — that might not be useful for most use-cases. For this reason we build multiple variations that differ in terms of features.</p><h3 id="default-build" tabindex="-1">Default Build <a class="header-anchor" href="#default-build" aria-label="Permalink to &quot;Default Build&quot;">​</a></h3><p>The default build with commonly-used features.</p><h4 id="download" tabindex="-1">Download <a class="header-anchor" href="#download" aria-label="Permalink to &quot;Download&quot;">​</a></h4><ul><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-linux-x86.gz" target="_blank" rel="noreferrer">Linux (x86)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-linux-x86_64.gz" target="_blank" rel="noreferrer">Linux (x86_64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-linux-aarch64.gz" target="_blank" rel="noreferrer">Linux (ARM64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-darwin-x86_64.gz" target="_blank" rel="noreferrer">macOS (x86_64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-darwin-aarch64.gz" target="_blank" rel="noreferrer">macOS (ARM64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-windows-x86.zip" target="_blank" rel="noreferrer">Windows (x86)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-windows-x86_64.zip" target="_blank" rel="noreferrer">Windows (x86_64)</a></li></ul><h3 id="full-build" tabindex="-1">Full Build <a class="header-anchor" href="#full-build" aria-label="Permalink to &quot;Full Build&quot;">​</a></h3><p>The full build contains the following additional features:</p><ul><li>Language Server</li><li>An interface for <a href="https://github.com/BurntSushi/toml-test" target="_blank" rel="noreferrer">toml-test</a></li></ul><h4 id="download-1" tabindex="-1">Download <a class="header-anchor" href="#download-1" aria-label="Permalink to &quot;Download&quot;">​</a></h4><ul><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-linux-x86.gz" target="_blank" rel="noreferrer">Linux (x86)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-linux-x86_64.gz" target="_blank" rel="noreferrer">Linux (x86_64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-linux-aarch64.gz" target="_blank" rel="noreferrer">Linux (ARM64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-darwin-x86_64.gz" target="_blank" rel="noreferrer">macOS (x86_64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-darwin-aarch64.gz" target="_blank" rel="noreferrer">macOS (ARM64)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-windows-x86.zip" target="_blank" rel="noreferrer">Windows (x86)</a></li><li><a href="https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-windows-x86_64.zip" target="_blank" rel="noreferrer">Windows (x86_64)</a></li></ul><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-fsSL</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://github.com/tamasfe/taplo/releases/latest/download/taplo-full-linux-x86_64.gz</span><span style="color:#BABED8;"> \\</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">gzip</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">755</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/dev/stdin</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/usr/local/bin/taplo</span></span></code></pre></div>`,15),r=[o];function n(i,p,d,h,c,u){return e(),l("div",null,r)}const b=a(s,[["render",n]]);export{m as __pageData,b as default};
