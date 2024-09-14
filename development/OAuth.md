# OAuth

Implement Single Sign On in your application with OAuth2.0

## Create an OAuth App

Go to "Admin" -> "OAuth Clients" -> "Create OAuth Client"

Fill in the form with the following details:

- **Name**: The name of your OAuth App
- **Your redirect URL**: The URL where the user will be redirected after the OAuth process is completed

Click on "Create" and you will be redirected to the OAuth App page.

Now you can see your Client ID and Client Secret.

## Usage

To use OAuth in your application, you need to redirect the user to the OAuth URL.

Its structure is:

```
<your_paymenter_url>/oauth/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URL&response_type=code
```

After the user authorizes the OAuth App, they will be redirected to the URL you specified in the redirect_uri parameter with a code parameter.

You can exchange this code for an access token by making a POST request to the following URL:

```
<your_paymenter_url>/api/oauth/token
```

Then to get the user's information, you can make a GET request to the following URL:

```
<your_paymenter_url>/api/oauth/me
```
