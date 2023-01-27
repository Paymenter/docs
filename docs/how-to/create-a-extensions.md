# Extension

## Gateway  

### Step 1: Create a new folder
First create a new folder in the `app/Extensions/Gateways` directory. The name of the folder will be the name of the extension.

### Step 2: Create a new file called `index.php`
Create a new file called `index.php` in the folder you created in the previous step. This file will contain the extension's information and functions.

### Step 3: Add the extension's information
Add the extension's information to the `index.php` file. This can be done by adding a function called `{yourExtensionName}_getConfig` to the file. This function should return an array with the extension's information. The following information is required:

Example
```php
function Example_getConfig()
{
    return [
        [
            "name" => "api_key",
            "friendlyName" => "API Key",
            "type" => "text",
            "required" => true
        ],
        [
            "name" => "environment",
            "friendlyName" => "Whether to use the live or development environment",
            "type" => "dropdown",
            "required" => true,
            "options" => [
                [
                    "name" => "Live",
                    "value" => "live"
                ],
                [
                    "name" => "Development",
                    "value" => "development"
                ]
            ]
        ],
    ];
}
```

- `name`: The name of the field. This will be used to get the value of the field.
- `friendlyName`: The friendly name of the field. This will be used to display the name of the field.
- `type`: The type of the field. This can be `text`, `boolean`, `dropdown`.
- `required`: Whether the field is required or not. This can be `true` or `false`.

- `options`: The options of the field. This is only required when the type is `dropdown`. This should be an array with the options. The key of the option should be the value of the option and the value of the option should be the name of the option.


### Step 4: Add the pay function
Add the pay function to the `index.php` file. This can be done by adding a function called `{yourExtensionName}_pay` to the file. 

This function should return the payment URL. The following information is attached to the function:

- `total`: The total amount of the payment.
- `products`: The products of the payment. Using model Order_Products
- `orderId`: The ID of the order.

Example
```php
function Example_pay($total, $products, $orderId)
{
    // Do something with the information
    return "https://example.com/pay";
}
```

### Step 5: Add the webhook function (optional)
If your gateway requires a webhook, you can create a file called `routes.php` in the folder you created in the previous step. This file will contain the webhook's route.

Example
```php
Route::post('/webhook', function () {
    // Do something with the webhook
});
```