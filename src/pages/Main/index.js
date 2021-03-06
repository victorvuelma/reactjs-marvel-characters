import React, { useEffect, useState } from 'react';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Pagination from '~/components/Pagination';
import Search from '~/components/Search';
import Sort from '~/components/Sort';
import Card from '~/components/Card';

import loadingSpinner from '~/assets/svg/loading.svg';

import api from '~/services/api';

import { Container, Content, Cards, Filters, Loading } from './styles';

function Main() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('name');
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(true);

  const [characters, setCharacters] = useState([]);

  useEffect(() => setPage(1), [sort, search]);

  useEffect(() => {
    const apiFetch = async () => {
      setLoading(true);

      const response = await api.get('characters', {
        params: {
          limit: 12,
          offset: (page - 1) * 12,
          nameStartsWith: search || undefined,
          orderBy: sort,
        },
      });

      if (response.data && response.data.data) {
        const data = response.data.data;

        setPageCount(Math.ceil(data.total / 12));
        setCharacters(data.results);
      }

      setLoading(false);
    };

    apiFetch();
  }, [search, sort, page]);

  return (
    <Container>
      <Header />
      <div>
        <Content>
          <h1>Character</h1>

          <Filters>
            <Search search={search} setSearch={setSearch} />
            <Sort sort={sort} setSort={setSort}></Sort>
          </Filters>

          {loading ? (
            <Loading>
              <img src={loadingSpinner} />
            </Loading>
          ) : (
            <Cards>
              {characters &&
                characters.map((character) => (
                  <Card key={character.id} character={character} />
                ))}
            </Cards>
          )}

          <Pagination
            currentPage={page}
            setPage={setPage}
            pageCount={pageCount}
          ></Pagination>
        </Content>
      </div>
      <Footer />
    </Container>
  );
}

export default Main;
