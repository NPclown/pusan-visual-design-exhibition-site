import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Graduate from './pages/Graduate'
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/profile" render={(props) => <Graduate {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
