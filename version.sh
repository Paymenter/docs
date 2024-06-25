#!/bin/bash

echo "Please enter the version name:" 
read name

mkdir -p versions/$name
cp -r docs versions/$name/
cp -r blog versions/$name/
cp -r assets versions/$name/
cp index.md versions/$name/
cp -r .vitepress versions/$name/
rm -r versions/$name/.vitepress/cache

sed -i "s|/docs/|/$name/docs/|g" versions/$name/index.md
find versions/$name -type f -exec sed -i "s|/assets/images/|/versions/$name/assets/images/|g" {} +

temp_file=$(mktemp)
cp .vitepress/sidebars/versioned/default.json $temp_file
sed -i "s|/docs/|/versions/$name/docs/|g" $temp_file

cp .vitepress/sidebars/versioned/default.json .vitepress/sidebars/versioned/default.json.backup

sed -i '$ s/.$//' .vitepress/sidebars/versioned/default.json

tail -n +2 $temp_file >> .vitepress/sidebars/versioned/default.json

echo "]" >> .vitepress/sidebars/versioned/default.json

rm $temp_file

echo "Version $name has been created and default.json has been updated."
echo "This script still needs a bit of work. The .vitepress/sidebars/versioned/default.json may need a bit of tweeking before it works again"
echo "Also add the newest version to the config.mjs"