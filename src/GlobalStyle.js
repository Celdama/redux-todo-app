import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #1e293b;  
  }


  #root {
    display: flex;
    justify-content: center;
  }
`;

export default GlobalStyle;
