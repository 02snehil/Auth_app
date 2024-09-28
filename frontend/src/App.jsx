
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Landing from './components/Landing';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
