import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { registerIcons } from './components/icons'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    registerIcons(app)
  },
}
