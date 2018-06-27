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

  onSignup = () => {
    this.sendNewUserInfo();
  };

  sendNewUserInfo = async () => {
    const { userName, password } = this.state;
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    });
    const string = await res.json();
  };

  render() {
    return (
      <UserPass
        handleChange={this.handleChange}
        handleClickShowPassword={this.handleClickShowPassword}
        onSignup={this.onSignup}
        password={this.state.password}
        showPassword={this.state.showPassword}
        userName={this.state.userName}
      />
    );
  }
}

export default Login;
