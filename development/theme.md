# Creating your own Theme

Creating your own theme sounds complicated but we have tried to reduce the time needed to a minimum so you can go right ahead and start making your own theme.

## Prerequisites

For now here are some requirements we think are neccesary for you to start making your own theme:

- A working Paymenter installation
- Knowledge of HTML, CSS (Optionally PHP)

## Create a theme

Creating a theme is actually very simple.

## Step 1

first of all you want to open a shell and type in this command:
```shell
php artisan p:make-theme
```

## Step 2

Now you will be guided by the CLI to create your own Theme.
This Step only requires you to type in the input into the shell like the example does below.


![custom-theme](https://github.com/user-attachments/assets/8b6980e7-9e46-4032-8c62-76cc0b57733b)


## Advanced

If you want to make the most out of your installation we recommend you look a bit into the steps below.

### Folder structure

You can find all the files you can edit in the `themes` folder. Checkout [this](https://github.com/Paymenter/Paymenter/tree/master/themes/default) folder for an example.

You can also customize extensions views you can make a folder in your views folder with the name `vendor`.

Normally extensions would use the format `<extension-type>.<extension-name>.<view-name>`. For example, the Stripe pay modal is `gateways.stripe::pay`. You can edit this view by creating a file in your views folder with the name `vendor/gateways/stripe/pay.blade.php`.
