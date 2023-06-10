import React from 'react';
import { GET, POST } from "./services/api"
import './App.css';
import MyComponent from './components/recipeloader/recipeLoader';
import NavigationBar from './components/NavigationBar';

const App:React.FC = () => {
  return (
    <div>
      <NavigationBar/>
      <MyComponent/>
    </div>
  );
}

export default App;
