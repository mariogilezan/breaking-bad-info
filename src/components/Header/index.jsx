import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.png';

const HeaderWrapper = styled.header`
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 10rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: #0d2213;
    border: 3px solid ${({ theme }) => theme.color.accent};
    transform: scale(0.95);
    transition: transform 0.25s, box-shadow 0.25s;
    &:hover {
      transform: scale(1);
      box-shadow: 0 0 0.5rem 0.25rem rgb(63, 181, 115, 0.7);
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to='/'>
        <img src={logo} alt='site logo' />
      </Link>
    </HeaderWrapper>
  );
}
