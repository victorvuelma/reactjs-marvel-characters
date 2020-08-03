import styled from 'styled-components';

import colors from '~/styles/colors';

export const Input = styled.input`
  height: 55px;
  width: 100%;
  max-width: 385px;

  padding: 0 10px;

  border-radius: 3px;
  border-bottom: 3px solid ${colors.inputBorder};
`;
