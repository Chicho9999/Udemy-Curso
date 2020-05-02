import React, {StrictMode} from 'react';
import logo from './logo.svg';
import ReactIcon from './ReactIcon'
import ReactExample from './ReactExample'
import './App.css';

function App() {
  return (
    <StrictMode>
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
    </StrictMode>
  );
}

export default App;
