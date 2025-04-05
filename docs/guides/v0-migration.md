# Migration from version 0.x to 1.0

This guide will help you migrate from Paymenter v0.x to v1.0.

::: warning
This migrator might not work as expected, please make sure to backup your data before starting the migration process.
:::

## Step 1: Backup your data

Before you start the migration process, make sure to backup your data. You can do this by running the following command:

```bash
mysqldump -u root -p paymenter > paymenter.sql
```

Copy your .env APP_KEY somewhere safe, as you will need it later.

Backup the V0 installation folder, so you can revert back if needed.

```bash
cp -r /var/www/paymenter /var/www/paymenter-v0
```

Remove the old installation folder, so you can install the new version.

```bash
rm -rf /var/www/paymenter
```

## Step 2: Follow the installation guide

To install the release, you can follow the instructions in the [installation guide](/docs/installation/install.md). 

But instead the `Setting up database` section run:

```bash
php artisan migrate:fresh --seed
php artisan app:init
```

Update your `.env` file with the new APP_KEY you just copied.


## Step 3: Create a temporary database for import

To import your data from v0.x to v1.0, you need to create a temporary database:

```bash
mysql -u root -p
CREATE DATABASE paymenter_temp;
GRANT ALL PRIVILEGES ON paymenter_temp.* TO 'paymenter'@'127.0.0.1' WITH GRANT OPTION;
```

Then import your data:

```bash
mysql -u root -p paymenter_temp < paymenter.sql
```

## Step 4: Migrate old data

Now that you have your data in the temporary database, you can start changing the data to the new format, using:

```bash
php artisan app:migrate-0.x paymenter_temp
```
This command will require you to enter the password of the database user.

It will automatically get the database server info, such as `host`, `port`, and `username`, from your `.env` file.
However, if you want to manually provide these values, you can do so using the `php artisan app:migrate-0.x paymenter_temp username 127.0.0.1 3306` format.

## Step 5: Cleanup

Now that you have migrated your data, you can remove the temporary database:

```bash
mysql -u root -p
DROP DATABASE paymenter_temp;
```

Once you have removed the temporary database, you can remove the old installation folder:

```bash
rm -rf /var/www/paymenter-v0
```

## Step 6: Done

You have now successfully migrated from v0.x to v1.0. If you have any issues, please let us know by creating an issue on our [GitHub repository](https://github.com/Paymenter/Paymenter/issues).
