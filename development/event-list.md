# Event hooks

## `navigation`

- `navigation`
- `navigation.auth`

Both hooks accept a array of navigation items like this:

```php
return [
    'name' => 'Announcements',
    'route' => 'announcements.index',
    'priority' => 10,
];
```

## `pages`

- `pages.home`

Hooks to include content on the home page.

## `head`, `body` and `footer`

Those hooks are added right before the closing `</head>`, `<body>` and `</body>` tags respectively.


