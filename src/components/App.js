import React from 'react';
import '../assets/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

function App() {
  return (
    <div className="App mdl-card mdl-shadow--2dp">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
