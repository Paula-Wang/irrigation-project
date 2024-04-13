import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon

const navItems = ['Home', 'About', 'Contact'];

const DrawerComponent = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon /> {/* Replace Menu with MenuIcon */}
      </IconButton>
    </div>
  );
};

export default DrawerComponent;
