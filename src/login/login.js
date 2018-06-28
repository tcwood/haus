import React, { Component } from 'react';
import sha1 from 'sha1';
import UserPass from './userPass';
import { post } from '../utils/http';

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

  sendUserInfo = async endpoint => {
    const { userName, password } = this.state;
    const hashedPassword = sha1(password + 'salty');
    const url = `/api/${endpoint}`;
    const body = JSON.stringify({
      userName,
      password: hashedPassword,
    });
    const { json } = await post(url, body);
    if (json.okay) {
      this.props.setLoginState(true);
      this.props.setUserName(json.userName);
      this.props.history.push('/create');
    } else {
      // TODO: trigger error modal here
      console.log('couldnt log in', json);
      this.resetInitialState();
    }
  };

  render() {
    return (
      <UserPass
        handleChange={this.handleChange}
        handleClickShowPassword={this.handleClickShowPassword}
        onLogin={() => this.sendUserInfo('login')}
        onSignup={() => this.sendUserInfo('signup')}
        password={this.state.password}
        showPassword={this.state.showPassword}
        userName={this.state.userName}
      />
    );
  }
}

export default Login;
