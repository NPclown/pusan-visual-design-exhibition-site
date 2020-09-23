import React from 'react';
import { HashRouter , MemoryRouter ,Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Graduate from './pages/Graduate'
import GraduateDetail from './pages/GraduateDetail'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/profile" render={(props) => <Graduate {...props} />} />
        <Route exact path="/profile/detail/:idx" component={GraduateDetail } />

      </Switch>
    </Router>
  );
}

export default App
//<Route path="/posts/:postId" component={Post} />