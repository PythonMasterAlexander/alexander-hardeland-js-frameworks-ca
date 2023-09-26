import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, legend {
    font-family: 'Roboto Mono', monospace;
  }

  p, a, span, button {
    font-family: 'Lato', sans-serif;
  }

  html, body, #root, form {
    height: 100%;
  }

  :root {
    --background-color: hsla(200, 60%, 70%, 0.4);
    --card-product-background-color: hsla(220, 36%, 21%, 1);
    --button-background-color: hsla(0, 0%, 100%, 1);
    --input-padding-vertical: 7px;
    --input-padding-horizontal: 10px;
    --page-border-radius: 5px;
    --button-padding-horizontal: 15px;
    --search-background-color: hsla(220, 36%, 21%, 1);
  }

  html {
    background: var(--background-color);
  }

  li {
    list-style-type: none;
  }

  button {
    background: none;
  }

  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  header, footer {
    padding-block: min(20vh, 3.375rem);
  }

  form input, form textarea {
    display: block;
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
