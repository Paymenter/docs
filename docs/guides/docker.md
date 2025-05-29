# Docker

Guide to use Paymenter within Docker.

## Installation

To install Paymenter using Docker, you first need to install Docker and Docker Compose. You can find the installation instructions for your operating system on the [Docker website](https://docs.docker.com/get-docker/).

Once you have Docker and Docker Compose installed, you can get the docker-compose file from the [GitHub repository](https://github.com/Paymenter/Paymenter/blob/master/docker-compose.example.yml).

```bash
curl -Lo docker-compose.yml https://raw.githubusercontent.com/Paymenter/Paymenter/master/docker-compose.example.yml
```

You might want to edit the `docker-compose.yml` file to suit your needs. For example, you might want to change the database password or the port on which Paymenter will run.
You can also change the volume paths to match your local setup. (Default docker compose will save the data in the current directory)


Then, you can start the containers by running the following command in the same directory as the `docker-compose.yml` file:

```bash
docker compose up -d --force-recreate
```

## Configuring Paymenter

:::info
**Note:** If you're running the application behind a proxy and the trusted proxies are not properly configured, file uploads will fail. You need to add your proxy to the list of trusted proxies. This setting can be found under **Admin → Settings → Security**. You can either specify a single IP address (`172.23.0.10`) or a subnet (`172.23.0.0/16`).
:::

Once the docker containers are up and running, you should configure the URL and the initial admin user.

You can do this by running the following command:

This will prompt you for the URL of your Paymenter installation.

```bash
docker compose run --rm paymenter php artisan app:init
```

Now we need to create the user

This will prompt you for the username, email and password of the user.

```bash
docker compose run --rm paymenter php artisan app:user:create 
```

Now your dockerized Paymenter installation is ready to use! The default port is `80`
