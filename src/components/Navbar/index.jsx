import React from 'react';
import { Container, NavLinks } from './styles';

const Navbar = () => {
  return (
    <Container>
      <div className='navbar'>
        <a className='logo' href='/'>
          <strong>W.A.S</strong>
        </a>

        <NavLinks>
          <ul>
            <li>
              <a href='#'>Sobre Mim</a>
            </li>
            <li>
              <a href='#'>Experiências</a>
            </li>
            <li>
              <a href='#'>Projetos</a>
            </li>
            <li>
              <a href='#'>Contato</a>
            </li>
          </ul>
        </NavLinks>
      </div>
    </Container>
  );
};

export default Navbar;
