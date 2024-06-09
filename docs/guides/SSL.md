# Creating SSL Certificates

Our guide to creating SSL Certificates

## Step 1: Installing Certbot

First we need to install certbot

::: code-group

```bash [Nginx]
sudo apt install -y python3-certbot-nginx
```

```bash [Apache]
sudo apt install -y python3-certbot-apache
```

```bash [Other]
sudo apt install -y certbot
```

:::

## Step 2: Creating the Certificate

Then we are going to create the certificate

### Step 1: Stopping the webserver

> [!IMPORTANT]
> Make sure you are not running anything on port 80 if you are running anything on port 80 certbot will not work. You can check this by running: ```sudo lsof -i :80```

::: code-group

```bash [Nginx]
sudo systemctl stop nginx
```

```bash [Apache]
sudo systemctl stop apache2
```

:::

### Step 2: Creating the certificate

> [!IMPORTANT]
> Make sure to replace example.com with the domain name you want to use.

::: code-group

```bash [Nginx]
certbot certonly --nginx -d example.com
```

```bash [Apache]
certbot certonly --apache -d example.com
```

```bash [Other]
certbot certonly --standalone -d example.com
```

:::

## Renewing

And now you are done. The certificates will however need to be renewed often. You can do this manualy by running ```certbot renew``` or you can setup a cronjob to do it for you:

> [!IMPORTANT]
> Make sure to replace nginx with the webserver that you are using.

```bash
(crontab -l ; echo "0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx") | crontab -
```
