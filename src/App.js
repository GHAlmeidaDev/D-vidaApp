import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Landing'
import Dashboard from './Dashboard'

class App extends Component {
  render() {
    return (
    <Router>
        <div>
        
          <Switch>
              <Route exact path='/' component={Landing} />
              <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;