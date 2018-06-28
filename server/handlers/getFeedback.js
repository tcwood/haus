module.exports = (req, res, feedback) => {
  const { userName } = req.query;
  const userFeedback = feedback[userName];
  res.send({ okay: true, feedback: userFeedback });
};
