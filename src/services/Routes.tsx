import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import RecipiesLoader from '../pages/Home/components/recipeLoader';
import AddRecipe from '../pages/AddRecipe/AddRecipe';
import ErrorPage from '../pages/Error/Errorpage';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" Component={RecipiesLoader} />
      <Route path="/add-recipe" Component={AddRecipe} />
      <Route path="/error-page" Component={ErrorPage} />
      
      {/* <Route exact path="/about-me" component={AboutMe} /> */}
    </Routes>
  );
};

export default RoutesComponent;