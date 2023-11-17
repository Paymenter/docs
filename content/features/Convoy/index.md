This documentation will cover the whole process of configuring Proxmox to talk to Convoy and finally interact with Paymenter.


In order to accomplish this we would need to do the following steps, let's get started:

Proxmox settings:

***Notice: For ease of use please use the binary which downloads and creates the templates inside proxmox, for you:

https://github.com/ConvoyPanel/downloader/releases/download/v1.0.1/downloader

Download it to the node that you will use in this process.

Now using your terminal just do 'chmod +x Downloader' (assuming you are in the same directory with the script) and then do './Downloader', after that wait for it to finish.


1.  Login into your proxmox web portal and click on 'Datacenter'

![Alt text](datacenter.png)

2.  On the menu immediately to the left of that you will find a menu item called 'API Tokens', click on it

![Alt text](APITokens.png)

3.  Click on 'Add', and fill in the information like in the image below, also, please make sure to uncheck 'Privilege separation'

![Alt text](CreateToken.png)

4.  Just above that click on 'Permissions' and inside that menu and click on 'Add' -> 'API Token Permissions'

![Alt text](APITokenPermissions.png)

5.  Select the same user with whom we created the token before and add to it the permissions shown in the picture below

![Alt text](tokenpermissions.png)


Convoy settings:

1.  Login into your Convoy web portal

2.  Click on your username in the top right corner of the page and click on 'Admin Control Panel'

3.  Click on 'Nodes' then 'Create Node'

4.  Fill out the information as requested, these are where we're going to use the very same credentials that we created in order to communicate with Proxmox

![Alt text](convoy-node-token.png)

5.  Click on 'Tokens' and then 'New Token', name it, and save it for later.

   Be sure to configure your templates which will correspond to your 'VMID' from the list of templates inside proxmox, just below the datacenter, in the node where you used the 'Downloader' script, described at the top of this page.

Paymenter settings:

1.  Login into your Paymenter web portal

2.  Click on your username in the top right corner of the page and then click 'Admin area'

3.  Click on the three horizontal dots and then select 'Extensions'

4.  Click on 'Browse Extensions'

5.  Find Convoy extension and then click 'Download'

6.  Once again click on the three horizontal dots and select 'Extensions'

7.  Find Convoy in your list and click on the edit button

8.  Inside this extension things should look like this:

![Alt text](PaymenterExtensionSettings.png)

  Let's make our first package with this extension and see our first VM deployed

9.  Go to 'Products' and then 'Categories' and create a category for your product

10. Go to 'Products' again and click on 'Create Product'

11. Your new product should look like this:

![Alt text](VMProducts1.png)

***Notice: The fact that we put in '0' for the price is because we want to test first, that it creates the VM without any manual intervention.

12. After you save your product you should have another tab available called 'Extension', click on it

13. Select the extension 'Convoy' and click on 'Update server'

14. In the fields that just appeared below fill out your desired values for this product, here is an example below:

![Alt text](ConvoyProductSettings.png)

15. This should be it, now you can order this package from the front page of Paymenter and see your VM being deployed without any issues.

***Notice: I have not put anything in the 'Bandwidth' section, because I don't usually limit the bandwidth used, but you can do that there. Also make sure you have added some IPV4 ip addresses to your Convoy node that you just added earlier in this documentation.

***Notice: This documentation will be updated as necessary.
