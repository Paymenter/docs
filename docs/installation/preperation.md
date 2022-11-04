---
sidebar_position: 1
description: Preperation for the installation of Paymenter.
---

# Preperation

## Supported operating systems
| Operating System | Version |     Supported      |
|------------------|---------|:------------------:|
| **Ubuntu**       | 18.04   | :white_check_mark: |
|                  | 20.04   | :white_check_mark: |
|                  | 22.04   | :white_check_mark: |
| **CentOS**       | 7       | :white_check_mark: |
|                  | 8       | :white_check_mark: |
| **Debian**       | 10      | :white_check_mark: |
|                  | 11      | :white_check_mark: |
| **Windows**      | Any     | :x:                |

## Install Dependencies

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

# If you are on Ubuntu 22.04, you can skip this step
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash

apt update

# Add universe repository if you are on Ubuntu 18.04
apt-add-repository universe

apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

## Install Composer

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

Continue to [Download](download.md)

