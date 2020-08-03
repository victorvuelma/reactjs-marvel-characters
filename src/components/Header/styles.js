import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.header`
  height: 95px;
  width: 100%;
  background: ${colors.red};

  img {
    height: calc(100% - 6px);
    margin: 3px 10px;
  }
`;
