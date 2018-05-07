import { styled, css, injectGlobal } from '../../';

import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

const typography = new Typography(moragaTheme)

export default typography;


const theme = {
  "color_bg": "rgba(36, 41, 67, 1)",
  "color_bg_alt": "rgba(42, 47, 74, 1)",
  "color_fg": "rgba(255, 255, 255, 1)",
  "color_fg_bold": "rgba(255, 255, 255, 1)",
  "color_fg_light": "rgba(244, 244, 255, 0.2)",
  "color_border": "rgba(212, 212, 255, 0.1)",
  "color_border_bg": "rgba(212, 212, 255, 0.035)",
  "color_highlight": "rgba(155, 241, 255, 1)",
  "color_accent1": "rgba(111, 195, 223, 1)",
  "color_accent2": "rgba(141, 130, 196, 1)",
  "color_accent3": "rgba(236, 141, 129, 1)",
  "color_accent4": "rgba(231, 183, 136, 1)",
  "color_accent5": "rgba(142, 169, 232, 1)",
  "color_accent6": "rgba(135, 197, 164, 1)",
}



const root = injectGlobal`

@import url('https://fonts.googleapis.com/css?family=Roboto:100,500|Source-Sans-Pro');

:root {
  --font-family: 'Source-Sans-Pro', Helvetica, sans-serif;
  --font-family-fixed: 'Courier New', monospace;
  --font-weight: 300;
  --font-weight-bold: 600;
  --letter-spacing: 0.025em;
  --letter-spacing-alt: 0.25em;
  --color-bg: #242943;
  --color-bg-alt: #2a2f4a;
  --color-fg: #ffffff;
  --color-fg-bold: #ffffff;
  --color-fg-light: rgba(244, 244, 255, 0.2);
  --color-border: rgba(212, 212, 255, 0.1);
  --color-border-bg: rgba(212, 212, 255, 0.035);
  --color-highlight: #9bf1ff;
  --color-accent1: #6fc3df;
  --color-accent2: #8d82c4;
  --color-accent3: #ec8d81;
  --color-accent4: #e7b788;
  --color-accent5: #8ea9e8;
  --color-accent6: #87c5a4;
}

a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
  margin: 0;
  padding: 0;
  border: 0;
}

body {
  background-color: var(--color-bg);
  color: var(--color-fg);
  font-family: var(--font-family);
  font-size: 3vmin;
}

a:link {color: inherit;}
a:visited {color: inherit;}
a:hover {color: var(--color-highlight);}
a:hover > strong {background-color: var(--color-highlight);}
a:active {color: inherit;}
a span svg > * {
  transition: 200ms;
  transition-timing-function: ease-in-out;
  -webkit-transition: 200ms;
  -webkit-transition-timing-function: ease-in-out;
}

a:hover span svg > * {
  fill: var(--color-highlight);
}

a {
  text-decoration: none;
  transition: color .2s ease-in-out,
  border-bottom-color .2s ease-in-out;
}

`
