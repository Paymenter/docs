# Virtfusion

## Overview

VirtFusion is a powerful and feature-rich virtualization control panel that allows you to manage rock-solid KVM virtual machines.

## Create a API key in Virtfusion

Create a api key in the Virtfusion panel. You can find the page at System -> API -> Create Token

![image](/assets/images/extensions/virtfusion/apicreate.png)

Then press next and copy the token.

![image](/assets/images/extensions/virtfusion/apicreated.png)

## Configure Paymenter

Insert your API key and your Virtfusion URL in the Paymenter admin panel. Like this:

![image](/assets/images/extensions/virtfusion/createserver.png)

Press `Test Connection` to verify that the connection is working.

## Configuring the product

- After you have created an Product you need to go to the settings

- Fill in the product details and select the server you want to assign to the product

- Below you will see a fully functional example of Product

![image](/assets/images/extensions/virtfusion/product.png)

- ### Configurable Options

You can let your customers tailor their product to meet their needs by offering customizable options.  These options allow users to select specific settings for their product, making it easy to create unique products for different use cases. Below is a list of configurable options you can use with the Virtfusion extension:

`ipv4`, `packageId`, `hypervisorId`, `storage`, `memory`, `traffic`, `networkSpeedInbound`, `networkSpeedOutbound`, `cpuCores`, `networkProfile`, `storageProfile`.

For more information on how to utilize configurable options click [here](/docs/guides/config-options.md)