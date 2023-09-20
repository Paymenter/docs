1. Backup your hidden ```.env``` file containing the decryption ```APP_KEY``` from /var/www/paymenter/

2. Export the database, in this case ours is named paymenter

```mysqldump -u root -p --opt paymenter > /var/www/paymenter/panel.sql```
The .sql file would be saved in the /var/www/paymenter/ folder.

3. Follow the paymenter installation documentation to install the paymenter on your new server.

4. Transfer the paymenter.sql file to your new server and import the database. Make sure you're in the folder containing your .sql dump when performing the commands.

```mysql -u root -p paymenter < paymenter.sql```

5. After this, transfer your old .env file to the /var/www/paymenter location to complete the panel migration.
