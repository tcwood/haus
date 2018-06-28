import React, { Component } from 'react';
import sha1 from 'sha1';
import UserPass from './userPass';
import { post } from '../utils/http';

class Login extends Component {
  state = {
    errorMessage: '',
    modalIsOpen: false,
    password: '',
    showPassword: false,
    userName: '',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleModalClose = () => {
    this.setState({
      modalIsOpen: false,
      errorMessage: '',
    });
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
      this.setState({
        userName: '',
        modalIsOpen: true,
        password: '',
        errorMessage: json.message,
      });
    }
  };

  render() {
    return (
      <UserPass
        errorMessage={this.state.errorMessage}
        handleChange={this.handleChange}
        handleModalClose={this.handleModalClose}
        handleClickShowPassword={this.handleClickShowPassword}
        modalIsOpen={this.state.modalIsOpen}
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
