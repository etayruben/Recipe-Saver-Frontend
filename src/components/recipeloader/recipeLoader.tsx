import React, { useEffect, useState } from 'react';
import { GET } from '../../services/api';
import Recipe from './recipe';
import { Grid } from '@mui/material';


interface RecipesProps {
  headline: string;
  link: string;
  imageRaw: string;
  categories: string[];
  workTime: number;
  id: number;
}

const RecipiesLoader: React.FC<any> = () =>  {
  const [recipes, setRecipes] = useState<RecipesProps[]>([]);

  useEffect(() => {
    const fetchRecipes = GET("loadRecipes")

    fetchRecipes.then((fetchedRecipes) => {
      setRecipes(fetchedRecipes);
    });
  }, []);

  return (
    <div>
      <h1>My Recipe App</h1>
      <Grid container spacing={2}>
        {recipes.map((recipe, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Recipe
              headline={recipe.headline}
              link={recipe.link}
              imageRaw={recipe.imageRaw}
              categories={recipe.categories}
              workTime={recipe.workTime}
              id={recipe.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RecipiesLoader;