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

const styles = () => ({});

const userPass = ({
  handleChange,
  handleClickShowPassword,
  onSignup,
  password,
  showPassword,
  userName,
}) => (
  <div>
    <h1>Login</h1>
    <FormControl>
      <InputLabel>User Name</InputLabel>
      <Input value={userName} onChange={handleChange('userName')} />
    </FormControl>
    <FormControl>
      <InputLabel>Password</InputLabel>
      <Input
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
    <Button size="large" variant="contained" color="primary">
      Log in
    </Button>
    <Button onClick={onSignup} size="large" variant="contained" color="primary">
      Sign Up
    </Button>
  </div>
);

const { bool, func, string } = PropTypes;

userPass.propTypes = {
  handleChange: func.isRequired,
  handleClickShowPassword: func.isRequired,
  onSignup: func.isRequired,
  password: string.isRequired,
  showPassword: bool.isRequired,
  userName: string.isRequired,
};

export default withStyles(styles)(userPass);
