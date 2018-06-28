import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { post } from '../utils/http';

const styles = () => ({
  container: {
    height: '70vh',
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  feedback: {
    height: 300,
  },
});

class Create extends Component {
  state = {
    text: '',
  };

  handleFeedbackChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  submitFeedback = async () => {
    const url = `/api/create`;
    const body = JSON.stringify({
      text: this.state.text,
      userName: this.props.userName,
    });

    const { json } = await post(url, body);
    if (json.okay) {
      this.props.history.push('/view');
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <h1>Create</h1>
        <TextField
          id="feedback"
          label="Enter Feedback"
          onChange={this.handleFeedbackChange}
          placeholder="Enter your feedback here"
          multiline
          margin="normal"
        />
        <Button
          onClick={this.submitFeedback}
          variant="contained"
          color="primary"
        >
          Submit Feedback
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Create);
