import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  form: {
    width: '300px',
    maxWidth: '80%',
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
    '& .MuiButton-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={handleLogin}
        >
          Login with Auth0
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
