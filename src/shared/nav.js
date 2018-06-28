import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Nav extends Component {
  state = {
    value: 0,
  };
  handleChange = (event, value) => {
    const { history, setLoginState } = this.props;
    this.setState({ value });
    if (value === 0) {
      history.push('/create');
    } else if (value === 1) {
      history.push('/history');
    } else if (value === 2) {
      setLoginState(false);
    }
  };
  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Create" />
        <Tab label="History" />
        <Tab label="Sign Out" />
      </Tabs>
    );
  }
}

export default withRouter(Nav);
