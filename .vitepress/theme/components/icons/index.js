const icons = import.meta.glob('./*.vue', { eager: true })

export const registerIcons = (app) => {
  for (const [path, component] of Object.entries(icons)) {
    const name = path.split('/').pop().replace('.vue', '')
    app.component(name, component.default)
  }
}