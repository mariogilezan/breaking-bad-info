import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/normalize.css';
import { Container, GlobalStyle } from './styles/globalStyles';

import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import CharacterList from './features/characters/CharacterList';
import CharacterPage from './features/characters/CharacterPage';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/themes';
import { useTheme } from './hooks/useTheme';
import NotFound from './pages/NotFound';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

function App() {
  const { theme, handleThemeChange, mountedComponent } = useTheme();

  if (!mountedComponent) return <div />;
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Router>
          <Container>
            <ThemeToggle
              currentTheme={theme}
              handleThemeChange={handleThemeChange}
            />
            <Header />
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={<CharacterList />} />
              <Route
                path='/character/:characterName'
                element={<CharacterPage />}
              />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
