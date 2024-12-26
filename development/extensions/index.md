# Extensions

## Introduction

Extensions are a powerfull way to extend the functionality of the system. You can create extensions to add new features to the system. You can create extensions for the following:

- [Gateways](#gateways)
- [Servers](#servers)
- [Other](#other) (anything that does not fit into the above categories)

You can run the following command to create a new extension:

```bash
php artisan app:extension:create
```

If you ever need to disable an extension and that is not possible from the admin panel, you can run the following command:

```bash
php artisan app:extension:disable
```


## Admin Pages

Adding a new admin page to Paymenter is easy due to the versatile Filament framework.

Click [this](https://filamentphp.com/docs/3.x/panels/pages) to learn how to create a new admin page.
You can also create resources for controlling models. Click [this](https://filamentphp.com/docs/3.x/panels/resources/getting-started) to learn how to create a new resource.

Make sure to select your extension path when asked.

## Configs

Every extension can have its own configuration. You can add a configuration via the `getConfig` function.

Example:

```php
public function getConfig($values = [])
{
    return [
        [
            'name' => 'host',
            'label' => 'Pterodactyl URL',
            'type' => 'text',
            'default' => 'https://example.com/',
            'description' => 'Pterodactyl URL',
            'required' => true,
            'validation' => 'url',
        ],
        [
            'name' => 'location',
            'label' => 'Location',
            'type' => 'select',
            'default' => '1',
            'description' => 'Location your node is in?',
            'required' => true,
            'options' => [
                '1' => 'Location 1',
                '2' => 'Location 2',
            ],
        ]
    ];
}
```

The following values are supported

| Name | Description | Type | Required |
| --- | --- | --- | --- |
| name | The name of the field. This will be used to get the value of the field. | string | true |
| label | The label of the field. This will be used to display the name of the field. | string | true |
| type | The type of the field. This can be `select`, `tags`, `text`, `textarea`, `markdown`, `password`, `email`, `number`, `color`, `file`, `checkbox` and `placeholder`. (getCheckoutConfig only supports `select`, `radio`, `text`, `password`, `number` and `checkbox`) | string | true |
| default | The default value of the field. | string | false |
| description | The description of the field. This will be used to display the description of the field. | string | false |
| required | Whether the field is required or not. | boolean | false |
| validation | Laravel validation rules. | string | false |
| options | The options of the field. This is only required when the type is `select`. This should be an array with the options. The key of the option should be the value of the option and the value of the option should be the name of the option. e.g. `['option1' => 'Option 1', 'option2' => 'Option 2']` | array | false |
| disabled | Whether the field is disabled or not. | boolean | false |

## Lifecycle Hooks

You can use the following lifecycle hooks to run code at different stages of the extension lifecycle, all hooks have the extension instance as the first parameter.

- `boot` - Runs when the extension is booted (only when the extension is enabled), e.g. registering routes
- `enabled` - Runs when the extension is enabled, e.g. running migrations
- `disabled` - Runs when the extension is disabled, e.g. removing migrations
- `updated` - Runs when the extension is updated, e.g. creating remote hooks

## Routes, Views etc

You can register routes and views in the `boot` function of the extension.

Here is a simple example:

```php
use App\Helpers\ExtensionHelper;
use Paymenter\Extensions\Others\Example\Middleware\ExampleMiddleware;
    public function boot()
    {
        // Register routes
        require __DIR__ . '/routes/web.php';
        // Register views
        View::addNamespace('extension', __DIR__ . '/resources/views');

        // Register middleware (web is used for all routes)
        ExtensionHelper::registerMiddleware('web', ExampleMiddleware::class);
    }
```

## Gateways

Gateways are used to process payments. You can create a gateway to add a new payment method to the system.

Read [this](gateway.md) to learn how to create a gateway.

## Servers

Servers are used to create servers in a panel such as pterodactyl. You can create a server to add a new server type to the system.

Read [this](server.md) to learn how to create a server.

## Other

Any extension that does not fit into the above categories can be created as an "Other" extension.
For example, you can create an extension to add announcements to the system.

