import React from 'react';
import logo from './images/profile.png';
import './App.css';
import TypewriterTextComponent from "./components/TypewriterTextComponent"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo-static" alt="logo" />
          <TypewriterTextComponent/>
      </header>
    </div>
  );
}

export default App;
