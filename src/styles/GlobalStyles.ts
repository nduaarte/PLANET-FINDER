import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: Nunito, sans-serif;
  }

  ul {
    list-style: none;
  }

  :root {
    --primary: #000000;
    --secondary: #202020;
    --lightgrey: #757575;
    --yellow: #FFC500;
    --yellow2: #b59c47;
  }
`