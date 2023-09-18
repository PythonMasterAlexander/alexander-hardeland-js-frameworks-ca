import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body, html {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Mono', monospace;
  }

  p {
    font-family: 'Lato', sans-serif;
  }

  main {
    flex-grow: 1;
  }

  #root {
    background: hsla(200, 60%, 70%, 0.4);
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }
`;

export default GlobalStyles;
