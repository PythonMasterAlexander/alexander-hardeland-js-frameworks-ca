import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Mono', monospace;
  }

  p, a, span {
    font-family: 'Lato', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    background: hsla(200, 60%, 70%, 0.4);
  }

  li {
    list-style-type: none;
  }

  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }

  footer span {
    font-size: 0.938rem;
    padding-right: 0.75rem;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
