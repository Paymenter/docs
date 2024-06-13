# Hetzner Cloud Extension for [paymenter.org](https://github.com/Paymenter/Paymenter)
>
> Note: This extension is in its early stages and may contain bugs.

The extension uses Hetzners API to create Cloud Servers automatically.  The extension shows information about your server, like IPv4, IPv6 & temporarily root password for SSH.

Power controls for Starting, Stopping and Rebooting the server. You can also Force Stop the server or Reset the root Password if you get locked out. And if everything goes wrong you can Rebuild the OS. You can also set the Reverse DNS entry if needed.

You can also see metrics for CPU, Disk and Network usage.
<br/>Supports configurable options for: `location`, `image` and `hostname`.

If you want to implement new features check out Hetzner Cloud Docs: <https://docs.hetzner.cloud/> & make a pull request ❤️

Get the extension at: <https://market.paymenter.org/extensions/27/HetznerCloud> 🎉
<br/>For support or feature requests please message [@ha1fdan](https://discord.gg/n8hpbek59q) on discord.

---

## Features

- [x] Configurable settings for location & os-image
- [x] Shows IPv4 & IPv6
- [x] Shows Temporarily root Password
- [x] Reset root Password
- [x] Start, Stop, Force Stop & Reset Server
- [x] Rebuild OS, aka. reinstall os
- [x] Set Reverse DNS, (for IPv4)
- [x] CPU, Disk & Network Metrics graphs
- [ ] VNC Console
- [ ] Option for adding additional IPv4 and IPv6
- [ ] Option to add another volume or upgrade existing

---

## Screenshots

![configurableOptions](https://ha1fdan.xyz/HetznerCloudExtension/1.png)
<p>Support for configurable options (client side)</p>

![productOrderPage](https://ha1fdan.xyz/HetznerCloudExtension/2.png)
<p>Server Information (client side)</p>

![productOrderPage](https://ha1fdan.xyz/HetznerCloudExtension/3.png)
<p>Power Control & Status (client side)</p>

![productExtensionConfig](https://ha1fdan.xyz/HetznerCloudExtension/4.png)
<p>Metrics for cpu, disk and network usage (client side)</p>

![extensionSettings](https://ha1fdan.xyz/HetznerCloudExtension/5.png)
<p>Example of config for a product (admin side)</p>

![extensionSettings](https://ha1fdan.xyz/HetznerCloudExtension/6.png)
<p>Settings for extension (admin side)</p>
