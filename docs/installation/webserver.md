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

And that is it. Paymenter should now be fully installed. Should you run into any issues you can ask for support on our [Discord](https://discord.gg/xB4UUT3XQg). Please make sure to follow the forum post guidelines when doing this.

## Apache

### Stap 1: Create a .conf file

>[!CAUTION] 
>If you’re using another web server like Nginx, please do not follow this guide.

First, create a paymenter.conf file in /etc/apache2/sites-available/.

Place the following configuration inside:

>[!IMPORTANT]
>
>Replace example.com with your own domain.
>If you wish to use SSL, refer to the SSL Guide.

::: code-group
```bash [Apache without SSL]{2,3}
<VirtualHost *:80>
    ServerName example.com
    ServerAlias www.example.com
    DocumentRoot /var/www/paymenter/public
    <Directory /var/www/paymenter/public>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```
```bash [Apache with SSL]{2,3,4,8,9,16,17}
<VirtualHost *:80>
    ServerName example.com
    ServerAlias www.example.com
    Redirect permanent / https://example.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName example.com
    ServerAlias www.example.com
    DocumentRoot /var/www/paymenter/public
    <Directory /var/www/paymenter/public>
        AllowOverride All
        Require all granted
    </Directory>
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/example.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/example.com/privkey.pem
</VirtualHost>
```
:::

### Stap 2: Setting the right permissions

First, enable the site by creating a symbolic link to the configuration we just created:

```bash
sudo ln -s /etc/apache2/sites-available/paymenter.conf /etc/apache2/sites-enabled/paymenter.conf
```

```bash
sudo a2enmod rewrite
```

Then, restart Apache to apply the changes:

```bash
sudo systemctl restart apache2
```

Finally, set the correct permissions for Paymenter:

```bash
chown -R www-data:www-data /var/www/paymenter/*
```

And that's it! Paymenter should now be fully installed. If you encounter any issues, feel free to reach out on our [Discord](https://discord.gg/eqzuVVHZhE).
