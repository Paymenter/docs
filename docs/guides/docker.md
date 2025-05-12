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