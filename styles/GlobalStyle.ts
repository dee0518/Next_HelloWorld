import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  ul, li {
    list-style : none;
  }
`;

export default GlobalStyles;
