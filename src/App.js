import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Create from './create/create';
import Home from './home/home';
import Login from './login/login';
import PrivateRoute from './shared/privateRoute';
import View from './view/view';
import './App.css';

class App extends Component {
  state = {
    isLoggedIn: false,
    userName: null,
  };
  setLoginState = isLoggedIn => {
    this.setState({
      isLoggedIn,
    });
  };
  setUserName = userName => {
    this.setState({
      userName,
    });
  };
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
          <PrivateRoute
            path="/create"
            isLoggedIn={this.state.isLoggedIn}
            component={Create}
            userName={this.state.userName}
          />
          <PrivateRoute
            path="/view"
            isLoggedIn={this.state.isLoggedIn}
            component={View}
            userName={this.state.userName}
          />
          <Route
            path="/login"
            render={props => (
              <Login
                setLoginState={this.setLoginState}
                setUserName={this.setUserName}
                {...props}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
