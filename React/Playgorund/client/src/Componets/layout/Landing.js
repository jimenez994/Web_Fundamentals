import React from 'react';
import { Grid, Paper } from '@material-ui/core'


const Body = () => {
  const style = {
    gridItem: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 13,
      border: 0,
      color: 'white',
      height: 248,
      textAlign: 'center',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    // GridContent: {
    //   marginTop: '4px',
    //   paddingLeft: '5px',
    //   paddingRight: '5px',
    // }
  }
  return (
      <Grid container justify="center" spacing={8} style={style.GridContent} >
        <Grid item xs >
          <Paper  style={style.gridItem}>
            This is item one
          </Paper>
        </Grid>
        <Grid item xs >
          <Paper style={style.gridItem}>
            This is item one
          </Paper>
        </Grid>
      </Grid>

  );
};

export default Body;