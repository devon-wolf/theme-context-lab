/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ThemeProvider from '../state/ThemeProvider';

describe('App component', () => {
  it('renders App', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    
    const toggle = screen.getByLabelText('dark mode toggle');
    const list = screen.getByRole('list', { name: 'list of fake data' });

    fireEvent.click(toggle);
    expect(list).toHaveStyle({ 'color': '#FFFFFF', 'background-color': '#000000' });
  });
});
