---
title: Installation
description: How to install Paymenter
type: docs
toc: true
---

# Preparation

## Supported operating systems

| Operating System | Version |     Supported      |
|------------------|---------|:------------------:|
| **Ubuntu**       | 20.04   |  ✅    |
|                  | 22.04   |  ✅    |
| **CentOS**       | 7       |  ✅    |
|                  | 8       |  ✅    |
| **Debian**       | 10      |  ✅    |
|                  | 11      |  ✅    |
| **Windows**      | Any     |  ❌    |

## Install Dependencies

{{< tabs tabTotal="3" >}}
{{< tab tabName="General" tabID="general" >}}

```
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash -s -- --mariadb-server-version="mariadb-10.11"

apt update

apt -y install php8.2 php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

{{</ tab >}}
{{< tab tabName="Ubuntu 22.04" tabID="ubuntu-22" >}}

```
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

apt update

apt -y install php8.2 php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```
{{< /tab >}}
{{< tab tabName="Debian" tabID="debian" >}}

```
apt update -y

apt -y install software-properties-common curl ca-certificates gnupg2 sudo lsb-release

echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/sury-php.list

curl -fsSL  https://packages.sury.org/php/apt.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/sury-keyring.gpg

apt update -y

apt install -y php8.2 php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip}

curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash -s -- --mariadb-server-version="mariadb-10.11"

apt install -y mariadb-server nginx tar unzip git redis-server
```

{{</ tab >}}
{{< /tabs >}}

## Install Composer

```
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

# Download the code

Clone our repo from Github to your server:

```
mkdir /var/www/paymenter
cd /var/www/paymenter
curl -Lo paymenter.tar.gz https://github.com/Paymenter/Paymenter/releases/download/v0.9.5/paymenter.tar.gz
tar -xzvf paymenter.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

# Install & Setup Database

You will need a database setup and a user with the correct permissions created for that database before continuing any further. See below to create a user and database for your Paymenter panel quickly. To find more detailed information please have a look at Setting up MySQL.

```
mysql -u root -p

# Remember to change 'yourPassword' below to be a unique password
CREATE USER 'paymenter'@'127.0.0.1' IDENTIFIED BY 'yourPassword';
CREATE DATABASE paymenter;
GRANT ALL PRIVILEGES ON paymenter.* TO 'paymenter'@'127.0.0.1' WITH GRANT OPTION;
exit
```

First we will copy over our default environment settings file, install core dependencies, and then generate a new application encryption key.

```
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

```
DB_DATABASE=paymenter
DB_USERNAME=paymenter
DB_PASSWORD=yourPassword
```

## Database Setup

Now we need to setup all of the base data for the Panel in the database you created earlier. **The command below may take some time to run depending on your machine. Please DO NOT exit the process until it is completed!** This command will setup the database tables that power Paymenter.

```
php artisan migrate --force --seed
```

## Add The First User

You'll then need to create an administrative user so that you can log into the admin side. To do so, run the command below.

```
php artisan p:user:create
```

## Webserver configuration

{{< tabs tabTotal="4">}}
{{< tab tabName="Nginx" tabID="nginx" >}}

For nginx you can create a file in /etc/nginx/sites-available/ called paymenter.conf and add the following:

```
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
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
    }
}
```

Then run the following commands to enable the site and restart nginx:

```
sudo ln -s /etc/nginx/sites-available/paymenter.conf /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

{{< /tab >}}
{{< tab tabName="Nginx with SSL" tabID="nginx-ssl" >}}

For nginx you can create a file in /etc/nginx/sites-available/ called paymenter.conf and add the following:

```
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
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
    }
}
```

Then run the following commands to enable the site and restart nginx:

```
sudo ln -s /etc/nginx/sites-available/paymenter.conf /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

{{< /tab >}}
{{< tab tabName="Apache" tabID="apache" >}}

For apache you can create a file in /etc/apache2/sites-available/ called paymenter.conf and add the following:

```
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

```
sudo ln -s /etc/apache2/sites-available/paymenter.conf /etc/apache2/sites-enabled/paymenter.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

{{< /tab >}}
{{< tab tabName="Apache with SSL" tabID="apache-ssl" >}}

For apache you can create a file in /etc/apache2/sites-available/ called paymenter.conf and add the following:

```
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

```
sudo ln -s /etc/apache2/sites-available/paymenter.conf /etc/apache2/sites-enabled/paymenter.conf
sudo a2enmod rewrite
sudo systemctl restart apache2
```

{{< /tab >}}
{{< /tabs >}}

Be sure to replace `paymenter.org` with your domain name.

Fix the permmisions of paymenter with the following command:

```
chown -R www-data:www-data /var/www/paymenter/*
```


## Cronjob

Crontab Configuration
The first thing we need to do is create a new cronjob that runs every minute to process specific Paymenter tasks. You'll want to open your crontab using `sudo crontab -e` and then paste the line below.

```
* * * * * php /var/www/paymenter/artisan schedule:run >> /dev/null 2>&1
```

## Create Queue Worker

Paymenter uses Laravel's built in queue system to handle tasks that are able to be run in the background.

Create a new file in `/etc/systemd/system/` called `paymenter.service` and add the following:

```
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

```
sudo systemctl enable --now paymenter.service
```
