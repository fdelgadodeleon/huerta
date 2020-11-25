import React from 'react';
import './App.css';

// components
import Header from './modules/header/Header';
import Home from './modules/home/Home';
import About from './modules/about/About';
import DetailFunc from './modules/detail/DetailFunc';
import NotFound from './modules/notFound/NotFound';

// router
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <header className="App-header">
        <Header />
      </header>
      <div className="App-home">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/details/:id" component={DetailFunc} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
