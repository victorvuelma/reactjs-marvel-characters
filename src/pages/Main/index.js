import React, { useEffect, useState } from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Pagination from '~/components/Pagination';
import Search from '~/components/Search';
import Sort from '~/components/Sort';

import api from '~/services/api';

import { Container, Content, Cards, Filters } from './styles';
import Card from '~/components/Card';

function Main() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const apiFetch = async () => {
      const response = await api.get('characters');

      if (response.data && response.data.data) {
        const data = response.data.data;

        setCharacters(data.results);
      }
    };

    apiFetch();
  }, [search, sort]);

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

          <Cards>
            {characters &&
              characters.map((character) => <Card character={character} />)}
          </Cards>

          <Pagination></Pagination>
        </Content>
      </div>
      <Footer />
    </Container>
  );
}

export default Main;
