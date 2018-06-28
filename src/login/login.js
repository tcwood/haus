import React, { Component } from 'react';
import sha1 from 'sha1';
import UserPass from './userPass';

const initialState = {
  password: '',
  showPassword: false,
  userName: '',
};
class Login extends Component {
  state = initialState;

  resetInitialState = () => {
    this.setState(initialState);
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

  onSignup = async () => {
    const res = await this.sendUserInfo('signup');
    if (res.okay) {
      this.props.setLoginState(true);
      this.props.setUserName(res.userName);
      this.props.history.push('/create');
    } else {
      // TODO: trigger error modal here
      console.log('couldnt signup', res);
      this.resetInitialState();
    }
  };

  onLogin = async () => {
    const res = await this.sendUserInfo('login');
    console.log('res', res);
    if (res.okay) {
      this.props.setLoginState(true);
      this.props.setUserName(res.userName);
      this.props.history.push('/create');
    } else {
      // TODO: trigger error modal here
      console.log('couldnt log in', res);
      this.resetInitialState();
    }
  };

  sendUserInfo = async endpoint => {
    const { userName, password } = this.state;
    const hashedPassword = sha1(password + 'salty');
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
    return await res.json();
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
