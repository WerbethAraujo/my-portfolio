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

  h1, .h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 4.8rem;
    line-height: 4.8rem;
  }
  
  h2, .h2{
    color: ${({ theme }) => theme.colors.background};
    font-size: 3.6rem;
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
`;
