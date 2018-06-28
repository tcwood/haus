import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Nav from './shared/nav';
import Create from './create/create';
import Home from './home/home';
import Login from './login/login';
import PrivateRoute from './shared/privateRoute';
import View from './view/view';
import './App.css';

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
          {isLoggedIn && <Nav />}
          <Route exact path="/" component={Home} />
          <PrivateRoute
            path="/create"
            isLoggedIn={isLoggedIn}
            component={Create}
            userName={userName}
          />
          <PrivateRoute
            path="/view"
            isLoggedIn={isLoggedIn}
            component={View}
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

export default withStyles(styles)(App);
