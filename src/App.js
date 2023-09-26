import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout'; // Import your Layout component

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
