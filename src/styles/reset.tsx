import { css } from "@emotion/react";

const reset = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
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
    font-family: "Noto Sans KR", sans-serif;
    color: "#312F2F";
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
    background-color: #ddd;
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #bbb;
  }

  svg,
  path {
    pointer-events: none;
  }
`;

export default reset;
