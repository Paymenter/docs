import fs from 'fs'
import path from 'path'

export default {
  ignoreDeadLinks: true,

  title: 'Paymenter',

  description: 'Paymenter is an open source payment gateway for your hosting.',

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
      { text: 'Blog', link: '/blog/v1-beta-release.md' },
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
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/docs/getting-started/introduction' },
            { text: 'Reporting Bugs', link: '/docs/getting-started/bugs' }
          ]
        },
        {
          text: 'Setting Up',
          items: [
            { text: 'Installation', link: '/docs/installation/install' },
            { text: 'Webserver Setup', link: '/docs/installation/webserver' },
            { text: 'Updating', link: '/docs/installation/updating' }
          ]
        },
        {
          text: 'Extension Guides',
          collapsed: false,
          items: [
            { text: 'Convoy', link: '/docs/extensions/convoy' },
            { text: 'PayPal', link: '/docs/extensions/paypal' },
            { text: 'Pterodactyl', link: '/docs/extensions/pterodactyl' },
            { text: 'Stripe', link: '/docs/extensions/stripe' },
            { text: 'VirtFusion', link: '/docs/extensions/virtfusion' },
            { text: 'Virtualizor', link: '/docs/extensions/virtualizor' }
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
            { text: 'Migration from version 0.x to 1.0', link: '/docs/guides/v0-migration.md' },
            { text: 'FAQ', link: '/docs/guides/FAQ.md' }
          ]
        },
        {
          text: 'Contribute',
          items: [
            { text: 'Help Build Paymenter', link: '/docs/contribute/how-to-help' },
            { text: 'Docs and Translation', link: '/docs/contribute/docs-translations' }
          ]
        }
      ],
      '/blog/': [
        {
          text: 'Index',
          items: [
            { text: 'Release of V1-Beta', link: '/blog/v1-beta-release.md' },
            { text: 'Release of V1-Alpha', link: '/blog/v1-alpha-release.md' },
          ]
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
      message: 'Released under the <a href="https://github.com/Paymenter/Paymenter/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2024 Paymenter. All Rights Reserved.'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Paymenter' },
      { icon: 'discord', link: 'https://discord.gg/xB4UUT3XQg' }
    ],
  },
  head: [
    [
      'meta',
      {
        property: 'og:image',
        content: '/textlogo.png'
      }
    ],
    [
      'link',
      {
        rel: 'alternate',
        type: 'application/json+oembed',
        href: 'https://paymenter.org/home.json'
      }
    ],
    [
      'link', 
      { 
        rel: 'icon', 
        href: '/favicon.ico' 
      }
    ],
    [
      'meta',
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
    [
      'meta',
      {
        property: 'twitter:image',
        content: '/textlogo.png'
      }
    ]
  ]
}
