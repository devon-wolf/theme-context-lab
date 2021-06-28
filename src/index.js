import React from 'react';
import { render } from 'react-dom';
import App from './app/App';
import ThemeProvider from './state/ThemeProvider';

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
