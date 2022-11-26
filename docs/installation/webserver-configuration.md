--- 
sidebar_position: 5
description: How to setup the webserver for Paymenter.
---

# Webserver configuration

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx" label="Nginx">

For nginx you can create a file in /etc/nginx/sites-available/ called paymenter.conf and add the following:

```nginx
server {
    listen 80;
    server_name paymenter.org;
    root /var/www/paymenter/public;

    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
    }
}
```

Then run the following commands to enable the site and restart nginx:

```bash
sudo ln -s /etc/nginx/sites-available/paymenter.conf /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

</TabItem>

<TabItem value="nginxssl" label="Nginx with SSL">

For nginx you can create a file in /etc/nginx/sites-available/ called paymenter.conf and add the following:

```nginx
server {
    listen 80;
    server_name paymenter.org;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name paymenter.org;
    root /var/www/paymenter/public;

    index index.php;

    ssl_certificate /etc/letsencrypt/live/paymenter.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/paymenter.org/privkey.pem;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
    }
}
```

Then run the following commands to enable the site and restart nginx:

```bash
sudo ln -s /etc/nginx/sites-available/paymenter.conf /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

</TabItem>

<TabItem value="apache" label="Apache">

For apache you can create a file in /etc/apache2/sites-available/ called paymenter.conf and add the following:

```conf
<VirtualHost *:80>
    ServerName paymenter.org
    ServerAlias www.paymenter.org
    DocumentRoot /var/www/paymenter/public
    <Directory /var/www/paymenter/public>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

Then run the following commands to enable the site and restart apache:

```bash
sudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

</TabItem>

<TabItem value="apachessl" label="Apache with SSL">

For apache you can create a file in /etc/apache2/sites-available/ called paymenter.conf and add the following:

```conf
<VirtualHost *:80>
    ServerName paymenter.org
    ServerAlias www.paymenter.org
    Redirect permanent / https://paymenter.org/
</VirtualHost>

<VirtualHost *:443>
    ServerName paymenter.org
    ServerAlias www.paymenter.org
    DocumentRoot /var/www/paymenter/public
    <Directory /var/www/paymenter/public>
        AllowOverride All
        Require all granted
    </Directory>
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/paymenter.org/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/paymenter.org/privkey.pem
</VirtualHost>
```
    
Then run the following commands to enable the site and restart apache:
    
```bash
sudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```


</TabItem>
</Tabs>

Be sure to replace `paymenter.org` with your domain name.

Fix the permmisions of paymenter with the following command:
```bash
chown -R www-data:www-data /var/www/paymenter
```


## Problems? {#problems}

Ask for help on our [GitHub repository](https://github.com/paymenter), or our [Discord server](https://discord.gg/xB4UUT3XQg)