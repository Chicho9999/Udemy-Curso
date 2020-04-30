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
        <ReactExample />
      </header>
    </div>
  );
}

export default App;
