import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { post } from '../utils/http';

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

    const { res } = await post(url, body);
    return res;
  };

  render() {
    return (
      <div>
        <h1>Create</h1>
        <TextField
          id="feedback"
          label="Feedback"
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

export default Create;
