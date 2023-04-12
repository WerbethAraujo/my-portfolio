import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

import Skills from './components/Skills';
import Projects from './components/Projects';

import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default App;
