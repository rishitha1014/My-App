import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{lineHeight: 0.25, padding: 0.5 }}>
        <img src={logo} alt="logo" />
        </div>
        <p>NY SYSTEMS Inc.</p>
        <div style={{ color: 'blue', lineHeight : 1.25, padding: 20, alignItems: 'right', justifyContent: 'left'}}>
        <button>REGISTER</button>
        <button>LOGIN</button>
        </div>
      </header>
</div>
  );
}

export default App;
