import React, { useEffect, useState } from 'react';

import { Input } from './styles';
import { useDebouncedCallback } from 'use-debounce/lib';

function Search({ search, setSearch }) {
  const [text, setText] = useState(search);

  const [textUpdateDebounce] = useDebouncedCallback(() => {
    setSearch(text);
  }, 1000);

  useEffect(() => {
    if (search !== text) {
      setText(search);
    }
  }, [search, setText]);

  useEffect(() => {
    textUpdateDebounce();
  }, [text]);

  return (
    <Input
      placeholder="Characters"
      value={text}
      onChange={(event) => setText(event.target.value)}
    />
  );
}

export default Search;
