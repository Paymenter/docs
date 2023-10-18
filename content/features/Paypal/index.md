## If you are using our built-in PayPal method please keep in mind
You will need to set your PayPal WebHook As Followed
- Paypal WebhookURL:
```
https://paymenter.org/extensions/paypal/webhook
```
> Remember to replace `paymenter.org` with your Paymenter installations domain.

For PayPal integration and configuration please head on over to [Paypal Developers App Portal](https://developer.paypal.com/dashboard/applications/live) This will allow you to create a live or sandbox app for testing
during the creation of this application, you will need to

1. Give the application a name
2. once the application has a name it will provide you with the following
![image](https://github.com/cloudrack-ca/docs/assets/145787423/071a182b-1992-4bb2-95bf-39f55d6e37b5)
3. we will need these credentials to continue but first, we need to scroll all the way down to where webhooks are located inside PayPal.
4. add the `Paypal WebhookURL` as mentioned above for Paypal for events simply select `all events` ![image](https://github.com/cloudrack-ca/docs/assets/145787423/41519c3e-77b6-47df-9c09-fdc69eb0bbe6)
5. add your Paymentor url where the site is located + webhook ending into the WebhookURL Box. ![image](https://github.com/cloudrack-ca/docs/assets/145787423/d51ac89c-3214-4ed4-9c51-c1e5e878fe77)
6. once you have done the following above make sure to copy and paste your keys into Paymenter admin by going to `https://your.paymenters-domain.name/admin/extensions/edit/gateway/PayPal`
7. once at `/admin/extensions/edit/gateway/PayPal` you will see the Paypal Extension page this is where you will fill out the PayPal credentials we obtained earlier from the PayPal developer portal.
8. enable it click save tada you're done.
9. Make revenue.
