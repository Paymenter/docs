import DefaultTheme from 'vitepress/theme'
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import VersionSwitcher from 'vitepress-versioning-plugin/src/components/VersionSwitcher.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    vitepressBackToTop({
      threshold:280
    })
    app.component('VersionSwitcher', VersionSwitcher) 
  },
}

// TODO Add an icon to the back to top plugin. Because right now it is just a white sphere