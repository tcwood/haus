module.exports = (req, res, users) => {
  const { userName, password } = req.body;
  if (!users.hasOwnProperty(userName)) {
    res.send({ okay: false, message: `User doesn't exist` });
  } else if (users[userName].password !== password) {
    res.send({ okay: false, message: 'Incorrect password' });
  } else {
    res.send({ okay: true, userName, message: 'Successful login' });
  }
};
