import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: #f0f0f5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  body, #root {
    min-height: 100%;
  }

  #root {
    margin: 0 auto;
    max-width: 960px;
    padding: 40px 20px;
  }
`;
