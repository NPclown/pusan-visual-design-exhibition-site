import React from 'react';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Graduate from './pages/Graduate';
import ArtDetail from './pages/ArtDetail';
import GraduateDetail from './pages/GraduateDetail'
import ArtPage from './pages/ArtPage';
import Search from './pages/Search';
import Guest from './pages/Guest';
import NoMatch from './pages/NoMatch';
import Introduce from './pages/Introduce';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css';
import './assets/font.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/profile" render={(props) => <Graduate {...props} />} />
        <Route exact path="/profile/detail/:id" render={(props) => <GraduateDetail {...props} />} />
        <Route exact path="/art/detail/:id" render={(props) => <ArtDetail {...props} />} />
        <Route exact path="/art/:type" render={(props) => <ArtPage {...props} />} />
        <Route exact path="/search/title/:search" render={(props) => <Search {...props} />} />
        <Route exact path="/search/name/:name" render={(props) => <Search {...props} />} />
        <Route exact path="/guest" render={(props) => <Guest {...props} />} />
        <Route exact path="/about" render={(props) => <Introduce {...props} />} />
        <Route exact path="/error" render={(props) => <NoMatch {...props} />} />
        <Route exact path="*" render={(props) => <NoMatch {...props} />} />
      </Switch>
    </Router>
  );
}

export default App
