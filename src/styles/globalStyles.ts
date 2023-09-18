import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Mono', monospace;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    background: hsla(200, 60%, 70%, 0.4);
  }

  p {
    font-family: 'Lato', sans-serif;
  }

  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
