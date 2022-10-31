// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Paymenter',
  tagline: 'Welcome to the Paymenter documentation',
  url: 'https://paymenter.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'paymenter', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Paymenter/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/paymenter/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/index.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'theme-color',
          content: '#5270FD',
        },
        {
          name: 'og:title',
          content: 'Paymenter',
        },
        {
          name: 'og:description',
          content: 'All-in-one payment gateway for hosting\nStop paying for payed solutions use paymenter instead!',
        },
      ],
      image: 'https://cdn.discordapp.com/attachments/935234707015229511/1028031007573680318/unknown.png',
      title: 'Paymenter',
      navbar: {
        title: 'Paymenter - Docs',
        logo: {
          alt: 'Paymenter',
          src: 'img/paymenter.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Installation',
          },
          {
            href: 'https://github.com/paymenter',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://demo.paymenter.org',
            label: 'Demo',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/category/installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/xB4UUT3XQg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/paymenter',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Paymenter.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
