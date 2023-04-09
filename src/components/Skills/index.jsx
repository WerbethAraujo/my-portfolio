import React from 'react';
import { Container, Content, Experience } from './styles';

const Skills = () => {
  return (
    <Container>
      <div className='skills'>
        <div>
          <h2>Habilidades & Experiêcias</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut
            ipsum iste voluptas cumque ratione iure. At enim omnis laboriosam
            architecto.
          </p>
        </div>
        <Content>
          <h3>Habilidades</h3>
          <ul>
            <li>Skill1</li>
            <li>Skill2</li>
            <li>Skill3</li>
          </ul>
        </Content>
      </div>
      <Experience>
        <h3>Experiências Profisionais</h3>
        <ul>
          <li>
            <div className='period'>2021 até o momento</div>
            <div className='description'>
              <h3>Motorista De Onibus</h3>
              <h4>Plangecon LTDA</h4>
            </div>
          </li>
          <li>
            <div className='period'>2019 - 2020 </div>
            <div className='description'>
              <h3>Motorista De Onibus</h3>
              <h4>Plangecon LTDA</h4>
            </div>
          </li>
          <li>
            <div className='period'>2014 - 2018</div>
            <div className='description'>
              <h3>Motorista De Onibus</h3>
              <h4>Plangecon LTDA</h4>
            </div>
          </li>
        </ul>
      </Experience>
    </Container>
  );
};

export default Skills;
