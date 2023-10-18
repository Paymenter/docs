---
title: Installation
type: docs
toc: true

---

# Preperation

## Supported operating systems

| Operating System | Version |     Supported      |
|------------------|---------|:------------------:|
| **Ubuntu**       | 18.04   |  ✅    |
|                  | 20.04   |  ✅    |
|                  | 22.04   |  ✅    |
| **CentOS**       | 7       |  ✅    |
|                  | 8       |  ✅    |
| **Debian**       | 10      |  ✅    |
|                  | 11      |  ✅    |
| **Windows**      | Any     |  ❌    |

## Install Dependencies

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

# If you are on Ubuntu 22.04, you can skip this step
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash

apt update

# Add universe repository if you are on Ubuntu 18.04
apt-add-repository universe

apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

## Install Composer

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

# Download the code

Clone our repo from Github to your server:

```bash
mkdir /var/www/paymenter
cd /var/www/paymenter
curl -Lo paymenter.tar.gz https://github.com/paymenter/paymenter/releases/latest/download/paymenter.tar.gz
tar -xzvf paymenter.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

# Install & Setup Database

You will need a database setup and a user with the correct permissions created for that database before continuing any further. See below to create a user and database for your Paymenter panel quickly. To find more detailed information please have a look at Setting up MySQL.

```bash
mysql -u root -p

# Remember to change 'yourPassword' below to be a unique password
CREATE USER 'paymenter'@'127.0.0.1' IDENTIFIED BY 'yourPassword';
CREATE DATABASE paymenter;
GRANT ALL PRIVILEGES ON paymenter.* TO 'paymenter'@'127.0.0.1' WITH GRANT OPTION;
exit
```

First we will copy over our default environment settings file, install core dependencies, and then generate a new application encryption key.

```bash
cp .env.example .env
composer install --no-dev --optimize-autoloader

# Only run the command below if you are installing this Panel for
# the first time and do not have any Paymenter Panel data in the database.
php artisan key:generate --force
php artisan storage:link
```

{{< warning title="Warning" >}}
Back up your encryption key (APP_KEY in the .env file). It is used as an encryption key for all data that needs to be stored securely (e.g. user passwords). Store it somewhere safe - not just on your server. If you lose it all encrypted data is irrecoverable -- even if you have database backups.
{{< /warning >}}

## Environment Configuration

Change the database connection information in the `.env` file to match the credentials you created in the previous step.

```bash
DB_DATABASE=paymenter
DB_USERNAME=paymenter
DB_PASSWORD=yourPassword
```

## Database Setup

Now we need to setup all of the base data for the Panel in the database you created earlier. **The command below may take some time to run depending on your machine. Please DO NOT exit the process until it is completed!** This command will setup the database tables that power Paymenter.

```bash
php artisan migrate --force --seed
```

## Add The First User

You'll then need to create an administrative user so that you can log into the admin side. To do so, run the command below.

```bash
php artisan p:user:create
```

# Webserver configuration

{{< tabs tabTotal="5">}}
{{< tab tabName="Nginx" >}}

For nginx you can create a file in /etc/nginx/sites-available/ called paymenter.conf and add the following:

```conf
server {
    listen 80;
    listen [::]:80;
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

{{< /tab >}}
{{< tab tabName="Nginx with SSL" >}}

For nginx you can create a file in /etc/nginx/sites-available/ called paymenter.conf and add the following:

```conf
server {
    listen 80;
    listen [::]:80;
    server_name paymenter.org;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
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

{{< /tab >}}
{{< tab tabName="Apache" >}}

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
sudo ln -s /etc/apache2/sites-available/paymenter.conf /etc/apache2/sites-enabled/paymenter.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

{{< /tab >}}
{{< tab tabName="Apache with SSL" >}}

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
sudo ln -s /etc/apache2/sites-available/paymenter.conf /etc/apache2/sites-enabled/paymenter.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

{{< /tab >}}
{{< tab tabName="SSL With Cloudflare" >}}

**Please Note You HAVE to setup ether Nginx or Apache for this method to work.**

1. Simply head on over to Cloudflare once your DNS is pointed to your A record of your `server IP` you are installing Paymenter on please make sure to enable cache which means the little orange cloud showing that the domain is ![image](https://github.com/cloudrack-ca/docs/assets/145787423/21501fa8-fb0f-42aa-9074-c70afb0e482d)
2. Once you have performed the above, make sure to head on over to your domains configuration rules

   ![image](https://github.com/cloudrack-ca/docs/assets/145787423/f4227e7c-8381-4b28-8358-2507be01cc8d)
   
As you can see this is found on the left-hand side of your [https://dash.cloudflare.com](https://dash.cloudflare.com) where you would be accessing your domain.

3. Once you have done this and are inside the chosen domains `Configuration Rules` you will want to add a new rule.+

- ![image](https://github.com/cloudrack-ca/docs/assets/145787423/a0758cd7-c9d3-4428-a9d5-f780527139b4)
  Name it something rememberable 🧠

- ![image](https://github.com/cloudrack-ca/docs/assets/145787423/99092055-2261-4e5f-819d-c35c044bac0a)
 
  From here we will add a configuration name

- ![image](https://github.com/cloudrack-ca/docs/assets/145787423/c6686e0a-b300-4e93-a8ce-555c71abc10d)
 
  Make sure that your fields are as follows and remember to replace paymenter.org with your own domain that is hosting Paymenter on.

- Scroll all the way down to the bottom of the page until you see the following in the next step

- ![image](https://github.com/cloudrack-ca/docs/assets/145787423/8ab26f2c-968e-4bc2-811d-70a79e27f0f4)
  Make Sure this is set to Flexible And Click Deploy - You may need to close all active browsers and re-open them to obtain a valid SSL connection between your browser and Paymenter


{{< /tab >}}
{{< /tabs >}}

Be sure to replace `paymenter.org` with your domain name.

Fix the permmisions of paymenter with the following command:

```bash
chown -R www-data:www-data /var/www/paymenter/*
```


## Cronjob

Crontab Configuration
The first thing we need to do is create a new cronjob that runs every minute to process specific Paymenter tasks. You'll want to open your crontab using `sudo crontab -e` and then paste the line below.

```bash
* * * * * php /var/www/paymenter/artisan schedule:run >> /dev/null 2>&1
```

## Create Queue Worker

Paymenter uses Laravel's built in queue system to handle tasks that are able to be run in the background.

Create a new file in `/etc/systemd/system/` called `paymenter.service` and add the following:

```conf
[Unit]
Description=Paymenter Queue Worker

[Service]
# On some systems the user and group might be different.
# Some systems use `apache` or `nginx` as the user and group.
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/paymenter/artisan queue:work
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

Then run the following commands to enable the service and start it:

```bash
sudo systemctl enable --now paymenter.service
```
