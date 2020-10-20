import { addLinkToHead } from './utils'

export function registerCodeThemeCss (theme = 'tomorrow') {
  const prismThemes = ['coy', 'dark', 'funky', 'okaidia', 'solarizedlight', 'tomorrow', 'twilight', 'default']
  const selfThemes = ['gungnir-dark']

  if (selfThemes.indexOf(theme) > -1) {
    var href = `/highlight/${theme}.css`
  }
  else {
    var href = `//prismjs.com/themes/prism${prismThemes.indexOf(theme) > -1 ? `-${theme}` : ''}.css`
  }
  console.log(href)
  addLinkToHead(href)
}