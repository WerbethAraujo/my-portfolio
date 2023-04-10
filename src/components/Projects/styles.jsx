import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  margin-bottom: ${({ theme }) => theme.sizes.marginBottom};
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  h2 {
    position: relative;
    margin-bottom: 3rem;
    align-self: flex-start;

    &::after {
      content: '';
      background: ${({ theme }) => theme.colors.primary};
      position: absolute;
      width: 70%;
      height: 70%;
      top: 0;
      left: 0;
      z-index: -10;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    list-style: none;
    gap: 3rem;
  }

  .btn {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.darkPrimary};
    margin: 1.5rem 0;
    padding: 1.5rem 3rem;
    display: inline-block;
    font-weight: 500;
    font-size: 1.7rem;
    margin-top: 6rem;
    align-self: center;
  }
`;

export const Card = styled.li`
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-1rem);

    div {
      img {
        transform: scale(1.1);
        filter: blur(0.5rem);
        -webkit-filter: blur(0.5rem);
      }

      .icon {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(3);
      }
    }
  }
  div {
    position: relative;
    width: 100%;
    height: 20rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    margin-bottom: 1.5rem;
    overflow: hidden;

    .icon {
      position: absolute;
      color: ${({ theme }) => theme.colors.black};
      top: 1rem;
      right: 1rem;
      z-index: 10;
      width: 3rem;
      height: 3rem;
    }

    img {
      object-fit: fill;
      transition: all 0.3s ease-in;
    }
  }

  span {
    display: inline-block;
    color: ${({ theme }) => theme.colors.darkPrimary};
    font-weight: 500;
    font-size: 1.4rem;
    margin-bottom: 1rem;

    &:not(:last-of-type) {
      margin-right: 1rem;

      &::after {
        content: '';
        display: inline-block;
        background: ${({ theme }) => theme.colors.darkPrimary};
        border-radius: 50%;
        width: 0.5rem;
        height: 0.5rem;
        margin: 0 0 0.25rem 1rem;
      }
    }
  }

  h3 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.black};
  }
`;
