import React from 'react';
import { GET, POST } from "./services/api"
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RecipiesLoader from './pages/Home/components/recipeLoader';
import NavigationBar from './pages/NavigationBar';
import RoutesComponent from './services/Routes';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <RecipiesLoader/>
      <RoutesComponent/>
    </BrowserRouter>
  );
}

export default App;
