import defineVersionedConfig from 'vitepress-versioning-plugin';
import fs from 'fs';
import path from 'path';

function loadSidebar(version) {
  const sidebarPath = path.resolve(__dirname, `sidebars/versioned/${version}.json`);
  if (fs.existsSync(sidebarPath)) {
    return JSON.parse(fs.readFileSync(sidebarPath, 'utf-8'));
  }
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, 'sidebars/versioned/default.json'), 'utf-8'));
}

export default defineVersionedConfig(
  {
    ignoreDeadLinks: true,

    title: "Paymenter",

    description: "This is the Documentation for Paymenter",

    cleanUrls: true,

    themeConfig: {
      search: {
        provider: "local",
      },

      versionSwitcher: {
        text: "Switch Version",
        includeLatestVersion: true,
      },

      nav: [
        { text: "Home", link: "/" },
        { text: "Docs", link: "//main/docs/installation/install" },
        { text: "Blog", link: "/blog/V1-release.md" },
      ],
      
      logo: "/versions//main/assets/images/logo.png",

      markdown: {
        image: {
          lazyLoading: false,
        },
      },

      footer: {
        copyright: "© 2024 Paymenter. All Rights Reserved.",
      },

      sidebar: loadSidebar(process.env.VITEPRESS_VERSION || 'default'),

      socialLinks: [
        { icon: "github", link: "https://github.com/Paymenter" },
        { icon: "discord", link: "https://discord.gg/kReEAQteFy" },
      ],

    },
  },
  __dirname
);
