# Convoy

## Overview

## Create a API key in Convoy

Create a api key in the Convoy panel. Give it a name like "Paymenter" and press the `Create` button.

![image](/assets/images/extensions/convoy/api_key_creation.png)

Copy the key and save it somewhere safe, you will need it later.

![image](/assets/images/extensions/convoy/api_key_created.png)

## Configure Paymenter

Insert your API key and your Convoy URL in the Paymenter admin panel.

![image](/assets/images/extensions/convoy/server_settings.png)

Press `Test Connection` to see if the connection is working.

## Configuring the product

- After you have created a product you need to go to the settings

- Fill in the product details and select the server you want to assign to the product

- Below you will see a fully functional example of a Product

![image](/assets/images/extensions/convoy/product.png)

### Sending the IP and Password via Email

You can send the IP and Password to the customer via email. Fill in the email template in the product settings.

Here is a eaxmple of a email template:

```
@isset($server['limits']['addresses']['ipv4'][0]['address'])
- IP Address: {{ $server['limits']['addresses']['ipv4'][0]['address'] }}
@endisset
- Root password: {{ $password }}
```