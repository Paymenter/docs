---
sidebar_position: 2
description: Instructions on how to configure databases for Paymenter.
---

# Install & Setup DataBases

:::info Database Configuration

You will need a database setup and a user with the correct permissions created for that database before continuing any further. See below to create a user and database for your Paymenter panel quickly. To find more detailed information please have a look at Setting up MySQL.
```
mysql -u root -p

# Remember to change 'yourPassword' below to be a unique password
CREATE USER 'paymenter'@'127.0.0.1' IDENTIFIED BY 'yourPassword';
CREATE DATABASE paymenter;
GRANT ALL PRIVILEGES ON paymenter.* TO 'paymenter'@'127.0.0.1' WITH GRANT OPTION;
exit
```
:::


First we will copy over our default environment settings file, install core dependencies, and then generate a new application encryption key.

```
cp .env.example .env
composer install --no-dev --optimize-autoloader

# Only run the command below if you are installing this Panel for
# the first time and do not have any Paymenter Panel data in the database.
php artisan key:generate --force
```

:::danger 
Back up your encryption key (APP_KEY in the .env file). It is used as an encryption key for all data that needs to be stored securely (e.g. api keys). Store it somewhere safe - not just on your server. If you lose it all encrypted data is irrecoverable -- even if you have database backups.
:::

## Environment Configuration

Paymenter's core environment is easily configured using a few different CLI commands built into the app. This step will cover setting up things such as sessions, caching, database credentials, and email sending.

```
php artisan p:environment:setup
php artisan p:environment:database

# To use PHP's internal mail sending (not recommended), select "mail". To use a
# custom SMTP server, select "smtp".
php artisan p:environment:mail
```

## Database Setup

Now we need to setup all of the base data for the Panel in the database you created earlier. **The command below may take some time to run depending on your machine. Please DO NOT exit the process until it is completed!** This command will setup the database tables that power Paymenter.
```
php artisan migrate --seed --force
```


## Add The First User
You'll then need to create an administrative user so that you can log into the panel. To do so, run the command below. At this time passwords **must** meet the following requirements: 8 characters, mixed case, at least one number.
```
php artisan p:user:make
```
