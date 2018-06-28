import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const handleMouseDownPassword = event => {
  event.preventDefault();
};

const styles = {
  container: {
    width: 300,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  textField: {
    width: 300,
    margin: '30px 0',
  },
  button: {
    margin: '10px 0',
    width: '40%',
  },
};

const userPass = ({
  classes,
  handleChange,
  handleClickShowPassword,
  onLogin,
  onSignup,
  password,
  showPassword,
  userName,
}) => {
  return (
    <div className={classes.container}>
      <h1>Login</h1>
      <FormControl>
        <InputLabel>User Name</InputLabel>
        <Input
          className={classes.textField}
          value={userName}
          onChange={handleChange('userName')}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Password</InputLabel>
        <Input
          className={classes.textField}
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <div className={classes.buttonContainer}>
        <Button
          className={classes.button}
          onClick={onLogin}
          size="large"
          variant="contained"
          color="primary"
        >
          Log in
        </Button>
        <Button
          className={classes.button}
          onClick={onSignup}
          size="large"
          variant="contained"
          color="primary"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

const { bool, func, string } = PropTypes;

userPass.propTypes = {
  handleChange: func.isRequired,
  handleClickShowPassword: func.isRequired,
  onLogin: func.isRequired,
  onSignup: func.isRequired,
  password: string.isRequired,
  showPassword: bool.isRequired,
  userName: string.isRequired,
};

export default withStyles(styles)(userPass);
