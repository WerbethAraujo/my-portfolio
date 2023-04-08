import React from 'react';
import { Container, Content } from './styles';
import Avatar2 from '../../assets/images/avatar2.jpg';

const About = () => {
  return (
    <Container>
      <div>
        <img src={Avatar2} alt='avatar 2' />
      </div>
      <Content>
        <h2>Sobre Mim</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nam iusto
          officiis dolore quibusdam nesciunt quos rerum eveniet, fugit dolorum
          numquam.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          iusto atque saeps vel omnis sit cupiditate eius
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          iusto atque saeps vel omnis sit cupiditate eius
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          iusto atque saeps vel omnis sit cupiditate eius
        </p>
        <a href='#'>Saiba mais</a>
      </Content>
    </Container>
  );
};

export default About;
