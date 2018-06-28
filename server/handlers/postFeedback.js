const shell = require('shelljs');
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
  const msg = `*Incoming User Feedback*\n_user_: ${userName}\n_text_: ${text}`;
  const header = `Content-type: application/json`;
  const url = `https://hooks.slack.com/services/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`;
  const curlCmd = `curl -X POST -H '${header}' --data '{"text": "${msg}"}' ${url}`;
  if (shell.exec(curlCmd).code !== 0) {
    console.log('Failed to send feedback text and userName to slack');
    console.log('userName:', userName);
    console.log('text:', text);
  }
  res.send({ okay: true, entity, message: 'Feedback created' });
};
