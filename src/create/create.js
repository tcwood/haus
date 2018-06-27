import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Create extends Component {
  state = {
    feedback: '',
  };

  handleFeedbackChange = e => {
    console.log('e.target.value in create.js:', e.target.value);
    this.setState({
      feedback: e.target.value,
    });
  };

  submitFeedback = async () => {
    const res = await fetch(`/api/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        feedback: this.state.feedback,
      }),
    });
    return await res.json();
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
