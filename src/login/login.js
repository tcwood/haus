import React, { Component } from 'react';
import sha1 from 'sha1';
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
    this.sendUserInfo('signup');
  };

  onLogin = () => {
    this.sendUserInfo('login');
  };

  sendUserInfo = async endpoint => {
    const { userName, password } = this.state;
    const hashedPassword = sha1(password);
    const res = await fetch(`/api/${endpoint}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        password: hashedPassword,
      }),
    });
    const resJSON = await res.json();
    console.log('res in login.js:', resJSON);
  };

  render() {
    return (
      <UserPass
        handleChange={this.handleChange}
        handleClickShowPassword={this.handleClickShowPassword}
        onLogin={this.onLogin}
        onSignup={this.onSignup}
        password={this.state.password}
        showPassword={this.state.showPassword}
        userName={this.state.userName}
      />
    );
  }
}

export default Login;
