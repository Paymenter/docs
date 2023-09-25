---
title: OAuth Integration for Paymenter
description: A comprehensive guide on adding OAuth authorization to your Paymenter application
toc: true
---

# OAuth Integration for Paymenter

This tutorial provides a step-by-step guide on adding OAuth authorization to your Paymenter application. OAuth integration allows users to log in with their accounts from popular platforms like Discord, Github, and Google. Follow the instructions below to set up OAuth for Paymenter.

## Discord OAuth

1. **Create a Discord Application:**

   - Visit the [Discord Developer Page](https://discord.dev) and click on "New application."
   - Provide a name for your application and click "Create."

   ![discord_discorddev](discord_newapp.png)

2. **Configure OAuth Redirects:**

   - Navigate to OAuth2 and click on "Add Redirect."
   - Add the Paymenter OAuth callback URL (e.g., `https://yourdomain.here/login/discord/callback`).
   - Click "Reset Secret" to generate a client secret.

   ![discord_discorddev2](discord_discorddevfull.png)

3. **Configure Paymenter:**

   - In your Paymenter admin area, go to "Settings" (located under the three-dot menu).
   - Enable the Discord feature and provide the Discord Client ID and Client Secret obtained from Discord's developer page.

   ![discord_navigation](discord_navigation.png)

4. **Save Settings:**

   - Click "Submit" to save the changes.
   - Discord OAuth will now be available for users on the login page.

   ![discord_finalpage](discord_finalpage.png)

## Github OAuth

1. **Access Github Developer Settings:**

   - Go to [Github Account Settings](https://github.com/settings/profile) and scroll down to "Developer Settings."

   ![github_1](github_1.png)

2. **Register a New Application:**

   - Under "OAuth Apps," click "Register a new application."

   ![github_2](github_2.png)

3. **Configure OAuth Application:**

   - Create a new application with the callback URL (e.g., `https://yourdomain.here/login/github/callback`).

   ![github_3](github_3.png)

4. **Generate Client Secret:**

   - Click "Register Application" and generate a new client secret.

   ![github_4](github_4.png)

5. **Update Paymenter Settings:**

   - Copy the Client ID and Client Secret and configure them in your Paymenter admin area.

   ![github_5](github_5.png)

6. **Save Changes:**

   - Click "Submit" to save the settings.
   - Users can now log in using Github OAuth.

   ![github_6](github_6.png)

## Google OAuth

1. **Create a Google Project:**

   - Access the [Google API & Services Dashboard](https://console.cloud.google.com/apis/dashboard).
   - Click "Create a new project."

   ![google_1](google_1.png)

2. **Name Your Project:**

   - Provide a name for your project and click "Create."

   ![google_2](google_2.png)

3. **Configure Consent Screen:**

   - Click "Create Credentials" and select "OAuth client ID."
   - If this is your first application, configure the consent screen.
   - Choose "External" user type, configure your application, and save it.

   ![google_4](google_4.png)

4. **Configure OAuth Application:**

   - Continue by selecting "Web application" for OAuth client ID.
   - Set the Authorized Redirect URIs to `https://yourdomain.here/login/google/callback`.

   ![google_10](google_10.png)

5. **Obtain Client ID and Secret:**

   - Click "Create" to generate the OAuth client ID and client secret.

   ![google_11](google_11.png)

6. **Update Paymenter Settings:**

   - Copy the Client ID and Client Secret to your Paymenter admin area under "Settings."

   ![google_12](google_12.png)

7. **Save Changes:**

   - Click "Submit" to save the settings.
   - Google OAuth is now available for your users.

   ![google_13](google_13.png)

Congratulations! You've successfully integrated Discord, Github, and Google OAuth into your Paymenter application, providing users with convenient login options.
