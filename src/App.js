import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Footer from './layout/footer'
import Header from './layout/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import home from './pages/home';
import findxyz from './pages/findXYZ';
import findres from './pages/findrestaurant';
import mycv from './pages/mycv';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/findxyz" component={findxyz} />
        <Route exact path="/findres" component={findres} />
        <Route exact path="/mycv" component={mycv} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
