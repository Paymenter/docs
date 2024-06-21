import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Paymenter",
  description: "This is the Documention for Paymenter",
  themeConfig: {
    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/installation/install" },
      { text: "Blog", link: "/blog/V1-release.md" },
    ],

    logo: "/assets/images/logo.png",

    markdown: {
      image: {
        lazyLoading: false
      },
    },

    footer: {
      copyright: "© 2024 Paymenter. All Rights Reserved.",
    },

    cleanUrls: true, // Needs to be tested https://vitepress.dev/reference/site-config#cleanurls

    sidebar: {
      "/docs/": [
        {
          text: "Installation",
          items: [
            { text: "Getting Started", link: "/docs/installation/install" },
            { text: "Webserver Setup", link: "/docs/installation/webserver" },
            { text: "Updating", link: "/docs/installation/updating" },
          ],
        },
        {
          text: "Extension Guides",
          collapsed: false,
          items: [
            { text: "Index", link: "/docs/extensions/" },
            { text: "Enhance", link: "/docs/extensions/enhance" },
            { text: "PayPal", link: "/docs/extensions/paypal" },
            { text: "Proxmox", link: "/docs/extensions/proxmox" },
            { text: "Pterodactyl", link: "docs/extensions/pterodactyl" },
            { text: "Stripe", link: "/docs/extensions/stripe" },
            { text: "Virtfusion", link: "/docs/extensions/virtfusion" },
            { text: "Virtualizor", link: "/docs/extensions/virtualizor" },
          ],
        },
        {
          text: "Customization",
          items: [
            { text: "Create a Theme", link: "/docs/customization/theme.md" },
            { text: "Create a Server Extension", link: "/docs/customization/server-extension.md" },
            { text: "Create a Gateway Extension", link: "/docs/customization/gateway-extension.md" },
          ],
        },
        {
          text: "Guides",
          items: [
            { text: "OAuth", link: "/docs/guides/OAuth.md" },
            { text: "Docker", link: "/docs/guides/Docker.md" },
            { text: "Affiliate", link: "/docs/guides/affiliate.md" },
            { text: "Configurable Options", link: "/docs/guides/config-options.md" },
            { text: "Creating SSL Certificates", link: "/docs/guides/SSL.md" },
          ],
        },
      ],
      "/blog/": [
        {
          text: "Index",
          items: [
            { text: "Release of V1", link: "/blog/V1-release.md" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Paymenter" },
      { icon: "discord", link: "https://discord.gg/kReEAQteFy" },
    ],
  },
});
