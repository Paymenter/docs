# Preparation

This is the installation guide for [Paymenter](https://github.com/Paymenter/Paymenter). Should you have any question or run into some issues feel free to ask us on our [Discord](https://discord.gg/kReEAQteFy)

### Supported operating systems

| Operating System | Version | Supported |
| ---------------- | ------- | :-------: |
| **Ubuntu**       | 20.04   |    ✅     |
|                  | 22.04   |    ✅     |
|                  | 24.04   |    ❔     |
| **CentOS**       | 7       |    ✅     |
|                  | 8       |    ✅     |
| **Debian**       | 10      |    ✅     |
|                  | 11      |    ✅     |
| **Windows**      | Any     |    ❌     |

## Required Dependencies

### General
```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash -s -- --mariadb-server-version="mariadb-10.11"

apt update

apt -y install php8.2 php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

### Ubuntu 22.04

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

apt update

apt -y install php8.2 php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

### Debian

```bash
apt update -y

apt -y install software-properties-common curl ca-certificates gnupg2 sudo lsb-release

echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/sury-php.list

curl -fsSL  https://packages.sury.org/php/apt.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/sury-keyring.gpg

apt update -y

apt install -y php8.2 php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip}

curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash -s -- --mariadb-server-version="mariadb-10.11"

apt install -y mariadb-server nginx tar unzip git redis-server
```

## Setting up the code

Creating the directory

```bash
mkdir /var/www/paymenter
```

Downloading the latest release to the directory

```bash
cd /var/www/paymenter
curl -Lo paymenter.tar.gz https://github.com/paymenter/paymenter/releases/latest/download/paymenter.tar.gz
```

Unzip the code

```bash
tar -xzvf paymenter.tar.gz
```

Granting the right permissions to the folder:

```bash
chmod -R 755 storage/* bootstrap/cache/
```

## Setting up the database

#### Remember to change yourPassword to a stronger password

```bash
mysql -u root -p

CREATE USER 'paymenter'@'127.0.0.1' IDENTIFIED BY 'yourPassword';

CREATE DATABASE paymenter;

GRANT ALL PRIVILEGES ON paymenter.* TO 'paymenter'@'127.0.0.1' WITH GRANT OPTION;

quit

```

## Installing composer and changing settings

First we are going to create the .env file

```bash
cp .env.example .env
```

Then we are going to install the composer packages

```bash
composer install --no-dev --optimize-autoloader
```

Now we are going to generate your encryption key.

```bash
php artisan key:generate --force

php artisan storage:link
```
::: danger
Back up your encryption key (APP_KEY in the .env file). It is used as an encryption key for all data that needs to be stored securely (e.g. user passwords). Store it somewhere safe - not just on your server. If you lose it all encrypted data is irrecoverable – even if you have database backups.
:::

The next step is easy. Just run this command and answer the questions that are asked. This command will automaticly migrate your database for you and make the first user

```bash
php artisan p:setup
```

## Creating the cronjob and the service

Now we are going to setup the cronjob

```bash
(crontab -l ; echo "* * * * * php /var/www/paymenter/artisan schedule:run >> /dev/null 2>&1") | crontab -
```

The next and final step is creating the service that will run the Queue Worker

This will create the .service file neccessary for this:
```bash
sudo bash -c 'cat > /etc/systemd/system/paymenter.service <<EOF
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
EOF'
```

Then just enable and start the service and you are done with installing Paymenter.

```bash
sudo systemctl enable --now paymenter.service
```
Now we just have to [Setup the webserver](/docs/installation/webserver) 
