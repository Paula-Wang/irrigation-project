import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

const AppBarComponent = () => {
    return (
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Automated Irrigation System
            </Typography>
          </Toolbar>
        </AppBar>
    );
}

export default AppBarComponent;
