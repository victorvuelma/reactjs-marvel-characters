import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import arrowLeft from '~/assets/svg/arrow-left.svg';
import arrowRight from '~/assets/svg/arrow-right.svg';

import { Container } from './styles';

function Pagination({ setPage, currentPage, pageCount }) {
  const [newPage, setNewPage] = useState(currentPage);

  const [pageChangeCallback] = useDebouncedCallback(() => {
    if (newPage && !isNaN(newPage)) {
      setPage(newPage > pageCount ? pageCount : newPage);
    }
  }, 1000);

  useEffect(() => {
    if (currentPage !== newPage) {
      setNewPage(currentPage);
    }
  }, [currentPage, setNewPage]);

  useEffect(() => {
    pageChangeCallback();
  }, [newPage, pageChangeCallback]);

  return (
    <Container>
      <button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        <img src={arrowLeft} alt="Página Anterior" />
      </button>
      <div>
        <input
          type="number"
          min="1"
          value={newPage}
          onChange={(event) => setNewPage(Number(event.target.value))}
        ></input>
        <label>de {pageCount}</label>
      </div>
      <button
        disabled={currentPage === pageCount}
        onClick={() => setPage(currentPage + 1)}
      >
        <img src={arrowRight} alt="Próxima Página" />
      </button>
    </Container>
  );
}

export default Pagination;
