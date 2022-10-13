---
sidebar_position: 3
description: How to setup the config locally, and start a Paymenter site in no time.
---
# Setting up the config

## Locate the config file
<!-- :::info & :::caution & :::note & :::warning / danger :::tip  -->

:::caution Before you continue


If everything went well during the [installation](../category/installation), there should be a file in the root directory called: `.env.example`.

If not, do this manually by making a file called:
`.env.example`.
:::


```md title=".env.example"
APP_NAME=Laravel                        <!-- Default: Laravel -->
APP_ENV=local
APP_KEY=                                <!-- Your app key. -->
APP_DEBUG=true                          <!-- Wether you would like to debug or not. -->
APP_URL=http://localhost                <!-- This should be localhost, or if you portforwarded the needed IP. -->

LOG_CHANNEL=stack                       <!-- Your stack channel where to log. -->
LOG_DEPRECATIONS_CHANNEL=null 
LOG_LEVEL=debug                         <!-- Your prefered level of logs. -->

DB_CONNECTION=mysql                     <!-- Your database connection (For e.g mysql or mongodb). -->
DB_HOST=127.0.0.1                       <!-- Host adress of the database. (Use 127.0.0.1 for localhost). -->
DB_PORT=3306                            <!-- MYSQL port. (Default: 3306). -->
DB_DATABASE=laravel                     <!-- Name of the database. -->
DB_USERNAME=root                        <!-- Database username. -->
DB_PASSWORD=                            <!-- Your database password of the given user. 
                                             Leave blank for no password.  -->

BROADCAST_DRIVER=log                    <!--  -->
CACHE_DRIVER=file                       <!--  -->
FILESYSTEM_DISK=local                   <!--  -->
QUEUE_CONNECTION=sync                   <!--  -->
SESSION_DRIVER=file                     <!--  -->
SESSION_LIFETIME=120                    <!--  -->

MEMCACHED_HOST=127.0.0.1                <!--  -->

REDIS_HOST=127.0.0.1                    <!-- Your database address of Redis (Use 127.0.0.1 for localhost). -->
REDIS_PASSWORD=null                     <!-- Your Redis password. (Leave 'null' for no password). -->
REDIS_PORT=6379                         <!-- Redix port (Default: 6379). -->

MAIL_MAILER=smtp                        <!-- Your prefered protocol (For e.g: smtp). -->
MAIL_HOST=mailhog                       <!-- Your mail host. -->
MAIL_PORT=1025                          <!-- Your mail port. -->
MAIL_USERNAME=null                      <!-- Your mail username (Leave 'null' for no username). -->
MAIL_PASSWORD=null                      <!-- Your mail password of the given user.
                                             Leave 'null' for no password. -->

MAIL_ENCRYPTION=null                    <!-- Your prefered mail encryption. (Leave null for no encryption). -->
MAIL_FROM_ADDRESS="hello@example.com"   <!-- Your prefered mail address (For e.g 'hello@paymenter.org'). -->
MAIL_FROM_NAME="${APP_NAME}"            <!-- The 'mail from' name -->

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=                          <!--  -->
PUSHER_APP_KEY=                         <!--  -->
PUSHER_APP_SECRET=                      <!--  -->
PUSHER_HOST=                            <!--  -->
PUSHER_PORT=443                         <!--  -->
PUSHER_SCHEME=https                     <!--  -->
PUSHER_APP_CLUSTER=mt1                  <!--  -->

VITE_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
VITE_PUSHER_HOST="${PUSHER_HOST}"
VITE_PUSHER_PORT="${PUSHER_PORT}"
VITE_PUSHER_SCHEME="${PUSHER_SCHEME}"
VITE_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
```
:::danger


Before you start up Paymenter you must first change the `.env.example` file to a public filename called: `.env`
- `.env.example` → `.env`

:::

## Problems? {#problems}

Ask for help on our [GitHub repository](https://github.com/paymenter), or our [Discord server](https://discordapp.com/invite/docusaurus)