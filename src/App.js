import React from 'react';
import logo from './logo.svg';
import ReactIcon from './ReactIcon'
import ReactExample from './ReactExample'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactIcon title={'Learn React With me'}/>
        <ReactExample x={2} y={4} title={<h1>Este es un title</h1>}/>
      </header>
    </div>
  );
}

export default App;
