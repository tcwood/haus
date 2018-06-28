import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Create from './create/create';
import Home from './home/home';
import Login from './login/login';
import PrivateRoute from './shared/privateRoute';
import View from './view/view';
import './App.css';

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
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
    return (
      <Router>
        <div className={classes.container}>
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

export default withStyles(styles)(App);
