import React from 'react';
import { Container, Content } from './styles';
<<<<<<< HEAD
import Box from '../Box';
=======
>>>>>>> 4754215d0d6e0ba8c8d287ee1691e793ed437797
import Avatar2 from '../../assets/images/avatar2.jpg';

const About = () => {
  return (
    <Container>
<<<<<<< HEAD
      <div className='avatar2'>
        <img src={Avatar2} alt='imagem da seção sobre' />
        <div className='box'>
          <Box text='sobre' />
        </div>
=======
      <div>
        <img src={Avatar2} alt='avatar 2' />
>>>>>>> 4754215d0d6e0ba8c8d287ee1691e793ed437797
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
