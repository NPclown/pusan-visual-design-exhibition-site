import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
