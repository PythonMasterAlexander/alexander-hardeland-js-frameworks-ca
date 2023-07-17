import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
  }
  
  body, html, #root {
    height: 100%;
  }

  main {
    flex-grow: 1;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 2% auto;
  }
`;

export default GlobalStyles;
