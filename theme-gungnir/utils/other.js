import { addLinkToHead } from './utils'

export function registerCodeThemeCss (theme = 'tomorrow') {
  const prismThemes = ['coy', 'dark', 'funky', 'okaidia', 'solarizedlight', 'tomorrow', 'twilight']
  var href

  if (theme == 'default') href = '//prismjs.com/themes/prism.css'
  else if (prismThemes.indexOf(theme) > -1) href = `//prismjs.com/themes/prism-${theme}.css`
  else href = `/highlight/${theme}.css`

  addLinkToHead(href)
}