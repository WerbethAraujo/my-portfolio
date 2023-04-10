import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.background};
  margin-bottom: ${({ theme }) => theme.sizes.marginBottom};

  .header {
    position: relative;
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
    min-height: 100vh;

    .avatar {
      position: absolute;
      width: 45rem;
      height: 45rem;
      top: 50%;
      left: 2rem;
      transform: translateY(-50%);

      &::before {
        content: '';
        position: absolute;
        width: 60%;
        height: 60%;
        top: -0.5rem;
        left: -0.5rem;
        border-top: 0.5rem solid ${({ theme }) => theme.colors.lightPrimary};
        border-left: 0.5rem solid ${({ theme }) => theme.colors.lightPrimary};
      }

      img {
        object-fit: fill;
        width: 100%;
        max-width: 45rem;
        max-height: 45rem;
      }
    }

    .arrow {
<<<<<<< HEAD
      position: absolute;
=======
      position: fixed;
>>>>>>> 4754215d0d6e0ba8c8d287ee1691e793ed437797
      background: ${({ theme }) => theme.colors.primary};
      width: 9rem;
      height: 9rem;
      border-radius: 50%;
      bottom: 4rem;
<<<<<<< HEAD
      left: 47%;
      transform: translateY(-50%);
=======
      left: 50%;
      transform: translateX(-50%);
>>>>>>> 4754215d0d6e0ba8c8d287ee1691e793ed437797
      display: flex;
      align-items: center;
      justify-content: center;
      animation: up-down 0.5s infinite alternate;
<<<<<<< HEAD
      z-index: 100;
=======
>>>>>>> 4754215d0d6e0ba8c8d287ee1691e793ed437797

      .icon {
        color: ${({ theme }) => theme.colors.background};
        width: 4rem;
        height: 4rem;

        &:hover {
          color: ${({ theme }) => theme.colors.darkPrimary};
          cursor: pointer;
        }
      }

      @keyframes up-down {
        from {
          transform: translateY(0);
        }

        to {
          transform: translateY(-1rem);
        }
      }
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 76rem;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);

  span {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    align-self: flex-end;
    max-width: 40rem;
  }
`;

export const SocialsBox = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  padding: 2.5rem;
  top: 4rem;
  right: 2rem;

  .icon {
    color: ${({ theme }) => theme.colors.background};
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
      color: ${({ theme }) => theme.colors.darkPrimary};
      cursor: pointer;
    }
  }
`;
