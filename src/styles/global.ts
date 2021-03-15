import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --light-blue: #6933ff;
    --title-text: #363f5f;
    --body-text: #969cb3;
    --shape: #fff;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;