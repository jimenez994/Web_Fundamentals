import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'

const Header = () => {
  return (
    <div >
      <AppBar position="static" color="primary">
        <Toolbar >
          <Typography variant="title" color="inherit" >
            Exercice Database
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;