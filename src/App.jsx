// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import { Route,Router,Routes } from 'react-router-dom';
import AddBookForm from './components/Pages/AddBookPage';

function App() {
  return (
    // <Router>
        <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add" element={<AddBookForm />}/>
        </Routes>
    </div>
      // </Router>
  );
}

export default App;
