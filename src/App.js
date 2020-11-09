import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './modules/header/Header'
import Home from './modules/home/Home'

function App() {
  return (
    <div>
      <header className="App-header">
        <Header/>
      </header>
      <div className="App-home">
        <Home/>
      </div>
    </div>
  );
}

export default App;
