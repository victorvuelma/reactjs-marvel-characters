import React from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import { Container, Content } from './styles';

function Main() {
  return (
    <Container>
      <Header />
      <div>
        <Content>
          <h1>Character</h1>
        </Content>
      </div>
      <Footer />
    </Container>
  );
}

export default Main;
