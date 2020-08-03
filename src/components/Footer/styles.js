import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.footer`
  border-top: 3px solid ${colors.red};

  > div {
    background: ${colors.footerLight};
    height: 225px;

    display: flex;
    align-items: flex-end;
  }
`;

export const Copyright = styled.div`
  background: ${colors.footerDark};

  width: 100%;
  height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    max-width: 500px;
  }
`;
