# Paymenter Docker Installation Guide

## Introduction

This guide will walk you through the process of setting up Paymenter using Docker. Docker simplifies the installation and deployment of Paymenter by containerizing the application and its dependencies. Please follow the steps carefully to ensure a smooth installation.

## Prerequisites

Before you begin, make sure you have the following prerequisites in place:

- Docker installed on your system
- Basic knowledge of Docker and Docker Compose

## Setup

### Getting Resources

1. Create the necessary directory structure and navigate to the Docker directory:

   ```bash
   mkdir -p /opt/paymenter/docker
   cd /opt/paymenter/docker
   ```

2. Download the Docker Compose configuration file:

   ```bash
   curl -Lo docker-compose.yml https://raw.githubusercontent.com/Paymenter/Paymenter/master/docker-compose.example.yml
   ```

### Configure Docker Compose

Edit the `docker-compose.yml` file and replace the following placeholders:

- `YOUR_DB_PASSWORD` with your desired database password.
- `YOUR_ROOT_PASSWORD` with your desired MySQL root password.
- `YOUR_APP_KEY` with your application key used for encryption.
- `domain.tld` with your domain name (including subdomain if applicable).

### Starting Everything

1. Start Paymenter and its dependencies in detached mode:

   ```bash
   docker-compose up -d --force-recreate
   ```

2. Run the database migrations:

   ```bash
   docker-compose run --rm paymenter php artisan migrate --force
   ```

### Creating Users

To create a user, run the following command:

```bash
docker-compose run --rm paymenter php artisan p:user:create
```

## Nginx Configuration (with SSL)

Here's an example NGINX configuration file with SSL for Paymenter:

```nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name YOUR_DOMAIN;

    if ($host != "YOUR_DOMAIN") {
        return 403;
    }

    root /app/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_pass http://paymenter:8080;
    }

    location = /favicon.ico {
        access_log off;
        log_not_found off;
    }

    location = /robots.txt {
        access_log off;
        log_not_found off;
    }

    access_log off;
    error_log  /var/log/nginx/paymenter.app-error.log error;

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

Make sure to replace `YOUR_DOMAIN` with your actual domain and provide your SSL certificates as `cert.pem` and `cert.key` in the `/opt/paymenter/certs` directory.

Follow these instructions carefully to set up Paymenter in a Docker environment with NGINX and SSL. Enjoy using Paymenter on your server!
