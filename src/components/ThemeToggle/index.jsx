import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggleWrapper = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  display: flex;
  button {
    color: ${({ theme }) => theme.color.icon};
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 0;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export default function ThemeToggle({ currentTheme, handleThemeChange }) {
  return (
    <ThemeToggleWrapper>
      <button className='dark' onClick={handleThemeChange}>
        {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </ThemeToggleWrapper>
  );
}
