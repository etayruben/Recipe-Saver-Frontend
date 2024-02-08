import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecipesLoader from '../pages/Home/components/recipeLoader';
import AddRecipe from '../pages/AddRecipe/components/AddRecipe';
import ErrorPage from '../pages/Error/components/Errorpage';
import LoginPage from '../pages/Login/Login';
import PrivateRoutes from '../components/Common/ProtectedRoute';

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      
      <Route path='/login' Component={LoginPage} />
      <Route path="/error-page" Component={ErrorPage} />
      <Route Component={PrivateRoutes}>
        <Route path="/" Component={RecipesLoader} />
        <Route path="/add-recipe" Component={AddRecipe} />
      </Route>
      {/* <Route exact path="/about-me" component={AboutMe} /> */}
    </Routes>
  );
};

export default RoutesComponent;