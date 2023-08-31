---
toc: true
---
# How to create a gateway extension

### Step 1: Create a new folder
First create a new folder in the `app/Extensions/Gateways` directory. The name of the folder will be the name of the extension.

### Step 2: Create a new file with the same name as the folder
Create a new file with the same name as the folder in the folder you created in the previous step. This file will contain the extension's information and functions.

### Step 3: Add the extension's information
Add the first public function named `getConfig`. This function returns the possible settings for the extension when you enter them in the panel

#### Example:
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



### Step 4: Add the pay function
This can be done by adding a public function called `pay` to the file. 

This function should return the payment URL. The following information is attached to the function:

- `total`: The total amount of the payment.
- `products`: The products of the payment. Using model Order_Products
- `orderId`: The ID of the order.

#### Example:
```php
public function pay($total, $products, $orderId) 
    {
        $stripe = $this->stripeClient();
        $order = $this->getUrl($total, $products, $orderId);
    
        return $stripe->checkout->sessions->retrieve($order->id, [])->url;
    }
```

*The getUrl function is not required, it is just added to make the code easier to understand*
```php
public function getUrl($total, $products, $orderId)
    {
        $client = $this->stripeClient();
        // Create array with all the products
        $items = [];
        foreach ($products as $product) {
            $items[] = [
                'price_data' => [
                    'currency' => ExtensionHelper::getCurrency(),
                    'product_data' => [
                        'name' => $product->name,
                    ],
                    'unit_amount' => round($product->price / $product->quantity * 100, 0)
                ],
                'quantity' => $product->quantity,
            ];
        }
        $order = $client->checkout->sessions->create([
            'line_items' => $items,
            'mode' => 'payment',
            'success_url' => route('clients.invoice.show', $orderId),
            'cancel_url' => route('clients.invoice.show', $orderId),
            'customer_email' => auth()->user()->email,
            'metadata' => [
                'user_id' => auth()->user()->id,
                'order_id' => $orderId,
            ],
        ]);

        return $order;
    }
```

### Step 5: Add the webhook function (optional)
If your gateway requires a webhook, you can create a file called `routes.php` in the folder you created in the previous step. This file will contain the webhook's route.

#### Example:
```php
Route::post('/stripe/webhook', [App\Extensions\Gateways\Stripe\Stripe::class, 'webhook']);
```

#### Example webhook function in php file:
```php
public function webhook(Request $request)
    {
        $payload = $request->getContent();
        $sig_header = $request->header('stripe-signature');
        $endpoint_secret = ExtensionHelper::getConfig('Stripe', 'stripe_webhook_secret');
        $event = null;

        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload,
                $sig_header,
                $endpoint_secret
            );
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            http_response_code(400);
            exit;
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            // Invalid signature
            http_response_code(400);
            exit;
        }
        if ($event->type == 'checkout.session.completed') {
            $order = $event->data->object;
            $order_id = $order->metadata->order_id;
            ExtensionHelper::paymentDone($order_id, 'Stripe', $order->payment_intent);
        }
    }
```

You can find the finished extension in the [GitHub Repository](https://github.com/Paymenter/Paymenter/tree/master/app/Extensions/Gateways/Stripe)
