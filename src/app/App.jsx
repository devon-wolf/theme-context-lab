import React from 'react';
import Header from '../components/Header';
import ListPage from '../pages/ListPage';

const results = [{ name: 'first' }, { name: 'second' }, { name: 'third' }];

export default function App() {
  return (
    <>
      <Header />
      <ListPage results={results} />
    </>
  );
}
