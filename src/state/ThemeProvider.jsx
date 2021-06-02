import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(darkMode => !darkMode);
  const state = { darkMode, toggleDarkMode };

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useDarkMode = () => {
  const { darkMode } = useContext(ThemeContext);
  return darkMode;
};

export const useDarkToggle = () => {
  const { toggleDarkMode } = useContext(ThemeContext);
  return toggleDarkMode;
};

export default ThemeProvider;
