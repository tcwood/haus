const express = require('express');
const bodyParser = require('body-parser');
const getFeedback = require('./handlers/getFeedback');
const postLogin = require('./handlers/postLogin');
const postSignup = require('./handlers/postSignup');
const postCreate = require('./handlers/postCreate');

let users = {};
let feedback = {};

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/api/feedback', (req, res) => getFeedback(req, res, feedback));
app.post('/api/login', (req, res) => postLogin(req, res, users));
app.post('/api/signup', (req, res) => postSignup(req, res, users));
app.post('/api/create', (req, res) => postCreate(req, res, feedback));

app.listen(port, () => console.log(`Listening on port ${port}`));
