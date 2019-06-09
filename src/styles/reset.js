import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
      box-sizing: border-box;
  }

  * {
      &, &::after, &::before {
        box-sizing: inherit;
      }
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a,
  abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike,
  strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure,
  figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
      padding: 0;
      border: 0;
      margin: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline; }

  /* HTML5 display-role reset for older browsers */

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block; }

  body {
      line-height: 1; }

  ol, ul {
      list-style: none; }

  blockquote, q {
      quotes: none; }

  blockquote {
      &:before, &:after {
          content: '';
          content: none; } }

  q {
      &:before, &:after {
          content: '';
          content: none; } }

  table {
      border-collapse: collapse;
      border-spacing: 0; }

  button, input, textarea, select, option {
      padding: 0;
      background-color: transparent;
      border: none;
      margin: 0;
      appearance: none;
      box-shadow: none;
      font: inherit;
      &:focus, &:active {
          outline: none;
      } }
  a {
      color: inherit;
      font-family: inherit;
      text-decoration: none;
      &:focus, &:hover, &:active {
          text-decoration: none;
      } }

  img {
      max-width: 100%;
  }

  input, textarea, button {
    color: currentColor;
    font: inherit;
  }

  a, button {
    cursor: pointer;
  }
`