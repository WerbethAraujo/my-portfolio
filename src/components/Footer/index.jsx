import React from 'react';
import { Container, Form } from './styles';

const Footer = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Footer;
