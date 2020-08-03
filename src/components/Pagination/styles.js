import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 25px;
    height: 45px;
    margin: 0 8px;

    background: ${colors.white};
    border: 1px solid ${colors.footerDark};

    display: flex;
    justify-content: center;
    align-items: center;

    transition: border-color 0.5s;

    &:first-of-type {
      border-bottom-left-radius: 3px;
      border-top-left-radius: 3px;
    }

    &:last-of-type {
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
    }

    &:not([disabled]):hover {
      cursor: pointer;
      border-color: ${colors.red};
    }

    &:disabled {
      background: ${colors.footerDark};
    }
  }

  div {
    label {
      color: ${colors.paginationText};

      font-size: 14px;
    }
  }
`;
