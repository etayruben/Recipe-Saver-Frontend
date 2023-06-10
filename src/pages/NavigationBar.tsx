import React from 'react';
import { AppBar, Toolbar, Typography, Divider } from '@mui/material';

const NavigationBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div">
          Home
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Typography variant="h6" component="div">
          Add Recipe
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Typography variant="h6" component="div">
          About Me
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;