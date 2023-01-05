---
sidebar_position: 6
---

# Cronjob

Crontab Configuration
The first thing we need to do is create a new cronjob that runs every minute to process specific Paymenter tasks. You'll want to open your crontab using `sudo crontab -e` and then paste the line below.
```bash
* * * * * php /var/www/paymenter/artisan schedule:run >> /dev/null 2>&1
```