import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  title: "Paymenter",
  description: "This is the Documention for Paymenter",
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "docs/installation/install.md" },
    ],
    logo: "/assets/images/paymenter.png",

    footer: {
      copyright: "© 2024 Paymenter. All Rights Reserved.",
    },

    sidebar: {
      "/docs/": [
        {
          text: "Documentation",
          items: [
            {
              text: "Installation",
              items: [
                { text: "Getting Started", link: "/docs/installation/install" },
                {
                  text: "Webserver Setup",
                  link: "/docs/installation/webserver",
                },
              ],
            },
          ],
        },
        {
          text: "Extensions",
          items: [
            { text: "Pterodactyl", link: "docs/extensions/pterodactyl.md" },
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
    markdown: {
      config(md) {
        md.use(tabsMarkdownPlugin)
      }
    }
  },
});
