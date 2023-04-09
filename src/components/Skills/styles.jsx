import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: ${({ theme }) => theme.sizes.marginBottom};
  position: relative;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  gap: 6rem;

  ul {
    list-style: none;
  }

  .skills {
    width: 100%;
    max-width: 47rem;

    div {
      margin-bottom: 3rem;

      h2 {
        margin-bottom: 1.5rem;
        position: relative;

        &::before {
          content: '';
          background: ${({ theme }) => theme.colors.primary};
          position: absolute;
          width: 45%;
          height: 70%;
          top: 0;
          left: 0;
          z-index: -10;
        }
      }
    }
  }
`;

export const Content = styled.div`
  h3 {
    margin-bottom: 1.5rem;
    font-size: 3rem;
  }

  ul {
    li {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.darkPrimary};
      text-transform: uppercase;
      text-align: right;
      font-size: 1.4rem;
      padding: 2.5rem;
      font-weight: bold;

      &:not(:last-of-type) {
        margin-bottom: 1.5rem;
      }
    }
  }
`;

export const Experience = styled.div`
  max-width: 60rem;
  width: 100%;

  > h3 {
    margin-bottom: 1.5rem;
    font-size: 3rem;
  }

  ul {
    li {
      border-top: 1px solid ${({ theme }) => theme.colors.darkPrimary};
      display: flex;
      padding: 4rem 0;

      .period {
        min-width: 12rem;
        font-size: 1.5rem;
        margin-top: 0.3rem;
      }

      .description {
        margin-left: 4rem;

        h3 {
          margin-bottom: 1rem;
          font-size: 2rem;
        }

        h4 {
          font-size: 1.8rem;
          font-weight: 400;
        }
      }
    }
  }
`;
