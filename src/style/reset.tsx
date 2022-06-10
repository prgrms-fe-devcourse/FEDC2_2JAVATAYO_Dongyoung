import { css } from "@emotion/react";

const reset = css`
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2)
      format("woff2");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosanskr/v27/PbykFmXiEBPT4ITbgNA5Cgm203Tq4JJWq209pU0DPdWuqxJFA4GNDCBYtw.1.woff2)
      format("woff2");
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: "NanumBarunGothic", sans-serif;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote {
    &:before,
    &:after {
      content: "";
      content: none;
    }
  }

  q {
    &:before,
    &:after {
      content: "";
      content: none;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  // customized
  body {
    background-color: rgba(249, 251, 253);
  }

  #root {
    height: 100vh;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;

    &,
    &:visited {
      color: inherit;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  svg,
  path {
    pointer-events: none;
  }
`;

export default reset;
