import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primaryText};
    transition: all .25s;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`;

export const Container = styled.div`
  max-width: 68.75rem;
  margin: auto;
  padding: 0 1.25rem;
  position: relative;
`;
