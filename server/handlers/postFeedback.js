let feedbackId = 0;

module.exports = (req, res, feedback) => {
  const { userName, text } = req.body;
  const entity = {
    date: new Date(),
    id: `fb-${feedbackId}`,
    text,
    userName,
  };
  feedbackId++;

  if (feedback.hasOwnProperty(userName)) {
    feedback[userName].unshift(entity);
  } else {
    feedback[userName] = [entity];
  }
  res.send({ okay: true, entity, message: 'Feedback created' });
};
