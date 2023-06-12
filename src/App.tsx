import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './pages/NavigationBar';
import RoutesComponent from './services/Routes';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <RoutesComponent/>
    </BrowserRouter>
  );
}

export default App;
