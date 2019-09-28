import React from 'react';
import './App.css';
import publications from '../../accepts/publications.json';
import Reader from '../Reader/Reader';

const App = () => {
  return <Reader items={publications} />;
};

export default App;
