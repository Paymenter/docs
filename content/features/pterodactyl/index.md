---
toc: true
---
# Pterodactyl

## Overview
Pterodactyl is a free, open source game management panel which offers you a beautiful web interface to manage your game servers from anywhere, whether that be from a mobile device or a dedicated server in your office. Pterodactyl supports games and servers such as Minecraft (including Spigot, Bungeecord, and Sponge), ARK: Evolution Evolved, CS:GO, Team Fortress 2, Insurgency, Teamspeak 3, Mumble, and many more.

## Setup with Paymenter
### Create a API key in Pterodactyl
Create a api key in the Pterodactyl panel. With the following permissions:

![image](pterodactyl.png)

### Configure Paymenter
Insert your API key and your Pterodactyl URL in the Paymenter admin panel. Here is an example how that would look like
![image](apikey.png)

### Update the Pterodactyl URL in the Paymenter admin panel. Here is an example how that would look like

* Example: https://panel.paymenter.org

* Please note that you dont need a "/" at the end.

### Configuring the product

* After you have created an Product you need to go to the settings

* Fill in the product details and select the server you want to assign to the product

* Below you will see a fully functional example of Product

![image](productsettingsexample.png)

* #### Configurable Options (> 0.7)

Pterodactyl supports some configurable options. You can use them to create different products with different settings. Here are the names of the configurable options:
`nest_id`, `egg_id`, `location`, `node`, `allocation`(ports), `location`, `databases`, `backups`, `startup`, `cpu`, `io`, `disk`, `memory`, `swap`.

All environment from eggs are also supported. Example:`MC_VERSION`, `SERVER_JAR`
