import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: 24%;
  min-width: 230px;
  margin-bottom: 35px;
  padding: 10px 20px;

  background: ${colors.white};
  border: 1px solid ${colors.cardBorder};
  border-bottom: 2px solid ${colors.red};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;

    background: ${colors.footerLight};
  }

  h6 {
    color: ${colors.black};

    font-size: 16px;
    line-height: 24px;
    font-weight: medium;
  }

  label {
    margin-top: 13px;

    font-size: 14px;
    line-height: 24px;
    color: ${colors.red};
  }

  hr {
    width: 55px;
    margin: 20px 0 15px 0;

    border-bottom: 2px solid ${colors.footerDark};
  }

  p {
    text-align: justify;
    max-width: 100%;
  }
`;
