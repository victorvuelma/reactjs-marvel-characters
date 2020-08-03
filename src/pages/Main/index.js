import React from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Pagination from '~/components/Pagination';
import Search from '~/components/Search';
import Sort from '~/components/Sort';

import { Container, Content, Cards, Filters } from './styles';

function Main() {
  return (
    <Container>
      <Header />
      <div>
        <Content>
          <h1>Character</h1>

          <Filters>
            <Search></Search>
            <Sort></Sort>
          </Filters>

          <Cards></Cards>

          <Pagination></Pagination>
        </Content>
      </div>
      <Footer />
    </Container>
  );
}

export default Main;
