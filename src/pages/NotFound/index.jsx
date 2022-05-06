import { Link } from 'react-router-dom';
import styled from 'styled-components';
import errorImg from '../../img/404.jpg';

const NotFoundWrapper = styled.div`
  max-width: 37.5rem;
  margin: 3rem auto;
  color: #f4f4f4;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
  .errorMessage {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    position: absolute;
    bottom: 0;
    border-radius: 0 0 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    h1 {
      font-size: 3rem;
      margin: 0;
      color: ${({ theme }) => theme.color.accent};
    }
  }
  a {
    background-color: ${({ theme }) => theme.color.accent};
    color: #f4f4f4;
    padding: 0.2rem 0.4rem;
    transition: box-shadow 0.25s;
    &:hover {
      box-shadow: 0 0 0.5rem 0.25rem rgb(63, 181, 115, 0.7);
    }
  }
`;

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <img src={errorImg} alt='404 error' />
      <div className='errorMessage'>
        <h1>404</h1>
        <p>Not Found</p>
        <Link to='/'>Go Home</Link>
      </div>
    </NotFoundWrapper>
  );
}
