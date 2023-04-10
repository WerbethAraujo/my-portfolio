import React from 'react';
import { Container, Card } from './styles';
import { AiFillGithub } from 'react-icons/ai';

import ProjectImage from '../../assets/images/projeto1.png';

const Projects = () => {
  return (
    <Container>
      <h2>Alguns Projetos</h2>
      <ul>
        <Card>
          <a href='#'>
            <div>
              <AiFillGithub className='icon' />
              <img src={ProjectImage} alt='imagem do projeto' />
            </div>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <h3>Portifolio para devs</h3>
            <p>
              Lorem ipsum dolor sit vitae. Rerum fugiat tempore amet consectetur
              adipisicing elit. Aliquam, vitae. Rerum fugiat tempore expedita!
            </p>
          </a>
        </Card>
        <Card>
          <a href='#'>
            <div>
              <AiFillGithub className='icon' />
              <img src={ProjectImage} alt='imagem do projeto' />
            </div>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <h3>Portifolio para devs</h3>
            <p>
              Lorem ipsum dolor sit amet vitae. Rerum fugiat tempore consectetur
              adipisicing elit. Aliquam, vitae. Rerum fugiat tempore expedita!
            </p>
          </a>
        </Card>
        <Card>
          <a href='#'>
            <div>
              <AiFillGithub className='icon' />
              <img src={ProjectImage} alt='imagem do projeto' />
            </div>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <h3>Portifolio para devs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              vitae. Rerum fugiat vitae. Rerum fugiat tempore tempore expedita!
            </p>
          </a>
        </Card>
        <Card>
          <a href='#'>
            <div>
              <AiFillGithub className='icon' />
              <img src={ProjectImage} alt='imagem do projeto' />
            </div>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <h3>Portifolio para devs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              vitae. Rerum fugiat tempore vitae. Rerum fugiat tempore expedita!
            </p>
          </a>
        </Card>
        <Card>
          <a href='#'>
            <div>
              <AiFillGithub className='icon' />
              <img src={ProjectImage} alt='imagem do projeto' />
            </div>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <h3>Portifolio para devs</h3>
            <p>
              Lorem ipsum dolor sit amet vitae. Rerum fugiat tempore consectetur
              adipisicing elit. Aliquam, vitae. Rerum fugiat tempore expedita!
            </p>
          </a>
        </Card>
        <Card>
          <a href='#'>
            <div>
              <AiFillGithub className='icon' />
              <img src={ProjectImage} alt='imagem do projeto' />
            </div>
            <span>React</span>
            <span>React</span>
            <span>React</span>
            <h3>Portifolio para devs</h3>
            <p>
              Lorem ipsum dolor sit amet vitae. Rerum fugiat tempore consectetur
              adipisicing elit. Aliquam, vitae. Rerum fugiat tempore expedita!
            </p>
          </a>
        </Card>
      </ul>
      <a href='#' className='btn'>
        Veja Mais...
      </a>
    </Container>
  );
};

export default Projects;
