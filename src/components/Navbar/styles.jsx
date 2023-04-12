import styled from 'styled-components';

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.background};
  position: fixed;
  width: 100%;
  z-index: 10;

  .navbar {
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.3rem 2rem;

    .logo {
      position: absolute;
      top: 2rem;
      left: 2rem;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.primary};
    }

    ul {
      list-style: none;

      li {
        display: inline-block;
        font-size: 1.4rem;

        a {
          color: ${({ theme }) => theme.colors.lightPrimary};
          padding: 1rem;

          &:hover {
            font-weight: 600;
          }
        }

        &:not(:last-of-type) {
          margin-right: 2rem;
        }
      }
    }
  }
`;

export const NavLinks = styled.nav``;
