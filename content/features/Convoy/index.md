This documentation will cover the whole process configuring Proxmox to talk to Convoy and finally interact with Paymenter.


In order to acomplish this we would need to do the following steps, let's get started:

1. Login into your proxmox web portal and click on 'Datacenter'

![Alt text](datacenter.png)

2. On the menu imediatly to the left of that you will find a menu item called 'API Tokens', click on it

![Alt text](APITokens.png)

3. Click on 'Add', fill in the information like in the image below, also, please make sure to uncheck 'Privilage separation'

![Alt text](CreateToken.png)

4. Just above that click on 'Permissions' and inside that menu and the click on 'Add' -> 'API Token Permissions'

![Alt text](APITokenPermissions.png)

5. Select the same user with we created the token before and add to it the permissions like shown the picture below

![Alt text](tokenpermissions.png)


