import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ handleThemeToggle }) => {
  return (
    <header>
      <h1>Theme Switch Lab</h1>
      <button onClick={handleThemeToggle}>Toggle theme?</button>
    </header>
  );
};

Header.propTypes = {
  handleThemeToggle: PropTypes.func.isRequired
};

export default Header;
