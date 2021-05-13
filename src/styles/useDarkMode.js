import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [ theme, setTheme ] = useState('light');

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
    // console.log(mode);
  }

  const toggleTheme = () => {
    theme === 'dark' ? setMode('light') : setMode('dark');
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme ? setTheme(localTheme) : setMode('light');
  }, []);
  
  return [ theme, toggleTheme ];
}