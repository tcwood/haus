import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { get } from '../utils/http';

const styles = {};

class View extends Component {
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
    return (
      <div>
        <h1>View</h1>
        {this.state.feedback &&
          this.state.feedback.map(({ date, text, id, userName }) => {
            return (
              <Card key={id}>
                <CardContent>
                  <Typography color="textSecondary">{userName}</Typography>
                  <Typography color="textSecondary" paragraph={true}>
                    {text}
                  </Typography>
                  <Typography color="textSecondary">
                    {new Date(date).toDateString()}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
      </div>
    );
  }
}
export default withStyles(styles)(View);
