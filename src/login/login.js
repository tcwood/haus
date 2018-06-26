import React, { Component } from 'react';
import UserPass from '../shared/userPass';

class Login extends Component {
  state = {
    password: '',
    showPassword: false,
    userName: '',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    return (
      <UserPass
        handleChange={this.handleChange}
        handleClickShowPassword={this.handleClickShowPassword}
        userName={this.state.userName}
        password={this.state.password}
        showPassword={this.state.showPassword}
      />
    );
  }
}

export default Login;
