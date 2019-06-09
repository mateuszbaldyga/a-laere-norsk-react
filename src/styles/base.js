import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
  }

  html {
    -webkit-text-size-adjust: none;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lora', serif;
  }
`