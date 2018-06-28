module.exports = (req, res, feedback) => {
  const { userName } = req.query;
  let userFeedback = [];
  if (feedback.hasOwnProperty(userName)) {
    userFeedback = feedback[userName];
  }
  res.send({ okay: true, feedback: userFeedback });
};
