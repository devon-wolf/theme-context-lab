/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useDarkMode } from '../state/ThemeProvider';

const ListPage = ({ results }) => {
  const darkMode = useDarkMode();

  const styleObj = darkMode ? {
    backgroundColor: '#000000',
    color: '#FFFFFF'
  } : {};

  return (

    <ul aria-label="list of fake data" style={styleObj}>
      {results.map(result => (
        <li key={result.name} aria-label="list item">
          {result.name}
        </li>
      ))}
    </ul>

  );
};

ListPage.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string.isRequired })).isRequired
};

export default ListPage;
