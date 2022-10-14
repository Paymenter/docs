---
sidebar_position: 3
description: How to setup the config locally, and start a Paymenter site in no time.
---
# Setting up the config

## Locate the config file
:::caution Before you continue


If everything went well during the [installation](../category/installation), there should be a file in the root directory called: `.env.example`.
Copy this file and rename it to `.env`. with the following command:

```bash
cp .env.example .env
```


:::

## Edit the env file
### Edit mail settings
Open the `.env` file and edit the following lines:

```bash
MAIL_MAILER=
MAIL_HOST=
MAIL_PORT=
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=
```
Be sure to fill in the correct information for your mail server.


## Problems? {#problems}

Ask for help on our [GitHub repository](https://github.com/paymenter), or our [Discord server](https://discord.gg/xB4UUT3XQg)