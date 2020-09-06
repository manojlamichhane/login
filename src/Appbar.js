import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  title:{
    flexGrow: 3,
  },
  login:{
    flexGrow: 1,
  },
  signup:{
    flexGrow: 1,
  },

}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to ="/" className ={classes.login} color="inherit">Home</Button>
          <Typography  variant="h6" className={classes.title}>
            APP
          </Typography>
          <Button component={Link} to ="/login" className ={classes.login} color="inherit">Login</Button>
          <Button component={Link} to ="/signup" className ={classes.signup} color="inherit">SignUp</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}