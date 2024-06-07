# Pterodactyl

## Overview

Pterodactyl is a free, open source game management panel which offers you a beautiful web interface to manage your game servers from anywhere, whether that be from a mobile device or a dedicated server in your office. Pterodactyl supports games and servers such as Minecraft (including Spigot, Bungeecord, and Sponge), ARK: Evolution Evolved, CS:GO, Team Fortress 2, Insurgency, Teamspeak 3, Mumble, and many more.

## Create a API key in Pterodactyl

Create a api key in the Pterodactyl panel. With the following permissions:

![image](/assets/images/extensions/pterodactyl/pterodactyl.png)

## Configure Paymenter

Insert your API key and your Pterodactyl URL in the Paymenter admin panel. Here is an example how that would look like
![image](/assets/images/extensions/pterodactyl/apikey.png)

#### Update the Pterodactyl URL in the Paymenter admin panel. Here is an example how that would look like

- Example: <https://panel.paymenter.org>

- Please note that you can NOT have a "/" at the end.

## Configuring the product

- After you have created an Product you need to go to the settings

- Fill in the product details and select the server you want to assign to the product

- Below you will see a fully functional example of Product

![image](/assets/images/extensions/pterodactyl/productsettingsexample2.png)

- #### Configurable Options

Pterodactyl supports some configurable options. You can use them to create different products with different settings. Here are the names of the configurable options:
`nest_id`, `egg`, `location`, `node`, `allocation`(ports), `databases`, `backups`, `startup`, `cpu`, `io`, `disk`, `memory`, `swap`, `servername`.

All environment from eggs are also supported. Example:`MC_VERSION`, `SERVER_JAR`

## Port Array

You want to automatticly assign ports to egg variables? We got you!

In the Paymenter extension for pterodactyl there is a field called Port Array this array supports the following value:

- `{"SERVER_PORT": 7777, "NONE": [7778, 7779] "QUERY_PORT": 2701, "RCON_PORT": 27020}`

This will try to assign 7777 as default port, 7778 and 7779 as additional ports, 2701 as query port and 27020 as rcon port.

If it can't find the port it will try to +1 the port until it finds a free port.

Egg specific examples:

- Ark - `{"SERVER_PORT": 7777, "NONE": 7778, "QUERY_PORT": 27015, "RCON_PORT": 27020}`
- CS:GO - `{"SERVER_PORT": 27015}`
- Arma 3 - `{"SERVER_PORT": 2302, "NONE": [2303, 2304, 2306]}`
- 7D2D - `{"SERVER_PORT": 26900, "NONE": [26901, 26902]}`
- Rust - `{"SERVER_PORT": 27015, "RCON_PORT": 27016}`
- Mordhau - `{"SERVER_PORT": 15000, "QUERY_PORT": "15001", "BEACON_PORT": "15002"}`
- GTA: MTA - `{"SERVER_PORT": 22003, "SERVER_WEBPORT": 22005, "NONE": 22126}`
