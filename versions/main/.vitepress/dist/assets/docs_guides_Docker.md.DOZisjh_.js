import{_ as s,c as a,o as n,a5 as e}from"./chunks/framework.Cl2Ecfyq.js";const u=JSON.parse('{"title":"Docker","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guides/Docker.md","filePath":"docs/guides/Docker.md"}'),p={name:"docs/guides/Docker.md"},i=e(`<h1 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h1><h2 id="getting-resources" tabindex="-1">Getting Resources <a class="header-anchor" href="#getting-resources" aria-label="Permalink to &quot;Getting Resources&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir /opt/paymenter &amp;&amp; mkdir /opt/paymenter/docker &amp;&amp; cd /opt/paymenter/docker</span></span>
<span class="line"><span>curl -Lo docker-compose.yml https://raw.githubusercontent.com/Paymenter/Paymenter/master/docker-compose.example.yml</span></span></code></pre></div><p>Replace the following in <code>docker-compose.yml</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>YOUR_DB_PASSWORD -&gt; Your desired database password.</span></span>
<span class="line"><span>YOUR_ROOT_PASSWORD -&gt; Your desired MySQL root password.</span></span>
<span class="line"><span>YOUR_APP_KEY -&gt; Your app key (used for encryption)</span></span>
<span class="line"><span>domain.tld -&gt; Your domain (with subdomain if applicable)</span></span></code></pre></div><h2 id="starting-everything" tabindex="-1">Starting Everything <a class="header-anchor" href="#starting-everything" aria-label="Permalink to &quot;Starting Everything&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force-recreate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> paymenter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --seed</span></span></code></pre></div><h2 id="creating-users" tabindex="-1">Creating Users <a class="header-anchor" href="#creating-users" aria-label="Permalink to &quot;Creating Users&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> paymenter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> p:user:create</span></span></code></pre></div><h2 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h2><p>An example NGINX config (with SSL) can be observed below:</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 443 ssl http2;</span></span>
<span class="line"><span>    listen [::]:443 ssl http2;</span></span>
<span class="line"><span>    server_name DOMAIN;</span></span>
<span class="line"><span>    if ($host != &quot;DOMAIN&quot;) {</span></span>
<span class="line"><span>        return 403;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    root /app/public;</span></span>
<span class="line"><span>    index index.html index.htm index.php;</span></span>
<span class="line"><span>    charset utf-8;</span></span>
<span class="line"><span>    location ~ / {</span></span>
<span class="line"><span>        proxy_set_header Host $host;</span></span>
<span class="line"><span>        proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>        proxy_pass http://paymenter:8080;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    location = /favicon.ico { access_log off; log_not_found off; }</span></span>
<span class="line"><span>    location = /robots.txt  { access_log off; log_not_found off; }</span></span>
<span class="line"><span>    access_log off;</span></span>
<span class="line"><span>    error_log  /var/log/nginx/paymenter.app-error.log error;</span></span>
<span class="line"><span>    # allow larger file uploads and longer script runtimes</span></span>
<span class="line"><span>    client_max_body_size 100m;</span></span>
<span class="line"><span>    client_body_timeout 120s;</span></span>
<span class="line"><span>    sendfile off;</span></span>
<span class="line"><span>    ssl_certificate /etc/certs/cert.pem;</span></span>
<span class="line"><span>    ssl_certificate_key /etc/certs/cert.key;</span></span>
<span class="line"><span>    ssl_session_cache shared:SSL:10m;</span></span>
<span class="line"><span>    ssl_protocols TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>    ssl_ciphers &quot;ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384&quot;;</span></span>
<span class="line"><span>    ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span>    add_header X-Content-Type-Options nosniff;</span></span>
<span class="line"><span>    add_header X-XSS-Protection &quot;1; mode=block&quot;;</span></span>
<span class="line"><span>    add_header X-Robots-Tag none;</span></span>
<span class="line"><span>    add_header Content-Security-Policy &quot;frame-ancestors &#39;self&#39;&quot;;</span></span>
<span class="line"><span>    add_header X-Frame-Options DENY;</span></span>
<span class="line"><span>    add_header Referrer-Policy same-origin;</span></span>
<span class="line"><span>    location ~ /\\.ht {</span></span>
<span class="line"><span>        deny all;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>Make sure to replace <code>DOMAIN</code> with your domain and enter your SSL certificates as <code>cert.pem</code> and <code>cert.key</code> in /opt/paymenter/certs.</p>`,13),t=[i];function l(o,r,c,d,h,k){return n(),a("div",null,t)}const m=s(p,[["render",l]]);export{u as __pageData,m as default};
