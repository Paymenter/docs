import fs from 'fs'
import path from 'path'

export default {
  ignoreDeadLinks: true,

  title: 'Paymenter',

  description: 'This is the Documentation for Paymenter',

  cleanUrls: true,

  versioning: {
    latestVersion: '1.0.0'
  },

  themeConfig: {
    search: {
      provider: 'local'
    },

    returnToTop: true, // Mobile only

    appearance: 'dark',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/installation/install' },
      { text: 'Blog', link: '/blog/V1-release.md' },
      { text: 'Development', link: '/development/extensions/index.md' }
    ],

    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
      alt: 'Paymenter Logo'
    },

    siteTitle: false,

    sidebar: {
      '/docs/': [
        {
          text: 'Installation',
          items: [
            { text: 'Getting Started', link: '/docs/installation/install' },
            { text: 'Webserver Setup', link: '/docs/installation/webserver' },
            { text: 'Updating', link: '/docs/installation/updating' }
          ]
        },
        {
          text: 'Extension Guides',
          collapsed: false,
          items: [
            { text: 'PayPal', link: '/docs/extensions/paypal' },
            { text: 'Pterodactyl', link: '/docs/extensions/pterodactyl' },
            { text: 'Stripe', link: '/docs/extensions/stripe' }
          ]
        },
        {
          text: 'Guides',
          items: [
            { text: 'Single Sign On', link: '/docs/guides/OAuth.md' },
            {
              text: 'Configurable Options',
              link: '/docs/guides/config-options.md'
            },
            { text: 'Creating SSL Certificates', link: '/docs/guides/SSL.md' },
            { text: 'FAQ', link: '/docs/guides/FAQ.md' }
          ]
        }
      ],
      '/blog/': [
        {
          text: 'Index',
          items: [{ text: 'Release of V1', link: '/blog/V1-release.md' }]
        }
      ],
      '/development/': [
        {
          text: 'Extensions',
          items: [
            { text: 'Extensions', link: '/development/extensions/index.md' },
            {
              text: 'Create a Server Extension',
              link: '/development/extensions/server.md'
            },
            {
              text: 'Create a Gateway Extension',
              link: '/development/extensions/gateway.md'
            }
          ]
        },
        {
          text: 'Themes',
          items: [{ text: 'Create a Theme', link: '/development/theme.md' }]
        },
        {
          text: 'Events',
          items: [{ text: 'Event list', link: '/development/event-list.md' }]
        },
        {
          text: 'OAuth',
          items: [{ text: 'OAuth', link: '/development/OAuth.md' }]
        }
      ]
    },

    markdown: {
      image: {
        lazyLoading: false
      }
    },

    footer: {
      copyright: 'Copyright © 2024 Paymenter. All Rights Reserved.'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Paymenter' },
      { icon: 'discord', link: 'https://discord.gg/kReEAQteFy' }
    ]
  }
}
