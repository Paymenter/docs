# Theme

Creating a theme is really easy. We will show you how to create a theme in this guide.

## Prerequisites

- A working Paymenter installation
- Knowledge of HTML, CSS

## Create a theme

You can either copy the default folder or create one from scratch (if you want to use something else then tailwindcss).

## Folder structure

You can find all the files you can edit in the `themes` folder. Checkout [this](https://github.com/Paymenter/Paymenter/tree/master/themes/default) folder for an example.

You can also customize extensions views you can make a folder in your views folder with the name `vendor`.

Normally extensions would use the format `<extension-type>.<extension-name>.<view-name>`. For example, the Stripe pay modal is `gateways.stripe::pay`. You can edit this view by creating a file in your views folder with the name `vendor/gateways/stripe/pay.blade.php`.
