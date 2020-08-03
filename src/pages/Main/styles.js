import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.main`
  background: ${colors.background};

  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: center;

    flex: 1;
  }
`;

export const Content = styled.section`
  background: ${colors.white};

  flex: 1;

  max-width: 1320px;
  width: 100%;

  margin: 40px 20px;
  padding: 45px 35px;

  box-shadow: 0px 2px 6px 0px rgba(69, 91, 99, 0.08);
  border-radius: 8px;

  h1 {
    color: ${colors.red};
    font-size: 36px;
    font-weight: 300;
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
`;

export const Cards = styled.div``;
