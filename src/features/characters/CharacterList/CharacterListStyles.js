import styled from 'styled-components';

export const FormWrapper = styled.section`
  height: 6.25rem;
  input {
    display: block;
    padding: 0.7rem;
    border: 3px solid ${({ theme }) => theme.color.accent};
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primaryText};
    border-radius: 0.5rem;
    width: 60%;
    margin: auto;
    outline: 0;
    transition: box-shadow 0.25s;
    &:focus {
      box-shadow: 0 0 0.5rem 0.25rem rgb(63, 181, 115, 0.7);
    }
    @media screen and (max-width: 37.5rem) {
      width: 90%;
    }
  }
`;

export const CardsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media screen and (max-width: 50rem) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 37.5rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 31.25rem) {
    grid-template-columns: 1fr;
  }
`;
