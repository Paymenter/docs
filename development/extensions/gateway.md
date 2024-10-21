# Gateway extensions

The gateway extensions have a few hooks that you can use to process payments.

You can also use [routes](index.md#routes-views-etc) and [views](index.md#routes-views-etc) in the gateway extension.

## `canUseGateway`

This hook is used to check if the gateway can be used. This can be used to check if the gateway is enabled, if the user has permission to use the gateway etc.

```php
public function canUseGateway($items, $type)
{
    // Check if the user can use the gateway
    return true;
}
```

`$items` is either a list of `InvoiceItem` or a array with a `Product`, `Price` and `Quantity`.

`$type` is either `invoice` or `cart`.

## `pay`

This hook is used to process the payment.

```php
public function pay(Invoice $invoice, $total)
{
    // Process the payment
}
```

`$invoice` is the invoice that is being paid.

`$total` is the total amount that needs to be paid. (This can be the total amount of the invoice or a part of the total amount)

