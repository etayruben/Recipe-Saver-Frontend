import React, { useEffect, useState } from 'react';
import { loadRecipes } from '../../../services/api';
import Recipe from './recipe';
import { Grid } from '@mui/material';

interface RecipesProps {
  headline: string;
  link: string;
  imageRaw: string;
  categories: string[];
  workTime: number;
  _id: string;
}

const RecipesLoader: React.FC<any> = () =>  {
  const [recipes, setRecipes] = useState<RecipesProps[]>([]);

  useEffect(() => {
    const fetchRecipes = loadRecipes({}, {})

    fetchRecipes.then((fetchedRecipes: React.SetStateAction<RecipesProps[]>) => {
      setRecipes(fetchedRecipes);
    });
  }, []);
  return (
    <div>
      <h1>Reciepe Saver</h1>
      <Grid container spacing={2}>
        {recipes.map(recipe => (
          <Grid key={recipe._id} item xs={12} sm={6} md={4} lg={3}>
            <Recipe
              headline={recipe.headline}
              link={recipe.link}
              imageRaw={recipe.imageRaw}
              categories={recipe.categories}
              workTime={recipe.workTime}
              _id={recipe._id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RecipesLoader;