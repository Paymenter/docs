# PayPal

_You don't have a PayPal business account OR want a easier install? Use PayPal IPN, you'll only need your email_

## Creating a application

Head over to [PayPal developers](https://developer.paypal.com/dashboard/applications) and press "Create App"

![Create App](/versions//main/assets/images/extensions/paypal/create-app.png)

Fill in the required details and press Create App

Take note of the _Client ID_ and the _Secret Key_

## Creating the webhook

Scroll down to Webhooks and press add Webhook

Fill in yourDomain /extensions/paypal/webhook

Be sure to replace yourDomain with your Paymenter domain (e.g. <https://demo.paymenter.org>)

Tick the all events box and continue

![Create Webhook](/versions//main/assets/images/extensions/paypal/create-webhook.png)

Take note of the _Webhook ID_ we'll need it in the next step

## Filling in the credentials on Paymenter

Fill in the details given in the previous steps

![Paymenter](/versions//main/assets/images/extensions/paypal/paymenter.png)
