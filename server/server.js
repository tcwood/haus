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
  const { userName } = req.query;
  const userFeedback = feedback[userName];
  res.send({ okay: true, feedback: userFeedback });
});

app.post('/api/login', (req, res) => {
  const { userName, password } = req.body;
  if (!users.hasOwnProperty(userName)) {
    res.send({ okay: false, message: `User doesn't exist` });
  } else if (users[userName].password !== password) {
    res.send({ okay: false, message: 'Incorrect password' });
  } else {
    res.send({ okay: true, userName, message: 'Successful login' });
  }
});

app.post('/api/signup', (req, res) => {
  const { userName, password } = req.body;

  if (users.hasOwnProperty(userName)) {
    res.send({ okay: false, message: 'User already exists' });
  } else {
    const id = `u-${usersId}`;
    usersId++;
    users[userName] = { password, id };
    res.send({ okay: true, userName, id, message: 'User created' });
  }
});

app.post('/api/create', (req, res) => {
  const { userName, text } = req.body;
  const entity = {
    date: new Date(),
    id: `fb-${feedbackId}`,
    text,
    userName,
  };
  feedbackId++;

  if (feedback.hasOwnProperty(userName)) {
    feedback[userName].push(entity);
  } else {
    feedback[userName] = [entity];
  }
  res.send({ okay: true, entity, message: 'Feedback created' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
