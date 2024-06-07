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
      { text: "Docs", link: "docs/installation/install" },
    ],

    logo: "/assets/images/logo.png",

    footer: {
      copyright: "© 2024 Paymenter. All Rights Reserved.",
    },

    cleanUrls: true, // Needs to be tested https://vitepress.dev/reference/site-config#cleanurls

    sidebar: {
      "/docs/": [
        {
          text: "Documentation",
          items: [],
        },
        {
          text: "Installation",
          items: [
            { text: "Getting Started", link: "/docs/installation/install" },
            { text: "Webserver Setup", link: "/docs/installation/webserver" },
          ],
        },
        {
          text: "Extension Guides",
          items: [
            { text: "Index", link: "/docs/extensions/index" },
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
            { text: "Create a theme", link: "docs/customization/theme.md" },
          ],
        },
      ],
      /*
      '/docs/': [
        {
          text: 'Config',
          items: [
            { text: 'Installation', link: '/docs/installation/install' },
            { text: 'Extensions', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
      */
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Paymenter" },
      { icon: "discord", link: "https://discord.gg/kReEAQteFy" },
    ],
  },
});
