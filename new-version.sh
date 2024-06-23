#!/bin/bash

echo "Please enter the version name:" 
read name

mkdir -p versions/$name
cp -r docs versions/$name/
cp -r blog versions/$name/
cp -r assets versions/$name/
cp index.md versions/$name/
cp -r .vitepress versions/$name/
cp .vitepress/sidebars/versioned/default.json .vitepress/sidebars/versioned/$name.json
#rm -r versions/$name/.vitepress/cache

sed -i "s|/docs/|/$name/docs/|g" versions/$name/index.md
#sed -i "s|/docs/|/$name/docs/|g" versions/$name/.vitepress/config.mjs
find versions/$name -type f -exec sed -i "s|/assets/images/|/versions/$name/assets/images/|g" {} +
sed -i "s|/docs/|/$name/docs/|g" .vitepress/sidebars/versioned/$name.json
