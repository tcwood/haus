import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Create from './create/create';
import Home from './home/home';
import Login from './login/login';
import View from './view/view';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/view">View</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/view" component={View} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
