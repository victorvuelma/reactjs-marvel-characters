import React from 'react';

import './App.css';

import Main from './pages/Main';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <GlobalStyle>
      <Main />
    </GlobalStyle>
  );
}

export default App;
