# Preparation

## Supported operating systems

| Operating System | Version | Supported |
| ---------------- | ------- | :-------: |
| **Ubuntu**       | 20.04   |    ✅     |
|                  | 22.04   |    ✅     |
|                  | 24.04   |    ❔     |
| **CentOS**       | 7       |    ✅     |
|                  | 8       |    ✅     |
| **Debian**       | 10      |    ✅     |
|                  | 11      |    ✅     |
| **Windows**      | Any     |    ❌     |

## Required Dependencies

```bash
# Ubuntu 22.04
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg php8.2 php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server

# Debian
apt update -y && apt -y install software-properties-common curl ca-certificates gnupg2 sudo lsb-release php8.2 php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```
