import React from 'react';

import { Container } from './styles';

function Card({ character }) {
  return (
    <Container>
      <img
        src={character.thumbnail.path + '.' + character.thumbnail.extension}
        alt={character.name}
      />

      <h6>{character.name}</h6>
      <label>{character.name}</label>

      <hr />

      <p>{character.description || 'Descrição não informada'}</p>
    </Container>
  );
}

export default Card;
