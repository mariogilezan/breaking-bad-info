import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardLinkWrapper = styled(Link)`
  position: relative;
  height: 20rem;
  color: #f4f4f4;
  transition: transform 0.25s, color 0.25s;
  &:hover {
    transform: translateY(-10px);
    color: ${({ theme }) => theme.color.accent};
  }
  &:active {
    transform: translateY(0);
  }
  @media screen and (max-width: 37.5rem) {
    height: 28rem;
  }
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    object-position: top;
    border-radius: 0.5rem;
    @media screen and (max-width: 37.5rem) {
      height: 28rem;
    }
  }
  .title {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0 0 0.5rem 0.5rem;
    h4 {
      font-size: 1.3rem;
    }
  }
`;
