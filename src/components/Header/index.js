import React from 'react';

import marvelLogo from '~/assets/images/marvelLogo.png';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <img src={marvelLogo}></img>
    </Container>
  );
}

export default Header;
