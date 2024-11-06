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

### Stap 1: Creëer een .conf bestand

[!CAUTION] Als je een andere webserver gebruikt zoals Nginx, volg dan niet deze instructies

Allereerst maken we een paymenter.conf bestand aan in /etc/apache2/sites-available/

Plaats hierin het volgende:

[!IMPORTANT]

Zorg ervoor dat je example.com vervangt door je eigen domeinnaam.
Als je SSL wilt gebruiken, volg dan de SSL Guide.
::: code-group
<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/paymenter/public

    <Directory /var/www/paymenter/public>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    <FilesMatch "\.php$">
        SetHandler "proxy:unix:/var/run/php/php8.3-fpm.sock|fcgi://localhost/"
    </FilesMatch>
</VirtualHost>
<VirtualHost *:80>
    ServerName example.com
    Redirect permanent / https://example.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName example.com
    DocumentRoot /var/www/paymenter/public

    SSLEngine On
    SSLCertificateFile /etc/letsencrypt/live/example.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/example.com/privkey.pem

    <Directory /var/www/paymenter/public>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    <FilesMatch "\.php$">
        SetHandler "proxy:unix:/var/run/php/php8.3-fpm.sock|fcgi://localhost/"
    </FilesMatch>
</VirtualHost>
:::

### Stap 2: Instellen van de juiste rechten

Eerst activeren we de site door een symbolische link te maken naar de configuratie die we net hebben aangemaakt.

```bash
sudo a2ensite paymenter.conf
```

Daarna herstarten we Apache om de wijzigingen door te voeren.

```bash
sudo systemctl restart apache2
```

Als laatste stellen we de juiste rechten in voor Paymenter met het volgende commando:

```bash
chown -R www-data:www-data /var/www/paymenter/*
```

En dat is het! Paymenter zou nu volledig geïnstalleerd moeten zijn. Mocht je problemen tegenkomen, vraag dan om hulp op onze [Discord](https://discord.gg/eqzuVVHZhE).
