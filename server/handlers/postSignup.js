let userId = 0;

module.exports = (req, res, users) => {
  const { userName, password } = req.body;

  if (users.hasOwnProperty(userName)) {
    res.send({ okay: false, message: 'User already exists' });
  } else {
    const id = `u-${userId}`;
    userId++;
    users[userName] = { password, id };
    res.send({ okay: true, userName, id, message: 'User created' });
  }
};
