import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  gap: 2rem;
  min-height: 37.5rem;
  padding-bottom: 2rem;
  @media screen and (max-width: 37.5rem) {
    flex-direction: column;
  }
  .imgWrapper {
    width: 50%;
    height: 100%;
    @media screen and (max-width: 37.5rem) {
      width: 90%;
      margin: auto;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }
  .details {
    border-radius: 0.5rem;
    width: 50%;
    padding: 2rem;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.secondaryText};
    @media screen and (max-width: 37.5rem) {
      width: 90%;
      margin: auto;
    }
    h2 {
      font-size: 2rem;
      &:first-letter {
        color: ${({ theme }) => theme.color.accent};
      }
    }
    small {
      font-size: 0.9rem;
    }
    ul {
      width: 100%;
      height: 100%;
      margin-top: 1.5rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      align-items: center;
      @media screen and (max-width: 42.5rem) {
        grid-template-columns: 1fr;
      }
    }
    li {
      h3 {
        margin-bottom: 0.3rem;
      }
    }
  }
`;
