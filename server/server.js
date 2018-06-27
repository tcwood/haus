const express = require('express');
const bodyParser = require('body-parser');

let usersId = 0;
let users = {};

let feedbackId = 0;
let feedback = {};

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const sampleData = require('./sampleData.json');

app.get('/api/home', (req, res) => {
  res.send({ express: 'Hello World!' });
});

app.get('/api/feedback', (req, res) => {
  res.send({ feedback: sampleData });
});

app.post('/api/login', (req, res) => {
  const { userName, password } = req.body;
  if (!users.hasOwnProperty(userName)) {
    res.send({ okay: false, message: `User doesn't exist` });
  } else if (users[userName].password !== password) {
    res.send({ okay: false, message: 'Incorrect password' });
  } else {
    res.send({ okay: true, message: 'Successful login' });
  }
});

app.post('/api/signup', (req, res) => {
  const { userName, password } = req.body;
  if (users.hasOwnProperty(userName)) {
    res.send({ okay: false, message: 'User already exists' });
  } else {
    users[userName] = { password, id: usersId };
    usersId++;
    res.send({ okay: true, message: 'User created' });
  }
});

app.post('/api/create', (req, res) => {
  const { userName, feedback } = req.body;
  console.log('feedback in server.js:', feedback);
  if (feedback.hasOwnProperty(userName)) {
    feedback[userName].push(feedback);
  } else {
    feedback[userName] = [feedback];
  }

  res.send({ okay: true, message: 'Feedback created' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
