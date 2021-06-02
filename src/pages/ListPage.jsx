/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const ListPage = ({ results }) => {
  return (
    <main>
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
