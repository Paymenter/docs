# Pterodactyl

#### Step 1: Pterodactyl API

##### Create a API key in Pterodactyl using the following permissions

![image](pterodactyl.png)

##### Copy the API key and paste it in the Paymenter admin panel. Here is an Example how that would look like

![image](apikey.png)

#### Step 2: Insert your Panel URL

* ##### Example: <https://panel.paymenter.org>

* Please note that you dont need a "/" at the end cause this breaks the System currently.

#### Step 3: Product settings

* #####  After you have created an Product you need to go to the settings

* ##### Fill in the product details and select the server you want to assign to the product

* ##### Below you will see a fully functional Example of Product

![image](productsettingsexample.png)

* #### Configurable Options (> 0.7)

Pterodactyl supports some configurable options. You can use them to create different products with different settings. Here are the names of the configurable options:
`nest`, `egg_id`, `location`, `node`, `allocation`(ports), `location`, `databases`, `backups`, `startup`, `cpu`, `io`, `disk`, `memory`, `swap`.

All environment from eggs are also supported. Example:`MC_VERSION`, `SERVER_JAR`
