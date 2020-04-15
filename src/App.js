import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import CartView from './pages/CartView';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={CartView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
