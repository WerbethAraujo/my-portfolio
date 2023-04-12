import React from 'react';
<<<<<<< HEAD
import { Container, Form, FormBox } from './styles';

import Box from '../Box';
=======
import { Container, Form } from './styles';
>>>>>>> b96d82f8fef80424894f466c7a00de90780f8ca2

const Footer = () => {
  return (
    <Container>
<<<<<<< HEAD
      <div className='footer'>
        <div className='box'>
          <Box text='Contato' />
        </div>
        <h2>Entre em Contato</h2>
        <Form>
          <FormBox>
            <label htmlFor='name'>Nome:</label>
            <input type='text' name='name' placeholder='Nome' />
          </FormBox>
          <FormBox>
            <label htmlFor='email'>E-mail:</label>
            <input type='email' name='email' placeholder='E-mail' />
          </FormBox>
          <FormBox>
            <label htmlFor='mensage'>Mensagem:</label>

            <textarea
              name='mensage'
              rows='10'
              placeholder='Mensagem'
            ></textarea>
          </FormBox>
          <a className='button' href='#'>
            Enviar
          </a>
        </Form>
        <p>2023&copy;W.A.S</p>
      </div>
=======
      <h2>Entre em Contato</h2>
      <Form>
        <FormBox>
          <label htmlFor='name'>Nome</label>
          <input type='text' name='name' placeholder='Nome' />
        </FormBox>
        <FormBox>
          <label htmlFor='email'>Nome</label>
          <input type='email' name='email' placeholder='E-mail' />
        </FormBox>
        <textarea rows='10' placeholder='Mensagem'></textarea>
        <a href='#'>Enviar</a>
      </Form>
>>>>>>> b96d82f8fef80424894f466c7a00de90780f8ca2
    </Container>
  );
};

export default Footer;
