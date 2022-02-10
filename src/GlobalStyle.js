import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  .App {
    outline: 1px solid red;
    height: 100vh;
  }

  #root {
    padding: 40px;
  }
`;
