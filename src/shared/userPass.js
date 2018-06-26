import React from 'react';
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
  </div>
);

export default withStyles(styles)(userPass);
