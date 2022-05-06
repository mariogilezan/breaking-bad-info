import styled from 'styled-components';
import spinner from '../../img/spinner.gif';

const SpinnerImg = styled.img`
  width: 12.5rem;
  display: block;
  margin: auto;
`;

export default function Spinner() {
  return <SpinnerImg src={spinner} alt='Loading spinner' />;
}
