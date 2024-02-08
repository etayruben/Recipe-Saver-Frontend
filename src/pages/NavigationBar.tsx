import React from 'react';
import { AppBar, Toolbar, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const NavigationBar: React.FC = () => {
    const { logout, isAuthenticated } = useAuth0();
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
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        {isAuthenticated ? <Button component={Link} to="/login" color="inherit" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </Button> : null}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;