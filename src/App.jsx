import React from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './assets/styles/theme/default';
import { GlobalStyle } from './assets/styles/Global';

import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
};

export default App;
