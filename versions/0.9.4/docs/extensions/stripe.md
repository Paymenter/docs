# Stripe

## Overview

Stripe is a payment gateway that allows you to accept many different payment methods. It is a very popular payment gateway and is used by many companies.

[Website](https://stripe.com)

## Create a API key in Stripe

Go to the [Stripe dashboard](https://dashboard.stripe.com/apikeys) and reveal your secret key. Copy the key and insert it in the Paymenter admin panel.

![image](/versions/0.9.4/assets/images/extensions/stripe/stripe.png)

## Configure stripe webhook

Go to the [Developers tab –> Webhooks](https://dashboard.stripe.com/test/webhooks) and click "Add endpoint". \
In the **Endpoint URL** field, type `ENTER YOUR PANEL URL HERE/extensions/stripe/webhook`

It should look about like this:
![image](/versions/0.9.4/assets/images/extensions/stripe/2.png)

Then click “Select events” and select all of them, after doing this you can click "Add endpoint"

After doing this you will see the webhook information page, under “Signing secret” there will be a "Reveal" button, click it and copy the webhook secret, then paste it into the Paymenter panel

![image](/versions/0.9.4/assets/images/extensions/stripe/3.png)

### That's all

You can now use Stripe as a payment gateway for your products.
