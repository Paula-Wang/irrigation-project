import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar variant="dense">
        <Typography variant="body2" color="inherit" component="div">
          © 2024 - Developed with Material UI
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
