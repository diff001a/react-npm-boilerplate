import { css, createGlobalStyle } from "styled-components";

/* ===============================================
#  font setting
=============================================== */
const Font = css`
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI",
    "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo,
    sans-serif;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI',
    'Hiragino Kaku Gothic ProN', Arial, Verdana, sans-serif; */
  /* font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif; */
  word-wrap: break-word;
  word-break: break-all;
  -webkit-font-kerning: normal;
  font-kerning: normal;
  -moz-font-feature-settings: "palt";
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: antialiased;
  text-rendering: auto;
  -webkit-text-stroke: 1px transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  letter-spacing: 0.05rem;
  text-align: justify;
  font-weight: 300;
`;

/* ===============================================
#  global style
=============================================== */
const GlobalStyle = createGlobalStyle`
  body {
    ${Font}
    color: var(--md-text);
    line-height: 1.5;
    font-size: 15px;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    position: relative;
  }
  * {
    ${Font}
    box-sizing: boreder-box;
    margin: 0;
    padding: 0;
  }
  *:before, *:after {
    box-sizing: border-box;
  }
  input, button, textarea, button, select {
    ${Font}
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    &:focus {
      border: none;
      outline: none;
    }
  }

`;

export default GlobalStyle;
