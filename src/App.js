import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Nav from './shared/nav';
import Create from './create/create';
import Login from './login/login';
import PrivateRoute from './shared/privateRoute';
import History from './history/history';
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
    const { classes } = this.props;
    const { isLoggedIn, userName } = this.state;
    return (
      <Router>
        <div className={classes.container}>
          {isLoggedIn && <Nav setLoginState={this.setLoginState} />}
          <Route
            exact
            path="/"
            render={() =>
              isLoggedIn ? (
                <Redirect to={{ pathname: '/create' }} />
              ) : (
                <Redirect to={{ pathname: '/login' }} />
              )
            }
          />
          <PrivateRoute
            path="/create"
            isLoggedIn={isLoggedIn}
            component={Create}
            userName={userName}
          />
          <PrivateRoute
            path="/history"
            isLoggedIn={isLoggedIn}
            component={History}
            userName={userName}
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

const styles = {
  container: {
    height: '80%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 200,
  },
};

export default withStyles(styles)(App);
