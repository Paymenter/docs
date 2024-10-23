# Configurable Options

Configurable options are a powerfull feature which lets your client customize their product. You can create configurable options for any product.

## How to create a configurable option

In this guide we'll create a configurable option for a Pterodactyl server. The configurable option will allow the client to select the type of server they want to order.

## Step 1: Create the configurable option

First we need to create a category for the configuration and select the products we want to offer the choices upon checkout. We do this by filling in the following form:

![image](/assets/images/guides/config-options/configurable-options-overview.png)

It is important to set the `Name` to what you want to be displayed towards your clients. In the example we have chosen for `Server Type`

Now we need to provide an propperty that we want to change. In the example we have chosen for `egg`
For a full list of names checkout the [Pterodactyl guide](../extensions/pterodactyl.md)


## Step 2: Making Inputs

Now we need to create the inputs for the configurable option. Click on `Options`.
In the example we want an option for Paper. Click on `Add Option` and fill in the form.
The `Name` variable is once again what is shown to your client upon reaching the configurable options window!
The `Environment Variable` is used to overwrite server setting variables, in this case the egg id.

![image](/assets/images/guides/config-options/configurable-options-config.png)

## Step 3: Updating Pricing

In case we want to add an aditional charge for the changed option you can click on `pricing` to extend the window.
Here you can set a `Name` Which is shown to your client examples of this could be: `Free`, `Monthly`, `Yearly`
In the same window you can pick between a number of options like: `Free`, `Recurring` and `One Time`.
When selecting `Recurring` a number of variables pop up like: `Time Interval` pop up. This is the amount of `Days`, `Weeks`, `Months` or `Years` should go by before charging the user again which is chosen in the `Billing Period` box.
