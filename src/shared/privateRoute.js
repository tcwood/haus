import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  userName,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} userName={userName} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

export default PrivateRoute;
