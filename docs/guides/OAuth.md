# OAuth

A simple tutorial on how to add oAuth authorization to your Paymenter

## Discord

First locate to [Discord Developer Page](https://discord.dev) and click on New application.

![discord_discorddev](/assets/images/guides/OAuth/discord_newapp.png)

Name your application and hit create.
After that navigate to OAuth2 and click on Add Redirect
and add Paymenter OAuth callback URL (<https://yourdomain.here/login/discord/callback>).
After that click on Reset Secret, The page should look like this.

![discord_discorddev2](/assets/images/guides/OAuth/discord_discorddevfull.png)

Now go to your Paymenter admin area and navigate to settings (... (Three dots) -> Settings --> Login)

![discord_navigation](/assets/images/guides/OAuth/discord_navigation.png)

Enable Discord feature and fill in the Discord Client ID & Discord Client Secret with the one showed in your Discord's developer page.
Should look like this.

![discord_finalpage01](/assets/images/guides/OAuth/discord_adminarea.png)

Hit submit to save all changes and Discord OAuth should be working and visible in login page.

![discord_finalpage](/assets/images/guides/OAuth/discord_finalpage.png)

## Github

Locate to [Github Account Settings](https://github.com/settings/profile) scroll down and click on Developer Settings
as showed in the image.

![github_1](/assets/images/guides/OAuth/github_1.png)

Click on OAuth Apps and click on Register a new application

![github_2](/assets/images/guides/OAuth/github_2.png)

Create a new application with the callback (<https://yourdomain.here/login/github/callback>)
Should look something like this.

![github_3](/assets/images/guides/OAuth/github_3.png)

Click on Register Application, and Generate a new client secret
The github page should look simillar to this.

![github_4](/assets/images/guides/OAuth/github_4.png)

Copy your Client ID & Client Secret and deploy it on Paymenter

![github_5](/assets/images/guides/OAuth/github_5.png)

After that, click on submit to save changes and Github OAuth should be working,
You can verify this by going to the login page and clicking on Sign in with GitHub.

![github_6](/assets/images/guides/OAuth/github_6.png)

## Google

Locate to [Google API & Services Dashboard](https://console.cloud.google.com/apis/dashboard)
Click on create a new project

![google_1](/assets/images/guides/OAuth/google_1.png)

Name your project and click create

![google_2](/assets/images/guides/OAuth/google_2.png)

After that click on Create Credentials and OAuth client ID

![google_3](/assets/images/guides/OAuth/google_3.png)

If this is your first application, you will need to configure your consent screen, to continue click on Configure Consent Screen

![google_4](/assets/images/guides/OAuth/google_4.png)

Click on External user type and click continue

![google_5](/assets/images/guides/OAuth/google_5.png)

Configure your application and click save and continue

![google_6](/assets/images/guides/OAuth/google_6.png)

Ignore scopes and click continue

![google_7](/assets/images/guides/OAuth/google_7.png)

Same for test users, after that scroll down and click on Back to dashboard.
Now lets push our OAuth application to production

![google_8](/assets/images/guides/OAuth/google_8.png)

After that go back to Credentials and click on Create credentials --> OAuth client ID.

![google_9](/assets/images/guides/OAuth/google_3.png)

Select Web application and for Authorized redirect URIs put (<https://yourdomain.here/login/google/callback>)
Should look like this.

![google_10](/assets/images/guides/OAuth/google_10.png)

Click on create and you should be showed your Client ID and Client Secret

![google_11](/assets/images/guides/OAuth/google_11.png)

Copy both of these and go to your Paymenter admin area, navigate to settings (... (three dots) -> Settings --> Login) Paste the Client ID and Client Secret and click submit to save changes.
Should look something like this.

![google_12](/assets/images/guides/OAuth/google_12.png)

Congratulations, Google's OAuth should be now available for your users.

![google_13](/assets/images/guides/OAuth/google_13.png)
