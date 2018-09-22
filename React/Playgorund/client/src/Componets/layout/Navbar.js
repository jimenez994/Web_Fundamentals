import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div >
      <AppBar position="static" color="primary">
        <Toolbar >
          <Typography variant="title" color="inherit" >
            Exercice Database   
          </Typography>
          <Link className="nav-link" to="/material-ui">
            Dashboard
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;