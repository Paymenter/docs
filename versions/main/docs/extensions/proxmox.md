# Proxmox

## Overview

ProxmoxVE is an open source enterprise ready virtualization platform based on Debian 12 (8.0) featuring
KVM virtualization and Linux Containers (LXC) including many features out of the box.
Download: <https://proxmox.com>

## How to create an API key

If you want to use Proxmox with Paymenter you will need to create an API key.
This can be done step by step.

Step 1: Head to your Proxmox web based interface (GUI) <https://yourserver:8006/> -- change the port if you are using other than default which is 8006

Step 2: Click on "Datacenter" then scroll down until you see "API Tokens" under "Permissions"

![image](/versions//main/assets/images/extensions/proxmox/pve.png)

Step 3: Create an API Token.
To do this, click on "API Tokens" then "Add". You will see this page:
![image](/versions//main/assets/images/extensions/proxmox/apikey.png)

Fill up the name and token ID with your desired information.
! Disable the " privilege separation " option, otherwise Paymenter cannot find disk and so on !
Example:
![image](/versions//main/assets/images/extensions/proxmox/example.png)

Click on " Add " .
A new window will appear.
Copy both of the contents and save them to a safe place example to your desktop.
![image](/versions//main/assets/images/extensions/proxmox/save.png)

## How to setup Proxmox extension in Paymenter

To set-up Proxmox extension in Paymenter you will need to have a Proxmox installation and completed the above listed steps.
Otherwise head back to "How to create an API key"
If you already have a Proxmox installation:

Step 1: Head to your Paymenter web page - <http://your-paymenter-installation> /// <https://your-paymenter-installation>

Step 2: Set-up Proxmox extension:

- Log in to your Admin account
- Click on ... then Extensions
  ![image](/versions//main/assets/images/extensions/proxmox/click.png)

Step 3: Find extension named Proxmox then click on Edit

Step 4: Fill up the page with the required information
![image](/versions//main/assets/images/extensions/proxmox/extension.png)
Click on Save.

## How to configure a product with Proxmox

Step 1: Login to your admin account then head to your admin dashboard. Click on Products

Step 2: You will see a dropdown, select Add products

Step 3: Fill up the product form with your desired information

Step 4: Click on extensions page then select Proxmox and click on Update Server

Step 5: A new window will appear, this look like this:
![image](/versions//main/assets/images/extensions/proxmox/looklike.png)

Step 6: Fill up everything with your desired information and change whatever you want.

Congratulations! You have been succesfully set-up Proxmox extension!
