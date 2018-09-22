import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = () => {
  return (
    <div>
      <Paper>
        <Tabs 
          value={1}   
          indicatorColor="primary"
          textColor="primary"
          centered
          fullWidth
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three"  />
        </Tabs>
      </Paper>
    </div>
  );
};

export default Footer;