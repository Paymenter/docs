--- 
sidebar_position: 5
description: How to setup the webserver for Paymenter.
---

# Webserver configuration

## **Apache**

### .htaccess

```apache
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

## **Nginx**

### For nginx you can create a file in /etc/nginx/sites-available/ called paymenter.conf and add the following:

Replace paymenter.org with your domain name.

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


Be sure to replace `paymenter.org` with your domain name.

Fix the permmisions of paymenter with the following command:
```bash
chown -R www-data:www-data /var/www/paymenter
```


## Problems? {#problems}

Ask for help on our [GitHub repository](https://github.com/paymenter), or our [Discord server](https://discord.gg/xB4UUT3XQg)