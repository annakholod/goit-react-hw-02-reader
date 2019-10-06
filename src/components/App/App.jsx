import React from 'react';
import './App.module.css';
import publications from '../../accepts/publications.json';
import Reader from '../Reader/Reader';

const App = () => <Reader items={publications} />;

export default App;
