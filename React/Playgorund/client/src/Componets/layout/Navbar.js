import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import {  Button, IconButton } from '@material-ui/core'
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    color: 'white',
    '&:hover': {
      color: 'white'
    }
  },
})
const Navbar = (props) => {
  const {classes} = props
  return (
      <AppBar position="static">
        <Toolbar >
          <Button component={Link} to="/" className={classes.button}>
              Exercice Database   
          </Button>
          <Button component={Link} to="/material-ui">
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>
  );
};
//   ***** need to learn of how proptypes are being use here
// Navbar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


export default withStyles(styles)(Navbar);