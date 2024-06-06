import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Paymenter",
  description: "This is the Documention for Paymenter",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/home" },
    ],
    logo: "/assets/images/paymenter.png",

    sidebar: [
      {
        items: [{ text: "Installation", link: "/docs/installation/install" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Paymenter" },
      { icon: "discord", link: "https://github.com/Paymenter" },
    ],
  },
});
