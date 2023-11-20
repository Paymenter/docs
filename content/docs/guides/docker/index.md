---
title: Docker
description: A tutorial on how to install Paymenter in Docker
toc: true
---

## Setup

Getting Resources:
```
mkdir /opt/paymenter && mkdir /opt/paymenter/docker && cd /opt/paymenter/docker
curl -Lo docker-compose.yml https://raw.githubusercontent.com/Paymenter/Paymenter/master/docker-compose.example.yml
```

Replace the following in `docker-compose.yml`:
```
YOUR_DB_PASSWORD -> Your desired database password.
YOUR_ROOT_PASSWORD -> Your desired MySQL root password.
YOUR_APP_KEY -> Your app key (used for encryption)
domain.tld -> Your domain (with subdomain if applicable)
```

Starting Everything:
```bash
docker compose up -d --force-recreate
docker compose run --rm paymenter php artisan migrate --force --seed
```

Creating Users:
```bash
docker compose run --rm paymenter php artisan p:user:create
```

## Nginx

An example NGINX config (with SSL) can be observed below:
```conf
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name DOMAIN;
    if ($host != "DOMAIN") {
        return 403;
    }
    root /app/public;
    index index.html index.htm index.php;
    charset utf-8;
    location ~ / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_pass http://paymenter:8080;
    }
    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }
    access_log off;
    error_log  /var/log/nginx/paymenter.app-error.log error;
    # allow larger file uploads and longer script runtimes
    client_max_body_size 100m;
    client_body_timeout 120s;
    sendfile off;
    ssl_certificate /etc/certs/cert.pem;
    ssl_certificate_key /etc/certs/cert.key;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;
    location ~ /\.ht {
        deny all;
    }
}
```
Make sure to replace `DOMAIN` with your domain and enter your SSL certificates as `cert.pem` and `cert.key` in /opt/paymenter/certs.
