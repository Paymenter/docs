# Server extensions

The server extensions have a few hooks that you can use to setup the server.

You can also use [routes](index.md#routes-views-etc) and [views](index.md#routes-views-etc) in the server extension.

## `getProductConfig`

Shown to the admin when configuring the product.

```php
public function getProductConfig($values = [])
{
    return [
        [
            'name' => 'ram',
            'label' => 'Ram',
            'type' => 'number',
            'required' => true,
            'default' => 1024,
            'description' => 'The amount of ram in MB',
        ],
    ];
}
```

## `getCheckoutConfig`

Shown to the user when they are checking out.

```php
use App\Models\Product;

/**
 * Get the checkout configuration for the product.
 * 
 * @param Product $product The product that is being checked out.
 * @param array $values The values that are provided by the user.
 * @param array $settings The settings that are provided on the product from `getProductConfig`.
 */
public function getCheckoutConfig(Product $product, $values = [], $settings = [])
{
    return [
        [
            'name' => 'location',
            'label' => 'Location',
            'type' => 'select',
            'required' => true,
            'options' => [
                '1' => 'Location 1',
                '2' => 'Location 2',
            ],
        ]
    ];
}
```

## `createServer`, `suspendServer`, `unsuspendServer`, `terminateServer`, `upgradeServer`

These hooks are used to create, suspend, unsuspend, terminate and upgrade the server.

Have 3 parameters:

- `Service $service` - The service that is being created, suspended, unsuspended or terminated.
- `$settings` - The settings that are provided on the product from `getProductConfig`.
- `$properties` - Custom properties created by the admin and values coming from `getCheckoutConfig`.

```php
use App\Models\Service;

/**
 * Create a server for the service.
 * 
 * @param Service $service The service that is being created.
 * @param array $settings The settings that are provided on the product from `getProductConfig`.
 * @param array $properties Custom properties created by the admin and values coming from `getCheckoutConfig`.
 */
public function createServer(Service $service, $settings, $properties)
{
    // Create the server
}
```

## `getActions`

This hook is used to add actions to the service show page.

It supports both views and buttons.

```php
public function getActions(Service $service)
{
    return [
        [
            'name' => 'control_panel',
            'label' => 'Go to control panel',
            'url' => 'https://panel.paymenter.org',
            'type' => 'button',
        ],
        [
            'name' => 'console',
            'label' => 'Go to console',
            'type' => 'view',
        ],
    ];
}
```

Having a time sensistive url? Then you can use the function argument to generate the url.

```php
public function getActions(Service $service)
{
    return [
        [
            'name' => 'control_panel',
            'label' => 'Go to control panel',
            'function' => 'getControlPanelUrl',
            'type' => 'button',
        ],
        [
            'name' => 'console',
            'label' => 'Go to console',
            'type' => 'view',
            'function' => 'getView', // If this function is not provided, we will use the function `getView` to render the view.
        ],
    ];
}

public function getControlPanelUrl(Service $service)
{
    return 'https://panel.paymenter.org/' . $service->id;
}

public function getView(Service $service, $settings, $properties, $view)
{
    return view('extension::' . $view, ['service' => $service]);
}
```
