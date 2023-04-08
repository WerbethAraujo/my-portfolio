import { createGlobalStyle } from 'styled-components';

//Estilos Globais

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html{
    font-size: ${({ theme }) => theme.sizes.fontSize};
  }

  body {
    font-family: 'Roboto', sans-serif
  }

  button{
    cursor: pointer;
    outline: none;
  }

  h1, .h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 7.5rem;
    line-height: 7.5rem;
  }
  
  h2, .h2{
    color: ${({ theme }) => theme.colors.background};
    font-size: 4.8rem;
    font-weight: 500;
  }

  p, .p{
    color: ${({ theme }) => theme.colors.black};
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.5rem;

    &:not(:last-of-type){
      margin-bottom: 1.5rem;
    }

  }


  a{
    text-decoration: none;
  }
`;
