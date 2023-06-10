import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecipiesLoader from '../pages/Home/components/recipeLoader';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" Component={RecipiesLoader} />
      {/* <Route path="/add-recipe" Component={AddRecipe} /> */}
      {/* <Route exact path="/about-me" component={AboutMe} /> */}
    </Routes>
  );
};

export default RoutesComponent;