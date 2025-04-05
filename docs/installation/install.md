# Preparation

## Supported operating systems

| Operating System | Version | Supported |
| ---------------- | ------- | :-------: |
| **Ubuntu**       | 24.04   |    ✅     |
|                  | 22.04   |    ✅     |
|                  | 20.04   |    ✅     |
| **CentOS**       | 8       |    ✅     |
|                  | 7       |    ✅     |
| **Debian**       | 11      |    ✅     |
|                  | 10      |    ✅     |
| **Windows**      | Any     |    ❌     |

## Required Dependencies

First of all check if you have all of the dependencies. If not install them with the following commands:

::: code-group

```bash [General]
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

curl -sSL https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash -s -- --mariadb-server-version="mariadb-10.11"

apt update

apt -y install php8.3 php8.3-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip,intl,redis} mariadb-server nginx tar unzip git redis-server
```

```bash [Ubuntu 24.04]
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

apt update

apt -y install php8.3 php8.3-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip,intl,redis} mariadb-server nginx tar unzip git redis-server
```

```bash [Debian]
apt -y install software-properties-common curl ca-certificates gnupg2 sudo lsb-release

echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/sury-php.list

curl -fsSL  https://packages.sury.org/php/apt.gpg | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/sury-keyring.gpg

apt update

curl -sSL https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash -s -- --mariadb-server-version="mariadb-10.11"

apt install -y php8.3 php8.3-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip,intl,redis} mariadb-server nginx tar unzip git redis-server
```

:::

#### Composer

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Installing

Creating the directory

```bash
mkdir /var/www/paymenter
```

Downloading the latest release to the directory

```bash
cd /var/www/paymenter
curl -Lo paymenter.tar.gz https://api.paymenter.org/beta
```

Unzip the code

```bash
tar -xzvf paymenter.tar.gz
```

Granting the right permissions to the folder:

```bash
chmod -R 755 storage/* bootstrap/cache/
```

## Creating database

> [!IMPORTANT]
> Remember to change yourPassword to a stronger password

```bash
mysql -u root -p

CREATE USER 'paymenter'@'127.0.0.1' IDENTIFIED BY 'yourPassword';

CREATE DATABASE paymenter;

GRANT ALL PRIVILEGES ON paymenter.* TO 'paymenter'@'127.0.0.1' WITH GRANT OPTION;

quit

```

## Downloading packages

Run this command to install the composer packages

```bash
composer install --no-dev --optimize-autoloader
```

## Setting up .env

First we are going to create the .env file

```bash
cp .env.example .env
```

Now we are going to generate your encryption key.

```bash
php artisan key:generate --force

php artisan storage:link
```

> [!DANGER]
> Back up your encryption key (APP_KEY in the .env file). It is used as an encryption key for all data that needs to be stored securely (e.g. user passwords). Store it somewhere safe - not just on your server. If you lose it all encrypted data is irrecoverable – even if you have database backups.

The next step is opening your .env file with a editor like nano and then changing these values to the database, database-user and database-password that we just created.

```bash
DB_DATABASE=paymenter
DB_USERNAME=paymenter
DB_PASSWORD=yourPassword
```

## Setting up database

Now that we have set the correct user and database in the .env file we can go ahead and setup the database
Simple run this command and your database is ready to be used.

> [!WARNING]
> The command below may take some time to run depending on your machine. Please DO NOT exit the process until it is completed!

```bash
php artisan migrate --force --seed
```

Fill in the default URL and name using the following command:

```bash
php artisan app:init
```

Once this process is completed you can make a user for yourself by running.

```bash
php artisan app:user:create
```

## Creating cronjob and service

### Creating cronjob

Now we are going to setup the cronjob to run every minute. You can do this manualy by running `crontab -e` and entering your cronjob.

```bash
* * * * * php /var/www/paymenter/artisan schedule:run >> /dev/null 2>&1
```

The next and final step is creating the service that will run the Queue Worker

### Creating service

Create a new service file in `/etc/systemd/system` called `paymenter.service` then open this file and place the following inside:

```bash
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

Then just enable and start the service and you are done with installing Paymenter.

```bash
sudo systemctl enable --now paymenter.service
sudo systemctl enable --now redis-server
```

Now we have to [setup the webserver](./webserver.md)
