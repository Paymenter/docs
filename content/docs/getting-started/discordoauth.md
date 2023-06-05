---
title: Discord OAuth
description: A simple tutorial on how to add Discord oAuth authorization to your Paymenter
toc: true
---

First locate to [Discord Developer Page](https://discord.dev) and click on New application.

![discorddev](https://i.imgur.com/RCQy4B6.png)

Name your application and hit create.
After that navigate to OAuth2 and click on Add Redirect
and add Paymenter OAuth callback URL (https://yourdomain.here/login/discord/callback).
After that click on Reset Secret, The page should look like this.

![discorddev2](https://i.imgur.com/DR7llaz.png)

Now go to your Paymenter admin area and navigate to settings (... (Three dots) -> Settings --> Login)

![navigation](https://i.imgur.com/wODXWLk.png)

Enable Discord feature and fill in the Discord Client ID & Discord Client Secret with the one showed in your Discord's developer page.
Should look like this.

![finalpage01](https://i.imgur.com/1K6OXxA.png)

Hit sumbit to save all changes and Discord OAuth should be working and visible in login page.

![finalpage](https://i.imgur.com/qWmodFd.png)