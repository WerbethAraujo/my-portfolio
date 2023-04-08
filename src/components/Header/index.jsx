import React from 'react';
import { RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri';
import { AiFillInstagram, AiOutlineArrowDown } from 'react-icons/ai';
import Avatar from '../../assets/images/eu.jpg';
import { Container, Content, SocialsBox } from './styles';

const Header = () => {
  return (
    <Container>
      <section className='header'>
        <div className='avatar'>
          <img src={Avatar} alt='foto de perfil do potifolio' />
        </div>
        <Content>
          <span>Olá 👋, meu nome é Werbeth. Sou um...</span>
          <h1>Desenvolvedor Frontend</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nobis
            eum culpa rem aperiam tempore recusandae. Dicta, amet minima
            perferendis.
          </p>
        </Content>
        <SocialsBox>
          <a href='#'>
            <RiLinkedinFill className='icon' />
          </a>
          <a href='#'>
            <RiWhatsappFill className='icon' />
          </a>
          <a href='#'>
            <AiFillInstagram className='icon' />
          </a>
        </SocialsBox>
        <a href='#' className='arrow'>
          <AiOutlineArrowDown className='icon' />
        </a>
      </section>
    </Container>
  );
};

export default Header;
