/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useDarkMode } from '../state/ThemeProvider';
import style from './ListPage.css';

const ListPage = ({ results }) => {
  const darkMode = useDarkMode();

  return (
    <main className={darkMode ? style.dark : ''}>
      <ul>
        {results.map(result => (
          <li key={result.name}>
            {result.name}
          </li>
        ))}
      </ul>
    </main>
  );
};

ListPage.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired
};

export default ListPage;
