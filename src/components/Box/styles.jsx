import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 3rem;
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${({ theme }) => theme.colors.darkPrimary};
    text-transform: uppercase;
    writing-mode: vertical-lr;
    text-orientation: upright;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
