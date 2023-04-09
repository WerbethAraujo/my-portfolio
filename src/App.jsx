import React from 'react';

import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
      </main>
    </>
  );
};

export default App;
