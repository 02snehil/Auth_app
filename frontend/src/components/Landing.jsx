// src/components/Landing.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to MERN Auth App</h1>
        <p className="text-gray-700 mb-6">An example MERN stack application with user authentication.</p>
        <div className="space-x-4">
          <Link to="/signup" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Sign Up
          </Link>
          <Link to="/login" className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
