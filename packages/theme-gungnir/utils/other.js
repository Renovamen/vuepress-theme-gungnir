import { addLinkToHead } from "./utils";

export function registerCodeThemeCss(theme = "tomorrow") {
  const prismThemes = [
    "coy",
    "dark",
    "funky",
    "okaidia",
    "solarizedlight",
    "tomorrow",
    "twilight"
  ];
  let href;

  if (theme == "default") href = "//prismjs.com/themes/prism.css";
  else if (prismThemes.includes(theme))
    href = `//prismjs.com/themes/prism-${theme}.css`;
  else href = `/highlight/${theme}.css`;

  addLinkToHead(href);
}

export function registerLinks() {
  addLinkToHead(
    "https://fonts.googleapis.com/css?family=Montserrat:200,400,500,700"
  );
}
