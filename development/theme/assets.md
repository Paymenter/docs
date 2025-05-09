# Building assets

Paymenter is build using Tailwind CSS. If you add any new classes to the theme, you need to build the assets again. 

## Install dependencies

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo bash - 
sudo apt install nodejs
```

Install the dependencies using npm:

```bash
cd /var/www/paymenter
npm install
```

## Build assets

You can build the assets using the following command:

```bash
npm run build
```

If you do require to build the assets for a different theme then default you can use the following command:

```bash
npm run build <theme-name>
```

