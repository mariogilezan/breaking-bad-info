import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('dark');
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    localStorage.setItem('currentTheme', mode);
    setTheme(mode);
  };

  const handleThemeChange = () => {
    theme === 'dark' ? setMode('light') : setMode('dark');
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('currentTheme');
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);

  return { theme, handleThemeChange, mountedComponent };
};
