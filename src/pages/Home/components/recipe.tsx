import React, { useState } from 'react';
import { Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import capitalizeWords from '../../../utils/utils';
import { removeRecipe } from '../../../services/api';

interface RecipeProps {
  headline: string;
  link: string;
  imageRaw: string;
  categories: string[];
  workTime: number;
  _id: string;
}

const Recipe: React.FC<RecipeProps> = ({ headline, link, imageRaw, categories, workTime, _id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCloseIconHovered, setIsCloseIconHovered] = useState(false);

  return (
    <Card onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ position: 'relative' }}>
      {isHovered && (
        <CloseIcon
          onMouseEnter={() => setIsCloseIconHovered(true)}
          onMouseLeave={() => setIsCloseIconHovered(false)}
          onClick={() => {
            removeRecipe(_id)
            location.reload();
          }}
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            zIndex: 1,
            color: isCloseIconHovered ? 'red' : 'inherit',
          }}
        />
      )}
      <CardContent>
        <Typography variant="h5" component="h2" textAlign="center">
          {capitalizeWords(headline)}
        </Typography>
        <CardMedia component="img" height="200" image={imageRaw} alt="Recipe Image" />
        <Typography variant="subtitle1" component="div" gutterBottom>
          Categories: {categories.length > 0 ? categories.join(', ') : 'No Category'}
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          Work Time: {workTime} minutes
        </Typography>
        <Typography variant="body2" component="div">
          <Button variant="contained" href={link} target="_blank" rel="noopener">
            Go to recipe
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Recipe;
