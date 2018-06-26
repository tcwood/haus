import React from 'react';
import fakeData from './sampleData.json';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const View = () => (
  <div>
    <h1>View</h1>
    {fakeData.map(({ date, feedback, id, userName }) => {
      return (
        <Card key={id}>
          <CardContent>
            <Typography color="textSecondary">{userName}</Typography>
            <Typography color="textSecondary" paragraph={true}>
              {feedback}
            </Typography>
            <Typography color="textSecondary">{date}</Typography>
          </CardContent>
        </Card>
      );
    })}
  </div>
);

export default withStyles(styles)(View);
