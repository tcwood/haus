import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { post } from '../utils/http';

const styles = () => ({
  container: {
    height: '70%',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  feedback: {
    height: '60%',
    width: '80%',
  },
  button: {},
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
      this.props.history.push('/history');
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <TextField
          id="feedback"
          className={classes.feedback}
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
