---
aliases: ['/docs/how-to-update']
toc: true
description: How to update Paymenter
---

# How to update

## Automatic update
Run the following command in your terminal:
```bash
cd /var/www/paymenter
php artisan p:upgrade
```


## Manual update
Cd to your paymenter directory and run the following commands:
### Put the application in maintenance mode
```bash
php artisan down
```

### Download the latest version
```bash
curl -L https://github.com/paymenter/paymenter/releases/latest/download/paymenter.tar.gz | tar -xz
```

### Update the dependencies
```bash
composer install --no-dev --optimize-autoloader
```

### Set the correct permissions
```bash
chmod -R 755 storage/* bootstrap/cache/
```

### Migrate the database
```bash
php artisan migrate --force --seed
```

### Clear config and view
```bash
php artisan config:clear
php artisan view:clear
```

### Set webserver permissions
```bash
chown -R www-data:www-data /var/www/paymenter/*
```

### Remove the maintenance mode
```bash
php artisan up
```

Update is now complete!
