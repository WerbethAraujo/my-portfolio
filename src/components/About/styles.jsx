import styled from 'styled-components';

export const Container = styled.section`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.sizes.marginBottom};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

<<<<<<< HEAD
  .avatar2 {
    position: relative;
    width: 100%;
    max-width: 47rem;
=======
  div {
    position: relative;
    width: 100%;
    max-width: 55rem;
>>>>>>> 4754215d0d6e0ba8c8d287ee1691e793ed437797

    img {
      width: 100%;
      height: 43rem;
      object-fit: fill;
    }
<<<<<<< HEAD

    .box {
      position: absolute;
      top: -7rem;
      left: -1rem;
    }
=======
>>>>>>> 4754215d0d6e0ba8c8d287ee1691e793ed437797
  }
`;

export const Content = styled.div`
  width: 100%;
<<<<<<< HEAD
  max-width: 60rem;
=======
>>>>>>> 4754215d0d6e0ba8c8d287ee1691e793ed437797

  h2 {
    margin-bottom: 1.5rem;
  }

  a {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.darkPrimary};
    margin-top: 1.5rem;
    padding: 1.5rem 3rem;
    display: inline-block;
    font-weight: 500;
    font-size: 1.7rem;
  }
`;
