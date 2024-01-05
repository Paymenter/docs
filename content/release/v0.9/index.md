# v9.0 Features

## Category Features:

- Subcategory's.
- Images on category.
![Subcategory](v0.9-subcategory-imagesoncategory.png)

## [NEW FEATURE] Subscriptions

- The ability for users to subscribe to your product so that it automatically charges them.

## [NEW FEATURE] Taxes:

- The abillity to set a tax rate for each country and define wether it is applied inclusive or exclusive of the current price.
![Taxes](v0.9-taxes.png)


## Ticket Changes:

- Live adding of new messages.
- Fixed that you can nolonger reopen a ticket when it was closed.

## Extension Changes:

- You can now define if your checkout gateway is available for this current invoice/checkout ( `canUse($total, $products)` )
- Added port array to pterodactyl extension (Usefull if you sell a (game) server that requires multiple ports)
- Added SSO to virtualizor

## Command Adittions:

- MakeTheme

## Register/Checkout Requirements:

- The ability to require certain information before a user is able to checkout / register.
![Login](v0.9-register-requiredinfo.png)

## [NEW BETA FEATURE] Upgrade / Downgrade functionality (only available for pterodactyl)

- The abiliy for clients to upgrade / downgrade their product
![Upgrade](v0.9-upgrade.png)

## [NEW FEATURE] Close / Cancel Button

- The ability for clients to close / cancel their product/subscription
![Cancel](v0.9-cancel2.png)

## Frontend Changes:

- Small changes to the frontend ui of the admin panel. (overview)
- Added breadcrumbs. (easier navigation)
- Livewire checkout. (Live updating of price and total)
- Tables live update.
- Tables are now paginated in backend

## Additional Changes

- Changed languages input to select,
- Cronjob runs once a day instead of every minute
- Added error logging inside paymenter

## Bug Fixes:

- View https://github.com/Paymenter/Paymenter/compare/v0.8.2...v0.9
