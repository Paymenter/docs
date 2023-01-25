# A theme

Creating a theme is really easy. We will show you how to create a theme in this guide.

## Prerequisites
- A working Paymenter installation
- Knowledge of HTML, CSS 

## Create a theme
### Step 1: Create a new folder
Create a new folder in the `themes` folder. The name of the folder will be the name of your theme.

### Step 2: Edit the files you want to edit
Check below for the folder structure of a theme.












## Folder structure
```
themes
└───my-theme
    │
    └───views
        ├── welcome.blade.php
        ├── product.blade.php 
        ├── layouts
        │    ├── app.blade.php 
        │    ├── navigation.blade.php
        │    ├── sidenavigation.blade.php
        │    ├── guest.blade.php 
        │    ├── admin.blade.php
        │    ├── adminnavigation.blade.php
        │    └── adminsideavigation.blade.php 
        ├── components
        │    ├── success.blade.php
        │    ├── sidebar-navigation-item.blade.php
        │    ├── application-logo.blade.php
        │    └── auth-validation-errors.blade.php
        ├── clients 
        │    ├── home.blade.php
        │    ├── profile.blade.php
        │    ├── tickets
        │    │    ├── index.blade.php
        │    │    ├── create.blade.php
        │    │    └── show.blade.php
        │    ├── invoice
        │    │    └── show.blade.php
        │    └── products
        │         └── view.blade.php
        ├── checkout
        │    ├── index.blade.php
        │    └── config.blade.php
        ├── admin
        │    ├── index.blade.php
        │    ├── products
        │    │    ├── index.blade.php
        │    │    ├── create.blade.php
        │    │    ├── edit.blade.php
        │    │    └── extension.blade.php
        │    ├── clients
        │    │    ├── index.blade.php
        │    │    ├── create.blade.php
        │    │    └── edit.blade.php
        │    ├── tickets
        │    │    ├── index.blade.php
        │    │    ├── create.blade.php
        │    │    └── show.blade.php
        │    ├── orders
        │    │    └── index.blade.php
        │    ├── extensions
        │    │    ├── index.blade.php
        │    │    └── edit.blade.php
        │    ├── settings
        │    │    ├── index.blade.php
        │    │    └── settings
        │    │         ├── general.blade.php
        │    │         ├── login.blade.php
        │    │         ├── security.blade.php
        │    │         └── mail.blade.php
        │    └── categories
        │         ├── index.blade.php
        │         ├── create.blade.php
        │         └── edit.blade.php
        └── auth
             ├── login.blade.php
             ├── register.blade.php
             ├── verify-email.blade.php
             └── passwords
                  ├── change-password.blade.php
                  ├── confirm.blade.php
                  ├── forgot.blade.php
                  └── reset.blade.php

```

## API endpoints (usable for react)

**Client**

`GET` - `/v1/users` Get user info

`GET` - `/v1/tickets` get all tickets

`POST` - `/v1/tickets` create ticket

`GET` - `/v1/tickets/{ticketId}` get ticket by id

`DELETE` - `/v1/tickets/{ticketId}` close ticket

`PUT` - `/v1/tickets/{ticketId}/reply` reply to ticket

`GET` - `/v1/invoices` get all invoices

`GET` - `/v1/invoices/{invoiceId}` get invoice by id

`GET` - `/v1/invoices/{invoiceId}/pay` pay invoice

**Website**

`GET` - `/v1/products` get all products
