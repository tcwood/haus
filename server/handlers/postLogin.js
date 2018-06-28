module.exports = (req, res, users) => {
  const { userName, password } = req.body;
  if (!users.hasOwnProperty(userName)) {
    res.send({
      okay: false,
      message: `Error logging in. Make sure you spelled the username and password correctly.`,
    });
  } else if (users[userName].password !== password) {
    res.send({
      okay: false,
      message: `Error logging in. Make sure you spelled the username and password correctly.`,
    });
  } else {
    res.send({ okay: true, userName, message: 'Successful login' });
  }
};
