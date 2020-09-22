import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.css'; 
import './App.css';
import { AppRouter } from '../Routes/AppRouter';
import { userContext } from '../Context/UserContext';

function App() {

  
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
