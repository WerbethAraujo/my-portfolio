import React from 'react';
import { Container } from './styles';

const Box = ({ text }) => {
  return (
    <Container>
      <span>{text}</span>
    </Container>
  );
};

export default Box;
