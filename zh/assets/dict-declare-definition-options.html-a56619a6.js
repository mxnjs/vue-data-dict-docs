import{_ as p,r as o,o as l,c,a as s,b as n,d as e,e as t}from"./app-566fa296.js";const i={},r=s("h1",{id:"声明-定义字典",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#声明-定义字典","aria-hidden":"true"},"#"),n(" 声明|定义字典")],-1),u=s("p",null,"在单文件组件中选项式声明或配置字典",-1),d=s("h2",{id:"启用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#启用","aria-hidden":"true"},"#"),n(" 启用")],-1),k={href:"/api/use/dict-methods#register",target:"_blank",rel:"noopener noreferrer"},v=t(`<ul><li>示例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dicts</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h2><p>声明字典</p>`,4),b={href:"/api/config/pluginOptions",target:"_blank",rel:"noopener noreferrer"},m={href:"/api/config/fallbackDict",target:"_blank",rel:"noopener noreferrer"},h=t(`<ul><li>示例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dicts</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;lang&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>定义字典</p>`,4),y={href:"/api/config/dictOptions",target:"_blank",rel:"noopener noreferrer"},_=t(`<ul><li>示例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dicts</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;lang&#39;</span><span class="token punctuation">,</span>
      <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">dictMeta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;java&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">responseConverter</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> dictMeta</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=&gt;</span> VueDataDict<span class="token punctuation">.</span><span class="token function">convertData</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> dictMeta<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">labelField</span><span class="token operator">:</span> <span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">valueField</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lookup</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function f(g,x){const a=o("ExternalLinkIcon");return l(),c("div",null,[r,u,d,s("p",null,[n("如组件内初始时无字典配置，后期动态"),s("a",k,[n("注册字典"),e(a)]),n("，也需在选项中声明启用字典，此时字典配置为空")]),v,s("p",null,[n("将在"),s("a",b,[n("插件选项"),e(a)]),n("中寻找字典配置，并以"),s("a",m,[n("回退字典"),e(a)]),n("下所有属性作为缺省配置")]),h,s("p",null,[n("在组件内局部定义字典，参见"),s("a",y,[n("字典选项"),e(a)])]),_])}const w=p(i,[["render",f],["__file","dict-declare-definition-options.html.vue"]]);export{w as default};
