/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

const App = () => (
  <div className="App">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
