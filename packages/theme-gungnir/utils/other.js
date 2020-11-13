import { addLinkToHead } from './utils'

export function registerCodeThemeCss (theme = 'tomorrow') {
  const prismThemes = ['coy', 'dark', 'funky', 'okaidia', 'solarizedlight', 'tomorrow', 'twilight']
  var href

  if (theme == 'default') href = '//prismjs.com/themes/prism.css'
  else if (prismThemes.indexOf(theme) > -1) href = `//prismjs.com/themes/prism-${theme}.css`
  else href = `/highlight/${theme}.css`

  addLinkToHead(href)
}

export function registerLinks () {
  addLinkToHead('https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.1/css/all.min.css')
  addLinkToHead('https://cdn.jsdelivr.net/npm/font-awesome-animation@0.2.1/dist/font-awesome-animation.min.css')
  addLinkToHead('https://fonts.googleapis.com/css?family=Montserrat:200,400,500,700')
}