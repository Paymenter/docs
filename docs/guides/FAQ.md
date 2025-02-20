# FAQ

::: details CSS assets are not loading
This is often related to a wrong app url in the database. You can fix this by running the following command:

```bash
php artisan app:settings:change app_url
```

:::

::: details I changed the theme and now its throwing an error

This can have a few reasons. The most common is that you didn't follow the installation guide correctly.
To revert back to the default theme you can run the following command:

```bash
php artisan app:settings:change theme
```

:::

::: details How to configure a proxy (Cloudflare etc)

Navigate to the Paymenter admin panel and go to the settings page. On the Security tab you can fill in the ips of your proxy server.

:::