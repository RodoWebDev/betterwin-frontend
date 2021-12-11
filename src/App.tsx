import React from 'react';
import { PublicRoutes } from './utils/routes';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <PublicRoutes />
    </Router>
  );
}

export default App;
