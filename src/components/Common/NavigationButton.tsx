import React from 'react';
import { Button } from '@mui/material';

interface NavigationButtonProps {
    
}

const MyButton: React.FC = () => {
  const handleClick = () => {
    // Handle button click event
  };

  return (
    <Button variant="contained" color="primary" size="medium" onClick={handleClick}>
      Click Me
    </Button>
  );
};

export default MyButton;