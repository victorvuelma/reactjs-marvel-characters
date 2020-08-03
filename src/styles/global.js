import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export const GlobalStyle = createGlobalStyle`
  color: ${colors.black};

  p {
    text-align: center;
    font-size: 14px;
    line-height: 24px;
  }
`;
