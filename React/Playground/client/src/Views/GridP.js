import React from 'react';
import PropTypes from 'prop-types';
import {Paper, Grid, withStyles} from '@material-ui/core';

const styles = theme => ({
  GridContent: {
    margingTop: '4px',
    color: 'blue'
  }
  
})

const GridP = (props) =>  {
  const  {classes} = props
  return (
    <div>
      <Grid container className={classes.GridContent}>
        <Grid item >

        </Grid>
        hello 
      </Grid>
    </div>
  );
}
GridP.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(GridP);