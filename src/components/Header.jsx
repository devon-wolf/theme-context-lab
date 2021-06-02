import React from 'react';
import { useDarkToggle } from '../state/ThemeProvider';

const Header = () => {
  const toggleDarkMode = useDarkToggle();
  return (
    <header>
      <h1>Theme Switch Lab</h1>
      <button onClick={toggleDarkMode}>Toggle theme?</button>
    </header>
  );
};

export default Header;
