# How to create a gateway extension

## Step 1: Create a new folder

Create a new extension using the CLI command `php artisan p:extension:create` and follow the instructions

## Step 2: Add the extension's information

Edit the first public function named `getConfig`. This function returns the possible settings for the extension when you enter them in the panel

### Example

```php
public function getConfig()
    {
        return [
            [
                'name' => 'stripe_secret_key',
                'friendlyName' => 'Stripe Secret Key',
                'type' => 'text',
                'description' => 'Stripe secret key',
                'required' => true,
            ],
            [
                'name' => 'stripe_webhook_secret',
                'friendlyName' => 'Stripe webhook secret',
                'type' => 'text',
                'description' => 'Stripe webhook secret',
                'required' => true,
            ],
            [
                'name' => 'stripe_test_mode',
                'friendlyName' => 'Stripe test mode',
                'type' => 'boolean',
                'description' => 'Stripe test mode',
                'required' => false,
            ],
            [
                'name' => 'stripe_test_key',
                'friendlyName' => 'Stripe test key',
                'type' => 'text',
                'description' => 'Stripe test key',
                'required' => false,
            ],
        ];
    }
```

- `name`: The name of the field. This will be used to get the value of the field.
- `friendlyName`: The friendly name of the field. This will be used to display the name of the field.
- `description`: The description of the field. This will be used to display the description of the field. This is optional.
- `type`: The type of the field. This can be `text`, `boolean`, `dropdown`.
- `required`: Whether the field is required or not. This can be `true` or `false`.

- `options`: The options of the field. This is only required when the type is `dropdown`. This should be an array with the options. The key of the option should be the value of the option and the value of the option should be the name of the option.

## Step 3: Add the pay function

This can be done by editing a public function called `pay` to the file.

This function should return the payment URL. The following information is attached to the function:

- `total`: The total amount of the payment.
- `products`: The products of the payment. Using model Order_Products
- `orderId`: The ID of the order.

### Example

```php
public function pay($total, $products, $orderId) 
    {
        // Your logic to redirect to a url
    }
```

## Step 4: Add the webhook function (optional)

If your gateway requires a webhook, you can create a file called `routes.php` in the folder you created in the previous step. This file will contain the webhook's route.

### Example

```php
Route::post('/stripe/webhook', [App\Extensions\Gateways\Stripe\Stripe::class, 'webhook']);
```

### Example webhook function in php file

```php
public function webhook(Request $request)
    {
        // Your handler to validate the request
    }
```
