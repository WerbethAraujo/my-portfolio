import React from 'react';
import Avatar from '../../assets/images/eu.jpg';
import { Container, Content } from './styles';

const Header = () => {
  return (
    <Container>
      <div>
        <img src={Avatar} alt='foto de perfil do potifolio' />
      </div>
      <Content>
        <span>Olá 👋, meu nome é Werbeth</span>
        <h1>Desenvolvedor Frontend</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nobis
          eum culpa rem aperiam tempore recusandae. Dicta, amet minima
          perferendis temporibus beatae doloribus dolore harum nesciunt expedita
          a delectus similique!
        </p>
      </Content>
    </Container>
  );
};

export default Header;
