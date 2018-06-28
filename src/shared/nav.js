import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    props.history.listen(({ pathname }) => {
      if (pathname === '/create') {
        this.setActiveTab(0);
      } else if (pathname === '/history') {
        this.setActiveTab(1);
      }
    });
  }
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
  setActiveTab = value => {
    this.setState({
      value,
    });
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
