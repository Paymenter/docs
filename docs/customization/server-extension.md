# How to create a server extension

## Step 1: Create a new extension
Create a new extension using the CLI command `php artisan p:extension:create` and follow the instructions

## Step 2: Add the extension's information
Add the first public function named `getConfig`. This function returns the possible settings for the extension when you enter them in the panel

### Example:
```php
public function getConfig()
    {
        return [
            [
                'name' => 'host',
                'friendlyName' => 'Pterodactyl panel url',
                'type' => 'text',
                'required' => true,
            ],
            [
                'name' => 'apiKey',
                'friendlyName' => 'API Key',
                'type' => 'text',
                'required' => true,
            ],
        ];
    }
```

You can see what the settings mean [here](#configs-follow-the-following-structure).

## Step 3: Add a product configuration function
This can be done by adding a public function called `getProductConfig` to the file. This function should return an array with the product configuration.

### Example:
```php
public function getProductConfig($options)
    {
        return [
            [
                'name' => 'location',
                'friendlyName' => 'Pterodactyl Location',
                'type' => 'dropdown',
                'options' => [
                    [
                        'name' => 'Location 1',
                        'value' => 1
                    ]
                ],
                'required' => true,
            ],
        ];
    }
```

You can see what the settings mean [here](#configs-follow-the-following-structure).

## Step 4: Add the create function
This can be done by adding a public function called `createServer` to the file.

$user = The user who created the server
$parmas = The parameters of the server, this also includes the configuration if getUserConfig is used. ($parmas['config'])
$order = The order of the server
$product = The product of the server
$configurableOptions = The configurable options of the server

```php
public function createServer($user, $parmas, $order, $product, $configurableOptions)
{
    // Do something with the information e.g. create a server
}
```

## Step 5: Add the suspend function
This can be done by adding a public function called `suspendServer` to the file.

$user = The user who created the server
$parmas = The parameters of the server, this also includes the configuration if getUserConfig is used. ($parmas['config'])
$order = The order of the server
$product = The product of the server
$configurableOptions = The configurable options of the server


```php
public function suspendServer($user, $params, $order, $product, $configurableOptions)
{
    // Do something with the information e.g. suspend a server
}
```

## Step 6: Add the unsuspend function
This can be done by adding a public function called `unsuspendServer` to the file.

$user = The user who created the server
$parmas = The parameters of the server, this also includes the configuration if getUserConfig is used. ($parmas['config'])
$order = The order of the server
$product = The product of the server
$configurableOptions = The configurable options of the server


```php
public function unsuspendServer($user, $params, $order, $product, $configurableOptions)
{
    // Do something with the information e.g. unsuspend a server
}
```

## Step 7: Add the terminate function
This can be done by adding a public function called `terminateServer` to the file.

$user = The user who created the server
$parmas = The parameters of the server, this also includes the configuration if getUserConfig is used. ($parmas['config'])
$order = The order of the server
$product = The product of the server
$configurableOptions = The configurable options of the server

```php
public function terminateServer($user, $params, $order, $product, $configurableOptions)
{
    // Do something with the information e.g. terminate a server
}
```

## Step 8: Add the getUserConfig function (optional)

This can be done by adding a public function called `getUserConfig` to the file.

You can see what the settings mean [here](#configs-follow-the-following-structure).

## Step 9: Add the getLink function (optional)

This is a function that returns a link to a service in a panel such as pterodactyl. If the function returns a link it will be displayed in the panel. This can be done by adding a public `getLink` function to the php file

$product = The product of the server

```php
public function getLink($product)
{
    // Do something with the information e.g. return the link to the server
}
```

## Configs follow the following structure:

This works for both gateways and payment methods. 

Functions: getConfig, getProductConfig, getUserConfig

```php
[
    [
        'name' => 'host',
        'friendlyName' => 'Pterodactyl panel url',
        'type' => 'text',
        'required' => true,
    ],
    [
        'name' => 'apiKey',
        'friendlyName' => 'API Key',
        'type' => 'text',
        'required' => true,
    ],
];
```

- `name`: The name of the field. This will be used to get the value of the field.
- `friendlyName`: The friendly name of the field. This will be used to display the name of the field.
- `description`: The description of the field. This will be used to display the description of the field. This is optional.
- `type`: The type of the field. This can be `text`, `boolean`, `dropdown`.
- `required`: Whether the field is required or not. This can be `true` or `false`.

- `options`: The options of the field. This is only required when the type is `dropdown`. This should be an array with the options. The key of the option should be the value of the option and the value of the option should be the name of the option.

