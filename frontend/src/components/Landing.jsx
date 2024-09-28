import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import backgroundImage from '../assets/landing.jpg';

const Landing = () => {
  return (
    <div
      className="flex flex-col mt-0.5 items-center justify-center w-full min-h-screen  bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <div className="bg-white bg-opacity-80 p-8  rounded-lg shadow-md w-full max-w-md min-h-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to MERN Auth App</h1>
        <p className="text-gray-700 mb-6">An example MERN stack application with user authentication.</p>
        <div className="space-y-4">
          <Link
            to="/signup"
            className="bg-blue-600 text-white py-2 px-4 mb-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
          >
            <FaUserPlus />
            <span>Sign Up</span>
          </Link>
          <Link
            to="/login"
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center space-x-2"
          >
            <FaSignInAlt />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
