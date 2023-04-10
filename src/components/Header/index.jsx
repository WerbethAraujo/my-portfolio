import React from 'react';
import { RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri';
<<<<<<< HEAD
import { AiOutlineArrowDown, AiFillGithub } from 'react-icons/ai';
=======
import { AiFillInstagram, AiOutlineArrowDown } from 'react-icons/ai';
>>>>>>> 4754215d0d6e0ba8c8d287ee1691e793ed437797
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
<<<<<<< HEAD
            <AiFillGithub className='icon' />
=======
            <AiFillInstagram className='icon' />
>>>>>>> 4754215d0d6e0ba8c8d287ee1691e793ed437797
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
