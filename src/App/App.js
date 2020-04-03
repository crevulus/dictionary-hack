import React from 'react';
import Title from '../Title/Title';
import ModeSwitcher from '../ModeSwitcher/ModeSwitcher';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title />
      <ModeSwitcher />
      <iframe className="offer-wall" title="test-title" src="https://viral782.com/list/396727" height="300px" frameborder="0"></iframe>
    </div>
  );
}

export default App;
