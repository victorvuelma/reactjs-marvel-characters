import React from 'react';

import filterIcon from '~/assets/svg/filter.svg';
import arrowDown from '~/assets/svg/arrow-down.svg';

import { Container } from './styles';

function Sort({ sort, setSort }) {
  return (
    <Container>
      <img src={filterIcon} />

      <label>{sort === 'name' ? 'A-Z' : 'Z-A'}</label>

      <img
        src={arrowDown}
        onClick={() => setSort(sort === 'name' ? '-name' : 'name')}
      />
    </Container>
  );
}

export default Sort;
