import React from 'react';
import { AppBar, Toolbar, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';


const NavigationBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
      <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Button component={Link} to="/add-recipe" color="inherit">
          Add Recipe
        </Button>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Button component={Link} to="/about-me" color="inherit">
          About Me
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;