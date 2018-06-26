import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Create = () => (
  <div>
    <h1>Create</h1>
    <TextField
      id="feedback"
      label="Feedback"
      placeholder="Enter your feedback here"
      multiline
      margin="normal"
    />
    <Button variant="contained" color="primary">
      Submit Feedback
    </Button>
  </div>
);

export default Create;
