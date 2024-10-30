# Webserver Setup

## Nginx

### Step 1: Create .conf file

> [!CAUTION]
> If you are using another webclient like [Apache](#apache) please do not follow this guide

First we are going to create the ```paymenter.conf``` file in ```/etc/nginx/sites-available/```

&NewLine;

Place the following inside:

> [!IMPORTANT]
>
> 1. Make sure to replace example.com with the domain name you want to use
> 2. If you want to use your webserver with SSL then make sure to follow the [SSL Guide](/docs/guides/SSL.md)

::: code-group

```bash [Nginx without SSL]{4}
server {
    listen 80;
    listen [::]:80;
    server_name example.com;
    root /var/www/paymenter/public;

    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
    }
}
```

```bash [Nginx with SSL]{4,11,16-17}
server {
    listen 80;
    listen [::]:80;
    server_name example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    root /var/www/paymenter/public;

    index index.php;

    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
    }
}
```

:::

### Step 2: Setting the right permissions

First we need to create a symbolic link for the file that we just created to enable the site

```bash
sudo ln -s /etc/nginx/sites-available/paymenter.conf /etc/nginx/sites-enabled/
```

Then we need to restart the service

```bash
sudo systemctl restart nginx
```

And then as last we need to set the right permissions for paymenter with this command

```bash
chown -R www-data:www-data /var/www/paymenter/*
```

And that is it. Paymenter should now be fully installed. Should you run into any issues you can ask for support on our [Discord](https://discord.gg/kReEAQteFy). Please make sure to follow the forum post guidelines when doing this.

## Apache
