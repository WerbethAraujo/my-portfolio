import styled from 'styled-components';

<<<<<<< HEAD
export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.background};

  .footer {
    position: relative;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 9rem 0 2.5rem 0;

    .box {
      position: absolute;
      top: -5rem;
      left: 2rem;
    }

    h2 {
      font-size: 5.6rem;
      color: ${({ theme }) => theme.colors.primary};
      max-width: 50rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 0.5);
      margin: 5rem 0 2rem 0;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 55rem;
  color: ${({ theme }) => theme.colors.white};

  .button {
    margin-top: 2rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.darkPrimary};
    padding: 1.5rem 3rem;
    display: inline-block;
    font-weight: 500;
    font-size: 1.7rem;
    margin-top: 3rem;
    text-align: center;

    &:disabled {
      background: ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.white};
      cursor: default;
    }
  }
`;

export const FormBox = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  & > * {
    display: block;
    text-align: left;
  }

  label {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    color: ${({ theme }) => theme.colors.black};
    outline: none;
    resize: none;
    padding: 1rem;
    font-family: inherit;
    width: 100%;
    font-size: 1.4rem;
  }
`;
=======
export const Container = styled.footer``;

export const Form = styled.form``;

export const FormBox = styled.div``;
>>>>>>> b96d82f8fef80424894f466c7a00de90780f8ca2
