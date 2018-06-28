import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { get } from '../utils/http';

class History extends Component {
  state = {
    feedback: [],
  };

  componentDidMount() {
    this.fetchFeedback()
      .then(({ feedback }) => this.setState({ feedback }))
      .catch(err => console.log('Error!', err));
  }

  fetchFeedback = async () => {
    const { res, json } = await get(
      `/api/feedback?userName=${this.props.userName}`
    );
    if (res.status !== 200) {
      throw Error('Yikess! something went wrong>>>', json.message);
    }
    return json;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        {this.state.feedback.length === 0 ? (
          <Card className={classes.card}>
            <CardContent>
              <Typography color="textSecondary">
                Looks like you haven't submitted any feedback yet. Get started
                by clicking the create tab.
              </Typography>
            </CardContent>
          </Card>
        ) : (
          this.state.feedback.map(({ date, text, id, userName }) => {
            return (
              <Card key={id} className={classes.card}>
                <CardContent className={classes.card}>
                  <Typography color="textSecondary" paragraph={true}>
                    {text}
                  </Typography>
                  <Typography color="textSecondary">
                    {new Date(date).toDateString()}
                  </Typography>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: '80%',
  },
};

export default withStyles(styles)(History);
