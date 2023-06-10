import React from 'react';
import { Typography, Link, Card, CardMedia, CardContent, List, ListItem, Box } from '@mui/material';

interface RecipeProps {
  headline: string;
  link: string;
  imageRaw: string;
  categories: string[];
  workTime: number;
  id: number;
}

const Recipe: React.FC<RecipeProps> = ({ headline, link, imageRaw, categories, workTime, id }) => {
    return (
        <Card>
          <CardContent>
              <Typography variant="h5" component="h2" textAlign="center">
                {headline}
              </Typography>
            <CardMedia component="img" height="200" image={imageRaw} alt="Recipe Image" />
            <Typography variant="subtitle1" component="div" gutterBottom>
              Categories: {categories.join(', ')}
            </Typography>
            <Typography variant="body1" component="div" gutterBottom>
              Work Time: {workTime} minutes
            </Typography>
            <Typography variant="body2" component="div">
              <Link href={link} target="_blank" rel="noopener">
                Go to recipe
              </Link>
            </Typography>
          </CardContent>
        </Card>
      );
};

export default Recipe;